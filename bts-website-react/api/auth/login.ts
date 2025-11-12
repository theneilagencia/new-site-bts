import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { comparePassword, generateToken } from '../lib/auth';
import { success, error } from '../lib/response';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
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
    const body = loginSchema.parse(req.body);

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return error(res, 'Invalid credentials', 401);
    }

    // Check password
    const isValid = await comparePassword(body.password, user.password);

    if (!isValid) {
      return error(res, 'Invalid credentials', 401);
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return success(res, {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        company: user.company,
        phone: user.phone,
      },
    });
  } catch (err: any) {
    console.error('Login error:', err);
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }
    
    return error(res, 'Login failed', 500);
  }
}
