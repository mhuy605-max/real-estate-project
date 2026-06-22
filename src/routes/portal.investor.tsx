import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  CheckCircle2,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Send,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";

import { WithLogo } from "@/components/portal/WithLogo";
import { VipBadge } from "@/components/portal/VipBadge";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import {
  WP_BG,
  WP_CARD,
  WP_BORDER,
  WP_EYEBROW,
  WP_MUTED,
  WP_ACCENT,
  PortalKpiCard,
  PortalCard,
  PortalSectionHeader,
  PortalStatusBadge,
  PortalEmptyState,
  PortalActionButton,
  PortalDarkInput,
  PortalDarkTextarea,
  PortalReplyBlock,
} from "@/components/portal/PortalShell";
import { usePortal, type InvestorProfile } from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/investor")({
  component: InvestorDashboard,
});

function fmtMoney(n: number) {
  return `$${n.toLocaleString()}`;
}

function greeting(lang: string) {
  const h = new Date().getHours();
  const T = pt(lang as Parameters<typeof pt>[0]).investor;
  if (h < 12) return T.greetingMorning;
  if (h < 18) return T.greetingAfternoon;
  return T.greetingEvening;
}

// ─── Investor Dashboard ───────────────────────────────────────────────────────
function InvestorDashboard() {
  const { state, logout, submitInquiry } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;
  const investor = user && user.role === "investor" ? (user as InvestorProfile) : null;

  const inquiries = useMemo(
    () => (investor ? state.inquiries.filter((q) => q.investorId === investor.uid) : []),
    [state.inquiries, investor],
  );

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role === "admin") return <Navigate to="/portal/admin" replace />;
  if (user.role === "staff") return <Navigate to="/portal/staff" replace />;
  if (user.role !== "investor") return <Navigate to="/portal/login" replace />;
  if (!investor) return null;

  const roi = ((investor.currentValue - investor.purchasePrice) / investor.purchasePrice) * 100;
  const gain = investor.currentValue - investor.purchasePrice;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  return (
    <div className={`min-h-screen ${WP_BG}`}>
      {/* Topbar */}
      <header
        className="sticky top-0 z-40 border-b border-white/[0.07]"
        style={{ background: "rgba(8,8,8,0.90)", backdropFilter: "blur(12px)" }}
      >
        {/* Accent line */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${WP_ACCENT}, transparent 60%)` }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[60px] flex items-center justify-between gap-4">
          <WithLogo variant="dark" size={26} animate />
          <div className="flex items-center gap-2">
            <PortalLangSwitcher compact />
            <Link
              to="/with-property"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium ${WP_MUTED} hover:text-white/80 border border-white/[0.08] rounded-lg hover:border-white/15 transition-all`}
            >
              <Home className="h-3.5 w-3.5" />
              {T.nav.mainSite}
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium text-[#d9534f]/75 hover:text-[#d9534f] border border-[#d9534f]/20 hover:border-[#d9534f]/40 rounded-lg hover:bg-[#d9534f]/[0.07] transition-all"
            >
              <LogOut className="h-3.5 w-3.5" />
              {T.nav.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <p className={`${WP_EYEBROW} text-[${WP_ACCENT}] mb-2`} style={{ color: WP_ACCENT }}>
            {greeting(lang)}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] leading-tight">
              {investor.name}
            </h1>
            <VipBadge grade={investor.vipGrade} />
          </div>
          <p className={`text-[13px] ${WP_MUTED} mt-1`}>{investor.unit}</p>
          <p className="text-[11px] text-white/30 mt-0.5">
            {T.investor.lastLogin}:{" "}
            <span className="font-mono text-white/45">{investor.lastLogin}</span>
          </p>
        </motion.div>

        {/* KPI row */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <PortalKpiCard
            label={T.investor.metrics.purchasePrice}
            value={fmtMoney(investor.purchasePrice)}
            sub="acquisition cost"
            icon={<DollarSign className="h-4 w-4 text-white/30" />}
          />
          <PortalKpiCard
            label={T.investor.metrics.currentValue}
            value={fmtMoney(investor.currentValue)}
            sub={
              <span className="inline-flex items-center gap-1 text-[#14a76c]">
                <TrendingUp className="h-3 w-3" />
                {gain >= 0 ? "+" : ""}{fmtMoney(Math.abs(gain))} gain
              </span>
            }
            icon={<TrendingUp className="h-4 w-4 text-[#14a76c]" />}
            accent
          />
          <PortalKpiCard
            label={T.investor.metrics.roi}
            value={`${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`}
            sub="total return"
            icon={
              roi >= 0
                ? <Sparkles className="h-4 w-4 text-[#14a76c]" />
                : <AlertTriangle className="h-4 w-4 text-[#d9534f]" />
            }
            valueColor={roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}
          />
          {/* Rent status card */}
          <div className={`rounded-xl border ${WP_CARD} ${investor.rentStatus === "Cleared" ? "border-[#14a76c]/20" : "border-[#d9534f]/25"} px-5 py-4`}>
            <p className={`${WP_EYEBROW} mb-3`}>{T.investor.metrics.rentStatus}</p>
            {investor.rentStatus === "Cleared" ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14a76c]" />
                  <PortalStatusBadge tone="green">{T.investor.rentStatusCleared}</PortalStatusBadge>
                </div>
                <p className={`text-[11px] ${WP_MUTED}`}>no action required</p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-[#d9534f]" />
                  <PortalStatusBadge tone="red">{T.investor.rentStatusPending}</PortalStatusBadge>
                </div>
                <p className={`text-[11px] ${WP_MUTED}`}>contact management</p>
              </>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="asset">
          <TabsList className="bg-[#111111] border border-white/[0.07] h-10 p-1 rounded-xl mb-6 gap-0.5">
            {[
              ["asset",     T.investor.tabs.asset,     FileText],
              ["reports",   T.investor.tabs.reports,   Sparkles],
              ["inquiries", T.investor.tabs.inquiries, MessageSquare],
            ].map(([val, label, Icon]: [string, string, React.ComponentType<{className?: string}>]) => (
              <TabsTrigger
                key={val}
                value={val}
                className="flex items-center gap-1.5 text-[12px] font-medium data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/45 hover:text-white/70 px-4 rounded-lg transition-all"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Asset tab */}
          <TabsContent value="asset" className="space-y-4 mt-0">
            {/* AI insight */}
            <div className={`relative overflow-hidden rounded-xl border border-[#14a76c]/20 ${WP_CARD} p-4 flex gap-3`}>
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{ background: "radial-gradient(ellipse 80% 100% at 0% 50%, #14a76c, transparent)" }}
              />
              <Sparkles className="h-4 w-4 text-[#14a76c] shrink-0 mt-0.5 relative" />
              <div className="relative">
                <p className="text-[13px] text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">{T.investor.aiInsight}:</span>{" "}
                  {T.investor.aiInsightBody}
                </p>
              </div>
            </div>

            {/* Chart */}
            <PortalCard>
              <PortalSectionHeader
                title={T.investor.chartTitle}
                sub="monthly rental income"
              />
              <div className="h-64 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={investor.monthlyRentalIncome} barCategoryGap="35%">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.35)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.35)" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v.toLocaleString()}`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 10,
                        fontSize: 12,
                        color: "rgba(255,255,255,0.85)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      }}
                      cursor={{ fill: "rgba(255,255,255,0.025)" }}
                      formatter={(v: number) => [`$${v.toLocaleString()}`, "Income"]}
                    />
                    <Bar
                      dataKey="income"
                      fill="#14a76c"
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </PortalCard>

            {/* Asset summary row */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Unit", investor.unit],
                ["Nationality", investor.nationality],
                ["VIP Tier", investor.vipGrade],
              ].map(([k, v]) => (
                <div key={k} className={`rounded-xl border ${WP_BORDER} ${WP_CARD} px-4 py-3`}>
                  <p className={`${WP_EYEBROW} mb-1.5`}>{k}</p>
                  <p className="text-[13px] font-semibold text-white/85">{v}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Reports tab */}
          <TabsContent value="reports" className="space-y-3 mt-0">
            {investor.reports.length === 0 ? (
              <PortalEmptyState
                message={T.investor.noReports}
                icon={<FileText className="h-5 w-5 text-white/30" />}
              />
            ) : (
              investor.reports.map((r) => (
                <PortalCard key={r.id}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#14a76c]/10">
                        <FileText className="h-3.5 w-3.5 text-[#14a76c]" />
                      </div>
                      <p className="text-[14px] font-semibold text-white/92 leading-snug">{r.title}</p>
                    </div>
                    <span className={`text-[11px] ${WP_MUTED} tabular-nums shrink-0`}>{r.timestamp}</span>
                  </div>
                  <p className="text-[13px] text-white/68 leading-relaxed pl-[2.625rem]">{r.content}</p>
                </PortalCard>
              ))
            )}
          </TabsContent>

          {/* Inquiries tab */}
          <TabsContent value="inquiries" className="space-y-5 mt-0">
            <NewInquiryForm
              T={T.investor}
              onSubmit={(title, body) => submitInquiry(investor.uid, title, body)}
            />

            <div className="space-y-3">
              {inquiries.length === 0 ? (
                <PortalEmptyState
                  message={T.investor.noInquiries}
                  icon={<MessageSquare className="h-5 w-5 text-white/30" />}
                />
              ) : (
                inquiries
                  .slice()
                  .reverse()
                  .map((q) => (
                    <PortalCard key={q.id}>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="text-[14px] font-semibold text-white/92 leading-snug">
                            {q.title}
                          </p>
                          <p className={`text-[11px] ${WP_MUTED} mt-0.5`}>{q.createdAt}</p>
                        </div>
                        <PortalStatusBadge tone={q.status === "Answered" ? "green" : "red"}>
                          {q.status === "Answered"
                            ? T.investor.statusAnswered
                            : T.investor.statusPending}
                        </PortalStatusBadge>
                      </div>
                      <p className="text-[13px] text-white/72 leading-relaxed mb-3">{q.body}</p>
                      {q.reply && (
                        <PortalReplyBlock
                          eyebrowLabel={T.investor.adminReply}
                          timestamp={q.repliedAt}
                          body={q.reply}
                        />
                      )}
                    </PortalCard>
                  ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}

// ─── New Inquiry Form ─────────────────────────────────────────────────────────
function NewInquiryForm({
  T,
  onSubmit,
}: {
  T: ReturnType<typeof pt>["investor"];
  onSubmit: (title: string, body: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handle(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onSubmit(title.trim(), body.trim());
    setTitle("");
    setBody("");
  }

  return (
    <PortalCard>
      <PortalSectionHeader
        title={T.newInquiry}
        sub="We'll respond within 1–2 business days"
      />
      <form onSubmit={handle} className="mt-4 space-y-3">
        <PortalDarkInput
          id="inquiry-title"
          label={T.inquiryTitle}
          value={title}
          onChange={setTitle}
          required
        />
        <PortalDarkTextarea
          id="inquiry-body"
          label={T.inquiryMessage}
          value={body}
          onChange={setBody}
          rows={4}
        />
        <PortalActionButton type="submit" variant="primary">
          <Send className="h-3.5 w-3.5" />
          {T.send}
        </PortalActionButton>
      </form>
    </PortalCard>
  );
}
