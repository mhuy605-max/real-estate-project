import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { _ as Navigate, g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as House, a as TrendingUp, b as LogOut, f as Send, l as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal } from "./store-Ckbp1fQa.mjs";
import { t as Input } from "./input-BIucxNrH.mjs";
import { a as VipBadge, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./VipBadge-C2gNbV75.mjs";
import { t as Textarea } from "./textarea-DkoOhk_z.mjs";
import { n as WithLogo, r as pt, t as PortalLangSwitcher } from "./portalTranslations-D9VevV8C.mjs";
import { c as ResponsiveContainer, i as XAxis, l as Tooltip, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.investor-CXloLZjX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BG = "bg-[#0a0a0a]";
var SURFACE = "bg-[#141414]";
var CARD = "bg-[#1a1a1a]";
var BORDER = "border-white/[0.08]";
var EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/50";
var MUTED = "text-white/55";
function fmtMoney(n) {
	return `$${n.toLocaleString()}`;
}
function greeting(lang) {
	const h = (/* @__PURE__ */ new Date()).getHours();
	const T = pt(lang).investor;
	if (h < 12) return T.greetingMorning;
	if (h < 18) return T.greetingAfternoon;
	return T.greetingEvening;
}
function InvestorDashboard() {
	const { state, logout, submitInquiry } = usePortal();
	const { lang } = useLang();
	const T = pt(lang);
	const navigate = useNavigate();
	const user = state.session;
	const investor = user && user.role === "investor" ? user : null;
	const inquiries = (0, import_react.useMemo)(() => investor ? state.inquiries.filter((q) => q.investorId === investor.uid) : [], [state.inquiries, investor]);
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/login",
		replace: true
	});
	if (user.role === "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/admin",
		replace: true
	});
	if (user.role === "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/staff",
		replace: true
	});
	if (user.role !== "investor") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/login",
		replace: true
	});
	if (!investor) return null;
	const roi = (investor.currentValue - investor.purchasePrice) / investor.purchasePrice * 100;
	function handleLogout() {
		logout();
		navigate({
			to: "/portal/login",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-h-screen ${BG}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: `border-b ${BORDER} ${SURFACE} sticky top-0 z-40`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 h-[64px] flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
						variant: "dark",
						size: 28,
						animate: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalLangSwitcher, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/with-property",
								className: `hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium ${MUTED} hover:text-white/80 border border-white/[0.08] rounded hover:border-white/15 transition-all`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), T.nav.mainSite]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium text-[#d9534f]/75 hover:text-[#d9534f] border border-[#d9534f]/20 hover:border-[#d9534f]/40 rounded hover:bg-[#d9534f]/[0.07] transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), T.nav.logout]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-8 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .4 },
						className: "mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `${EYEBROW} text-[#14a76c] mb-1`,
								children: greeting(lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-[22px] font-semibold text-white tracking-[-0.01em]",
									children: investor.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, { grade: investor.vipGrade })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[12px] ${MUTED} mt-1`,
								children: investor.unit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `text-[11px] text-white/35 mt-0.5`,
								children: [
									T.investor.lastLogin,
									": ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono",
										children: investor.lastLogin
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
								label: T.investor.metrics.purchasePrice,
								value: fmtMoney(investor.purchasePrice),
								sub: "acquisition cost"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
								label: T.investor.metrics.currentValue,
								value: fmtMoney(investor.currentValue),
								sub: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-[#14a76c]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }),
										roi >= 0 ? "+" : "",
										roi.toFixed(1),
										"% gain"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
								label: T.investor.metrics.roi,
								value: `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`,
								sub: "total return",
								valueColor: roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${CARD} border ${BORDER} rounded-lg px-5 py-4`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `${EYEBROW} mb-3`,
									children: T.investor.metrics.rentStatus
								}), investor.rentStatus === "Cleared" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex px-2.5 py-0.5 text-[11px] tracking-wide rounded bg-[#14a76c]/12 text-[#14a76c] font-medium",
									children: T.investor.rentStatusCleared
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] ${MUTED} mt-2`,
									children: "no action required"
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex px-2.5 py-0.5 text-[11px] tracking-wide rounded bg-[#d9534f]/12 text-[#d9534f] font-medium",
									children: [T.investor.rentStatusPending, " ⚠"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] ${MUTED} mt-2`,
									children: "contact management"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "asset",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
								className: `${SURFACE} border ${BORDER} h-9 p-0.5 mb-6`,
								children: [
									["asset", T.investor.tabs.asset],
									["reports", T.investor.tabs.reports],
									["inquiries", T.investor.tabs.inquiries]
								].map(([val, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: val,
									className: "text-[12px] data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/50 px-4",
									children: label
								}, val))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "asset",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border border-[#14a76c]/20 rounded-lg p-4 flex gap-3`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#14a76c] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[13px] text-white/90",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-white",
												children: [T.investor.aiInsight, ":"]
											}),
											" ",
											T.investor.aiInsightBody
										]
									}) })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border ${BORDER} rounded-lg p-5`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] font-semibold text-white/90 mb-5",
										children: T.investor.chartTitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-64",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
											width: "100%",
											height: "100%",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
												data: investor.monthlyRentalIncome,
												barCategoryGap: "35%",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
														strokeDasharray: "3 3",
														vertical: false,
														stroke: "rgba(255,255,255,0.06)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "month",
														tick: {
															fontSize: 11,
															fill: "rgba(255,255,255,0.4)"
														},
														axisLine: false,
														tickLine: false
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														tick: {
															fontSize: 11,
															fill: "rgba(255,255,255,0.4)"
														},
														axisLine: false,
														tickLine: false
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
														contentStyle: {
															background: "#1e1e1e",
															border: "1px solid rgba(255,255,255,0.1)",
															borderRadius: 6,
															fontSize: 12,
															color: "rgba(255,255,255,0.85)"
														},
														cursor: { fill: "rgba(255,255,255,0.03)" }
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "income",
														fill: "#14a76c",
														radius: [
															4,
															4,
															0,
															0
														]
													})
												]
											})
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "reports",
								className: "space-y-3",
								children: investor.reports.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `${CARD} border ${BORDER} border-dashed rounded-lg p-10 text-center`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `text-sm ${MUTED}`,
										children: T.investor.noReports
									})
								}) : investor.reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border ${BORDER} rounded-lg p-5`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] font-semibold text-white/90",
											children: r.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] ${MUTED}`,
											children: r.timestamp
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-white/70",
										children: r.content
									})]
								}, r.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "inquiries",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewInquiryForm, {
									T: T.investor,
									onSubmit: (title, body) => submitInquiry(investor.uid, title, body)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `${CARD} border ${BORDER} border-dashed rounded-lg p-8 text-center`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm ${MUTED}`,
											children: T.investor.noInquiries
										})
									}) : inquiries.slice().reverse().map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `${CARD} border ${BORDER} rounded-lg p-5`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-start justify-between gap-3 mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[14px] font-semibold text-white/90",
													children: q.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: `text-[11px] ${MUTED} mt-0.5`,
													children: q.createdAt
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.12em] uppercase rounded border font-medium ${q.status === "Answered" ? "border-[#14a76c]/35 text-[#14a76c]" : "border-[#d9534f]/35 text-[#d9534f]"}`,
													children: q.status === "Answered" ? T.investor.statusAnswered : T.investor.statusPending
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] text-white/75 mb-3",
												children: q.body
											}),
											q.reply && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded bg-white/[0.05] border border-white/[0.07] px-4 py-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: `${EYEBROW} mb-1`,
													children: [
														T.investor.adminReply,
														" · ",
														q.repliedAt
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[13px] text-white/80",
													children: q.reply
												})]
											})
										]
									}, q.id))
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-right",
				theme: "dark"
			})
		]
	});
}
function KpiCard({ label, value, sub, valueColor = "text-white" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} border ${BORDER} rounded-lg px-5 py-4`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `${EYEBROW} mb-3`,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `font-display text-[26px] font-semibold tracking-tight mb-1 ${valueColor}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-[11px] ${MUTED}`,
				children: sub
			})
		]
	});
}
function NewInquiryForm({ T, onSubmit }) {
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	function handle(e) {
		e.preventDefault();
		if (!title.trim() || !body.trim()) return;
		onSubmit(title.trim(), body.trim());
		setTitle("");
		setBody("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} border ${BORDER} rounded-lg p-5`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[14px] font-semibold text-white/90 mb-4",
			children: T.newInquiry
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handle,
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-[10px] tracking-[0.2em] uppercase font-medium text-white/50",
						children: T.inquiryTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "t",
						value: title,
						onChange: (e) => setTitle(e.target.value),
						className: "bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-9"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-[10px] tracking-[0.2em] uppercase font-medium text-white/50",
						children: T.inquiryMessage
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "b",
						rows: 4,
						value: body,
						onChange: (e) => setBody(e.target.value),
						className: "bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 resize-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), T.send]
				})
			]
		})]
	});
}
//#endregion
export { InvestorDashboard as component };
