import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ClipboardList,
  Crown,
  Database,
  DollarSign,
  Mail,
  Pencil,
  Send,
  Settings,
  Shield,
  Sparkles,
  Trash2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

import { VipBadge } from "@/components/portal/VipBadge";
import {
  WP_BG,
  WP_CARD,
  WP_BORDER,
  WP_EYEBROW,
  WP_MUTED,
  PortalDashboardLayout,
  PortalKpiCard,
  PortalCard,
  PortalSectionHeader,
  PortalStatusBadge,
  LeadStatusBadge,
  PortalEmptyState,
  PortalActionButton,
  PortalDarkInput,
  PortalDarkTextarea,
  PortalReplyBlock,
  type PortalNavItem,
} from "@/components/portal/PortalShell";
import {
  getAdmins,
  getInvestors,
  getStaff,
  usePortal,
  type ActivityLog,
  type ConsultationLead,
  type InvestorProfile,
  type VipGrade,
} from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/admin")({
  component: AdminDashboard,
});

const fmt = (n: number) => `$${n.toLocaleString()}`;
type PortalT = ReturnType<typeof pt>;

// ─── Dark Select (local — wraps Radix Select with typed children) ─────────────
function DarkSelect({
  value,
  onValueChange,
  children,
}: {
  value: string;
  onValueChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="bg-[#1e1e1e] border-white/[0.1] text-white/90 h-9 text-[13px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-[#1a1a1a] border-white/[0.1]">{children}</SelectContent>
    </Select>
  );
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────
function AdminDashboard() {
  const { state, logout, backupNow } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;

  const investors = useMemo(() => getInvestors(state.users), [state.users]);
  const [activeTab, setActiveTab] = useState("crm");

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role === "staff") return <Navigate to="/portal/staff" replace />;
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
  const newLeads = state.leads.filter((l) => l.status === "New").length;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  const navItems: PortalNavItem[] = [
    { id: "crm", label: T.admin.sidebar.crm, icon: Users },
    { id: "profile", label: T.admin.sidebar.actions, icon: Sparkles },
    { id: "inquiries", label: T.admin.sidebar.inquiries, icon: Mail },
    { id: "leads", label: T.admin.leads.title, icon: ClipboardList, badge: newLeads },
    { id: "team", label: T.admin.team.title, icon: Shield },
    { id: "system", label: T.admin.sidebar.system, icon: Settings },
  ];

  const dateLabel = new Date().toLocaleDateString(
    lang === "vi" ? "vi-VN" : lang === "ko" ? "ko-KR" : lang === "zh" ? "zh-CN" : "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );

  const pageHeader = (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className={`${WP_EYEBROW} text-[#14a76c] mb-1`}>{T.admin.eyebrow}</p>
        <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.02em] leading-tight">
          {T.admin.welcome}, {user.name}
        </h1>
      </div>
      <p className={`text-[11px] ${WP_MUTED} tabular-nums`}>{dateLabel}</p>
    </div>
  );

  function renderTab() {
    switch (activeTab) {
      case "crm":
        return <CrmTab investors={investors} T={T} />;
      case "profile":
        return <ProfileActionsTab investors={investors} T={T} />;
      case "inquiries":
        return <GlobalInquiriesTab T={T} />;
      case "leads":
        return <LeadsTab T={T} />;
      case "team":
        return <TeamTab T={T} />;
      case "system":
        return (
          <SystemTab
            T={T}
            onBackup={() => {
              backupNow();
              toast.success(T.admin.system.backupSuccess);
            }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <PortalDashboardLayout
        activeTab={activeTab}
        onSelect={setActiveTab}
        navItems={navItems}
        mainSiteLabel={T.nav.mainSite}
        logoutLabel={T.nav.logout}
        onLogout={handleLogout}
        header={pageHeader}
      >
        {/* KPI strip */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <PortalKpiCard
            label={T.admin.kpi.totalAum}
            value={fmt(totalAUM)}
            sub={`${investors.length} active positions`}
            icon={<DollarSign className="h-4 w-4 text-[#14a76c]" />}
            accent
          />
          <PortalKpiCard
            label={T.admin.kpi.totalInvestors}
            value={String(investors.length)}
            sub={`${vipCount} VIP tier`}
            icon={<Users className="h-4 w-4 text-[#14a76c]" />}
          />
          <PortalKpiCard
            label={T.admin.kpi.avgRoi}
            value={`${avgROI.toFixed(1)}%`}
            sub="portfolio average"
            icon={<TrendingUp className="h-4 w-4 text-[#14a76c]" />}
            valueColor={avgROI >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}
          />
          <PortalKpiCard
            label={T.admin.leads.title}
            value={String(state.leads.length)}
            sub={newLeads > 0 ? `${newLeads} new this session` : "all reviewed"}
            icon={
              pendingCount > 0 ? (
                <AlertTriangle className="h-4 w-4 text-[#d9534f]" />
              ) : (
                <Crown className="h-4 w-4 text-[#d4af37]" />
              )
            }
          />
        </div>

        {renderTab()}
      </PortalDashboardLayout>
      <Toaster richColors position="top-right" theme="dark" />
    </>
  );
}

// ─── CRM Tab ──────────────────────────────────────────────────────────────────
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
    setForm({
      uid: "",
      password: "",
      name: "",
      unit: "",
      nationality: "",
      purchasePrice: 0,
      currentValue: 0,
      vipGrade: "Standard",
      rentStatus: "Cleared",
    });
  }

  return (
    <div className="space-y-4">
      <PortalSectionHeader
        title={tc.title}
        sub={`${investors.length} investor records`}
        action={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <PortalActionButton variant="primary" size="sm">
                {tc.newBtn}
              </PortalActionButton>
            </DialogTrigger>
            <DialogContent className={`max-w-lg ${WP_CARD} border border-white/[0.09] text-white`}>
              <DialogHeader>
                <DialogTitle className="text-white">{tc.dialogTitle}</DialogTitle>
                <DialogDescription className="text-white/45">{tc.dialogDesc}</DialogDescription>
              </DialogHeader>
              <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
                <PortalDarkInput
                  id="uid"
                  label={tf.uid}
                  value={form.uid}
                  onChange={(v) => setForm({ ...form, uid: v })}
                />
                <PortalDarkInput
                  id="pw"
                  label={tf.password}
                  type="password"
                  value={form.password}
                  onChange={(v) => setForm({ ...form, password: v })}
                />
                <PortalDarkInput
                  id="name"
                  label={tf.name}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  span2
                />
                <PortalDarkInput
                  id="unit"
                  label={tf.unit}
                  value={form.unit}
                  onChange={(v) => setForm({ ...form, unit: v })}
                  span2
                />
                <PortalDarkInput
                  id="nat"
                  label={tf.nationality}
                  value={form.nationality}
                  onChange={(v) => setForm({ ...form, nationality: v })}
                />
                <div>
                  <label className={`block ${WP_EYEBROW} mb-1.5`}>{tf.vipGrade}</label>
                  <DarkSelect
                    value={form.vipGrade}
                    onValueChange={(v) => setForm({ ...form, vipGrade: v as VipGrade })}
                  >
                    {(["Standard", "Gold", "Platinum", "Diamond"] as VipGrade[]).map((g) => (
                      <SelectItem
                        key={g}
                        value={g}
                        className="text-white/85 focus:bg-white/10 focus:text-white"
                      >
                        {g}
                      </SelectItem>
                    ))}
                  </DarkSelect>
                </div>
                <PortalDarkInput
                  id="pp"
                  label={tf.purchasePrice}
                  type="number"
                  value={String(form.purchasePrice)}
                  onChange={(v) => setForm({ ...form, purchasePrice: Number(v) })}
                />
                <PortalDarkInput
                  id="cv"
                  label={tf.currentValue}
                  type="number"
                  value={String(form.currentValue)}
                  onChange={(v) => setForm({ ...form, currentValue: Number(v) })}
                />
                <DialogFooter className="sm:col-span-2">
                  <PortalActionButton type="submit" variant="primary">
                    {tc.createBtn}
                  </PortalActionButton>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        }
      />

      <PortalCard noPad>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
              {[
                tc.cols.uid,
                tc.cols.name,
                tc.cols.unit,
                tc.cols.vip,
                tc.cols.purchase,
                tc.cols.current,
                tc.cols.roi,
                tc.cols.status,
              ].map((col, i) => (
                <TableHead
                  key={i}
                  className={`${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium ${i >= 4 && i <= 6 ? "text-right" : ""}`}
                >
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {investors.map((inv) => {
              const roi = ((inv.currentValue - inv.purchasePrice) / inv.purchasePrice) * 100;
              return (
                <TableRow
                  key={inv.uid}
                  className={`border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors ${inv.disabled ? "opacity-40" : ""}`}
                >
                  <TableCell className="font-mono text-[11px] text-white/50 py-3.5 px-4">
                    {inv.uid}
                  </TableCell>
                  <TableCell className="text-[13px] font-semibold text-white/90 px-4">
                    {inv.name}
                  </TableCell>
                  <TableCell className="text-[12px] text-white/50 px-4">{inv.unit}</TableCell>
                  <TableCell className="px-4">
                    <VipBadge grade={inv.vipGrade} withIcon={false} />
                  </TableCell>
                  <TableCell className="text-right text-[12px] tabular-nums text-white/55 px-4">
                    {fmt(inv.purchasePrice)}
                  </TableCell>
                  <TableCell className="text-right text-[12px] tabular-nums text-white/85 font-medium px-4">
                    {fmt(inv.currentValue)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums px-4">
                    <span
                      className={`text-[12px] font-semibold ${roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}`}
                    >
                      {roi >= 0 ? "+" : ""}
                      {roi.toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell className="px-4">
                    {inv.disabled ? (
                      <PortalStatusBadge tone="red">{tc.statusDisabled}</PortalStatusBadge>
                    ) : inv.rentStatus === "Pending" ? (
                      <PortalStatusBadge tone="red">{tc.statusPending}</PortalStatusBadge>
                    ) : (
                      <PortalStatusBadge tone="green">{tc.statusActive}</PortalStatusBadge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </PortalCard>
    </div>
  );
}

// ─── Profile Actions Tab ───────────────────────────────────────────────────────
function ProfileActionsTab({ investors, T }: { investors: InvestorProfile[]; T: PortalT }) {
  const { state, updateInvestor, disableInvestor } = usePortal();
  const ta = T.admin.actions;
  const [selectedId, setSelectedId] = useState(investors[0]?.uid ?? "");
  const investor = investors.find((i) => i.uid === selectedId);
  const [currentValue, setCurrentValue] = useState(investor?.currentValue ?? 0);
  const [rentStatus, setRentStatus] = useState<"Cleared" | "Pending">(
    investor?.rentStatus ?? "Cleared",
  );
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

  if (!investor) return <p className={`text-sm ${WP_MUTED}`}>{ta.noInvestors}</p>;

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
    <div className="space-y-4">
      <div className="max-w-xs">
        <label className={`block ${WP_EYEBROW} mb-1.5`}>{ta.selectInvestor}</label>
        <DarkSelect value={selectedId} onValueChange={handleSelect}>
          {investors.map((i) => (
            <SelectItem
              key={i.uid}
              value={i.uid}
              className="text-white/85 focus:bg-white/10 focus:text-white"
            >
              {i.name} {i.disabled ? "(disabled)" : ""}
            </SelectItem>
          ))}
        </DarkSelect>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Profile card */}
        <PortalCard>
          <p className={`${WP_EYEBROW} mb-4`}>{ta.profileTitle}</p>
          {[
            [pr.name, investor.name],
            [pr.uid, investor.uid],
            [pr.unit, investor.unit],
            [pr.nationality, investor.nationality],
            [pr.inquiries, String(inquiryCount)],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0"
            >
              <span className={`text-[12px] ${WP_MUTED}`}>{k}</span>
              <span className="text-[13px] text-white/85 font-medium">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between py-2.5">
            <span className={`text-[12px] ${WP_MUTED}`}>{pr.vipGrade}</span>
            <VipBadge grade={investor.vipGrade} />
          </div>
        </PortalCard>

        {/* Risk card */}
        <div
          className={`relative overflow-hidden rounded-xl border ${WP_CARD} p-5 ${risk === "stable" ? "border-[#14a76c]/25" : "border-[#d9534f]/25"}`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              background:
                risk === "stable"
                  ? "radial-gradient(ellipse 80% 60% at 0% 0%, #14a76c, transparent)"
                  : "radial-gradient(ellipse 80% 60% at 0% 0%, #d9534f, transparent)",
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles
                className={`h-3.5 w-3.5 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`}
              />
              <p className={WP_EYEBROW}>{ta.riskTitle}</p>
            </div>
            <p
              className={`text-[24px] font-display font-semibold mb-2 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`}
            >
              {risk === "stable" ? ta.riskStable : ta.riskHigh}
            </p>
            <p className={`text-[12px] ${WP_MUTED}`}>{ta.riskDesc}</p>
          </div>
        </div>
      </div>

      {/* Update panel */}
      <PortalCard>
        <p className={`${WP_EYEBROW} mb-4`}>{ta.updateTitle}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={`block ${WP_EYEBROW} mb-1.5`}>{ta.currentValue}</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={currentValue}
                onChange={(e) => setCurrentValue(Number(e.target.value))}
                className="flex-1 h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/90 outline-none transition focus:border-[#14a76c]/50"
              />
              <button
                type="button"
                onClick={aiEstimate}
                className="flex items-center gap-1.5 px-3 h-9 text-[11px] border border-white/[0.1] rounded-lg text-white/55 hover:text-white/85 hover:border-white/20 transition-colors whitespace-nowrap"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#14a76c]" />
                {ta.aiEstimate}
              </button>
            </div>
          </div>
          <div>
            <label className={`block ${WP_EYEBROW} mb-1.5`}>{ta.rentStatus}</label>
            <DarkSelect
              value={rentStatus}
              onValueChange={(v) => setRentStatus(v as "Cleared" | "Pending")}
            >
              <SelectItem
                value="Cleared"
                className="text-white/85 focus:bg-white/10 focus:text-white"
              >
                {ta.cleared}
              </SelectItem>
              <SelectItem
                value="Pending"
                className="text-white/85 focus:bg-white/10 focus:text-white"
              >
                {ta.pending}
              </SelectItem>
            </DarkSelect>
          </div>
        </div>
        <div className="border-t border-white/[0.07] mt-5 pt-5 space-y-3">
          <p className={WP_EYEBROW}>{ta.reportSection}</p>
          <input
            type="text"
            placeholder={ta.reportTitle}
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            className="w-full h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50"
          />
          <textarea
            rows={3}
            placeholder={ta.reportContent}
            value={reportBody}
            onChange={(e) => setReportBody(e.target.value)}
            className="w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
          />
        </div>
        <div className="mt-4">
          <PortalActionButton onClick={save} variant="primary">
            {ta.saveBtn}
          </PortalActionButton>
        </div>
      </PortalCard>

      {/* Danger zone */}
      {!investor.disabled && (
        <div className={`rounded-xl border border-[#d9534f]/20 ${WP_CARD} p-5`}>
          <p className={`${WP_EYEBROW} text-[#d9534f]/65 mb-3`}>{ta.dangerZone}</p>
          <Dialog>
            <DialogTrigger asChild>
              <PortalActionButton variant="danger">{ta.disableBtn}</PortalActionButton>
            </DialogTrigger>
            <DialogContent className={`${WP_CARD} border border-white/[0.09] text-white`}>
              <DialogHeader>
                <DialogTitle className="text-white">{ta.disableTitle}</DialogTitle>
                <DialogDescription className="text-white/45">{ta.disableDesc}</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <PortalActionButton
                  variant="danger"
                  onClick={() => {
                    disableInvestor(investor.uid);
                    toast.success(T.admin.system.disableSuccess);
                  }}
                >
                  {ta.confirmDisable}
                </PortalActionButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}

// ─── Leads Tab ────────────────────────────────────────────────────────────────
function LeadsTab({ T }: { T: PortalT }) {
  const { state, updateLeadStatus } = usePortal();
  const tl = T.admin.leads;
  const [selected, setSelected] = useState<ConsultationLead | null>(null);

  if (state.leads.length === 0) {
    return <PortalEmptyState message={tl.noLeads} />;
  }

  return (
    <div className="flex gap-4">
      {/* Table */}
      <PortalCard noPad className="flex-1 min-w-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
              {[
                tl.cols.name,
                tl.cols.phone,
                tl.cols.type,
                tl.cols.area,
                tl.cols.submittedAt,
                tl.cols.status,
              ].map((col) => (
                <TableHead
                  key={col}
                  className={`${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium`}
                >
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {state.leads.map((lead) => (
              <TableRow
                key={lead.id}
                onClick={() => setSelected(lead)}
                className={`border-b border-white/[0.05] hover:bg-white/[0.03] cursor-pointer transition-colors ${selected?.id === lead.id ? "bg-white/[0.04]" : ""}`}
              >
                <TableCell className="text-[13px] font-semibold text-white/90 py-3.5 px-4">
                  {lead.name}
                </TableCell>
                <TableCell className="text-[12px] text-white/65 font-mono px-4">
                  {lead.phone}
                </TableCell>
                <TableCell className="text-[12px] text-white/55 px-4">
                  {lead.customerType}
                </TableCell>
                <TableCell className="text-[12px] text-white/45 px-4">{lead.area ?? "—"}</TableCell>
                <TableCell className="text-[11px] text-white/40 tabular-nums px-4">
                  {lead.submittedAt}
                </TableCell>
                <TableCell className="px-4">
                  <LeadStatusBadge status={lead.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PortalCard>

      {/* Detail panel */}
      {selected && (
        <div className={`w-80 shrink-0 rounded-xl border ${WP_BORDER} ${WP_CARD} p-5 space-y-4`}>
          <div className="flex items-start justify-between">
            <p className={WP_EYEBROW}>{tl.detail.title}</p>
            <button
              type="button"
              aria-label="Close detail panel"
              onClick={() => setSelected(null)}
              className="text-white/30 hover:text-white/65 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div>
            <p className="text-[17px] font-semibold text-white/95 leading-tight">{selected.name}</p>
            <p className="text-[12px] text-white/45 font-mono mt-0.5">{selected.phone}</p>
          </div>

          <div className="space-y-0">
            {[
              [tl.cols.type, selected.customerType],
              [tl.cols.area, selected.area],
              [tl.detail.budget, selected.budget],
              [tl.detail.propertyType, selected.propertyType],
              [tl.detail.size, selected.size],
              [tl.detail.moveIn, selected.moveIn],
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-white/[0.05] last:border-0"
                >
                  <span className={`text-[11px] ${WP_MUTED}`}>{k}</span>
                  <span className="text-[12px] text-white/80 font-medium text-right max-w-[55%]">
                    {v}
                  </span>
                </div>
              ))}
          </div>

          {selected.priorities && selected.priorities.length > 0 && (
            <div>
              <p className={`${WP_EYEBROW} mb-2`}>{tl.detail.priorities}</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.priorities.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.06] text-white/60 border border-white/[0.08]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selected.notes && (
            <div>
              <p className={`${WP_EYEBROW} mb-1.5`}>{tl.detail.notes}</p>
              <p className="text-[12px] text-white/65 leading-relaxed">{selected.notes}</p>
            </div>
          )}

          <div className="border-t border-white/[0.07] pt-4">
            <p className={`${WP_EYEBROW} mb-2`}>{tl.detail.updateStatus}</p>
            <DarkSelect
              value={selected.status}
              onValueChange={(v) => {
                const s = v as ConsultationLead["status"];
                updateLeadStatus(selected.id, s);
                setSelected({ ...selected, status: s });
                toast.success(tl.statusUpdated);
              }}
            >
              <SelectItem value="New" className="text-white/85 focus:bg-white/10 focus:text-white">
                {tl.newLabel}
              </SelectItem>
              <SelectItem
                value="Contacted"
                className="text-white/85 focus:bg-white/10 focus:text-white"
              >
                {tl.contactedLabel}
              </SelectItem>
              <SelectItem
                value="Closed"
                className="text-white/85 focus:bg-white/10 focus:text-white"
              >
                {tl.closedLabel}
              </SelectItem>
            </DarkSelect>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Team Tab ──────────────────────────────────────────────────────────────────
function TeamTab({ T }: { T: PortalT }) {
  const { state, createAdmin, updateAdmin, deleteAdmin, createStaff, updateStaff, deleteStaff } =
    usePortal();
  const tt = T.admin.team;
  const admins = useMemo(() => getAdmins(state.users), [state.users]);
  const staff = useMemo(() => getStaff(state.users), [state.users]);

  const [adminForm, setAdminForm] = useState({ uid: "", name: "", password: "" });
  const [staffForm, setStaffForm] = useState({ uid: "", name: "", password: "", department: "" });
  const [adminOpen, setAdminOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<{
    uid: string;
    role: "admin" | "staff";
    name: string;
    password: string;
    department?: string;
  } | null>(null);

  function submitAdmin(e: React.FormEvent) {
    e.preventDefault();
    if (!adminForm.uid || !adminForm.name || !adminForm.password) return;
    createAdmin({
      uid: adminForm.uid,
      name: adminForm.name.toUpperCase(),
      password: adminForm.password,
    });
    toast.success(tt.created);
    setAdminForm({ uid: "", name: "", password: "" });
    setAdminOpen(false);
  }

  function submitStaff(e: React.FormEvent) {
    e.preventDefault();
    if (!staffForm.uid || !staffForm.name || !staffForm.password) return;
    createStaff({
      uid: staffForm.uid,
      name: staffForm.name.toUpperCase(),
      password: staffForm.password,
      department: staffForm.department || undefined,
    });
    toast.success(tt.created);
    setStaffForm({ uid: "", name: "", password: "", department: "" });
    setStaffOpen(false);
  }

  function saveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editTarget) return;
    if (editTarget.role === "admin") {
      updateAdmin(editTarget.uid, { name: editTarget.name, password: editTarget.password });
    } else {
      updateStaff(editTarget.uid, {
        name: editTarget.name,
        password: editTarget.password,
        department: editTarget.department,
      });
    }
    toast.success(tt.updated);
    setEditTarget(null);
  }

  function handleDelete(uid: string, role: "admin" | "staff") {
    if (!confirm(tt.deleteConfirm)) return;
    if (role === "admin") {
      if (admins.length <= 1) {
        toast.error(tt.lastAdminError);
        return;
      }
      deleteAdmin(uid);
    } else {
      deleteStaff(uid);
    }
    toast.success(tt.deleted);
  }

  const AccountTable = ({
    rows,
    role,
  }: {
    rows: { uid: string; name: string; password: string; department?: string }[];
    role: "admin" | "staff";
  }) => (
    <PortalCard noPad>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
            {[
              tt.cols.uid,
              tt.cols.name,
              tt.cols.role,
              ...(role === "staff" ? [tt.cols.department] : []),
              tt.cols.actions,
            ].map((col) => (
              <TableHead key={col} className={`${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium`}>
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className={`text-center py-8 text-[12px] ${WP_MUTED}`}>
                —
              </TableCell>
            </TableRow>
          ) : (
            rows.map((u) => (
              <TableRow
                key={u.uid}
                className="border-b border-white/[0.05] hover:bg-white/[0.025] transition-colors"
              >
                <TableCell className="font-mono text-[11px] text-white/50 py-3.5 px-4">
                  {u.uid}
                </TableCell>
                <TableCell className="text-[13px] font-semibold text-white/90 px-4">
                  {u.name}
                </TableCell>
                <TableCell className="px-4">
                  <PortalStatusBadge tone={role === "admin" ? "green" : "gold"}>
                    {role}
                  </PortalStatusBadge>
                </TableCell>
                {role === "staff" && (
                  <TableCell className="text-[12px] text-white/50 px-4">
                    {u.department ?? "—"}
                  </TableCell>
                )}
                <TableCell className="px-4">
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      aria-label="Edit account"
                      onClick={() =>
                        setEditTarget({
                          uid: u.uid,
                          role,
                          name: u.name,
                          password: u.password,
                          department: u.department,
                        })
                      }
                      className="p-1.5 text-white/30 hover:text-white/70 hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Delete account"
                      onClick={() => handleDelete(u.uid, role)}
                      className="p-1.5 text-[#d9534f]/35 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.08] rounded-lg transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </PortalCard>
  );

  return (
    <div className="space-y-6">
      {/* Admin accounts */}
      <div className="space-y-3">
        <PortalSectionHeader
          title={tt.admins}
          action={
            <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
              <DialogTrigger asChild>
                <PortalActionButton variant="primary" size="sm">
                  {tt.newAdmin}
                </PortalActionButton>
              </DialogTrigger>
              <DialogContent
                className={`max-w-md ${WP_CARD} border border-white/[0.09] text-white`}
              >
                <DialogHeader>
                  <DialogTitle className="text-white">{tt.createAdminTitle}</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitAdmin} className="space-y-3">
                  <PortalDarkInput
                    id="a-uid"
                    label={tt.fields.uid}
                    value={adminForm.uid}
                    onChange={(v) => setAdminForm({ ...adminForm, uid: v })}
                  />
                  <PortalDarkInput
                    id="a-name"
                    label={tt.fields.name}
                    value={adminForm.name}
                    onChange={(v) => setAdminForm({ ...adminForm, name: v })}
                  />
                  <PortalDarkInput
                    id="a-pw"
                    label={tt.fields.password}
                    type="password"
                    value={adminForm.password}
                    onChange={(v) => setAdminForm({ ...adminForm, password: v })}
                  />
                  <DialogFooter>
                    <PortalActionButton type="submit" variant="primary">
                      {tt.createBtn}
                    </PortalActionButton>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          }
        />
        <AccountTable rows={admins} role="admin" />
      </div>

      {/* Staff accounts */}
      <div className="space-y-3">
        <PortalSectionHeader
          title={tt.staff}
          action={
            <Dialog open={staffOpen} onOpenChange={setStaffOpen}>
              <DialogTrigger asChild>
                <PortalActionButton variant="secondary" size="sm">
                  {tt.newStaff}
                </PortalActionButton>
              </DialogTrigger>
              <DialogContent
                className={`max-w-md ${WP_CARD} border border-white/[0.09] text-white`}
              >
                <DialogHeader>
                  <DialogTitle className="text-white">{tt.createStaffTitle}</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitStaff} className="space-y-3">
                  <PortalDarkInput
                    id="s-uid"
                    label={tt.fields.uid}
                    value={staffForm.uid}
                    onChange={(v) => setStaffForm({ ...staffForm, uid: v })}
                  />
                  <PortalDarkInput
                    id="s-name"
                    label={tt.fields.name}
                    value={staffForm.name}
                    onChange={(v) => setStaffForm({ ...staffForm, name: v })}
                  />
                  <PortalDarkInput
                    id="s-pw"
                    label={tt.fields.password}
                    type="password"
                    value={staffForm.password}
                    onChange={(v) => setStaffForm({ ...staffForm, password: v })}
                  />
                  <PortalDarkInput
                    id="s-dept"
                    label={tt.fields.department}
                    value={staffForm.department}
                    onChange={(v) => setStaffForm({ ...staffForm, department: v })}
                    placeholder="e.g. Sales, Operations…"
                  />
                  <DialogFooter>
                    <PortalActionButton type="submit" variant="primary">
                      {tt.createBtn}
                    </PortalActionButton>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          }
        />
        <AccountTable rows={staff} role="staff" />
      </div>

      {/* Edit dialog */}
      <Dialog
        open={!!editTarget}
        onOpenChange={(o) => {
          if (!o) setEditTarget(null);
        }}
      >
        <DialogContent className={`max-w-md ${WP_CARD} border border-white/[0.09] text-white`}>
          <DialogHeader>
            <DialogTitle className="text-white">{tt.editTitle}</DialogTitle>
            <DialogDescription className="text-white/40">
              {editTarget?.uid} · {editTarget?.role}
            </DialogDescription>
          </DialogHeader>
          {editTarget && (
            <form onSubmit={saveEdit} className="space-y-3">
              <PortalDarkInput
                id="e-name"
                label={tt.fields.name}
                value={editTarget.name}
                onChange={(v) => setEditTarget({ ...editTarget, name: v })}
              />
              <PortalDarkInput
                id="e-pw"
                label={tt.fields.password}
                type="password"
                value={editTarget.password}
                onChange={(v) => setEditTarget({ ...editTarget, password: v })}
              />
              {editTarget.role === "staff" && (
                <PortalDarkInput
                  id="e-dept"
                  label={tt.fields.department}
                  value={editTarget.department ?? ""}
                  onChange={(v) => setEditTarget({ ...editTarget, department: v })}
                />
              )}
              <DialogFooter>
                <PortalActionButton type="submit" variant="primary">
                  {tt.saveBtn}
                </PortalActionButton>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Inquiries Tab ─────────────────────────────────────────────────────────────
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
      <PortalEmptyState
        message={ti.noInquiries}
        icon={<Mail className="h-5 w-5 text-white/30" />}
      />
    );
  }

  return (
    <div className="space-y-3">
      {enriched.map((q) => (
        <PortalCard key={q.id}>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <p className="text-[14px] font-semibold text-white/92 leading-snug">{q.title}</p>
              <p className={`text-[11px] ${WP_MUTED} mt-0.5`}>
                {q.investorName} · {q.createdAt}
              </p>
            </div>
            <PortalStatusBadge tone={q.status === "Answered" ? "green" : "red"}>
              {q.status === "Answered" ? ti.statusAnswered : ti.statusPending}
            </PortalStatusBadge>
          </div>
          <p className="text-[13px] text-white/75 leading-relaxed mb-3">{q.body}</p>
          {q.reply ? (
            <PortalReplyBlock
              eyebrowLabel={`${T.investor.adminReply}`}
              timestamp={q.repliedAt}
              body={q.reply}
            />
          ) : (
            <div className="space-y-2 border-t border-white/[0.06] pt-3">
              <textarea
                rows={2}
                placeholder={ti.replyPlaceholder}
                value={drafts[q.id] ?? ""}
                onChange={(e) => setDrafts({ ...drafts, [q.id]: e.target.value })}
                className="w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/85 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
              />
              <PortalActionButton
                variant="primary"
                size="sm"
                onClick={() => {
                  const text = (drafts[q.id] ?? "").trim();
                  if (!text) return;
                  replyInquiry(q.id, text);
                  setDrafts({ ...drafts, [q.id]: "" });
                  toast.success(T.admin.system.replySuccess);
                }}
              >
                <Send className="h-3 w-3" />
                {ti.sendReply}
              </PortalActionButton>
            </div>
          )}
        </PortalCard>
      ))}
    </div>
  );
}

// ─── System Tab ────────────────────────────────────────────────────────────────
function ActivityPill({ role }: { role: ActivityLog["actorRole"] }) {
  return <PortalStatusBadge tone={role === "admin" ? "green" : "gold"}>{role}</PortalStatusBadge>;
}

function SystemTab({ onBackup, T }: { onBackup: () => void; T: PortalT }) {
  const { state } = usePortal();
  const ts = T.admin.system;
  const dataSize = `${(JSON.stringify(state).length / 1024).toFixed(1)} KB`;
  const investors = getInvestors(state.users);

  return (
    <div className="space-y-5">
      {/* System stats */}
      <PortalCard>
        <div className="flex items-center gap-2 mb-5">
          <Database className="h-4 w-4 text-[#14a76c]" />
          <p className={WP_EYEBROW}>{ts.title}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-5">
          {[
            [ts.totalInvestors, String(investors.length)],
            [ts.dataSize, dataSize],
            [ts.lastSaved, new Date(state.system.lastSaved).toLocaleString()],
            [ts.lastBackup, new Date(state.system.lastBackup).toLocaleString()],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/[0.07] bg-[#0e0e0e] px-4 py-3"
            >
              <p className={`${WP_EYEBROW} mb-1.5`}>{label}</p>
              <p className="font-mono text-[12px] text-white/75">{value}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.07] pt-5">
          <PortalActionButton onClick={onBackup} variant="primary">
            <Database className="h-3.5 w-3.5" />
            {ts.backupBtn}
          </PortalActionButton>
        </div>
      </PortalCard>

      {/* Activity log */}
      <PortalCard noPad>
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.07]">
          <ClipboardList className="h-4 w-4 text-[#14a76c]" />
          <p className={WP_EYEBROW}>{ts.activityLog}</p>
          <span className="ml-auto text-[10px] text-white/28">
            {state.activityLog.length} entries
          </span>
        </div>
        {state.activityLog.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className={`text-[12px] ${WP_MUTED}`}>No activity recorded yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/[0.05]">
            {state.activityLog.slice(0, 50).map((entry) => (
              <div
                key={entry.id}
                className="flex items-start gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[12px] font-semibold text-white/85">
                      {entry.actorName}
                    </span>
                    <ActivityPill role={entry.actorRole} />
                    <span className={`text-[12px] ${WP_MUTED}`}>{entry.action}</span>
                  </div>
                  <p className="text-[11px] text-white/38 mt-0.5 truncate">{entry.detail}</p>
                </div>
                <span className="text-[10px] text-white/28 tabular-nums shrink-0 mt-0.5">
                  {new Date(entry.timestamp).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </PortalCard>
    </div>
  );
}
