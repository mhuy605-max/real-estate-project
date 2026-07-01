import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Navigate, g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { H as DollarSign, L as FileText, X as CircleCheck, a as TriangleAlert, b as MessageSquare, j as House, o as TrendingUp, p as Send, u as Sparkles, w as LogOut } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal } from "./store-Ckbp1fQa.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { n as WithLogo, r as pt, t as PortalLangSwitcher } from "./portalTranslations-BjcHVlWO.mjs";
import { _ as WP_EYEBROW, a as PortalDarkTextarea, c as PortalKpiCard, d as PortalStatusBadge, f as VipBadge, g as WP_CARD, h as WP_BORDER, i as PortalDarkInput, l as PortalReplyBlock, m as WP_BG, n as PortalActionButton, p as WP_ACCENT, r as PortalCard, s as PortalEmptyState, u as PortalSectionHeader, v as WP_MUTED } from "./PortalShell-CcSCQcBf.mjs";
import { c as ResponsiveContainer, i as XAxis, l as Tooltip, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.investor-BrjG8v9Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
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
	const gain = investor.currentValue - investor.purchasePrice;
	function handleLogout() {
		logout();
		navigate({
			to: "/portal/login",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-h-screen ${WP_BG}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-white/[0.07]",
				style: {
					background: "rgba(8,8,8,0.90)",
					backdropFilter: "blur(12px)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[2px] w-full",
					style: { background: `linear-gradient(90deg, ${WP_ACCENT}, transparent 60%)` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8 h-[60px] flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
						variant: "dark",
						size: 26,
						animate: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalLangSwitcher, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/with-property",
								className: `hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium ${WP_MUTED} hover:text-white/80 border border-white/[0.08] rounded-lg hover:border-white/15 transition-all`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), T.nav.mainSite]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase font-medium text-[#d9534f]/75 hover:text-[#d9534f] border border-[#d9534f]/20 hover:border-[#d9534f]/40 rounded-lg hover:bg-[#d9534f]/[0.07] transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), T.nav.logout]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 py-8",
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
						transition: {
							duration: .4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `${WP_EYEBROW} text-[${WP_ACCENT}] mb-2`,
								style: { color: WP_ACCENT },
								children: greeting(lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] leading-tight",
									children: investor.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, { grade: investor.vipGrade })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[13px] ${WP_MUTED} mt-1`,
								children: investor.unit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-white/30 mt-0.5",
								children: [
									T.investor.lastLogin,
									":",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-white/45",
										children: investor.lastLogin
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
								label: T.investor.metrics.purchasePrice,
								value: fmtMoney(investor.purchasePrice),
								sub: "acquisition cost",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4 text-white/30" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
								label: T.investor.metrics.currentValue,
								value: fmtMoney(investor.currentValue),
								sub: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-[#14a76c]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }),
										gain >= 0 ? "+" : "",
										fmtMoney(Math.abs(gain)),
										" gain"
									]
								}),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-[#14a76c]" }),
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
								label: T.investor.metrics.roi,
								value: `${roi >= 0 ? "+" : ""}${roi.toFixed(1)}%`,
								sub: "total return",
								icon: roi >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#14a76c]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#d9534f]" }),
								valueColor: roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl border ${WP_CARD} ${investor.rentStatus === "Cleared" ? "border-[#14a76c]/20" : "border-[#d9534f]/25"} px-5 py-4`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `${WP_EYEBROW} mb-3`,
									children: T.investor.metrics.rentStatus
								}), investor.rentStatus === "Cleared" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#14a76c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
										tone: "green",
										children: T.investor.rentStatusCleared
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] ${WP_MUTED}`,
									children: "no action required"
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#d9534f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
										tone: "red",
										children: T.investor.rentStatusPending
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] ${WP_MUTED}`,
									children: "contact management"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "asset",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
								className: "bg-[#111111] border border-white/[0.07] h-10 p-1 rounded-xl mb-6 gap-0.5",
								children: [
									[
										"asset",
										T.investor.tabs.asset,
										FileText
									],
									[
										"reports",
										T.investor.tabs.reports,
										Sparkles
									],
									[
										"inquiries",
										T.investor.tabs.inquiries,
										MessageSquare
									]
								].map(([val, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: val,
									className: "flex items-center gap-1.5 text-[12px] font-medium data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/45 hover:text-white/70 px-4 rounded-lg transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), label]
								}, val))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "asset",
								className: "space-y-4 mt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative overflow-hidden rounded-xl border border-[#14a76c]/20 ${WP_CARD} p-4 flex gap-3`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 opacity-[0.04]",
												style: { background: "radial-gradient(ellipse 80% 100% at 0% 50%, #14a76c, transparent)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#14a76c] shrink-0 mt-0.5 relative" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[13px] text-white/90 leading-relaxed",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-semibold text-white",
															children: [T.investor.aiInsight, ":"]
														}),
														" ",
														T.investor.aiInsightBody
													]
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSectionHeader, {
										title: T.investor.chartTitle,
										sub: "monthly rental income"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-64 mt-2",
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
														stroke: "rgba(255,255,255,0.05)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "month",
														tick: {
															fontSize: 11,
															fill: "rgba(255,255,255,0.35)"
														},
														axisLine: false,
														tickLine: false
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														tick: {
															fontSize: 11,
															fill: "rgba(255,255,255,0.35)"
														},
														axisLine: false,
														tickLine: false,
														tickFormatter: (v) => `$${v.toLocaleString()}`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
														contentStyle: {
															background: "#1a1a1a",
															border: "1px solid rgba(255,255,255,0.08)",
															borderRadius: 10,
															fontSize: 12,
															color: "rgba(255,255,255,0.85)",
															boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
														},
														cursor: { fill: "rgba(255,255,255,0.025)" },
														formatter: (v) => [`$${v.toLocaleString()}`, "Income"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "income",
														fill: "#14a76c",
														radius: [
															5,
															5,
															0,
															0
														]
													})
												]
											})
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-3",
										children: [
											["Unit", investor.unit],
											["Nationality", investor.nationality],
											["VIP Tier", investor.vipGrade]
										].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `rounded-xl border ${WP_BORDER} ${WP_CARD} px-4 py-3`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `${WP_EYEBROW} mb-1.5`,
												children: k
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-semibold text-white/85",
												children: v
											})]
										}, k))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "reports",
								className: "space-y-3 mt-0",
								children: investor.reports.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalEmptyState, {
									message: T.investor.noReports,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-white/30" })
								}) : investor.reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#14a76c]/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-[#14a76c]" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] font-semibold text-white/92 leading-snug",
											children: r.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[11px] ${WP_MUTED} tabular-nums shrink-0`,
										children: r.timestamp
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-white/68 leading-relaxed pl-[2.625rem]",
									children: r.content
								})] }, r.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "inquiries",
								className: "space-y-5 mt-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewInquiryForm, {
									T: T.investor,
									onSubmit: (title, body) => submitInquiry(investor.uid, title, body)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalEmptyState, {
										message: T.investor.noInquiries,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-white/30" })
									}) : inquiries.slice().reverse().map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-start justify-between gap-3 mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-white/92 leading-snug",
												children: q.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `text-[11px] ${WP_MUTED} mt-0.5`,
												children: q.createdAt
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
												tone: q.status === "Answered" ? "green" : "red",
												children: q.status === "Answered" ? T.investor.statusAnswered : T.investor.statusPending
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-white/72 leading-relaxed mb-3",
											children: q.body
										}),
										q.reply && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalReplyBlock, {
											eyebrowLabel: T.investor.adminReply,
											timestamp: q.repliedAt,
											body: q.reply
										})
									] }, q.id))
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSectionHeader, {
		title: T.newInquiry,
		sub: "We'll respond within 1–2 business days"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handle,
		className: "mt-4 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
				id: "inquiry-title",
				label: T.inquiryTitle,
				value: title,
				onChange: setTitle,
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkTextarea, {
				id: "inquiry-body",
				label: T.inquiryMessage,
				value: body,
				onChange: setBody,
				rows: 4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalActionButton, {
				type: "submit",
				variant: "primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), T.send]
			})
		]
	})] });
}
//#endregion
export { InvestorDashboard as component };
