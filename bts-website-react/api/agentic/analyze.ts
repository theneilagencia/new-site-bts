import { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';
import { requireAuth } from '../lib/auth';
import { success, error, unauthorized } from '../lib/response';
import { z } from 'zod';

const analyzeSchema = z.object({
  type: z.enum(['proposal', 'client', 'market']),
  data: z.any(),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    const authUser = requireAuth(req);
    const body = analyzeSchema.parse(req.body);

    let prompt = '';

    switch (body.type) {
      case 'proposal':
        prompt = `Analyze this construction proposal and provide insights:
        
${JSON.stringify(body.data, null, 2)}

Provide:
1. Risk assessment (low/medium/high)
2. Profit margin analysis
3. Market competitiveness
4. Recommendations for optimization
5. Potential objections and how to overcome them

Format as JSON with these keys: risk, profitMargin, competitiveness, recommendations, objections`;
        break;

      case 'client':
        prompt = `Analyze this client profile and provide sales strategy:
        
${JSON.stringify(body.data, null, 2)}

Provide:
1. Client type classification
2. Buying signals
3. Best approach strategy
4. Recommended products
5. Follow-up timing

Format as JSON with these keys: clientType, buyingSignals, strategy, recommendedProducts, followUp`;
        break;

      case 'market':
        prompt = `Analyze this market data and provide strategic insights:
        
${JSON.stringify(body.data, null, 2)}

Provide:
1. Market trends
2. Competitive positioning
3. Pricing recommendations
4. Growth opportunities
5. Risk factors

Format as JSON with these keys: trends, positioning, pricing, opportunities, risks`;
        break;
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are an expert business analyst for the construction industry. Provide detailed, actionable insights in JSON format.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    });

    const analysis = JSON.parse(completion.choices[0].message.content || '{}');

    return success(res, {
      type: body.type,
      analysis,
      generatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('Analysis error:', err);
    
    if (err.message === 'Unauthorized') {
      return unauthorized(res);
    }
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }

    if (err.message?.includes('API key')) {
      return error(res, 'OpenAI API not configured', 503);
    }
    
    return error(res, 'Analysis failed', 500);
  }
}
