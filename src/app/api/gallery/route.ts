import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getRevealState } from "@/lib/reveal";

/**
 * The one rule this whole app exists to enforce: photo data is only ever
 * included in the response body when isRevealed is true. This is checked
 * fresh on every request (no caching), so there is no window where an
 * unauthenticated client can fetch photos before the reveal moment.
 */
export async function GET() {
  const state = await getRevealState();

  if (!state.isRevealed) {
    return NextResponse.json({
      isRevealed: false,
      scheduledAt: state.scheduledAt,
      photos: [],
    });
  }

  const photos = await prisma.photo.findMany({
    where: { status: "VISIBLE" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      url: true,
      publicId: true,
      width: true,
      height: true,
      guestName: true,
      createdAt: true,
    },
  });

  return NextResponse.json({
    isRevealed: true,
    scheduledAt: state.scheduledAt,
    photos,
  });
}

export const dynamic = "force-dynamic";
