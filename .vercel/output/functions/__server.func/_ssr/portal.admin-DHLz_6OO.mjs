import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Navigate, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as Mail, H as DollarSign, J as ClipboardList, U as Database, W as Crown, a as TriangleAlert, d as Shield, f as Settings, i as Users, n as X, o as TrendingUp, p as Send, s as Trash2, u as Sparkles, v as Pencil } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal, i as getStaff, n as getAdmins, r as getInvestors } from "./store-Ckbp1fQa.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { r as pt } from "./portalTranslations-DxfJmiea.mjs";
import { _ as WP_EYEBROW, c as PortalKpiCard, d as PortalStatusBadge, f as VipBadge, g as WP_CARD, i as PortalDarkInput, l as PortalReplyBlock, n as PortalActionButton, o as PortalDashboardLayout, r as PortalCard, s as PortalEmptyState, t as LeadStatusBadge, u as PortalSectionHeader, v as WP_MUTED } from "./PortalShell-BLsnUbKi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.admin-DHLz_6OO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var fmt = (n) => `$${n.toLocaleString()}`;
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
function AdminDashboard() {
	const { state, logout, backupNow } = usePortal();
	const { lang } = useLang();
	const T = pt(lang);
	const navigate = useNavigate();
	const user = state.session;
	const investors = (0, import_react.useMemo)(() => getInvestors(state.users), [state.users]);
	const [activeTab, setActiveTab] = (0, import_react.useState)("crm");
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/login",
		replace: true
	});
	if (user.role === "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/staff",
		replace: true
	});
	if (user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/portal/investor",
		replace: true
	});
	const totalAUM = investors.reduce((s, i) => s + i.currentValue, 0);
	const avgROI = investors.length === 0 ? 0 : investors.reduce((s, i) => s + (i.currentValue - i.purchasePrice) / i.purchasePrice * 100, 0) / investors.length;
	const vipCount = investors.filter((i) => i.vipGrade === "Platinum" || i.vipGrade === "Diamond").length;
	const pendingCount = investors.filter((i) => i.rentStatus === "Pending").length;
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
			id: "crm",
			label: T.admin.sidebar.crm,
			icon: Users
		},
		{
			id: "profile",
			label: T.admin.sidebar.actions,
			icon: Sparkles
		},
		{
			id: "inquiries",
			label: T.admin.sidebar.inquiries,
			icon: Mail
		},
		{
			id: "leads",
			label: T.admin.leads.title,
			icon: ClipboardList,
			badge: newLeads
		},
		{
			id: "team",
			label: T.admin.team.title,
			icon: Shield
		},
		{
			id: "system",
			label: T.admin.sidebar.system,
			icon: Settings
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `${WP_EYEBROW} text-[#14a76c] mb-1`,
			children: T.admin.eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "font-display text-[22px] font-semibold text-white tracking-[-0.02em] leading-tight",
			children: [
				T.admin.welcome,
				", ",
				user.name
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-[11px] ${WP_MUTED} tabular-nums`,
			children: dateLabel
		})]
	});
	function renderTab() {
		switch (activeTab) {
			case "crm": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrmTab, {
				investors,
				T
			});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileActionsTab, {
				investors,
				T
			});
			case "inquiries": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalInquiriesTab, { T });
			case "leads": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadsTab, { T });
			case "team": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamTab, { T });
			case "system": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemTab, {
				T,
				onBackup: () => {
					backupNow();
					toast.success(T.admin.system.backupSuccess);
				}
			});
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
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: T.admin.kpi.totalAum,
					value: fmt(totalAUM),
					sub: `${investors.length} active positions`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4 text-[#14a76c]" }),
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: T.admin.kpi.totalInvestors,
					value: String(investors.length),
					sub: `${vipCount} VIP tier`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-[#14a76c]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: T.admin.kpi.avgRoi,
					value: `${avgROI.toFixed(1)}%`,
					sub: "portfolio average",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-[#14a76c]" }),
					valueColor: avgROI >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalKpiCard, {
					label: T.admin.leads.title,
					value: String(state.leads.length),
					sub: newLeads > 0 ? `${newLeads} new this session` : "all reviewed",
					icon: pendingCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#d9534f]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4 text-[#d4af37]" })
				})
			]
		}), renderTab()]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		richColors: true,
		position: "top-right",
		theme: "dark"
	})] });
}
function CrmTab({ investors, T }) {
	const { createInvestor } = usePortal();
	const [open, setOpen] = (0, import_react.useState)(false);
	const tc = T.admin.crm;
	const tf = T.admin.actions.fields;
	const [form, setForm] = (0, import_react.useState)({
		uid: "",
		password: "",
		name: "",
		unit: "",
		nationality: "",
		purchasePrice: 0,
		currentValue: 0,
		vipGrade: "Standard",
		rentStatus: "Cleared"
	});
	function submit(e) {
		e.preventDefault();
		if (!form.uid || !form.password || !form.name) return;
		createInvestor({
			uid: form.uid,
			password: form.password,
			name: form.name.toUpperCase(),
			unit: form.unit,
			nationality: form.nationality,
			purchasePrice: Number(form.purchasePrice),
			currentValue: Number(form.currentValue) || Number(form.purchasePrice),
			vipGrade: form.vipGrade,
			rentStatus: form.rentStatus
		});
		toast.success(`${T.admin.system.createSuccess}: ${form.name}`);
		setOpen(false);
		setForm({
			uid: "",
			password: "",
			name: "",
			unit: "",
			nationality: "",
			purchasePrice: 0,
			currentValue: 0,
			vipGrade: "Standard",
			rentStatus: "Cleared"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSectionHeader, {
			title: tc.title,
			sub: `${investors.length} investor records`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
						variant: "primary",
						size: "sm",
						children: tc.newBtn
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: `max-w-lg ${WP_CARD} border border-white/[0.09] text-white`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-white",
						children: tc.dialogTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-white/45",
						children: tc.dialogDesc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "uid",
								label: tf.uid,
								value: form.uid,
								onChange: (v) => setForm({
									...form,
									uid: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "pw",
								label: tf.password,
								type: "password",
								value: form.password,
								onChange: (v) => setForm({
									...form,
									password: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "name",
								label: tf.name,
								value: form.name,
								onChange: (v) => setForm({
									...form,
									name: v
								}),
								span2: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "unit",
								label: tf.unit,
								value: form.unit,
								onChange: (v) => setForm({
									...form,
									unit: v
								}),
								span2: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "nat",
								label: tf.nationality,
								value: form.nationality,
								onChange: (v) => setForm({
									...form,
									nationality: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block ${WP_EYEBROW} mb-1.5`,
								children: tf.vipGrade
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarkSelect, {
								value: form.vipGrade,
								onValueChange: (v) => setForm({
									...form,
									vipGrade: v
								}),
								children: [
									"Standard",
									"Gold",
									"Platinum",
									"Diamond"
								].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: g,
									className: "text-white/85 focus:bg-white/10 focus:text-white",
									children: g
								}, g))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "pp",
								label: tf.purchasePrice,
								type: "number",
								value: String(form.purchasePrice),
								onChange: (v) => setForm({
									...form,
									purchasePrice: Number(v)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "cv",
								label: tf.currentValue,
								type: "number",
								value: String(form.currentValue),
								onChange: (v) => setForm({
									...form,
									currentValue: Number(v)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
									type: "submit",
									variant: "primary",
									children: tc.createBtn
								})
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalCard, {
			noPad: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-b border-white/[0.07] hover:bg-transparent",
				children: [
					tc.cols.uid,
					tc.cols.name,
					tc.cols.unit,
					tc.cols.vip,
					tc.cols.purchase,
					tc.cols.current,
					tc.cols.roi,
					tc.cols.status
				].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: `${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium ${i >= 4 && i <= 6 ? "text-right" : ""}`,
					children: col
				}, i))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: investors.map((inv) => {
				const roi = (inv.currentValue - inv.purchasePrice) / inv.purchasePrice * 100;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: `border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors ${inv.disabled ? "opacity-40" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-[11px] text-white/50 py-3.5 px-4",
							children: inv.uid
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-[13px] font-semibold text-white/90 px-4",
							children: inv.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-[12px] text-white/50 px-4",
							children: inv.unit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, {
								grade: inv.vipGrade,
								withIcon: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right text-[12px] tabular-nums text-white/55 px-4",
							children: fmt(inv.purchasePrice)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right text-[12px] tabular-nums text-white/85 font-medium px-4",
							children: fmt(inv.currentValue)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right tabular-nums px-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `text-[12px] font-semibold ${roi >= 0 ? "text-[#14a76c]" : "text-[#d9534f]"}`,
								children: [
									roi >= 0 ? "+" : "",
									roi.toFixed(1),
									"%"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-4",
							children: inv.disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
								tone: "red",
								children: tc.statusDisabled
							}) : inv.rentStatus === "Pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
								tone: "red",
								children: tc.statusPending
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
								tone: "green",
								children: tc.statusActive
							})
						})
					]
				}, inv.uid);
			}) })] })
		})]
	});
}
function ProfileActionsTab({ investors, T }) {
	const { state, updateInvestor, disableInvestor } = usePortal();
	const ta = T.admin.actions;
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
	if (!investor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `text-sm ${WP_MUTED}`,
		children: ta.noInvestors
	});
	const inquiryCount = state.inquiries.filter((q) => q.investorId === investor.uid).length;
	const risk = investor.rentStatus === "Pending" || inquiryCount > 3 ? "high" : "stable";
	function aiEstimate() {
		const factor = 1.1 + Math.random() * .15;
		setCurrentValue(Math.round(investor.currentValue * factor));
		toast.success(T.admin.system.aiEstimateSuccess);
	}
	function save() {
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
	const pr = ta.profileRows;
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
					children: investors.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: i.uid,
						className: "text-white/85 focus:bg-white/10 focus:text-white",
						children: [
							i.name,
							" ",
							i.disabled ? "(disabled)" : ""
						]
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
						className: "flex items-center justify-between py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[12px] ${WP_MUTED}`,
							children: pr.vipGrade
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VipBadge, { grade: investor.vipGrade })]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: ta.reportTitle,
							value: reportTitle,
							onChange: (e) => setReportTitle(e.target.value),
							className: "w-full h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							placeholder: ta.reportContent,
							value: reportBody,
							onChange: (e) => setReportBody(e.target.value),
							className: "w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#14a76c]/50 resize-none"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
						onClick: save,
						variant: "primary",
						children: ta.saveBtn
					})
				})
			] }),
			!investor.disabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-xl border border-[#d9534f]/20 bg-[#161616] p-5`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[10px] tracking-[0.2em] uppercase font-medium text-white/45 text-[#d9534f]/65 mb-3`,
					children: ta.dangerZone
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
						variant: "danger",
						children: ta.disableBtn
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: `bg-[#161616] border border-white/[0.09] text-white`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-white",
						children: ta.disableTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-white/45",
						children: ta.disableDesc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
						variant: "danger",
						onClick: () => {
							disableInvestor(investor.uid);
							toast.success(T.admin.system.disableSuccess);
						},
						children: ta.confirmDisable
					}) })]
				})] })]
			})
		]
	});
}
function LeadsTab({ T }) {
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
						type: "button",
						"aria-label": "Close detail panel",
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
function TeamTab({ T }) {
	const { state, createAdmin, updateAdmin, deleteAdmin, createStaff, updateStaff, deleteStaff } = usePortal();
	const tt = T.admin.team;
	const admins = (0, import_react.useMemo)(() => getAdmins(state.users), [state.users]);
	const staff = (0, import_react.useMemo)(() => getStaff(state.users), [state.users]);
	const [adminForm, setAdminForm] = (0, import_react.useState)({
		uid: "",
		name: "",
		password: ""
	});
	const [staffForm, setStaffForm] = (0, import_react.useState)({
		uid: "",
		name: "",
		password: "",
		department: ""
	});
	const [adminOpen, setAdminOpen] = (0, import_react.useState)(false);
	const [staffOpen, setStaffOpen] = (0, import_react.useState)(false);
	const [editTarget, setEditTarget] = (0, import_react.useState)(null);
	function submitAdmin(e) {
		e.preventDefault();
		if (!adminForm.uid || !adminForm.name || !adminForm.password) return;
		createAdmin({
			uid: adminForm.uid,
			name: adminForm.name.toUpperCase(),
			password: adminForm.password
		});
		toast.success(tt.created);
		setAdminForm({
			uid: "",
			name: "",
			password: ""
		});
		setAdminOpen(false);
	}
	function submitStaff(e) {
		e.preventDefault();
		if (!staffForm.uid || !staffForm.name || !staffForm.password) return;
		createStaff({
			uid: staffForm.uid,
			name: staffForm.name.toUpperCase(),
			password: staffForm.password,
			department: staffForm.department || void 0
		});
		toast.success(tt.created);
		setStaffForm({
			uid: "",
			name: "",
			password: "",
			department: ""
		});
		setStaffOpen(false);
	}
	function saveEdit(e) {
		e.preventDefault();
		if (!editTarget) return;
		if (editTarget.role === "admin") updateAdmin(editTarget.uid, {
			name: editTarget.name,
			password: editTarget.password
		});
		else updateStaff(editTarget.uid, {
			name: editTarget.name,
			password: editTarget.password,
			department: editTarget.department
		});
		toast.success(tt.updated);
		setEditTarget(null);
	}
	function handleDelete(uid, role) {
		if (!confirm(tt.deleteConfirm)) return;
		if (role === "admin") {
			if (admins.length <= 1) {
				toast.error(tt.lastAdminError);
				return;
			}
			deleteAdmin(uid);
		} else deleteStaff(uid);
		toast.success(tt.deleted);
	}
	const AccountTable = ({ rows, role }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalCard, {
		noPad: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
			className: "border-b border-white/[0.07] hover:bg-transparent",
			children: [
				tt.cols.uid,
				tt.cols.name,
				tt.cols.role,
				...role === "staff" ? [tt.cols.department] : [],
				tt.cols.actions
			].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: `${WP_EYEBROW} py-3.5 px-4 bg-[#0e0e0e] font-medium`,
				children: col
			}, col))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 5,
			className: `text-center py-8 text-[12px] ${WP_MUTED}`,
			children: "—"
		}) }) : rows.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "border-b border-white/[0.05] hover:bg-white/[0.025] transition-colors",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-mono text-[11px] text-white/50 py-3.5 px-4",
					children: u.uid
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-[13px] font-semibold text-white/90 px-4",
					children: u.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
						tone: role === "admin" ? "green" : "gold",
						children: role
					})
				}),
				role === "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-[12px] text-white/50 px-4",
					children: u.department ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Edit account",
							onClick: () => setEditTarget({
								uid: u.uid,
								role,
								name: u.name,
								password: u.password,
								department: u.department
							}),
							className: "p-1.5 text-white/30 hover:text-white/70 hover:bg-white/[0.06] rounded-lg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Delete account",
							onClick: () => handleDelete(u.uid, role),
							className: "p-1.5 text-[#d9534f]/35 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.08] rounded-lg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})]
					})
				})
			]
		}, u.uid)) })] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSectionHeader, {
					title: tt.admins,
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: adminOpen,
						onOpenChange: setAdminOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
								variant: "primary",
								size: "sm",
								children: tt.newAdmin
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: `max-w-md ${WP_CARD} border border-white/[0.09] text-white`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-white",
								children: tt.createAdminTitle
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submitAdmin,
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "a-uid",
										label: tt.fields.uid,
										value: adminForm.uid,
										onChange: (v) => setAdminForm({
											...adminForm,
											uid: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "a-name",
										label: tt.fields.name,
										value: adminForm.name,
										onChange: (v) => setAdminForm({
											...adminForm,
											name: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "a-pw",
										label: tt.fields.password,
										type: "password",
										value: adminForm.password,
										onChange: (v) => setAdminForm({
											...adminForm,
											password: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
										type: "submit",
										variant: "primary",
										children: tt.createBtn
									}) })
								]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountTable, {
					rows: admins,
					role: "admin"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSectionHeader, {
					title: tt.staff,
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: staffOpen,
						onOpenChange: setStaffOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
								variant: "secondary",
								size: "sm",
								children: tt.newStaff
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: `max-w-md ${WP_CARD} border border-white/[0.09] text-white`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-white",
								children: tt.createStaffTitle
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submitStaff,
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "s-uid",
										label: tt.fields.uid,
										value: staffForm.uid,
										onChange: (v) => setStaffForm({
											...staffForm,
											uid: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "s-name",
										label: tt.fields.name,
										value: staffForm.name,
										onChange: (v) => setStaffForm({
											...staffForm,
											name: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "s-pw",
										label: tt.fields.password,
										type: "password",
										value: staffForm.password,
										onChange: (v) => setStaffForm({
											...staffForm,
											password: v
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
										id: "s-dept",
										label: tt.fields.department,
										value: staffForm.department,
										onChange: (v) => setStaffForm({
											...staffForm,
											department: v
										}),
										placeholder: "e.g. Sales, Operations…"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
										type: "submit",
										variant: "primary",
										children: tt.createBtn
									}) })
								]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountTable, {
					rows: staff,
					role: "staff"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!editTarget,
				onOpenChange: (o) => {
					if (!o) setEditTarget(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: `max-w-md ${WP_CARD} border border-white/[0.09] text-white`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-white",
						children: tt.editTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "text-white/40",
						children: [
							editTarget?.uid,
							" · ",
							editTarget?.role
						]
					})] }), editTarget && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveEdit,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "e-name",
								label: tt.fields.name,
								value: editTarget.name,
								onChange: (v) => setEditTarget({
									...editTarget,
									name: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "e-pw",
								label: tt.fields.password,
								type: "password",
								value: editTarget.password,
								onChange: (v) => setEditTarget({
									...editTarget,
									password: v
								})
							}),
							editTarget.role === "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDarkInput, {
								id: "e-dept",
								label: tt.fields.department,
								value: editTarget.department ?? "",
								onChange: (v) => setEditTarget({
									...editTarget,
									department: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalActionButton, {
								type: "submit",
								variant: "primary",
								children: tt.saveBtn
							}) })
						]
					})]
				})
			})
		]
	});
}
function GlobalInquiriesTab({ T }) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: enriched.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
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
				eyebrowLabel: `${T.investor.adminReply}`,
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
		] }, q.id))
	});
}
function ActivityPill({ role }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
		tone: role === "admin" ? "green" : "gold",
		children: role
	});
}
function SystemTab({ onBackup, T }) {
	const { state } = usePortal();
	const ts = T.admin.system;
	const dataSize = `${(JSON.stringify(state).length / 1024).toFixed(1)} KB`;
	const investors = getInvestors(state.users);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-4 w-4 text-[#14a76c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: WP_EYEBROW,
					children: ts.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-5",
				children: [
					[ts.totalInvestors, String(investors.length)],
					[ts.dataSize, dataSize],
					[ts.lastSaved, new Date(state.system.lastSaved).toLocaleString()],
					[ts.lastBackup, new Date(state.system.lastBackup).toLocaleString()]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-white/[0.07] bg-[#0e0e0e] px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${WP_EYEBROW} mb-1.5`,
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[12px] text-white/75",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/[0.07] pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalActionButton, {
					onClick: onBackup,
					variant: "primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-3.5 w-3.5" }), ts.backupBtn]
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalCard, {
			noPad: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-5 py-4 border-b border-white/[0.07]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4 text-[#14a76c]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: WP_EYEBROW,
						children: ts.activityLog
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-[10px] text-white/28",
						children: [state.activityLog.length, " entries"]
					})
				]
			}), state.activityLog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[12px] ${WP_MUTED}`,
					children: "No activity recorded yet."
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-white/[0.05]",
				children: state.activityLog.slice(0, 50).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] font-semibold text-white/85",
									children: entry.actorName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityPill, { role: entry.actorRole }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[12px] ${WP_MUTED}`,
									children: entry.action
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/38 mt-0.5 truncate",
							children: entry.detail
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-white/28 tabular-nums shrink-0 mt-0.5",
						children: new Date(entry.timestamp).toLocaleString()
					})]
				}, entry.id))
			})]
		})]
	});
}
//#endregion
export { AdminDashboard as component };
