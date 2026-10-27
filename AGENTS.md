# AGENTS.md

## Commands
- `npm run dev` - Start dev server (Next.js)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint (flat config, uses `eslint-config-next`)

## Stack / Quirks
- **Next.js 16.4.2**, React 19.3.0, TypeScript strict, Tailwind CSS v4 (PostCSS via `@tailwindcss/postcss`)
- App Router under `src/app/`; path alias `@/*` -> `./src/*`
- `next.config.ts` enables `cacheComponents: true` and `partialPrefetching: true` (non-default; verify behavior if touching caching)
- ESLint flat config (`eslint.config.mjs`) extends `next/core-web-vitals` + `next/typescript`, ignores `.next/`, `out/`, `build/`, `next-env.d.ts`

## Structure
- `src/app/layout.tsx`, `src/app/page.tsx` - app shell/root page
- `src/app/api/` - API routes (Route Handlers)
- `src/app/globals.css` - global styles
- Integrations present: `googleapis`, `razorpay`, `three` (+ `@types/three`) - expect related routes/utilities under `src/app/api/` or feature code under `src/`

## Notes
- Node types `@types/node@^20`; use `@/*` imports consistently
- When editing, follow Next.js App Router conventions (Server/Client Components) - no repo-specific lint rules override defaults beyond the flat config above
- Build artifacts in `.next/` (gitignored implicitly by typical Next ignores; not listed but standard)
