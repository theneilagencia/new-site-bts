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

const SYSTEM_PROMPT = `You are an AI assistant for BTS Global Corp, a company specializing in modular construction technology.

Your role is to help with:
1. Partnership inquiries and applications
2. Pricing information for structures
3. Technical specifications
4. General support

Available structures and prices:
- Residencial Geminado Semi-acabado: $240,000 (Semi-finished townhouse)
- Residencial Isolado Semi-acabado: $270,000 (Semi-finished detached house)
- Residencial Isolado Acabado: $330,000 (Finished detached house)
- Comercial Flex 50m²: $95,000 (50m² commercial space)
- Comercial Flex 100m²: $145,000 (100m² commercial space)
- Industrial Galpão: $380,000 (Industrial warehouse)

Partnership benefits:
- Up to 20% commission on sales
- Dedicated account manager
- Marketing materials and support
- Technical training
- Lead generation assistance

Always be professional, helpful, and encourage users to:
- Become partners if interested in selling
- Request detailed proposals through the portal
- Schedule demos for technical details

Respond in the same language as the user (Portuguese or English).`;

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
