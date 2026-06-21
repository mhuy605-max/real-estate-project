import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Inbox, Home as HomeIcon, GitBranch, Plus, Send, CheckCircle2, Circle, Clock } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  DashboardShell, StatCard, Pill, statusTone, Card, inputCls, SectionHeader, ActionBtn,
} from "@/components/care/DashboardShell";
import { useCareLang } from "@/lib/care/i18n";
import { useCarePortal, CARE_CATEGORIES, STAGES, type CareCategory, getCompanyName } from "@/lib/care/store";

export const Route = createFileRoute("/care/employee")({
  head: () => ({ meta: [{ title: "My Care — WITH Care" }] }),
  component: EmployeeDashboard,
});

type Tab = "requests" | "housing" | "progress";

function EmployeeDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("requests");
  const me = state.session;
  if (!me) return null;

  const myRequests = state.requests.filter((r) => r.employeeId === me.uid);
  const openRequests = myRequests.filter((r) => r.status === "New" || r.status === "In Progress").length;

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-white truncate">{me.name}</div>
      <div className="text-[10px] text-white/40 truncate">{getCompanyName(state.companies, me.companyId)}</div>
    </>
  );

  const nav = [
    { label: t("mycare.nav.requests"), key: "requests", icon: Inbox },
    { label: t("mycare.nav.housing"), key: "housing", icon: HomeIcon },
    { label: t("mycare.nav.progress"), key: "progress", icon: GitBranch },
  ];

  return (
    <DashboardShell title={t("mycare.title")} role="employee" nav={nav} active={tab} onSelect={(k) => setTab(k as Tab)} identity={identity}>
      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label={t("mycare.stat.requests")} value={myRequests.length} tone="coral" />
        <StatCard label={t("mycare.stat.open")} value={openRequests} tone="amber" sub={t("mycare.stat.open.sub")} />
        <StatCard label={t("mycare.stat.stage")} value={me.stage ?? "—"} tone="teal" />
      </div>

      {tab === "requests" && <MyRequestsTab />}
      {tab === "housing" && <MyHousingTab />}
      {tab === "progress" && <ProgressTab />}
    </DashboardShell>
  );
}

