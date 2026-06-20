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

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { WithLogo } from "@/components/portal/WithLogo";
import { VipBadge } from "@/components/portal/VipBadge";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
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
    () =>
      investor
        ? state.inquiries.filter((q) => q.investorId === investor.uid)
        : [],
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
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8">
      <header className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <WithLogo variant="light" size={32} animate />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <PortalLangSwitcher compact />
          <Button asChild variant="ghost" size="sm">
            <Link to="/with-property">
              <Home className="mr-1.5 h-4 w-4" />
              {T.nav.mainSite}
            </Link>
          </Button>
          <Button onClick={handleLogout} size="sm" variant="outline">
            <LogOut className="mr-1.5 h-4 w-4" />
            {T.nav.logout}
          </Button>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6"
      >
        <p className="portal-eyebrow">{greeting(lang)}</p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold">{investor.name}</h1>
          <VipBadge grade={investor.vipGrade} />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{investor.unit}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {T.investor.lastLogin}: <span className="font-mono">{investor.lastLogin}</span>
        </p>
      </motion.div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label={T.investor.metrics.purchasePrice} value={fmtMoney(investor.purchasePrice)} />
        <MetricCard
          label={T.investor.metrics.currentValue}
          value={fmtMoney(investor.currentValue)}
          delta={
            <span className="inline-flex items-center gap-1 text-xs font-medium text-with-emerald">
              <TrendingUp className="h-3 w-3" />
              {roi >= 0 ? "+" : ""}{roi.toFixed(1)}%
            </span>
          }
        />
        <MetricCard label={T.investor.metrics.roi} value={`${roi.toFixed(1)}%`} />
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="portal-eyebrow !text-[10px] font-medium">
              {T.investor.metrics.rentStatus}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {investor.rentStatus === "Cleared" ? (
              <Badge className="bg-with-emerald-soft text-with-emerald hover:bg-with-emerald-soft">
                {T.investor.rentStatusCleared}
              </Badge>
            ) : (
              <Badge className="bg-with-red/10 text-with-red hover:bg-with-red/10">
                {T.investor.rentStatusPending} ⚠
              </Badge>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="asset" className="mt-8">
        <TabsList className="bg-muted">
          <TabsTrigger value="asset">{T.investor.tabs.asset}</TabsTrigger>
          <TabsTrigger value="reports">{T.investor.tabs.reports}</TabsTrigger>
          <TabsTrigger value="inquiries">{T.investor.tabs.inquiries}</TabsTrigger>
        </TabsList>

        <TabsContent value="asset" className="mt-5 space-y-5">
          <Alert className="border-with-emerald/30 bg-with-emerald-soft text-foreground">
            <Sparkles className="h-4 w-4 text-with-emerald" />
            <AlertDescription>
              <span className="font-medium">{T.investor.aiInsight}:</span> {T.investor.aiInsightBody}
            </AlertDescription>
          </Alert>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">{T.investor.chartTitle}</CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={investor.monthlyRentalIncome}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 12 }}
                  />
                  <Bar dataKey="income" fill="#14a76c" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-5 space-y-4">
          {investor.reports.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              {T.investor.noReports}
            </p>
          ) : (
            investor.reports.map((r) => (
              <Card key={r.id} className="rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <CardTitle className="text-base">{r.title}</CardTitle>
                    <span className="text-xs text-muted-foreground">{r.timestamp}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-foreground/80">{r.content}</CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="inquiries" className="mt-5 space-y-5">
          <NewInquiryForm
            T={T.investor}
            onSubmit={(title, body) => submitInquiry(investor.uid, title, body)}
          />

          <div className="space-y-3">
            {inquiries.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                {T.investor.noInquiries}
              </p>
            ) : (
              inquiries
                .slice()
                .reverse()
                .map((q) => (
                  <Card key={q.id} className="rounded-2xl">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <CardTitle className="text-base">{q.title}</CardTitle>
                        <Badge
                          variant="outline"
                          className={
                            q.status === "Answered"
                              ? "border-with-emerald/40 text-with-emerald"
                              : "border-with-red/40 text-with-red"
                          }
                        >
                          {q.status === "Answered" ? T.investor.statusAnswered : T.investor.statusPending}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{q.createdAt}</p>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <p className="text-foreground/80">{q.body}</p>
                      {q.reply && (
                        <div className="rounded-xl bg-muted px-4 py-3">
                          <p className="portal-eyebrow !text-[9px]">
                            {T.investor.adminReply} · {q.repliedAt}
                          </p>
                          <p className="mt-1 text-foreground/90">{q.reply}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricCard({ label, value, delta }: { label: string; value: string; delta?: React.ReactNode }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="portal-eyebrow !text-[10px] font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <p className="font-display text-2xl font-semibold">{value}</p>
          {delta}
        </div>
      </CardContent>
    </Card>
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
    setTitle("");
    setBody("");
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{T.newInquiry}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handle} className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="t">{T.inquiryTitle}</Label>
            <Input id="t" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="b">{T.inquiryMessage}</Label>
            <Textarea id="b" rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          <Button type="submit" className="bg-with-emerald text-white hover:bg-with-emerald/90">
            <Send className="mr-1.5 h-4 w-4" />
            {T.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
