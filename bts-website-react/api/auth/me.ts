import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { requireAuth } from '../lib/auth';
import { success, error, unauthorized } from '../lib/response';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return error(res, 'Method not allowed', 405);
  }

  try {
    const authUser = requireAuth(req);

    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        company: true,
        phone: true,
        city: true,
        state: true,
          status: true,
        createdAt: true,
      },
    });

    if (!user) {
      return unauthorized(res, 'User not found');
    }

    return success(res, user);
  } catch (err: any) {
    console.error('Get user error:', err);
    
    if (err.message === 'Unauthorized') {
      return unauthorized(res);
    }
    
    return error(res, 'Failed to get user', 500);
  }
}
