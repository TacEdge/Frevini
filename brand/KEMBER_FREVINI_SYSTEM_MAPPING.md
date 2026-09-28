# Kember Interiors — Frevini System Mapping

**Version 1.0 · September 2026**

How the Frevini Studio design system (v1.1) was transferred to Kember Interiors. This mapping was completed before the Kember guidelines were written; every rule in `KEMBER_INTERIORS_BRAND_GUIDELINES.md` and `kember-design-tokens.json` traces back to a row here.

Classification:

- **RETAIN** — used unchanged.
- **ADAPT** — the principle stays, the execution changes for Kember.
- **NOT APPLICABLE** — specific to Frevini; does not transfer.
- **KEMBER-SPECIFIC** — a new rule required by Kember's product or technical content.

Provenance of the resulting Kember rule: **A** exact Kember · **B** existing Kember · **C** transferred from Frevini · **D** Kember adaptation.

---

## 1. Principle

| Frevini | Kember | Class | Rule |
|---|---|---|---|
| "One dark green does all the work." | One deep umber does all the work. | ADAPT | Same philosophy, Kember's own colour. (D) |
| Serif as signature; sans for everything else; nothing bold in the standard hierarchy. | Identical. | RETAIN | (C) |
| Whitespace is structural; ~40 % open field in editorial and presentation layouts; technical pages may be denser. | Identical. Kember produces more technical pages, so the technical clause matters more. | RETAIN | (C) |
| Photography supplies the colour the palette withholds. | Identical, with American oak as the subject. | RETAIN | (C) |
| Built not Branded. | Not used. Kember's line: "American oak. Engineered for stability." | NOT APPLICABLE | Frevini's statement is Frevini's. (D) |

## 2. Typography

| Frevini | Kember | Class | Rule |
|---|---|---|---|
| Marcellus (400) for display, headings, navigation, quotes, key numbers | Identical | RETAIN | Shared typography is intentional. (C) |
| DM Sans 300 / 400 / 500; SemiBold for key numbers ≥ 24 pt; Bold outside the standard hierarchy | Identical | RETAIN | (C) |
| A4 and 16:9 scale (Display 48/66 … Technical 7/10) | Identical | RETAIN | (C) |
| Fallbacks: Palatino Linotype / Book Antiqua / Georgia; Aptos / Segoe UI / Helvetica Neue / Arial | Identical | RETAIN | (C) |
| — | Montserrat, the current kemberfloors.com face, is not used | KEMBER-SPECIFIC | Existing Kember typography (B) is replaced. (D) |
| — | Metric first; imperial in brackets on first mention in technical documents | KEMBER-SPECIFIC | Kember's source data is imperial; the NZ market is metric. (D) |

## 3. Colour

