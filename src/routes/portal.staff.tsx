import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ClipboardList,
  Home,
  LogOut,
  Mail,
  Menu,
  Send,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Toaster } from "@/components/ui/sonner";

import { WithLogo } from "@/components/portal/WithLogo";
import { VipBadge } from "@/components/portal/VipBadge";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import {
  getInvestors,
  usePortal,
  type ConsultationLead,
  type InvestorProfile,
  type StaffProfile,
} from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/staff")({
  component: StaffDashboard,
});

// Design tokens (same as admin)
const BG      = "bg-[#0a0a0a]";
const SURFACE = "bg-[#141414]";
const CARD    = "bg-[#1a1a1a]";
const BORDER  = "border-white/[0.08]";
const EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/50";
const MUTED   = "text-white/55";

type PortalT = ReturnType<typeof pt>;

function StaffDashboard() {
  const { state, logout } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;
  const staff = user?.role === "staff" ? (user as StaffProfile) : null;

  const [activeTab, setActiveTab] = useState("inquiries");

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role !== "staff") return <Navigate to={user.role === "admin" ? "/portal/admin" : "/portal/investor"} replace />;

  const pendingInquiries = state.inquiries.filter((q) => q.status === "Pending").length;
  const newLeads = state.leads.filter((l) => l.status === "New").length;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  const navItems = [
    { id: "inquiries", label: T.admin.sidebar.inquiries, icon: Mail,          badge: pendingInquiries },
    { id: "leads",     label: T.admin.leads.title,       icon: ClipboardList, badge: newLeads },
    { id: "assets",    label: "Update Assets",           icon: TrendingUp,    badge: 0 },
  ];

  const sidebar = (
    <div className={`flex h-full flex-col ${BG}`}>
      <div className="px-5 py-6 border-b border-white/[0.07]">
        <WithLogo variant="dark" size={26} animate />
      </div>

      {/* Staff identity */}
      <div className="px-5 py-4 border-b border-white/[0.07]">
        <p className={`${EYEBROW} mb-1`}>Staff Portal</p>
        <p className="text-[13px] font-semibold text-white">{staff?.name}</p>
        {staff?.department && (
          <span className="inline-flex mt-1 px-2 py-0.5 text-[10px] tracking-wide rounded font-medium bg-[#d4af37]/12 text-[#d4af37]">
            {staff.department}
          </span>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((n) => {
          const Icon = n.icon;
          const active = activeTab === n.id;
          return (
            <button key={n.id} onClick={() => setActiveTab(n.id)}
              className={`flex w-full items-center gap-3 py-2.5 text-[13px] rounded-md transition-all ${
                active
                  ? "border-l-2 border-[#14a76c] bg-white/[0.06] text-white font-medium pl-[10px] pr-3"
                  : "border-l-2 border-transparent text-white/55 hover:text-white/80 hover:bg-white/[0.04] px-3"
              }`}>
              <Icon className="h-[15px] w-[15px] shrink-0" />
              <span className="flex-1 text-left">{n.label}</span>
              {n.badge > 0 && (
                <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#14a76c] text-[9px] font-bold text-white">
                  {n.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-white/[0.07] px-3 py-4 space-y-0.5">
        <div className="px-3 py-2"><PortalLangSwitcher /></div>
        <Link to="/with-property"
          className="flex w-full items-center gap-3 px-3 py-2.5 text-[13px] rounded-md text-white/55 hover:text-white/80 hover:bg-white/[0.04] transition-all">
          <Home className="h-[15px] w-[15px] shrink-0" />{T.nav.mainSite}
        </Link>
        <button onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2.5 text-[13px] rounded-md text-[#d9534f]/80 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.08] transition-all">
          <LogOut className="h-[15px] w-[15px] shrink-0" />{T.nav.logout}
        </button>
      </div>
    </div>
  );

  return (
    <div className={`flex min-h-screen ${BG}`}>
      <aside className={`hidden w-60 shrink-0 border-r ${BORDER} lg:block`}>{sidebar}</aside>

      <main className="flex-1 min-w-0">
        {/* Mobile topbar */}
        <div className={`flex items-center justify-between border-b ${BORDER} ${SURFACE} px-4 py-3 lg:hidden`}>
          <WithLogo variant="dark" size={24} />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white/60 hover:text-white"><Menu className="h-5 w-5" /></button>
            </SheetTrigger>
            <SheetContent side="left" className={`w-60 p-0 border-r ${BORDER} ${BG}`}>{sidebar}</SheetContent>
          </Sheet>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-8 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
            <div>
              <p className={`${EYEBROW} text-[#d4af37] mb-1`}>Staff Portal</p>
              <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.01em]">
                {T.admin.welcome}, {staff?.name}
              </h1>
              {staff?.department && (
                <p className={`text-[12px] ${MUTED} mt-0.5`}>{staff.department} Department</p>
              )}
            </div>
            <p className={`text-xs ${MUTED} tabular-nums`}>
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid gap-3 sm:grid-cols-3 mb-8">
            <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
              <div className="flex items-center justify-between mb-3">
                <span className={EYEBROW}>Open Inquiries</span>
                <Mail className="h-4 w-4 text-[#14a76c]" />
              </div>
              <p className="font-display text-[26px] font-semibold text-white">{pendingInquiries}</p>
              <p className={`text-[11px] ${MUTED}`}>awaiting reply</p>
            </div>
            <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
              <div className="flex items-center justify-between mb-3">
                <span className={EYEBROW}>New Leads</span>
                <ClipboardList className="h-4 w-4 text-[#14a76c]" />
              </div>
              <p className="font-display text-[26px] font-semibold text-white">{newLeads}</p>
              <p className={`text-[11px] ${MUTED}`}>need follow-up</p>
            </div>
            <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
              <div className="flex items-center justify-between mb-3">
                <span className={EYEBROW}>Investors</span>
                <TrendingUp className="h-4 w-4 text-[#14a76c]" />
              </div>
              <p className="font-display text-[26px] font-semibold text-white">
                {getInvestors(state.users).filter((i) => !i.disabled).length}
              </p>
              <p className={`text-[11px] ${MUTED}`}>active accounts</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className={`${SURFACE} border ${BORDER} mb-6 h-9 p-0.5 lg:hidden`}>
              {navItems.map((n) => (
                <TabsTrigger key={n.id} value={n.id}
                  className="text-[11px] data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/50 px-3">
                  {n.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="inquiries"><StaffInquiriesTab T={T} /></TabsContent>
            <TabsContent value="leads"><StaffLeadsTab T={T} /></TabsContent>
            <TabsContent value="assets"><StaffAssetsTab T={T} /></TabsContent>
          </Tabs>
        </div>
      </main>
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}

// ─── Shared helpers ────────────────────────────────────────────────────────────
function DarkField({ label, value, onChange, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className={`block ${EYEBROW} mb-1.5`}>{label}</label>
      <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-9" />
    </div>
  );
}

function DarkSelect({ value, onValueChange, children }: { value: string; onValueChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="bg-[#222] border-white/12 text-white/90 h-9"><SelectValue /></SelectTrigger>
      <SelectContent className="bg-[#1e1e1e] border-white/12">{children}</SelectContent>
    </Select>
  );
}

function StatusPill({ status }: { status: ConsultationLead["status"] }) {
  const map = {
    New:       "bg-[#14a76c]/12 text-[#14a76c]",
    Contacted: "bg-[#d4af37]/12 text-[#d4af37]",
    Closed:    "bg-white/8 text-white/40",
  };
  return <span className={`inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded font-medium ${map[status]}`}>{status}</span>;
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
      <div className={`${CARD} border ${BORDER} border-dashed rounded-lg p-12 text-center`}>
        <p className={`text-sm ${MUTED}`}>{ti.noInquiries}</p>
      </div>
    );
  }

  const pending = enriched.filter((q) => q.status === "Pending");
  const answered = enriched.filter((q) => q.status === "Answered");

  return (
    <div className="space-y-4">
      {pending.length > 0 && (
        <div className="space-y-3">
          <p className={`${EYEBROW} text-[#d9534f]/70`}>Pending · {pending.length}</p>
          {pending.map((q) => (
            <InquiryCard key={q.id} q={q} drafts={drafts} setDrafts={setDrafts} replyInquiry={replyInquiry} T={T} />
          ))}
        </div>
      )}
      {answered.length > 0 && (
        <div className="space-y-3">
          <p className={`${EYEBROW} text-[#14a76c]/70`}>Answered · {answered.length}</p>
          {answered.map((q) => (
            <InquiryCard key={q.id} q={q} drafts={drafts} setDrafts={setDrafts} replyInquiry={replyInquiry} T={T} />
          ))}
        </div>
      )}
    </div>
  );
}

function InquiryCard({ q, drafts, setDrafts, replyInquiry, T }: {
  q: { id: string; title: string; body: string; createdAt: string; status: "Pending" | "Answered"; investorName: string; reply?: string; repliedAt?: string; repliedBy?: string };
  drafts: Record<string, string>;
  setDrafts: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  replyInquiry: (id: string, reply: string) => void;
  T: PortalT;
}) {
  const ti = T.admin.inquiries;
  return (
    <div className={`${CARD} border ${BORDER} rounded-lg p-5`}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-[14px] font-semibold text-white/92">{q.title}</p>
          <p className={`text-[11px] ${MUTED} mt-0.5`}>{q.investorName} · {q.createdAt}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.12em] uppercase rounded border font-medium ${q.status === "Answered" ? "border-[#14a76c]/35 text-[#14a76c]" : "border-[#d9534f]/35 text-[#d9534f]"}`}>
          {q.status === "Answered" ? ti.statusAnswered : ti.statusPending}
        </span>
      </div>
      <p className="text-[13px] text-white/80 mb-3">{q.body}</p>
      {q.reply ? (
        <div className="rounded bg-white/[0.05] border border-white/[0.07] px-4 py-3">
          <p className={`${EYEBROW} mb-1`}>Reply {q.repliedBy ? `by ${q.repliedBy}` : ""} · {q.repliedAt}</p>
          <p className="text-[13px] text-white/80">{q.reply}</p>
        </div>
      ) : (
        <div className="space-y-2">
          <Textarea rows={2} placeholder={ti.replyPlaceholder} value={drafts[q.id] ?? ""} onChange={(e) => setDrafts({ ...drafts, [q.id]: e.target.value })}
            className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 resize-none text-[13px] focus:ring-0" />
          <button
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors"
            onClick={() => {
              const text = (drafts[q.id] ?? "").trim();
              if (!text) return;
              replyInquiry(q.id, text);
              setDrafts({ ...drafts, [q.id]: "" });
              toast.success(T.admin.system.replySuccess);
            }}>
            <Send className="h-3 w-3" />{ti.sendReply}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Staff Leads Tab ───────────────────────────────────────────────────────────
function StaffLeadsTab({ T }: { T: PortalT }) {
  const { state, updateLeadStatus } = usePortal();
  const tl = T.admin.leads;
  const [selected, setSelected] = useState<ConsultationLead | null>(null);

  if (state.leads.length === 0) {
    return (
      <div className={`${CARD} border ${BORDER} border-dashed rounded-lg p-12 text-center`}>
        <p className={`text-sm ${MUTED}`}>{tl.noLeads}</p>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div className={`flex-1 min-w-0 ${CARD} border ${BORDER} rounded-lg overflow-hidden`}>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
              {[tl.cols.name, tl.cols.phone, tl.cols.type, tl.cols.area, tl.cols.submittedAt, tl.cols.status].map((col) => (
                <TableHead key={col} className={`${EYEBROW} py-3 bg-[#111]`}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {state.leads.map((lead) => (
              <TableRow key={lead.id}
                onClick={() => setSelected(lead)}
                className={`border-b border-white/[0.05] hover:bg-white/[0.025] cursor-pointer transition-colors ${selected?.id === lead.id ? "bg-white/[0.04]" : ""}`}>
                <TableCell className="text-[13px] font-medium text-white/90 py-3">{lead.name}</TableCell>
                <TableCell className="text-[12px] text-white/70 font-mono">{lead.phone}</TableCell>
                <TableCell className="text-[12px] text-white/65">{lead.customerType}</TableCell>
                <TableCell className="text-[12px] text-white/55">{lead.area ?? "—"}</TableCell>
                <TableCell className="text-[11px] text-white/45 tabular-nums">{lead.submittedAt}</TableCell>
                <TableCell><StatusPill status={lead.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selected && (
        <div className={`w-80 shrink-0 ${CARD} border ${BORDER} rounded-lg p-5 space-y-4`}>
          <div className="flex items-start justify-between">
            <p className={EYEBROW}>{tl.detail.title}</p>
            <button onClick={() => setSelected(null)} className="text-white/30 hover:text-white/60 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-white/95">{selected.name}</p>
            <p className="text-[12px] text-white/55 font-mono mt-0.5">{selected.phone}</p>
          </div>
          <div className="space-y-0">
            {[
              [tl.cols.type, selected.customerType],
              [tl.cols.area, selected.area],
              [tl.detail.budget, selected.budget],
              [tl.detail.propertyType, selected.propertyType],
              [tl.detail.size, selected.size],
              [tl.detail.moveIn, selected.moveIn],
            ].filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b border-white/[0.05] last:border-0">
                <span className={`text-[11px] ${MUTED}`}>{k}</span>
                <span className="text-[12px] text-white/80 font-medium text-right max-w-[55%]">{v}</span>
              </div>
            ))}
          </div>
          {selected.priorities && selected.priorities.length > 0 && (
            <div>
              <p className={`${EYEBROW} mb-2`}>{tl.detail.priorities}</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.priorities.map((p) => (
                  <span key={p} className="px-2 py-0.5 text-[10px] rounded bg-white/[0.06] text-white/65 border border-white/[0.08]">{p}</span>
                ))}
              </div>
            </div>
          )}
          {selected.notes && (
            <div>
              <p className={`${EYEBROW} mb-1.5`}>{tl.detail.notes}</p>
              <p className="text-[12px] text-white/70 leading-relaxed">{selected.notes}</p>
            </div>
          )}
          <div className="border-t border-white/[0.07] pt-4">
            <p className={`${EYEBROW} mb-2`}>{tl.detail.updateStatus}</p>
            <DarkSelect value={selected.status} onValueChange={(v) => {
              const s = v as ConsultationLead["status"];
              updateLeadStatus(selected.id, s);
              setSelected({ ...selected, status: s });
              toast.success(tl.statusUpdated);
            }}>
              <SelectItem value="New" className="text-white/85 focus:bg-white/10 focus:text-white">{tl.newLabel}</SelectItem>
              <SelectItem value="Contacted" className="text-white/85 focus:bg-white/10 focus:text-white">{tl.contactedLabel}</SelectItem>
              <SelectItem value="Closed" className="text-white/85 focus:bg-white/10 focus:text-white">{tl.closedLabel}</SelectItem>
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
  const investors = useMemo(() => getInvestors(state.users).filter((i) => !i.disabled), [state.users]);

  const [selectedId, setSelectedId] = useState(investors[0]?.uid ?? "");
  const investor = investors.find((i) => i.uid === selectedId);
  const [currentValue, setCurrentValue] = useState(investor?.currentValue ?? 0);
  const [rentStatus, setRentStatus] = useState<"Cleared" | "Pending">(investor?.rentStatus ?? "Cleared");
  const [reportTitle, setReportTitle] = useState("");
  const [reportBody, setReportBody] = useState("");

  function handleSelect(uid: string) {
    setSelectedId(uid);
    const next = investors.find((i) => i.uid === uid);
    if (next) { setCurrentValue(next.currentValue); setRentStatus(next.rentStatus); setReportTitle(""); setReportBody(""); }
  }

  function aiEstimate() {
    if (!investor) return;
    const factor = 1.1 + Math.random() * 0.15;
    setCurrentValue(Math.round(investor.currentValue * factor));
    toast.success(T.admin.system.aiEstimateSuccess);
  }

  function save() {
    if (!investor) return;
    updateInvestor(investor.uid, { currentValue: Number(currentValue), rentStatus }, reportTitle && reportBody ? { title: reportTitle, content: reportBody } : undefined);
    toast.success(T.admin.system.saveSuccess);
    setReportTitle(""); setReportBody("");
  }

  if (!investor) return <p className={`text-sm ${MUTED}`}>{ta.noInvestors}</p>;

  const pr = ta.profileRows;
  const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
  const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";

  return (
    <div className="space-y-4">
      <div className="max-w-xs">
        <label className={`block ${EYEBROW} mb-1.5`}>{ta.selectInvestor}</label>
        <DarkSelect value={selectedId} onValueChange={handleSelect}>
          {investors.map((i) => (
            <SelectItem key={i.uid} value={i.uid} className="text-white/85 focus:bg-white/10 focus:text-white">{i.name}</SelectItem>
          ))}
        </DarkSelect>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className={`${CARD} border ${BORDER} rounded-lg p-5`}>
          <p className={`${EYEBROW} mb-4`}>{ta.profileTitle}</p>
          {[[pr.name, investor.name], [pr.uid, investor.uid], [pr.unit, investor.unit], [pr.nationality, investor.nationality], [pr.inquiries, String(inquiryCount)]].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-0">
              <span className={`text-[12px] ${MUTED}`}>{k}</span>
              <span className="text-[13px] text-white/85 font-medium">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between py-2.5">
            <span className={`text-[12px] ${MUTED}`}>{pr.vipGrade}</span>
            <VipBadge grade={investor.vipGrade} />
          </div>
        </div>

        <div className={`${CARD} border rounded-lg p-5 ${risk === "stable" ? "border-[#14a76c]/25" : "border-[#d9534f]/25"}`}>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className={`h-3.5 w-3.5 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`} />
            <p className={EYEBROW}>{ta.riskTitle}</p>
          </div>
          <p className={`text-[22px] font-display font-semibold mb-2 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`}>
            {risk === "stable" ? ta.riskStable : ta.riskHigh}
          </p>
          <p className={`text-[12px] ${MUTED}`}>{ta.riskDesc}</p>
        </div>
      </div>

      <div className={`${CARD} border ${BORDER} rounded-lg p-5 space-y-4`}>
        <p className={EYEBROW}>{ta.updateTitle}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={`block ${EYEBROW} mb-1.5`}>{ta.currentValue}</label>
            <div className="flex gap-2">
              <Input type="number" value={currentValue} onChange={(e) => setCurrentValue(Number(e.target.value))}
                className="bg-[#222] border-white/12 text-white/90 focus:border-[#14a76c]/60 focus:ring-0 h-9" />
              <button type="button" onClick={aiEstimate}
                className="flex items-center gap-1.5 px-3 py-2 text-[11px] border border-white/12 rounded text-white/65 hover:text-white/90 hover:border-white/20 transition-colors whitespace-nowrap">
                <Sparkles className="h-3.5 w-3.5 text-[#14a76c]" />{ta.aiEstimate}
              </button>
            </div>
          </div>
          <div>
            <label className={`block ${EYEBROW} mb-1.5`}>{ta.rentStatus}</label>
            <DarkSelect value={rentStatus} onValueChange={(v) => setRentStatus(v as "Cleared" | "Pending")}>
              <SelectItem value="Cleared" className="text-white/85 focus:bg-white/10 focus:text-white">{ta.cleared}</SelectItem>
              <SelectItem value="Pending" className="text-white/85 focus:bg-white/10 focus:text-white">{ta.pending}</SelectItem>
            </DarkSelect>
          </div>
        </div>
        <div className="border-t border-white/[0.07] pt-4 space-y-3">
          <p className={EYEBROW}>{ta.reportSection}</p>
          <DarkField label={ta.reportTitle} value={reportTitle} onChange={setReportTitle} placeholder={ta.reportTitle} />
          <div>
            <label className={`block ${EYEBROW} mb-1.5`}>{ta.reportContent}</label>
            <Textarea rows={3} placeholder={ta.reportContent} value={reportBody} onChange={(e) => setReportBody(e.target.value)}
              className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 focus:border-[#14a76c]/60 focus:ring-0 resize-none" />
          </div>
        </div>
        <button onClick={save} className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
          {ta.saveBtn}
        </button>
      </div>
    </div>
  );
}
