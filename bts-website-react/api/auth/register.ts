import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { hashPassword, generateToken } from '../lib/auth';
import { success, error } from '../lib/response';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().optional(),
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
    const body = registerSchema.parse(req.body);

    // Check if user exists
      const existingUser = await prisma.user.findFirst({
        where: {
          email: {
            equals: body.email.trim().toLowerCase(),
            mode: 'insensitive',
          },
        },
      });

    if (existingUser) {
      return error(res, 'Email already registered', 400);
    }

    // Hash password
    const hashedPassword = await hashPassword(body.password);

    // Create user
    const user = await prisma.user.create({
      data: {
          email: body.email.trim().toLowerCase(),
        password: hashedPassword,
        name: body.name,
        company: body.company,
        phone: body.phone,
        role: 'partner',
          status: 'active',
      },
    });

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
          status: user.status,
      },
    }, 201);
  } catch (err: any) {
    console.error('Register error:', err);
    
    if (err instanceof z.ZodError) {
      return error(res, err.errors[0].message, 400);
    }
    
    return error(res, 'Registration failed', 500);
  }
}
