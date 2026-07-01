import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Inbox,
  MapPin,
  MessageSquare,
  Send,
  Users,
  Zap,
} from "lucide-react";

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
import { useCarePortal, CARE_STATUSES, getCompanyName, type CareStatus } from "@/lib/care/store";
import { useCareLang } from "@/lib/care/i18n";

export const Route = createFileRoute("/care/staff")({
  head: () => ({ meta: [{ title: "Staff — WITH Care" }] }),
  component: StaffDashboard,
});

type Tab = "mine" | "unassigned" | "employees";

// ─── Eyebrow label style ──────────────────────────────────────────────────────
const EBW = "text-[10px] uppercase tracking-[0.18em] text-white/32 font-medium";

// ─── Staff Dashboard ──────────────────────────────────────────────────────────
function StaffDashboard() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const [tab, setTab] = useState<Tab>("mine");
  const me = state.session;
  if (!me) return null;

  const myRequests = state.requests.filter((r) => r.assignedStaffUid === me.uid);
  const myCount = myRequests.length;
  const openMine = myRequests.filter(
    (r) => r.status === "New" || r.status === "In Progress",
  ).length;
  const unassignedCount = state.requests.filter((r) => !r.assignedStaffUid).length;
  const myCompanyIds = Array.from(
    new Set(myRequests.map((r) => r.companyId).filter(Boolean)),
  ) as string[];
  const employeeCount = state.users.filter(
    (u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId),
  ).length;

  const identity = (
    <>
      <div className="text-[12px] font-semibold text-white truncate">{me.name}</div>
      <div className="text-[10px] text-white/38 font-mono">@{me.uid}</div>
    </>
  );

  const nav = [
    { label: t("staff.nav.mine"), key: "mine", icon: Inbox },
    { label: t("staff.nav.unassigned"), key: "unassigned", icon: MessageSquare },
    { label: t("staff.nav.employees"), key: "employees", icon: Users },
  ];

  return (
    <DashboardShell
      title={t("staff.title")}
      role="staff"
      nav={nav}
      active={tab}
      onSelect={(k) => setTab(k as Tab)}
      identity={identity}
    >
      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard
          label={t("staff.stat.mine")}
          value={myCount}
          sub={openMine > 0 ? `${openMine} open` : "all clear"}
          tone="coral"
        />
        <StatCard
          label={t("staff.stat.unassigned")}
          value={unassignedCount}
          sub={t("staff.stat.unassigned.sub")}
          tone="amber"
        />
        <StatCard
          label={t("staff.stat.employees")}
          value={employeeCount}
          sub={`${myCompanyIds.length} companies`}
          tone="teal"
        />
      </div>

      {tab === "mine" && <RequestsView scope="mine" />}
      {tab === "unassigned" && <RequestsView scope="unassigned" />}
      {tab === "employees" && <EmployeesView />}
    </DashboardShell>
  );
}

