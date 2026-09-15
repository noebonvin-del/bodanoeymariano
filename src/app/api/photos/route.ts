import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const MAX_NAME_LENGTH = 60;

/**
 * Records metadata for a photo the guest's browser has already uploaded
 * directly to Cloudinary (unsigned upload). This endpoint never returns
 * any existing photo — it's write-only from the guest's point of view,
 * which is what keeps the "hidden until reveal" rule intact.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.url !== "string" || typeof body.publicId !== "string") {
    return NextResponse.json({ error: "Missing url or publicId" }, { status: 400 });
  }

  const url: string = body.url;
  const publicId: string = body.publicId;
  const width = Number.isFinite(body.width) ? Math.round(body.width) : null;
  const height = Number.isFinite(body.height) ? Math.round(body.height) : null;

  let guestName: string | null = null;
  if (typeof body.guestName === "string") {
    const trimmed = body.guestName.trim();
    if (trimmed.length > 0) {
      guestName = trimmed.slice(0, MAX_NAME_LENGTH);
    }
  }

  if (!/^https:\/\/res\.cloudinary\.com\//.test(url)) {
    return NextResponse.json({ error: "Invalid photo URL" }, { status: 400 });
  }

  const photo = await prisma.photo.create({
    data: { url, publicId, width, height, guestName },
    select: { id: true },
  });

  return NextResponse.json({ ok: true, id: photo.id });
}
