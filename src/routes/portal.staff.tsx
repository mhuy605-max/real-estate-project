import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Building2, ClipboardList, Mail, Send, Sparkles, TrendingUp, Users, X } from "lucide-react";
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
import { Toaster } from "@/components/ui/sonner";

import { VipBadge } from "@/components/portal/VipBadge";
import {
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
  PortalReplyBlock,
  type PortalNavItem,
} from "@/components/portal/PortalShell";
import {
  getInvestors,
  usePortal,
  type ConsultationLead,
  type StaffProfile,
} from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/staff")({
  component: StaffDashboard,
});

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

// ─── Staff Dashboard ──────────────────────────────────────────────────────────
function StaffDashboard() {
  const { state, logout } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;
  const staff = user?.role === "staff" ? (user as StaffProfile) : null;

  const [activeTab, setActiveTab] = useState("inquiries");

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role !== "staff")
    return <Navigate to={user.role === "admin" ? "/portal/admin" : "/portal/investor"} replace />;

  const investors = getInvestors(state.users);
  const activeInvestors = investors.filter((i) => !i.disabled).length;
  const pendingInquiries = state.inquiries.filter((q) => q.status === "Pending").length;
  const newLeads = state.leads.filter((l) => l.status === "New").length;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  const navItems: PortalNavItem[] = [
    { id: "inquiries", label: T.admin.sidebar.inquiries, icon: Mail, badge: pendingInquiries },
    { id: "leads", label: T.admin.leads.title, icon: ClipboardList, badge: newLeads },
    { id: "assets", label: "Update Assets", icon: TrendingUp },
  ];

  const dateLabel = new Date().toLocaleDateString(
    lang === "vi" ? "vi-VN" : lang === "ko" ? "ko-KR" : lang === "zh" ? "zh-CN" : "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );

  const pageHeader = (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className={`${WP_EYEBROW} text-[#d4af37] mb-1`}>Staff Portal</p>
        <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.02em] leading-tight">
          {T.admin.welcome}, {staff?.name}
        </h1>
        {staff?.department && (
          <p className={`text-[12px] ${WP_MUTED} mt-0.5`}>{staff.department} Department</p>
        )}
      </div>
      <p className={`text-[11px] ${WP_MUTED} tabular-nums`}>{dateLabel}</p>
    </div>
  );

  function renderTab() {
    switch (activeTab) {
      case "inquiries":
        return <StaffInquiriesTab T={T} />;
      case "leads":
        return <StaffLeadsTab T={T} />;
      case "assets":
        return <StaffAssetsTab T={T} />;
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
        <div className="grid gap-3 sm:grid-cols-3 mb-8">
          <PortalKpiCard
            label="Open Inquiries"
            value={String(pendingInquiries)}
            sub="awaiting reply"
            icon={<Mail className="h-4 w-4 text-[#14a76c]" />}
            accent={pendingInquiries > 0}
          />
          <PortalKpiCard
            label="New Leads"
            value={String(newLeads)}
            sub="need follow-up"
            icon={<ClipboardList className="h-4 w-4 text-[#14a76c]" />}
          />
          <PortalKpiCard
            label="Active Investors"
            value={String(activeInvestors)}
            sub="managed accounts"
            icon={<Users className="h-4 w-4 text-[#14a76c]" />}
          />
        </div>

        {renderTab()}
      </PortalDashboardLayout>
      <Toaster richColors position="top-right" theme="dark" />
    </>
  );
}