// ─── Requests View ────────────────────────────────────────────────────────────
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

  const sectionTitle = scope === "mine" ? t("staff.mine.title") : t("staff.unassigned.title");
  const emptyMsg = scope === "mine" ? t("staff.empty.mine") : t("staff.empty.unassigned");

  return (
    <div className="space-y-4">
      <SectionHeader
        title={sectionTitle}
        sub={`${list.length} request${list.length !== 1 ? "s" : ""}`}
      />

      <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
        {/* ── Request list ── */}
        <div className="space-y-2">
          {list.length === 0 ? (
            <EmptyState message={emptyMsg} icon={<Inbox className="h-5 w-5 text-white/30" />} />
          ) : (
            list.map((r) => {
              const isActive = open === r.id;
              const companyName = getCompanyName(state.companies, r.companyId);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setOpen(r.id)}
                  className={`block w-full rounded-xl border p-4 text-left transition-all duration-150 ${
                    isActive
                      ? "border-[#e07a5f]/35 bg-[#e07a5f]/[0.07]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Top row: id + status */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-white/25">{r.id}</span>
                    <Pill tone={statusTone(r.status)}>{t(`status.${r.status}`)}</Pill>
                  </div>

                  {/* Subject */}
                  <div className="text-[13px] font-semibold text-white/90 leading-snug mb-1.5">
                    {r.subject}
                  </div>

                  {/* Metadata row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/38">
                      <span>{r.category}</span>
                      {companyName && (
                        <>
                          <span className="text-white/18">·</span>
                          <span className="flex items-center gap-0.5">
                            <Building2 className="h-2.5 w-2.5" />
                            {companyName}
                          </span>
                        </>
                      )}
                    </div>
                    <span className="text-[10px] text-white/22 tabular-nums">{r.submittedAt}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* ── Detail panel ── */}
        <div>
          {selected ? (
            <Card>
              {/* Header */}
              <div className="pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={EBW}>{selected.category}</span>
                      <span className="text-white/18 text-[10px]">·</span>
                      <span className="font-mono text-[10px] text-white/25">{selected.id}</span>
                      <Pill tone={statusTone(selected.status)}>
                        {t(`status.${selected.status}`)}
                      </Pill>
                    </div>
                    <h2 className="text-[16px] font-semibold text-white/92 leading-snug">
                      {selected.subject}
                    </h2>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
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
                    {!selected.assignedStaffUid && (
                      <ActionBtn onClick={() => assignCareRequest(selected.id, me.uid)}>
                        <Zap className="h-3.5 w-3.5" />
                        {t("staff.claim")}
                      </ActionBtn>
                    )}
                  </div>
                </div>

                {/* Requester info */}
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3.5 py-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[10px] font-bold text-white/60">
                    {selected.guestName
                      ? selected.guestName.charAt(0).toUpperCase()
                      : (selected.employeeId ?? "?").charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[12px] text-white/70 font-medium">
                      {selected.employeeId
                        ? `Employee · ${selected.employeeId}`
                        : `${selected.guestName ?? "Guest"} · ${selected.guestContact ?? ""}`}
                    </span>
                    {selected.companyId && (
                      <span className="text-[11px] text-white/35 ml-2">
                        @ {getCompanyName(state.companies, selected.companyId)}
                      </span>
                    )}
                  </div>
                  {selected.assignedStaffUid && (
                    <div className="flex items-center gap-1 text-[10px] text-[#e07a5f]/70">
                      <CheckCircle2 className="h-3 w-3" />
                      Claimed
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <p className="text-[13px] text-white/62 leading-relaxed mb-5">{selected.details}</p>

              {/* Thread */}
              {selected.thread.length > 0 && (
                <div className="space-y-2.5 mb-5 border-t border-white/[0.06] pt-4">
                  {selected.thread.map((m) => {
                    const isStaff = m.authorRole === "staff" || m.authorRole === "admin";
                    return (
                      <div
                        key={m.id}
                        className={`rounded-xl px-4 py-3 ${
                          isStaff
                            ? "bg-[#e07a5f]/[0.07] border border-[#e07a5f]/15"
                            : "bg-white/[0.03] border border-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-white/78">
                              {m.authorName}
                            </span>
                            {isStaff && <Pill tone="coral">{m.authorRole}</Pill>}
                          </div>
                          <span className="text-[10px] text-white/25 tabular-nums">
                            {new Date(m.at).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-[13px] text-white/75 leading-relaxed">{m.body}</div>
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
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[13px] font-semibold hover:bg-[#d96a4f] transition-colors shrink-0"
                >
                  <Send className="h-3.5 w-3.5" /> {t("dash.send")}
                </button>
              </div>
            </Card>
          ) : (
            <EmptyState
              message={t("req.empty.detail")}
              icon={<Inbox className="h-5 w-5 text-white/30" />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Employees View ───────────────────────────────────────────────────────────
function EmployeesView() {
  const { state } = useCarePortal();
  const { t } = useCareLang();
  const me = state.session!;

  const myCompanyIds = useMemo(
    () =>
      Array.from(
        new Set(
          state.requests
            .filter((r) => r.assignedStaffUid === me.uid)
            .map((r) => r.companyId)
            .filter(Boolean),
        ),
      ) as string[],
    [state.requests, me.uid],
  );

  const employees = state.users.filter(
    (u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId),
  );

  return (
    <div className="space-y-4">
      <SectionHeader
        title={t("staff.employees.title")}
        sub={`${employees.length} employee${employees.length !== 1 ? "s" : ""} across ${myCompanyIds.length} company account${myCompanyIds.length !== 1 ? "s" : ""}`}
      />

      {employees.length === 0 ? (
        <EmptyState
          message={t("staff.employees.empty")}
          icon={<Users className="h-5 w-5 text-white/30" />}
        />
      ) : (
        <PremiumCard noPad>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/[0.06]">
                {[
                  t("emp.col.name"),
                  t("emp.col.company"),
                  t("emp.col.stage"),
                  t("emp.col.housing"),
                ].map((col, i) => (
                  <th
                    key={col}
                    className={`px-5 py-3.5 text-[10px] uppercase tracking-[0.18em] text-white/32 font-medium bg-white/[0.015] ${
                      i >= 1 ? "hidden sm:table-cell" : ""
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {employees.map((e) => (
                <tr key={e.uid} className="hover:bg-white/[0.025] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/12 text-[11px] font-bold text-[#e07a5f]">
                        {e.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-white/90">{e.name}</div>
                        <div className="text-[10px] text-white/32 font-mono">{e.uid}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3 w-3 text-white/25" />
                      <span className="text-[12px] text-white/50">
                        {getCompanyName(state.companies, e.companyId)}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <Pill tone="info">{e.stage}</Pill>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    {e.housing ? (
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1 text-[12px] text-white/55">
                          <MapPin className="h-3 w-3 text-white/25" />
                          {e.housing.district}
                        </div>
                        {e.housing.rentUsd > 0 && (
                          <div className="text-[11px] text-white/32">
                            ${e.housing.rentUsd.toLocaleString()}/mo
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-[12px] text-white/22">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </PremiumCard>
      )}
    </div>
  );
}
