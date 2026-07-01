import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal, t as CARE_CATEGORIES } from "./i18n-C-udbzCl.mjs";
import { $ as ChevronUp, D as Languages, H as Ellipsis, J as Clock, L as FileText, M as HeartHandshake, N as GraduationCap, R as FileCheck, S as MapPin, Z as CircleCheck, c as Stethoscope, d as Shield, dt as ArrowRight, h as Plane, i as Users, j as House, k as KeyRound, n as X, nt as ChevronDown, ot as Building2, q as Compass, t as Zap, u as Sparkles, x as Menu, y as Minus } from "../_libs/lucide-react.mjs";
import { a as motion, i as useMotionValue, n as useSpring, r as useMotionTemplate, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as objectType, i as enumType, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as SheetClose, r as SheetContent, t as Sheet } from "./sheet-Cj8uvqUW.mjs";
import { i as DropdownMenuTrigger, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-NQwLQ7z6.mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employee-care-CHzj52VA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmployeeCarePageWrapper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeCarePage, {});
}
function fadeUpVariants(reduced) {
	return {
		hidden: {
			opacity: reduced ? 1 : 0,
			y: reduced ? 0 : 24
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: reduced ? { duration: 0 } : {
				duration: .6,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		}
	};
}
function staggerParentVariants(reduced) {
	return {
		hidden: {},
		visible: { transition: reduced ? {
			staggerChildren: 0,
			delayChildren: 0
		} : {
			staggerChildren: .09,
			delayChildren: .05
		} }
	};
}
/** Shared hook: gives each section its reduced-motion-aware fade/stagger variants. */
function useSectionMotion() {
	const reduced = !!useReducedMotion();
	return {
		reduced,
		fadeUp: fadeUpVariants(reduced),
		staggerParent: staggerParentVariants(reduced)
	};
}
var springTransition = {
	type: "spring",
	stiffness: 120,
	damping: 18
};
var GrainOverlay = (0, import_react.memo)(function GrainOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-[1] opacity-[0.035]",
		style: {
			backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
			backgroundSize: "200px 200px"
		}
	});
});
var MagneticCTA = (0, import_react.memo)(function MagneticCTA({ href, children, className }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = !!useReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 15,
		mass: .3
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 15,
		mass: .3
	});
	function handleMove(e) {
		if (reduced) return;
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const relX = e.clientX - rect.left - rect.width / 2;
		const relY = e.clientY - rect.top - rect.height / 2;
		x.set(relX * .35);
		y.set(relY * .35);
	}
	function handleLeave() {
		x.set(0);
		y.set(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		ref,
		href,
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		style: {
			x: sx,
			y: sy
		},
		whileTap: { scale: .95 },
		className,
		children
	});
});
var SpotlightCard = (0, import_react.memo)(function SpotlightCard({ children, className }) {
	const mx = useMotionValue(50);
	const my = useMotionValue(50);
	const backgroundImage = useMotionTemplate`radial-gradient(320px circle at ${mx}% ${my}%, rgba(20,167,108,0.10), transparent 65%)`;
	function handleMove(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - rect.left) / rect.width * 100);
		my.set((e.clientY - rect.top) / rect.height * 100);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		onMouseMove: handleMove,
		style: { backgroundImage },
		className,
		children
	});
});
var FloatingStack = (0, import_react.memo)(function FloatingStack() {
	const { t } = useCareLang();
	const reduced = !!useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto hidden h-[420px] w-full max-w-sm lg:block",
		children: [
			{
				icon: MapPin,
				labelKey: "hero.stack.1.label",
				subKey: "hero.stack.1.sub"
			},
			{
				icon: FileCheck,
				labelKey: "hero.stack.2.label",
				subKey: "hero.stack.2.sub"
			},
			{
				icon: HeartHandshake,
				labelKey: "hero.stack.3.label",
				subKey: "hero.stack.3.sub"
			}
		].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: reduced ? 0 : 30,
				rotate: i % 2 === 0 ? -4 : 4
			},
			animate: {
				opacity: 1,
				y: reduced ? 0 : [
					0,
					-10,
					0
				],
				rotate: i % 2 === 0 ? -3 : 3
			},
			transition: {
				opacity: {
					duration: reduced ? 0 : .6,
					delay: reduced ? 0 : .3 + i * .15
				},
				y: reduced ? { duration: 0 } : {
					duration: 4.5 + i,
					repeat: Infinity,
					ease: "easeInOut",
					delay: i * .4
				}
			},
			style: {
				top: `${i * 34}%`,
				left: i === 1 ? "8%" : i === 2 ? "18%" : "0%",
				zIndex: 10 - i
			},
			className: "absolute w-[86%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--ec-coral)]/20 ring-1 ring-[var(--ec-coral)]/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4 text-[var(--ec-coral-soft)]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold leading-snug text-white/90",
						children: t(it.labelKey)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate text-[11px] text-white/45",
						children: t(it.subKey)
					})]
				})]
			})
		}, it.labelKey))
	});
});
var LANGS = [
	"en",
	"ko",
	"vi"
];
function LanguagePicker() {
	const { lang, setLang } = useCareLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1 py-1 text-xs backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "ml-2 h-3.5 w-3.5 opacity-60" }), LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setLang(l),
			className: `rounded-full px-2.5 py-1 uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${lang === l ? "bg-[var(--ec-coral)] text-white shadow-sm" : "text-white/60 hover:text-white"}`,
			children: l
		}, l))]
	});
}
var NAV_LINKS = [
	{
		href: "#how",
		k: "nav.how"
	},
	{
		href: "#services",
		k: "nav.services"
	},
	{
		href: "#hr",
		k: "nav.hr"
	},
	{
		href: "#faq",
		k: "nav.faq"
	}
];
function Nav() {
	const { t } = useCareLang();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-30 transition-all duration-300 ${scrolled ? "bg-[var(--ec-teal-deep)]/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/employee-care",
					className: "flex items-center gap-2.5 sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: with_logo_default,
						alt: "WITH",
						className: "h-7 w-auto brightness-0 invert opacity-90 sm:h-8",
						width: 32,
						height: 32,
						loading: "eager",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-widest text-[var(--ec-coral-soft)]",
						children: "CARE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm md:flex",
					children: NAV_LINKS.map(({ href, k }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "rounded-sm opacity-70 transition hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
						children: t(k)
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePicker, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "hidden items-center gap-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:inline-flex",
								children: [
									t("nav.explore"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "ec-theme min-w-[10rem] border-white/10 bg-[var(--ec-teal-deep)] text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								className: "focus:bg-white/10 focus:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/portal",
									children: t("nav.portalHub")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								className: "focus:bg-white/10 focus:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/with-property",
									children: t("nav.withProperty")
								})
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#request",
							className: "hidden rounded-full bg-[var(--ec-coral)] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[var(--ec-coral)]/25 transition hover:bg-[#109c5f] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:inline-flex",
							children: t("nav.request")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMenuOpen(true),
							"aria-label": "Open menu",
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "h-4.5 w-4.5",
								style: {
									width: 18,
									height: 18
								}
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: menuOpen,
			onOpenChange: setMenuOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
				side: "right",
				className: "ec-theme w-[78vw] max-w-xs border-l border-white/10 bg-[var(--ec-teal-deep)] p-0 text-white sm:max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col px-6 py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: with_logo_default,
								alt: "WITH",
								className: "h-7 w-auto brightness-0 invert opacity-90"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-semibold tracking-widest text-[var(--ec-coral-soft)]",
								children: "CARE"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col gap-1 text-base",
							children: NAV_LINKS.map(({ href, k }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									className: "rounded-lg px-2 py-3 text-white/80 transition hover:bg-white/5 hover:text-white",
									children: t(k)
								})
							}, href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2 border-t border-white/10 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#request",
										className: "inline-flex items-center justify-center rounded-full bg-[var(--ec-coral)] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[var(--ec-coral)]/25 transition hover:bg-[#109c5f]",
										children: t("nav.request")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 px-2 text-[10px] uppercase tracking-widest text-white/30",
									children: t("nav.explore")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/portal",
										className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white",
										children: t("nav.portalHub")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/with-property",
										className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white",
										children: t("nav.withProperty")
									})
								})
							]
						})
					]
				})
			})
		})]
	});
}
function Hero() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[var(--ec-teal-deep)] pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(65% 55% at 12% 20%, rgba(224,122,95,0.20) 0%, transparent 70%), radial-gradient(55% 55% at 90% 80%, rgba(20,167,108,0.30) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: with_logo_default,
					alt: "",
					"aria-hidden": "true",
					width: 320,
					height: 320,
					loading: "eager",
					decoding: "async",
					fetchPriority: "high",
					className: "-translate-x-1/4 w-[38%] max-w-md brightness-0 invert opacity-[0.06] select-none"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "visible",
					variants: staggerParent,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--ec-coral-soft)] sm:mb-5",
							children: t("hero.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							variants: fadeUp,
							className: "font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl sm:leading-[1.04] md:text-[3.4rem] md:leading-[1.02]",
							children: t("hero.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-5 max-w-xl text-base text-white/65 sm:mt-6 sm:text-lg",
							children: t("hero.sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticCTA, {
								href: "#request",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ec-coral)] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--ec-coral)]/30 transition-colors hover:bg-[#109c5f] hover:shadow-[var(--ec-coral)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
								children: [
									t("hero.cta.request"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#hr",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
								children: t("hero.cta.hr")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							className: "mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4",
							children: [
								{
									id: "categories",
									label: t("hero.chip.categories"),
									accent: "var(--ec-coral-soft)"
								},
								{
									id: "timeline",
									label: t("hero.chip.timeline"),
									accent: "#3fcf94"
								},
								{
									id: "languages",
									label: t("hero.chip.languages"),
									accent: "var(--ec-coral-soft)"
								}
							].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 rounded-full",
									style: { background: chip.accent }
								}), chip.label]
							}, chip.id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .8,
						delay: .4
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingStack, {})
				})]
			})
		]
	});
}
function SectionHeader({ eyebrow, title, sub }) {
	const { fadeUp } = useSectionMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: fadeUp,
		className: "mb-8 max-w-2xl sm:mb-10 md:mb-12",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-6 bg-[var(--ec-coral)]" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl tracking-tight text-balance text-[var(--ec-ink)] md:text-4xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-[var(--ec-muted)]",
				children: sub
			})
		]
	});
}
var CARE_PHOTOS = [
	{
		src: "https://picsum.photos/seed/withcare-housing/600/450",
		alt: "Modern apartment in Ho Chi Minh City",
		label: "Housing"
	},
	{
		src: "https://picsum.photos/seed/withcare-paperwork/600/450",
		alt: "Paperwork and documents",
		label: "Paperwork"
	},
	{
		src: "https://picsum.photos/seed/withcare-healthcare/600/450",
		alt: "Healthcare consultation",
		label: "Healthcare"
	},
	{
		src: "https://picsum.photos/seed/withcare-schooling/600/450",
		alt: "Children at international school",
		label: "Schooling"
	}
];
function PhotoStrip() {
	const { fadeUp, staggerParent } = useSectionMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[var(--ec-teal-deep)] py-10 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: "hidden",
			whileInView: "visible",
			viewport: {
				once: true,
				margin: "-60px"
			},
			variants: staggerParent,
			className: "flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-2 sm:px-6 md:grid md:grid-cols-4 md:overflow-visible md:max-w-7xl md:mx-auto md:pb-0",
			children: CARE_PHOTOS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				whileHover: {
					scale: 1.03,
					rotate: i % 2 === 0 ? -.6 : .6
				},
				transition: springTransition,
				className: "relative min-w-[72vw] md:min-w-0 flex-shrink-0 snap-start overflow-hidden rounded-2xl aspect-[4/3]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.src,
						alt: p.alt,
						width: 600,
						height: 450,
						loading: i === 0 ? "eager" : "lazy",
						decoding: "async",
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/80",
						children: p.label
					})
				]
			}, p.label))
		})
	});
}
function HowItWorks() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	const steps = [
		{
			icon: Compass,
			k: "1"
		},
		{
			icon: Plane,
			k: "2"
		},
		{
			icon: KeyRound,
			k: "3"
		},
		{
			icon: HeartHandshake,
			k: "4"
		}
	];
	const offsets = [
		"md:mt-0",
		"md:mt-6",
		"md:mt-0",
		"md:mt-6"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "bg-[var(--ec-sand)] py-16 sm:py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("how.title"),
				sub: t("how.sub")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: staggerParent,
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: steps.map(({ icon: Icon, k }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					className: offsets[i],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
						className: "group relative h-full rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-[var(--ec-teal)]/25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs uppercase tracking-[0.2em] text-[var(--ec-muted)]",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--ec-teal)]/8 transition group-hover:bg-[var(--ec-teal)]/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[var(--ec-teal)]" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-[var(--ec-ink)]",
								children: t(`how.${k}.t`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-[var(--ec-muted)]",
								children: t(`how.${k}.d`)
							})
						]
					})
				}, k))
			})]
		})
	});
}
function Services() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	const items = [
		{
			icon: House,
			k: "housing",
			span: "md:col-span-2 md:row-span-2"
		},
		{
			icon: FileText,
			k: "paperwork",
			span: ""
		},
		{
			icon: Stethoscope,
			k: "medical",
			span: ""
		},
		{
			icon: GraduationCap,
			k: "school",
			span: "md:col-span-2"
		},
		{
			icon: Sparkles,
			k: "settle",
			span: ""
		},
		{
			icon: Ellipsis,
			k: "other",
			span: ""
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-white py-16 sm:py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Services",
				title: t("svc.title"),
				sub: t("svc.sub")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: staggerParent,
				className: "grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-4",
				children: items.map(({ icon: Icon, k, span }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					className: span,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
						className: "group flex h-full flex-col justify-between rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-7 transition-colors duration-300 hover:border-[var(--ec-teal)]/25 hover:bg-[var(--ec-sand)]/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ec-teal)]/8 text-[var(--ec-teal)] transition group-hover:bg-[var(--ec-teal)]/15 group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-[var(--ec-ink)]",
							children: t(`svc.${k}`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[var(--ec-muted)]",
							children: t(`svc.${k}.d`)
						})] })]
					})
				}, k))
			})]
		})
	});
}
var TRUST_COMPANIES = [
	"Samjin Electronics Vietnam",
	"Arcwave Logistics",
	"Hanwha Ocean Vietnam",
	"Halcyon Biotech Asia",
	"Kestrel Data Systems"
];
function TrustSection() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	const stats = [
		{
			id: "companies",
			value: "47",
			label: t("trust.stat.companies")
		},
		{
			id: "employees",
			value: "1,240+",
			label: t("trust.stat.employees")
		},
		{
			id: "trc",
			value: "9 days",
			label: t("trust.stat.trc")
		},
		{
			id: "satisfaction",
			value: "4.8/5",
			label: t("trust.stat.satisfaction")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[var(--ec-sand)] py-16 sm:py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t("trust.eyebrow"),
					title: t("trust.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: staggerParent,
					className: "flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-[var(--ec-teal)]/10 py-8",
					children: TRUST_COMPANIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						variants: fadeUp,
						className: "font-display text-sm font-semibold tracking-tight text-[var(--ec-muted)]",
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: staggerParent,
					className: "mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl tracking-tight text-[var(--ec-ink)] md:text-4xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-[var(--ec-muted)]",
							children: s.label
						})]
					}, s.id))
				})
			]
		})
	});
}
var TIER_DATA = {
	trial: {
		seats: "Up to 3 employees",
		price: "Free pilot",
		sla: "5-day response",
		agent: "tier.trial.agent",
		features: [
			{
				label: "tier.trial.f1",
				level: "partial"
			},
			{
				label: "tier.trial.f2",
				level: "yes"
			},
			{
				label: "tier.trial.f3",
				level: "yes"
			},
			{
				label: "tier.trial.f4",
				level: "yes"
			},
			{
				label: "tier.trial.f5",
				level: "no"
			},
			{
				label: "tier.trial.f6",
				level: "no"
			},
			{
				label: "tier.trial.f7",
				level: "no"
			},
			{
				label: "tier.trial.f8",
				level: "no"
			},
			{
				label: "tier.trial.f9",
				level: "no"
			}
		]
	},
	basic: {
		seats: "Up to 10 employees",
		price: "Contact sales",
		sla: "3-day response",
		agent: "tier.basic.agent",
		features: [
			{
				label: "tier.basic.f1",
				level: "yes"
			},
			{
				label: "tier.basic.f2",
				level: "yes"
			},
			{
				label: "tier.basic.f3",
				level: "yes"
			},
			{
				label: "tier.basic.f4",
				level: "yes"
			},
			{
				label: "tier.basic.f5",
				level: "yes"
			},
			{
				label: "tier.basic.f6",
				level: "no"
			},
			{
				label: "tier.basic.f7",
				level: "no"
			},
			{
				label: "tier.basic.f8",
				level: "partial"
			},
			{
				label: "tier.basic.f9",
				level: "no"
			}
		]
	},
	pro: {
		seats: "Up to 30 employees",
		price: "Most popular",
		sla: "1-day response",
		agent: "tier.pro.agent",
		features: [
			{
				label: "tier.pro.f1",
				level: "yes"
			},
			{
				label: "tier.pro.f2",
				level: "yes"
			},
			{
				label: "tier.pro.f3",
				level: "yes"
			},
			{
				label: "tier.pro.f4",
				level: "yes"
			},
			{
				label: "tier.pro.f5",
				level: "yes"
			},
			{
				label: "tier.pro.f6",
				level: "yes"
			},
			{
				label: "tier.pro.f7",
				level: "yes"
			},
			{
				label: "tier.pro.f8",
				level: "partial"
			},
			{
				label: "tier.pro.f9",
				level: "no"
			}
		]
	},
	premium: {
		seats: "Unlimited employees",
		price: "Enterprise",
		sla: "4-hour response",
		agent: "tier.premium.agent",
		features: [
			{
				label: "tier.premium.f1",
				level: "yes"
			},
			{
				label: "tier.premium.f2",
				level: "yes"
			},
			{
				label: "tier.premium.f3",
				level: "yes"
			},
			{
				label: "tier.premium.f4",
				level: "yes"
			},
			{
				label: "tier.premium.f5",
				level: "yes"
			},
			{
				label: "tier.premium.f6",
				level: "yes"
			},
			{
				label: "tier.premium.f7",
				level: "yes"
			},
			{
				label: "tier.premium.f8",
				level: "yes"
			},
			{
				label: "tier.premium.f9",
				level: "yes"
			}
		]
	}
};
function FeatureRow({ label, level }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "shrink-0",
			children: [
				level === "yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400" }),
				level === "partial" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5 text-amber-400" }),
				level === "no" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 text-white/45" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `text-[13px] leading-snug ${level === "no" ? "text-white/45 line-through" : level === "partial" ? "text-white/70" : "text-white/85"}`,
			children: label
		})]
	});
}
function HRTiers() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	const [open, setOpen] = (0, import_react.useState)(null);
	const tiers = [
		{
			k: "trial",
			featured: false,
			Icon: Shield,
			offset: "md:mt-4"
		},
		{
			k: "basic",
			featured: false,
			Icon: Building2,
			offset: "md:mt-0"
		},
		{
			k: "pro",
			featured: true,
			Icon: Zap,
			offset: "md:-mt-4"
		},
		{
			k: "premium",
			featured: false,
			Icon: Sparkles,
			offset: "md:mt-4"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hr",
		className: "bg-[var(--ec-teal)] py-16 sm:py-20 md:py-24 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: fadeUp,
					className: "mb-8 max-w-2xl sm:mb-10 md:mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-6 bg-[var(--ec-coral-soft)]" }), t("hr.title")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight text-balance md:text-4xl",
							children: t("hr.sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-white/65",
							children: t("hr.clickHint")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: staggerParent,
					className: "grid gap-4 md:grid-cols-4 items-start",
					children: tiers.map(({ k, featured, Icon, offset }) => {
						const isOpen = open === k;
						const data = TIER_DATA[k];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							whileHover: isOpen ? void 0 : { y: -4 },
							transition: springTransition,
							className: `rounded-2xl transition-colors duration-300 ${offset} ${isOpen || featured ? "bg-[var(--ec-coral)] shadow-2xl shadow-black/25 ring-1 ring-white/20" : "bg-white/5 ring-1 ring-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : k),
								className: "w-full rounded-2xl text-left p-6 transition-transform active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-4.5 w-4.5",
												style: {
													width: 18,
													height: 18
												}
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5",
											children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4 text-white/40" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-white/40" })
										})]
									}),
									featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-3 mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/90",
										children: t("hr.mostPopular")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: t(`tier.${k}`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-1 text-sm ${isOpen || featured ? "text-white/80" : "text-white/50"}`,
										children: t(`tier.${k}.d`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `mt-4 grid grid-cols-2 gap-2 text-[11px] ${isOpen || featured ? "text-white/75" : "text-white/45"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
												" ",
												data.seats.replace("Up to ", "≤ ").replace(" employees", "")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
												" ",
												data.sla
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mt-3 text-[11px] font-semibold uppercase tracking-widest ${isOpen || featured ? "text-white/90" : "text-white/35"}`,
										children: data.price
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									maxHeight: isOpen ? "600px" : "0px",
									overflow: "hidden",
									transition: "max-height 0.35s ease"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-6 pb-6 pt-1 border-t border-white/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `mb-3 text-[10px] uppercase tracking-widest ${isOpen || featured ? "text-white/60" : "text-white/30"}`,
											children: t("tier.included")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-0.5",
											children: data.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
												label: t(f.label),
												level: f.level
											}, f.label))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `mt-4 rounded-xl px-3.5 py-2.5 text-[12px] ${isOpen || featured ? "bg-white/15" : "bg-white/[0.06]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: isOpen || featured ? "text-white/60" : "text-white/35",
												children: [
													t("tier.agent.label"),
													":",
													" "
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: isOpen || featured ? "text-white/90" : "text-white/65",
												children: t(data.agent)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#request",
											className: `mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${isOpen || featured ? "bg-white text-[var(--ec-coral)] hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20"}`,
											children: [
												t("tier.cta"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
											]
										})
									]
								})
							})]
						}, k);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/45",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400" }),
								" ",
								t("tier.legend.included")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5 text-amber-400" }),
								" ",
								t("tier.legend.partial")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 text-white/45" }),
								" ",
								t("tier.legend.notIncluded")
							]
						})
					]
				})
			]
		})
	});
}
function FAQ() {
	const { t } = useCareLang();
	const { fadeUp, staggerParent } = useSectionMotion();
	const items = [
		1,
		2,
		3,
		4,
		5,
		6
	].map((n) => ({
		id: n,
		q: t(`faq.q${n}`),
		a: t(`faq.a${n}`)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-white py-16 sm:py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t("faq.eyebrow"),
				title: t("faq.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: staggerParent,
				className: "grid gap-x-10 gap-y-8 md:grid-cols-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "border-t border-[var(--ec-teal)]/10 pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base text-[var(--ec-ink)]",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-[var(--ec-muted)]",
						children: item.a
					})]
				}, item.id))
			})]
		})
	});
}
var schema = objectType({
	name: stringType().min(2, "Required"),
	contact: stringType().min(3, "Required"),
	company: stringType().optional(),
	category: enumType(CARE_CATEGORIES),
	subject: stringType().min(2, "Required"),
	details: stringType().min(5, "Please add a few words")
});
function RequestForm() {
	const { t } = useCareLang();
	const { submitCareRequest } = useCarePortal();
	const { fadeUp } = useSectionMotion();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			contact: "",
			company: "",
			category: "Housing",
			subject: "",
			details: ""
		}
	});
	const onSubmit = (v) => {
		setSubmitting(true);
		const r = submitCareRequest({
			category: v.category,
			subject: v.subject,
			details: v.details,
			guestName: v.name,
			guestContact: v.contact
		});
		toast.success(t("form.success", { ref: r.id }));
		form.reset();
		setSubmitting(false);
	};
	const inputCls = "w-full rounded-xl border border-[var(--ec-teal)]/12 bg-[var(--ec-sand)]/50 px-3.5 py-2.5 text-sm text-[var(--ec-ink)] outline-none transition focus:border-[var(--ec-teal)] focus:bg-white focus:ring-2 focus:ring-[var(--ec-teal)]/12";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "request",
		className: "bg-[var(--ec-sand-warm)] py-16 sm:py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 sm:gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: fadeUp,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Request",
					title: t("form.title"),
					sub: t("form.sub")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[var(--ec-muted)]",
					children: [
						t("form.haveAccount"),
						"?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/care/login",
							className: "text-[var(--ec-teal)] underline underline-offset-2 hover:text-[var(--ec-teal-soft)]",
							children: t("nav.login")
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: fadeUp,
				onSubmit: form.handleSubmit(onSubmit),
				className: "relative overflow-hidden rounded-2xl border border-[var(--ec-teal)]/8 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_20px_50px_-24px_rgba(11,107,71,0.25)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.name"),
							error: form.formState.errors.name?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								...form.register("name")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.contact"),
							error: form.formState.errors.contact?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								...form.register("contact")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.company"),
							hint: t("form.companyHint"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								...form.register("company")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.category"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls,
								...form.register("category"),
								children: CARE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: c
								}, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.subject"),
							error: form.formState.errors.subject?.message,
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								...form.register("subject")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.details"),
							error: form.formState.errors.details?.message,
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 5,
								className: inputCls,
								...form.register("details")
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: submitting,
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ec-teal)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--ec-teal)]/20 transition hover:bg-[var(--ec-teal-light)] hover:shadow-[var(--ec-teal)]/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ec-teal)]/50 disabled:opacity-60 disabled:active:scale-100",
					children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						t("form.submit"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					] })
				})]
			})]
		})
	});
}
function Field({ label, hint, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--ec-muted)]",
				children: label
			}),
			children,
			hint && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-[var(--ec-muted)]/70",
				children: hint
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-[var(--ec-coral)]",
				children: error
			})
		]
	});
}
function Footer() {
	const { t } = useCareLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[var(--ec-teal-deep)] py-16 text-white/65",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-center mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: with_logo_default,
						alt: "WITH",
						width: 28,
						height: 28,
						loading: "lazy",
						decoding: "async",
						className: "h-7 w-auto brightness-0 invert opacity-70"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base font-semibold tracking-widest text-[var(--ec-coral-soft)]",
						children: "CARE"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed max-w-xs",
					children: t("footer.tagline")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "transition hover:text-white",
							children: t("nav.how")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "transition hover:text-white",
							children: t("nav.services")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hr",
							className: "transition hover:text-white",
							children: t("nav.hr")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							className: "transition hover:text-white",
							children: t("nav.faq")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#request",
							className: "transition hover:text-white",
							children: t("nav.request")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/care/login",
							className: "transition hover:text-white",
							children: t("nav.login")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/with-property",
							className: "transition hover:text-white",
							children: "WithProperty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/care/privacy",
							className: "transition hover:text-white",
							children: t("footer.privacy")
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-white/30",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" WITH Care · Ho Chi Minh City · hello@withcare.example"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portal",
					className: "text-xs text-white/30 transition hover:text-white/60 underline underline-offset-2",
					children: "← Back to Portal Hub"
				})]
			})]
		})
	});
}
function EmployeeCarePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ec-theme min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrainOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HRTiers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { EmployeeCarePageWrapper as component };