// ─── Staff Inquiries Tab ───────────────────────────────────────────────────────
function StaffInquiriesTab({ T }: { T: PortalT }) {
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

  const pending = enriched.filter((q) => q.status === "Pending");
  const answered = enriched.filter((q) => q.status === "Answered");

  return (
    <div className="space-y-6">
      {pending.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className={`${WP_EYEBROW} text-[#d9534f]/70`}>Pending</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#d9534f]/15 text-[9px] font-bold text-[#d9534f]">
              {pending.length}
            </span>
          </div>
          {pending.map((q) => (
            <InquiryCard
              key={q.id}
              q={q}
              drafts={drafts}
              setDrafts={setDrafts}
              replyInquiry={replyInquiry}
              T={T}
            />
          ))}
        </div>
      )}
      {answered.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className={`${WP_EYEBROW} text-[#14a76c]/70`}>Answered</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#14a76c]/15 text-[9px] font-bold text-[#14a76c]">
              {answered.length}
            </span>
          </div>
          {answered.map((q) => (
            <InquiryCard
              key={q.id}
              q={q}
              drafts={drafts}
              setDrafts={setDrafts}
              replyInquiry={replyInquiry}
              T={T}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type EnrichedInquiry = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  status: "Pending" | "Answered";
  investorName: string;
  reply?: string;
  repliedAt?: string;
  repliedBy?: string;
};

function InquiryCard({
  q,
  drafts,
  setDrafts,
  replyInquiry,
  T,
}: {
  q: EnrichedInquiry;
  drafts: Record<string, string>;
  setDrafts: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  replyInquiry: (id: string, reply: string) => void;
  T: PortalT;
}) {
  const ti = T.admin.inquiries;

  return (
    <PortalCard>
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
          eyebrowLabel={q.repliedBy ? `Reply by ${q.repliedBy}` : T.investor.adminReply}
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
  );
}

// ─── Staff Leads Tab ───────────────────────────────────────────────────────────
function StaffLeadsTab({ T }: { T: PortalT }) {
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

// ─── Staff Assets Tab ──────────────────────────────────────────────────────────
function StaffAssetsTab({ T }: { T: PortalT }) {
  const { state, updateInvestor } = usePortal();
  const ta = T.admin.actions;
  const investors = useMemo(
    () => getInvestors(state.users).filter((i) => !i.disabled),
    [state.users],
  );

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

  function aiEstimate() {
    if (!investor) return;
    const factor = 1.1 + Math.random() * 0.15;
    setCurrentValue(Math.round(investor.currentValue * factor));
    toast.success(T.admin.system.aiEstimateSuccess);
  }

  function save() {
    if (!investor) return;
    updateInvestor(
      investor.uid,
      { currentValue: Number(currentValue), rentStatus },
      reportTitle && reportBody ? { title: reportTitle, content: reportBody } : undefined,
    );
    toast.success(T.admin.system.saveSuccess);
    setReportTitle("");
    setReportBody("");
  }

  if (!investor) return <p className={`text-sm ${WP_MUTED}`}>{ta.noInvestors}</p>;

  const pr = ta.profileRows;
  const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
  const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";
  const roi = ((investor.currentValue - investor.purchasePrice) / investor.purchasePrice) * 100;

  return (
    <div className="space-y-4">
      {/* Selector */}
      <div className="max-w-xs">
        <label className={`block ${WP_EYEBROW} mb-1.5`}>{ta.selectInvestor}</label>
        <DarkSelect value={selectedId} onValueChange={handleSelect}>
          {investors.map((i) => (
            <SelectItem
              key={i.uid}
              value={i.uid}
              className="text-white/85 focus:bg-white/10 focus:text-white"
            >
              {i.name}
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
          <div className="flex items-center justify-between py-2.5 border-b border-white/[0.05]">
            <span className={`text-[12px] ${WP_MUTED}`}>{pr.vipGrade}</span>
            <VipBadge grade={investor.vipGrade} />
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className={`text-[12px] ${WP_MUTED}`}>ROI</span>
            <span
              className={`text-[13px] font-semibold tabular-nums ${roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}`}
            >
              {roi >= 0 ? "+" : ""}
              {roi.toFixed(1)}%
            </span>
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
          <PortalDarkInput
            id="report-title"
            label={ta.reportTitle}
            value={reportTitle}
            onChange={setReportTitle}
            placeholder={ta.reportTitle}
          />
          <div>
            <label className={`block ${WP_EYEBROW} mb-1.5`}>{ta.reportContent}</label>
            <textarea
              rows={3}
              placeholder={ta.reportContent}
              value={reportBody}
              onChange={(e) => setReportBody(e.target.value)}
              className="w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <PortalActionButton onClick={save} variant="primary">
            <Building2 className="h-3.5 w-3.5" />
            {ta.saveBtn}
          </PortalActionButton>
        </div>
      </PortalCard>
    </div>
  );
}
