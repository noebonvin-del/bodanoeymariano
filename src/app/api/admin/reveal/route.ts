import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthed } from "@/lib/auth";
import { getRevealState } from "@/lib/reveal";

export async function GET() {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const state = await getRevealState();
  return NextResponse.json(state);
}

type Action =
  | { action: "schedule"; scheduledAt: string }
  | { action: "clearSchedule" }
  | { action: "revealNow" }
  | { action: "unreveal" };

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as Action | null;
  if (!body?.action) {
    return NextResponse.json({ error: "Missing action" }, { status: 400 });
  }

  if (body.action === "schedule") {
    const date = new Date(body.scheduledAt);
    if (Number.isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }
    await prisma.revealSettings.upsert({
      where: { id: 1 },
      create: { id: 1, scheduledAt: date },
      update: { scheduledAt: date },
    });
  } else if (body.action === "clearSchedule") {
    await prisma.revealSettings.upsert({
      where: { id: 1 },
      create: { id: 1, scheduledAt: null },
      update: { scheduledAt: null },
    });
  } else if (body.action === "revealNow") {
    await prisma.revealSettings.upsert({
      where: { id: 1 },
      create: { id: 1, revealedAt: new Date() },
      update: { revealedAt: new Date() },
    });
  } else if (body.action === "unreveal") {
    // Undo button for a mis-click: clears manual reveal. If a scheduled
    // time has already passed, the gallery flips back on regardless.
    await prisma.revealSettings.upsert({
      where: { id: 1 },
      create: { id: 1, revealedAt: null },
      update: { revealedAt: null },
    });
  } else {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  const state = await getRevealState();
  return NextResponse.json(state);
}
