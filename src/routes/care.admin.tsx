import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  FileBarChart,
  Filter,
  Home,
  Inbox,
  MapPin,
  Plus,
  Send,
  Users,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

import {
  DashboardShell,
  StatStrip,
  StatCard,
  Pill,
  statusTone,
  Card,
  PremiumCard,
  EmptyState,
  inputCls,
  SectionHeader,
  ActionBtn,
  useDashboardMotion,
} from "@/components/care/DashboardShell";
import { useCareLang } from "@/lib/care/i18n";
import {
  useCarePortal,
  CARE_STATUSES,
  CARE_CATEGORIES,
  STAGES,
  type CareStatus,
  type CareCategory,
  type SettlementStage,
  type ContractTier,
  getCompanyName,
  getCareStaff,
} from "@/lib/care/store";

export const Route = createFileRoute("/care/admin")({
  head: () => ({ meta: [{ title: "Admin — WITH Care" }] }),
  component: AdminDashboard,
});

type Tab = "companies" | "employees" | "requests" | "reports";

// ─── Eyebrow label style ──────────────────────────────────────────────────────
const EBW = "text-[10px] uppercase tracking-[0.18em] text-black/32 font-medium";

// ─── Admin Dashboard ──────────────────────────────────────────────────────────
function AdminDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("requests");
  const me = state.session;
  if (!me) return null;

  const openCount = state.requests.filter(
    (r) => r.status === "New" || r.status === "In Progress",
  ).length;

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-[#0d1f16] truncate">{me.name}</div>
      <div className="text-[10px] text-[#14a76c]/70 uppercase tracking-wider">
        {t("dash.fullAccess")}
      </div>
    </>
  );

  const nav = [
    { label: t("admin.nav.companies"), key: "companies", icon: Building2 },
    { label: t("admin.nav.employees"), key: "employees", icon: Users },
    { label: t("admin.nav.requests"), key: "requests", icon: Inbox, badge: openCount },
    { label: t("admin.nav.reports"), key: "reports", icon: FileBarChart },
  ];

  return (
    <DashboardShell
      title={t("admin.title")}
      role="admin"
      nav={nav}
      active={tab}
      onSelect={(k) => setTab(k as Tab)}
      identity={identity}
    >
      {/* Stats strip — one bordered container with divide-x, not four boxed cards */}
      <StatStrip>
        <StatCard
          label={t("admin.stat.companies")}
          value={state.companies.length}
          sub={t("admin.stat.companies.sub")}
          tone="teal"
        />
        <StatCard
          label={t("admin.stat.employees")}
          value={state.users.filter((u) => u.role === "employee").length}
          sub={t("admin.stat.employees.sub")}
          tone="coral"
        />
        <StatCard
          label={t("admin.stat.openRequests")}
          value={openCount}
          sub={t("admin.stat.openRequests.sub")}
          tone="amber"
        />
        <StatCard
          label={t("admin.stat.reports")}
          value={state.reports.length}
          sub={t("admin.stat.reports.sub")}
          tone="sky"
        />
      </StatStrip>

      {tab === "companies" && <CompaniesTab />}
      {tab === "employees" && <EmployeesTab />}
      {tab === "requests" && <RequestsTab />}
      {tab === "reports" && <ReportsTab />}
    </DashboardShell>
  );
}

// ─── Companies Tab ────────────────────────────────────────────────────────────
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

const tierPill: Record<ContractTier, "ok" | "info" | "warn" | "muted"> = {
  Premium: "ok",
  Pro: "info",
  Basic: "warn",
  Trial: "muted",
};

