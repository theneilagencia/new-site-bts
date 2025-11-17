import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../../lib/db';
import { requireAdmin } from '../../../lib/auth';
import { success, error, notFound } from '../../../lib/response';
import { z } from 'zod';

const updateUserSchema = z
  .object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    role: z.enum(['partner', 'admin']).optional(),
    company: z.string().optional(),
    phone: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });

function sanitizeUser(user: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = user;
  return rest;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    requireAdmin(req);
  } catch (err) {
    return error(res, 'Unauthorized', 401);
  }

  const { id } = req.query;
  const userId = Array.isArray(id) ? id[0] : id;

  if (!userId) {
    return error(res, 'User ID is required', 400);
  }

  if (req.method === 'PUT') {
    try {
      const body = updateUserSchema.parse(req.body);

      if (body.email) {
        const existing = await prisma.user.findFirst({
          where: {
            email: {
              equals: body.email.trim().toLowerCase(),
              mode: 'insensitive',
            },
            NOT: {
              id: userId,
            },
          },
        });

        if (existing) {
          return error(res, 'Email already registered', 400);
        }
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          ...body,
          email: body.email ? body.email.trim().toLowerCase() : undefined,
        },
      });

      return success(res, sanitizeUser(updatedUser));
    } catch (err: any) {
      console.error('Update user error:', err);
      if (err instanceof z.ZodError) {
        return error(res, err.errors[0].message, 400);
      }
      if (err.code === 'P2025') {
        return notFound(res, 'User not found');
      }
      return error(res, 'Failed to update user', 500);
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.user.delete({
        where: { id: userId },
      });
      return success(res, { deleted: true });
    } catch (err: any) {
      console.error('Delete user error:', err);
      if (err.code === 'P2025') {
        return notFound(res, 'User not found');
      }
      return error(res, 'Failed to delete user', 500);
    }
  }

  return error(res, 'Method not allowed', 405);
}
