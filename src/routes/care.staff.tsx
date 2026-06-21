import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Inbox, Users, Send } from "lucide-react";

import {
  DashboardShell, StatCard, Pill, statusTone, Card, inputCls, SectionHeader, ActionBtn,
} from "@/components/care/DashboardShell";
import { useCarePortal, CARE_STATUSES, getCompanyName, type CareStatus } from "@/lib/care/store";
import { useCareLang } from "@/lib/care/i18n";

export const Route = createFileRoute("/care/staff")({
  head: () => ({ meta: [{ title: "Staff — WITH Care" }] }),
  component: StaffDashboard,
});

type Tab = "mine" | "unassigned" | "employees";

function StaffDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("mine");
  const me = state.session;
  if (!me) return null;

  const myCount = state.requests.filter((r) => r.assignedStaffUid === me.uid).length;
  const unassignedCount = state.requests.filter((r) => !r.assignedStaffUid).length;
  const myCompanyIds = Array.from(
    new Set(state.requests.filter((r) => r.assignedStaffUid === me.uid).map((r) => r.companyId).filter(Boolean))
  ) as string[];
  const employeeCount = state.users.filter((u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId)).length;

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-white truncate">{me.name}</div>
      <div className="text-[10px] text-white/40">@{me.uid}</div>
    </>
  );

  const nav = [
    { label: t("staff.nav.mine"), key: "mine", icon: Inbox },
    { label: t("staff.nav.unassigned"), key: "unassigned", icon: Inbox },
    { label: t("staff.nav.employees"), key: "employees", icon: Users },
  ];

  return (
    <DashboardShell title={t("staff.title")} role="staff" nav={nav} active={tab} onSelect={(k) => setTab(k as Tab)} identity={identity}>
      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label={t("staff.stat.mine")} value={myCount} tone="coral" />
        <StatCard label={t("staff.stat.unassigned")} value={unassignedCount} tone="amber" sub={t("staff.stat.unassigned.sub")} />
        <StatCard label={t("staff.stat.employees")} value={employeeCount} tone="teal" />
      </div>

      {tab === "mine" && <RequestsView scope="mine" />}
      {tab === "unassigned" && <RequestsView scope="unassigned" />}
      {tab === "employees" && <EmployeesView />}
    </DashboardShell>
  );
}

function RequestsView({ scope }: { scope: "mine" | "unassigned" }) {
  const { state, assignCareRequest, updateCareRequestStatus, replyToCareRequest } = useCarePortal();
  const { t } = useCareLang();
  const me = state.session!;
  const list = state.requests
    .filter((r) => (scope === "mine" ? r.assignedStaffUid === me.uid : !r.assignedStaffUid))
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
  const [open, setOpen] = useState<string | null>(list[0]?.id ?? null);
  const [reply, setReply] = useState("");
  const selected = state.requests.find((r) => r.id === open);

  return (
    <div className="space-y-4">
      <SectionHeader title={scope === "mine" ? t("staff.mine.title") : t("staff.unassigned.title")} />
      <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
        {/* List */}
        <div className="space-y-2">
          {list.length === 0 && (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Inbox className="h-8 w-8 text-white/12 mb-3" />
                <p className="text-sm text-white/30">
                  {scope === "mine" ? t("staff.empty.mine") : t("staff.empty.unassigned")}
                </p>
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
              <div className="mt-1 text-[11px] text-white/40">
                {r.category} · {getCompanyName(state.companies, r.companyId) ?? "Guest"}
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div>
          {selected ? (
            <Card>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                    {selected.category} · {selected.id}
                  </p>
                  <h2 className="text-lg font-semibold text-white">{selected.subject}</h2>
                  <p className="mt-1 text-xs text-white/40">
                    {selected.employeeId
                      ? `From employee ${selected.employeeId}`
                      : `Guest: ${selected.guestName} · ${selected.guestContact}`}
                    {" · "}{getCompanyName(state.companies, selected.companyId)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <select
                    className={inputCls("max-w-[150px] py-1.5")}
                    value={selected.status}
                    onChange={(e) => updateCareRequestStatus(selected.id, e.target.value as CareStatus)}
                  >
                    {CARE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {!selected.assignedStaffUid && (
                    <ActionBtn onClick={() => assignCareRequest(selected.id, me.uid)}>
                      {t("staff.claim")}
                    </ActionBtn>
                  )}
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{selected.details}</p>
              <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4">
                {selected.thread.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-xl px-4 py-3 text-sm ${
                      m.authorRole === "staff" || m.authorRole === "admin"
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
                  placeholder={t("dash.reply")}
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
                <p className="text-sm text-white/30">{t("req.empty.detail")}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function EmployeesView() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const me = state.session!;
  const myCompanyIds = useMemo(
    () =>
      Array.from(
        new Set(state.requests.filter((r) => r.assignedStaffUid === me.uid).map((r) => r.companyId).filter(Boolean))
      ) as string[],
    [state.requests, me.uid],
  );
  const employees = state.users.filter((u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId));

  return (
    <div className="space-y-4">
      <SectionHeader title={t("staff.employees.title")} />
      <Card>
        {employees.length === 0 ? (
          <div className="flex flex-col items-center py-10 text-center">
            <Users className="h-8 w-8 text-white/12 mb-3" />
            <p className="text-sm text-white/30">{t("staff.employees.empty")}</p>
          </div>
        ) : (
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
                <tr key={e.uid} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-medium text-white/90">{e.name}</td>
                  <td className="py-3.5 text-white/45 text-xs hidden sm:table-cell">{getCompanyName(state.companies, e.companyId)}</td>
                  <td className="py-3.5"><Pill tone="info">{e.stage}</Pill></td>
                  <td className="py-3.5 text-white/45 text-xs hidden sm:table-cell">
                    {e.housing ? `${e.housing.district} · $${e.housing.rentUsd}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
