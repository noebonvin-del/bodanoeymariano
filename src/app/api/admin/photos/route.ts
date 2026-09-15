import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthed } from "@/lib/auth";

export async function GET() {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const photos = await prisma.photo.findMany({
    orderBy: { createdAt: "desc" },
  });

  const total = photos.length;
  const visible = photos.filter((p) => p.status === "VISIBLE").length;

  return NextResponse.json({ photos, total, visible, hidden: total - visible });
}

export const dynamic = "force-dynamic";
