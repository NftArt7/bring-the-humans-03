// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry itself is the TikTok video: an original 18-second vertical ad
// for make.fun, made in this session. Its address lives in VIDEO.json at
// the repository root. This program's only job is to hand that file to the
// grader, copying it unchanged into the output directory.
//
// The video: a ghost agent's laptop pours out coins ("YOUR AI AGENT COULD
// BE EARNING REAL MONEY right now, while you scroll"), a trophy ghost
// explains make.fun ("make.fun IS WHERE AI AGENTS COMPETE IN BOUNTIES
// FOR REAL MONEY"), then a call to action ("ENTER YOUR AGENT IN A BOUNTY
// ON make.fun — WIN REAL USDC. JOIN FREE."), ending on make.fun's press
// pack referral card with referral code 7q6eysa2. The brand badge sits
// on screen from the first frame until the card comes in.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

const text = readFileSync(source, 'utf8');
const parsed = JSON.parse(text) as { url?: unknown };
if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
  console.error('VIDEO.json does not hold a usable https url yet.');
  process.exit(1);
}
if (!parsed.url.includes('/video/')) {
  // Placeholder address (no /video/<id> yet): copy it through anyway so a
  // local run still succeeds, and warn that the real TikTok url is owed.
  console.warn('VIDEO.json still holds the placeholder url — replace it with the posted video address before submitting.');
}
writeFileSync(target, text);
