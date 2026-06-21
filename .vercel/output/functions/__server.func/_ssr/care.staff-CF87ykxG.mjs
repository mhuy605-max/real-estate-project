import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as CARE_STATUSES, o as getCompanyName, s as useCarePortal } from "./store-BM69R9gw.mjs";
import { n as useCareLang } from "./i18n-B5WUMUco.mjs";
import { E as Inbox, f as Send, r as Users } from "../_libs/lucide-react.mjs";
import { a as Pill, c as inputCls, i as DashboardShell, l as statusTone, n as Card, o as SectionHeader, s as StatCard, t as ActionBtn } from "./DashboardShell-3PxWNer-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.staff-CF87ykxG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StaffDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("mine");
	const me = state.session;
	if (!me) return null;
	const myCount = state.requests.filter((r) => r.assignedStaffUid === me.uid).length;
	const unassignedCount = state.requests.filter((r) => !r.assignedStaffUid).length;
	const myCompanyIds = Array.from(new Set(state.requests.filter((r) => r.assignedStaffUid === me.uid).map((r) => r.companyId).filter(Boolean)));
	const employeeCount = state.users.filter((u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId)).length;
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-white truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-[10px] text-white/40",
		children: ["@", me.uid]
	})] });
	const nav = [
		{
			label: t("staff.nav.mine"),
			key: "mine",
			icon: Inbox
		},
		{
			label: t("staff.nav.unassigned"),
			key: "unassigned",
			icon: Inbox
		},
		{
			label: t("staff.nav.employees"),
			key: "employees",
			icon: Users
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashboardShell, {
		title: t("staff.title"),
		role: "staff",
		nav,
		active: tab,
		onSelect: (k) => setTab(k),
		identity,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("staff.stat.mine"),
						value: myCount,
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("staff.stat.unassigned"),
						value: unassignedCount,
						tone: "amber",
						sub: t("staff.stat.unassigned.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("staff.stat.employees"),
						value: employeeCount,
						tone: "teal"
					})
				]
			}),
			tab === "mine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestsView, { scope: "mine" }),
			tab === "unassigned" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestsView, { scope: "unassigned" }),
			tab === "employees" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeesView, {})
		]
	});
}
function RequestsView({ scope }) {
	const { state, assignCareRequest, updateCareRequestStatus, replyToCareRequest } = useCarePortal();
	const { t } = useCareLang();
	const me = state.session;
	const list = state.requests.filter((r) => scope === "mine" ? r.assignedStaffUid === me.uid : !r.assignedStaffUid).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
	const [open, setOpen] = (0, import_react.useState)(list[0]?.id ?? null);
	const [reply, setReply] = (0, import_react.useState)("");
	const selected = state.requests.find((r) => r.id === open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: scope === "mine" ? t("staff.mine.title") : t("staff.unassigned.title") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[360px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center py-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-8 w-8 text-white/12 mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/30",
						children: scope === "mine" ? t("staff.empty.mine") : t("staff.empty.unassigned")
					})]
				}) }), list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(r.id),
					className: `block w-full rounded-xl border p-4 text-left transition-all duration-150 ${open === r.id ? "border-[#e07a5f]/40 bg-[#e07a5f]/[0.07]" : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-white/30 font-mono",
								children: r.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: statusTone(r.status),
								children: r.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium text-white/90",
							children: r.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-[11px] text-white/40",
							children: [
								r.category,
								" · ",
								getCompanyName(state.companies, r.companyId) ?? "Guest"
							]
						})
					]
				}, r.id))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-widest text-white/30 mb-1",
							children: [
								selected.category,
								" · ",
								selected.id
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold text-white",
							children: selected.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-white/40",
							children: [
								selected.employeeId ? `From employee ${selected.employeeId}` : `Guest: ${selected.guestName} · ${selected.guestContact}`,
								" · ",
								getCompanyName(state.companies, selected.companyId)
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: inputCls("max-w-[150px] py-1.5"),
							value: selected.status,
							onChange: (e) => updateCareRequestStatus(selected.id, e.target.value),
							children: CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))
						}), !selected.assignedStaffUid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							onClick: () => assignCareRequest(selected.id, me.uid),
							children: t("staff.claim")
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/60 leading-relaxed",
					children: selected.details
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-2.5 border-t border-white/[0.06] pt-4",
					children: selected.thread.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-xl px-4 py-3 text-sm ${m.authorRole === "staff" || m.authorRole === "admin" ? "bg-[#e07a5f]/10 border border-[#e07a5f]/15" : "bg-white/[0.04] border border-white/[0.06]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] text-white/35 mb-1",
							children: [
								m.authorName,
								" · ",
								new Date(m.at).toLocaleString()
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/80",
							children: m.body
						})]
					}, m.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: reply,
						onChange: (e) => setReply(e.target.value),
						placeholder: t("dash.reply"),
						className: inputCls("flex-1")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							if (reply.trim()) {
								replyToCareRequest(selected.id, reply.trim());
								setReply("");
							}
						},
						className: "inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-sm font-semibold hover:bg-[#d96a4f] transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }),
							" ",
							t("dash.send")
						]
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center py-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-9 w-9 text-white/12 mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/30",
					children: t("req.empty.detail")
				})]
			}) }) })]
		})]
	});
}
function EmployeesView() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const me = state.session;
	const myCompanyIds = (0, import_react.useMemo)(() => Array.from(new Set(state.requests.filter((r) => r.assignedStaffUid === me.uid).map((r) => r.companyId).filter(Boolean))), [state.requests, me.uid]);
	const employees = state.users.filter((u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: t("staff.employees.title") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: employees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center py-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-white/12 mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-white/30",
				children: t("staff.employees.empty")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-[10px] uppercase tracking-widest text-white/30 border-b border-white/[0.06]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-3 font-medium",
						children: t("emp.col.name")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-3 font-medium hidden sm:table-cell",
						children: t("emp.col.company")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-3 font-medium",
						children: t("emp.col.stage")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-3 font-medium hidden sm:table-cell",
						children: t("emp.col.housing")
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y divide-white/[0.05]",
				children: employees.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "hover:bg-white/[0.02] transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3.5 font-medium text-white/90",
							children: e.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3.5 text-white/45 text-xs hidden sm:table-cell",
							children: getCompanyName(state.companies, e.companyId)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: "info",
								children: e.stage
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3.5 text-white/45 text-xs hidden sm:table-cell",
							children: e.housing ? `${e.housing.district} · $${e.housing.rentUsd}` : "—"
						})
					]
				}, e.uid))
			})]
		}) })]
	});
}
//#endregion
export { StaffDashboard as component };
