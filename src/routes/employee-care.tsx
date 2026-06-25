import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Home, FileText, Stethoscope, GraduationCap, Sparkles, MoreHorizontal,
  Plane, KeyRound, Compass, HeartHandshake, ArrowRight, Languages,
  CheckCircle2, Minus, X as XIcon, Users, Clock, ChevronDown, ChevronUp,
  Shield, Zap, Building2, Menu,
} from "lucide-react";

import { useCareLang, type Lang } from "@/lib/care/i18n";
import { useCarePortal, CARE_CATEGORIES, type CareCategory } from "@/lib/care/store";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import withLogo from "@/assets/with-logo.png";

export const Route = createFileRoute("/employee-care")({
  head: () => ({
    meta: [
      { title: "WITH Care — Settlement Support for Your Team in Vietnam" },
      { name: "description", content: "Relocation concierge for foreign teams in Vietnam — housing, paperwork, healthcare, schools." },
      { property: "og:title", content: "WITH Care — Settlement Support" },
      { property: "og:description", content: "Housing, paperwork, healthcare, schools — handled, from pre-arrival to renewal." },
    ],
  }),
  component: EmployeeCarePageWrapper,
});

function EmployeeCarePageWrapper() {
  return <EmployeeCarePage />;
}

/* ── Scroll reveal hook ───────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const LANGS: Lang[] = ["en", "ko", "vi"];

function LanguagePicker() {
  const { lang, setLang } = useCareLang();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1 py-1 text-xs backdrop-blur">
      <Languages className="ml-2 h-3.5 w-3.5 opacity-60" />
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-all ${
            lang === l
              ? "bg-[var(--ec-coral)] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#how", k: "nav.how" },
  { href: "#services", k: "nav.services" },
  { href: "#hr", k: "nav.hr" },
  { href: "#request", k: "nav.request" },
] as const;

function Nav() {
  const { t } = useCareLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--ec-teal-deep)]/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 text-white">
        <Link to="/employee-care" className="flex items-center gap-2.5 sm:gap-3">
          <img
            src={withLogo}
            alt="WITH"
            className="h-7 w-auto brightness-0 invert opacity-90 sm:h-8"
            width={32}
            height={32}
            loading="eager"
            decoding="async"
          />
          <span className="font-display text-sm font-semibold tracking-widest text-[var(--ec-coral-soft)]">
            CARE
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {NAV_LINKS.map(({ href, k }) => (
            <a key={href} href={href} className="opacity-70 transition hover:opacity-100">{t(k)}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguagePicker />
          <Link
            to="/portal"
            className="hidden rounded-full bg-[var(--ec-coral)] px-4 py-2 text-xs font-medium text-white shadow-md shadow-[var(--ec-coral)]/25 transition hover:bg-[#d96a4f] md:inline-flex"
          >
            Portal
          </Link>
          <Link
            to="/with-property"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white md:inline-flex"
          >
            WithProperty
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 md:hidden"
          >
            <Menu className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="ec-theme w-[78vw] max-w-xs border-l border-white/10 bg-[var(--ec-teal-deep)] p-0 text-white sm:max-w-sm"
        >
          <div className="flex h-full flex-col px-6 py-8">
            <div className="mb-8 flex items-center gap-3">
              <img src={withLogo} alt="WITH" className="h-7 w-auto brightness-0 invert opacity-90" />
              <span className="font-display text-sm font-semibold tracking-widest text-[var(--ec-coral-soft)]">CARE</span>
            </div>
            <nav className="flex flex-col gap-1 text-base">
              {NAV_LINKS.map(({ href, k }) => (
                <SheetClose key={href} asChild>
                  <a
                    href={href}
                    className="rounded-lg px-2 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {t(k)}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6">
              <SheetClose asChild>
                <Link
                  to="/portal"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ec-coral)] px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-[var(--ec-coral)]/25 transition hover:bg-[#d96a4f]"
                >
                  Portal
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/with-property"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  WithProperty
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function Hero() {
  const { t } = useCareLang();
  return (
    <section className="relative overflow-hidden bg-[var(--ec-teal-deep)] pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-32 text-white">
      {/* Multi-layer background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 55% at 15% 25%, rgba(224,122,95,0.22) 0%, transparent 70%), radial-gradient(55% 55% at 85% 85%, rgba(45,140,140,0.28) 0%, transparent 70%)",
        }}
      />
      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
      {/* WITH logo full-section watermark */}
      {/* WITH logo — centered watermark, constrained within hero */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={withLogo}
          alt=""
          aria-hidden="true"
          width={320}
          height={320}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-[28%] max-w-xs brightness-0 invert opacity-[0.12] select-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div>
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--ec-coral-soft)] anim-fade-in delay-100 sm:mb-5">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl sm:leading-[1.05] md:text-6xl md:leading-[1.02] anim-fade-up delay-200">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/65 sm:mt-6 sm:text-lg anim-fade-up delay-300">
              {t("hero.sub")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap anim-fade-up delay-400">
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ec-coral)] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--ec-coral)]/30 transition hover:bg-[#d96a4f] hover:shadow-[var(--ec-coral)]/45"
              >
                {t("hero.cta.request")} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#hr"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                {t("hero.cta.hr")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4 anim-fade-in delay-600">
              {[
                { label: "4 Service Categories", accent: "var(--ec-coral-soft)" },
                { label: "Pre-arrival to Renewal", accent: "#7dd3d1" },
                { label: "EN · KO · VI", accent: "var(--ec-coral-soft)" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: chip.accent }} />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-8 max-w-2xl reveal sm:mb-10 md:mb-12">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral)]">
          <span className="inline-block h-px w-6 bg-[var(--ec-coral)]" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl tracking-tight text-[var(--ec-ink)] md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-[var(--ec-muted)]">{sub}</p>}
    </div>
  );
}

