# Brand systems

Two brands, one design standard. Frevini Studio is the source system; Kember Interiors applies it to its own name, colour, material and engineering story.

## Frevini Studio

| File | Purpose |
|---|---|
| `Frevini-Studio-Brand-Guidelines.pdf` | Visual Brand Guidelines v1.1 (8 pages, A4). Built from `src/guidelines.html`. |
| `FREVINI_BRAND_GUIDELINES.md` | Canonical, machine-readable guidelines with provenance (A/B/C). |
| `frevini-design-tokens.json` | Colours, type scale, spacing, grids, rules, icon, logo and document tokens. |
| `assets/` | Fonts (shared), logo, icons, reference imagery, site captures. See `assets/README.md`. |

## Kember Interiors

| File | Purpose |
|---|---|
| `Kember-Interiors-Brand-Guidelines.pdf` | Visual Brand Guidelines v1.1 (9 pages, A4). Built from `src/kember-guidelines.html`. |
| `KEMBER_INTERIORS_BRAND_GUIDELINES.md` | Canonical guidelines with provenance (A/B/C/D), unresolved source conflicts and open decisions. |
| `KEMBER_FREVINI_SYSTEM_MAPPING.md` | Every Frevini rule classified: retained, adapted, not applicable, or Kember-specific. |
| `kember-design-tokens.json` | Kember tokens; inherits the Frevini typography, spacing and grid values and states them in full. |
| `assets/kember/` | Lock-up and wordmark, recoloured icons, reference imagery, site captures, PrimeOak catalogue and swatches. See `assets/kember/README.md`. |

## Kember Interiors — positioning (precedes Guidelines V1.2)

| File | Purpose |
|---|---|
| `KEMBER_NZ_POSITIONING_AND_PRODUCT_ARCHITECTURE.md` | Draft 1.0 for decision: evidence from the PrimeOak Signature catalogue, E3plank / PrimeOak reconciliation, brand-relationship options, positioning territories, product architecture, decisions register. |
| `Kember-NZ-Positioning-and-Product-Architecture.pdf` | The same as an 8-page A4 document in the Kember system, built from `src/kember-positioning.html` with `src/build-any.js`. |

## Rebuilding the PDFs

```
cd brand/src
NODE_PATH=$(npm root -g) node build-pdf.js          # Frevini
NODE_PATH=$(npm root -g) node build-kember-pdf.js   # Kember
```

Requires Node with the `playwright` package and a Chromium build it can launch. Fonts load from `assets/fonts`; nothing needs installing system-wide.

## Precedence

If a site stylesheet, an official logo master, a printed swatch or an official technical document disagrees with a value here, the source wins. Correct the Markdown, the tokens file and the HTML together and re-issue the PDF with a new version number. Product information in either guide is illustrative; technical data is always sourced from the brand's own current documentation.
