import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as STAGES, c as useCareLang, l as useCarePortal, n as CARE_STATUSES, o as getCareStaff, s as getCompanyName, t as CARE_CATEGORIES } from "./i18n-BNcuN0TD.mjs";
import { A as Inbox, I as Funnel, S as MapPin, Z as CircleCheck, i as Users, j as House, m as Plus, ot as Building2, p as Send, z as FileChartColumnIncreasing } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { a as EmptyState, c as SectionHeader, d as statusTone, i as DashboardShell, l as StatCard, n as Card, o as Pill, s as PremiumCard, t as ActionBtn, u as inputCls } from "./DashboardShell-BzKrxcCi.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as objectType, i as enumType, n as coerce, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.admin-SYkcvNJf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EBW = "text-[10px] uppercase tracking-[0.18em] text-black/32 font-medium";
function AdminDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("requests");
	const me = state.session;
	if (!me) return null;
	const openCount = state.requests.filter((r) => r.status === "New" || r.status === "In Progress").length;
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-[#0d1f16] truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] text-[#14a76c]/70 uppercase tracking-wider",
		children: t("dash.fullAccess")
	})] });
	const nav = [
		{
			label: t("admin.nav.companies"),
			key: "companies",
			icon: Building2
		},
		{
			label: t("admin.nav.employees"),
			key: "employees",
			icon: Users
		},
		{
			label: t("admin.nav.requests"),
			key: "requests",
			icon: Inbox
		},
		{
			label: t("admin.nav.reports"),
			key: "reports",
			icon: FileChartColumnIncreasing
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashboardShell, {
		title: t("admin.title"),
		role: "admin",
		nav,
		active: tab,
		onSelect: (k) => setTab(k),
		identity,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.companies"),
						value: state.companies.length,
						sub: t("admin.stat.companies.sub"),
						tone: "teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.employees"),
						value: state.users.filter((u) => u.role === "employee").length,
						sub: t("admin.stat.employees.sub"),
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.openRequests"),
						value: openCount,
						sub: t("admin.stat.openRequests.sub"),
						tone: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.reports"),
						value: state.reports.length,
						sub: t("admin.stat.reports.sub"),
						tone: "sky"
					})
				]
			}),
			tab === "companies" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompaniesTab, {}),
			tab === "employees" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeesTab, {}),
			tab === "requests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestsTab, {}),
			tab === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsTab, {})
		]
	});
}
var TIERS = [
	"Trial",
	"Basic",
	"Pro",
	"Premium"
];
var companySchema = objectType({
	name: stringType().min(2),
	tier: enumType(TIERS),
	contractStart: stringType(),
	contractEnd: stringType(),
	hrContactName: stringType().min(2),
	hrContactEmail: stringType().email(),
	seats: coerce.number().int().positive()
});
var tierPill = {
	Premium: "ok",
	Pro: "info",
	Basic: "warn",
	Trial: "muted"
};
function CompaniesTab() {
	const { state, createCareCompany } = useCarePortal();
	const { t } = useCareLang();
	const [show, setShow] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(companySchema),
		defaultValues: {
			tier: "Basic",
			seats: 5,
			contractStart: "",
			contractEnd: "",
			name: "",
			hrContactName: "",
			hrContactEmail: ""
		}
	});
	const seatsUsed = (id) => state.users.filter((u) => u.role === "employee" && u.companyId === id).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("co.section"),
				sub: t("co.section.sub", { count: String(state.companies.length) }),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
					onClick: () => setShow((s) => !s),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
						" ",
						t("co.new")
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					className: "mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${EBW} mb-4`,
						children: t("co.form.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit((v) => {
							createCareCompany(v);
							toast.success(t("co.toast.created"));
							form.reset();
							setShow(false);
						}),
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("co.form.name"),
								...form.register("name")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls(),
								...form.register("tier"),
								children: TIERS.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: tier }, tier))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								type: "date",
								...form.register("contractStart")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								type: "date",
								...form.register("contractEnd")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("co.form.hrName"),
								...form.register("hrContactName")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("co.form.hrEmail"),
								...form.register("hrContactEmail")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								type: "number",
								placeholder: t("co.form.seats"),
								...form.register("seats")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors",
								children: t("co.form.submit")
							})
						]
					})]
				})
			}) }),
			state.companies.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				message: t("co.empty"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-black/30" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: `text-left border-b border-black/[0.06]`,
					children: [
						t("co.col.company"),
						t("co.col.tier"),
						t("co.col.contract"),
						t("co.col.seats"),
						t("co.col.hr")
					].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: `pb-3 ${EBW} font-medium ${i >= 2 ? i === 2 ? "hidden sm:table-cell" : "hidden md:table-cell" : ""}`,
						children: col
					}, col))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-black/[0.04]",
					children: state.companies.map((c) => {
						const used = seatsUsed(c.id);
						const pct = c.seats > 0 ? used / c.seats : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "group hover:bg-black/[0.025] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10 text-[11px] font-bold text-emerald-600",
											children: c.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[13px] font-semibold text-black/90",
											children: c.name
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										tone: tierPill[c.tier],
										children: c.tier
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-3.5 pr-4 text-[11px] text-black/40 tabular-nums hidden sm:table-cell",
									children: [
										c.contractStart,
										" → ",
										c.contractEnd
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-4 hidden md:table-cell",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[13px] text-black/75 tabular-nums",
											children: [used, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-black/28",
												children: ["/", c.seats]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-16 h-1 rounded-full bg-black/[0.07] overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-emerald-600/60 transition-all",
												style: { width: `${Math.min(pct * 100, 100)}%` }
											})
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 text-[12px] text-black/40 hidden md:table-cell",
									children: c.hrContactName
								})
							]
						}, c.id);
					})
				})]
			}) })
		]
	});
}
var empSchema = objectType({
	uid: stringType().min(2),
	name: stringType().min(2),
	password: stringType().min(2),
	companyId: stringType().min(1),
	nationality: stringType().optional(),
	familySize: coerce.number().int().min(1),
	stage: enumType(STAGES)
});
function EmployeesTab() {
	const { state, createCareEmployee, updateCareEmployee } = useCarePortal();
	const { t } = useCareLang();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [show, setShow] = (0, import_react.useState)(false);
	const [edit, setEdit] = (0, import_react.useState)(null);
	const employees = state.users.filter((u) => u.role === "employee" && (filter === "all" || u.companyId === filter));
	const form = useForm({
		resolver: u(empSchema),
		defaultValues: {
			uid: "",
			name: "",
			password: "employee",
			companyId: state.companies[0]?.id,
			familySize: 1,
			stage: "Pre-Arrival",
			nationality: ""
		}
	});
	const selected = state.users.find((u) => u.uid === edit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("emp.section"),
				sub: t("emp.section.sub", { count: String(employees.length) }),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[160px] py-1.5 text-[12px]"),
						value: filter,
						onChange: (e) => setFilter(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allCompanies")
						}), state.companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.name
						}, c.id))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
						onClick: () => setShow((s) => !s),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
							" ",
							t("emp.new")
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						children: t("emp.form.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit((v) => {
							createCareEmployee({
								...v,
								disabled: false,
								languagePref: "en"
							});
							toast.success(t("emp.toast.created"));
							form.reset();
							setShow(false);
						}),
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("emp.form.uid"),
								...form.register("uid")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("emp.form.password"),
								...form.register("password")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("emp.form.name"),
								...form.register("name")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								placeholder: t("emp.form.nationality"),
								...form.register("nationality")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls(),
								...form.register("companyId"),
								children: state.companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.name
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls(),
								...form.register("stage"),
								children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls(),
								type: "number",
								placeholder: t("emp.form.familySize"),
								...form.register("familySize")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors",
								children: t("emp.form.submit")
							})
						]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[1fr_340px]",
				children: [employees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					message: t("emp.empty"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-black/30" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "text-left border-b border-black/[0.06]",
						children: [
							t("emp.col.name"),
							t("emp.col.company"),
							t("emp.col.stage"),
							t("emp.col.housing")
						].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: `pb-3 ${EBW} font-medium ${i === 1 ? "hidden sm:table-cell" : ""} ${i === 3 ? "hidden sm:table-cell" : ""}`,
							children: col
						}, col))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-black/[0.04]",
						children: employees.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							onClick: () => setEdit(e.uid),
							className: `cursor-pointer transition-colors ${edit === e.uid ? "bg-[#14a76c]/[0.07]" : "hover:bg-black/[0.025]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/12 text-[11px] font-bold text-[#14a76c]",
											children: e.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13px] font-semibold text-black/90",
											children: e.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-black/35 font-mono",
											children: e.uid
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-3 hidden sm:table-cell",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] text-black/50",
										children: getCompanyName(state.companies, e.companyId)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 pr-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										tone: "info",
										children: e.stage
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 hidden sm:table-cell",
									children: e.housing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[12px] text-black/45",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-black/25" }), e.housing.district]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] text-black/22",
										children: "—"
									})
								})
							]
						}, e.uid))
					})]
				}) }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PremiumCard, {
					accent: "coral",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/15 text-[13px] font-bold text-[#14a76c] ring-1 ring-[#14a76c]/20",
							children: selected.name.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-black/92",
							children: selected.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-black/38",
							children: getCompanyName(state.companies, selected.companyId)
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: `block ${EBW} mb-1.5`,
							children: t("emp.detail.stage")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: inputCls(),
							value: selected.stage,
							onChange: (e) => updateCareEmployee(selected.uid, { stage: e.target.value }),
							children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "rounded-xl border border-black/[0.07] p-4 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
									className: "px-1.5 text-[10px] uppercase tracking-widest text-black/32 flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3 w-3" }),
										" ",
										t("emp.detail.housing")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls(),
									placeholder: t("emp.detail.district"),
									defaultValue: selected.housing?.district ?? "",
									onBlur: (e) => updateCareEmployee(selected.uid, { housing: {
										...selected.housing ?? {
											district: "",
											rentUsd: 0
										},
										district: e.target.value
									} })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls(),
									type: "number",
									placeholder: t("emp.detail.rent"),
									defaultValue: selected.housing?.rentUsd ?? 0,
									onBlur: (e) => updateCareEmployee(selected.uid, { housing: {
										...selected.housing ?? {
											district: "",
											rentUsd: 0
										},
										rentUsd: Number(e.target.value)
									} })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls(),
										type: "date",
										defaultValue: selected.housing?.leaseStart ?? "",
										onBlur: (e) => updateCareEmployee(selected.uid, { housing: {
											...selected.housing ?? {
												district: "",
												rentUsd: 0
											},
											leaseStart: e.target.value
										} })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls(),
										type: "date",
										defaultValue: selected.housing?.leaseEnd ?? "",
										onBlur: (e) => updateCareEmployee(selected.uid, { housing: {
											...selected.housing ?? {
												district: "",
												rentUsd: 0
											},
											leaseEnd: e.target.value
										} })
									})]
								})
							]
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					message: t("emp.empty"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-black/30" })
				})]
			})
		]
	});
}
function RequestsTab() {
	const { state, assignCareRequest, updateCareRequestStatus, replyToCareRequest } = useCarePortal();
	const { t } = useCareLang();
	const [fCompany, setFCompany] = (0, import_react.useState)("all");
	const [fCat, setFCat] = (0, import_react.useState)("all");
	const [fStatus, setFStatus] = (0, import_react.useState)("all");
	const list = state.requests.filter((r) => (fCompany === "all" || r.companyId === fCompany) && (fCat === "all" || r.category === fCat) && (fStatus === "all" || r.status === fStatus));
	const [open, setOpen] = (0, import_react.useState)(list[0]?.id ?? null);
	const [reply, setReply] = (0, import_react.useState)("");
	const selected = state.requests.find((r) => r.id === open);
	const staff = getCareStaff(state.users);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("req.section"),
				sub: t("req.section.sub", { count: String(list.length) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 rounded-xl border border-black/[0.06] bg-black/[0.02] px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5 text-black/25 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[150px] py-1.5 text-[12px]"),
						value: fCompany,
						onChange: (e) => setFCompany(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allCompanies")
						}), state.companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.name
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[140px] py-1.5 text-[12px]"),
						value: fCat,
						onChange: (e) => setFCat(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allCategories")
						}), CARE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[130px] py-1.5 text-[12px]"),
						value: fStatus,
						onChange: (e) => setFStatus(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allStatuses")
						}), CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s,
							children: t(`status.${s}`)
						}, s))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[380px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						message: t("req.empty.list"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-black/30" })
					}) : list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(r.id),
						className: `block w-full rounded-xl border p-4 text-left transition-all duration-150 ${open === r.id ? "border-[#14a76c]/35 bg-[#14a76c]/[0.07]" : "border-black/[0.06] bg-black/[0.02] hover:border-black/10 hover:bg-black/[0.04]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-black/28 font-mono",
									children: r.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									tone: statusTone(r.status),
									children: t(`status.${r.status}`)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-semibold text-black/90 leading-snug",
								children: r.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-black/38",
									children: r.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-black/30",
									children: getCompanyName(state.companies, r.companyId) || t("dash.guest")
								})]
							})
						]
					}, r.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-black/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `${EBW}`,
										children: selected.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-black/18",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-black/25",
										children: selected.id
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[16px] font-semibold text-black/92 leading-snug",
								children: selected.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-black/35 mt-0.5",
								children: getCompanyName(state.companies, selected.companyId) || t("dash.guest")
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls("max-w-[150px] py-1.5 text-[12px]"),
								value: selected.status,
								onChange: (e) => updateCareRequestStatus(selected.id, e.target.value),
								children: CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: t(`status.${s}`)
								}, s))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls("max-w-[170px] py-1.5 text-[12px]"),
								value: selected.assignedStaffUid ?? "",
								onChange: (e) => assignCareRequest(selected.id, e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t("dash.assign")
								}), staff.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.uid,
									children: s.name
								}, s.uid))]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-black/62 leading-relaxed mb-5",
						children: selected.details
					}),
					selected.thread.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5 mb-5 border-t border-black/[0.06] pt-4",
						children: selected.thread.map((m) => {
							const isStaff = m.authorRole === "staff" || m.authorRole === "admin";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl px-4 py-3 ${isStaff ? "bg-[#14a76c]/[0.07] border border-[#14a76c]/15" : "bg-black/[0.03] border border-black/[0.05]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold text-black/75",
											children: m.authorName
										}), isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
											tone: "coral",
											children: m.authorRole
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-black/28 tabular-nums",
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
							className: "inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c] px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-[#109c5f] transition-colors shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }),
								" ",
								t("dash.send")
							]
						})]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					message: t("req.empty.detail"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-5 w-5 text-black/30" })
				}) })]
			})
		]
	});
}
var repSchema = objectType({
	companyId: stringType().min(1),
	kind: enumType(["Monthly", "Annual"]),
	periodLabel: stringType().min(2),
	summary: stringType().min(5)
});
function ReportsTab() {
	const { state, generateCareReport } = useCarePortal();
	const { t } = useCareLang();
	const [show, setShow] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(repSchema),
		defaultValues: {
			companyId: state.companies[0]?.id,
			kind: "Monthly",
			periodLabel: "",
			summary: ""
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("rep.section"),
				sub: t("rep.section.sub", { count: String(state.reports.length) }),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionBtn, {
					onClick: () => setShow((s) => !s),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
						" ",
						t("rep.new")
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					accent: "teal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${EBW} mb-4`,
						children: t("rep.form.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit((v) => {
							generateCareReport(v.companyId, v.kind, v.periodLabel, v.summary);
							toast.success(t("rep.toast.created"));
							form.reset();
							setShow(false);
						}),
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls(),
								...form.register("companyId"),
								children: state.companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.name
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls(),
								...form.register("kind"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Monthly" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Annual" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls("md:col-span-2"),
								placeholder: t("rep.form.period"),
								...form.register("periodLabel")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								className: inputCls("md:col-span-2"),
								placeholder: t("rep.form.summary"),
								...form.register("summary")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "md:col-span-2 rounded-lg bg-[#14a76c] py-2.5 text-sm font-semibold text-white hover:bg-[#109c5f] transition-colors",
								children: t("rep.form.submit")
							})
						]
					})]
				})
			}) }),
			state.reports.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				message: t("rep.empty"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, { className: "h-5 w-5 text-black/30" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: state.reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PremiumCard, {
					accent: r.kind === "Annual" ? "teal" : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] text-black/22",
									children: r.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-[14px] font-semibold text-black/92",
									children: getCompanyName(state.companies, r.companyId)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-black/38 mt-0.5",
									children: r.periodLabel
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: r.kind === "Annual" ? "ok" : "info",
								children: r.kind
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-black/60 leading-relaxed border-t border-black/[0.06] pt-3",
							children: r.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-1.5 text-[10px] text-black/28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-emerald-500/60" }),
								t("dash.generated"),
								" ",
								new Date(r.generatedAt).toLocaleDateString()
							]
						})
					]
				}, r.id))
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