/* Photo strip between hero and How It Works */
const CARE_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    alt: "Modern apartment in Ho Chi Minh City",
    label: "Housing",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    alt: "Paperwork and documents",
    label: "Paperwork",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    alt: "Healthcare consultation",
    label: "Healthcare",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    alt: "Children at international school",
    label: "Schooling",
  },
];

function PhotoStrip() {
  return (
    <div className="bg-[var(--ec-teal-deep)] py-10 overflow-hidden">
      <div className="flex gap-4 px-5 sm:px-6 md:grid md:grid-cols-4 md:max-w-7xl md:mx-auto">
        {CARE_PHOTOS.map((p, i) => (
          <div
            key={p.label}
            className="reveal relative min-w-[72vw] md:min-w-0 flex-shrink-0 overflow-hidden rounded-2xl aspect-[4/3] group"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <img
              src={p.src}
              alt={p.alt}
              width={600}
              height={450}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/80">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const { t } = useCareLang();
  const steps = [
    { icon: Compass, k: "1" },
    { icon: Plane, k: "2" },
    { icon: KeyRound, k: "3" },
    { icon: HeartHandshake, k: "4" },
  ];
  return (
    <section id="how" className="bg-[var(--ec-sand)] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader title={t("how.title")} sub={t("how.sub")} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, k }, i) => (
            <div
              key={k}
              className="reveal group relative rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[var(--ec-teal)]/25"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--ec-muted)]">0{i + 1}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--ec-teal)]/8 transition group-hover:bg-[var(--ec-teal)]/15">
                  <Icon className="h-5 w-5 text-[var(--ec-teal)]" />
                </div>
              </div>
              <h3 className="font-display text-xl text-[var(--ec-ink)]">{t(`how.${k}.t`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ec-muted)]">{t(`how.${k}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useCareLang();
  const items = [
    { icon: Home, k: "housing" },
    { icon: FileText, k: "paperwork" },
    { icon: Stethoscope, k: "medical" },
    { icon: GraduationCap, k: "school" },
    { icon: Sparkles, k: "settle" },
    { icon: MoreHorizontal, k: "other" },
  ];
  return (
    <section id="services" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Services" title={t("svc.title")} sub={t("svc.sub")} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--ec-teal)]/10 bg-[var(--ec-teal)]/8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, k }, i) => (
            <div
              key={k}
              className="reveal group bg-white p-7 transition-all duration-300 hover:bg-[var(--ec-sand)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ec-teal)]/8 text-[var(--ec-teal)] transition group-hover:bg-[var(--ec-teal)]/15 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-[var(--ec-ink)]">{t(`svc.${k}`)}</h3>
              <p className="mt-2 text-sm text-[var(--ec-muted)]">{t(`svc.${k}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureLevel = "yes" | "partial" | "no";
interface TierFeature { label: string; level: FeatureLevel }
interface TierInfo {
  seats: string;
  price: string;
  sla: string;
  agent: string;
  features: TierFeature[];
}

const TIER_DATA: Record<string, TierInfo> = {
  trial: {
    seats: "Up to 3 employees",
    price: "Free pilot",
    sla: "5-day response",
    agent: "tier.trial.agent",
    features: [
      { label: "tier.trial.f1", level: "partial" },
      { label: "tier.trial.f2", level: "yes" },
      { label: "tier.trial.f3", level: "yes" },
      { label: "tier.trial.f4", level: "yes" },
      { label: "tier.trial.f5", level: "no" },
      { label: "tier.trial.f6", level: "no" },
      { label: "tier.trial.f7", level: "no" },
      { label: "tier.trial.f8", level: "no" },
      { label: "tier.trial.f9", level: "no" },
    ],
  },
  basic: {
    seats: "Up to 10 employees",
    price: "Contact sales",
    sla: "3-day response",
    agent: "tier.basic.agent",
    features: [
      { label: "tier.basic.f1", level: "yes" },
      { label: "tier.basic.f2", level: "yes" },
      { label: "tier.basic.f3", level: "yes" },
      { label: "tier.basic.f4", level: "yes" },
      { label: "tier.basic.f5", level: "yes" },
      { label: "tier.basic.f6", level: "no" },
      { label: "tier.basic.f7", level: "no" },
      { label: "tier.basic.f8", level: "partial" },
      { label: "tier.basic.f9", level: "no" },
    ],
  },
  pro: {
    seats: "Up to 30 employees",
    price: "Most popular",
    sla: "1-day response",
    agent: "tier.pro.agent",
    features: [
      { label: "tier.pro.f1", level: "yes" },
      { label: "tier.pro.f2", level: "yes" },
      { label: "tier.pro.f3", level: "yes" },
      { label: "tier.pro.f4", level: "yes" },
      { label: "tier.pro.f5", level: "yes" },
      { label: "tier.pro.f6", level: "yes" },
      { label: "tier.pro.f7", level: "yes" },
      { label: "tier.pro.f8", level: "partial" },
      { label: "tier.pro.f9", level: "no" },
    ],
  },
  premium: {
    seats: "Unlimited employees",
    price: "Enterprise",
    sla: "4-hour response",
    agent: "tier.premium.agent",
    features: [
      { label: "tier.premium.f1", level: "yes" },
      { label: "tier.premium.f2", level: "yes" },
      { label: "tier.premium.f3", level: "yes" },
      { label: "tier.premium.f4", level: "yes" },
      { label: "tier.premium.f5", level: "yes" },
      { label: "tier.premium.f6", level: "yes" },
      { label: "tier.premium.f7", level: "yes" },
      { label: "tier.premium.f8", level: "yes" },
      { label: "tier.premium.f9", level: "yes" },
    ],
  },
};

function FeatureRow({ label, level }: TierFeature) {
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span className="shrink-0">
        {level === "yes" && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
        {level === "partial" && <Minus className="h-3.5 w-3.5 text-amber-400" />}
        {level === "no" && <XIcon className="h-3.5 w-3.5 text-white/20" />}
      </span>
      <span className={`text-[13px] leading-snug ${level === "no" ? "text-white/25 line-through" : level === "partial" ? "text-white/70" : "text-white/85"}`}>
        {label}
      </span>
    </div>
  );
}

function HRTiers() {
  const { t } = useCareLang();
  const [open, setOpen] = useState<string | null>(null);

  const tiers = [
    { k: "trial", featured: false, Icon: Shield },
    { k: "basic", featured: false, Icon: Building2 },
    { k: "pro", featured: false, Icon: Zap },
    { k: "premium", featured: false, Icon: Sparkles },
  ];

  return (
    <section id="hr" className="bg-[var(--ec-teal)] py-16 sm:py-20 md:py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 max-w-2xl reveal sm:mb-10 md:mb-12">
          <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral-soft)]">
            <span className="inline-block h-px w-6 bg-[var(--ec-coral-soft)]" />
            {t("hr.title")}
          </p>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">{t("hr.sub")}</h2>
          <p className="mt-3 text-white/65">Click any plan to see what's included.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-4 items-start">
          {tiers.map(({ k, featured, Icon }, i) => {
            const isOpen = open === k;
            const data = TIER_DATA[k];
            return (
              <div
                key={k}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`rounded-2xl transition-colors duration-300 ${
                  isOpen || featured
                    ? "bg-[var(--ec-coral)] shadow-2xl shadow-black/25 ring-1 ring-white/20"
                    : "bg-white/5 ring-1 ring-white/10"
                }`}
              >
                {/* Card header — always visible, clickable */}
                <button
                  onClick={() => setOpen(isOpen ? null : k)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </div>
                    <div className="mt-0.5">
                      {isOpen
                        ? <ChevronUp className="h-4 w-4 text-white/40" />
                        : <ChevronDown className="h-4 w-4 text-white/40" />}
                    </div>
                  </div>

                  {featured && (
                    <span className="mt-3 mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/90">
                      Most Popular
                    </span>
                  )}

                  <h3 className="mt-3 font-display text-2xl">{t(`tier.${k}`)}</h3>
                  <p className={`mt-1 text-sm ${isOpen || featured ? "text-white/80" : "text-white/50"}`}>{t(`tier.${k}.d`)}</p>

                  {/* Quick stats row */}
                  <div className={`mt-4 grid grid-cols-2 gap-2 text-[11px] ${isOpen || featured ? "text-white/75" : "text-white/45"}`}>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {data.seats.replace("Up to ", "≤ ").replace(" employees", "")}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {data.sla}</span>
                  </div>

                  <div className={`mt-3 text-[11px] font-semibold uppercase tracking-widest ${isOpen || featured ? "text-white/90" : "text-white/35"}`}>
                    {data.price}
                  </div>
                </button>

                {/* Expandable detail panel */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-white/10">
                        <p className={`mb-3 text-[10px] uppercase tracking-widest ${isOpen || featured ? "text-white/60" : "text-white/30"}`}>
                          {t("tier.included")}
                        </p>
                        <div className="space-y-0.5">
                          {data.features.map((f) => (
                            <FeatureRow key={f.label} label={t(f.label)} level={f.level} />
                          ))}
                        </div>

                        {/* Agent info */}
                        <div className={`mt-4 rounded-xl px-3.5 py-2.5 text-[12px] ${isOpen || featured ? "bg-white/15" : "bg-white/[0.06]"}`}>
                          <span className={isOpen || featured ? "text-white/60" : "text-white/35"}>{t("tier.agent.label")}: </span>
                          <span className={isOpen || featured ? "text-white/90" : "text-white/65"}>{t(data.agent)}</span>
                        </div>

                        {/* CTA */}
                        <a
                          href="#request"
                          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                            isOpen || featured
                              ? "bg-white text-[var(--ec-coral)] hover:bg-white/90"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {t("tier.cta")} <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/35">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Included</span>
          <span className="flex items-center gap-1.5"><Minus className="h-3.5 w-3.5 text-amber-400" /> Partial / limited</span>
          <span className="flex items-center gap-1.5"><XIcon className="h-3.5 w-3.5 text-white/20" /> Not included</span>
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().min(2, "Required"),
  contact: z.string().min(3, "Required"),
  company: z.string().optional(),
  category: z.enum(CARE_CATEGORIES as [CareCategory, ...CareCategory[]]),
  subject: z.string().min(2, "Required"),
  details: z.string().min(5, "Please add a few words"),
});

type FormVals = z.infer<typeof schema>;

function RequestForm() {
  const { t } = useCareLang();
  const { submitCareRequest } = useCarePortal();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<FormVals>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", company: "", category: "Housing", subject: "", details: "" },
  });

  const onSubmit = (v: FormVals) => {
    setSubmitting(true);
    const r = submitCareRequest({
      category: v.category,
      subject: v.subject,
      details: v.details,
      guestName: v.name,
      guestContact: v.contact,
    });
    toast.success(t("form.success", { ref: r.id }));
    form.reset();
    setSubmitting(false);
  };

  const inputCls =
    "w-full rounded-xl border border-[var(--ec-teal)]/12 bg-[var(--ec-sand)]/50 px-3.5 py-2.5 text-sm text-[var(--ec-ink)] outline-none transition focus:border-[var(--ec-teal)] focus:bg-white focus:ring-2 focus:ring-[var(--ec-teal)]/12";

  return (
    <section id="request" className="bg-[var(--ec-sand-warm)] py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 sm:gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div className="reveal-left">
          <SectionHeader eyebrow="Request" title={t("form.title")} sub={t("form.sub")} />
          <p className="text-sm text-[var(--ec-muted)]">
            {t("form.haveAccount")}?{" "}
            <Link to="/care/login" className="text-[var(--ec-teal)] underline underline-offset-2 hover:text-[var(--ec-teal-soft)]">
              {t("nav.login")}
            </Link>
          </p>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="reveal rounded-2xl border border-[var(--ec-teal)]/8 bg-white p-7 shadow-md shadow-[var(--ec-teal)]/5"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label={t("form.name")} error={form.formState.errors.name?.message}>
              <input className={inputCls} {...form.register("name")} />
            </Field>
            <Field label={t("form.contact")} error={form.formState.errors.contact?.message}>
              <input className={inputCls} {...form.register("contact")} />
            </Field>
            <Field label={t("form.company")} hint={t("form.companyHint")}>
              <input className={inputCls} {...form.register("company")} />
            </Field>
            <Field label={t("form.category")}>
              <select className={inputCls} {...form.register("category")}>
                {CARE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
            <Field label={t("form.subject")} error={form.formState.errors.subject?.message} className="md:col-span-2">
              <input className={inputCls} {...form.register("subject")} />
            </Field>
            <Field label={t("form.details")} error={form.formState.errors.details?.message} className="md:col-span-2">
              <textarea rows={5} className={inputCls} {...form.register("details")} />
            </Field>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ec-teal)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--ec-teal)]/20 transition hover:bg-[var(--ec-teal-light)] hover:shadow-[var(--ec-teal)]/30 disabled:opacity-60"
          >
            {t("form.submit")} <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, hint, error, children, className,
}: {
  label: string; hint?: string; error?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--ec-muted)]">{label}</span>
      {children}
      {hint && !error && <span className="mt-1 block text-xs text-[var(--ec-muted)]/70">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-[var(--ec-coral)]">{error}</span>}
    </label>
  );
}

function Footer() {
  const { t } = useCareLang();
  return (
    <footer className="bg-[var(--ec-teal-deep)] py-16 text-white/65">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={withLogo}
                alt="WITH"
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                className="h-7 w-auto brightness-0 invert opacity-70"
              />
              <span className="font-display text-base font-semibold tracking-widest text-[var(--ec-coral-soft)]">CARE</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t("footer.tagline")}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#how" className="transition hover:text-white">{t("nav.how")}</a>
            <a href="#services" className="transition hover:text-white">{t("nav.services")}</a>
            <a href="#hr" className="transition hover:text-white">{t("nav.hr")}</a>
            <a href="#request" className="transition hover:text-white">{t("nav.request")}</a>
            <Link to="/care/login" className="transition hover:text-white">{t("nav.login")}</Link>
            <Link to="/with-property" className="transition hover:text-white">WithProperty</Link>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} WITH Care · Ho Chi Minh City · hello@withcare.example
          </p>
          <Link
            to="/portal"
            className="text-xs text-white/30 transition hover:text-white/60 underline underline-offset-2"
          >
            ← Back to Portal Hub
          </Link>
        </div>
      </div>
    </footer>
  );
}

function EmployeeCarePage() {
  useReveal();
  return (
    <div className="ec-theme min-h-screen bg-white">
      <Nav />
      <Hero />
      <PhotoStrip />
      <HowItWorks />
      <Services />
      <HRTiers />
      <RequestForm />
      <Footer />
    </div>
  );
}
