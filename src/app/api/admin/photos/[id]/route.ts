import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthed } from "@/lib/auth";
import { cloudinary } from "@/lib/cloudinary";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json().catch(() => null);
  if (body?.status !== "VISIBLE" && body?.status !== "HIDDEN") {
    return NextResponse.json({ error: "status must be VISIBLE or HIDDEN" }, { status: 400 });
  }

  const photo = await prisma.photo.update({
    where: { id },
    data: { status: body.status },
  });

  return NextResponse.json({ photo });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const photo = await prisma.photo.findUnique({ where: { id } });
  if (!photo) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await prisma.photo.delete({ where: { id } });

  try {
    await cloudinary.uploader.destroy(photo.publicId);
  } catch {
    // DB row is already gone, which is what keeps it out of the gallery;
    // an orphaned Cloudinary asset costs nothing to leave behind.
  }

  return NextResponse.json({ ok: true });
}
