import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { HeartHandshake, LogOut } from "lucide-react";
import type { ReactNode } from "react";
import { useCarePortal, type Role } from "@/lib/care/store";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCareLang, type Lang } from "@/lib/care/i18n";
import withLogo from "@/assets/with-logo.png";

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
            lang === l.code ? "bg-white/15 text-white" : "text-white/35 hover:text-white/65"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

interface NavItem { label: string; key: string; icon: React.ComponentType<{ className?: string }> }

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
    <div className="min-h-screen text-white" style={{ background: "#0b1e20" }}>
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="flex min-h-screen relative">
        {/* ── Sidebar ── */}
        <aside
          className="hidden w-60 shrink-0 border-r border-white/[0.06] md:flex md:flex-col"
          style={{ background: "linear-gradient(180deg, #071618 0%, #08191b 100%)" }}
        >
          {/* Brand */}
          <div className="px-5 pt-6 pb-4 border-b border-white/[0.06]">
            <Link to="/employee-care" className="flex flex-col items-start gap-2 group">
              <img
                src={withLogo}
                alt="WITH"
                className="h-7 w-auto brightness-0 invert opacity-85 transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-[#e07a5f]/15 ring-1 ring-[#e07a5f]/25">
                  <HeartHandshake className="h-3 w-3 text-[#e07a5f]" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-white/70 tracking-tight">Care</span>
                  <span className="ml-1.5 text-[9px] text-white/25 uppercase tracking-widest capitalize">· {role}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* User card */}
          <div className="mx-3 mt-4 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/18 text-xs font-bold text-[#e07a5f]">
                {initial}
              </div>
              <div className="min-w-0 flex-1">{identity}</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-5 flex-1 px-2.5 space-y-0.5">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onSelect(item.key)}
                  className={`relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#e07a5f]/10 text-white"
                      : "text-white/45 hover:bg-white/[0.04] hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#e07a5f]" />
                  )}
                  <Icon className={`h-[15px] w-[15px] ${isActive ? "text-[#e07a5f]" : ""}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Sign out */}
          <div className="px-2.5 pb-5">
            <div className="border-t border-white/[0.06] pt-3">
              <button
                onClick={() => { logout(); navigate({ to: "/care/login" }); }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/35 hover:bg-white/[0.04] hover:text-white/65 transition-colors"
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
            className="sticky top-0 z-10 border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between backdrop-blur-md"
            style={{ background: "rgba(7,22,24,0.80)" }}
          >
            <h1 className="text-[15px] font-semibold tracking-tight text-white">{title}</h1>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-white/25 hidden sm:block">
                {t("dash.saved")} {new Date(state.system.lastSaved).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              <span className="hidden sm:block h-3 w-px bg-white/10" />
              <CareLangSwitcher />
              <span className="h-3 w-px bg-white/10" />
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e07a5f]/18 text-[11px] font-bold text-[#e07a5f]">
                {initial}
              </div>
            </div>
          </div>

          {/* Mobile tab bar */}
          <div className="md:hidden border-b border-white/[0.06] px-4 py-2.5 flex gap-2 flex-wrap">
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-all ${
                  active === item.key
                    ? "bg-[#e07a5f] text-white"
                    : "bg-white/[0.06] text-white/55 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-7 md:px-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ── Stat Card ── */
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
    coral: "text-[#e07a5f]",
    teal: "text-teal-400",
    amber: "text-amber-400",
    sky: "text-sky-400",
    default: "text-white",
  }[tone];
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all hover:border-white/10 hover:bg-white/[0.05]">
      <div className="text-[10px] uppercase tracking-widest text-white/35">{label}</div>
      <div className={`mt-1.5 text-2xl font-semibold ${toneColor}`}>{value}</div>
      {sub && <div className="mt-0.5 text-[11px] text-white/30">{sub}</div>}
    </div>
  );
}

/* ── Pill ── */
export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "ok" | "warn" | "info" | "muted" | "coral";
}) {
  const tones = {
    default: "bg-white/10 text-white/80",
    ok: "bg-emerald-500/15 text-emerald-300",
    warn: "bg-amber-500/15 text-amber-300",
    info: "bg-sky-500/15 text-sky-300",
    muted: "bg-white/5 text-white/45",
    coral: "bg-[#e07a5f]/15 text-[#e07a5f]",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function statusTone(status: string): "default" | "ok" | "warn" | "info" | "muted" {
  switch (status) {
    case "New": return "info";
    case "In Progress": return "warn";
    case "Pending Info": return "warn";
    case "Resolved": return "ok";
    case "Closed": return "muted";
    default: return "default";
  }
}

/* ── Card ── */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 ${className ?? ""}`}>
      {children}
    </div>
  );
}

/* ── Input class ── */
export function inputCls(extra = "") {
  return `w-full rounded-lg border border-white/[0.08] bg-[#091a1c] px-3 py-2 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/50 ${extra}`;
}

/* ── Section header ── */
export function SectionHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[13px] font-semibold uppercase tracking-widest text-white/40">{title}</h2>
      {action}
    </div>
  );
}

/* ── Action button ── */
export function ActionBtn({ children, onClick, className = "" }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide hover:bg-[#d96a4f] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
