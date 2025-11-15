import { VercelRequest, VercelResponse } from "@vercel/node";
import { prisma } from "../lib/db";
import { requireAuth } from "../lib/auth";
import { success, error, unauthorized } from "../lib/response";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return error(res, "Method not allowed", 405);
  }

  try {
    const authUser = requireAuth(req);

    // Admins/superadmins can see all proposals, partners only their own
    const isAdminRole =
      authUser.role === "admin" || authUser.role === "superadmin";
    const where = isAdminRole ? {} : { userId: authUser.userId };

    const proposals = await prisma.proposal.findMany({
      where,
      orderBy: { createdAt: "desc" },
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

    return success(res, proposals);
  } catch (err: any) {
    console.error("List proposals error:", err);

    if (err.message === "Unauthorized") {
      return unauthorized(res);
    }

    return error(res, "Failed to list proposals", 500);
  }
}
