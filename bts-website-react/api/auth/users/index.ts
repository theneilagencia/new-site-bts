import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../lib/db';
import { requireAdmin, hashPassword } from '../../lib/auth';
import { success, error } from '../../lib/response';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['partner', 'admin']).default('partner'),
  company: z.string().optional(),
  phone: z.string().optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

function sanitizeUser(user: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = user;
  return rest;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const authUser = requireAdmin(req);
    if (!authUser) {
      return error(res, 'Admin access required', 403);
    }
  } catch (err) {
    return error(res, 'Unauthorized', 401);
  }

  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          status: true,
          company: true,
          phone: true,
          createdAt: true,
        },
      });

      return success(res, users);
    } catch (err) {
      console.error('List users error:', err);
      return error(res, 'Failed to list users', 500);
    }
  }

  if (req.method === 'POST') {
    try {
      const body = createUserSchema.parse(req.body);
      const normalizedEmail = body.email.trim().toLowerCase();

      const existing = await prisma.user.findFirst({
        where: {
          email: {
            equals: normalizedEmail,
            mode: 'insensitive',
          },
        },
      });

      if (existing) {
        return error(res, 'Email already registered', 400);
      }

      const hashedPassword = await hashPassword(body.password);

      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: normalizedEmail,
          password: hashedPassword,
          role: body.role,
          company: body.company,
          phone: body.phone,
          status: body.status ?? 'active',
        },
      });

      return success(res, sanitizeUser(user), 201);
    } catch (err: any) {
      console.error('Create user error:', err);
      if (err instanceof z.ZodError) {
        return error(res, err.errors[0].message, 400);
      }
      return error(res, 'Failed to create user', 500);
    }
  }

  return error(res, 'Method not allowed', 405);
}
