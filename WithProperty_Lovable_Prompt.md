# Lovable Prompt — Build the "With Property" Homepage

Paste everything below into Lovable for this project.

---

Build a new marketing homepage for **With Property**, a real estate brokerage and consulting brand, inside this existing codebase. Do not introduce a new framework, package manager, or config — match what's already here exactly:

- **Stack**: React 19 + TanStack Start + TanStack Router (file-based routing in `src/routes/`), Vite 8, TypeScript.
- **Styling**: Tailwind CSS v4 via `src/styles.css` (`@theme inline` tokens), shadcn/ui components already in `src/components/ui/`, `class-variance-authority`, `tailwind-merge`.
- **Animation**: `framer-motion`, reusing the existing `Reveal` wrapper (`src/components/site/Reveal.tsx`) for scroll-in animations.
- **Icons**: `lucide-react`.
- **Forms**: `react-hook-form` + `zod` (`@hookform/resolvers`), reusing `src/components/ui/form.tsx`, `input.tsx`, `select.tsx`, `checkbox.tsx`, `textarea.tsx`, `calendar.tsx`.
- **i18n**: reuse the existing `LangContext` (`src/components/site/LangContext.tsx`) and `translations.ts` pattern — add a new `withProperty` namespace per language (en, ko, vi at minimum; zh optional to stay consistent with the 4 languages already supported).
- **Toasts**: `sonner` (already wired) for form submit feedback.
- Package manager is `bun` — do not add new dependencies. No Supabase/Next.js/Resend integration in this pass; this is UI-only. Build the lead form with a stubbed client-side `onSubmit` (validate with Zod, show a success toast) — backend/CRM wiring is a separate follow-up task.

## Why this page exists

The current homepage at `/` is an investor-relations microsite for "Pham Tri Sovereign Capital" (Can Tho Zone 4). Keep that page completely untouched. We're adding a **second, separate homepage** for the With Property brokerage brand at a new route, and linking to it from the existing IR site's nav and footer so visitors can get to it.

## New route

Create `src/routes/with-property.tsx` as a new TanStack Router file route (same pattern as `src/routes/index.tsx`): own `head()` meta (title "With Property — Cross-Border Real Estate Expertise You Can Trust", description from the brand positioning below), own page component composed of new section components placed in `src/components/with-property/`.

## Visual direction (distinct from the IR site)

The IR site uses a dark emerald/gold theme (`--emerald-brand`, `--gold`, `panel-dark`, `gold-gradient`). With Property needs its **own** palette — **Navy Blue, White, Gold accents**, professional/trustworthy/premium/international, clean layouts, modern icons, property photography, trust badges. Avoid flashy animation and clutter.

