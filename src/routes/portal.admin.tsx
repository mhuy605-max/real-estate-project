import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Crown,
  Database,
  DollarSign,
  Home,
  LogOut,
  Mail,
  Menu,
  Send,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";

import { WithLogo } from "@/components/portal/WithLogo";
import { VipBadge } from "@/components/portal/VipBadge";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import {
  getInvestors,
  usePortal,
  type InvestorProfile,
  type VipGrade,
} from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/admin")({
  component: AdminDashboard,
});

const fmt = (n: number) => `$${n.toLocaleString()}`;

function AdminDashboard() {
  const { state, logout, backupNow } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;

  const investors = useMemo(() => getInvestors(state.users), [state.users]);
  const [activeTab, setActiveTab] = useState("crm");

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role !== "admin") return <Navigate to="/portal/investor" replace />;

  const totalAUM = investors.reduce((s, i) => s + i.currentValue, 0);
  const avgROI =
    investors.length === 0
      ? 0
      : investors.reduce(
          (s, i) => s + ((i.currentValue - i.purchasePrice) / i.purchasePrice) * 100,
          0,
        ) / investors.length;
  const vipCount = investors.filter(
    (i) => i.vipGrade === "Platinum" || i.vipGrade === "Diamond",
  ).length;
  const pendingCount = investors.filter((i) => i.rentStatus === "Pending").length;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  const navItems = [
    { id: "crm", label: T.admin.sidebar.crm, icon: Users },
    { id: "profile", label: T.admin.sidebar.actions, icon: Sparkles },
    { id: "inquiries", label: T.admin.sidebar.inquiries, icon: Mail },
    { id: "system", label: T.admin.sidebar.system, icon: Settings },
  ];

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="px-5 py-6">
        <WithLogo variant="light" size={28} animate />
      </div>
      <Separator />
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((n) => {
          const Icon = n.icon;
          const active = activeTab === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActiveTab(n.id)}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-all ${
                active
                  ? "bg-with-emerald text-white font-medium shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {n.label}
            </button>
          );
        })}
      </nav>
      <Separator />
      <div className="space-y-1 p-3">
        <div className="px-3 py-2">
          <PortalLangSwitcher />
        </div>
        <Button asChild variant="ghost" size="sm" className="w-full justify-start">
          <Link to="/with-property">
            <Home className="mr-1.5 h-4 w-4" />
            {T.nav.mainSite}
          </Link>
        </Button>
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="sm"
          className="w-full justify-start text-with-red hover:bg-with-red/10 hover:text-with-red"
        >
          <LogOut className="mr-1.5 h-4 w-4" />
          {T.nav.logout}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
        {sidebar}
      </aside>

      <main className="flex-1 min-w-0">
        <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3 lg:hidden">
          <WithLogo variant="light" size={28} />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              {sidebar}
            </SheetContent>
          </Sheet>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="portal-eyebrow">{T.admin.eyebrow}</p>
              <h1 className="font-display text-2xl font-semibold">
                {T.admin.welcome}, {user.name}
              </h1>
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">
              {new Date().toLocaleDateString(
                lang === "vi" ? "vi-VN" : lang === "ko" ? "ko-KR" : lang === "zh" ? "zh-CN" : "en-US",
                { weekday: "long", year: "numeric", month: "long", day: "numeric" },
              )}
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi label={T.admin.kpi.totalAum} value={fmt(totalAUM)} icon={<DollarSign className="h-4 w-4 text-with-emerald" />} />
            <Kpi label={T.admin.kpi.totalInvestors} value={investors.length.toString()} icon={<Users className="h-4 w-4 text-with-emerald" />} />
            <Kpi label={T.admin.kpi.avgRoi} value={`${avgROI.toFixed(1)}%`} icon={<TrendingUp className="h-4 w-4 text-with-emerald" />} />
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="portal-eyebrow !text-[10px] font-medium">
                  {T.admin.kpi.vipPending}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="vip-chip-platinum">
                  <Crown className="mr-1 h-3 w-3" />
                  {vipCount} VIP
                </Badge>
                <Badge className="bg-with-red/10 text-with-red hover:bg-with-red/10">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  {pendingCount}
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="bg-muted lg:hidden">
              <TabsTrigger value="crm">CRM</TabsTrigger>
              <TabsTrigger value="profile">{T.admin.sidebar.actions}</TabsTrigger>
              <TabsTrigger value="inquiries">{T.admin.sidebar.inquiries}</TabsTrigger>
              <TabsTrigger value="system">{T.admin.sidebar.system}</TabsTrigger>
            </TabsList>

            <TabsContent value="crm" className="mt-5">
              <CrmTab investors={investors} T={T} />
            </TabsContent>

            <TabsContent value="profile" className="mt-5">
              <ProfileActionsTab investors={investors} T={T} />
            </TabsContent>

            <TabsContent value="inquiries" className="mt-5">
              <GlobalInquiriesTab T={T} />
            </TabsContent>

            <TabsContent value="system" className="mt-5">
              <SystemTab
                T={T}
                onBackup={() => {
                  backupNow();
                  toast.success(T.admin.system.backupSuccess);
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Toaster richColors position="top-right" />
    </div>
  );
}

