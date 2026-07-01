import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Navigate, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as Mail, J as ClipboardList, at as Building2, i as Users, n as X, o as TrendingUp, p as Send, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal, r as getInvestors } from "./store-Ckbp1fQa.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { r as pt } from "./portalTranslations-BjcHVlWO.mjs";
import { _ as WP_EYEBROW, c as PortalKpiCard, d as PortalStatusBadge, f as VipBadge, g as WP_CARD, i as PortalDarkInput, l as PortalReplyBlock, n as PortalActionButton, o as PortalDashboardLayout, r as PortalCard, s as PortalEmptyState, t as LeadStatusBadge, v as WP_MUTED } from "./PortalShell-CcSCQcBf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.staff-DIz8p6jL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DarkSelect({ value, onValueChange, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: "bg-[#1e1e1e] border-white/[0.1] text-white/90 h-9 text-[13px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
			className: "bg-[#1a1a1a] border-white/[0.1]",
			children
		})]
	});
}
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
	const activeInvestors = getInvestors(state.users).filter((i) => !i.disabled).length;
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
			icon: TrendingUp
		}
	];
	const dateLabel = (/* @__PURE__ */ new Date()).toLocaleDateString(lang === "vi" ? "vi-VN" : lang === "ko" ? "ko-KR" : lang === "zh" ? "zh-CN" : "en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	const pageHeader = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `${WP_EYEBROW} text-[#d4af37] mb-1`,
				children: "Staff Portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-[22px] font-semibold text-white tracking-[-0.02em] leading-tight",
				children: [
					T.admin.welcome,
					", ",
					staff?.name
				]
			}),
			staff?.department && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `text-[12px] text-white/50 mt-0.5`,
				children: [staff.department, " Department"]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-[11px] ${WP_MUTED} tabular-nums`,
			children: dateLabel
		})]
	});
	function renderTab() {
		switch (activeTab) {
			case "inquiries": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffInquiriesTab, { T });
			case "leads": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffLeadsTab, { T });
			case "assets": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffAssetsTab, { T });
			default: return null;
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalDashboardLayout, {
		activeTab,
		onSelect: setActiveTab,
		navItems,
		mainSiteLabel: T.nav.mainSite,
		logoutLabel: T.nav.logout,
		onLogout: handleLogout,
		header: pageHeader,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3 mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: "Open Inquiries",
					value: String(pendingInquiries),
					sub: "awaiting reply",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[#14a76c]" }),
					accent: pendingInquiries > 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: "New Leads",
					value: String(newLeads),
					sub: "need follow-up",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4 text-[#14a76c]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: "Active Investors",
					value: String(activeInvestors),
					sub: "managed accounts",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-[#14a76c]" })
				})
			]
		}), renderTab()]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		richColors: true,
		position: "top-right",
		theme: "dark"
	})] });
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
	if (enriched.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalEmptyState, {
		message: ti.noInquiries,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-white/30" })
	});
	const pending = enriched.filter((q) => q.status === "Pending");
	const answered = enriched.filter((q) => q.status === "Answered");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [pending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 text-[#d9534f]/70`,
					children: "Pending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-4 w-4 items-center justify-center rounded-full bg-[#d9534f]/15 text-[9px] font-bold text-[#d9534f]",
					children: pending.length
				})]
			}), pending.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryCard, {
				q,
				drafts,
				setDrafts,
				replyInquiry,
				T
			}, q.id))]
		}), answered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 text-[#14a76c]/70`,
					children: "Answered"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-4 w-4 items-center justify-center rounded-full bg-[#14a76c]/15 text-[9px] font-bold text-[#14a76c]",
					children: answered.length
				})]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3 mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[14px] font-semibold text-white/92 leading-snug",
				children: q.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `text-[11px] ${WP_MUTED} mt-0.5`,
				children: [
					q.investorName,
					" · ",
					q.createdAt
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
				tone: q.status === "Answered" ? "green" : "red",
				children: q.status === "Answered" ? ti.statusAnswered : ti.statusPending
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-white/75 leading-relaxed mb-3",
			children: q.body
		}),
		q.reply ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalReplyBlock, {
			eyebrowLabel: q.repliedBy ? `Reply by ${q.repliedBy}` : T.investor.adminReply,
			timestamp: q.repliedAt,
			body: q.reply
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 border-t border-white/[0.06] pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 2,
				placeholder: ti.replyPlaceholder,
				value: drafts[q.id] ?? "",
				onChange: (e) => setDrafts({
					...drafts,
					[q.id]: e.target.value
				}),
				className: "w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/85 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalActionButton, {
				variant: "primary",
				size: "sm",
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
	] });
}
function StaffLeadsTab({ T }) {
	const { state, updateLeadStatus } = usePortal();
	const tl = T.admin.leads;
	const [selected, setSelected] = (0, import_react.useState)(null);
	if (state.leads.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalEmptyState, { message: tl.noLeads });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalCard, {
			noPad: true,
			className: "flex-1 min-w-0",
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
					className: `${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium`,
					children: col
				}, col))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: state.leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				onClick: () => setSelected(lead),
				className: `border-b border-white/[0.05] hover:bg-white/[0.03] cursor-pointer transition-colors ${selected?.id === lead.id ? "bg-white/[0.04]" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[13px] font-semibold text-white/90 py-3.5 px-4",
						children: lead.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/65 font-mono px-4",
						children: lead.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/55 px-4",
						children: lead.customerType
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[12px] text-white/45 px-4",
						children: lead.area ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-[11px] text-white/40 tabular-nums px-4",
						children: lead.submittedAt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadStatusBadge, { status: lead.status })
					})
				]
			}, lead.id)) })] })
		}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `w-80 shrink-0 rounded-xl border border-white/[0.08] bg-[#161616] p-5 space-y-4`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.2em] uppercase font-medium text-white/45",
						children: tl.detail.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelected(null),
						className: "text-white/30 hover:text-white/65 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[17px] font-semibold text-white/95 leading-tight",
					children: selected.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-white/45 font-mono mt-0.5",
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
							className: `text-[11px] text-white/50`,
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] text-white/80 font-medium text-right max-w-[55%]",
							children: v
						})]
					}, k))
				}),
				selected.priorities && selected.priorities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 mb-2`,
					children: tl.detail.priorities
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: selected.priorities.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2 py-0.5 text-[10px] rounded-full bg-white/[0.06] text-white/60 border border-white/[0.08]",
						children: p
					}, p))
				})] }),
				selected.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 mb-1.5`,
					children: tl.detail.notes
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-white/65 leading-relaxed",
					children: selected.notes
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-white/[0.07] pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 mb-2`,
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
		className: `text-sm ${WP_MUTED}`,
		children: ta.noInvestors
	});
	const pr = ta.profileRows;
	const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
	const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";
	const roi = (investor.currentValue - investor.purchasePrice) / investor.purchasePrice * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: `block ${WP_EYEBROW} mb-1.5`,
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${WP_EYEBROW} mb-4`,
						children: ta.profileTitle
					}),
					[
						[pr.name, investor.name],
						[pr.uid, investor.uid],
						[pr.unit, investor.unit],
						[pr.nationality, investor.nationality],
						[pr.inquiries, String(inquiryCount)]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[12px] ${WP_MUTED}`,
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px] text-white/85 font-medium",
							children: v
						})]
					}, k)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2.5 border-b border-white/[0.05]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[12px] ${WP_MUTED}`,
							children: pr.vipGrade
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, { grade: investor.vipGrade })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[12px] ${WP_MUTED}`,
							children: "ROI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `text-[13px] font-semibold tabular-nums ${roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}`,
							children: [
								roi >= 0 ? "+" : "",
								roi.toFixed(1),
								"%"
							]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative overflow-hidden rounded-xl border ${WP_CARD} p-5 ${risk === "stable" ? "border-[#14a76c]/25" : "border-[#d9534f]/25"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-[0.05]",
						style: { background: risk === "stable" ? "radial-gradient(ellipse 80% 60% at 0% 0%, #14a76c, transparent)" : "radial-gradient(ellipse 80% 60% at 0% 0%, #d9534f, transparent)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: `h-3.5 w-3.5 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: WP_EYEBROW,
									children: ta.riskTitle
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[24px] font-display font-semibold mb-2 ${risk === "stable" ? "text-[#14a76c]" : "text-[#d9534f]"}`,
								children: risk === "stable" ? ta.riskStable : ta.riskHigh
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[12px] ${WP_MUTED}`,
								children: ta.riskDesc
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${WP_EYEBROW} mb-4`,
					children: ta.updateTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `block ${WP_EYEBROW} mb-1.5`,
						children: ta.currentValue
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: currentValue,
							onChange: (e) => setCurrentValue(Number(e.target.value)),
							className: "flex-1 h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/90 outline-none transition focus:border-[#14a76c]/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: aiEstimate,
							className: "flex items-center gap-1.5 px-3 h-9 text-[11px] border border-white/[0.1] rounded-lg text-white/55 hover:text-white/85 hover:border-white/20 transition-colors whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#14a76c]" }), ta.aiEstimate]
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `block ${WP_EYEBROW} mb-1.5`,
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
					className: "border-t border-white/[0.07] mt-5 pt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: WP_EYEBROW,
							children: ta.reportSection
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
							id: "report-title",
							label: ta.reportTitle,
							value: reportTitle,
							onChange: setReportTitle,
							placeholder: ta.reportTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: `block ${WP_EYEBROW} mb-1.5`,
							children: ta.reportContent
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							placeholder: ta.reportContent,
							value: reportBody,
							onChange: (e) => setReportBody(e.target.value),
							className: "w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalActionButton, {
						onClick: save,
						variant: "primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-3.5 w-3.5" }), ta.saveBtn]
					})
				})
			] })
		]
	});
}
//#endregion
export { StaffDashboard as component };
