import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { W as Crown, j as House, n as X, w as LogOut, x as Menu } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as WithLogo, t as PortalLangSwitcher } from "./portalTranslations-DxfJmiea.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortalShell-BLsnUbKi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cls = {
	Standard: "vip-chip-standard",
	Gold: "vip-chip-gold",
	Platinum: "vip-chip-platinum",
	Diamond: "vip-chip-diamond"
};
function VipBadge({ grade, withIcon = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${cls[grade]}`,
		children: [withIcon && grade !== "Standard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3 w-3" }), grade.toUpperCase()]
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
/**
* PortalShell — Shared premium UI primitives for the WithProperty portal system.
* Used by portal.admin, portal.staff, portal.investor.
* Does NOT touch stores, routes, translations, or role logic.
*/
var WP_BG = "bg-[#080808]";
var WP_SURFACE = "bg-[#111111]";
var WP_CARD = "bg-[#161616]";
var WP_BORDER = "border-white/[0.08]";
var WP_EYEBROW = "text-[10px] tracking-[0.2em] uppercase font-medium text-white/45";
var WP_MUTED = "text-white/50";
var WP_ACCENT = "#14a76c";
function PortalKpiCard({ label, value, sub, icon, valueColor = "text-white", accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden rounded-xl border ${WP_BORDER} ${WP_CARD} px-5 py-4 transition-all duration-200 hover:border-white/[0.13] hover:bg-[#1a1a1a]`,
		children: [
			accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.04]",
				style: { background: `radial-gradient(ellipse 80% 60% at 0% 0%, #14a76c, transparent)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: WP_EYEBROW,
					children: label
				}), icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-70",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `font-display text-[26px] font-semibold tracking-tight leading-none mb-1.5 ${valueColor}`,
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-[11px] text-white/50`,
				children: sub
			})
		]
	});
}
function PortalCard({ children, className = "", noPad }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border ${WP_BORDER} ${WP_CARD} ${noPad ? "" : "p-5"} ${className}`,
		children
	});
}
function PortalSectionHeader({ title, action, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[13px] font-semibold text-white/85 tracking-tight",
			children: title
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-[11px] text-white/50 mt-0.5`,
			children: sub
		})] }), action]
	});
}
var BADGE_TONE = {
	green: "bg-[#14a76c]/12 text-[#14a76c] border-[#14a76c]/20",
	gold: "bg-[#d4af37]/12 text-[#d4af37] border-[#d4af37]/20",
	red: "bg-[#d9534f]/12 text-[#d9534f] border-[#d9534f]/20",
	blue: "bg-sky-500/12 text-sky-400 border-sky-500/20",
	muted: "bg-white/[0.06] text-white/40 border-white/10"
};
function PortalStatusBadge({ children, tone = "muted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase ${BADGE_TONE[tone]}`,
		children
	});
}
function LeadStatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalStatusBadge, {
		tone: status === "New" ? "green" : status === "Contacted" ? "gold" : status === "Answered" ? "green" : status === "Pending" ? "red" : "muted",
		children: status
	});
}
function PortalEmptyState({ message, icon, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col items-center justify-center gap-3 rounded-xl border ${WP_BORDER} border-dashed ${WP_CARD} px-8 py-14 text-center`,
		children: [
			icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-[13px] ${WP_MUTED} max-w-xs leading-relaxed`,
				children: message
			}),
			action
		]
	});
}
function PortalActionButton({ children, onClick, variant = "primary", size = "md", disabled, type = "button", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: `inline-flex items-center rounded-lg font-semibold tracking-wide transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${{
			primary: "bg-[#14a76c] text-white hover:bg-[#0f8a59] active:bg-[#0d7a51]",
			secondary: "bg-white/[0.08] text-white/80 hover:bg-white/[0.12] border border-white/[0.1]",
			danger: "bg-[#d9534f]/10 text-[#d9534f] hover:bg-[#d9534f]/[0.18] border border-[#d9534f]/25",
			ghost: "text-white/50 hover:text-white/80 hover:bg-white/[0.06]"
		}[variant]} ${{
			sm: "px-3 py-1.5 text-[11px] gap-1.5",
			md: "px-4 py-2 text-[12px] gap-2"
		}[size]} ${className}`,
		children
	});
}
function PortalDarkInput({ label, id, type = "text", value, onChange, placeholder, disabled, required, span2, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: span2 ? "sm:col-span-2" : "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: `block ${WP_EYEBROW} mb-1.5`,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			disabled,
			required,
			className: `w-full h-9 rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 text-[13px] text-white/85 placeholder:text-white/22 outline-none transition-all focus:border-[#14a76c]/50 focus:bg-[#1f1f1f] disabled:opacity-50 ${className}`
		})]
	});
}
function PortalDarkTextarea({ label, id, value, onChange, placeholder, rows = 4, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: id,
		className: `block ${WP_EYEBROW} mb-1.5`,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		id,
		rows,
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		disabled,
		className: "w-full rounded-lg border border-white/[0.09] bg-[#1e1e1e] px-3 py-2 text-[13px] text-white/85 placeholder:text-white/22 outline-none transition-all focus:border-[#14a76c]/50 resize-none disabled:opacity-50"
	})] });
}
function PortalSidebarContent({ activeTab, onSelect, navItems, mainSiteLabel, logoutLabel, onLogout }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex h-full flex-col ${WP_BG}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-6 border-b border-white/[0.07]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
					variant: "dark",
					size: 26,
					animate: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 px-3 py-4 space-y-0.5 overflow-y-auto",
				children: navItems.map((item) => {
					const Icon = item.icon;
					const isActive = activeTab === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onSelect(item.id),
						className: `relative flex w-full items-center gap-3 rounded-lg py-2.5 text-[13px] font-medium transition-all duration-150 ${isActive ? "bg-white/[0.07] text-white pl-[11px] pr-3" : "text-white/48 hover:text-white/80 hover:bg-white/[0.04] px-3"}`,
						children: [
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full bg-[#14a76c]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-[15px] w-[15px] shrink-0 ${isActive ? "text-[#14a76c]" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left",
								children: item.label
							}),
							item.badge != null && item.badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-[#14a76c] px-1 text-[9px] font-bold text-white",
								children: item.badge
							})
						]
					}, item.id);
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
						className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-white/48 hover:text-white/80 hover:bg-white/[0.04] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-[15px] w-[15px] shrink-0" }), mainSiteLabel]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onLogout,
						className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#d9534f]/70 hover:text-[#d9534f] hover:bg-[#d9534f]/[0.07] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-[15px] w-[15px] shrink-0" }), logoutLabel]
					})
				]
			})
		]
	});
}
function PortalDashboardLayout({ activeTab, onSelect, navItems, mainSiteLabel, logoutLabel, onLogout, header, children }) {
	const sidebarContent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSidebarContent, {
		activeTab,
		onSelect,
		navItems,
		mainSiteLabel,
		logoutLabel,
		onLogout
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex min-h-screen ${WP_BG}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: `hidden w-60 shrink-0 border-r ${WP_BORDER} lg:flex lg:flex-col`,
			children: sidebarContent
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 min-w-0 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center justify-between border-b ${WP_BORDER} ${WP_SURFACE} px-4 py-3 lg:hidden`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
						variant: "dark",
						size: 24
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 text-white/50 hover:text-white transition-colors",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						side: "left",
						className: `w-60 p-0 border-r ${WP_BORDER} ${WP_BG}`,
						children: sidebarContent
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `border-b ${WP_BORDER} ${WP_SURFACE} px-6 py-5 sm:px-10`,
					children: header
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 px-6 py-8 sm:px-10",
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
						}, activeTab)
					})
				})
			]
		})]
	});
}
function PortalReplyBlock({ eyebrowLabel, timestamp, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-white/[0.07] bg-white/[0.04] px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: `${WP_EYEBROW} mb-1.5`,
			children: [eyebrowLabel, timestamp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-2 text-white/30",
				children: timestamp
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-white/75 leading-relaxed",
			children: body
		})]
	});
}
//#endregion
export { WP_EYEBROW as _, PortalDarkTextarea as a, PortalKpiCard as c, PortalStatusBadge as d, VipBadge as f, WP_CARD as g, WP_BORDER as h, PortalDarkInput as i, PortalReplyBlock as l, WP_BG as m, PortalActionButton as n, PortalDashboardLayout as o, WP_ACCENT as p, PortalCard as r, PortalEmptyState as s, LeadStatusBadge as t, PortalSectionHeader as u, WP_MUTED as v };