function Kpi({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="portal-eyebrow !text-[10px] font-medium">{label}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-display text-2xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}

type PortalT = ReturnType<typeof pt>;

function CrmTab({ investors, T }: { investors: InvestorProfile[]; T: PortalT }) {
  const { createInvestor } = usePortal();
  const [open, setOpen] = useState(false);
  const tc = T.admin.crm;
  const tf = T.admin.actions.fields;
  const [form, setForm] = useState({
    uid: "",
    password: "",
    name: "",
    unit: "",
    nationality: "",
    purchasePrice: 0,
    currentValue: 0,
    vipGrade: "Standard" as VipGrade,
    rentStatus: "Cleared" as "Cleared" | "Pending",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.uid || !form.password || !form.name) return;
    createInvestor({
      uid: form.uid,
      password: form.password,
      name: form.name.toUpperCase(),
      unit: form.unit,
      nationality: form.nationality,
      purchasePrice: Number(form.purchasePrice),
      currentValue: Number(form.currentValue) || Number(form.purchasePrice),
      vipGrade: form.vipGrade,
      rentStatus: form.rentStatus,
    });
    toast.success(`${T.admin.system.createSuccess}: ${form.name}`);
    setOpen(false);
    setForm({ uid: "", password: "", name: "", unit: "", nationality: "", purchasePrice: 0, currentValue: 0, vipGrade: "Standard", rentStatus: "Cleared" });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{tc.title}</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-with-emerald text-white hover:bg-with-emerald/90">
              {tc.newBtn}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{tc.dialogTitle}</DialogTitle>
              <DialogDescription>{tc.dialogDesc}</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
              <Field label={tf.uid} value={form.uid} onChange={(v) => setForm({ ...form, uid: v })} />
              <Field label={tf.password} type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
              <Field label={tf.name} value={form.name} onChange={(v) => setForm({ ...form, name: v })} full />
              <Field label={tf.unit} value={form.unit} onChange={(v) => setForm({ ...form, unit: v })} full />
              <Field label={tf.nationality} value={form.nationality} onChange={(v) => setForm({ ...form, nationality: v })} />
              <div>
                <Label className="mb-1.5 block text-xs">{tf.vipGrade}</Label>
                <Select value={form.vipGrade} onValueChange={(v) => setForm({ ...form, vipGrade: v as VipGrade })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(["Standard", "Gold", "Platinum", "Diamond"] as VipGrade[]).map((g) => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Field label={tf.purchasePrice} type="number" value={String(form.purchasePrice)} onChange={(v) => setForm({ ...form, purchasePrice: Number(v) })} />
              <Field label={tf.currentValue} type="number" value={String(form.currentValue)} onChange={(v) => setForm({ ...form, currentValue: Number(v) })} />
              <DialogFooter className="sm:col-span-2">
                <Button type="submit" className="bg-with-emerald text-white hover:bg-with-emerald/90">
                  {tc.createBtn}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="overflow-hidden rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">{tc.cols.uid}</TableHead>
              <TableHead className="font-semibold">{tc.cols.name}</TableHead>
              <TableHead className="font-semibold">{tc.cols.unit}</TableHead>
              <TableHead className="font-semibold">{tc.cols.vip}</TableHead>
              <TableHead className="text-right font-semibold">{tc.cols.purchase}</TableHead>
              <TableHead className="text-right font-semibold">{tc.cols.current}</TableHead>
              <TableHead className="text-right font-semibold">{tc.cols.roi}</TableHead>
              <TableHead className="font-semibold">{tc.cols.status}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investors.map((i) => {
              const roi = ((i.currentValue - i.purchasePrice) / i.purchasePrice) * 100;
              return (
                <TableRow key={i.uid} className={`transition-colors hover:bg-muted/40 ${i.disabled ? "opacity-50" : ""}`}>
                  <TableCell className="font-mono text-xs">{i.uid}</TableCell>
                  <TableCell className="font-medium">{i.name}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{i.unit}</TableCell>
                  <TableCell><VipBadge grade={i.vipGrade} withIcon={false} /></TableCell>
                  <TableCell className="text-right tabular-nums">{fmt(i.purchasePrice)}</TableCell>
                  <TableCell className="text-right tabular-nums">{fmt(i.currentValue)}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    <span className={roi >= 0 ? "text-with-emerald font-medium" : "text-with-red font-medium"}>
                      {roi.toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell>
                    {i.disabled ? (
                      <Badge variant="outline" className="border-with-red/40 text-with-red">{tc.statusDisabled}</Badge>
                    ) : i.rentStatus === "Pending" ? (
                      <Badge className="bg-with-red/10 text-with-red hover:bg-with-red/10">{tc.statusPending}</Badge>
                    ) : (
                      <Badge className="bg-with-emerald-soft text-with-emerald hover:bg-with-emerald-soft">{tc.statusActive}</Badge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", full = false }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label className="mb-1.5 block text-xs">{label}</Label>
      <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function ProfileActionsTab({ investors, T }: { investors: InvestorProfile[]; T: PortalT }) {
  const { state, updateInvestor, disableInvestor } = usePortal();
  const ta = T.admin.actions;
  const [selectedId, setSelectedId] = useState(investors[0]?.uid ?? "");
  const investor = investors.find((i) => i.uid === selectedId);

  const [currentValue, setCurrentValue] = useState(investor?.currentValue ?? 0);
  const [rentStatus, setRentStatus] = useState<"Cleared" | "Pending">(investor?.rentStatus ?? "Cleared");
  const [reportTitle, setReportTitle] = useState("");
  const [reportBody, setReportBody] = useState("");

  function handleSelect(uid: string) {
    setSelectedId(uid);
    const next = investors.find((i) => i.uid === uid);
    if (next) {
      setCurrentValue(next.currentValue);
      setRentStatus(next.rentStatus);
      setReportTitle("");
      setReportBody("");
    }
  }

  if (!investor) return <p className="text-sm text-muted-foreground">{ta.noInvestors}</p>;

  const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
  const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";

  function aiEstimate() {
    const factor = 1.1 + Math.random() * 0.15;
    setCurrentValue(Math.round(investor!.currentValue * factor));
    toast.success(T.admin.system.aiEstimateSuccess);
  }

  function save() {
    updateInvestor(
      investor!.uid,
      { currentValue: Number(currentValue), rentStatus },
      reportTitle && reportBody ? { title: reportTitle, content: reportBody } : undefined,
    );
    toast.success(T.admin.system.saveSuccess);
    setReportTitle("");
    setReportBody("");
  }

  const pr = ta.profileRows;

  return (
    <div className="space-y-5">
      <div className="max-w-sm">
        <Label className="mb-1.5 block text-xs">{ta.selectInvestor}</Label>
        <Select value={selectedId} onValueChange={handleSelect}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {investors.map((i) => (
              <SelectItem key={i.uid} value={i.uid}>
                {i.name} {i.disabled ? "(disabled)" : ""}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">{ta.profileTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 text-sm">
            <Row k={pr.name} v={investor.name} />
            <Row k={pr.uid} v={investor.uid} />
            <Row k={pr.unit} v={investor.unit} />
            <Row k={pr.nationality} v={investor.nationality} />
            <Row k={pr.vipGrade} v={<VipBadge grade={investor.vipGrade} />} />
            <Row k={pr.inquiries} v={String(inquiryCount)} />
          </CardContent>
        </Card>

        <Alert
          className={
            risk === "stable"
              ? "border-with-emerald/30 bg-with-emerald-soft"
              : "border-with-red/30 bg-with-red/10"
          }
        >
          <Sparkles className="h-4 w-4" />
          <AlertTitle>{ta.riskTitle}</AlertTitle>
          <AlertDescription>
            <span className={risk === "stable" ? "font-semibold text-with-emerald" : "font-semibold text-with-red"}>
              {risk === "stable" ? ta.riskStable : ta.riskHigh}
            </span>{" "}
            — {ta.riskDesc}
          </AlertDescription>
        </Alert>
      </div>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">{ta.updateTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className="mb-1.5 block text-xs">{ta.currentValue}</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(Number(e.target.value))}
                />
                <Button type="button" variant="outline" onClick={aiEstimate}>
                  <Sparkles className="mr-1.5 h-4 w-4 text-with-emerald" />
                  {ta.aiEstimate}
                </Button>
              </div>
            </div>
            <div>
              <Label className="mb-1.5 block text-xs">{ta.rentStatus}</Label>
              <Select value={rentStatus} onValueChange={(v) => setRentStatus(v as "Cleared" | "Pending")}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cleared">{ta.cleared}</SelectItem>
                  <SelectItem value="Pending">{ta.pending}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <p className="portal-eyebrow">{ta.reportSection}</p>
            <Input placeholder={ta.reportTitle} value={reportTitle} onChange={(e) => setReportTitle(e.target.value)} />
            <Textarea rows={3} placeholder={ta.reportContent} value={reportBody} onChange={(e) => setReportBody(e.target.value)} />
          </div>

          <Button onClick={save} className="bg-with-emerald text-white hover:bg-with-emerald/90">
            {ta.saveBtn}
          </Button>
        </CardContent>
      </Card>

      {!investor.disabled && (
        <Card className="rounded-2xl border-with-red/30">
          <CardHeader>
            <CardTitle className="text-base text-with-red">{ta.dangerZone}</CardTitle>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-with-red/40 text-with-red hover:bg-with-red/10">
                  {ta.disableBtn}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{ta.disableTitle}</DialogTitle>
                  <DialogDescription>{ta.disableDesc}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      disableInvestor(investor.uid);
                      toast.success(T.admin.system.disableSuccess);
                    }}
                  >
                    {ta.confirmDisable}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-1.5 last:border-0">
      <span className="text-xs text-muted-foreground">{k}</span>
      <span className="text-right text-sm font-medium">{v}</span>
    </div>
  );
}

function GlobalInquiriesTab({ T }: { T: PortalT }) {
  const { state, replyInquiry } = usePortal();
  const ti = T.admin.inquiries;
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const enriched = state.inquiries.map((q) => {
    const investor = state.users.find((u) => u.uid === q.investorId);
    return { ...q, investorName: investor?.name ?? q.investorId };
  });

  if (enriched.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        {ti.noInquiries}
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {enriched.map((q) => (
        <Card key={q.id} className="rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <CardTitle className="text-base">{q.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{q.investorName} · {q.createdAt}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  q.status === "Answered"
                    ? "border-with-emerald/40 text-with-emerald"
                    : "border-with-red/40 text-with-red"
                }
              >
                {q.status === "Answered" ? ti.statusAnswered : ti.statusPending}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-foreground/80">{q.body}</p>
            {q.reply ? (
              <div className="rounded-xl bg-muted px-4 py-3">
                <p className="portal-eyebrow !text-[9px]">Reply · {q.repliedAt}</p>
                <p className="mt-1 text-foreground/90">{q.reply}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <Textarea
                  rows={2}
                  placeholder={ti.replyPlaceholder}
                  value={drafts[q.id] ?? ""}
                  onChange={(e) => setDrafts({ ...drafts, [q.id]: e.target.value })}
                />
                <Button
                  size="sm"
                  className="bg-with-emerald text-white hover:bg-with-emerald/90"
                  onClick={() => {
                    const text = (drafts[q.id] ?? "").trim();
                    if (!text) return;
                    replyInquiry(q.id, text);
                    setDrafts({ ...drafts, [q.id]: "" });
                    toast.success(T.admin.system.replySuccess);
                  }}
                >
                  <Send className="mr-1.5 h-3.5 w-3.5" />
                  {ti.sendReply}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function SystemTab({ onBackup, T }: { onBackup: () => void; T: PortalT }) {
  const { state } = usePortal();
  const ts = T.admin.system;
  const dataSize = `${(JSON.stringify(state).length / 1024).toFixed(1)} KB`;
  const investors = getInvestors(state.users);

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Database className="h-4 w-4 text-with-emerald" />
          {ts.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label={ts.totalInvestors} value={String(investors.length)} />
          <Stat label={ts.dataSize} value={dataSize} />
          <Stat label={ts.lastSaved} value={new Date(state.system.lastSaved).toLocaleString()} />
          <Stat label={ts.lastBackup} value={new Date(state.system.lastBackup).toLocaleString()} />
        </div>
        <Separator />
        <Button onClick={onBackup} className="bg-with-emerald text-white hover:bg-with-emerald/90">
          <Database className="mr-1.5 h-4 w-4" />
          {ts.backupBtn}
        </Button>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/50 px-4 py-3">
      <p className="portal-eyebrow !text-[10px]">{label}</p>
      <p className="mt-1 font-mono text-sm">{value}</p>
    </div>
  );
}
