# WITH — Zone 4 Can Tho Real Estate Platform

A single Vite/TanStack Start codebase hosting three public-facing sites and a role-gated internal portal for a real-estate investor-relations and brokerage business ("WITH", Zone 4 Can Tho).

## Surfaces

| Surface | Route | Description |
| --- | --- | --- |
| **IR Homepage** | `/` | Investor-relations site for WITH — company overview, project details, contact. |
| **With Property** | `/with-property` | Brokerage micro-site for buyers, renters, and investors. |
| **WITH Care** | `/employee-care` | Relocation-concierge micro-site for expat employees of contracted companies (housing, paperwork, healthcare, schooling support). |
| **Portal** | `/portal/*`, `/care/*` | Role-gated internal dashboards — two independent auth systems: a real-estate portal (`investor` / `admin` / `staff`) and a WITH Care portal (`employee` / `staff` / `admin`). |

Each surface is independently reachable and scopes its own theme (colors, fonts) so they can coexist without visual bleed.

## Stack

- **React 19** + **TanStack Start** + **TanStack Router** — file-based routing
- **Vite 8**, **TypeScript** (strict mode)
- **Tailwind CSS v4** — theme tokens defined in CSS (`src/styles.css`), no `tailwind.config.js`
- **shadcn/ui** (`new-york` style) component primitives
- **react-hook-form** + **zod** for form validation
- **framer-motion** for animation
- **lucide-react** icons, **sonner** toasts, **recharts** charts

There is no backend or database — all data is mock, in-memory React context per domain (investor/admin/staff activity, care requests, etc.). Forms validate and show a success state; nothing persists across a reload.

## Getting started

Package manager: **bun**.

```bash
bun install
bun run dev      # start dev server
bun run build    # production build
bun run lint     # eslint
bun run format   # prettier
```

## Project structure

- `src/routes/` — file-based routes (every `.tsx` here is a route); see `src/routes/README.md` for routing conventions.
- `src/components/` — shared UI, plus per-surface component folders (`site/`, `with-property/`, `care/`).
- `src/lib/portal/` and `src/lib/care/` — mock data stores (React context) and translations for the two portal systems.
- `src/styles.css` — global and per-surface theme tokens.

## Internationalization

Supports English, Korean, Vietnamese (and Chinese on most surfaces), via separate i18n implementations per surface — see the relevant files in `src/components/site/`, `src/lib/portal/`, and `src/lib/care/`.
