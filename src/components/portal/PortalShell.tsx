/**
 * PortalShell — Shared premium UI primitives for the WithProperty portal system.
 * Used by portal.admin, portal.staff, portal.investor.
 * Does NOT touch stores, routes, translations, or role logic.
 */

import { Link } from "@tanstack/react-router";
import { Home, LogOut, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

import { WithLogo } from "@/components/portal/WithLogo";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// ─── Design tokens ──────────────────────────────────────────────────────────
export const WP_BG = "bg-[#080808]";
export const WP_SURFACE = "bg-[#111111]";
export const WP_CARD = "bg-[#161616]";
export const WP_BORDER = "border-white/[0.08]";
export const WP_EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/45";
export const WP_MUTED = "text-white/50";
export const WP_ACCENT = "#14a76c";
export const WP_GOLD = "#d4af37";
export const WP_DANGER = "#d9534f";

// ─── PortalKpiCard ───────────────────────────────────────────────────────────
export function PortalKpiCard({
  label,
  value,
  sub,
  icon,
  valueColor = "text-white",
  accent,
}: {
  label: string;
  value: string;
  sub?: ReactNode;
  icon?: ReactNode;
  valueColor?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${WP_BORDER} ${WP_CARD} px-5 py-4 transition-all duration-200 hover:border-white/[0.13] hover:bg-[#1a1a1a]`}
    >
      {accent && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${WP_ACCENT}, transparent)`,
          }}
        />
      )}
      <div className="flex items-start justify-between mb-3">
        <span className={WP_EYEBROW}>{label}</span>
        {icon && <span className="opacity-70">{icon}</span>}
      </div>
      <p
        className={`font-display text-[26px] font-semibold tracking-tight leading-none mb-1.5 ${valueColor}`}
      >
        {value}
      </p>
      {sub && <div className={`text-[11px] ${WP_MUTED}`}>{sub}</div>}
    </div>
  );
}

// ─── PortalCard ──────────────────────────────────────────────────────────────
export function PortalCard({
  children,
  className = "",
  noPad,
}: {
  children: ReactNode;
  className?: string;
  noPad?: boolean;
}) {
  return (
    <div className={`rounded-xl border ${WP_BORDER} ${WP_CARD} ${noPad ? "" : "p-5"} ${className}`}>
      {children}
    </div>
  );
}

// ─── PortalSectionHeader ─────────────────────────────────────────────────────
export function PortalSectionHeader({
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
        <h2 className="text-[13px] font-semibold text-white/85 tracking-tight">{title}</h2>
        {sub && <p className={`text-[11px] ${WP_MUTED} mt-0.5`}>{sub}</p>}
      </div>
      {action}
    </div>
  );
}

// ─── PortalStatusBadge ───────────────────────────────────────────────────────
type BadgeTone = "green" | "gold" | "red" | "muted" | "blue";

const BADGE_TONE: Record<BadgeTone, string> = {
  green: "bg-[#14a76c]/12 text-[#14a76c] border-[#14a76c]/20",
  gold: "bg-[#d4af37]/12 text-[#d4af37] border-[#d4af37]/20",
  red: "bg-[#d9534f]/12 text-[#d9534f] border-[#d9534f]/20",
  blue: "bg-sky-500/12 text-sky-400 border-sky-500/20",
  muted: "bg-white/[0.06] text-white/40 border-white/10",
};

export function PortalStatusBadge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase ${BADGE_TONE[tone]}`}
    >
      {children}
    </span>
  );
}

// ─── Lead/Inquiry StatusBadge helper ────────────────────────────────────────
export function LeadStatusBadge({ status }: { status: string }) {
  const tone: BadgeTone =
    status === "New"
      ? "green"
      : status === "Contacted"
        ? "gold"
        : status === "Answered"
          ? "green"
          : status === "Pending"
            ? "red"
            : "muted";
  return <PortalStatusBadge tone={tone}>{status}</PortalStatusBadge>;
}

// ─── PortalEmptyState ────────────────────────────────────────────────────────
export function PortalEmptyState({
  message,
  icon,
  action,
}: {
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border ${WP_BORDER} border-dashed ${WP_CARD} px-8 py-14 text-center`}
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05]">
          {icon}
        </div>
      )}
      <p className={`text-[13px] ${WP_MUTED} max-w-xs leading-relaxed`}>{message}</p>
      {action}
    </div>
  );
}

// ─── PortalActionButton ───────────────────────────────────────────────────────
export function PortalActionButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  const variants = {
    primary: "bg-[#14a76c] text-white hover:bg-[#0f8a59] active:bg-[#0d7a51]",
    secondary: "bg-white/[0.08] text-white/80 hover:bg-white/[0.12] border border-white/[0.1]",
    danger: "bg-[#d9534f]/10 text-[#d9534f] hover:bg-[#d9534f]/[0.18] border border-[#d9534f]/25",
    ghost: "text-white/50 hover:text-white/80 hover:bg-white/[0.06]",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-[11px] gap-1.5",
    md: "px-4 py-2 text-[12px] gap-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center rounded-lg font-semibold tracking-wide transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

// ─── PortalDarkInput ─────────────────────────────────────────────────────────
export function PortalDarkInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
  required,
  span2,
  className = "",
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  span2?: boolean;
  className?: string;
}) {
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className={`block ${WP_EYEBROW} mb-1.5`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/85 placeholder:text-white/22 outline-none transition-all focus:border-[#14a76c]/50 focus:bg-[#1f1f1f] disabled:opacity-50 ${className}`}
      />
    </div>
  );
}

