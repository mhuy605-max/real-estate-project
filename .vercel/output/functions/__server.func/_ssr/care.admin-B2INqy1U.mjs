import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as getCareStaff, i as STAGES, n as CARE_STATUSES, o as getCompanyName, s as useCarePortal, t as CARE_CATEGORIES } from "./store-BM69R9gw.mjs";
import { n as useCareLang } from "./i18n-B5WUMUco.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as Building2, E as Inbox, G as CircleCheck, N as FileChartColumnIncreasing, f as Send, p as Plus, r as Users } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { a as Pill, c as inputCls, i as DashboardShell, l as statusTone, n as Card, o as SectionHeader, s as StatCard, t as ActionBtn } from "./DashboardShell-3PxWNer-.mjs";
import { a as objectType, i as enumType, n as coerce, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.admin-B2INqy1U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { state } = useCarePortal();
	const { t } = useCareLang();
	const [tab, setTab] = (0, import_react.useState)("requests");
	const me = state.session;
	if (!me) return null;
	const openCount = state.requests.filter((r) => r.status === "New" || r.status === "In Progress").length;
	const identity = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[12px] font-semibold text-white truncate",
		children: me.name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] text-[#e07a5f]/70 uppercase tracking-wider",
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
						tone: "teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.employees"),
						value: state.users.filter((u) => u.role === "employee").length,
						tone: "coral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.openRequests"),
						value: openCount,
						tone: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: t("admin.stat.reports"),
						value: state.reports.length,
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
	const tierBadge = (tier) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
			tone: {
				Premium: "ok",
				Pro: "info",
				Basic: "warn",
				Trial: "muted"
			}[tier],
			children: tier
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("co.section"),
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-widest text-white/35 mb-4",
						children: t("co.form.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: form.handleSubmit((v) => {
							createCareCompany(v);
							toast.success("Company created");
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
								className: "md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors",
								children: t("co.form.submit")
							})
						]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-left text-[10px] uppercase tracking-widest text-white/30 border-b border-white/[0.06]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-3 font-medium",
							children: t("co.col.company")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-3 font-medium",
							children: t("co.col.tier")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-3 font-medium hidden sm:table-cell",
							children: t("co.col.contract")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-3 font-medium",
							children: t("co.col.seats")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-3 font-medium hidden md:table-cell",
							children: t("co.col.hr")
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-white/[0.05]",
					children: state.companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "group hover:bg-white/[0.02] transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3.5 font-medium text-white/90",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3.5",
								children: tierBadge(c.tier)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3.5 text-white/45 text-xs hidden sm:table-cell",
								children: [
									c.contractStart,
									" → ",
									c.contractEnd
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3.5 text-white/70",
								children: [seatsUsed(c.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-white/30",
									children: ["/", c.seats]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3.5 text-white/45 text-xs hidden md:table-cell",
								children: c.hrContactName
							})
						]
					}, c.id))
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
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[160px] py-1.5"),
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-widest text-white/35 mb-4",
					children: t("emp.form.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: form.handleSubmit((v) => {
						createCareEmployee({
							...v,
							disabled: false,
							languagePref: "en"
						});
						toast.success("Employee created");
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
							className: "md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors",
							children: t("emp.form.submit")
						})
					]
				})] })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
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
							onClick: () => setEdit(e.uid),
							className: `cursor-pointer transition-colors ${edit === e.uid ? "bg-[#e07a5f]/[0.06]" : "hover:bg-white/[0.02]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 font-medium text-white/90",
									children: e.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3.5 text-white/50 text-xs hidden sm:table-cell",
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
									children: e.housing ? e.housing.district : "—"
								})
							]
						}, e.uid))
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/15 text-sm font-bold text-[#e07a5f]",
						children: selected.name.charAt(0)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-white",
						children: selected.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/40",
						children: getCompanyName(state.companies, selected.companyId)
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-[10px] uppercase tracking-widest text-white/35 mb-1.5",
						children: t("emp.detail.stage")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputCls(),
						value: selected.stage,
						onChange: (e) => updateCareEmployee(selected.uid, { stage: e.target.value }),
						children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "rounded-xl border border-white/[0.08] p-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "px-1.5 text-[10px] uppercase tracking-widest text-white/35",
								children: t("emp.detail.housing")
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
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center py-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-white/15 mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/35",
						children: t("emp.empty")
					})]
				}) }) })]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: t("req.section") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[150px] py-1.5"),
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
						className: inputCls("max-w-[140px] py-1.5"),
						value: fCat,
						onChange: (e) => setFCat(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allCategories")
						}), CARE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls("max-w-[130px] py-1.5"),
						value: fStatus,
						onChange: (e) => setFStatus(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("dash.allStatuses")
						}), CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[380px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center py-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-8 w-8 text-white/15 mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/35",
							children: t("req.empty.list")
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
									getCompanyName(state.companies, r.companyId) || "Guest"
								]
							})
						]
					}, r.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3 mb-4",
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
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls("max-w-[150px] py-1.5"),
								value: selected.status,
								onChange: (e) => updateCareRequestStatus(selected.id, e.target.value),
								children: CARE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls("max-w-[170px] py-1.5"),
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-widest text-white/35 mb-4",
					children: t("rep.form.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: form.handleSubmit((v) => {
						generateCareReport(v.companyId, v.kind, v.periodLabel, v.summary);
						toast.success("Report generated");
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
							className: "md:col-span-2 rounded-lg bg-[#e07a5f] py-2.5 text-sm font-semibold hover:bg-[#d96a4f] transition-colors",
							children: t("rep.form.submit")
						})
					]
				})] })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: state.reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono text-white/25",
								children: r.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-semibold text-white",
								children: getCompanyName(state.companies, r.companyId)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/40 mt-0.5",
								children: r.periodLabel
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: r.kind === "Annual" ? "ok" : "info",
							children: r.kind
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/60 leading-relaxed mt-3 border-t border-white/[0.06] pt-3",
						children: r.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[10px] text-white/25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-emerald-500/60" }),
							t("dash.generated"),
							" ",
							new Date(r.generatedAt).toLocaleDateString()
						]
					})
				] }, r.id))
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