const reqSchema = z.object({
  category: z.enum(CARE_CATEGORIES as [CareCategory, ...CareCategory[]]),
  subject: z.string().min(2),
  details: z.string().min(5),
});

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
  const form = useForm<z.infer<typeof reqSchema>>({
    resolver: zodResolver(reqSchema),
    defaultValues: { category: "Housing", subject: "", details: "" },
  });
  const selected = mine.find((r) => r.id === open);

  return (
    <div className="space-y-4">
      <SectionHeader
        title={t("mycare.req.section")}
        action={
          <ActionBtn onClick={() => setShowNew((s) => !s)}>
            <Plus className="h-3.5 w-3.5" /> {t("mycare.req.new")}
          </ActionBtn>
        }
      />

      {showNew && (
        <Card>
          <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">{t("mycare.req.form.title")}</p>
          <form
            onSubmit={form.handleSubmit((v) => {
              const r = submitCareRequest({ ...v, employeeId: me.uid, companyId: me.companyId });
              toast.success(`Submitted ${r.id}`);
              form.reset();
              setShowNew(false);
              setOpen(r.id);
            })}
            className="space-y-3"
          >
            <select className={inputCls()} {...form.register("category")}>
              {CARE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <input className={inputCls()} placeholder={t("mycare.req.subject")} {...form.register("subject")} />
            <textarea rows={3} className={inputCls()} placeholder={t("mycare.req.details")} {...form.register("details")} />
            <button className="w-full rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors">
              {t("mycare.req.submit")}
            </button>
          </form>
        </Card>
      )}

      <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
        {/* List */}
        <div className="space-y-2">
          {mine.length === 0 && (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Inbox className="h-8 w-8 text-white/12 mb-3" />
                <p className="text-sm text-white/30">{t("mycare.req.empty.list")}</p>
                <p className="text-xs text-white/20 mt-1">{t("mycare.req.empty.sub")}</p>
              </div>
            </Card>
          )}
          {mine.map((r) => (
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
              <div className="mt-1 text-[11px] text-white/40">
                {r.category} · {new Date(r.submittedAt).toLocaleDateString()}
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div>
          {selected ? (
            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                    {selected.category} · {selected.id}
                  </p>
                  <h2 className="text-lg font-semibold text-white">{selected.subject}</h2>
                </div>
                <Pill tone={statusTone(selected.status)}>{selected.status}</Pill>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{selected.details}</p>
              <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4">
                {selected.thread.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-xl px-4 py-3 text-sm ${
                      m.authorRole === "employee"
                        ? "bg-[#e07a5f]/10 border border-[#e07a5f]/15"
                        : "bg-white/[0.04] border border-white/[0.06]"
                    }`}
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
                  placeholder={t("mycare.req.message")}
                  className={inputCls("flex-1")}
                />
                <button
                  onClick={() => {
                    if (reply.trim()) { replyToCareRequest(selected.id, reply.trim()); setReply(""); }
                  }}
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
                <p className="text-sm text-white/30">{t("mycare.req.empty.detail")}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function MyHousingTab() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const h = state.session?.housing;

  return (
    <div className="space-y-4">
      <SectionHeader title={t("mycare.housing.section")} />
      {!h ? (
        <Card>
          <div className="flex flex-col items-center py-12 text-center">
            <HomeIcon className="h-10 w-10 text-white/10 mb-4" />
            <p className="text-sm text-white/35">{t("mycare.housing.empty")}</p>
            <p className="text-xs text-white/20 mt-1 max-w-xs">
              {t("mycare.housing.empty.sub")}
            </p>
          </div>
        </Card>
      ) : (
        <Card className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15">
              <HomeIcon className="h-5 w-5 text-teal-400" />
            </div>
            <div>
              <h2 className="font-semibold text-white text-lg">{h.district}</h2>
              <p className="text-xs text-white/35">{t("mycare.housing.current")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <HousingRow label={t("mycare.housing.rent")}>${h.rentUsd.toLocaleString()}</HousingRow>
            <HousingRow label={t("mycare.housing.start")}>{h.leaseStart ?? "—"}</HousingRow>
            <HousingRow label={t("mycare.housing.end")}>{h.leaseEnd ?? "—"}</HousingRow>
            <HousingRow label={t("mycare.housing.deposit")}>${h.depositUsd?.toLocaleString() ?? "—"}</HousingRow>
            <HousingRow label={t("mycare.housing.depositReturned")}>
              {h.depositReturned ? (
                <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="h-3.5 w-3.5" /> {t("dash.yes")}</span>
              ) : t("dash.no")}
            </HousingRow>
          </div>
        </Card>
      )}
    </div>
  );
}

function HousingRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
      <dt className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</dt>
      <dd className="text-sm font-medium text-white/85">{children}</dd>
    </div>
  );
}

function ProgressTab() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const stage = state.session?.stage ?? "Pre-Arrival";
  const idx = STAGES.indexOf(stage);

  return (
    <div className="space-y-4">
      <SectionHeader title={t("mycare.progress.section")} />
      <Card className="max-w-3xl">
        <p className="text-sm text-white/45 mb-8">
          {t("mycare.progress.currentPhase", { stage }).split(stage).map((part, i, arr) =>
            i < arr.length - 1
              ? <span key={i}>{part}<span className="text-[#e07a5f] font-medium">{stage}</span></span>
              : <span key={i}>{part}</span>
          )}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[18px] top-5 bottom-5 w-px bg-white/[0.08]" />

          <div className="space-y-3">
            {STAGES.map((s, i) => {
              const done = i < idx;
              const current = i === idx;
              return (
                <div key={s} className={`relative flex items-start gap-4 rounded-xl border p-4 transition-all ${
                  current
                    ? "border-[#e07a5f]/35 bg-[#e07a5f]/[0.07]"
                    : done
                    ? "border-emerald-500/20 bg-emerald-500/[0.04]"
                    : "border-white/[0.05] bg-transparent"
                }`}>
                  <div className="relative z-10 flex-shrink-0 mt-0.5">
                    {done ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    ) : current ? (
                      <div className="h-5 w-5 rounded-full border-2 border-[#e07a5f] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#e07a5f] animate-pulse" />
                      </div>
                    ) : (
                      <Circle className="h-5 w-5 text-white/15" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-sm font-medium ${current ? "text-white" : done ? "text-white/70" : "text-white/35"}`}>
                        {t("dash.phase")} {i + 1} — {s}
                      </p>
                      {current && (
                        <div className="flex items-center gap-1.5 text-[10px] text-[#e07a5f] font-medium">
                          <Clock className="h-3 w-3" /> {t("dash.current")}
                        </div>
                      )}
                      {done && (
                        <span className="text-[10px] text-emerald-400/70">{t("dash.completed")}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 pt-5 border-t border-white/[0.06]">
          <div className="flex items-center justify-between text-xs text-white/35 mb-2">
            <span>{t("mycare.progress.overall")}</span>
            <span>{Math.round((idx / (STAGES.length - 1)) * 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e07a5f] to-teal-400 transition-all duration-700"
              style={{ width: `${Math.round((idx / (STAGES.length - 1)) * 100)}%` }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
