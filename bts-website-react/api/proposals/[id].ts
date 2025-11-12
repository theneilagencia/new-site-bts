import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { requireAuth } from '../lib/auth';
import { success, error, unauthorized, forbidden, notFound } from '../lib/response';
import { z } from 'zod';

const updateProposalSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected']).optional(),
  notes: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const proposalId = req.query.id as string;

  try {
    const authUser = requireAuth(req);

    // GET - Get single proposal
    if (req.method === 'GET') {
      const proposal = await prisma.proposal.findUnique({
        where: { id: proposalId },
        include: {
          user: {
            select: {
              name: true,
              email: true,
              company: true,
            },
          },
        },
      });

      if (!proposal) {
        return notFound(res, 'Proposal not found');
      }

      // Check authorization
      if (authUser.role !== 'admin' && proposal.userId !== authUser.userId) {
        return forbidden(res);
      }

      return success(res, proposal);
    }

    // PUT - Update proposal
    if (req.method === 'PUT') {
      const body = updateProposalSchema.parse(req.body);

      const proposal = await prisma.proposal.findUnique({
        where: { id: proposalId },
      });

      if (!proposal) {
        return notFound(res, 'Proposal not found');
      }

      // Only admin can change status
      if (body.status && authUser.role !== 'admin') {
        return forbidden(res, 'Only admins can change proposal status');
      }

      // Check authorization for other updates
      if (authUser.role !== 'admin' && proposal.userId !== authUser.userId) {
        return forbidden(res);
      }

      const updated = await prisma.proposal.update({
        where: { id: proposalId },
        data: body,
      });

      return success(res, updated);
    }

    // DELETE - Delete proposal
    if (req.method === 'DELETE') {
      const proposal = await prisma.proposal.findUnique({
        where: { id: proposalId },
      });

      if (!proposal) {
        return notFound(res, 'Proposal not found');
      }

      // Check authorization
      if (authUser.role !== 'admin' && proposal.userId !== authUser.userId) {
        return forbidden(res);
      }

      await prisma.proposal.delete({
        where: { id: proposalId },
      });

      return success(res, { message: 'Proposal deleted' });
    }

    return error(res, 'Method not allowed', 405);
  } catch (err: any) {
    console.error('Proposal operation error:', err);
    
    if (err.message === 'Unauthorized') {
      return unauthorized(res);
    }
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }
    
    return error(res, 'Operation failed', 500);
  }
}
