import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ClipboardList,
  Crown,
  Database,
  DollarSign,
  Home,
  LogOut,
  Mail,
  Menu,
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
  getAdmins,
  getInvestors,
  getStaff,
  usePortal,
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

// Design tokens
const BG      = "bg-[#0a0a0a]";
const SURFACE = "bg-[#141414]";
const CARD    = "bg-[#1a1a1a]";
const BORDER  = "border-white/[0.08]";
const EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/50";
const MUTED   = "text-white/55";

function AdminDashboard() {
  const { state, logout, backupNow } = usePortal();
  const { lang } = useLang();
  const T = pt(lang);
  const navigate = useNavigate();
  const user = state.session;

  const investors = useMemo(() => getInvestors(state.users), [state.users]);
  const [activeTab, setActiveTab] = useState("crm");

  if (!user) return <Navigate to="/portal/login" replace />;
  if (user.role !== "admin" && user.role !== "staff") return <Navigate to="/portal/investor" replace />;

  const totalAUM = investors.reduce((s, i) => s + i.currentValue, 0);
  const avgROI = investors.length === 0 ? 0
    : investors.reduce((s, i) => s + ((i.currentValue - i.purchasePrice) / i.purchasePrice) * 100, 0) / investors.length;
  const vipCount = investors.filter((i) => i.vipGrade === "Platinum" || i.vipGrade === "Diamond").length;
  const pendingCount = investors.filter((i) => i.rentStatus === "Pending").length;
  const newLeads = state.leads.filter((l) => l.status === "New").length;

  function handleLogout() {
    logout();
    navigate({ to: "/portal/login", replace: true });
  }

  const navItems = [
    { id: "crm",       label: T.admin.sidebar.crm,       icon: Users        },
    { id: "profile",   label: T.admin.sidebar.actions,   icon: Sparkles     },
    { id: "inquiries", label: T.admin.sidebar.inquiries, icon: Mail         },
    { id: "leads",     label: T.admin.leads.title,       icon: ClipboardList },
    { id: "team",      label: T.admin.team.title,        icon: Shield       },
    { id: "system",    label: T.admin.sidebar.system,    icon: Settings     },
  ];

  const sidebar = (
    <div className={`flex h-full flex-col ${BG}`}>
      <div className="px-5 py-6 border-b border-white/[0.07]">
        <WithLogo variant="dark" size={26} animate />
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
              {n.id === "leads" && newLeads > 0 && (
                <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#14a76c] text-[9px] font-bold text-white">
                  {newLeads}
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
        <div className={`flex items-center justify-between border-b ${BORDER} ${SURFACE} px-4 py-3 lg:hidden`}>
          <WithLogo variant="dark" size={24} />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white/60 hover:text-white"><Menu className="h-5 w-5" /></button>
            </SheetTrigger>
            <SheetContent side="left" className={`w-60 p-0 border-r ${BORDER} ${BG}`}>{sidebar}</SheetContent>
          </Sheet>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
            <div>
              <p className={`${EYEBROW} text-[#14a76c] mb-1`}>{T.admin.eyebrow}</p>
              <h1 className="font-display text-[22px] font-semibold text-white tracking-[-0.01em]">
                {T.admin.welcome}, {user.name}
              </h1>
            </div>
            <p className={`text-xs ${MUTED} tabular-nums`}>
              {new Date().toLocaleDateString(
                lang === "vi" ? "vi-VN" : lang === "ko" ? "ko-KR" : lang === "zh" ? "zh-CN" : "en-US",
                { weekday: "long", year: "numeric", month: "long", day: "numeric" },
              )}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <KpiCard label={T.admin.kpi.totalAum} value={fmt(totalAUM)} sub={`${investors.length} active positions`} icon={<DollarSign className="h-4 w-4 text-[#14a76c]" />} />
            <KpiCard label={T.admin.kpi.totalInvestors} value={String(investors.length)} sub={`${vipCount} VIP tier`} icon={<Users className="h-4 w-4 text-[#14a76c]" />} />
            <KpiCard label={T.admin.kpi.avgRoi} value={`${avgROI.toFixed(1)}%`} sub="portfolio average" icon={<TrendingUp className="h-4 w-4 text-[#14a76c]" />} />
            <KpiCard label={T.admin.leads.title} value={String(state.leads.length)}
              sub={newLeads > 0 ? `${newLeads} new this session` : "all reviewed"}
              icon={pendingCount > 0 ? <AlertTriangle className="h-4 w-4 text-[#d9534f]" /> : <Crown className="h-4 w-4 text-[#d4af37]" />} />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className={`${SURFACE} border ${BORDER} mb-6 h-9 p-0.5 lg:hidden flex-wrap`}>
              {navItems.map((n) => (
                <TabsTrigger key={n.id} value={n.id}
                  className="text-[11px] data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/50 px-2">
                  {n.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="crm"><CrmTab investors={investors} T={T} /></TabsContent>
            <TabsContent value="profile"><ProfileActionsTab investors={investors} T={T} /></TabsContent>
            <TabsContent value="inquiries"><GlobalInquiriesTab T={T} /></TabsContent>
            <TabsContent value="leads"><LeadsTab T={T} /></TabsContent>
            <TabsContent value="team"><TeamTab T={T} /></TabsContent>
            <TabsContent value="system">
              <SystemTab T={T} onBackup={() => { backupNow(); toast.success(T.admin.system.backupSuccess); }} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({ label, value, sub, icon }: { label: string; value: string; sub: string; icon?: React.ReactNode }) {
  return (
    <div className={`${CARD} border ${BORDER} rounded-lg px-5 py-4`}>
      <div className="flex items-center justify-between mb-3">
        <span className={EYEBROW}>{label}</span>{icon}
      </div>
      <p className="font-display text-[26px] font-semibold tracking-tight text-white mb-1">{value}</p>
      <p className={`text-[11px] ${MUTED}`}>{sub}</p>
    </div>
  );
}

type PortalT = ReturnType<typeof pt>;

// ─── Shared helpers ────────────────────────────────────────────────────────────
function DarkField({ label, value, onChange, type = "text", full = false, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; full?: boolean; placeholder?: string;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
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

// ─── Leads Tab ────────────────────────────────────────────────────────────────
function LeadsTab({ T }: { T: PortalT }) {
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
    <div className="flex gap-4 h-full">
      {/* List */}
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

      {/* Detail panel */}
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

// ─── Team Tab ──────────────────────────────────────────────────────────────────
function TeamTab({ T }: { T: PortalT }) {
  const { state, createAdmin, updateAdmin, deleteAdmin, createStaff, updateStaff, deleteStaff } = usePortal();
  const tt = T.admin.team;
  const admins = useMemo(() => getAdmins(state.users), [state.users]);
  const staff  = useMemo(() => getStaff(state.users), [state.users]);

  const [adminForm, setAdminForm] = useState({ uid: "", name: "", password: "" });
  const [staffForm, setStaffForm] = useState({ uid: "", name: "", password: "", department: "" });
  const [adminOpen, setAdminOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<{ uid: string; role: "admin" | "staff"; name: string; password: string; department?: string } | null>(null);

  function submitAdmin(e: React.FormEvent) {
    e.preventDefault();
    if (!adminForm.uid || !adminForm.name || !adminForm.password) return;
    createAdmin({ uid: adminForm.uid, name: adminForm.name.toUpperCase(), password: adminForm.password });
    toast.success(tt.created);
    setAdminForm({ uid: "", name: "", password: "" }); setAdminOpen(false);
  }

  function submitStaff(e: React.FormEvent) {
    e.preventDefault();
    if (!staffForm.uid || !staffForm.name || !staffForm.password) return;
    createStaff({ uid: staffForm.uid, name: staffForm.name.toUpperCase(), password: staffForm.password, department: staffForm.department || undefined });
    toast.success(tt.created);
    setStaffForm({ uid: "", name: "", password: "", department: "" }); setStaffOpen(false);
  }

  function saveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editTarget) return;
    if (editTarget.role === "admin") {
      updateAdmin(editTarget.uid, { name: editTarget.name, password: editTarget.password });
    } else {
      updateStaff(editTarget.uid, { name: editTarget.name, password: editTarget.password, department: editTarget.department });
    }
    toast.success(tt.updated); setEditTarget(null);
  }

  function handleDelete(uid: string, role: "admin" | "staff") {
    if (!confirm(tt.deleteConfirm)) return;
    if (role === "admin") {
      if (admins.length <= 1) { toast.error(tt.lastAdminError); return; }
      deleteAdmin(uid);
    } else {
      deleteStaff(uid);
    }
    toast.success(tt.deleted);
  }

  const AccountTable = ({ rows, role }: { rows: { uid: string; name: string; password: string; department?: string }[]; role: "admin" | "staff" }) => (
    <div className={`${CARD} border ${BORDER} rounded-lg overflow-hidden`}>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
            {[tt.cols.uid, tt.cols.name, tt.cols.role, ...(role === "staff" ? [tt.cols.department] : []), tt.cols.actions].map((col) => (
              <TableHead key={col} className={`${EYEBROW} py-3 bg-[#111]`}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow><TableCell colSpan={5} className={`text-center py-6 text-[12px] ${MUTED}`}>—</TableCell></TableRow>
          ) : rows.map((u) => (
            <TableRow key={u.uid} className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors">
              <TableCell className="font-mono text-[11px] text-white/60 py-3">{u.uid}</TableCell>
              <TableCell className="text-[13px] font-medium text-white/90">{u.name}</TableCell>
              <TableCell>
                <span className={`inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded font-medium ${role === "admin" ? "bg-[#14a76c]/12 text-[#14a76c]" : "bg-[#d4af37]/12 text-[#d4af37]"}`}>
                  {role}
                </span>
              </TableCell>
              {role === "staff" && <TableCell className="text-[12px] text-white/55">{u.department ?? "—"}</TableCell>}
              <TableCell>
                <div className="flex gap-2">
                  <button onClick={() => setEditTarget({ uid: u.uid, role, name: u.name, password: u.password, department: u.department })}
                    className="p-1.5 text-white/35 hover:text-white/70 hover:bg-white/[0.06] rounded transition-colors">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={() => handleDelete(u.uid, role)}
                    className="p-1.5 text-[#d9534f]/40 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.08] rounded transition-colors">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Admin accounts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-white">{tt.admins}</h2>
          <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
                {tt.newAdmin}
              </button>
            </DialogTrigger>
            <DialogContent className={`max-w-md ${CARD} border border-white/[0.09] text-white`}>
              <DialogHeader>
                <DialogTitle className="text-white">{tt.createAdminTitle}</DialogTitle>
              </DialogHeader>
              <form onSubmit={submitAdmin} className="space-y-3">
                <DarkField label={tt.fields.uid} value={adminForm.uid} onChange={(v) => setAdminForm({ ...adminForm, uid: v })} />
                <DarkField label={tt.fields.name} value={adminForm.name} onChange={(v) => setAdminForm({ ...adminForm, name: v })} />
                <DarkField label={tt.fields.password} type="password" value={adminForm.password} onChange={(v) => setAdminForm({ ...adminForm, password: v })} />
                <DialogFooter>
                  <button type="submit" className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
                    {tt.createBtn}
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <AccountTable rows={admins} role="admin" />
      </div>

      {/* Staff accounts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-white">{tt.staff}</h2>
          <Dialog open={staffOpen} onOpenChange={setStaffOpen}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold border border-white/15 text-white/70 rounded hover:bg-white/[0.06] hover:text-white transition-colors">
                {tt.newStaff}
              </button>
            </DialogTrigger>
            <DialogContent className={`max-w-md ${CARD} border border-white/[0.09] text-white`}>
              <DialogHeader>
                <DialogTitle className="text-white">{tt.createStaffTitle}</DialogTitle>
              </DialogHeader>
              <form onSubmit={submitStaff} className="space-y-3">
                <DarkField label={tt.fields.uid} value={staffForm.uid} onChange={(v) => setStaffForm({ ...staffForm, uid: v })} />
                <DarkField label={tt.fields.name} value={staffForm.name} onChange={(v) => setStaffForm({ ...staffForm, name: v })} />
                <DarkField label={tt.fields.password} type="password" value={staffForm.password} onChange={(v) => setStaffForm({ ...staffForm, password: v })} />
                <DarkField label={tt.fields.department} value={staffForm.department} onChange={(v) => setStaffForm({ ...staffForm, department: v })} placeholder="e.g. Sales, Operations…" />
                <DialogFooter>
                  <button type="submit" className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
                    {tt.createBtn}
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <AccountTable rows={staff} role="staff" />
      </div>

      {/* Edit dialog */}
      <Dialog open={!!editTarget} onOpenChange={(o) => { if (!o) setEditTarget(null); }}>
        <DialogContent className={`max-w-md ${CARD} border border-white/[0.09] text-white`}>
          <DialogHeader>
            <DialogTitle className="text-white">{tt.editTitle}</DialogTitle>
            <DialogDescription className="text-white/45">
              {editTarget?.uid} · {editTarget?.role}
            </DialogDescription>
          </DialogHeader>
          {editTarget && (
            <form onSubmit={saveEdit} className="space-y-3">
              <DarkField label={tt.fields.name} value={editTarget.name} onChange={(v) => setEditTarget({ ...editTarget, name: v })} />
              <DarkField label={tt.fields.password} type="password" value={editTarget.password} onChange={(v) => setEditTarget({ ...editTarget, password: v })} />
              {editTarget.role === "staff" && (
                <DarkField label={tt.fields.department} value={editTarget.department ?? ""} onChange={(v) => setEditTarget({ ...editTarget, department: v })} />
              )}
              <DialogFooter>
                <button type="submit" className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
                  {tt.saveBtn}
                </button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── CRM Tab ──────────────────────────────────────────────────────────────────
function CrmTab({ investors, T }: { investors: InvestorProfile[]; T: PortalT }) {
  const { createInvestor } = usePortal();
  const [open, setOpen] = useState(false);
  const tc = T.admin.crm;
  const tf = T.admin.actions.fields;
  const [form, setForm] = useState({ uid: "", password: "", name: "", unit: "", nationality: "", purchasePrice: 0, currentValue: 0, vipGrade: "Standard" as VipGrade, rentStatus: "Cleared" as "Cleared" | "Pending" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.uid || !form.password || !form.name) return;
    createInvestor({ uid: form.uid, password: form.password, name: form.name.toUpperCase(), unit: form.unit, nationality: form.nationality, purchasePrice: Number(form.purchasePrice), currentValue: Number(form.currentValue) || Number(form.purchasePrice), vipGrade: form.vipGrade, rentStatus: form.rentStatus });
    toast.success(`${T.admin.system.createSuccess}: ${form.name}`);
    setOpen(false);
    setForm({ uid: "", password: "", name: "", unit: "", nationality: "", purchasePrice: 0, currentValue: 0, vipGrade: "Standard", rentStatus: "Cleared" });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-white">{tc.title}</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">{tc.newBtn}</button>
          </DialogTrigger>
          <DialogContent className={`max-w-lg ${CARD} border border-white/[0.09] text-white`}>
            <DialogHeader>
              <DialogTitle className="text-white">{tc.dialogTitle}</DialogTitle>
              <DialogDescription className="text-white/55">{tc.dialogDesc}</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
              <DarkField label={tf.uid} value={form.uid} onChange={(v) => setForm({ ...form, uid: v })} />
              <DarkField label={tf.password} type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
              <DarkField label={tf.name} value={form.name} onChange={(v) => setForm({ ...form, name: v })} full />
              <DarkField label={tf.unit} value={form.unit} onChange={(v) => setForm({ ...form, unit: v })} full />
              <DarkField label={tf.nationality} value={form.nationality} onChange={(v) => setForm({ ...form, nationality: v })} />
              <div>
                <label className={`block ${EYEBROW} mb-1.5`}>{tf.vipGrade}</label>
                <DarkSelect value={form.vipGrade} onValueChange={(v) => setForm({ ...form, vipGrade: v as VipGrade })}>
                  {(["Standard", "Gold", "Platinum", "Diamond"] as VipGrade[]).map((g) => (
                    <SelectItem key={g} value={g} className="text-white/85 focus:bg-white/10 focus:text-white">{g}</SelectItem>
                  ))}
                </DarkSelect>
              </div>
              <DarkField label={tf.purchasePrice} type="number" value={String(form.purchasePrice)} onChange={(v) => setForm({ ...form, purchasePrice: Number(v) })} />
              <DarkField label={tf.currentValue} type="number" value={String(form.currentValue)} onChange={(v) => setForm({ ...form, currentValue: Number(v) })} />
              <DialogFooter className="sm:col-span-2">
                <button type="submit" className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">{tc.createBtn}</button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className={`${CARD} border ${BORDER} rounded-lg overflow-hidden`}>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/[0.07] hover:bg-transparent">
              {[tc.cols.uid, tc.cols.name, tc.cols.unit, tc.cols.vip, tc.cols.purchase, tc.cols.current, tc.cols.roi, tc.cols.status].map((col, i) => (
                <TableHead key={i} className={`${EYEBROW} py-3 bg-[#111] ${i >= 4 && i <= 6 ? "text-right" : ""}`}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {investors.map((inv) => {
              const roi = ((inv.currentValue - inv.purchasePrice) / inv.purchasePrice) * 100;
              return (
                <TableRow key={inv.uid} className={`border-b border-white/[0.05] hover:bg-white/[0.025] transition-colors ${inv.disabled ? "opacity-40" : ""}`}>
                  <TableCell className="font-mono text-[11px] text-white/60 py-3">{inv.uid}</TableCell>
                  <TableCell className="text-[13px] font-medium text-white/90">{inv.name}</TableCell>
                  <TableCell className="text-[12px] text-white/55">{inv.unit}</TableCell>
                  <TableCell><VipBadge grade={inv.vipGrade} withIcon={false} /></TableCell>
                  <TableCell className="text-right text-[12px] tabular-nums text-white/65">{fmt(inv.purchasePrice)}</TableCell>
                  <TableCell className="text-right text-[12px] tabular-nums text-white/85">{fmt(inv.currentValue)}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    <span className={`text-[12px] font-semibold ${roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}`}>{roi >= 0 ? "+" : ""}{roi.toFixed(1)}%</span>
                  </TableCell>
                  <TableCell>
                    {inv.disabled ? (
                      <span className="inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded border border-[#d9534f]/30 text-[#d9534f]/80">{tc.statusDisabled}</span>
                    ) : inv.rentStatus === "Pending" ? (
                      <span className="inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded bg-[#d9534f]/12 text-[#d9534f]">{tc.statusPending}</span>
                    ) : (
                      <span className="inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded bg-[#14a76c]/12 text-[#14a76c]">{tc.statusActive}</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
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
  const [rentStatus, setRentStatus] = useState<"Cleared" | "Pending">(investor?.rentStatus ?? "Cleared");
  const [reportTitle, setReportTitle] = useState("");
  const [reportBody, setReportBody] = useState("");

  function handleSelect(uid: string) {
    setSelectedId(uid);
    const next = investors.find((i) => i.uid === uid);
    if (next) { setCurrentValue(next.currentValue); setRentStatus(next.rentStatus); setReportTitle(""); setReportBody(""); }
  }

  if (!investor) return <p className={`text-sm ${MUTED}`}>{ta.noInvestors}</p>;

  const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
  const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";

  function aiEstimate() {
    const factor = 1.1 + Math.random() * 0.15;
    setCurrentValue(Math.round(investor!.currentValue * factor));
    toast.success(T.admin.system.aiEstimateSuccess);
  }

  function save() {
    updateInvestor(investor!.uid, { currentValue: Number(currentValue), rentStatus }, reportTitle && reportBody ? { title: reportTitle, content: reportBody } : undefined);
    toast.success(T.admin.system.saveSuccess);
    setReportTitle(""); setReportBody("");
  }

  const pr = ta.profileRows;

  return (
    <div className="space-y-4">
      <div className="max-w-xs">
        <label className={`block ${EYEBROW} mb-1.5`}>{ta.selectInvestor}</label>
        <DarkSelect value={selectedId} onValueChange={handleSelect}>
          {investors.map((i) => <SelectItem key={i.uid} value={i.uid} className="text-white/85 focus:bg-white/10 focus:text-white">{i.name} {i.disabled ? "(disabled)" : ""}</SelectItem>)}
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
          <Input placeholder={ta.reportTitle} value={reportTitle} onChange={(e) => setReportTitle(e.target.value)}
            className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 focus:border-[#14a76c]/60 focus:ring-0 h-9" />
          <Textarea rows={3} placeholder={ta.reportContent} value={reportBody} onChange={(e) => setReportBody(e.target.value)}
            className="bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 focus:border-[#14a76c]/60 focus:ring-0 resize-none" />
        </div>
        <button onClick={save} className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
          {ta.saveBtn}
        </button>
      </div>

      {!investor.disabled && (
        <div className={`${CARD} border border-[#d9534f]/20 rounded-lg p-5`}>
          <p className={`${EYEBROW} text-[#d9534f]/70 mb-3`}>{ta.dangerZone}</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold border border-[#d9534f]/30 text-[#d9534f]/85 rounded hover:bg-[#d9534f]/10 hover:text-[#d9534f] transition-colors">{ta.disableBtn}</button>
            </DialogTrigger>
            <DialogContent className={`${CARD} border border-white/[0.09] text-white`}>
              <DialogHeader>
                <DialogTitle className="text-white">{ta.disableTitle}</DialogTitle>
                <DialogDescription className="text-white/55">{ta.disableDesc}</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <button className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#d9534f] text-white rounded hover:bg-[#c0392b] transition-colors"
                  onClick={() => { disableInvestor(investor.uid); toast.success(T.admin.system.disableSuccess); }}>
                  {ta.confirmDisable}
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
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
    return <div className={`${CARD} border ${BORDER} border-dashed rounded-lg p-12 text-center`}><p className={`text-sm ${MUTED}`}>{ti.noInquiries}</p></div>;
  }

  return (
    <div className="space-y-3">
      {enriched.map((q) => (
        <div key={q.id} className={`${CARD} border ${BORDER} rounded-lg p-5`}>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <p className="text-[14px] font-semibold text-white/92">{q.title}</p>
              <p className={`text-[11px] ${MUTED} mt-0.5`}>{q.investorName} · {q.createdAt}</p>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.12em] uppercase rounded border font-medium ${q.status === "Answered" ? "border-[#14a76c]/35 text-[#14a76c]" : "border-[#d9534f]/35 text-[#d9534f]"}`}>
              {q.status === "Answered" ? ti.statusAnswered : ti.statusPending}
            </span>
          </div>
          <p className={`text-[13px] text-white/80 mb-3`}>{q.body}</p>
          {q.reply ? (
            <div className="rounded bg-white/[0.05] border border-white/[0.07] px-4 py-3">
              <p className={`${EYEBROW} mb-1`}>Reply · {q.repliedAt}</p>
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
      ))}
    </div>
  );
}

// ─── System Tab ────────────────────────────────────────────────────────────────
function SystemTab({ onBackup, T }: { onBackup: () => void; T: PortalT }) {
  const { state } = usePortal();
  const ts = T.admin.system;
  const dataSize = `${(JSON.stringify(state).length / 1024).toFixed(1)} KB`;
  const investors = getInvestors(state.users);

  return (
    <div className={`${CARD} border ${BORDER} rounded-lg p-5`}>
      <div className="flex items-center gap-2 mb-5">
        <Database className="h-4 w-4 text-[#14a76c]" />
        <p className={EYEBROW}>{ts.title}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        {[[ts.totalInvestors, String(investors.length)], [ts.dataSize, dataSize], [ts.lastSaved, new Date(state.system.lastSaved).toLocaleString()], [ts.lastBackup, new Date(state.system.lastBackup).toLocaleString()]].map(([label, value]) => (
          <div key={label} className="bg-[#111] border border-white/[0.06] rounded px-4 py-3">
            <p className={`${EYEBROW} mb-1.5`}>{label}</p>
            <p className="font-mono text-[12px] text-white/80">{value}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.07] pt-5">
        <button onClick={onBackup} className="inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors">
          <Database className="h-3.5 w-3.5" />{ts.backupBtn}
        </button>
      </div>
    </div>
  );
}