| Frevini | Kember | Class | Rule |
|---|---|---|---|
| Frevini Green #253C1B — the one brand colour, carries all text | Kember Umber #312011 — the one brand colour, carries all text | ADAPT | Umber is the dark oak field already used on kemberfloors.com (B), tested against the existing blue, the existing navy and a neutral charcoal. (D) |
| Warm White #FAF5EB | Oak White #F6F1E9 | ADAPT | Same role; a slightly cooler, oak-derived white so the two brands' fields are not identical. (D) |
| White | White | RETAIN | (C) |
| Olive #8B9770 — utility, from the green | Kember Slate #8A8F94 — utility, from the existing wordmark grey #AEB3B7 darkened to 3.3 : 1 | ADAPT | Keeps a thread to the existing mark; used for icons, badges and second chart series only. (D) |
| Green tints 60 / 20 / 8 | Umber tints 60 / 20 / 8 (#837970 #D6D2CF #EFEDEC) | ADAPT | Same derivation from the primary. (D) |
| Timber neutrals (European oak) | American oak neutrals sampled from Kember floors (#DCD3C8 #BCAA9B #A68E77 #887057 #46382E) | ADAPT | Same role: chart series and diagram fills only. (D) |
| Black overlay 30–45 % | Identical | RETAIN | Replaces the brown-tinted overlays on the current site. (C) |
| — | Kember Blue #2E90D0 retired from all NZ material; permitted only as the legacy link colour on kemberfloors.com | KEMBER-SPECIFIC | Fails text contrast (3.5 : 1), reads as technology, not timber. (D) |
| Core / Utility / Overlay tiers | Identical | RETAIN | (C) |

## 4. Logo

| Frevini | Kember | Class | Rule |
|---|---|---|---|
| Framed wordmark with tail | KEMBER wordmark retained; no frame | NOT APPLICABLE | The frame and tail are Frevini's mark. |
| — | Lock-up KEMBER / INTERIORS; "kreative interiors" retired for NZ | KEMBER-SPECIFIC | INTERIORS in DM Sans Medium, +0.22 em, right-aligned to the wordmark, matching the placement of the existing tagline. (D) |
| Colour: green or white only | Umber or white only; the grey and blue of the current mark are not used | ADAPT | Existing grey fails contrast at 2.1 : 1. (D) |
| Clear space = tail height | Clear space = half the wordmark height | ADAPT | No tail to measure from. (D) |
| Min 28 mm / 120 px | Min 30 mm / 130 px lock-up; 22 mm / 96 px wordmark alone | ADAPT | The lock-up carries small text. (D) |
| Top-left at the margin; covers, title and closing slides, posters only; footer text on interior pages | Identical, plus product sheets | RETAIN | (C) |
| Prohibited treatments | Identical, plus "kreative interiors" | RETAIN | (C/D) |
| Master artwork governs; SVG is a reconstruction | Identical | RETAIN | (C) |

## 5. Grid, spacing, layout

| Frevini | Kember | Class |
|---|---|---|
| A4 portrait 22 / 20 / 24 / 20 mm, 12 columns, 4 mm gutters, footer at 12 mm | Identical | RETAIN (C) |
| A4 landscape 20 mm, 12 columns | Identical | RETAIN (C) |
| 16:9 safe margins 72 / 96 px, 12 columns, 24 px gutters, title and body zones, footer at y 1016 | Identical | RETAIN (C) |
| Posters 5 % margins, 6 columns, logo 12 % of short edge, three zones | Identical | RETAIN (C) |
| Spacing XS–XXL 2 / 4 / 8 / 12 / 24 / 40 mm | Identical | RETAIN (C) |
| Footer "Document title · Frevini Studio" | "Document title · Kember Interiors" | ADAPT (D) |
| Left-aligned, square corners, no boxes or shadows | Identical | RETAIN (C) |

## 6. Photography

| Frevini | Kember | Class | Rule |
|---|---|---|---|
| Categories: Architecture, Detail, Material/process, Human | Architecture, Material, Engineering, Making, Application | ADAPT | Kember's construction and its floor/wall/ceiling applications need their own categories. (D) |
| Natural light, warm-neutral balance, restrained saturation, level horizontals, quiet edge for type, square corners, one hero | Identical | RETAIN | (C) |
| Text on imagery: white over 30–45 % black | Identical | RETAIN | (C) |
| Do not use: stock lifestyle, HDR, filters, collages, cut-outs | Identical, plus: blue grading, brown-tinted overlays, renders as photographs, rounded cards and circular buttons from the current site | ADAPT | (D) |
| Oak forest and leaf imagery | Not used | NOT APPLICABLE | Frevini's provenance imagery. |
| — | A Kember photography commission is required; current assets are captures of kemberfloors.com | KEMBER-SPECIFIC | (D) |

## 7. Graphic devices

| Frevini | Kember | Class |
|---|---|---|
| CTA rule 1 pt, label width, XS below baseline | Identical in umber | RETAIN (C) |
| Section rule 0.5 pt tint-20; table rules 0.75 / 0.35 pt; horizontal only | Identical | RETAIN (C) |
| Arrow → after the label | Identical | RETAIN (C) |
| Thin-line icons, 24 grid, 1.5 stroke; utility colour on warm field | Identical; Slate on Oak White | RETAIN (C) |
| Button, digital only, 48 px, no radius | Identical | RETAIN (C) |
| No shapes | The section device is the single exception | ADAPT (D) |
| — | **Section device**: three bands in 4 : 11 : 4, core grain perpendicular, 0.75 pt umber, oak-neutral fills when explaining; engineering pages, datasheets, product sheets and slides only; once per face, ≤ 40 mm; never a pattern, background or logo element | KEMBER-SPECIFIC (D) |

## 8. Document system

| Frevini | Kember | Class |
|---|---|---|
| Covers: image-led, editorial, technical | Identical anatomy | RETAIN (C) |
| Internal pages: section opener, text, text + image, full image, technical/data, quote, closing | Identical, plus **product** and **engineering** pages | ADAPT (D) |
| Slides: title, divider, statement, text, text + image, full image, data, closing | Identical, plus **product** and **engineering** slides | ADAPT (D) |
| Posters / one-pagers | Identical; product launch, colour launch, engineering proposition and specifier posters differ only in leading image and statement | RETAIN (C) |
| — | Product collateral: product sheet, colour card, technical datasheet, sample information, specification sheet | KEMBER-SPECIFIC (D) |
| — | Availability labels in eyebrow style: AVAILABLE IN NEW ZEALAND / KEMBER CAPABILITY | KEMBER-SPECIFIC (D) |

## 9. Information design

| Frevini | Kember | Class |
|---|---|---|
| Tables: horizontal rules only, units in the value, no Office styles | Identical | RETAIN (C) |
| Charts: ≤ 4 series in brand order, flat bars, direct labels, axis dropped | Identical; order umber, slate, oak mid, oak deep | ADAPT (D) |
| Diagrams: 0.75 pt lines, neutral fills for material layers | Identical; the board cross-section becomes the section device | ADAPT (D) |
| Specifications, callouts, key numbers, captions, footnotes, metadata, revision table | Identical | RETAIN (C) |
| Technical-data disclaimer | Kember wording: "Product information shown in this guide demonstrates information hierarchy and layout. Current technical data must always be sourced from the applicable Kember technical documentation." | ADAPT (D) |
| — | Standard for three-layer construction, dimensions, performance, installation, colour ranges and product comparison | KEMBER-SPECIFIC (D) |

## 10. Voice

| Frevini | Kember | Class |
|---|---|---|
| Short statement + sentence of proof; specific beats superlative; assured not salesy; NZ English; address the specifier as a peer | Identical | RETAIN (C) |
| Frevini's lines and examples | Kember's own working expression, provisional until positioning is complete: "American oak. Engineered for stability." | ADAPT (D) |
| — | Remove US promotional language ("transform your living spaces", "gorgeous for years", "industry leading") without altering technical meaning | KEMBER-SPECIFIC (D) |
| — | Say what Kember says; where Kember publishes no figure, say nothing | KEMBER-SPECIFIC (D) |

## 11. Governance

| Frevini | Kember | Class |
|---|---|---|
| The Frevini Test (8 questions) | The Kember Test (10 questions), adding technical-care and "consistent with Frevini without being mistaken for it" | ADAPT (D) |
| Provenance A / B / C | Provenance A / B / C / D | ADAPT (D) |
| Issue checklist | Identical, with lock-up and availability-label items | ADAPT (D) |

---

## Summary

- **Retained unchanged:** typography, type scale, fallbacks, grids, margins, spacing, footer logic, rules, arrow, icons, button, cover and slide anatomies, table and chart standards, voice principles, whitespace and serif rules, overlay, colour tiering.
- **Adapted:** primary colour, warm field, utility colour, tints, timber neutrals, logo rules, photography categories, page and slide set (product, engineering), chart series order, disclaimer wording, governance test.
- **Not applicable:** Frevini's framed mark, its statement lines, its provenance imagery.
- **Kember-specific:** the lock-up, the retirement of blue and "kreative interiors", metric-first units, the section device, availability labels, product collateral set, the product information system, the rule that presentation is governed here and technical claims by approved documentation, the photography commission.
- **Deliberately not decided here:** the master-brand positioning and the identity of the New Zealand flooring product (E3plank or PrimeOak Flooring). Both belong to the positioning and product-architecture document and feed back into V1.2.
