import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as STAGES, c as useCareLang, l as useCarePortal, s as getCompanyName, t as CARE_CATEGORIES } from "./i18n-C-udbzCl.mjs";
import { A as Inbox, F as GitBranch, J as Clock, S as MapPin, X as Circle, Z as CircleCheck, at as CalendarDays, j as House, m as Plus, p as Send, r as Wallet } from "../_libs/lucide-react.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as EmptyState, c as SectionHeader, d as statusTone, i as DashboardShell, l as StatCard, n as Card, o as Pill, s as PremiumCard, t as ActionBtn, u as inputCls } from "./DashboardShell-ByRWoDhS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as objectType, i as enumType, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.employee-a61p64NX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EBW = "text-[10px] uppercase tracking-[0.18em] text-black/32 font-medium";
function EmployeeDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("requests");
	const me = state.session;
	if (!me) return null;
	const myRequests = state.requests.filter((r) => r.employeeId === me.uid);
	const openCount = myRequests.filter((r) => r.status === "New" || r.status === "In Progress").length;
	const companyName = getCompanyName(state.companies, me.companyId);
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-[#0d1f16] truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] text-black/38 truncate",
		children: companyName
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
						sub: "total submitted",
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("mycare.stat.open"),
						value: openCount,
						sub: t("mycare.stat.open.sub"),
						tone: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("mycare.stat.stage"),
						value: me.stage ?? "—",
						sub: "current phase",
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
	const selected = mine.find((r) => r.id === open);
	const form = useForm({
		resolver: u(reqSchema),
		defaultValues: {
			category: "Housing",
			subject: "",
			details: ""
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("mycare.req.section"),
				sub: `${mine.length} request${mine.length !== 1 ? "s" : ""}`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
					onClick: () => setShowNew((s) => !s),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
						" ",
						t("mycare.req.new")
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				transition: { duration: .2 },
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PremiumCard, {
					accent: "coral",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${EBW} mb-4`,
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block ${EBW} mb-1.5`,
								children: t("mycare.req.category") ?? "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls(),
								...form.register("category"),
								children: CARE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: c
								}, c))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block ${EBW} mb-1.5`,
								children: t("mycare.req.subject")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("mycare.req.subject"),
								...form.register("subject")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block ${EBW} mb-1.5`,
								children: t("mycare.req.details")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								className: inputCls(),
								placeholder: t("mycare.req.details"),
								...form.register("details")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full rounded-lg bg-[#14a76c] py-2.5 text-[13px] font-semibold text-white hover:bg-[#109c5f] transition-colors",
								children: t("mycare.req.submit")
							})
						]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[340px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						message: t("mycare.req.empty.list"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-black/30" }),
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowNew(true),
							className: "inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c]/15 px-3 py-1.5 text-[12px] font-medium text-[#14a76c] hover:bg-[#14a76c]/25 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), t("mycare.req.new")]
						})
					}) : mine.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(r.id),
						className: `block w-full rounded-xl border p-4 text-left transition-all duration-150 ${open === r.id ? "border-[#14a76c]/35 bg-[#14a76c]/[0.07]" : "border-black/[0.06] bg-black/[0.02] hover:border-black/10 hover:bg-black/[0.04]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-black/25",
									children: r.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: statusTone(r.status),
									children: t(`status.${r.status}`)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-semibold text-black/90 leading-snug mb-1.5",
								children: r.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-black/38",
									children: r.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-black/22 tabular-nums",
									children: r.submittedAt
								})]
							}),
							r.thread.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1 text-[10px] text-[#14a76c]/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-2.5 w-2.5" }),
									r.thread.length,
									" message",
									r.thread.length !== 1 ? "s" : ""
								]
							})
						]
					}, r.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pb-4 mb-4 border-b border-black/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1.5 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: EBW,
										children: selected.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-black/18 text-[10px]",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-black/25",
										children: selected.id
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[16px] font-semibold text-black/92 leading-snug",
								children: selected.subject
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: statusTone(selected.status),
								children: t(`status.${selected.status}`)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-black/30 tabular-nums mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "inline h-3 w-3 mr-1 opacity-60" }), selected.submittedAt]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-black/62 leading-relaxed mb-5",
						children: selected.details
					}),
					selected.thread.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5 mb-5 border-t border-black/[0.06] pt-4",
						children: selected.thread.map((m) => {
							const isMe = m.authorRole === "employee";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl px-4 py-3 ${isMe ? "bg-[#14a76c]/[0.07] border border-[#14a76c]/15" : "bg-black/[0.03] border border-black/[0.05]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold text-black/75",
											children: m.authorName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
											tone: isMe ? "coral" : "info",
											children: isMe ? "You" : m.authorRole
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-black/25 tabular-nums",
										children: new Date(m.at).toLocaleString()
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[13px] text-black/78 leading-relaxed",
									children: m.body
								})]
							}, m.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 border-t border-black/[0.06] pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: reply,
							onChange: (e) => setReply(e.target.value),
							placeholder: t("mycare.req.message"),
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
							className: "inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c] px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-[#109c5f] transition-colors shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }),
								" ",
								t("dash.send")
							]
						})]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					message: t("mycare.req.empty.detail"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-black/30" })
				}) })]
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: t("mycare.housing.section") }), !h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			message: t("mycare.housing.empty"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5 text-black/30" }),
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-black/22 max-w-xs leading-relaxed",
				children: t("mycare.housing.empty.sub")
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl space-y-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PremiumCard, {
				accent: "teal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5 mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/12 ring-1 ring-emerald-600/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5 text-emerald-600" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-emerald-600/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[17px] font-semibold text-black/92",
							children: h.district
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-[11px] text-black/38 mt-0.5`,
						children: t("mycare.housing.current")
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HousingTile, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4 text-[#14a76c]/70" }),
							label: t("mycare.housing.rent"),
							children: [
								"$",
								h.rentUsd.toLocaleString(),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-black/32 text-[11px] font-normal",
									children: "/mo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingTile, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-emerald-600/60" }),
							label: t("mycare.housing.start"),
							children: h.leaseStart ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingTile, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-emerald-600/60" }),
							label: t("mycare.housing.end"),
							children: h.leaseEnd ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HousingTile, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4 text-[#14a76c]/70" }),
							label: t("mycare.housing.deposit"),
							children: ["$", h.depositUsd?.toLocaleString() ?? "—"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingTile, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `h-4 w-4 ${h.depositReturned ? "text-emerald-600" : "text-black/22"}` }),
							label: t("mycare.housing.depositReturned"),
							children: h.depositReturned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-600",
								children: t("dash.yes")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-black/38",
								children: t("dash.no")
							})
						})
					]
				})]
			})
		})]
	});
}
function HousingTile({ label, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-black/[0.06] bg-black/[0.025] px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 mb-1.5",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: `${EBW}`,
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-[13px] font-semibold text-black/85",
			children
		})]
	});
}
function ProgressTab() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const stage = state.session?.stage ?? "Pre-Arrival";
	const idx = STAGES.indexOf(stage);
	const pct = STAGES.length > 1 ? Math.round(idx / (STAGES.length - 1) * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			title: t("mycare.progress.section"),
			sub: `Phase ${idx + 1} of ${STAGES.length}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PremiumCard, {
				accent: "teal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: EBW,
							children: t("mycare.progress.overall")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[22px] font-semibold text-black/92",
							children: [pct, "%"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: EBW,
								children: "Current Phase"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[13px] font-semibold text-[#14a76c]",
								children: stage
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 rounded-full bg-black/[0.07] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full rounded-full",
							style: { background: "linear-gradient(90deg, #0b6b47, #14a76c)" },
							initial: { width: 0 },
							animate: { width: `${pct}%` },
							transition: {
								duration: .8,
								ease: [
									.22,
									1,
									.36,
									1
								]
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[12px] text-black/45 leading-relaxed",
						children: t("mycare.progress.currentPhase", { stage }).split(stage).map((part, i, arr) => i < arr.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#14a76c] font-semibold",
							children: stage
						})] }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[22px] top-6 bottom-6 w-px bg-black/[0.07]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: STAGES.map((s, i) => {
						const done = i < idx;
						const current = i === idx;
						const future = i > idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all ${current ? "border-[#14a76c]/30 bg-[#14a76c]/[0.06]" : done ? "border-emerald-500/15 bg-emerald-500/[0.03]" : "border-black/[0.04] bg-transparent"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 shrink-0",
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4.5 w-4.5 text-emerald-600" })
								}) : current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#14a76c]/15 ring-1 ring-[#14a76c]/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-[#14a76c] animate-pulse" })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-4 w-4 text-black/15" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 min-w-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: `text-[13px] font-semibold ${current ? "text-black/92" : done ? "text-black/60" : "text-black/28"}`,
											children: [
												t("dash.phase"),
												" ",
												i + 1,
												" — ",
												s
											]
										}),
										current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-[10px] text-[#14a76c] font-semibold shrink-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
												" ",
												t("dash.current")
											]
										}),
										done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-emerald-600/65 shrink-0",
											children: t("dash.completed")
										}),
										future && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-black/18 shrink-0",
											children: "Upcoming"
										})
									]
								})
							})]
						}, s);
					})
				})]
			}) })]
		})]
	});
}
//#endregion
export { EmployeeDashboard as component };
