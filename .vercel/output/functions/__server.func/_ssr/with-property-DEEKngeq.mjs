import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime, i as Slot } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { $ as ChevronRight, C as Mail, D as Languages, E as Lightbulb, L as FileText, M as HeartHandshake, N as GraduationCap, P as Globe, T as Lock, X as CircleCheck, Z as CircleAlert, _ as Percent, at as Building2, ct as Award, d as Shield, et as ChevronLeft, g as Phone, j as House, n as X, nt as Check, o as TrendingUp, ot as Briefcase, rt as Calendar$1, st as BadgeDollarSign, t as Zap, tt as ChevronDown, x as Menu } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as objectType, o as stringType, r as dateType, t as arrayType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as useLang, t as LangProvider } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal } from "./store-Ckbp1fQa.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { a as IMAGES, c as t, i as DropdownMenuTrigger, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-Bvjr8RRW.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { l as format } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/with-property-DEEKngeq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTION_IDS$1 = [
	"why-choose",
	"segments",
	"services",
	"about",
	"contact"
];
var LANGUAGES = [
	{
		code: "en",
		label: "English"
	},
	{
		code: "ko",
		label: "한국어"
	},
	{
		code: "zh",
		label: "中文"
	},
	{
		code: "vi",
		label: "Tiếng Việt"
	}
];
function scrollToSection(id, setOpen) {
	setOpen(false);
	const el = document.getElementById(id);
	if (el) {
		const top = el.getBoundingClientRect().top + window.scrollY - 72;
		window.scrollTo({
			top,
			behavior: "smooth"
		});
	}
}
function WpNav() {
	const { lang, setLang } = useLang();
	const wp = t(lang).wp;
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 bg-[#0d0d0d]/96 backdrop-blur-md border-b border-[var(--wp-gold)]/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.withLogo,
						alt: "WITH",
						className: "h-9 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold",
						children: "WITH"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7",
					children: SECTION_IDS$1.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollToSection(id, setOpen),
						className: "text-[13px] tracking-wide text-white/70 hover:text-[var(--wp-gold)] transition-colors",
						children: wp.nav.links[i]
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
							className: "hidden md:flex items-center gap-1 text-xs tracking-widest uppercase text-white/70 hover:text-white",
							children: [
								lang.toUpperCase(),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3 h-3" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => setLang(l.code),
								children: l.label
							}, l.code))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToSection("contact", setOpen),
							className: "hidden sm:inline-flex items-center px-4 py-2 text-[11px] tracking-[0.2em] uppercase wp-gold-gradient text-[var(--wp-navy)] font-semibold rounded-sm hover:opacity-90",
							children: wp.nav.cta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal",
							className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase font-semibold rounded-sm border border-[var(--wp-gold)]/60 text-[var(--wp-gold)] hover:bg-[var(--wp-gold)]/10 hover:border-[var(--wp-gold)] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3" }), "PORTAL"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/employee-care",
							className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase font-semibold rounded-sm border border-[#e07a5f]/60 text-[#e07a5f] hover:bg-[#e07a5f]/10 hover:border-[#e07a5f] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-3 h-3" }), "WithCare"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(true),
							className: "lg:hidden p-2 text-white",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[60] lg:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`,
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: `absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[#0d0d0d] p-8 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.withLogo,
							alt: "WITH",
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold",
							children: "WITH"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5 text-white" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-5",
					children: SECTION_IDS$1.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollToSection(id, setOpen),
						className: "text-left text-lg font-display tracking-wide text-white/90 hover:text-[var(--wp-gold)]",
						children: wp.nav.links[i]
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 pt-6 border-t border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/40 text-xs uppercase tracking-widest mb-3",
						children: wp.nav.langLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l.code),
							className: `px-3 py-1 text-xs border ${lang === l.code ? "border-[var(--wp-gold)] text-[var(--wp-gold)]" : "border-white/20 text-white/70"}`,
							children: l.label
						}, l.code))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portal",
						onClick: () => setOpen(false),
						className: "inline-flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold rounded-sm border border-[var(--wp-gold)]/60 text-[var(--wp-gold)] hover:bg-[var(--wp-gold)]/10 hover:border-[var(--wp-gold)] transition-colors w-full justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3" }), "PORTAL"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-white/50 hover:text-white/80 underline underline-offset-4 text-center",
						children: "← IR Site (WITH Capital)"
					})]
				})
			]
		})]
	})] });
}
var HERO_IMAGE = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80";
function scrollTo(id) {
	const el = document.getElementById(id);
	if (el) window.scrollTo({
		top: el.getBoundingClientRect().top + window.scrollY - 72,
		behavior: "smooth"
	});
}
function WpHero() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--wp-navy)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: HERO_IMAGE,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 w-full h-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--wp-gold)] to-transparent opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--wp-gold)] to-transparent opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-3 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
								children: wp.hero.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6",
						children: wp.hero.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed",
						children: wp.hero.subheadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollTo("contact"),
							className: "wp-gold-gradient text-white px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity",
							children: wp.hero.cta1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollTo("services"),
							className: "border border-white/30 text-white px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-white/10 hover:border-white/50 transition-all",
							children: wp.hero.cta2
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-[var(--wp-border-gold)] pt-10 max-w-2xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[var(--wp-gold)] text-sm italic leading-relaxed opacity-80",
							children: [
								"\"",
								wp.hero.tagline,
								"\""
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-10 bg-white/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white/60 text-[10px] tracking-widest uppercase",
					children: "scroll"
				})]
			})
		]
	});
}
function WpReveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setTimeout(() => el.classList.add("is-visible"), delay);
				observer.unobserve(el);
			}
		}, { threshold: .12 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `wp-reveal ${className}`,
		children
	});
}
var ICONS$2 = [
	Shield,
	FileText,
	Languages,
	Zap,
	BadgeDollarSign
];
function WpWhyChoose() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why-choose",
		className: "py-24 px-6 bg-[var(--wp-bg)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
							children: wp.whyChoose.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)]",
					children: wp.whyChoose.title
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: wp.whyChoose.items.map((item, i) => {
					const Icon = ICONS$2[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group p-8 rounded-lg border border-[var(--wp-border)] hover:border-[var(--wp-border-gold)] hover:shadow-lg transition-all duration-300 bg-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full bg-[var(--wp-navy)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--wp-gold)]/15 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6 text-[var(--wp-navy)] group-hover:text-[var(--wp-gold)] transition-colors" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-[var(--wp-navy)] text-lg mb-3",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[var(--wp-text-muted)] text-sm leading-relaxed",
									children: item.body
								})
							]
						})
					}, i);
				})
			})]
		})
	});
}
var ICONS$1 = [
	TrendingUp,
	GraduationCap,
	Briefcase
];
function WpSegments() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "segments",
		className: "py-24 px-6 bg-[var(--wp-navy)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
							children: wp.segments.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-display font-bold text-white",
					children: wp.segments.title
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: wp.segments.items.map((seg, i) => {
					const Icon = ICONS$1[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[var(--wp-border-gold)] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-full bg-[var(--wp-gold)]/15 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[var(--wp-gold)]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-white text-xl",
									children: seg.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-[var(--wp-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--wp-gold)] text-xs font-semibold uppercase tracking-widest",
											children: "Goals"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: seg.goals.map((g, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-white/70 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/30",
											children: g
										}, j))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40 text-xs font-semibold uppercase tracking-widest",
											children: "Pain Points"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: seg.painPoints.map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-white/50 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/20",
											children: p
										}, j))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-400 text-xs font-semibold uppercase tracking-widest",
											children: "Solutions"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: seg.solutions.map((s, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-white/70 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400/40",
											children: s
										}, j))
									})] })
								]
							})]
						})
					}, i);
				})
			})]
		})
	});
}
var ICONS = {
	Home: House,
	Building2,
	TrendingUp
};
function WpServices() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 px-6 bg-[#f5f5f5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-3 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
							children: wp.services.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)]",
					children: wp.services.title
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-8",
				children: wp.services.items.map((svc, i) => {
					const Icon = ICONS[svc.icon] ?? House;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group bg-white rounded-lg p-10 text-center shadow-sm border border-[var(--wp-border)] hover:shadow-xl hover:border-[var(--wp-border-gold)] transition-all duration-300 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 mx-auto rounded-full bg-[var(--wp-navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--wp-navy-light)] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-8 h-8 text-[var(--wp-gold)]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-[var(--wp-navy)] text-xl mb-4",
									children: svc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[var(--wp-text-muted)] text-sm leading-relaxed flex-1",
									children: svc.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										const el = document.getElementById("contact");
										if (el) window.scrollTo({
											top: el.getBoundingClientRect().top + window.scrollY - 72,
											behavior: "smooth"
										});
									},
									className: "mt-8 wp-gold-gradient text-white px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity",
									children: wp.services.cta
								})
							]
						})
					}, i);
				})
			})]
		})
	});
}
var BADGE_ICONS = [
	Award,
	Globe,
	Percent
];
function WpAbout() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 px-6 bg-[var(--wp-bg)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
							children: wp.about.eyebrow
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)] mb-6",
						children: wp.about.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--wp-text-muted)] leading-relaxed mb-10",
						children: wp.about.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
						children: wp.about.badges.map((badge, i) => {
							const Icon = BADGE_ICONS[i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center p-5 rounded-lg bg-[var(--wp-navy)] text-white gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-7 h-7 text-[var(--wp-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold leading-snug",
									children: badge
								})]
							}, i);
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[var(--wp-navy)]/4 rounded-xl p-8 border border-[var(--wp-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-bold text-[var(--wp-navy)] text-xl mb-7",
							children: wp.about.valuesTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-5",
							children: wp.about.values.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-shrink-0 w-8 h-8 rounded-full wp-gold-gradient flex items-center justify-center text-white font-bold text-sm",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-semibold text-[var(--wp-navy)] text-sm",
									children: val.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[var(--wp-text-muted)] text-sm leading-relaxed",
									children: val.body
								})] })]
							}, i))
						})]
					})
				})]
			})
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var schema = objectType({
	name: stringType().min(1),
	phone: stringType().min(1),
	customerType: stringType().min(1),
	area: stringType().optional(),
	budget: stringType().optional(),
	propertyType: stringType().optional(),
	size: stringType().optional(),
	moveIn: dateType().optional(),
	priorities: arrayType(stringType()).optional(),
	notes: stringType().optional()
});
function WpLeadForm() {
	const { lang } = useLang();
	const fm = t(lang).wp.form;
	const { submitLead } = usePortal();
	const [moveIn, setMoveIn] = (0, import_react.useState)();
	const [priorities, setPriorities] = (0, import_react.useState)([]);
	const [calOpen, setCalOpen] = (0, import_react.useState)(false);
	const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm({ resolver: u(schema) });
	const togglePriority = (p) => {
		const next = priorities.includes(p) ? priorities.filter((x) => x !== p) : [...priorities, p];
		setPriorities(next);
		setValue("priorities", next);
	};
	const onSubmit = async (data) => {
		await new Promise((r) => setTimeout(r, 400));
		submitLead({
			name: data.name,
			phone: data.phone,
			customerType: data.customerType,
			area: data.area,
			budget: data.budget,
			propertyType: data.propertyType,
			size: data.size,
			moveIn: data.moveIn ? format(data.moveIn, "yyyy-MM-dd") : void 0,
			priorities: data.priorities,
			notes: data.notes
		});
		toast.success(fm.success);
		reset();
		setPriorities([]);
		setMoveIn(void 0);
	};
	const fieldClass = "border-[var(--wp-border)] focus-visible:ring-[var(--wp-gold)] focus-visible:border-[var(--wp-gold)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 px-6 bg-[#f5f5f5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold",
								children: fm.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wp-gold-rule" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)] mb-3",
						children: fm.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--wp-text-muted)]",
						children: fm.subtitle
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpReveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit(onSubmit),
					className: "bg-white rounded-xl shadow-sm border border-[var(--wp-border)] p-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "text-[var(--wp-navy)] font-semibold text-sm",
											children: [
												fm.labels.name,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-red-500",
													children: "*"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("name"),
											placeholder: fm.placeholders.name,
											className: fieldClass
										}),
										errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-red-500 text-xs",
											children: fm.required
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "text-[var(--wp-navy)] font-semibold text-sm",
											children: [
												fm.labels.phone,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-red-500",
													children: "*"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("phone"),
											placeholder: fm.placeholders.phone,
											className: fieldClass
										}),
										errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-red-500 text-xs",
											children: fm.required
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "text-[var(--wp-navy)] font-semibold text-sm",
											children: [
												fm.labels.customerType,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-red-500",
													children: "*"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											onValueChange: (v) => setValue("customerType", v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: fieldClass,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "—" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: fm.options.customerType.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: o,
												children: o
											}, o)) })]
										}),
										errors.customerType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-red-500 text-xs",
											children: fm.required
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[var(--wp-navy)] font-semibold text-sm",
										children: fm.labels.area
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (v) => setValue("area", v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: fieldClass,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "—" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: fm.options.area.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[var(--wp-navy)] font-semibold text-sm",
										children: fm.labels.budget
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (v) => setValue("budget", v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: fieldClass,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "—" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: fm.options.budget.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[var(--wp-navy)] font-semibold text-sm",
										children: fm.labels.propertyType
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (v) => setValue("propertyType", v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: fieldClass,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "—" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: fm.options.propertyType.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[var(--wp-navy)] font-semibold text-sm",
										children: fm.labels.size
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (v) => setValue("size", v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: fieldClass,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "—" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: fm.options.size.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[var(--wp-navy)] font-semibold text-sm",
										children: fm.labels.moveIn
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
										open: calOpen,
										onOpenChange: setCalOpen,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												className: `w-full justify-start text-left font-normal ${fieldClass} ${!moveIn ? "text-muted-foreground" : ""}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, { className: "mr-2 h-4 w-4" }), moveIn ? format(moveIn, "PPP") : "—"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
											className: "w-auto p-0",
											align: "start",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
												mode: "single",
												selected: moveIn,
												onSelect: (d) => {
													setMoveIn(d ?? void 0);
													setValue("moveIn", d ?? void 0);
													setCalOpen(false);
												},
												initialFocus: true
											})
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[var(--wp-navy)] font-semibold text-sm",
								children: fm.labels.priorities
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: fm.options.priorities.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer select-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: priorities.includes(p),
										onCheckedChange: () => togglePriority(p),
										className: "data-[state=checked]:bg-[var(--wp-gold)] data-[state=checked]:border-[var(--wp-gold)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-[var(--wp-text-muted)]",
										children: p
									})]
								}, p))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[var(--wp-navy)] font-semibold text-sm",
								children: fm.labels.notes
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								...register("notes"),
								placeholder: fm.placeholders.notes,
								rows: 3,
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: isSubmitting,
							className: "w-full wp-gold-gradient border-0 text-white font-bold tracking-[0.15em] uppercase text-sm py-3 h-auto hover:opacity-90 disabled:opacity-60",
							children: isSubmitting ? "..." : fm.submit
						})
					]
				})
			})]
		})
	});
}
var SECTION_IDS = [
	"why-choose",
	"segments",
	"services",
	"about",
	"contact"
];
function WpFooter() {
	const { lang } = useLang();
	const wp = t(lang).wp;
	function scrollTo(id) {
		const el = document.getElementById(id);
		if (el) window.scrollTo({
			top: el.getBoundingClientRect().top + window.scrollY - 72,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[var(--wp-navy)] text-white py-16 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.withLogo,
							alt: "WITH",
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold",
							children: "WITH"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-white/50 text-sm leading-relaxed italic",
						children: [
							"\"",
							wp.footer.tagline,
							"\""
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-5",
						children: wp.footer.nav
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: SECTION_IDS.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollTo(id),
							className: "text-white/60 hover:text-[var(--wp-gold)] text-sm transition-colors",
							children: wp.nav.links[i]
						}) }, id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-5",
						children: wp.footer.contact
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-white/60 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-[var(--wp-gold)] flex-shrink-0" }), wp.footer.contactPlaceholder]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-white/60 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-[var(--wp-gold)] flex-shrink-0" }), wp.footer.phonePlaceholder]
						})]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/30 text-xs",
					children: wp.footer.rights
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/employee-care",
						className: "inline-flex items-center gap-1.5 px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-semibold rounded border border-[#e07a5f]/50 text-[#e07a5f] hover:bg-[#e07a5f]/10 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-3.5 h-3.5" }), "WithCare"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-white/30 hover:text-white/60 text-xs transition-colors",
						children: "← WITH Sovereign Capital (IR Site)"
					})]
				})]
			})]
		})
	});
}
function WithPropertyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wp-theme min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpWhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpSegments, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpServices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpAbout, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpLeadForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpFooter, {})
		]
	}) });
}
//#endregion
export { WithPropertyPage as component };