// ─── PortalDarkTextarea ───────────────────────────────────────────────────────
export function PortalDarkTextarea({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={`block ${WP_EYEBROW} mb-1.5`}>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/85 placeholder:text-white/22 outline-none transition-all focus:border-[#14a76c]/50 resize-none disabled:opacity-50"
      />
    </div>
  );
}

// ─── PortalNavItem type ───────────────────────────────────────────────────────
export interface PortalNavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

// ─── PortalSidebarContent ─────────────────────────────────────────────────────
// The inner sidebar — used in both the desktop aside and the mobile Sheet
export function PortalSidebarContent({
  activeTab,
  onSelect,
  navItems,
  mainSiteLabel,
  logoutLabel,
  onLogout,
}: {
  activeTab: string;
  onSelect: (id: string) => void;
  navItems: PortalNavItem[];
  mainSiteLabel: string;
  logoutLabel: string;
  onLogout: () => void;
}) {
  return (
    <div className={`flex h-full flex-col ${WP_BG}`}>
      {/* Brand */}
      <div className="px-5 py-6 border-b border-white/[0.07]">
        <WithLogo variant="dark" size={26} animate />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`relative flex w-full items-center gap-3 rounded-lg py-2.5 text-[13px] font-medium transition-all duration-150 ${
                isActive
                  ? "bg-white/[0.07] text-white pl-[11px] pr-3"
                  : "text-white/48 hover:text-white/80 hover:bg-white/[0.04] px-3"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#14a76c]" />
              )}
              <Icon className={`h-[15px] w-[15px] shrink-0 ${isActive ? "text-[#14a76c]" : ""}`} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge != null && item.badge > 0 && (
                <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-[#14a76c] px-1 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/[0.07] px-3 py-4 space-y-0.5">
        <div className="px-3 py-2">
          <PortalLangSwitcher />
        </div>
        <Link
          to="/with-property"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-white/48 hover:text-white/80 hover:bg-white/[0.04] transition-all"
        >
          <Home className="h-[15px] w-[15px] shrink-0" />
          {mainSiteLabel}
        </Link>
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#d9534f]/70 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.07] transition-all"
        >
          <LogOut className="h-[15px] w-[15px] shrink-0" />
          {logoutLabel}
        </button>
      </div>
    </div>
  );
}

// ─── PortalDashboardLayout ────────────────────────────────────────────────────
// Full-page layout: sidebar (desktop) + mobile sheet + main content
export function PortalDashboardLayout({
  activeTab,
  onSelect,
  navItems,
  mainSiteLabel,
  logoutLabel,
  onLogout,
  header,
  children,
}: {
  activeTab: string;
  onSelect: (id: string) => void;
  navItems: PortalNavItem[];
  mainSiteLabel: string;
  logoutLabel: string;
  onLogout: () => void;
  header: ReactNode;
  children: ReactNode;
}) {
  const sidebarContent = (
    <PortalSidebarContent
      activeTab={activeTab}
      onSelect={onSelect}
      navItems={navItems}
      mainSiteLabel={mainSiteLabel}
      logoutLabel={logoutLabel}
      onLogout={onLogout}
    />
  );

  return (
    <div className={`flex min-h-screen ${WP_BG}`}>
      {/* Desktop sidebar */}
      <aside className={`hidden w-60 shrink-0 border-r ${WP_BORDER} lg:flex lg:flex-col`}>
        {sidebarContent}
      </aside>

      <main className="flex-1 min-w-0 flex flex-col">
        {/* Mobile topbar */}
        <div
          className={`flex items-center justify-between border-b ${WP_BORDER} ${WP_SURFACE} px-4 py-3 lg:hidden`}
        >
          <WithLogo variant="dark" size={24} />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className={`w-60 p-0 border-r ${WP_BORDER} ${WP_BG}`}>
              {sidebarContent}
            </SheetContent>
          </Sheet>
        </div>

        {/* Page header */}
        <div className={`border-b ${WP_BORDER} ${WP_SURFACE} px-6 py-5 sm:px-10`}>{header}</div>

        {/* Content */}
        <div className="flex-1 px-6 py-8 sm:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
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
  );
}

// ─── PortalPageHeader ─────────────────────────────────────────────────────────
export function PortalPageHeader({
  eyebrow,
  title,
  sub,
  right,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow && <p className={`${WP_EYEBROW} text-[#14a76c] mb-1`}>{eyebrow}</p>}
        <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.02em] leading-tight">
          {title}
        </h1>
        {sub && <p className={`text-[12px] ${WP_MUTED} mt-1`}>{sub}</p>}
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}

// ─── PortalTabBar ─────────────────────────────────────────────────────────────
// Mobile-only horizontal tab bar (mirrors sidebar on small screens for portal pages)
export function PortalTabBar({
  items,
  active,
  onSelect,
}: {
  items: PortalNavItem[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className={`lg:hidden border-b ${WP_BORDER} ${WP_SURFACE} px-4 py-2.5 flex gap-1.5 flex-wrap`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${
            active === item.id
              ? "bg-[#14a76c] text-white"
              : "bg-white/[0.06] text-white/50 hover:text-white/80"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

// ─── PortalInlineReply ────────────────────────────────────────────────────────
// Reusable reply thread card (admin replies to investor inquiries, staff replies, etc.)
export function PortalReplyBlock({
  eyebrowLabel,
  timestamp,
  body,
}: {
  eyebrowLabel: string;
  timestamp?: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-4 py-3">
      <p className={`${WP_EYEBROW} mb-1.5`}>
        {eyebrowLabel}
        {timestamp && <span className="ml-2 text-white/30">{timestamp}</span>}
      </p>
      <p className="text-[13px] text-white/75 leading-relaxed">{body}</p>
    </div>
  );
}