Scope this new palette locally (don't touch the global `:root` tokens used by the IR site): add a wrapper class, e.g. `.wp-theme`, around the With Property page with its own CSS variables in `styles.css` (e.g. `--wp-navy: #0a1f44`, `--wp-navy-light: #14305c`, `--wp-gold: #d4af37`, `--wp-bg: #ffffff`), and use those via Tailwind arbitrary value utilities (`bg-[var(--wp-navy)]`) the same way the IR site does with `var(--emerald-brand)`.

Reuse `SectionHeader` and `Reveal` components for consistency in motion/structure, but restyle eyebrow/heading colors to navy/gold instead of emerald/gold.

## Page content (from the With Property brand brief)

**Hero**
- Eyebrow: "Cross-Border Real Estate Expertise"
- Headline: "Cross-Border Real Estate Expertise You Can Trust"
- Subheadline: "20+ years of experience in Vietnam helping investors, students, and expats find the right property."
- Two CTAs: "Get Free Consultation" (scrolls to / opens the lead form) and "Find a Property"
- Core message tagline somewhere prominent: "Cross-Border Real Estate Value, Partnering With You Every Step of the Way."

**Why Choose With Property (5 USP cards)**
1. Deposit Protection — transparent, reliable handling of deposits; minimizes disputes, protects funds, ensures transparency.
2. Tax Support — professional guidance on Vietnam real estate tax; simplifies procedures, reduces risk, improves compliance.
3. Multilingual Communication — Korean, English, Vietnamese; eliminates language barriers, reduces misunderstandings.
4. Immediate Problem Resolution — rapid response to issues; reduces client stress, faster resolution.
5. Zero Brokerage Fee — free property search, free consultation, free brokerage support; lower acquisition cost, more trust.

**Target Customer Segments (3 cards)**
- **Investors**: goals (appreciation, rental income, safe investments, ROI), pain points (no local market knowledge, legal uncertainty, language barriers, risk), solutions (market analysis, ROI-focused selection, investment consulting, local expertise).
- **International Students**: goals (safe housing, affordable rent, convenient location), pain points (unfamiliar city, language barriers, safety concerns), solutions (housing near schools, safe neighborhoods, transportation access).
- **Expats / Corporate Professionals**: goals (comfortable lifestyle, efficient commuting, premium housing), pain points (admin complexity, relocation challenges, no local network), solutions (premium apartments, admin support, relocation assistance).

**Services (3 columns)**
- Residential Properties: apartments, condominiums, serviced apartments, long-term rentals.
- Commercial Properties: retail spaces, office spaces, business locations.
- Land & Investment Assets: land plots, development opportunities, investment properties.
Each with a short description and a "Get Consultation" CTA.

**About / Trust section**
- Founder story placeholder: operated by a professional with 20+ years living and doing business in Vietnam, cross-cultural expertise across Vietnam, South Korea, and the United States.
- Trust signals as badges: "20+ Years Experience in Vietnam", "Korean / English / Vietnamese", "100% Free Brokerage Service".
- Brand values (5): Professionalism, Responsibility, Transparency, Trust, Accessibility — one line each.

**Lead Generation Form** (the Contact section — this is the primary conversion goal)
Build with `react-hook-form` + `zod`, fields exactly as specified:
- Full Name (text, required)
- Phone / Zalo / KakaoTalk (text, required)
- Customer Type (select, required): Investor, Student, Expat/Professional, Other
- Preferred Area (text or select): District 1, District 2, District 7, Thu Duc, Other
- Budget (select): Under $500, $500–$1,000, $1,000–$2,000, Above $2,000
- Property Type (select): Apartment, Commercial Space, Land, Other
- Size / Bedrooms (select): Studio, 1 Bedroom, 2 Bedroom, 3 Bedroom
- Desired Move-in Date (date picker, using existing `calendar.tsx`)
- Priorities (multi-select checkboxes): Near work, Near school, Good transportation, Security, Nearby amenities, Nice view, Fully furnished
- Additional Requirements (textarea, optional)
On submit: validate, then show a `sonner` success toast ("Thanks — we'll contact you within 24 hours.") and reset the form. Note in a code comment that real submission should POST to a CRM/email endpoint once backend is wired.

**Footer**
Match the With Property navy/gold theme; include nav links to each section, contact placeholder (email/phone — use placeholders), and a tagline restating the core message.

## Navigation from the IR site to this page

In `src/components/site/Nav.tsx` and `src/components/site/Footer.tsx` (the existing IR site components — these stay on `/`), add a clearly visible link/button to the new page using TanStack Router's `Link` component: `<Link to="/with-property">With Property</Link>`. Place it near the existing "Secure Login" button in the desktop nav and in the mobile drawer, and as an extra item in the footer's "Navigate" column. Keep its styling consistent with the IR site's existing dark/emerald/gold look (it's still a link *from* that site), not the navy/gold With Property look.

## Acceptance criteria
- Visiting `/` still shows the unchanged Pham Tri Sovereign Capital IR site.
- A new nav/footer link on `/` navigates to `/with-property`.
- `/with-property` renders the full With Property brand page above in navy/white/gold styling, fully responsive, with working multilingual switching (en/ko/vi minimum) via the existing `LangContext`/`useLang`/`t()` pattern.
- The lead form validates required fields and shows a success toast on submit; no console errors.
- No new npm/bun dependencies added; no changes to `package.json`.
