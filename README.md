# האתר של ד״ר שרה אוחיון

אתר סטטי בעברית (RTL), בנוי ב-[Astro](https://astro.build) ומתפרסם ב-Cloudflare Pages.

## מבנה

| קובץ | מה יש בו |
|---|---|
| `src/content/*.html` | התוכן של כל עמוד (טקסטים, תמונות, קישורים) |
| `src/pages/` | הנתיבים: `/`, `/research/phd/`, `/research/herring/`, `/research/bat-galim/`, `/conservation/`, `/services/` |
| `src/components/Header.astro`, `Footer.astro` | התפריט העליון והפוטר המשותפים |
| `src/layouts/Base.astro` | מסגרת העמוד, תגיות SEO וקרוסלת התמונות |
| `src/styles/global.css` | צבעים, פונטים והתאמה לטלפון |
| `public/images/` | התמונות, מוקטנות לרשת |

## הרצה מקומית

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # בונה לתיקייה dist/
```

## Cloudflare Pages

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

<!-- deploy: Cloudflare Workers (static assets), see wrangler.jsonc -->
