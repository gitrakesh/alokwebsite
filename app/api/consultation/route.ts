import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  company: z.string().min(2),
  projectType: z.string().min(2),
  budget: z.string().min(2),
  timeline: z.string().min(2),
  services: z.string().min(2),
  description: z.string().min(10),
  preferredContact: z.string().min(2)
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  return NextResponse.json({ ok: true, booking: { ...parsed.data, createdAt: new Date().toISOString() } });
}
