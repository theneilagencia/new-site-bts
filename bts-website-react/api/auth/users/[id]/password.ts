import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../../../lib/db';
import { requireAdmin, hashPassword } from '../../../../lib/auth';
import { success, error, notFound } from '../../../../lib/response';
import { z } from 'zod';

const resetPasswordSchema = z.object({
  password: z.string().min(6),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PATCH, OPTIONS');
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

  if (req.method !== 'PATCH') {
    return error(res, 'Method not allowed', 405);
  }

  try {
    const { password } = resetPasswordSchema.parse(req.body);
    const hashedPassword = await hashPassword(password);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return success(res, { updated: true });
  } catch (err: any) {
    console.error('Reset password error:', err);
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }
    if (err.code === 'P2025') {
      return notFound(res, 'User not found');
    }
    return error(res, 'Failed to reset password', 500);
  }
}
