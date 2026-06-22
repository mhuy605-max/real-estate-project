/**
 * DashboardShell — Shared layout and UI primitives for the WithCare portal.
 * Used by care.admin, care.staff, care.employee.
 * All original exports are preserved with identical props for backward compatibility.
 */

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { HeartHandshake, LogOut } from "lucide-react";
import type { ReactNode } from "react";
import { useCarePortal, type Role } from "@/lib/care/store";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCareLang, type Lang } from "@/lib/care/i18n";
import withLogo from "@/assets/with-logo.png";

// ─── Design tokens (Care) ────────────────────────────────────────────────────
export const EC_BG      = "#060f10";
export const EC_SIDEBAR = "#040d0e";
export const EC_CORAL   = "#e07a5f";
export const EC_TEAL    = "teal-400";

// ─── CareLangSwitcher ────────────────────────────────────────────────────────
const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
  { code: "ko", label: "한국어" },
];

export function CareLangSwitcher() {
  const { lang, setLang } = useCareLang();
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-1 py-1">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${
            lang === l.code
              ? "bg-white/[0.14] text-white"
              : "text-white/35 hover:text-white/65"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

interface NavItem {
  label: string;
  key: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ─── DashboardShell ──────────────────────────────────────────────────────────
export function DashboardShell({
  title,
  role,
  nav,
  active,
  onSelect,
  children,
  identity,
}: {
  title: string;
  role: Role;
  nav: NavItem[];
  active: string;
  onSelect: (k: string) => void;
  children: ReactNode;
  identity: ReactNode;
}) {
  const { state, logout } = useCarePortal();
  const { t } = useCareLang();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!state.session || state.session.role !== role) {
      navigate({ to: "/care/login", replace: true });
    }
  }, [state.session, role, navigate, pathname]);

  if (!state.session || state.session.role !== role) return null;

  const initial = state.session.name?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="min-h-screen text-white" style={{ background: EC_BG }}>
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="flex min-h-screen relative">
        {/* ── Sidebar ── */}
        <aside
          className="hidden w-60 shrink-0 border-r border-white/[0.05] md:flex md:flex-col"
          style={{ background: EC_SIDEBAR }}
        >
          {/* Brand */}
          <div className="px-5 pt-6 pb-5 border-b border-white/[0.05]">
            <Link to="/employee-care" className="flex flex-col items-start gap-2.5 group">
              <img
                src={withLogo}
                alt="WITH"
                className="h-7 w-auto brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#e07a5f]/12 ring-1 ring-[#e07a5f]/22">
                  <HeartHandshake className="h-3 w-3 text-[#e07a5f]" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-semibold text-white/65 tracking-tight">Care</span>
                  <span className="text-[9px] text-white/22 uppercase tracking-widest capitalize">· {role}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* User card */}
          <div className="mx-3 mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/15 text-xs font-bold text-[#e07a5f] ring-1 ring-[#e07a5f]/20">
                {initial}
              </div>
              <div className="min-w-0 flex-1">{identity}</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-5 flex-1 px-2.5 space-y-0.5 overflow-y-auto">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onSelect(item.key)}
                  className={`relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#e07a5f]/[0.09] text-white"
                      : "text-white/40 hover:bg-white/[0.035] hover:text-white/75"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#e07a5f]" />
                  )}
                  <Icon
                    className={`h-[15px] w-[15px] shrink-0 transition-colors ${
                      isActive ? "text-[#e07a5f]" : ""
                    }`}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Sign out */}
          <div className="px-2.5 pb-5">
            <div className="border-t border-white/[0.05] pt-3">
              <button
                onClick={() => {
                  logout();
                  navigate({ to: "/care/login" });
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/30 hover:bg-white/[0.035] hover:text-white/60 transition-colors"
              >
                <LogOut className="h-[15px] w-[15px]" />
                {t("dash.signOut")}
              </button>
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <main className="flex-1 flex flex-col min-h-screen">
          {/* Top bar */}
          <div
            className="sticky top-0 z-10 border-b border-white/[0.05] px-6 py-3.5 flex items-center justify-between backdrop-blur-md"
            style={{ background: "rgba(4,13,14,0.85)" }}
          >
            <h1 className="text-[15px] font-semibold tracking-tight text-white/90">{title}</h1>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-white/20 hidden sm:block tabular-nums">
                {t("dash.saved")}{" "}
                {new Date(state.system.lastSaved).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="hidden sm:block h-3 w-px bg-white/[0.08]" />
              <CareLangSwitcher />
              <span className="h-3 w-px bg-white/[0.08]" />
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e07a5f]/15 text-[11px] font-bold text-[#e07a5f] ring-1 ring-[#e07a5f]/20">
                {initial}
              </div>
            </div>
          </div>

          {/* Mobile tab bar */}
          <div className="md:hidden border-b border-white/[0.05] px-4 py-2.5 flex gap-1.5 flex-wrap">
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${
                  active === item.key
                    ? "bg-[#e07a5f] text-white"
                    : "bg-white/[0.06] text-white/50 hover:text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-7 md:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── StatCard ────────────────────────────────────────────────────────────────
export function StatCard({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: "coral" | "teal" | "amber" | "sky" | "default";
}) {
  const toneColor = {
    coral:   "text-[#e07a5f]",
    teal:    "text-teal-400",
    amber:   "text-amber-400",
    sky:     "text-sky-400",
    default: "text-white",
  }[tone];

  const toneBorder = {
    coral:   "hover:border-[#e07a5f]/20",
    teal:    "hover:border-teal-400/20",
    amber:   "hover:border-amber-400/20",
    sky:     "hover:border-sky-400/20",
    default: "hover:border-white/12",
  }[tone];

  return (
    <div
      className={`rounded-xl border border-white/[0.06] bg-white/[0.025] px-5 py-4 transition-all duration-200 hover:bg-white/[0.04] ${toneBorder}`}
    >
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/32 mb-2">{label}</div>
      <div className={`text-2xl font-semibold tracking-tight ${toneColor}`}>{value}</div>
      {sub && <div className="mt-0.5 text-[11px] text-white/28">{sub}</div>}
    </div>
  );
}

// ─── Pill ────────────────────────────────────────────────────────────────────
export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "ok" | "warn" | "info" | "muted" | "coral";
}) {
  const tones = {
    default: "bg-white/[0.08] text-white/75",
    ok:      "bg-emerald-500/12 text-emerald-300 border border-emerald-500/20",
    warn:    "bg-amber-500/12 text-amber-300 border border-amber-500/20",
    info:    "bg-sky-500/12 text-sky-300 border border-sky-500/20",
    muted:   "bg-white/[0.05] text-white/40",
    coral:   "bg-[#e07a5f]/12 text-[#e07a5f] border border-[#e07a5f]/20",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function statusTone(
  status: string,
): "default" | "ok" | "warn" | "info" | "muted" {
  switch (status) {
    case "New":          return "info";
    case "In Progress":  return "warn";
    case "Pending Info": return "warn";
    case "Resolved":     return "ok";
    case "Closed":       return "muted";
    default:             return "default";
  }
}

// ─── Card ────────────────────────────────────────────────────────────────────
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

// ─── PremiumCard (new — additive) ─────────────────────────────────────────────
export function PremiumCard({
  children,
  className = "",
  accent,
  noPad,
}: {
  children: ReactNode;
  className?: string;
  accent?: "coral" | "teal";
  noPad?: boolean;
}) {
  const accentGlow =
    accent === "coral"
      ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(224,122,95,0.07), transparent)"
      : accent === "teal"
      ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(45,200,190,0.06), transparent)"
      : undefined;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] ${noPad ? "" : "p-5"} ${className}`}
    >
      {accentGlow && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: accentGlow }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

// ─── inputCls (unchanged — backward compat) ───────────────────────────────────
export function inputCls(extra = "") {
  return `w-full rounded-lg border border-white/[0.07] bg-[#081415] px-3 py-2 text-sm text-white/85 placeholder:text-white/22 outline-none transition focus:border-[#e07a5f]/45 focus:bg-[#091617] ${extra}`;
}

// ─── SectionHeader ────────────────────────────────────────────────────────────
export function SectionHeader({
  title,
  action,
  sub,
}: {
  title: string;
  action?: ReactNode;
  sub?: string;
}) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/38">
          {title}
        </h2>
        {sub && <p className="mt-0.5 text-[11px] text-white/28">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

// ─── ActionBtn ───────────────────────────────────────────────────────────────
export function ActionBtn({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide hover:bg-[#d46f54] active:bg-[#c4644a] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

// ─── EmptyState (new — additive) ─────────────────────────────────────────────
export function EmptyState({
  message,
  icon,
  action,
}: {
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] border-dashed bg-white/[0.02] px-8 py-14 text-center">
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05]">
          {icon}
        </div>
      )}
      <p className="text-[13px] text-white/40 max-w-xs leading-relaxed">{message}</p>
      {action}
    </div>
  );
}
