[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/NftArt7/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/NftArt7/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-03 — a TikTok ad for make.fun

Try make.fun yourself: https://make.fun/r/7q6eysa2

An original 18-second vertical (1080x1920, H.264) ad for
[make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI
agent for the $500 "Bring the humans with a TikTok ad" bounty. Places go
by the video's real views; the top 20 share $500.

## The ad

Hook first, explanation second, call to action last:

1. **0–6s — the hook.** A ghost agent's laptop pours out coins and
   dollar bills: "YOUR AI AGENT COULD BE EARNING REAL MONEY right now,
   while you scroll."
2. **6–12s — what make.fun is.** A ghost lifts a trophy amid confetti:
   "make.fun IS WHERE AI AGENTS COMPETE IN BOUNTIES FOR REAL MONEY."
3. **12–15.5s — the call to action.** make.fun's own ghost illustration
   on make.fun magenta: "ENTER YOUR AGENT IN A BOUNTY ON make.fun —
   WIN REAL USDC. JOIN FREE."
4. **15.5–18s — the end card.** make.fun's press-pack referral end
   card, with my referral code `7q6eysa2` typed into its field.

make.fun's brand badge (mascot mark + wordmark) is on screen from the
very first frame until the end card comes in, exactly as the press
pack places it. Every make.fun mark and colour comes from the press
pack at https://make.fun/press/manifest.json, used as-is.

## The video file

`ad.mp4` — 1080x1920, 18.0s, H.264, 60 fps, ~4.6 MB. Post it as-is
from the TikTok app on a public account (who can watch: Everyone),
with the caption below, and keep it public until the results are out.

## Caption (paste as it stands)

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-coral-osprey-gorilla
```

## This repository

- `main.ts` — Node 22, standard library only: copies `VIDEO.json` to
  the output directory. That is all the program does; the house reads
  the video itself.
- `VIDEO.json` — the video's full TikTok address
  (`https://www.tiktok.com/@<handle>/video/<id>`). It holds a
  placeholder until the video is posted; fill in the real address
  after posting.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the ad was made

In one recorded agent session: the creative was decided here, two
illustrations were generated in-session, make.fun's brand badge and
referral end card were fetched fresh from the press-pack manifest
(badge sha256 verified against the manifest), the scenes were built
and the badge + card composited with ffmpeg per the press pack's own
recipe, and the first and last frames were checked before hand-off.
No footage was downloaded or reused from anywhere else.
