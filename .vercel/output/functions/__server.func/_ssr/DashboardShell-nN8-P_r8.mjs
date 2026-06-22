import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal } from "./i18n-OlzCbsxR.mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { M as HeartHandshake, w as LogOut } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardShell-nN8-P_r8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* DashboardShell — Shared layout and UI primitives for the WithCare portal.
* Used by care.admin, care.staff, care.employee.
* All original exports are preserved with identical props for backward compatibility.
*/
var EC_BG = "#060f10";
var EC_SIDEBAR = "#040d0e";
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
			className: `rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${lang === l.code ? "bg-white/[0.14] text-white" : "text-white/35 hover:text-white/65"}`,
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
		style: { background: EC_BG },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 opacity-[0.018]",
			style: {
				backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
				backgroundSize: "32px 32px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-60 shrink-0 border-r border-white/[0.05] md:flex md:flex-col",
				style: { background: EC_SIDEBAR },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pt-6 pb-5 border-b border-white/[0.05]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/employee-care",
							className: "flex flex-col items-start gap-2.5 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: with_logo_default,
								alt: "WITH",
								className: "h-7 w-auto brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-5 w-5 items-center justify-center rounded-md bg-[#e07a5f]/12 ring-1 ring-[#e07a5f]/22",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3 w-3 text-[#e07a5f]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-white/65 tracking-tight",
										children: "Care"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[9px] text-white/22 uppercase tracking-widest capitalize",
										children: ["· ", role]
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-3 mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e07a5f]/15 text-xs font-bold text-[#e07a5f] ring-1 ring-[#e07a5f]/20",
								children: initial
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: identity
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-5 flex-1 px-2.5 space-y-0.5 overflow-y-auto",
						children: nav.map((item) => {
							const Icon = item.icon;
							const isActive = active === item.key;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelect(item.key),
								className: `relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 ${isActive ? "bg-[#e07a5f]/[0.09] text-white" : "text-white/40 hover:bg-white/[0.035] hover:text-white/75"}`,
								children: [
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#e07a5f]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-[15px] w-[15px] shrink-0 transition-colors ${isActive ? "text-[#e07a5f]" : ""}` }),
									item.label
								]
							}, item.key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-2.5 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-white/[0.05] pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									logout();
									navigate({ to: "/care/login" });
								},
								className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/30 hover:bg-white/[0.035] hover:text-white/60 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-[15px] w-[15px]" }), t("dash.signOut")]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col min-h-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-0 z-10 border-b border-white/[0.05] px-6 py-3.5 flex items-center justify-between backdrop-blur-md",
						style: { background: "rgba(4,13,14,0.85)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[15px] font-semibold tracking-tight text-white/90",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-white/20 hidden sm:block tabular-nums",
									children: [
										t("dash.saved"),
										" ",
										new Date(state.system.lastSaved).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-3 w-px bg-white/[0.08]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangSwitcher, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-white/[0.08]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#e07a5f]/15 text-[11px] font-bold text-[#e07a5f] ring-1 ring-[#e07a5f]/20",
									children: initial
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:hidden border-b border-white/[0.05] px-4 py-2.5 flex gap-1.5 flex-wrap",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(item.key),
							className: `rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${active === item.key ? "bg-[#e07a5f] text-white" : "bg-white/[0.06] text-white/50 hover:text-white/80"}`,
							children: item.label
						}, item.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 px-6 py-7 md:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: { opacity: 0 },
								transition: {
									duration: .2,
									ease: "easeOut"
								},
								children
							}, active)
						})
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
	const toneBorder = {
		coral: "hover:border-[#e07a5f]/20",
		teal: "hover:border-teal-400/20",
		amber: "hover:border-amber-400/20",
		sky: "hover:border-sky-400/20",
		default: "hover:border-white/12"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-white/[0.06] bg-white/[0.025] px-5 py-4 transition-all duration-200 hover:bg-white/[0.04] ${toneBorder}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.18em] text-white/32 mb-2",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-2xl font-semibold tracking-tight ${toneColor}`,
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] text-white/28",
				children: sub
			})
		]
	});
}
function Pill({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${{
			default: "bg-white/[0.08] text-white/75",
			ok: "bg-emerald-500/12 text-emerald-300 border border-emerald-500/20",
			warn: "bg-amber-500/12 text-amber-300 border border-amber-500/20",
			info: "bg-sky-500/12 text-sky-300 border border-sky-500/20",
			muted: "bg-white/[0.05] text-white/40",
			coral: "bg-[#e07a5f]/12 text-[#e07a5f] border border-[#e07a5f]/20"
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
		className: `rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 ${className ?? ""}`,
		children
	});
}
function PremiumCard({ children, className = "", accent, noPad }) {
	const accentGlow = accent === "coral" ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(224,122,95,0.07), transparent)" : accent === "teal" ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(45,200,190,0.06), transparent)" : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] ${noPad ? "" : "p-5"} ${className}`,
		children: [accentGlow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0",
			style: { background: accentGlow }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children
		})]
	});
}
function inputCls(extra = "") {
	return `w-full rounded-lg border border-white/[0.07] bg-[#081415] px-3 py-2 text-sm text-white/85 placeholder:text-white/22 outline-none transition focus:border-[#e07a5f]/45 focus:bg-[#091617] ${extra}`;
}
function SectionHeader({ title, action, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[12px] font-semibold uppercase tracking-[0.15em] text-white/38",
			children: title
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-[11px] text-white/28",
			children: sub
		})] }), action]
	});
}
function ActionBtn({ children, onClick, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `inline-flex items-center gap-1.5 rounded-lg bg-[#e07a5f] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide hover:bg-[#d46f54] active:bg-[#c4644a] transition-colors ${className}`,
		children
	});
}
function EmptyState({ message, icon, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] border-dashed bg-white/[0.02] px-8 py-14 text-center",
		children: [
			icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] text-white/40 max-w-xs leading-relaxed",
				children: message
			}),
			action
		]
	});
}
//#endregion
export { EmptyState as a, SectionHeader as c, statusTone as d, DashboardShell as i, StatCard as l, Card as n, Pill as o, CareLangSwitcher as r, PremiumCard as s, ActionBtn as t, inputCls as u };
