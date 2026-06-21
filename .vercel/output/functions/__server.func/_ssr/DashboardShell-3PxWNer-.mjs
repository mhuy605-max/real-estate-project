import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { s as useCarePortal } from "./store-BM69R9gw.mjs";
import { n as useCareLang } from "./i18n-B5WUMUco.mjs";
import { g as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { O as HeartHandshake, b as LogOut } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardShell-3PxWNer-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		code: "en",
		label: "EN"
	},
	{
		code: "vi",
		label: "VI"
	},
	{
		code: "ko",
		label: "한국어"
	}
];
function CareLangSwitcher() {
	const { lang, setLang } = useCareLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-1 py-1",
		children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setLang(l.code),
			className: `rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${lang === l.code ? "bg-white/15 text-white" : "text-white/35 hover:text-white/65"}`,
			children: l.label
		}, l.code))
	});
}
function DashboardShell({ title, role, nav, active, onSelect, children, identity }) {
	const { state, logout } = useCarePortal();
	const { t } = useCareLang();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		if (!state.session || state.session.role !== role) navigate({
			to: "/care/login",
			replace: true
		});
	}, [
		state.session,
		role,
		navigate,
		pathname
	]);
	if (!state.session || state.session.role !== role) return null;
	const initial = state.session.name?.charAt(0).toUpperCase() ?? "?";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen text-white",
		style: { background: "#0b1e20" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 opacity-[0.02]",
			style: {
				backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
				backgroundSize: "28px 28px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-60 shrink-0 border-r border-white/[0.06] md:flex md:flex-col",
				style: { background: "linear-gradient(180deg, #071618 0%, #08191b 100%)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pt-6 pb-4 border-b border-white/[0.06]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/employee-care",
							className: "flex flex-col items-start gap-2 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: with_logo_default,
								alt: "WITH",
								className: "h-7 w-auto brightness-0 invert opacity-85 transition-opacity group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-5 w-5 items-center justify-center rounded bg-[#e07a5f]/15 ring-1 ring-[#e07a5f]/25",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3 w-3 text-[#e07a5f]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-medium text-white/70 tracking-tight",
									children: "Care"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1.5 text-[9px] text-white/25 uppercase tracking-widest capitalize",
									children: ["· ", role]
								})] })]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-3 mt-4 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/18 text-xs font-bold text-[#e07a5f]",
								children: initial
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: identity
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-5 flex-1 px-2.5 space-y-0.5",
						children: nav.map((item) => {
							const Icon = item.icon;
							const isActive = active === item.key;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelect(item.key),
								className: `relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 ${isActive ? "bg-[#e07a5f]/10 text-white" : "text-white/45 hover:bg-white/[0.04] hover:text-white/80"}`,
								children: [
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#e07a5f]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-[15px] w-[15px] ${isActive ? "text-[#e07a5f]" : ""}` }),
									item.label
								]
							}, item.key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-2.5 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-white/[0.06] pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									logout();
									navigate({ to: "/care/login" });
								},
								className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/35 hover:bg-white/[0.04] hover:text-white/65 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-[15px] w-[15px]" }), t("dash.signOut")]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col min-h-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-0 z-10 border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between backdrop-blur-md",
						style: { background: "rgba(7,22,24,0.80)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[15px] font-semibold tracking-tight text-white",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-white/25 hidden sm:block",
									children: [
										t("dash.saved"),
										" ",
										new Date(state.system.lastSaved).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-3 w-px bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangSwitcher, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#e07a5f]/18 text-[11px] font-bold text-[#e07a5f]",
									children: initial
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:hidden border-b border-white/[0.06] px-4 py-2.5 flex gap-2 flex-wrap",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(item.key),
							className: `rounded-full px-3 py-1.5 text-[12px] font-medium transition-all ${active === item.key ? "bg-[#e07a5f] text-white" : "bg-white/[0.06] text-white/55 hover:text-white"}`,
							children: item.label
						}, item.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 px-6 py-7 md:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .22,
								ease: "easeOut"
							},
							children
						}, active)
					})
				]
			})]
		})]
	});
}
function StatCard({ label, value, sub, tone = "default" }) {
	const toneColor = {
		coral: "text-[#e07a5f]",
		teal: "text-teal-400",
		amber: "text-amber-400",
		sky: "text-sky-400",
		default: "text-white"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all hover:border-white/10 hover:bg-white/[0.05]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-widest text-white/35",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-1.5 text-2xl font-semibold ${toneColor}`,
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] text-white/30",
				children: sub
			})
		]
	});
}
function Pill({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${{
			default: "bg-white/10 text-white/80",
			ok: "bg-emerald-500/15 text-emerald-300",
			warn: "bg-amber-500/15 text-amber-300",
			info: "bg-sky-500/15 text-sky-300",
			muted: "bg-white/5 text-white/45",
			coral: "bg-[#e07a5f]/15 text-[#e07a5f]"
		}[tone]}`,
		children
	});
}
function statusTone(status) {
	switch (status) {
		case "New": return "info";
		case "In Progress": return "warn";
		case "Pending Info": return "warn";
		case "Resolved": return "ok";
		case "Closed": return "muted";
		default: return "default";
	}
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 ${className ?? ""}`,
		children
	});
}
function inputCls(extra = "") {
	return `w-full rounded-lg border border-white/[0.08] bg-[#091a1c] px-3 py-2 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/50 ${extra}`;
}
function SectionHeader({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[13px] font-semibold uppercase tracking-widest text-white/40",
			children: title
		}), action]
	});
}
function ActionBtn({ children, onClick, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide hover:bg-[#d96a4f] transition-colors ${className}`,
		children
	});
}
//#endregion
export { Pill as a, inputCls as c, DashboardShell as i, statusTone as l, Card as n, SectionHeader as o, CareLangSwitcher as r, StatCard as s, ActionBtn as t };
