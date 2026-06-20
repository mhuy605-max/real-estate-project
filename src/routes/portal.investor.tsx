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
import { Home, LogOut, Send, Sparkles, TrendingUp } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";

import { WithLogo } from "@/components/portal/WithLogo";
import { VipBadge } from "@/components/portal/VipBadge";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import { usePortal, type InvestorProfile } from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/investor")({
  component: InvestorDashboard,
});

// Design tokens (same as admin)
const BG     = "bg-[#0a0a0a]";
const SURFACE= "bg-[#141414]";
const CARD   = "bg-[#1a1a1a]";
const BORDER = "border-white/[0.08]";
const EYEBROW= "text-[10px] tracking-[0.2em] uppercase font-medium text-white/50";
const MUTED  = "text-white/55";

function fmtMoney(n: number) {
  return `$${n.toLocaleString()}`;
}

function greeting(lang: string) {
  const h = new Date().getHours();
  const T = pt(lang as any).investor;
  if (h < 12) return T.greetingMorning;
  if (h < 18) return T.greetingAfternoon;
  return T.greetingEvening;
}

function InvestorDashboard() {
  const { state, logout, submitInquiry } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;
  const investor = user && user.role === "investor" ? (user as InvestorProfile) : null;

  const inquiries = useMemo(
    () => investor ? state.inquiries.filter((q) => q.investorId === investor.uid) : [],
    [state.inquiries, investor],
  );

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role !== "investor") return <Navigate to="/portal/admin" replace />;
  if (!investor) return null;

  const roi = ((investor.currentValue - investor.purchasePrice) / investor.purchasePrice) * 100;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  return (
    <div className={`min-h-screen ${BG}`}>
      {/* Topbar */}
      <header className={`border-b ${BORDER} ${SURFACE} sticky top-0 z-40`}>
        <div className="mx-auto max-w-7xl px-6 h-[64px] flex items-center justify-between">
          <WithLogo variant="dark" size={28} animate />
          <div className="flex items-center gap-2">
            <PortalLangSwitcher compact />
            <Link
              to="/with-property"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium ${MUTED} hover:text-white/80 border border-white/[0.08] rounded hover:border-white/15 transition-all`}
            >
              <Home className="h-3.5 w-3.5" />
              {T.nav.mainSite}
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium text-[#d9534f]/75 hover:text-[#d9534f] border border-[#d9534f]/20 hover:border-[#d9534f]/40 rounded hover:bg-[#d9534f]/[0.07] transition-all"
            >
              <LogOut className="h-3.5 w-3.5" />
              {T.nav.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p className={`${EYEBROW} text-[#14a76c] mb-1`}>{greeting(lang)}</p>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.01em]">{investor.name}</h1>
            <VipBadge grade={investor.vipGrade} />
          </div>
          <p className={`text-[12px] ${MUTED} mt-1`}>{investor.unit}</p>
          <p className={`text-[11px] text-white/35 mt-0.5`}>
            {T.investor.lastLogin}: <span className="font-mono">{investor.lastLogin}</span>
          </p>
        </motion.div>

        {/* KPI row */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <KpiCard label={T.investor.metrics.purchasePrice} value={fmtMoney(investor.purchasePrice)} sub="acquisition cost" />
          <KpiCard
            label={T.investor.metrics.currentValue}
            value={fmtMoney(investor.currentValue)}
            sub={
              <span className="inline-flex items-center gap-1 text-[#14a76c]">
                <TrendingUp className="h-3 w-3" />
                {roi >= 0 ? "+" : ""}{roi.toFixed(1)}% gain
              </span>
            }
          />
          <KpiCard
            label={T.investor.metrics.roi}
            value={`${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`}
            sub="total return"
            valueColor={roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}
          />
          <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
            <p className={`${EYEBROW} mb-3`}>{T.investor.metrics.rentStatus}</p>
            {investor.rentStatus === "Cleared" ? (
              <>
                <span className="inline-flex px-2.5 py-0.5 text-[11px] tracking-wide rounded bg-[#14a76c]/12 text-[#14a76c] font-medium">
                  {T.investor.rentStatusCleared}
                </span>
                <p className={`text-[11px] ${MUTED} mt-2`}>no action required</p>
              </>
            ) : (
              <>
                <span className="inline-flex px-2.5 py-0.5 text-[11px] tracking-wide rounded bg-[#d9534f]/12 text-[#d9534f] font-medium">
                  {T.investor.rentStatusPending} ⚠
                </span>
                <p className={`text-[11px] ${MUTED} mt-2`}>contact management</p>
              </>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="asset">
          <TabsList className={`${SURFACE} border ${BORDER} h-9 p-0.5 mb-6`}>
            {[
              ["asset", T.investor.tabs.asset],
              ["reports", T.investor.tabs.reports],
              ["inquiries", T.investor.tabs.inquiries],
            ].map(([val, label]) => (
              <TabsTrigger key={val} value={val}
                className="text-[12px] data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/50 px-4">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Asset tab */}
          <TabsContent value="asset" className="space-y-4">
            {/* AI insight */}
            <div className={`${CARD} border border-[#14a76c]/20 rounded-lg p-4 flex gap-3`}>
              <Sparkles className="h-4 w-4 text-[#14a76c] shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] text-white/90">
                  <span className="font-semibold text-white">{T.investor.aiInsight}:</span>{" "}
                  {T.investor.aiInsightBody}
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className={`${CARD} border ${BORDER} rounded-lg p-5`}>
              <p className="text-[14px] font-semibold text-white/90 mb-5">{T.investor.chartTitle}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={investor.monthlyRentalIncome} barCategoryGap="35%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 6, fontSize: 12, color: "rgba(255,255,255,0.85)",
                      }}
                      cursor={{ fill: "rgba(255,255,255,0.03)" }}
                    />
                    <Bar dataKey="income" fill="#14a76c" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          {/* Reports tab */}
          <TabsContent value="reports" className="space-y-3">
            {investor.reports.length === 0 ? (
              <div className={`${CARD} border ${BORDER} border-dashed rounded-lg p-10 text-center`}>
                <p className={`text-sm ${MUTED}`}>{T.investor.noReports}</p>
              </div>
            ) : (
              investor.reports.map((r) => (
                <div key={r.id} className={`${CARD} border ${BORDER} rounded-lg p-5`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <p className="text-[14px] font-semibold text-white/90">{r.title}</p>
                    <span className={`text-[11px] ${MUTED}`}>{r.timestamp}</span>
                  </div>
                  <p className="text-[13px] text-white/70">{r.content}</p>
                </div>
              ))
            )}
          </TabsContent>

          {/* Inquiries tab */}
          <TabsContent value="inquiries" className="space-y-4">
            <NewInquiryForm
              T={T.investor}
              onSubmit={(title, body) => submitInquiry(investor.uid, title, body)}
            />

            <div className="space-y-3">
              {inquiries.length === 0 ? (
                <div className={`${CARD} border ${BORDER} border-dashed rounded-lg p-8 text-center`}>
                  <p className={`text-sm ${MUTED}`}>{T.investor.noInquiries}</p>
                </div>
              ) : (
                inquiries.slice().reverse().map((q) => (
                  <div key={q.id} className={`${CARD} border ${BORDER} rounded-lg p-5`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-[14px] font-semibold text-white/90">{q.title}</p>
                        <p className={`text-[11px] ${MUTED} mt-0.5`}>{q.createdAt}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.12em] uppercase rounded border font-medium ${
                        q.status === "Answered"
                          ? "border-[#14a76c]/35 text-[#14a76c]"
                          : "border-[#d9534f]/35 text-[#d9534f]"
                      }`}>
                        {q.status === "Answered" ? T.investor.statusAnswered : T.investor.statusPending}
                      </span>
                    </div>
                    <p className="text-[13px] text-white/75 mb-3">{q.body}</p>
                    {q.reply && (
                      <div className="rounded bg-white/[0.05] border border-white/[0.07] px-4 py-3">
                        <p className={`${EYEBROW} mb-1`}>{T.investor.adminReply} · {q.repliedAt}</p>
                        <p className="text-[13px] text-white/80">{q.reply}</p>
                      </div>
                    )}
                  </div>
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

function KpiCard({ label, value, sub, valueColor = "text-white" }: {
  label: string; value: string; sub: React.ReactNode; valueColor?: string;
}) {
  return (
    <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
      <p className={`${EYEBROW} mb-3`}>{label}</p>
      <p className={`font-display text-[26px] font-semibold tracking-tight mb-1 ${valueColor}`}>{value}</p>
      <div className={`text-[11px] ${MUTED}`}>{sub}</div>
    </div>
  );
}

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
    setTitle(""); setBody("");
  }

  return (
    <div className={`${CARD} border ${BORDER} rounded-lg p-5`}>
      <p className="text-[14px] font-semibold text-white/90 mb-4">{T.newInquiry}</p>
      <form onSubmit={handle} className="space-y-3">
        <div className="space-y-1.5">
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">
            {T.inquiryTitle}
          </label>
          <Input id="t" value={title} onChange={(e) => setTitle(e.target.value)}
            className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-9" />
        </div>
        <div className="space-y-1.5">
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">
            {T.inquiryMessage}
          </label>
          <Textarea id="b" rows={4} value={body} onChange={(e) => setBody(e.target.value)}
            className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 resize-none" />
        </div>
        <button type="submit"
          className="inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
          <Send className="h-3.5 w-3.5" />
          {T.send}
        </button>
      </form>
    </div>
  );
}
