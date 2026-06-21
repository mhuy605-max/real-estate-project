import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as STAGES, o as getCompanyName, s as useCarePortal, t as CARE_CATEGORIES } from "./store-BM69R9gw.mjs";
import { n as useCareLang } from "./i18n-B5WUMUco.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as House, E as Inbox, G as CircleCheck, H as Clock, W as Circle, f as Send, j as GitBranch, p as Plus } from "../_libs/lucide-react.mjs";
import { a as Pill, c as inputCls, i as DashboardShell, l as statusTone, n as Card, o as SectionHeader, s as StatCard, t as ActionBtn } from "./DashboardShell-3PxWNer-.mjs";
import { a as objectType, i as enumType, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.employee-BAPsRK0s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmployeeDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("requests");
	const me = state.session;
	if (!me) return null;
	const myRequests = state.requests.filter((r) => r.employeeId === me.uid);
	const openRequests = myRequests.filter((r) => r.status === "New" || r.status === "In Progress").length;
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-white truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] text-white/40 truncate",
		children: getCompanyName(state.companies, me.companyId)
	})] });
	const nav = [
		{
			label: t("mycare.nav.requests"),
			key: "requests",
			icon: Inbox
		},
		{
			label: t("mycare.nav.housing"),
			key: "housing",
			icon: House
		},
		{
			label: t("mycare.nav.progress"),
			key: "progress",
			icon: GitBranch
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashboardShell, {
		title: t("mycare.title"),
		role: "employee",
		nav,
		active: tab,
		onSelect: (k) => setTab(k),
		identity,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("mycare.stat.requests"),
						value: myRequests.length,
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("mycare.stat.open"),
						value: openRequests,
						tone: "amber",
						sub: t("mycare.stat.open.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("mycare.stat.stage"),
						value: me.stage ?? "—",
						tone: "teal"
					})
				]
			}),
			tab === "requests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyRequestsTab, {}),
			tab === "housing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyHousingTab, {}),
			tab === "progress" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressTab, {})
		]
	});
}
var reqSchema = objectType({
	category: enumType(CARE_CATEGORIES),
	subject: stringType().min(2),
	details: stringType().min(5)
});
function MyRequestsTab() {
	const { state, submitCareRequest, replyToCareRequest } = useCarePortal();
	const { t } = useCareLang();
	const me = state.session;
	const mine = state.requests.filter((r) => r.employeeId === me.uid).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
	const [open, setOpen] = (0, import_react.useState)(mine[0]?.id ?? null);
	const [showNew, setShowNew] = (0, import_react.useState)(false);
	const [reply, setReply] = (0, import_react.useState)("");
	const form = useForm({
		resolver: u(reqSchema),
		defaultValues: {
			category: "Housing",
			subject: "",
			details: ""
		}
	});
	const selected = mine.find((r) => r.id === open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("mycare.req.section"),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
					onClick: () => setShowNew((s) => !s),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
						" ",
						t("mycare.req.new")
					]
				})
			}),
			showNew && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-widest text-white/35 mb-4",
				children: t("mycare.req.form.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit((v) => {
					const r = submitCareRequest({
						...v,
						employeeId: me.uid,
						companyId: me.companyId
					});
					toast.success(`Submitted ${r.id}`);
					form.reset();
					setShowNew(false);
					setOpen(r.id);
				}),
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputCls(),
						...form.register("category"),
						children: CARE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls(),
						placeholder: t("mycare.req.subject"),
						...form.register("subject")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						className: inputCls(),
						placeholder: t("mycare.req.details"),
						...form.register("details")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-full rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors",
						children: t("mycare.req.submit")
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[340px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [mine.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center py-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-8 w-8 text-white/12 mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/30",
								children: t("mycare.req.empty.list")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/20 mt-1",
								children: t("mycare.req.empty.sub")
							})
						]
					}) }), mine.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
									new Date(r.submittedAt).toLocaleDateString()
								]
							})
						]
					}, r.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-widest text-white/30 mb-1",
							children: [
								selected.category,
								" · ",
								selected.id
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold text-white",
							children: selected.subject
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: statusTone(selected.status),
							children: selected.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/60 leading-relaxed",
						children: selected.details
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-2.5 border-t border-white/[0.06] pt-4",
						children: selected.thread.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-xl px-4 py-3 text-sm ${m.authorRole === "employee" ? "bg-[#e07a5f]/10 border border-[#e07a5f]/15" : "bg-white/[0.04] border border-white/[0.06]"}`,
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
							placeholder: t("mycare.req.message"),
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
						children: t("mycare.req.empty.detail")
					})]
				}) }) })]
			})
		]
	});
}
function MyHousingTab() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const h = state.session?.housing;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: t("mycare.housing.section") }), !h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center py-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-10 w-10 text-white/10 mb-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/35",
					children: t("mycare.housing.empty")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-white/20 mt-1 max-w-xs",
					children: t("mycare.housing.empty.sub")
				})
			]
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5 text-teal-400" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold text-white text-lg",
					children: h.district
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-white/35",
					children: t("mycare.housing.current")
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HousingRow, {
						label: t("mycare.housing.rent"),
						children: ["$", h.rentUsd.toLocaleString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingRow, {
						label: t("mycare.housing.start"),
						children: h.leaseStart ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingRow, {
						label: t("mycare.housing.end"),
						children: h.leaseEnd ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HousingRow, {
						label: t("mycare.housing.deposit"),
						children: ["$", h.depositUsd?.toLocaleString() ?? "—"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingRow, {
						label: t("mycare.housing.depositReturned"),
						children: h.depositReturned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-emerald-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }),
								" ",
								t("dash.yes")
							]
						}) : t("dash.no")
					})
				]
			})]
		})]
	});
}
function HousingRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[10px] uppercase tracking-widest text-white/30 mb-1",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-sm font-medium text-white/85",
			children
		})]
	});
}
function ProgressTab() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const stage = state.session?.stage ?? "Pre-Arrival";
	const idx = STAGES.indexOf(stage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: t("mycare.progress.section") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/45 mb-8",
					children: t("mycare.progress.currentPhase", { stage }).split(stage).map((part, i, arr) => i < arr.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#e07a5f] font-medium",
						children: stage
					})] }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[18px] top-5 bottom-5 w-px bg-white/[0.08]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: STAGES.map((s, i) => {
							const done = i < idx;
							const current = i === idx;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative flex items-start gap-4 rounded-xl border p-4 transition-all ${current ? "border-[#e07a5f]/35 bg-[#e07a5f]/[0.07]" : done ? "border-emerald-500/20 bg-emerald-500/[0.04]" : "border-white/[0.05] bg-transparent"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 flex-shrink-0 mt-0.5",
									children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-emerald-400" }) : current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-5 w-5 rounded-full border-2 border-[#e07a5f] flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-[#e07a5f] animate-pulse" })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-5 w-5 text-white/15" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: `text-sm font-medium ${current ? "text-white" : done ? "text-white/70" : "text-white/35"}`,
												children: [
													t("dash.phase"),
													" ",
													i + 1,
													" — ",
													s
												]
											}),
											current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 text-[10px] text-[#e07a5f] font-medium",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
													" ",
													t("dash.current")
												]
											}),
											done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-emerald-400/70",
												children: t("dash.completed")
											})
										]
									})
								})]
							}, s);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 pt-5 border-t border-white/[0.06]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs text-white/35 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("mycare.progress.overall") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(idx / (STAGES.length - 1) * 100), "%"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 rounded-full bg-white/[0.06] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gradient-to-r from-[#e07a5f] to-teal-400 transition-all duration-700",
							style: { width: `${Math.round(idx / (STAGES.length - 1) * 100)}%` }
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { EmployeeDashboard as component };
