import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock,
  GitBranch,
  Home as HomeIcon,
  Inbox,
  MapPin,
  Plus,
  Send,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";

import {
  DashboardShell,
  StatCard,
  Pill,
  PremiumCard,
  EmptyState,
  statusTone,
  Card,
  inputCls,
  SectionHeader,
  ActionBtn,
} from "@/components/care/DashboardShell";
import { useCareLang } from "@/lib/care/i18n";
import {
  useCarePortal,
  CARE_CATEGORIES,
  STAGES,
  type CareCategory,
  getCompanyName,
} from "@/lib/care/store";

export const Route = createFileRoute("/care/employee")({
  head: () => ({ meta: [{ title: "My Care — WITH Care" }] }),
  component: EmployeeDashboard,
});

type Tab = "requests" | "housing" | "progress";

// ─── Eyebrow label style ──────────────────────────────────────────────────────
const EBW = "text-[10px] uppercase tracking-[0.18em] text-white/32 font-medium";

// ─── Employee Dashboard ───────────────────────────────────────────────────────
function EmployeeDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("requests");
  const me = state.session;
  if (!me) return null;

  const myRequests = state.requests.filter((r) => r.employeeId === me.uid);
  const openCount = myRequests.filter(
    (r) => r.status === "New" || r.status === "In Progress",
  ).length;
  const companyName = getCompanyName(state.companies, me.companyId);

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-white truncate">{me.name}</div>
      <div className="text-[10px] text-white/38 truncate">{companyName}</div>
    </>
  );

  const nav = [
    { label: t("mycare.nav.requests"), key: "requests", icon: Inbox },
    { label: t("mycare.nav.housing"), key: "housing", icon: HomeIcon },
    { label: t("mycare.nav.progress"), key: "progress", icon: GitBranch },
  ];

  return (
    <DashboardShell
      title={t("mycare.title")}
      role="employee"
      nav={nav}
      active={tab}
      onSelect={(k) => setTab(k as Tab)}
      identity={identity}
    >
      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard
          label={t("mycare.stat.requests")}
          value={myRequests.length}
          sub="total submitted"
          tone="coral"
        />
        <StatCard
          label={t("mycare.stat.open")}
          value={openCount}
          sub={t("mycare.stat.open.sub")}
          tone="amber"
        />
        <StatCard
          label={t("mycare.stat.stage")}
          value={me.stage ?? "—"}
          sub="current phase"
          tone="teal"
        />
      </div>

      {tab === "requests" && <MyRequestsTab />}
      {tab === "housing" && <MyHousingTab />}
      {tab === "progress" && <ProgressTab />}
    </DashboardShell>
  );
}

// ─── Request schema ───────────────────────────────────────────────────────────
const reqSchema = z.object({
  category: z.enum(CARE_CATEGORIES as [CareCategory, ...CareCategory[]]),
  subject: z.string().min(2),
  details: z.string().min(5),
});

