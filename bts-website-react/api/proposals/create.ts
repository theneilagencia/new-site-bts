import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { requireAuth } from '../lib/auth';
import { success, error, unauthorized } from '../lib/response';
import { z } from 'zod';

const createProposalSchema = z.object({
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(8),
  structureId: z.string(),
  structureName: z.string(),
  quantity: z.number().int().positive(),
  unitPrice: z.number().positive(),
  totalPrice: z.number().positive(),
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
    const body = createProposalSchema.parse(req.body);

    const proposal = await prisma.proposal.create({
      data: {
        userId: authUser.userId,
        clientName: body.clientName,
        clientEmail: body.clientEmail,
        clientPhone: body.clientPhone,
        structureId: body.structureId,
        structureName: body.structureName,
        quantity: body.quantity,
        unitPrice: body.unitPrice,
        totalPrice: body.totalPrice,
        status: 'pending',
      },
    });

    return success(res, proposal, 201);
  } catch (err: any) {
    console.error('Create proposal error:', err);
    
    if (err.message === 'Unauthorized') {
      return unauthorized(res);
    }
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }
    
    return error(res, 'Failed to create proposal', 500);
  }
}
