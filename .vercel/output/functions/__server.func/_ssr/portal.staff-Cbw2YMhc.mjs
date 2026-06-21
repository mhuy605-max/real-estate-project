import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { _ as Navigate, g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as House, U as ClipboardList, a as TrendingUp, b as LogOut, f as Send, l as Sparkles, n as X, v as Menu, y as Mail } from "../_libs/lucide-react.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal, r as getInvestors } from "./store-Ckbp1fQa.mjs";
import { t as Input } from "./input-BIucxNrH.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-goaRKM8_.mjs";
import { a as TableBody, c as TableHeader, i as Table, l as TableRow, n as SheetContent, o as TableCell, r as SheetTrigger, s as TableHead, t as Sheet } from "./table-frr6ta51.mjs";
import { a as VipBadge, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./VipBadge-C2gNbV75.mjs";
import { t as Textarea } from "./textarea-DkoOhk_z.mjs";
import { n as WithLogo, r as pt, t as PortalLangSwitcher } from "./portalTranslations-D9VevV8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.staff-Cbw2YMhc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BG = "bg-[#0a0a0a]";
var SURFACE = "bg-[#141414]";
var CARD = "bg-[#1a1a1a]";
var BORDER = "border-white/[0.08]";
var EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/50";
var MUTED = "text-white/55";
function StaffDashboard() {
	const { state, logout } = usePortal();
	const { lang } = useLang();
	const T = pt(lang);
	const navigate = useNavigate();
	const user = state.session;
	const staff = user?.role === "staff" ? user : null;
	const [activeTab, setActiveTab] = (0, import_react.useState)("inquiries");
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/login",
		replace: true
	});
	if (user.role !== "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: user.role === "admin" ? "/portal/admin" : "/portal/investor",
		replace: true
	});
	const pendingInquiries = state.inquiries.filter((q) => q.status === "Pending").length;
	const newLeads = state.leads.filter((l) => l.status === "New").length;
	function handleLogout() {
		logout();
		navigate({
			to: "/portal/login",
			replace: true
		});
	}
	const navItems = [
		{
			id: "inquiries",
			label: T.admin.sidebar.inquiries,
			icon: Mail,
			badge: pendingInquiries
		},
		{
			id: "leads",
			label: T.admin.leads.title,
			icon: ClipboardList,
			badge: newLeads
		},
		{
			id: "assets",
			label: "Update Assets",
			icon: TrendingUp,
			badge: 0
		}
	];
	const sidebar = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex h-full flex-col ${BG}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-6 border-b border-white/[0.07]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
					variant: "dark",
					size: 26,
					animate: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-4 border-b border-white/[0.07]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${EYEBROW} mb-1`,
						children: "Staff Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold text-white",
						children: staff?.name
					}),
					staff?.department && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex mt-1 px-2 py-0.5 text-[10px] tracking-wide rounded font-medium bg-[#d4af37]/12 text-[#d4af37]",
						children: staff.department
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 px-3 py-4 space-y-0.5",
				children: navItems.map((n) => {
					const Icon = n.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab(n.id),
						className: `flex w-full items-center gap-3 py-2.5 text-[13px] rounded-md transition-all ${activeTab === n.id ? "border-l-2 border-[#14a76c] bg-white/[0.06] text-white font-medium pl-[10px] pr-3" : "border-l-2 border-transparent text-white/55 hover:text-white/80 hover:bg-white/[0.04] px-3"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[15px] w-[15px] shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left",
								children: n.label
							}),
							n.badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#14a76c] text-[9px] font-bold text-white",
								children: n.badge
							})
						]
					}, n.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/[0.07] px-3 py-4 space-y-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalLangSwitcher, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/with-property",
						className: "flex w-full items-center gap-3 px-3 py-2.5 text-[13px] rounded-md text-white/55 hover:text-white/80 hover:bg-white/[0.04] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-[15px] w-[15px] shrink-0" }), T.nav.mainSite]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						className: "flex w-full items-center gap-3 px-3 py-2.5 text-[13px] rounded-md text-[#d9534f]/80 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.08] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-[15px] w-[15px] shrink-0" }), T.nav.logout]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex min-h-screen ${BG}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: `hidden w-60 shrink-0 border-r ${BORDER} lg:block`,
				children: sidebar
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center justify-between border-b ${BORDER} ${SURFACE} px-4 py-3 lg:hidden`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
						variant: "dark",
						size: 24
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 text-white/60 hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						side: "left",
						className: `w-60 p-0 border-r ${BORDER} ${BG}`,
						children: sidebar
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 py-8 sm:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-3 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `${EYEBROW} text-[#d4af37] mb-1`,
									children: "Staff Portal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-[22px] font-semibold text-white tracking-[-0.01em]",
									children: [
										T.admin.welcome,
										", ",
										staff?.name
									]
								}),
								staff?.department && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `text-[12px] ${MUTED} mt-0.5`,
									children: [staff.department, " Department"]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-xs ${MUTED} tabular-nums`,
								children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border ${BORDER} rounded-lg px-5 py-4`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: EYEBROW,
												children: "Open Inquiries"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[#14a76c]" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-[26px] font-semibold text-white",
											children: pendingInquiries
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-[11px] ${MUTED}`,
											children: "awaiting reply"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border ${BORDER} rounded-lg px-5 py-4`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: EYEBROW,
												children: "New Leads"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4 text-[#14a76c]" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-[26px] font-semibold text-white",
											children: newLeads
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-[11px] ${MUTED}`,
											children: "need follow-up"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} border ${BORDER} rounded-lg px-5 py-4`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: EYEBROW,
												children: "Investors"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-[#14a76c]" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-[26px] font-semibold text-white",
											children: getInvestors(state.users).filter((i) => !i.disabled).length
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-[11px] ${MUTED}`,
											children: "active accounts"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							value: activeTab,
							onValueChange: setActiveTab,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
									className: `${SURFACE} border ${BORDER} mb-6 h-9 p-0.5 lg:hidden`,
									children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: n.id,
										className: "text-[11px] data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white text-white/50 px-3",
										children: n.label
									}, n.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "inquiries",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffInquiriesTab, { T })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "leads",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffLeadsTab, { T })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "assets",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffAssetsTab, { T })
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-right",
				theme: "dark"
			})
		]
	});
}
function DarkField({ label, value, onChange, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: `block ${EYEBROW} mb-1.5`,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		type,
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: "bg-[#222] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-9"
	})] });
}
function DarkSelect({ value, onValueChange, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: "bg-[#222] border-white/12 text-white/90 h-9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
			className: "bg-[#1e1e1e] border-white/12",
			children
		})]
	});
}
function StatusPill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex px-2 py-0.5 text-[10px] tracking-wide rounded font-medium ${{
			New: "bg-[#14a76c]/12 text-[#14a76c]",
			Contacted: "bg-[#d4af37]/12 text-[#d4af37]",
			Closed: "bg-white/8 text-white/40"
		}[status]}`,
		children: status
	});
}
function StaffInquiriesTab({ T }) {
	const { state, replyInquiry } = usePortal();
	const ti = T.admin.inquiries;
	const [drafts, setDrafts] = (0, import_react.useState)({});
	const enriched = state.inquiries.map((q) => {
		const investor = state.users.find((u) => u.uid === q.investorId);
		return {
			...q,
			investorName: investor?.name ?? q.investorId
		};
	});
	if (enriched.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${CARD} border ${BORDER} border-dashed rounded-lg p-12 text-center`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-sm ${MUTED}`,
			children: ti.noInquiries
		})
	});
	const pending = enriched.filter((q) => q.status === "Pending");
	const answered = enriched.filter((q) => q.status === "Answered");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [pending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `${EYEBROW} text-[#d9534f]/70`,
				children: ["Pending · ", pending.length]
			}), pending.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryCard, {
				q,
				drafts,
				setDrafts,
				replyInquiry,
				T
			}, q.id))]
		}), answered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `${EYEBROW} text-[#14a76c]/70`,
				children: ["Answered · ", answered.length]
			}), answered.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryCard, {
				q,
				drafts,
				setDrafts,
				replyInquiry,
				T
			}, q.id))]
		})]
	});
}
function InquiryCard({ q, drafts, setDrafts, replyInquiry, T }) {
	const ti = T.admin.inquiries;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} border ${BORDER} rounded-lg p-5`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] font-semibold text-white/92",
					children: q.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `text-[11px] ${MUTED} mt-0.5`,
					children: [
						q.investorName,
						" · ",
						q.createdAt
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `inline-flex items-center px-2.5 py-0.5 text-[10px] tracking-[0.12em] uppercase rounded border font-medium ${q.status === "Answered" ? "border-[#14a76c]/35 text-[#14a76c]" : "border-[#d9534f]/35 text-[#d9534f]"}`,
					children: q.status === "Answered" ? ti.statusAnswered : ti.statusPending
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] text-white/80 mb-3",
				children: q.body
			}),
			q.reply ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded bg-white/[0.05] border border-white/[0.07] px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `${EYEBROW} mb-1`,
					children: [
						"Reply ",
						q.repliedBy ? `by ${q.repliedBy}` : "",
						" · ",
						q.repliedAt
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-white/80",
					children: q.reply
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					placeholder: ti.replyPlaceholder,
					value: drafts[q.id] ?? "",
					onChange: (e) => setDrafts({
						...drafts,
						[q.id]: e.target.value
					}),
					className: "bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 resize-none text-[13px] focus:ring-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors",
					onClick: () => {
						const text = (drafts[q.id] ?? "").trim();
						if (!text) return;
						replyInquiry(q.id, text);
						setDrafts({
							...drafts,
							[q.id]: ""
						});
						toast.success(T.admin.system.replySuccess);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3 w-3" }), ti.sendReply]
				})]
			})
		]
	});
}
function StaffLeadsTab({ T }) {
	const { state, updateLeadStatus } = usePortal();
	const tl = T.admin.leads;
	const [selected, setSelected] = (0, import_react.useState)(null);
	if (state.leads.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${CARD} border ${BORDER} border-dashed rounded-lg p-12 text-center`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-sm ${MUTED}`,
			children: tl.noLeads
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex-1 min-w-0 ${CARD} border ${BORDER} rounded-lg overflow-hidden`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-b border-white/[0.07] hover:bg-transparent",
				children: [
					tl.cols.name,
					tl.cols.phone,
					tl.cols.type,
					tl.cols.area,
					tl.cols.submittedAt,
					tl.cols.status
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: `${EYEBROW} py-3 bg-[#111]`,
					children: col
				}, col))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: state.leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				onClick: () => setSelected(lead),
				className: `border-b border-white/[0.05] hover:bg-white/[0.025] cursor-pointer transition-colors ${selected?.id === lead.id ? "bg-white/[0.04]" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[13px] font-medium text-white/90 py-3",
						children: lead.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/70 font-mono",
						children: lead.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/65",
						children: lead.customerType
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/55",
						children: lead.area ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[11px] text-white/45 tabular-nums",
						children: lead.submittedAt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: lead.status }) })
				]
			}, lead.id)) })] })
		}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `w-80 shrink-0 ${CARD} border ${BORDER} rounded-lg p-5 space-y-4`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: EYEBROW,
						children: tl.detail.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelected(null),
						className: "text-white/30 hover:text-white/60 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[17px] font-semibold text-white/95",
					children: selected.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-white/55 font-mono mt-0.5",
					children: selected.phone
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-0",
					children: [
						[tl.cols.type, selected.customerType],
						[tl.cols.area, selected.area],
						[tl.detail.budget, selected.budget],
						[tl.detail.propertyType, selected.propertyType],
						[tl.detail.size, selected.size],
						[tl.detail.moveIn, selected.moveIn]
					].filter(([, v]) => v).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between py-2 border-b border-white/[0.05] last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[11px] ${MUTED}`,
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] text-white/80 font-medium text-right max-w-[55%]",
							children: v
						})]
					}, k))
				}),
				selected.priorities && selected.priorities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${EYEBROW} mb-2`,
					children: tl.detail.priorities
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: selected.priorities.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2 py-0.5 text-[10px] rounded bg-white/[0.06] text-white/65 border border-white/[0.08]",
						children: p
					}, p))
				})] }),
				selected.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${EYEBROW} mb-1.5`,
					children: tl.detail.notes
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-white/70 leading-relaxed",
					children: selected.notes
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-white/[0.07] pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${EYEBROW} mb-2`,
						children: tl.detail.updateStatus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DarkSelect, {
						value: selected.status,
						onValueChange: (v) => {
							const s = v;
							updateLeadStatus(selected.id, s);
							setSelected({
								...selected,
								status: s
							});
							toast.success(tl.statusUpdated);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "New",
								className: "text-white/85 focus:bg-white/10 focus:text-white",
								children: tl.newLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Contacted",
								className: "text-white/85 focus:bg-white/10 focus:text-white",
								children: tl.contactedLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Closed",
								className: "text-white/85 focus:bg-white/10 focus:text-white",
								children: tl.closedLabel
							})
						]
					})]
				})
			]
		})]
	});
}
function StaffAssetsTab({ T }) {
	const { state, updateInvestor } = usePortal();
	const ta = T.admin.actions;
	const investors = (0, import_react.useMemo)(() => getInvestors(state.users).filter((i) => !i.disabled), [state.users]);
	const [selectedId, setSelectedId] = (0, import_react.useState)(investors[0]?.uid ?? "");
	const investor = investors.find((i) => i.uid === selectedId);
	const [currentValue, setCurrentValue] = (0, import_react.useState)(investor?.currentValue ?? 0);
	const [rentStatus, setRentStatus] = (0, import_react.useState)(investor?.rentStatus ?? "Cleared");
	const [reportTitle, setReportTitle] = (0, import_react.useState)("");
	const [reportBody, setReportBody] = (0, import_react.useState)("");
	function handleSelect(uid) {
		setSelectedId(uid);
		const next = investors.find((i) => i.uid === uid);
		if (next) {
			setCurrentValue(next.currentValue);
			setRentStatus(next.rentStatus);
			setReportTitle("");
			setReportBody("");
		}
	}
	function aiEstimate() {
		if (!investor) return;
		const factor = 1.1 + Math.random() * .15;
		setCurrentValue(Math.round(investor.currentValue * factor));
		toast.success(T.admin.system.aiEstimateSuccess);
	}
	function save() {
		if (!investor) return;
		updateInvestor(investor.uid, {
			currentValue: Number(currentValue),
			rentStatus
		}, reportTitle && reportBody ? {
			title: reportTitle,
			content: reportBody
		} : void 0);
		toast.success(T.admin.system.saveSuccess);
		setReportTitle("");
		setReportBody("");
	}
	if (!investor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `text-sm ${MUTED}`,
		children: ta.noInvestors
	});
	const pr = ta.profileRows;
	const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
	const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: `block ${EYEBROW} mb-1.5`,
					children: ta.selectInvestor
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarkSelect, {
					value: selectedId,
					onValueChange: handleSelect,
					children: investors.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: i.uid,
						className: "text-white/85 focus:bg-white/10 focus:text-white",
						children: i.name
					}, i.uid))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${CARD} border ${BORDER} rounded-lg p-5`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `${EYEBROW} mb-4`,
							children: ta.profileTitle
						}),
						[
							[pr.name, investor.name],
							[pr.uid, investor.uid],
							[pr.unit, investor.unit],
							[pr.nationality, investor.nationality],
							[pr.inquiries, String(inquiryCount)]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[12px] ${MUTED}`,
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] text-white/85 font-medium",
								children: v
							})]
						}, k)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[12px] ${MUTED}`,
								children: pr.vipGrade
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, { grade: investor.vipGrade })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${CARD} border rounded-lg p-5 ${risk === "stable" ? "border-[#14a76c]/25" : "border-[#d9534f]/25"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: `h-3.5 w-3.5 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: EYEBROW,
								children: ta.riskTitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-[22px] font-display font-semibold mb-2 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`,
							children: risk === "stable" ? ta.riskStable : ta.riskHigh
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-[12px] ${MUTED}`,
							children: ta.riskDesc
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${CARD} border ${BORDER} rounded-lg p-5 space-y-4`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: EYEBROW,
						children: ta.updateTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: `block ${EYEBROW} mb-1.5`,
							children: ta.currentValue
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: currentValue,
								onChange: (e) => setCurrentValue(Number(e.target.value)),
								className: "bg-[#222] border-white/12 text-white/90 focus:border-[#14a76c]/60 focus:ring-0 h-9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: aiEstimate,
								className: "flex items-center gap-1.5 px-3 py-2 text-[11px] border border-white/12 rounded text-white/65 hover:text-white/90 hover:border-white/20 transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#14a76c]" }), ta.aiEstimate]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: `block ${EYEBROW} mb-1.5`,
							children: ta.rentStatus
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DarkSelect, {
							value: rentStatus,
							onValueChange: (v) => setRentStatus(v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Cleared",
								className: "text-white/85 focus:bg-white/10 focus:text-white",
								children: ta.cleared
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Pending",
								className: "text-white/85 focus:bg-white/10 focus:text-white",
								children: ta.pending
							})]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-white/[0.07] pt-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: EYEBROW,
								children: ta.reportSection
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarkField, {
								label: ta.reportTitle,
								value: reportTitle,
								onChange: setReportTitle,
								placeholder: ta.reportTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block ${EYEBROW} mb-1.5`,
								children: ta.reportContent
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								placeholder: ta.reportContent,
								value: reportBody,
								onChange: (e) => setReportBody(e.target.value),
								className: "bg-[#222] border-white/12 text-white/90 placeholder:text-white/30 focus:border-[#14a76c]/60 focus:ring-0 resize-none"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] transition-colors",
						children: ta.saveBtn
					})
				]
			})
		]
	});
}
//#endregion
export { StaffDashboard as component };
