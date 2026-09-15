import { prisma } from "./prisma";

export type RevealState = {
  isRevealed: boolean;
  scheduledAt: Date | null;
  revealedAt: Date | null;
};

/**
 * Reveal condition = manual reveal already triggered OR scheduled time has passed.
 * Always recomputed live against the current clock — never cached — so a scheduled
 * reveal flips on for every visitor at the same instant without needing a cron job.
 */
export async function getRevealState(): Promise<RevealState> {
  const settings = await prisma.revealSettings.findUnique({ where: { id: 1 } });

  const scheduledAt = settings?.scheduledAt ?? null;
  const revealedAt = settings?.revealedAt ?? null;

  const isRevealed =
    revealedAt !== null || (scheduledAt !== null && scheduledAt.getTime() <= Date.now());

  return { isRevealed, scheduledAt, revealedAt };
}
