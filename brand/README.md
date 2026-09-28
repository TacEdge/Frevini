# Frevini Studio — Brand

| File | Purpose |
|---|---|
| `Frevini-Studio-Brand-Guidelines.pdf` | The visual Brand Guidelines (8 pages, A4). Built from `src/guidelines.html`; the guide obeys the system it defines. |
| `FREVINI_BRAND_GUIDELINES.md` | Canonical, machine-readable guidelines: character, logo, colour, typography, grid, document and slide archetypes, graphic language, photography, voice, information design, governance and provenance. |
| `frevini-design-tokens.json` | Reusable values: colours, type scale, spacing, page and slide grids, rules, icon and logo rules, document formats. |
| `assets/` | Fonts, logo, icons, reference imagery and site captures. See `assets/README.md`. |
| `src/` | HTML source and build script for the PDF. |

## Rebuilding the PDF

```
cd brand/src
NODE_PATH=$(npm root -g) node build-pdf.js
```

Requires Node with the `playwright` package and a Chromium build it can launch. Fonts are loaded from `assets/fonts`, so nothing needs to be installed system-wide.

## Precedence

If the site's stylesheet, the official logo master or a printed swatch disagrees with a value here, the source wins. Correct the Markdown, the tokens file and the HTML together and re-issue the PDF with a new version number.
