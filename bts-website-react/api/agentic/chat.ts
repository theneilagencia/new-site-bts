import { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';
import { prisma } from '../lib/db';
import { getAuthUser } from '../lib/auth';
import { success, error } from '../lib/response';
import { z } from 'zod';

const chatSchema = z.object({
  message: z.string().min(1),
  sessionId: z.string().optional(),
  context: z.object({
    page: z.string().optional(),
    intent: z.enum(['general', 'partnership', 'pricing', 'support']).optional(),
  }).optional(),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant for BTS Global Corp, a global wealth structuring platform that provides digital offshore entities, foundations, and blockchain-verified trust infrastructure.

Your role is to help with:
1. Partnership inquiries and partner program applications
2. Information about wealth structuring solutions
3. Compliance, privacy, and security questions
4. General support about digital offshore structures

## Available Solutions:

**Digital Offshore**
- 100% digital legal entity, co-designed with regulators
- Blockchain-auditable infrastructure
- For entrepreneurs, investors, and families
- Benefits: Tax efficiency, structural privacy, global wealth mobility
- Ideal for: Asset protection, international operations, investment holdings

**Digital Foundation**
- Hybrid foundation headquartered in the US
- Combines corporate flexibility with fiduciary permanence
- For holdings, family offices, and succession planning
- Benefits: Automated governance, institutional credibility
- Ideal for: Multi-generational wealth preservation, philanthropic structures

**BTS BlockTrust**
- Private auditable network for document validation
- Real-time verification of signatures and events
- Cryptographic proof of ownership
- Benefits: Verifiable transparency, selective privacy
- Ideal for: Identity management, compliance documentation

## Partnership Program:

**Benefits for Certified Partners:**
- Competitive recurring commissions on each structure created
- Exclusive digital offshore entity for your own business
- Use your structure to receive commissions, invoice internationally
- Priority access to new products and structures
- Professional marketing materials and technical documentation
- Dedicated support and ongoing training
- Automated compliance reporting

**Accreditation Process:**
- Careful evaluation for compliance alignment
- Values: Transparency, operational excellence, integrity
- Once approved: Full platform access + your own offshore structure

## Key Differentiators:

**One-Way Mirror of Trust™**
- Blockchain layer for verifiable transparency
- Full visibility for the owner
- Zero exposure to third parties
- Instant cryptographic proof of ownership

**Global Compliance:**
- Co-designed with regulators
- Multi-jurisdictional operation capability
- Tax efficiency with legal certainty
- Privacy by design, verified by proof

## Communication Guidelines:

1. **Always be professional, consultative, and educational**
2. **Emphasize compliance, transparency, and security**
3. **Encourage users to:**
   - Become partners if interested in scaling their advisory business
   - Request detailed proposals through the Partner Portal
   - Schedule consultations for personalized structuring
   - Access the Partner Area for full platform features

4. **Respond in the same language as the user** (Portuguese or English)
5. **Never provide legal or tax advice** - always recommend consulting with qualified professionals
6. **Focus on the technology and infrastructure** BTS provides, not specific tax strategies

7. **If asked about specific jurisdictions:** Explain that BTS operates globally and can advise on the best jurisdiction based on the client's unique situation and goals.

8. **If asked about pricing:** Explain that pricing is customized based on structure complexity, jurisdiction, and ongoing maintenance needs. Encourage them to access the Partner Portal or request a detailed proposal.

Remember: BTS is about **digital sovereignty, privacy, and global freedom** - not just tax optimization. We're building the trust infrastructure for a borderless world.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return error(res, 'Method not allowed', 405);
  }

  try {
    const body = chatSchema.parse(req.body);
    const authUser = getAuthUser(req);

    // Get or create session
    let sessionId = body.sessionId;
    let conversation;

    if (sessionId) {
      conversation = await prisma.agenticConversation.findUnique({
        where: { sessionId },
      });
    }

    if (!conversation) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      conversation = await prisma.agenticConversation.create({
        data: {
          sessionId,
          userId: authUser?.userId,
          messages: [],
          context: body.context || {},
        },
      });
    }

    // Get conversation history
    const messages = conversation.messages as any[];

    // Add user message
    messages.push({
      role: 'user',
      content: body.message,
      timestamp: new Date().toISOString(),
    });

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-10).map((m: any) => ({ // Keep last 10 messages for context
          role: m.role,
          content: m.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0].message.content;

    // Add assistant message
    messages.push({
      role: 'assistant',
      content: assistantMessage,
      timestamp: new Date().toISOString(),
    });

    // Update conversation
    await prisma.agenticConversation.update({
      where: { sessionId },
      data: {
        messages,
        updatedAt: new Date(),
      },
    });

    return success(res, {
      sessionId,
      message: assistantMessage,
      context: body.context,
    });
  } catch (err: any) {
    console.error('Chat error:', err);
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }

    if (err.message?.includes('API key')) {
      return error(res, 'OpenAI API not configured', 503);
    }
    
    return error(res, 'Chat failed', 500);
  }
}
