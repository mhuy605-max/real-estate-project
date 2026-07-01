import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal } from "./i18n-C-udbzCl.mjs";
import { t as with_logo_black_default } from "./with-logo-black-CurIuk3w.mjs";
import { M as HeartHandshake, w as LogOut } from "../_libs/lucide-react.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardShell-ByRWoDhS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* DashboardShell — Shared layout and UI primitives for the WithCare portal.
* Used by care.admin, care.staff, care.employee.
* All original exports are preserved with identical props for backward compatibility.
*/
var EC_BG = "#f6faf8";
var EC_SIDEBAR = "#ffffff";
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
		className: "flex items-center gap-0.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-1 py-1",
		children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setLang(l.code),
			className: `rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all ${lang === l.code ? "bg-[#14a76c] text-white" : "text-black/40 hover:text-black/70"}`,
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
		className: "min-h-screen text-[#0d1f16]",
		style: { background: EC_BG },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 opacity-[0.035]",
			style: {
				backgroundImage: "radial-gradient(circle, rgba(13,31,22,0.9) 1px, transparent 1px)",
				backgroundSize: "32px 32px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-60 shrink-0 border-r border-black/[0.06] md:flex md:flex-col",
				style: { background: EC_SIDEBAR },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pt-6 pb-5 border-b border-black/[0.06]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/employee-care",
							className: "flex flex-col items-start gap-2.5 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: with_logo_black_default,
								alt: "WITH",
								className: "h-7 w-auto opacity-85 transition-opacity group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-5 w-5 items-center justify-center rounded-md bg-[#14a76c]/12 ring-1 ring-[#14a76c]/22",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3 w-3 text-[#14a76c]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-black/65 tracking-tight",
										children: "Care"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[9px] text-black/30 uppercase tracking-widest capitalize",
										children: ["· ", role]
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-3 mt-4 rounded-xl border border-black/[0.07] bg-black/[0.015] px-3.5 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14a76c]/15 text-xs font-bold text-[#0b6b47] ring-1 ring-[#14a76c]/20",
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
								className: `relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 ${isActive ? "bg-[#14a76c]/[0.10] text-[#0b6b47]" : "text-black/45 hover:bg-black/[0.03] hover:text-black/75"}`,
								children: [
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#14a76c]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-[15px] w-[15px] shrink-0 transition-colors ${isActive ? "text-[#14a76c]" : ""}` }),
									item.label
								]
							}, item.key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-2.5 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-black/[0.06] pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									logout();
									navigate({ to: "/care/login" });
								},
								className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-black/35 hover:bg-black/[0.03] hover:text-black/65 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-[15px] w-[15px]" }), t("dash.signOut")]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col min-h-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-0 z-10 border-b border-black/[0.06] px-6 py-3.5 flex items-center justify-between backdrop-blur-md",
						style: { background: "rgba(255,255,255,0.88)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[15px] font-semibold tracking-tight text-black/88",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-black/30 hidden sm:block tabular-nums",
									children: [
										t("dash.saved"),
										" ",
										new Date(state.system.lastSaved).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-3 w-px bg-black/[0.10]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangSwitcher, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-black/[0.10]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#14a76c]/15 text-[11px] font-bold text-[#0b6b47] ring-1 ring-[#14a76c]/20",
									children: initial
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:hidden border-b border-black/[0.06] px-4 py-2.5 flex gap-1.5 flex-wrap",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(item.key),
							className: `rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${active === item.key ? "bg-[#14a76c] text-white" : "bg-black/[0.05] text-black/55 hover:text-black/85"}`,
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
		coral: "text-[#14a76c]",
		teal: "text-[#0b6b47]",
		amber: "text-amber-600",
		sky: "text-sky-600",
		default: "text-[#0d1f16]"
	}[tone];
	const toneBorder = {
		coral: "hover:border-[#14a76c]/25",
		teal: "hover:border-[#0b6b47]/25",
		amber: "hover:border-amber-500/25",
		sky: "hover:border-sky-500/25",
		default: "hover:border-black/15"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-black/[0.07] bg-white px-5 py-4 shadow-[0_1px_2px_rgba(13,31,22,0.04)] transition-all duration-200 hover:bg-[#f5faf7] ${toneBorder}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.18em] text-black/38 mb-2",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-2xl font-semibold tracking-tight ${toneColor}`,
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] text-black/32",
				children: sub
			})
		]
	});
}
function Pill({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${{
			default: "bg-black/[0.06] text-black/70",
			ok: "bg-[#14a76c]/10 text-[#0b6b47] border border-[#14a76c]/25",
			warn: "bg-amber-500/10 text-amber-700 border border-amber-500/25",
			info: "bg-sky-500/10 text-sky-700 border border-sky-500/25",
			muted: "bg-black/[0.04] text-black/40",
			coral: "bg-[#14a76c]/10 text-[#0b6b47] border border-[#14a76c]/25"
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
		className: `rounded-2xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(13,31,22,0.04)] p-5 ${className ?? ""}`,
		children
	});
}
function PremiumCard({ children, className = "", accent, noPad }) {
	const accentGlow = accent === "coral" || accent === "teal" ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(20,167,108,0.07), transparent)" : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(13,31,22,0.04)] ${noPad ? "" : "p-5"} ${className}`,
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
	return `w-full rounded-lg border border-black/[0.10] bg-white px-3 py-2 text-sm text-[#0d1f16]/90 placeholder:text-black/28 outline-none transition focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] ${extra}`;
}
function SectionHeader({ title, action, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[12px] font-semibold uppercase tracking-[0.15em] text-black/45",
			children: title
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-[11px] text-black/32",
			children: sub
		})] }), action]
	});
}
function ActionBtn({ children, onClick, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `inline-flex items-center gap-1.5 rounded-lg bg-[#14a76c] px-3.5 py-2 text-[12px] font-semibold text-white tracking-wide hover:bg-[#109c5f] active:bg-[#0c7548] transition-colors ${className}`,
		children
	});
}
function EmptyState({ message, icon, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center gap-3 rounded-xl border border-black/[0.08] border-dashed bg-black/[0.012] px-8 py-14 text-center",
		children: [
			icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] text-black/45 max-w-xs leading-relaxed",
				children: message
			}),
			action
		]
	});
}
//#endregion
export { EmptyState as a, SectionHeader as c, statusTone as d, DashboardShell as i, StatCard as l, Card as n, Pill as o, CareLangSwitcher as r, PremiumCard as s, ActionBtn as t, inputCls as u };
