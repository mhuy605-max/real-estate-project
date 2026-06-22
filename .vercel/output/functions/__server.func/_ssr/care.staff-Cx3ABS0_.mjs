import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal, n as CARE_STATUSES, s as getCompanyName } from "./i18n-OlzCbsxR.mjs";
import { A as Inbox, S as MapPin, X as CircleCheck, at as Building2, b as MessageSquare, i as Users, p as Send, t as Zap } from "../_libs/lucide-react.mjs";
import { a as EmptyState, c as SectionHeader, d as statusTone, i as DashboardShell, l as StatCard, n as Card, o as Pill, s as PremiumCard, t as ActionBtn, u as inputCls } from "./DashboardShell-nN8-P_r8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.staff-Cx3ABS0_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EBW = "text-[10px] uppercase tracking-[0.18em] text-white/32 font-medium";
function StaffDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("mine");
	const me = state.session;
	if (!me) return null;
	const myRequests = state.requests.filter((r) => r.assignedStaffUid === me.uid);
	const myCount = myRequests.length;
	const openMine = myRequests.filter((r) => r.status === "New" || r.status === "In Progress").length;
	const unassignedCount = state.requests.filter((r) => !r.assignedStaffUid).length;
	const myCompanyIds = Array.from(new Set(myRequests.map((r) => r.companyId).filter(Boolean)));
	const employeeCount = state.users.filter((u) => u.role === "employee" && u.companyId && myCompanyIds.includes(u.companyId)).length;
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-white truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-[10px] text-white/38 font-mono",
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
			icon: MessageSquare
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
						sub: openMine > 0 ? `${openMine} open` : "all clear",
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("staff.stat.unassigned"),
						value: unassignedCount,
						sub: t("staff.stat.unassigned.sub"),
						tone: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("staff.stat.employees"),
						value: employeeCount,
						sub: `${myCompanyIds.length} companies`,
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
	const sectionTitle = scope === "mine" ? t("staff.mine.title") : t("staff.unassigned.title");
	const emptyMsg = scope === "mine" ? t("staff.empty.mine") : t("staff.empty.unassigned");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			title: sectionTitle,
			sub: `${list.length} request${list.length !== 1 ? "s" : ""}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[360px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					message: emptyMsg,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-white/30" })
				}) : list.map((r) => {
					const isActive = open === r.id;
					const companyName = getCompanyName(state.companies, r.companyId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(r.id),
						className: `block w-full rounded-xl border p-4 text-left transition-all duration-150 ${isActive ? "border-[#e07a5f]/35 bg-[#e07a5f]/[0.07]" : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-white/25",
									children: r.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: statusTone(r.status),
									children: r.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-semibold text-white/90 leading-snug mb-1.5",
								children: r.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[11px] text-white/38",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.category }), companyName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/18",
										children: "·"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-2.5 w-2.5" }), companyName]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-white/22 tabular-nums",
									children: r.submittedAt
								})]
							})
						]
					}, r.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pb-4 mb-4 border-b border-white/[0.06]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1.5 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: EBW,
										children: selected.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/18 text-[10px]",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-white/25",
										children: selected.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										tone: statusTone(selected.status),
										children: selected.status
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[16px] font-semibold text-white/92 leading-snug",
								children: selected.subject
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-end gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls("max-w-[150px] py-1.5 text-[12px]"),
								value: selected.status,
								onChange: (e) => updateCareRequestStatus(selected.id, e.target.value),
								children: CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))
							}), !selected.assignedStaffUid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
								onClick: () => assignCareRequest(selected.id, me.uid),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), t("staff.claim")]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3.5 py-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[10px] font-bold text-white/60",
								children: selected.guestName ? selected.guestName.charAt(0).toUpperCase() : (selected.employeeId ?? "?").charAt(0).toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] text-white/70 font-medium",
									children: selected.employeeId ? `Employee · ${selected.employeeId}` : `${selected.guestName ?? "Guest"} · ${selected.guestContact ?? ""}`
								}), selected.companyId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-white/35 ml-2",
									children: ["@ ", getCompanyName(state.companies, selected.companyId)]
								})]
							}),
							selected.assignedStaffUid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[10px] text-[#e07a5f]/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), "Claimed"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-white/62 leading-relaxed mb-5",
					children: selected.details
				}),
				selected.thread.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2.5 mb-5 border-t border-white/[0.06] pt-4",
					children: selected.thread.map((m) => {
						const isStaff = m.authorRole === "staff" || m.authorRole === "admin";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-xl px-4 py-3 ${isStaff ? "bg-[#e07a5f]/[0.07] border border-[#e07a5f]/15" : "bg-white/[0.03] border border-white/[0.05]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-white/78",
										children: m.authorName
									}), isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										tone: "coral",
										children: m.authorRole
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-white/25 tabular-nums",
									children: new Date(m.at).toLocaleString()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] text-white/75 leading-relaxed",
								children: m.body
							})]
						}, m.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 border-t border-white/[0.06] pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: reply,
						onChange: (e) => setReply(e.target.value),
						placeholder: t("dash.reply"),
						className: inputCls("flex-1"),
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey && reply.trim()) {
								replyToCareRequest(selected.id, reply.trim());
								setReply("");
							}
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (reply.trim()) {
								replyToCareRequest(selected.id, reply.trim());
								setReply("");
							}
						},
						className: "inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[13px] font-semibold hover:bg-[#d96a4f] transition-colors shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }),
							" ",
							t("dash.send")
						]
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				message: t("req.empty.detail"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-white/30" })
			}) })]
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			title: t("staff.employees.title"),
			sub: `${employees.length} employee${employees.length !== 1 ? "s" : ""} across ${myCompanyIds.length} company account${myCompanyIds.length !== 1 ? "s" : ""}`
		}), employees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			message: t("staff.employees.empty"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-white/30" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiumCard, {
			noPad: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "text-left border-b border-white/[0.06]",
					children: [
						t("emp.col.name"),
						t("emp.col.company"),
						t("emp.col.stage"),
						t("emp.col.housing")
					].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: `px-5 py-3.5 text-[10px] uppercase tracking-[0.18em] text-white/32 font-medium bg-white/[0.015] ${i >= 1 ? "hidden sm:table-cell" : ""}`,
						children: col
					}, col))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-white/[0.04]",
					children: employees.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "hover:bg-white/[0.025] transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/12 text-[11px] font-bold text-[#e07a5f]",
										children: e.name.charAt(0)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[13px] font-semibold text-white/90",
										children: e.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-white/32 font-mono",
										children: e.uid
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 hidden sm:table-cell",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-3 w-3 text-white/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] text-white/50",
										children: getCompanyName(state.companies, e.companyId)
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 hidden sm:table-cell",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: "info",
									children: e.stage
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 hidden sm:table-cell",
								children: e.housing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[12px] text-white/55",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-white/25" }), e.housing.district]
									}), e.housing.rentUsd > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-white/32",
										children: [
											"$",
											e.housing.rentUsd.toLocaleString(),
											"/mo"
										]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] text-white/22",
									children: "—"
								})
							})
						]
					}, e.uid))
				})]
			})
		})]
	});
}
//#endregion
export { StaffDashboard as component };