// ─── My Requests Tab ──────────────────────────────────────────────────────────
function MyRequestsTab() {
  const { state, submitCareRequest, replyToCareRequest } = useCarePortal();
  const { t } = useCareLang();
  const me = state.session!;

  const mine = state.requests
    .filter((r) => r.employeeId === me.uid)
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));

  const [open, setOpen] = useState<string | null>(mine[0]?.id ?? null);
  const [showNew, setShowNew] = useState(false);
  const [reply, setReply] = useState("");
  const selected = mine.find((r) => r.id === open);

  const form = useForm<z.infer<typeof reqSchema>>({
    resolver: zodResolver(reqSchema),
    defaultValues: { category: "Housing", subject: "", details: "" },
  });

  return (
    <div className="space-y-4">
      <SectionHeader
        title={t("mycare.req.section")}
        sub={`${mine.length} request${mine.length !== 1 ? "s" : ""}`}
        action={
          <ActionBtn onClick={() => setShowNew((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("mycare.req.new")}
          </ActionBtn>
        }
      />

      {/* New request form */}
      <AnimatePresence>
        {showNew && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <PremiumCard accent="coral">
              <p className={`${EBW} mb-4`}>{t("mycare.req.form.title")}</p>
              <form
                onSubmit={form.handleSubmit((v) => {
                  const r = submitCareRequest({
                    ...v,
                    employeeId: me.uid,
                    companyId: me.companyId,
                  });
                  toast.success(`Submitted ${r.id}`);
                  form.reset();
                  setShowNew(false);
                  setOpen(r.id);
                })}
                className="space-y-3"
              >
                <div>
                  <label className={`block ${EBW} mb-1.5`}>
                    {t("mycare.req.category") ?? "Category"}
                  </label>
                  <select className={inputCls()} {...form.register("category")}>
                    {CARE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block ${EBW} mb-1.5`}>{t("mycare.req.subject")}</label>
                  <input
                    className={inputCls()}
                    placeholder={t("mycare.req.subject")}
                    {...form.register("subject")}
                  />
                </div>
                <div>
                  <label className={`block ${EBW} mb-1.5`}>{t("mycare.req.details")}</label>
                  <textarea
                    rows={3}
                    className={inputCls()}
                    placeholder={t("mycare.req.details")}
                    {...form.register("details")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#e07a5f] py-2.5 text-[13px] font-semibold hover:bg-[#d96a4f] transition-colors"
                >
                  {t("mycare.req.submit")}
                </button>
              </form>
            </PremiumCard>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
        {/* ── Request list ── */}
        <div className="space-y-2">
          {mine.length === 0 ? (
            <EmptyState
              message={t("mycare.req.empty.list")}
              icon={<Inbox className="h-5 w-5 text-white/30" />}
              action={
                <button
                  type="button"
                  onClick={() => setShowNew(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f]/15 px-3 py-1.5 text-[12px] font-medium text-[#e07a5f] hover:bg-[#e07a5f]/25 transition-colors"
                >
                  <Plus className="h-3 w-3" />
                  {t("mycare.req.new")}
                </button>
              }
            />
          ) : (
            mine.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setOpen(r.id)}
                className={`block w-full rounded-xl border p-4 text-left transition-all duration-150 ${
                  open === r.id
                    ? "border-[#e07a5f]/35 bg-[#e07a5f]/[0.07]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-white/25">{r.id}</span>
                  <Pill tone={statusTone(r.status)}>{r.status}</Pill>
                </div>
                <div className="text-[13px] font-semibold text-white/90 leading-snug mb-1.5">
                  {r.subject}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/38">{r.category}</span>
                  <span className="text-[10px] text-white/22 tabular-nums">{r.submittedAt}</span>
                </div>
                {r.thread.length > 0 && (
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-[#e07a5f]/60">
                    <Send className="h-2.5 w-2.5" />
                    {r.thread.length} message{r.thread.length !== 1 ? "s" : ""}
                  </div>
                )}
              </button>
            ))
          )}
        </div>

        {/* ── Request detail ── */}
        <div>
          {selected ? (
            <Card>
              {/* Header */}
              <div className="pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={EBW}>{selected.category}</span>
                      <span className="text-white/18 text-[10px]">·</span>
                      <span className="font-mono text-[10px] text-white/25">{selected.id}</span>
                    </div>
                    <h2 className="text-[16px] font-semibold text-white/92 leading-snug">
                      {selected.subject}
                    </h2>
                  </div>
                  <Pill tone={statusTone(selected.status)}>{selected.status}</Pill>
                </div>
                <p className="text-[11px] text-white/30 tabular-nums mt-1.5">
                  <CalendarDays className="inline h-3 w-3 mr-1 opacity-60" />
                  {selected.submittedAt}
                </p>
              </div>

              {/* Body */}
              <p className="text-[13px] text-white/62 leading-relaxed mb-5">{selected.details}</p>

              {/* Thread */}
              {selected.thread.length > 0 && (
                <div className="space-y-2.5 mb-5 border-t border-white/[0.06] pt-4">
                  {selected.thread.map((m) => {
                    const isMe = m.authorRole === "employee";
                    return (
                      <div
                        key={m.id}
                        className={`rounded-xl px-4 py-3 ${
                          isMe
                            ? "bg-[#e07a5f]/[0.07] border border-[#e07a5f]/15"
                            : "bg-white/[0.03] border border-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-white/75">
                              {m.authorName}
                            </span>
                            <Pill tone={isMe ? "coral" : "info"}>
                              {isMe ? "You" : m.authorRole}
                            </Pill>
                          </div>
                          <span className="text-[10px] text-white/25 tabular-nums">
                            {new Date(m.at).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-[13px] text-white/78 leading-relaxed">{m.body}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Reply composer */}
              <div className="flex gap-2 border-t border-white/[0.06] pt-4">
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder={t("mycare.req.message")}
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
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[13px] font-semibold hover:bg-[#d96a4f] transition-colors shrink-0"
                >
                  <Send className="h-3.5 w-3.5" /> {t("dash.send")}
                </button>
              </div>
            </Card>
          ) : (
            <EmptyState
              message={t("mycare.req.empty.detail")}
              icon={<Inbox className="h-5 w-5 text-white/30" />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Housing Tab ──────────────────────────────────────────────────────────────
function MyHousingTab() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const h = state.session?.housing;

  return (
    <div className="space-y-4">
      <SectionHeader title={t("mycare.housing.section")} />
      {!h ? (
        <EmptyState
          message={t("mycare.housing.empty")}
          icon={<HomeIcon className="h-5 w-5 text-white/30" />}
          action={
            <p className="text-[11px] text-white/22 max-w-xs leading-relaxed">
              {t("mycare.housing.empty.sub")}
            </p>
          }
        />
      ) : (
        <div className="max-w-2xl space-y-4">
          {/* Hero housing card */}
          <PremiumCard accent="teal">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/12 ring-1 ring-teal-400/20">
                <HomeIcon className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-teal-400/70" />
                  <h2 className="text-[17px] font-semibold text-white/92">{h.district}</h2>
                </div>
                <p className={`text-[11px] text-white/38 mt-0.5`}>{t("mycare.housing.current")}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <HousingTile
                icon={<Wallet className="h-4 w-4 text-[#e07a5f]/70" />}
                label={t("mycare.housing.rent")}
              >
                ${h.rentUsd.toLocaleString()}
                <span className="text-white/32 text-[11px] font-normal">/mo</span>
              </HousingTile>

              <HousingTile
                icon={<CalendarDays className="h-4 w-4 text-teal-400/60" />}
                label={t("mycare.housing.start")}
              >
                {h.leaseStart ?? "—"}
              </HousingTile>

              <HousingTile
                icon={<CalendarDays className="h-4 w-4 text-teal-400/60" />}
                label={t("mycare.housing.end")}
              >
                {h.leaseEnd ?? "—"}
              </HousingTile>

              <HousingTile
                icon={<Wallet className="h-4 w-4 text-[#e07a5f]/70" />}
                label={t("mycare.housing.deposit")}
              >
                ${h.depositUsd?.toLocaleString() ?? "—"}
              </HousingTile>

              <HousingTile
                icon={
                  <CheckCircle2
                    className={`h-4 w-4 ${h.depositReturned ? "text-emerald-400" : "text-white/22"}`}
                  />
                }
                label={t("mycare.housing.depositReturned")}
              >
                {h.depositReturned ? (
                  <span className="text-emerald-400">{t("dash.yes")}</span>
                ) : (
                  <span className="text-white/38">{t("dash.no")}</span>
                )}
              </HousingTile>
            </div>
          </PremiumCard>
        </div>
      )}
    </div>
  );
}

function HousingTile({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
      <div className="flex items-center gap-1.5 mb-1.5">
        {icon}
        <dt className={`${EBW}`}>{label}</dt>
      </div>
      <dd className="text-[13px] font-semibold text-white/85">{children}</dd>
    </div>
  );
}

// ─── Progress Tab ─────────────────────────────────────────────────────────────
function ProgressTab() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const stage = state.session?.stage ?? "Pre-Arrival";
  const idx = STAGES.indexOf(stage);
  const pct = STAGES.length > 1 ? Math.round((idx / (STAGES.length - 1)) * 100) : 0;

  return (
    <div className="space-y-4">
      <SectionHeader
        title={t("mycare.progress.section")}
        sub={`Phase ${idx + 1} of ${STAGES.length}`}
      />

      <div className="max-w-2xl space-y-4">
        {/* Progress summary card */}
        <PremiumCard accent="teal">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className={EBW}>{t("mycare.progress.overall")}</p>
              <p className="mt-1 text-[22px] font-semibold text-white/92">{pct}%</p>
            </div>
            <div className="text-right">
              <p className={EBW}>Current Phase</p>
              <p className="mt-1 text-[13px] font-semibold text-[#e07a5f]">{stage}</p>
            </div>
          </div>
          <div className="h-2 rounded-full bg-white/[0.07] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #e07a5f, #2bc0b4)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-3 text-[12px] text-white/45 leading-relaxed">
            {t("mycare.progress.currentPhase", { stage })
              .split(stage)
              .map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-[#e07a5f] font-semibold">{stage}</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
          </p>
        </PremiumCard>

        {/* Stage timeline */}
        <Card>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[22px] top-6 bottom-6 w-px bg-white/[0.07]" />

            <div className="space-y-2">
              {STAGES.map((s, i) => {
                const done = i < idx;
                const current = i === idx;
                const future = i > idx;
                return (
                  <div
                    key={s}
                    className={`relative flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all ${
                      current
                        ? "border-[#e07a5f]/30 bg-[#e07a5f]/[0.06]"
                        : done
                          ? "border-emerald-500/15 bg-emerald-500/[0.03]"
                          : "border-white/[0.04] bg-transparent"
                    }`}
                  >
                    {/* Step icon */}
                    <div className="relative z-10 shrink-0">
                      {done ? (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15">
                          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" />
                        </div>
                      ) : current ? (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e07a5f]/15 ring-1 ring-[#e07a5f]/30">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#e07a5f] animate-pulse" />
                        </div>
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04]">
                          <Circle className="h-4 w-4 text-white/15" />
                        </div>
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`text-[13px] font-semibold ${
                            current ? "text-white/92" : done ? "text-white/60" : "text-white/28"
                          }`}
                        >
                          {t("dash.phase")} {i + 1} — {s}
                        </p>
                        {current && (
                          <div className="flex items-center gap-1.5 text-[10px] text-[#e07a5f] font-semibold shrink-0">
                            <Clock className="h-3 w-3" /> {t("dash.current")}
                          </div>
                        )}
                        {done && (
                          <span className="text-[10px] text-emerald-400/65 shrink-0">
                            {t("dash.completed")}
                          </span>
                        )}
                        {future && (
                          <span className="text-[10px] text-white/18 shrink-0">Upcoming</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
