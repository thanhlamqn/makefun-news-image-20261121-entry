# The World in One Page — Saturday 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up the world news of Saturday 21 November 2026: a
newspaper front page with seven stories, each reported that day.

- **Lead — The Gulf:** Iran strikes US bases in Bahrain — the IRGC says it
  hit two Patriot radars at al-Riffa and Awali; Bahrain says an industrial
  site was hit and caught fire, with no injuries.
- **Mexico — Sinaloa:** "El Chapo Isidro" captured — Mexican special forces
  seize FBI Top 10 fugitive Fausto Isidro Meza Flores in Guasave; 11 killed
  in the gunfight, flaming cartel roadblocks across the state.
- **Ukraine — Kryvyi Rih:** A Russian "triple-tap" strike kills a 7-year-old
  boy and a 20-year-old paramedic and wounds 60, hitting rescuers as they
  arrived.
- **Climate — Antalya:** COP31 runs into overtime, deadlocked over a draft
  deal that drops every mention of fossil fuels; 130+ nations demand the
  language back.
- **Markets — New York:** Wall Street falls into correction — the S&P 500
  drops 3.7% and the Dow 950 points on Friday, both now more than 10% below
  their peaks; the Nasdaq wipes out its gains for the year.
- **Crypto — Bitcoin:** Bitcoin bounces 9% off a two-year low — down to
  $55,130, its lowest since September 2024, then back above $60,000.
- **Space — Mercury:** BepiColombo reaches Mercury after eight years — only
  the second mission ever to orbit the innermost planet.

Every story is cited with its reporting in SOURCES.md.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks `entry.png` is a PNG
under the 1 MiB gate limit and copies it to `/output/entry.png`. Both of the
grader's runs write the same bytes.