function CompaniesTab() {
  const { state, createCareCompany } = useCarePortal();
  const { t } = useCareLang();
  const { fadeUp, staggerParent } = useDashboardMotion();
  const [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      tier: "Basic",
      seats: 5,
      contractStart: "",
      contractEnd: "",
      name: "",
      hrContactName: "",
      hrContactEmail: "",
    },
  });

  const seatsUsed = (id: string) =>
    state.users.filter((u) => u.role === "employee" && u.companyId === id).length;

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("co.section")}
        sub={t("co.section.sub", { count: String(state.companies.length) })}
        action={
          <ActionBtn onClick={() => setShow((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("co.new")}
          </ActionBtn>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <PremiumCard accent="coral" className="mb-0">
              <p className={`${EBW} mb-4`}>{t("co.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  createCareCompany(v);
                  toast.success(t("co.toast.created"));
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <input
                  className={inputCls()}
                  placeholder={t("co.form.name")}
                  {...form.register("name")}
                />
                <select className={inputCls()} {...form.register("tier")}>
                  {TIERS.map((tier) => (
                    <option key={tier}>{tier}</option>
                  ))}
                </select>
                <input className={inputCls()} type="date" {...form.register("contractStart")} />
                <input className={inputCls()} type="date" {...form.register("contractEnd")} />
                <input
                  className={inputCls()}
                  placeholder={t("co.form.hrName")}
                  {...form.register("hrContactName")}
                />
                <input
                  className={inputCls()}
                  placeholder={t("co.form.hrEmail")}
                  {...form.register("hrContactEmail")}
                />
                <input
                  className={inputCls()}
                  type="number"
                  placeholder={t("co.form.seats")}
                  {...form.register("seats")}
                />
                <button
                  type="submit"
                  className="md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors"
                >
                  {t("co.form.submit")}
                </button>
              </form>
            </PremiumCard>
          </motion.div>
        )}
      </AnimatePresence>

      {state.companies.length === 0 ? (
        <EmptyState
          message={t("co.empty")}
          icon={<Building2 className="h-5 w-5 text-black/30" />}
        />
      ) : (
        <Card>
          <table className="w-full">
            <thead>
              <tr className={`text-left border-b border-black/[0.06]`}>
                {[
                  t("co.col.company"),
                  t("co.col.tier"),
                  t("co.col.contract"),
                  t("co.col.seats"),
                  t("co.col.hr"),
                ].map((col, i) => (
                  <th
                    key={col}
                    className={`pb-3 ${EBW} font-medium ${i >= 2 ? (i === 2 ? "hidden sm:table-cell" : "hidden md:table-cell") : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody
              initial="hidden"
              animate="visible"
              variants={staggerParent}
              className="divide-y divide-black/[0.04]"
            >
              {state.companies.map((c) => {
                const used = seatsUsed(c.id);
                const pct = c.seats > 0 ? used / c.seats : 0;
                return (
                  <motion.tr
                    key={c.id}
                    variants={fadeUp}
                    className="group hover:bg-black/[0.025] transition-colors"
                  >
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10 text-[11px] font-bold text-emerald-600">
                          {c.name.charAt(0)}
                        </div>
                        <span className="text-[13px] font-semibold text-black/90">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 pr-4">
                      <Pill tone={tierPill[c.tier]}>{c.tier}</Pill>
                    </td>
                    <td className="py-3.5 pr-4 text-[11px] text-black/40 tabular-nums hidden sm:table-cell">
                      {c.contractStart} → {c.contractEnd}
                    </td>
                    <td className="py-3.5 pr-4 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] text-black/75 tabular-nums">
                          {used}
                          <span className="text-black/28">/{c.seats}</span>
                        </span>
                        <div className="w-16 h-1 rounded-full bg-black/[0.07] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-emerald-600/60 transition-all"
                            style={{ width: `${Math.min(pct * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 text-[12px] text-black/40 hidden md:table-cell">
                      {c.hrContactName}
                    </td>
                  </motion.tr>
                );
              })}
            </motion.tbody>
          </table>
        </Card>
      )}
    </div>
  );
}

// ─── Employees Tab ────────────────────────────────────────────────────────────
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
  const { fadeUp, staggerParent } = useDashboardMotion();
  const [filter, setFilter] = useState<string>("all");
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState<string | null>(null);
  const employees = state.users.filter(
    (u) => u.role === "employee" && (filter === "all" || u.companyId === filter),
  );
  const form = useForm<z.infer<typeof empSchema>>({
    resolver: zodResolver(empSchema),
    defaultValues: {
      uid: "",
      name: "",
      password: "employee",
      companyId: state.companies[0]?.id,
      familySize: 1,
      stage: "Pre-Arrival",
      nationality: "",
    },
  });
  const selected = state.users.find((u) => u.uid === edit);

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("emp.section")}
        sub={t("emp.section.sub", { count: String(employees.length) })}
        action={
          <div className="flex items-center gap-2">
            <select
              className={inputCls("max-w-[160px] py-1.5 text-[12px]")}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">{t("dash.allCompanies")}</option>
              {state.companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <ActionBtn onClick={() => setShow((s) => !s)}>
              <Plus className="h-3.5 w-3.5" /> {t("emp.new")}
            </ActionBtn>
          </div>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <PremiumCard accent="coral">
              <p className={`${EBW} mb-4`}>{t("emp.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  createCareEmployee({ ...v, disabled: false, languagePref: "en" });
                  toast.success(t("emp.toast.created"));
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <input
                  className={inputCls()}
                  placeholder={t("emp.form.uid")}
                  {...form.register("uid")}
                />
                <input
                  className={inputCls()}
                  placeholder={t("emp.form.password")}
                  {...form.register("password")}
                />
                <input
                  className={inputCls()}
                  placeholder={t("emp.form.name")}
                  {...form.register("name")}
                />
                <input
                  className={inputCls()}
                  placeholder={t("emp.form.nationality")}
                  {...form.register("nationality")}
                />
                <select className={inputCls()} {...form.register("companyId")}>
                  {state.companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <select className={inputCls()} {...form.register("stage")}>
                  {STAGES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <input
                  className={inputCls()}
                  type="number"
                  placeholder={t("emp.form.familySize")}
                  {...form.register("familySize")}
                />
                <button
                  type="submit"
                  className="md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors"
                >
                  {t("emp.form.submit")}
                </button>
              </form>
            </PremiumCard>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        {/* Employee table */}
        {employees.length === 0 ? (
          <EmptyState message={t("emp.empty")} icon={<Users className="h-5 w-5 text-black/30" />} />
        ) : (
          <Card>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-black/[0.06]">
                  {[
                    t("emp.col.name"),
                    t("emp.col.company"),
                    t("emp.col.stage"),
                    t("emp.col.housing"),
                  ].map((col, i) => (
                    <th
                      key={col}
                      className={`pb-3 ${EBW} font-medium ${i === 1 ? "hidden sm:table-cell" : ""} ${i === 3 ? "hidden sm:table-cell" : ""}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                animate="visible"
                variants={staggerParent}
                className="divide-y divide-black/[0.04]"
              >
                {employees.map((e) => (
                  <motion.tr
                    key={e.uid}
                    variants={fadeUp}
                    onClick={() => setEdit(e.uid)}
                    className={`cursor-pointer transition-colors ${
                      edit === e.uid ? "bg-[#14a76c]/[0.07]" : "hover:bg-black/[0.025]"
                    }`}
                  >
                    <td className="py-3.5 pr-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/12 text-[11px] font-bold text-[#14a76c]">
                          {e.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-black/90">{e.name}</div>
                          <div className="text-[10px] text-black/35 font-mono">{e.uid}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 pr-3 hidden sm:table-cell">
                      <span className="text-[12px] text-black/50">
                        {getCompanyName(state.companies, e.companyId)}
                      </span>
                    </td>
                    <td className="py-3.5 pr-3">
                      <Pill tone="info">{e.stage}</Pill>
                    </td>
                    <td className="py-3.5 hidden sm:table-cell">
                      {e.housing ? (
                        <div className="flex items-center gap-1 text-[12px] text-black/45">
                          <MapPin className="h-3 w-3 text-black/25" />
                          {e.housing.district}
                        </div>
                      ) : (
                        <span className="text-[12px] text-black/22">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </Card>
        )}

        {/* Employee detail panel */}
        {selected ? (
          <PremiumCard accent="coral">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/15 text-[13px] font-bold text-[#14a76c] ring-1 ring-[#14a76c]/20">
                {selected.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-black/92">{selected.name}</div>
                <div className="text-[11px] text-black/38">
                  {getCompanyName(state.companies, selected.companyId)}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`block ${EBW} mb-1.5`}>{t("emp.detail.stage")}</label>
                <select
                  className={inputCls()}
                  value={selected.stage}
                  onChange={(e) =>
                    updateCareEmployee(selected.uid, { stage: e.target.value as SettlementStage })
                  }
                >
                  {STAGES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <fieldset className="rounded-xl border border-black/[0.07] p-4 space-y-3">
                <legend className="px-1.5 text-[10px] uppercase tracking-widest text-black/32 flex items-center gap-1.5">
                  <Home className="h-3 w-3" /> {t("emp.detail.housing")}
                </legend>
                <input
                  className={inputCls()}
                  placeholder={t("emp.detail.district")}
                  defaultValue={selected.housing?.district ?? ""}
                  onBlur={(e) =>
                    updateCareEmployee(selected.uid, {
                      housing: {
                        ...(selected.housing ?? { district: "", rentUsd: 0 }),
                        district: e.target.value,
                      },
                    })
                  }
                />
                <input
                  className={inputCls()}
                  type="number"
                  placeholder={t("emp.detail.rent")}
                  defaultValue={selected.housing?.rentUsd ?? 0}
                  onBlur={(e) =>
                    updateCareEmployee(selected.uid, {
                      housing: {
                        ...(selected.housing ?? { district: "", rentUsd: 0 }),
                        rentUsd: Number(e.target.value),
                      },
                    })
                  }
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className={inputCls()}
                    type="date"
                    defaultValue={selected.housing?.leaseStart ?? ""}
                    onBlur={(e) =>
                      updateCareEmployee(selected.uid, {
                        housing: {
                          ...(selected.housing ?? { district: "", rentUsd: 0 }),
                          leaseStart: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    className={inputCls()}
                    type="date"
                    defaultValue={selected.housing?.leaseEnd ?? ""}
                    onBlur={(e) =>
                      updateCareEmployee(selected.uid, {
                        housing: {
                          ...(selected.housing ?? { district: "", rentUsd: 0 }),
                          leaseEnd: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </fieldset>
            </div>
          </PremiumCard>
        ) : (
          <EmptyState message={t("emp.empty")} icon={<Users className="h-5 w-5 text-black/30" />} />
        )}
      </div>
    </div>
  );
}

// ─── Requests Tab ─────────────────────────────────────────────────────────────
function RequestsTab() {
  const { state, assignCareRequest, updateCareRequestStatus, replyToCareRequest } = useCarePortal();
  const { t } = useCareLang();
  const { fadeUp, staggerParent } = useDashboardMotion();
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
      <SectionHeader
        title={t("req.section")}
        sub={t("req.section.sub", { count: String(list.length) })}
      />

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-black/[0.06] bg-black/[0.02] px-4 py-3">
        <Filter className="h-3.5 w-3.5 text-black/25 shrink-0" />
        <select
          className={inputCls("max-w-[150px] py-1.5 text-[12px]")}
          value={fCompany}
          onChange={(e) => setFCompany(e.target.value)}
        >
          <option value="all">{t("dash.allCompanies")}</option>
          {state.companies.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          className={inputCls("max-w-[140px] py-1.5 text-[12px]")}
          value={fCat}
          onChange={(e) => setFCat(e.target.value as CareCategory | "all")}
        >
          <option value="all">{t("dash.allCategories")}</option>
          {CARE_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {t(`category.${c}`)}
            </option>
          ))}
        </select>
        <select
          className={inputCls("max-w-[130px] py-1.5 text-[12px]")}
          value={fStatus}
          onChange={(e) => setFStatus(e.target.value as CareStatus | "all")}
        >
          <option value="all">{t("dash.allStatuses")}</option>
          {CARE_STATUSES.map((s) => (
            <option key={s} value={s}>
              {t(`status.${s}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 lg:grid-cols-[380px_1fr]">
        {/* Request list */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="space-y-2"
        >
          {list.length === 0 ? (
            <EmptyState
              message={t("req.empty.list")}
              icon={<Inbox className="h-5 w-5 text-black/30" />}
            />
          ) : (
            list.map((r) => (
              <motion.button
                key={r.id}
                type="button"
                variants={fadeUp}
                onClick={() => setOpen(r.id)}
                className={`block w-full rounded-xl border p-4 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14a76c]/40 ${
                  open === r.id
                    ? "border-[#14a76c]/35 bg-[#14a76c]/[0.07]"
                    : "border-black/[0.06] bg-black/[0.02] hover:border-black/10 hover:bg-black/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-black/28 font-mono">{r.id}</span>
                  <Pill tone={statusTone(r.status)}>{t(`status.${r.status}`)}</Pill>
                </div>
                <div className="text-[13px] font-semibold text-black/90 leading-snug">
                  {r.subject}
                </div>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-black/38">{r.category}</span>
                  <span className="text-[11px] text-black/30">
                    {getCompanyName(state.companies, r.companyId) || t("dash.guest")}
                  </span>
                </div>
              </motion.button>
            ))
          )}
        </motion.div>

        {/* Detail panel */}
        <div>
          {selected ? (
            <Card>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-black/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`${EBW}`}>{selected.category}</span>
                    <span className="text-black/18">·</span>
                    <span className="font-mono text-[10px] text-black/25">{selected.id}</span>
                  </div>
                  <h2 className="text-[16px] font-semibold text-black/92 leading-snug">
                    {selected.subject}
                  </h2>
                  <p className="text-[11px] text-black/35 mt-0.5">
                    {getCompanyName(state.companies, selected.companyId) || t("dash.guest")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <select
                    className={inputCls("max-w-[150px] py-1.5 text-[12px]")}
                    value={selected.status}
                    onChange={(e) =>
                      updateCareRequestStatus(selected.id, e.target.value as CareStatus)
                    }
                  >
                    {CARE_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {t(`status.${s}`)}
                      </option>
                    ))}
                  </select>
                  <select
                    className={inputCls("max-w-[170px] py-1.5 text-[12px]")}
                    value={selected.assignedStaffUid ?? ""}
                    onChange={(e) => assignCareRequest(selected.id, e.target.value)}
                  >
                    <option value="">{t("dash.assign")}</option>
                    {staff.map((s) => (
                      <option key={s.uid} value={s.uid}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Body */}
              <p className="text-[13px] text-black/62 leading-relaxed mb-5">{selected.details}</p>

              {/* Thread */}
              {selected.thread.length > 0 && (
                <div className="space-y-2.5 mb-5 border-t border-black/[0.06] pt-4">
                  {selected.thread.map((m) => {
                    const isStaff = m.authorRole === "staff" || m.authorRole === "admin";
                    return (
                      <div
                        key={m.id}
                        className={`rounded-xl px-4 py-3 ${
                          isStaff
                            ? "bg-[#14a76c]/[0.07] border border-[#14a76c]/15"
                            : "bg-black/[0.03] border border-black/[0.05]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-black/75">
                              {m.authorName}
                            </span>
                            {isStaff && <Pill tone="coral">{m.authorRole}</Pill>}
                          </div>
                          <span className="text-[10px] text-black/28 tabular-nums">
                            {new Date(m.at).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-[13px] text-black/78 leading-relaxed">{m.body}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Reply bar */}
              <div className="flex gap-2 border-t border-black/[0.06] pt-4">
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder={t("dash.reply")}
                  className={inputCls("flex-1")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && reply.trim()) {
                      replyToCareRequest(selected.id, reply.trim());
                      setReply("");
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (reply.trim()) {
                      replyToCareRequest(selected.id, reply.trim());
                      setReply("");
                    }
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c] px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-[#109c5f] transition-colors shrink-0"
                >
                  <Send className="h-3.5 w-3.5" /> {t("dash.send")}
                </button>
              </div>
            </Card>
          ) : (
            <EmptyState
              message={t("req.empty.detail")}
              icon={<Inbox className="h-5 w-5 text-black/30" />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Reports Tab ──────────────────────────────────────────────────────────────
const repSchema = z.object({
  companyId: z.string().min(1),
  kind: z.enum(["Monthly", "Annual"]),
  periodLabel: z.string().min(2),
  summary: z.string().min(5),
});

function ReportsTab() {
  const { state, generateCareReport } = useCarePortal();
  const { t } = useCareLang();
  const { fadeUp, staggerParent } = useDashboardMotion();
  const [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof repSchema>>({
    resolver: zodResolver(repSchema),
    defaultValues: {
      companyId: state.companies[0]?.id,
      kind: "Monthly",
      periodLabel: "",
      summary: "",
    },
  });

  return (
    <div className="space-y-5">
      <SectionHeader
        title={t("rep.section")}
        sub={t("rep.section.sub", { count: String(state.reports.length) })}
        action={
          <ActionBtn onClick={() => setShow((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("rep.new")}
          </ActionBtn>
        }
      />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <PremiumCard accent="teal">
              <p className={`${EBW} mb-4`}>{t("rep.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  generateCareReport(v.companyId, v.kind, v.periodLabel, v.summary);
                  toast.success(t("rep.toast.created"));
                  form.reset();
                  setShow(false);
                })}
                className="grid gap-3 md:grid-cols-2"
              >
                <select className={inputCls()} {...form.register("companyId")}>
                  {state.companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <select className={inputCls()} {...form.register("kind")}>
                  <option>Monthly</option>
                  <option>Annual</option>
                </select>
                <input
                  className={inputCls("md:col-span-2")}
                  placeholder={t("rep.form.period")}
                  {...form.register("periodLabel")}
                />
                <textarea
                  rows={3}
                  className={inputCls("md:col-span-2")}
                  placeholder={t("rep.form.summary")}
                  {...form.register("summary")}
                />
                <button
                  type="submit"
                  className="md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors"
                >
                  {t("rep.form.submit")}
                </button>
              </form>
            </PremiumCard>
          </motion.div>
        )}
      </AnimatePresence>

      {state.reports.length === 0 ? (
        <EmptyState
          message={t("rep.empty")}
          icon={<FileBarChart className="h-5 w-5 text-black/30" />}
        />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="grid gap-4 md:grid-cols-2"
        >
          {state.reports.map((r) => (
            <motion.div key={r.id} variants={fadeUp}>
              <PremiumCard accent={r.kind === "Annual" ? "teal" : undefined}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-mono text-[10px] text-black/22">{r.id}</p>
                    <h3 className="mt-1 text-[14px] font-semibold text-black/92">
                      {getCompanyName(state.companies, r.companyId)}
                    </h3>
                    <p className="text-[12px] text-black/38 mt-0.5">{r.periodLabel}</p>
                  </div>
                  <Pill tone={r.kind === "Annual" ? "ok" : "info"}>{r.kind}</Pill>
                </div>
                <p className="text-[13px] text-black/60 leading-relaxed border-t border-black/[0.06] pt-3">
                  {r.summary}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-black/28">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500/60" />
                  {t("dash.generated")} {new Date(r.generatedAt).toLocaleDateString()}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
