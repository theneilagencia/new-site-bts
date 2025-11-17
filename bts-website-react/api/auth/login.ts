import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import { comparePassword, generateToken, hashPassword } from '../lib/auth';
import { success, error } from '../lib/response';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type DemoUserConfig = {
  email: string;
  password: string;
  role: 'partner' | 'admin';
  name: string;
  company?: string;
};

const toLowerCase = (value: string) => value.trim().toLowerCase();

const demoUsers: DemoUserConfig[] = [
  {
    email: toLowerCase(process.env.DEMO_PARTNER_EMAIL || process.env.VITE_DEMO_PARTNER_EMAIL || 'parceiro@demo.com'),
    password: process.env.DEMO_PARTNER_PASSWORD || process.env.VITE_DEMO_PARTNER_PASSWORD || 'demo123',
    role: 'partner',
    name: 'Parceiro Demo',
    company: 'BTS Global Corp',
  },
  {
    email: toLowerCase(process.env.DEMO_LEGACY_PARTNER_EMAIL || 'elcio@bts.com'),
    password: process.env.DEMO_LEGACY_PARTNER_PASSWORD || 'partner123',
    role: 'partner',
    name: 'Elcio (Parceiro)',
    company: 'BTS Global Corp',
  },
  {
    email: toLowerCase(process.env.DEMO_ADMIN_EMAIL || process.env.VITE_DEMO_ADMIN_EMAIL || 'admin@btsglobal.com'),
    password: process.env.DEMO_ADMIN_PASSWORD || process.env.VITE_DEMO_ADMIN_PASSWORD || 'admin123',
    role: 'admin',
    name: 'Administrador Demo',
    company: 'BTS Global Corp',
  },
  {
    email: toLowerCase(process.env.DEMO_SUPERADMIN_EMAIL || 'admin@btsglobalcorp.com'),
    password: process.env.DEMO_SUPERADMIN_PASSWORD || 'BtS@13112025',
    role: 'admin',
    name: 'Super Admin',
    company: 'BTS Global Corp',
  },
].filter((demo) => demo.email && demo.password);

function findDemoUser(email: string, password: string): DemoUserConfig | null {
  const normalizedEmail = toLowerCase(email);
  return (
    demoUsers.find(
      (demo) => demo.email === normalizedEmail && demo.password === password
    ) || null
  );
}

async function upsertDemoUser(demo: DemoUserConfig) {
  const hashedPassword = await hashPassword(demo.password);
  const existing = await prisma.user.findFirst({
    where: {
      email: {
        equals: demo.email,
        mode: 'insensitive',
      },
    },
  });

  if (existing) {
    return prisma.user.update({
      where: { id: existing.id },
      data: {
        email: demo.email,
        password: hashedPassword,
        role: demo.role,
        name: demo.name,
        company: demo.company ?? existing.company,
        status: 'active',
      },
    });
  }

  return prisma.user.create({
    data: {
      email: demo.email,
      password: hashedPassword,
      role: demo.role,
      name: demo.name,
      company: demo.company ?? 'BTS Global Corp',
      status: 'active',
    },
  });
}

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
      const normalizedEmail = toLowerCase(body.email);

      let user = await prisma.user.findFirst({
        where: {
          email: {
            equals: normalizedEmail,
            mode: 'insensitive',
          },
        },
      });

      const demoMatch = findDemoUser(normalizedEmail, body.password);

      if (!user && demoMatch) {
        user = await upsertDemoUser(demoMatch);
      }

      if (!user) {
        return error(res, 'Invalid credentials', 401);
      }

      let isValid = await comparePassword(body.password, user.password);

      if (!isValid && demoMatch) {
        user = await upsertDemoUser(demoMatch);
        isValid = await comparePassword(body.password, user.password);
      }

      if (!isValid) {
        return error(res, 'Invalid credentials', 401);
      }

      if (user.status === 'inactive') {
        return error(res, 'Account disabled', 403);
      }

    // Generate token
    const token = generateToken({
      userId: user.id,
        email: user.email.toLowerCase(),
      role: user.role,
    });

    return success(res, {
      token,
      user: {
        id: user.id,
          email: user.email.toLowerCase(),
        name: user.name,
        role: user.role,
        company: user.company,
        phone: user.phone,
          status: user.status,
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
