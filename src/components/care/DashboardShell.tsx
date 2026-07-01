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
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { useCareLang, type Lang } from "@/lib/care/i18n";
import withLogo from "@/assets/with-logo-black.png";

// ─── Design tokens (Care) ────────────────────────────────────────────────────
export const EC_BG = "#f6faf8";
export const EC_SIDEBAR = "#ffffff";
export const EC_CORAL = "#14a76c";
export const EC_TEAL = "emerald-600";

// ─── Shared motion variants — every dashboard tab reuses these so lists and
// tables get consistent staggered reveals, and everything respects
// prefers-reduced-motion from one place. ──────────────────────────────────
export function useDashboardMotion() {
  const reduced = !!useReducedMotion();
  const fadeUp: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const staggerParent: Variants = {
    hidden: {},
    visible: {
      transition: reduced
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.045, delayChildren: 0.02 },
    },
  };
  return { reduced, fadeUp, staggerParent };
}

// ─── CareLangSwitcher ────────────────────────────────────────────────────────
const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
  { code: "ko", label: "한국어" },
];

export function CareLangSwitcher() {
  const { lang, setLang } = useCareLang();
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-1 py-1">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50 ${
            lang === l.code ? "bg-[#14a76c] text-white" : "text-black/40 hover:text-black/70"
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
  badge?: number;
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
  const reduced = !!useReducedMotion();

  useEffect(() => {
    if (!state.session || state.session.role !== role) {
      navigate({ to: "/care/login", replace: true });
    }
  }, [state.session, role, navigate, pathname]);

  if (!state.session || state.session.role !== role) return null;

  const initial = state.session.name?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="min-h-screen text-[#0d1f16]" style={{ background: EC_BG }}>
      {/* Subtle dot grid — fixed, pointer-events-none, single instance */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,31,22,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="flex min-h-screen relative">
        {/* ── Sidebar ── */}
        <aside
          className="hidden w-60 shrink-0 border-r border-black/[0.06] md:flex md:flex-col"
          style={{ background: EC_SIDEBAR }}
        >
          {/* Brand */}
          <div className="px-5 pt-6 pb-5 border-b border-black/[0.06]">
            <Link
              to="/employee-care"
              className="flex flex-col items-start gap-2.5 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50"
            >
              <img
                src={withLogo}
                alt="WITH"
                className="h-7 w-auto opacity-85 transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#14a76c]/12 ring-1 ring-[#14a76c]/22">
                  <HeartHandshake className="h-3 w-3 text-[#14a76c]" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-semibold text-black/65 tracking-tight">
                    Care
                  </span>
                  <span className="text-[9px] text-black/30 uppercase tracking-widest capitalize">
                    · {role}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* User card */}
          <div className="mx-3 mt-4 rounded-xl border border-black/[0.07] bg-black/[0.015] px-3.5 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/15 text-xs font-bold text-[#0b6b47] ring-1 ring-[#14a76c]/20">
                {initial}
              </div>
              <div className="min-w-0 flex-1">{identity}</div>
            </div>
          </div>

          {/* Nav — sliding layoutId indicator instead of instant show/hide */}
          <nav className="mt-5 flex-1 px-2.5 space-y-0.5 overflow-y-auto">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onSelect(item.key)}
                  className={`relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50 ${
                    isActive
                      ? "bg-[#14a76c]/[0.10] text-[#0b6b47]"
                      : "text-black/45 hover:bg-black/[0.03] hover:text-black/75"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dash-nav-indicator"
                      transition={
                        reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                      }
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#14a76c]"
                    />
                  )}
                  <Icon
                    className={`h-[15px] w-[15px] shrink-0 transition-colors ${
                      isActive ? "text-[#14a76c]" : ""
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>
                  {typeof item.badge === "number" && item.badge > 0 && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#14a76c] px-1 text-[9px] font-bold text-white tabular-nums">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sign out */}
          <div className="px-2.5 pb-5">
            <div className="border-t border-black/[0.06] pt-3">
              <button
                onClick={() => {
                  logout();
                  navigate({ to: "/care/login" });
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-black/35 hover:bg-black/[0.03] hover:text-black/65 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50"
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
            className="sticky top-0 z-10 border-b border-black/[0.06] px-6 py-3.5 flex items-center justify-between backdrop-blur-md"
            style={{ background: "rgba(255,255,255,0.88)" }}
          >
            <h1 className="text-[15px] font-semibold tracking-tight text-black/88">{title}</h1>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-black/30 hidden sm:block tabular-nums">
                {t("dash.saved")}{" "}
                {new Date(state.system.lastSaved).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="hidden sm:block h-3 w-px bg-black/[0.10]" />
              <CareLangSwitcher />
              <span className="h-3 w-px bg-black/[0.10]" />
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14a76c]/15 text-[11px] font-bold text-[#0b6b47] ring-1 ring-[#14a76c]/20">
                {initial}
              </div>
            </div>
          </div>

          {/* Mobile tab bar — sliding layoutId indicator here too */}
          <div className="md:hidden border-b border-black/[0.06] px-4 py-2.5 flex gap-1.5 flex-wrap">
            {nav.map((item) => {
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onSelect(item.key)}
                  className="relative rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50"
                >
                  {isActive && (
                    <motion.span
                      layoutId="dash-mobile-tab-indicator"
                      transition={
                        reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-[#14a76c]"
                    />
                  )}
                  <span
                    className={`relative ${isActive ? "text-white" : "text-black/55 hover:text-black/85"}`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-7 md:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.2, ease: "easeOut" }}
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

// ─── StatStrip / StatCard ────────────────────────────────────────────────────
// A single bordered strip with divide-x separators instead of N separate
// boxed cards — the "logic-grouping via divide-y/border-t, cards banned for
// dense dashboard KPI rows" pattern, rather than a grid of individually
// shadowed boxes competing for attention.
export function StatStrip({ children }: { children: ReactNode }) {
  const { fadeUp, staggerParent } = useDashboardMotion();
  const items = Array.isArray(children) ? children : [children];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerParent}
      className="mb-8 grid grid-cols-2 divide-x divide-y divide-black/[0.06] overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(13,31,22,0.04)] sm:flex sm:divide-y-0"
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={fadeUp} className="sm:flex-1 sm:min-w-0">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

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
    coral: "text-[#14a76c]",
    teal: "text-[#0b6b47]",
    amber: "text-amber-600",
    sky: "text-sky-600",
    default: "text-[#0d1f16]",
  }[tone];

  return (
    <div className="px-5 py-4 transition-colors duration-200 hover:bg-[#f5faf7]">
      <div className="text-[10px] uppercase tracking-[0.18em] text-black/38 mb-2">{label}</div>
      <div className={`text-2xl font-semibold tracking-tight tabular-nums ${toneColor}`}>
        {value}
      </div>
      {sub && <div className="mt-0.5 text-[11px] text-black/32">{sub}</div>}
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
    default: "bg-black/[0.06] text-black/70",
    ok: "bg-[#14a76c]/10 text-[#0b6b47] border border-[#14a76c]/25",
    warn: "bg-amber-500/10 text-amber-700 border border-amber-500/25",
    info: "bg-sky-500/10 text-sky-700 border border-sky-500/25",
    muted: "bg-black/[0.04] text-black/40",
    coral: "bg-[#14a76c]/10 text-[#0b6b47] border border-[#14a76c]/25",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function statusTone(status: string): "default" | "ok" | "warn" | "info" | "muted" {
  switch (status) {
    case "New":
      return "info";
    case "In Progress":
      return "warn";
    case "Pending Info":
      return "warn";
    case "Resolved":
      return "ok";
    case "Closed":
      return "muted";
    default:
      return "default";
  }
}

// ─── Card ────────────────────────────────────────────────────────────────────
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-black/[0.07] bg-white shadow-[0_20px_40px_-32px_rgba(13,31,22,0.18)] p-5 ${className ?? ""}`}
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
    accent === "coral" || accent === "teal"
      ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(20,167,108,0.07), transparent)"
      : undefined;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_20px_40px_-32px_rgba(13,31,22,0.18)] ${noPad ? "" : "p-5"} ${className}`}
    >
      {accentGlow && (
        <div className="pointer-events-none absolute inset-0" style={{ background: accentGlow }} />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

// ─── inputCls (unchanged — backward compat) ───────────────────────────────────
export function inputCls(extra = "") {
  return `w-full rounded-lg border border-black/[0.10] bg-white px-3 py-2 text-sm text-[#0d1f16]/90 placeholder:text-black/28 outline-none transition focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] ${extra}`;
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
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-black/45">
          {title}
        </h2>
        {sub && <p className="mt-0.5 text-[11px] text-black/32">{sub}</p>}
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
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide transition-colors hover:bg-[#109c5f] active:scale-[0.97] active:bg-[#0c7548] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/50 ${className}`}
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
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-black/[0.08] border-dashed bg-black/[0.012] px-8 py-14 text-center">
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05]">
          {icon}
        </div>
      )}
      <p className="text-[13px] text-black/45 max-w-xs leading-relaxed">{message}</p>
      {action}
    </div>
  );
}
