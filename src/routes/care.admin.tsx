import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Users, Inbox, FileBarChart, Plus, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

import {
  DashboardShell, StatCard, Pill, statusTone, Card, inputCls, SectionHeader, ActionBtn,
} from "@/components/care/DashboardShell";
import { useCareLang } from "@/lib/care/i18n";
import {
  useCarePortal, CARE_STATUSES, CARE_CATEGORIES, STAGES,
  type CareStatus, type CareCategory, type SettlementStage, type ContractTier,
  getCompanyName, getCareStaff,
} from "@/lib/care/store";

export const Route = createFileRoute("/care/admin")({
  head: () => ({ meta: [{ title: "Admin — WITH Care" }] }),
  component: AdminDashboard,
});

type Tab = "companies" | "employees" | "requests" | "reports";

function AdminDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("requests");
  const me = state.session;
  if (!me) return null;

  const openCount = state.requests.filter((r) => r.status === "New" || r.status === "In Progress").length;

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-white truncate">{me.name}</div>
      <div className="text-[10px] text-[#e07a5f]/70 uppercase tracking-wider">{t("dash.fullAccess")}</div>
    </>
  );

  const nav = [
    { label: t("admin.nav.companies"), key: "companies", icon: Building2 },
    { label: t("admin.nav.employees"), key: "employees", icon: Users },
    { label: t("admin.nav.requests"), key: "requests", icon: Inbox },
    { label: t("admin.nav.reports"), key: "reports", icon: FileBarChart },
  ];

  return (
    <DashboardShell title={t("admin.title")} role="admin" nav={nav} active={tab} onSelect={(k) => setTab(k as Tab)} identity={identity}>
      {/* Stats strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-8">
        <StatCard label={t("admin.stat.companies")} value={state.companies.length} tone="teal" />
        <StatCard label={t("admin.stat.employees")} value={state.users.filter((u) => u.role === "employee").length} tone="coral" />
        <StatCard label={t("admin.stat.openRequests")} value={openCount} tone="amber" />
        <StatCard label={t("admin.stat.reports")} value={state.reports.length} tone="sky" />
      </div>

      {tab === "companies" && <CompaniesTab />}
      {tab === "employees" && <EmployeesTab />}
      {tab === "requests" && <RequestsTab />}
      {tab === "reports" && <ReportsTab />}
    </DashboardShell>
  );
}

/* ──── Companies ──── */
const TIERS: ContractTier[] = ["Trial", "Basic", "Pro", "Premium"];
const companySchema = z.object({
  name: z.string().min(2),
  tier: z.enum(TIERS as [ContractTier, ...ContractTier[]]),
  contractStart: z.string(),
  contractEnd: z.string(),
  hrContactName: z.string().min(2),
  hrContactEmail: z.string().email(),
  seats: z.coerce.number().int().positive(),
});

function CompaniesTab() {
  const { state, createCareCompany } = useCarePortal();
  const { t } = useCareLang();
  const [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: { tier: "Basic", seats: 5, contractStart: "", contractEnd: "", name: "", hrContactName: "", hrContactEmail: "" },
  });
  const seatsUsed = (id: string) => state.users.filter((u) => u.role === "employee" && u.companyId === id).length;

  const tierBadge = (tier: ContractTier) => {
    const map: Record<ContractTier, "ok" | "info" | "warn" | "muted"> = {
      Premium: "ok", Pro: "info", Basic: "warn", Trial: "muted",
    };
    return <Pill tone={map[tier]}>{tier}</Pill>;
  };

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("co.section")}
        action={
          <ActionBtn onClick={() => setShow((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("co.new")}
          </ActionBtn>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <Card className="mb-0">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">{t("co.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  createCareCompany(v);
                  toast.success("Company created");
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <input className={inputCls()} placeholder={t("co.form.name")} {...form.register("name")} />
                <select className={inputCls()} {...form.register("tier")}>
                  {TIERS.map((tier) => <option key={tier}>{tier}</option>)}
                </select>
                <input className={inputCls()} type="date" {...form.register("contractStart")} />
                <input className={inputCls()} type="date" {...form.register("contractEnd")} />
                <input className={inputCls()} placeholder={t("co.form.hrName")} {...form.register("hrContactName")} />
                <input className={inputCls()} placeholder={t("co.form.hrEmail")} {...form.register("hrContactEmail")} />
                <input className={inputCls()} type="number" placeholder={t("co.form.seats")} {...form.register("seats")} />
                <button className="md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors">
                  {t("co.form.submit")}
                </button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-widest text-white/30 border-b border-white/[0.06]">
              <th className="pb-3 font-medium">{t("co.col.company")}</th>
              <th className="pb-3 font-medium">{t("co.col.tier")}</th>
              <th className="pb-3 font-medium hidden sm:table-cell">{t("co.col.contract")}</th>
              <th className="pb-3 font-medium">{t("co.col.seats")}</th>
              <th className="pb-3 font-medium hidden md:table-cell">{t("co.col.hr")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {state.companies.map((c) => (
              <tr key={c.id} className="group hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 font-medium text-white/90">{c.name}</td>
                <td className="py-3.5">{tierBadge(c.tier)}</td>
                <td className="py-3.5 text-white/45 text-xs hidden sm:table-cell">{c.contractStart} → {c.contractEnd}</td>
                <td className="py-3.5 text-white/70">{seatsUsed(c.id)}<span className="text-white/30">/{c.seats}</span></td>
                <td className="py-3.5 text-white/45 text-xs hidden md:table-cell">{c.hrContactName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ──── Employees ──── */
const empSchema = z.object({
  uid: z.string().min(2),
  name: z.string().min(2),
  password: z.string().min(2),
  companyId: z.string().min(1),
  nationality: z.string().optional(),
  familySize: z.coerce.number().int().min(1),
  stage: z.enum(STAGES as [SettlementStage, ...SettlementStage[]]),
});

function EmployeesTab() {
  const { state, createCareEmployee, updateCareEmployee } = useCarePortal();
  const { t } = useCareLang();
  const [filter, setFilter] = useState<string>("all");
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState<string | null>(null);
  const employees = state.users.filter((u) => u.role === "employee" && (filter === "all" || u.companyId === filter));
  const form = useForm<z.infer<typeof empSchema>>({
    resolver: zodResolver(empSchema),
    defaultValues: { uid: "", name: "", password: "employee", companyId: state.companies[0]?.id, familySize: 1, stage: "Pre-Arrival", nationality: "" },
  });
  const selected = state.users.find((u) => u.uid === edit);

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("emp.section")}
        action={
          <div className="flex items-center gap-2">
            <select className={inputCls("max-w-[160px] py-1.5")} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">{t("dash.allCompanies")}</option>
              {state.companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <ActionBtn onClick={() => setShow((s) => !s)}>
              <Plus className="h-3.5 w-3.5" /> {t("emp.new")}
            </ActionBtn>
          </div>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <Card>
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">{t("emp.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  createCareEmployee({ ...v, disabled: false, languagePref: "en" });
                  toast.success("Employee created");
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <input className={inputCls()} placeholder={t("emp.form.uid")} {...form.register("uid")} />
                <input className={inputCls()} placeholder={t("emp.form.password")} {...form.register("password")} />
                <input className={inputCls()} placeholder={t("emp.form.name")} {...form.register("name")} />
                <input className={inputCls()} placeholder={t("emp.form.nationality")} {...form.register("nationality")} />
                <select className={inputCls()} {...form.register("companyId")}>
                  {state.companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select className={inputCls()} {...form.register("stage")}>
                  {STAGES.map((s) => <option key={s}>{s}</option>)}
                </select>
                <input className={inputCls()} type="number" placeholder={t("emp.form.familySize")} {...form.register("familySize")} />
                <button className="md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors">
                  {t("emp.form.submit")}
                </button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <Card>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest text-white/30 border-b border-white/[0.06]">
                <th className="pb-3 font-medium">{t("emp.col.name")}</th>
                <th className="pb-3 font-medium hidden sm:table-cell">{t("emp.col.company")}</th>
                <th className="pb-3 font-medium">{t("emp.col.stage")}</th>
                <th className="pb-3 font-medium hidden sm:table-cell">{t("emp.col.housing")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {employees.map((e) => (
                <tr
                  key={e.uid}
                  onClick={() => setEdit(e.uid)}
                  className={`cursor-pointer transition-colors ${edit === e.uid ? "bg-[#e07a5f]/[0.06]" : "hover:bg-white/[0.02]"}`}
                >
                  <td className="py-3.5 font-medium text-white/90">{e.name}</td>
                  <td className="py-3.5 text-white/50 text-xs hidden sm:table-cell">{getCompanyName(state.companies, e.companyId)}</td>
                  <td className="py-3.5"><Pill tone="info">{e.stage}</Pill></td>
                  <td className="py-3.5 text-white/45 text-xs hidden sm:table-cell">{e.housing ? e.housing.district : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div>
          {selected ? (
            <Card>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/15 text-sm font-bold text-[#e07a5f]">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{selected.name}</div>
                  <div className="text-xs text-white/40">{getCompanyName(state.companies, selected.companyId)}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-1.5">{t("emp.detail.stage")}</label>
                  <select
                    className={inputCls()}
                    value={selected.stage}
                    onChange={(e) => updateCareEmployee(selected.uid, { stage: e.target.value as SettlementStage })}
                  >
                    {STAGES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <fieldset className="rounded-xl border border-white/[0.08] p-4 space-y-3">
                  <legend className="px-1.5 text-[10px] uppercase tracking-widest text-white/35">{t("emp.detail.housing")}</legend>
                  <input
                    className={inputCls()}
                    placeholder={t("emp.detail.district")}
                    defaultValue={selected.housing?.district ?? ""}
                    onBlur={(e) => updateCareEmployee(selected.uid, { housing: { ...(selected.housing ?? { district: "", rentUsd: 0 }), district: e.target.value } })}
                  />
                  <input
                    className={inputCls()}
                    type="number"
                    placeholder={t("emp.detail.rent")}
                    defaultValue={selected.housing?.rentUsd ?? 0}
                    onBlur={(e) => updateCareEmployee(selected.uid, { housing: { ...(selected.housing ?? { district: "", rentUsd: 0 }), rentUsd: Number(e.target.value) } })}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      className={inputCls()}
                      type="date"
                      defaultValue={selected.housing?.leaseStart ?? ""}
                      onBlur={(e) => updateCareEmployee(selected.uid, { housing: { ...(selected.housing ?? { district: "", rentUsd: 0 }), leaseStart: e.target.value } })}
                    />
                    <input
                      className={inputCls()}
                      type="date"
                      defaultValue={selected.housing?.leaseEnd ?? ""}
                      onBlur={(e) => updateCareEmployee(selected.uid, { housing: { ...(selected.housing ?? { district: "", rentUsd: 0 }), leaseEnd: e.target.value } })}
                    />
                  </div>
                </fieldset>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Users className="h-8 w-8 text-white/15 mb-3" />
                <p className="text-sm text-white/35">{t("emp.empty")}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──── Requests ──── */
function RequestsTab() {
  const { state, assignCareRequest, updateCareRequestStatus, replyToCareRequest } = useCarePortal();
  const { t } = useCareLang();
  const [fCompany, setFCompany] = useState("all");
  const [fCat, setFCat] = useState<"all" | CareCategory>("all");
  const [fStatus, setFStatus] = useState<"all" | CareStatus>("all");
  const list = state.requests.filter(
    (r) =>
      (fCompany === "all" || r.companyId === fCompany) &&
      (fCat === "all" || r.category === fCat) &&
      (fStatus === "all" || r.status === fStatus),
  );
  const [open, setOpen] = useState<string | null>(list[0]?.id ?? null);
  const [reply, setReply] = useState("");
  const selected = state.requests.find((r) => r.id === open);
  const staff = getCareStaff(state.users);

  return (
    <div className="space-y-5">
      <SectionHeader title={t("req.section")} />

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <select className={inputCls("max-w-[150px] py-1.5")} value={fCompany} onChange={(e) => setFCompany(e.target.value)}>
          <option value="all">{t("dash.allCompanies")}</option>
          {state.companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select className={inputCls("max-w-[140px] py-1.5")} value={fCat} onChange={(e) => setFCat(e.target.value as CareCategory | "all")}>
          <option value="all">{t("dash.allCategories")}</option>
          {CARE_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select className={inputCls("max-w-[130px] py-1.5")} value={fStatus} onChange={(e) => setFStatus(e.target.value as CareStatus | "all")}>
          <option value="all">{t("dash.allStatuses")}</option>
          {CARE_STATUSES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid gap-5 lg:grid-cols-[380px_1fr]">
        {/* Request list */}
        <div className="space-y-2">
          {list.length === 0 && (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Inbox className="h-8 w-8 text-white/15 mb-3" />
                <p className="text-sm text-white/35">{t("req.empty.list")}</p>
              </div>
            </Card>
          )}
          {list.map((r) => (
            <button
              key={r.id}
              onClick={() => setOpen(r.id)}
              className={`block w-full rounded-xl border p-4 text-left transition-all duration-150 ${
                open === r.id
                  ? "border-[#e07a5f]/40 bg-[#e07a5f]/[0.07]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-white/30 font-mono">{r.id}</span>
                <Pill tone={statusTone(r.status)}>{r.status}</Pill>
              </div>
              <div className="text-sm font-medium text-white/90">{r.subject}</div>
              <div className="mt-1 text-[11px] text-white/40">{r.category} · {getCompanyName(state.companies, r.companyId) || "Guest"}</div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div>
          {selected ? (
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{selected.category} · {selected.id}</p>
                  <h2 className="text-lg font-semibold text-white">{selected.subject}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <select
                    className={inputCls("max-w-[150px] py-1.5")}
                    value={selected.status}
                    onChange={(e) => updateCareRequestStatus(selected.id, e.target.value as CareStatus)}
                  >
                    {CARE_STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <select
                    className={inputCls("max-w-[170px] py-1.5")}
                    value={selected.assignedStaffUid ?? ""}
                    onChange={(e) => assignCareRequest(selected.id, e.target.value)}
                  >
                    <option value="">{t("dash.assign")}</option>
                    {staff.map((s) => <option key={s.uid} value={s.uid}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{selected.details}</p>
              <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4">
                {selected.thread.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-xl px-4 py-3 text-sm ${m.authorRole === "staff" || m.authorRole === "admin" ? "bg-[#e07a5f]/10 border border-[#e07a5f]/15" : "bg-white/[0.04] border border-white/[0.06]"}`}
                  >
                    <div className="text-[10px] text-white/35 mb-1">{m.authorName} · {new Date(m.at).toLocaleString()}</div>
                    <div className="text-white/80">{m.body}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder={t("dash.reply")}
                  className={inputCls("flex-1")}
                />
                <button
                  onClick={() => { if (reply.trim()) { replyToCareRequest(selected.id, reply.trim()); setReply(""); } }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-sm font-semibold hover:bg-[#d96a4f] transition-colors"
                >
                  <Send className="h-3.5 w-3.5" /> {t("dash.send")}
                </button>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="flex flex-col items-center py-12 text-center">
                <Inbox className="h-9 w-9 text-white/12 mb-3" />
                <p className="text-sm text-white/30">{t("req.empty.detail")}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──── Reports ──── */
const repSchema = z.object({
  companyId: z.string().min(1),
  kind: z.enum(["Monthly", "Annual"]),
  periodLabel: z.string().min(2),
  summary: z.string().min(5),
});

function ReportsTab() {
  const { state, generateCareReport } = useCarePortal();
  const { t } = useCareLang();
  const [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof repSchema>>({
    resolver: zodResolver(repSchema),
    defaultValues: { companyId: state.companies[0]?.id, kind: "Monthly", periodLabel: "", summary: "" },
  });

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("rep.section")}
        action={
          <ActionBtn onClick={() => setShow((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("rep.new")}
          </ActionBtn>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <Card>
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">{t("rep.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  generateCareReport(v.companyId, v.kind, v.periodLabel, v.summary);
                  toast.success("Report generated");
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <select className={inputCls()} {...form.register("companyId")}>
                  {state.companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select className={inputCls()} {...form.register("kind")}>
                  <option>Monthly</option>
                  <option>Annual</option>
                </select>
                <input className={inputCls("md:col-span-2")} placeholder={t("rep.form.period")} {...form.register("periodLabel")} />
                <textarea rows={3} className={inputCls("md:col-span-2")} placeholder={t("rep.form.summary")} {...form.register("summary")} />
                <button className="md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors">
                  {t("rep.form.submit")}
                </button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4 md:grid-cols-2">
        {state.reports.map((r) => (
          <Card key={r.id}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[10px] font-mono text-white/25">{r.id}</p>
                <h3 className="mt-1 font-semibold text-white">{getCompanyName(state.companies, r.companyId)}</h3>
                <p className="text-xs text-white/40 mt-0.5">{r.periodLabel}</p>
              </div>
              <Pill tone={r.kind === "Annual" ? "ok" : "info"}>{r.kind}</Pill>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mt-3 border-t border-white/[0.06] pt-3">{r.summary}</p>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/25">
              <CheckCircle2 className="h-3 w-3 text-emerald-500/60" />
              {t("dash.generated")} {new Date(r.generatedAt).toLocaleDateString()}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
