import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Building2, B as Construction, D as House, X as ChevronDown, a as TrendingUp, c as Star, it as ArrowRight, n as X, r as Users, rt as ArrowUpRight, v as Menu, w as Landmark, x as Lock } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { t as cn } from "./utils-CND2PRzK.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, u as Legend } from "../_libs/recharts+[...].mjs";
import { a as IMAGES, c as t, i as DropdownMenuTrigger, n as DropdownMenuContent, o as LANGUAGES, r as DropdownMenuItem, s as NAV_LINKS, t as DropdownMenu } from "./dropdown-menu-CUFlfkT8.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CaNqL0h8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Nav() {
	const { lang, setLang } = useLang();
	const tx = t(lang);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			let current = "";
			for (const link of NAV_LINKS) {
				const el = document.getElementById(link.id);
				if (el && el.getBoundingClientRect().top <= 120) current = link.id;
			}
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollTo = (id) => {
		setOpen(false);
		const el = document.getElementById(id);
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - 72;
			window.scrollTo({
				top,
				behavior: "smooth"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/85 backdrop-blur-md border-b border-white/10" : "bg-gradient-to-b from-black/70 to-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => scrollTo("top"),
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.withLogo,
						alt: "WITH",
						className: "h-9 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display tracking-[0.3em] text-sm",
						children: "WITH"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7",
					children: NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(l.id),
						className: `text-[13px] tracking-wide transition-colors ${active === l.id ? "text-[var(--emerald-brand)]" : "text-white/70 hover:text-white"}`,
						children: tx.nav.links[i]
					}, l.id))
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/with-property",
							className: "hidden sm:inline-flex items-center px-4 py-2 text-[11px] tracking-[0.2em] uppercase border border-[var(--emerald-brand)] text-[var(--emerald-brand)] font-semibold rounded-sm hover:bg-[var(--emerald-brand)] hover:text-black transition-colors",
							children: "With Property"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal",
							className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase gold-gradient text-black font-semibold rounded-sm hover:opacity-90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3" }),
								" ",
								tx.nav.secureLogin
							]
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
			className: `absolute right-0 top-0 h-full w-[82%] max-w-sm panel-dark p-8 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
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
							className: "font-display tracking-[0.3em] text-sm",
							children: "WITH"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-5",
					children: NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(l.id),
						className: "text-left text-lg font-display tracking-wide text-white/90 hover:text-[var(--emerald-brand)]",
						children: tx.nav.links[i]
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 pt-6 border-t border-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/with-property",
						className: "flex items-center justify-center gap-2 w-full px-4 py-3 text-[11px] tracking-[0.2em] uppercase border border-[var(--emerald-brand)] text-[var(--emerald-brand)] font-semibold rounded-sm hover:bg-[var(--emerald-brand)] hover:text-black transition-colors mb-6",
						onClick: () => setOpen(false),
						children: "With Property — Brokerage Services"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-2 border-t border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-eyebrow text-white/40 mb-3",
						children: "Language"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l.code),
							className: `px-3 py-1 text-xs border ${lang === l.code ? "border-[var(--emerald-brand)] text-[var(--emerald-brand)]" : "border-white/20 text-white/70"}`,
							children: l.label
						}, l.code))
					})]
				})
			]
		})]
	})] });
}
function Hero() {
	const { lang } = useLang();
	const tx = t(lang).hero;
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (el) window.scrollTo({
			top: el.getBoundingClientRect().top + window.scrollY - 72,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center",
				style: { backgroundImage: `url("${IMAGES.hero}")` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.9))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-eyebrow text-[var(--gold)] mb-6",
						children: tx.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-semibold max-w-5xl",
						children: [
							tx.title1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)]",
								children: " :"
							}),
							" ",
							tx.title2
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline w-40 my-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl md:text-2xl text-white/90 max-w-3xl",
						children: tx.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-white/65 text-base md:text-lg leading-relaxed",
						children: tx.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollTo("masterplan"),
							className: "group inline-flex items-center gap-2 bg-[var(--emerald-brand)] hover:bg-[#0e8d5a] text-white px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition",
							children: [tx.cta1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 transition group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition",
							children: tx.cta2
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex items-end justify-between text-white/50 text-xs tracking-widest uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tx.axis }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:block",
							children: tx.scroll
						})]
					})
				]
			})
		]
	});
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, subtitle, dark = false, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: center ? "text-center max-w-3xl mx-auto" : "max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `label-eyebrow ${dark ? "text-[var(--gold)]" : "text-[var(--emerald-brand)]"} mb-5`,
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `font-display text-3xl md:text-5xl font-semibold leading-tight ${dark ? "text-white" : "text-foreground"}`,
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`,
				children: subtitle
			})
		]
	});
}
function MacroVision() {
	const { lang } = useLang();
	const tx = t(lang).macro;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "macro",
		className: "panel-dark py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					dark: true,
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-5",
					children: tx.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-soft border border-white/10 hover:border-[var(--emerald-brand)]/40 transition-colors rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:w-44 flex-shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-5xl md:text-6xl text-[var(--gold)] font-light",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label-eyebrow text-white/50 mt-3",
									children: it.tag
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-3xl text-white font-medium leading-snug",
									children: it.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-white/65 leading-relaxed max-w-3xl",
									children: it.body
								})]
							})]
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-white/40 max-w-4xl leading-relaxed",
					children: tx.footer
				})
			]
		})
	});
}
function Masterplan() {
	const { lang } = useLang();
	const tx = t(lang).masterplan;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "masterplan",
		className: "py-28 md:py-36 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid md:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.masterplan,
							alt: "Masterplan skyline",
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-eyebrow text-[var(--emerald-brand)] mb-4",
							children: tx.overviewLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground/80",
							children: tx.overviewBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-4",
							children: tx.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel-dark rounded-xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl md:text-3xl text-[var(--gold)] font-semibold",
										children: m.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/60 text-xs mt-2 leading-snug",
										children: m.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/40 text-[10px] mt-1 uppercase tracking-widest",
										children: m.note
									})
								]
							}, m.label))
						})
					] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid md:grid-cols-2 gap-5",
					children: tx.districts.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group border border-border hover:border-[var(--emerald-brand)] hover:shadow-lg transition-all rounded-xl p-7 h-full bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: d[0]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xs text-[var(--gold)] tracking-widest",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label-eyebrow text-[var(--emerald-brand)] mt-2",
									children: d[1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground leading-relaxed text-sm",
									children: d[2]
								})
							]
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed",
					children: tx.footer
				})
			]
		})
	});
}
var ICONS = [
	Landmark,
	Construction,
	Building2,
	Users,
	House,
	TrendingUp
];
function CapitalFlow() {
	const { lang } = useLang();
	const tx = t(lang).capital;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "capital",
		className: "panel-dark py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					dark: true,
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: tx.stages.map((s, i) => {
						const Icon = ICONS[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel-soft border border-white/10 hover:border-[var(--gold)]/40 transition-colors rounded-2xl p-7 h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-3xl text-[var(--gold)] font-light",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[var(--emerald-brand)]" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-eyebrow text-white/40 mt-5",
										children: s.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl text-white font-medium leading-snug",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/60 text-sm leading-relaxed",
										children: s.body
									})
								]
							})
						}, i);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 border-l-4 border-[var(--gold)] bg-white/[0.03] px-6 py-5 rounded-r-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-white/80 leading-relaxed text-sm md:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)] font-medium",
								children: tx.footerHighlight
							}),
							" ",
							tx.footerBody
						]
					})
				}) })
			]
		})
	});
}
function Stars({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex gap-0.5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `w-3.5 h-3.5 ${i < n ? "fill-[var(--gold)] text-[var(--gold)]" : "text-muted-foreground/30"}` }, i))
	});
}
function Portfolio() {
	const { lang } = useLang();
	const tx = t(lang).portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "py-28 md:py-36 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-4xl text-lg text-foreground/75 leading-relaxed",
					children: tx.intro
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid lg:grid-cols-2 gap-6",
					children: tx.assets.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 2 * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-dark rounded-2xl p-8 h-full border border-white/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "label-eyebrow text-[var(--gold)]",
											children: [
												tx.assetClass,
												" ",
												a.code
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl text-white font-medium",
											children: a.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-white/50 text-sm",
											children: a.sub
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-5xl text-white/10",
										children: a.code
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-white/65 text-sm leading-relaxed",
									children: a.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm",
									children: a.data.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between border-b border-white/5 pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40 text-xs uppercase tracking-wider",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white font-medium",
											children: v
										})]
									}, k))
								})
							]
						})
					}, a.code))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid lg:grid-cols-[1fr_280px] gap-8 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border rounded-2xl overflow-hidden bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-eyebrow text-[var(--emerald-brand)]",
								children: tx.comparativeLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mt-2 font-semibold",
								children: tx.comparativeTitle
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
									className: "text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border",
									children: tx.tableHeaders.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4",
										children: h
									}, h))
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tx.ratings.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border last:border-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium",
											children: r.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: r.stability })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: r.appreciation })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: r.yield })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { n: r.liquidity })
										})
									]
								}, r.name)) })]
							})
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl overflow-hidden h-full min-h-[280px] relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: IMAGES.retail,
									alt: "Commercial retail",
									className: "absolute inset-0 w-full h-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full flex flex-col justify-end p-6 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-eyebrow text-[var(--gold)]",
										children: tx.retailLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-lg mt-2 leading-snug",
										children: tx.retailCaption
									})]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed",
					children: tx.footer
				})
			]
		})
	});
}
var TERRA_URL = "https://www.terragroup.co.kr/?zarsrc=410&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo&gidzl=g1rRLqyeanMX0rbHGJAH5gKEM5TSRP8IlbWBK55loHkt2mKBMMkS6hrSLbWFRSiUuLi1NZ7N1VjpJ2kG5G";
var BUILDING_IMAGES = [
	IMAGES.buildingA,
	IMAGES.buildingB,
	IMAGES.buildingC,
	IMAGES.buildingD
];
function Flagship() {
	const { lang } = useLang();
	const tx = t(lang).flagship;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "flagship",
		className: "panel-dark py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					dark: true,
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-12",
					children: tx.buildings.map((b, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "panel-soft border border-white/10 rounded-3xl overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-[340px] md:h-[420px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: BUILDING_IMAGES[idx],
									alt: b.name,
									className: "absolute inset-0 w-full h-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1) 40%, rgba(0,0,0,0))" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full flex flex-col justify-end p-8 md:p-12 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "label-eyebrow text-[var(--gold)]",
											children: [
												b.code,
												" · Flagship 0",
												idx + 1
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight max-w-3xl",
											children: b.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-white/70 text-sm md:text-base tracking-wide",
											children: b.stats
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:p-12 space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid lg:grid-cols-2 gap-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-eyebrow text-white/40",
										children: "Overview"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-white/75 leading-relaxed",
										children: b.overview
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-eyebrow text-[var(--emerald-brand)]",
										children: "Investment Thesis"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-white/75 leading-relaxed",
										children: b.thesis
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label-eyebrow text-white/40 mb-4",
									children: "Key Demand Drivers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid md:grid-cols-2 gap-x-8 gap-y-2",
									children: b.drivers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-white/80 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 w-1.5 h-1.5 bg-[var(--gold)] flex-shrink-0" }), d]
									}, d))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden",
									children: b.metrics.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "panel-dark p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] tracking-widest uppercase text-white/40",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-display text-xl text-[var(--gold)] font-semibold",
											children: v
										})]
									}, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 pt-2 border-t border-white/10",
									children: b.details.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-widest uppercase text-white/40",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-white font-medium text-sm",
										children: v
									})] }, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: TERRA_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "group inline-flex items-center gap-3 gold-gradient text-black px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm",
										children: [tx.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
									})
								})
							]
						})]
					}) }, b.code))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-xs text-white/40 max-w-4xl leading-relaxed",
					children: tx.footer
				})
			]
		})
	});
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
function compute({ price, years, appr, yld }) {
	const totalAssetValue = price * Math.pow(1 + appr / 100, years);
	const capitalGain = totalAssetValue - price;
	const annualRental = price * (yld / 100);
	const rentalIncome = annualRental * years;
	return {
		totalAssetValue,
		capitalGain,
		annualRental,
		rentalIncome,
		totalReturn: capitalGain + rentalIncome,
		cagr: years > 0 ? (Math.pow(totalAssetValue / price, 1 / years) - 1) * 100 : 0
	};
}
var fmt = (n) => n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(1)}K` : `$${n.toFixed(0)}`;
var fmtFull = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
}).format(n);
function RoiSimulator() {
	const { lang } = useLang();
	const tx = t(lang).roi;
	const [inp, setInp] = (0, import_react.useState)({
		price: 5e5,
		equity: 30,
		years: 10,
		appr: 6.5,
		yld: 5
	});
	const base = (0, import_react.useMemo)(() => compute(inp), [inp]);
	const conservative = (0, import_react.useMemo)(() => compute({
		...inp,
		appr: 3.5,
		yld: 4
	}), [inp]);
	const bull = (0, import_react.useMemo)(() => compute({
		...inp,
		appr: 9,
		yld: 6.5
	}), [inp]);
	const chartData = (0, import_react.useMemo)(() => {
		const arr = [];
		for (let y = 0; y <= inp.years; y++) arr.push({
			year: `Y${y}`,
			[tx.scenarios[0]]: Math.round(inp.price * Math.pow(1.035, y)),
			[tx.scenarios[1]]: Math.round(inp.price * Math.pow(1 + inp.appr / 100, y)),
			[tx.scenarios[2]]: Math.round(inp.price * Math.pow(1.09, y))
		});
		return arr;
	}, [inp, tx.scenarios]);
	const sliderDefs = [
		{
			key: "price",
			min: 5e3,
			max: 5e6,
			step: 5e3,
			format: (v) => fmtFull(v)
		},
		{
			key: "equity",
			min: 10,
			max: 50,
			step: 5,
			format: (v) => `${v}%`
		},
		{
			key: "years",
			min: 1,
			max: 25,
			step: 1,
			format: (v) => `${v} yrs`
		},
		{
			key: "appr",
			min: 1,
			max: 15,
			step: .5,
			format: (v) => `${v.toFixed(1)}%`
		},
		{
			key: "yld",
			min: 2,
			max: 10,
			step: .5,
			format: (v) => `${v.toFixed(1)}%`
		}
	];
	const metricValues = [
		{
			value: fmt(base.totalAssetValue),
			pct: `+${((base.totalAssetValue - inp.price) / inp.price * 100).toFixed(1)}%`
		},
		{
			value: fmt(base.capitalGain),
			pct: `${(base.capitalGain / inp.price * 100).toFixed(1)}%`
		},
		{
			value: `${base.cagr.toFixed(2)}%`,
			pct: `${inp.years}-yr ${tx.cagrSuffix}`
		},
		{
			value: fmt(base.rentalIncome),
			pct: `${fmt(base.annualRental)} / yr`
		},
		{
			value: fmt(base.totalReturn),
			pct: `${(base.totalReturn / inp.price * 100).toFixed(1)}% ROI`
		}
	];
	const scenarios = [
		{
			name: tx.scenarios[0],
			appr: "3.5%",
			yld: "4.0%",
			data: conservative,
			highlight: false
		},
		{
			name: tx.scenarios[1],
			appr: `${inp.appr.toFixed(1)}%`,
			yld: `${inp.yld.toFixed(1)}%`,
			data: base,
			highlight: true
		},
		{
			name: tx.scenarios[2],
			appr: "9.0%",
			yld: "6.5%",
			data: bull,
			highlight: false
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "simulator",
		className: "py-28 md:py-36 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: tx.eyebrow,
					title: tx.title,
					subtitle: tx.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid lg:grid-cols-[400px_1fr] gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-dark rounded-2xl p-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-eyebrow text-[var(--gold)]",
							children: tx.inputsLabel
						}), sliderDefs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-white/70 text-sm",
									children: tx.sliders[i].label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[var(--gold)] font-medium tabular-nums",
									children: s.format(inp[s.key])
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: s.min,
								max: s.max,
								step: s.step,
								value: [inp[s.key]],
								onValueChange: (v) => setInp((p) => ({
									...p,
									[s.key]: v[0]
								}))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[10px] text-white/30 mt-2 uppercase tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.format(s.min) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.format(s.max) })]
							})
						] }, s.key))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-3",
								children: tx.metrics.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border rounded-xl p-5 bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] tracking-widest uppercase text-muted-foreground",
											children: label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl mt-2 font-semibold tabular-nums",
											children: metricValues[i].value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[var(--emerald-brand)] mt-1 tabular-nums",
											children: metricValues[i].pct
										})
									]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel-dark rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "label-eyebrow text-[var(--gold)] mb-4",
									children: [
										tx.chartLabel,
										" · ",
										inp.years,
										"-",
										tx.yearHorizon
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-[320px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
											data: chartData,
											margin: {
												top: 10,
												right: 20,
												left: 0,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "rgba(255,255,255,0.06)" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "year",
													stroke: "rgba(255,255,255,0.4)",
													fontSize: 11
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													stroke: "rgba(255,255,255,0.4)",
													fontSize: 11,
													tickFormatter: (v) => fmt(v)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													contentStyle: {
														background: "#0f0f0f",
														border: "1px solid rgba(255,255,255,0.1)",
														borderRadius: 8
													},
													labelStyle: { color: "#fff" },
													formatter: (v) => fmtFull(v)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
													fontSize: 12,
													color: "#fff"
												} }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: tx.scenarios[0],
													stroke: "#6b7280",
													strokeWidth: 2,
													dot: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: tx.scenarios[1],
													stroke: "#d4af37",
													strokeWidth: 3,
													dot: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: tx.scenarios[2],
													stroke: "#14a76c",
													strokeWidth: 2,
													dot: false
												})
											]
										})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border rounded-2xl overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 border-b border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-eyebrow text-[var(--emerald-brand)]",
										children: tx.scenarioLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl mt-1 font-semibold",
										children: tx.scenarioTitle
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
											className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border",
											children: tx.tableHeaders.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: h
											}, h))
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: scenarios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: `border-b border-border last:border-0`,
											style: s.highlight ? { background: "rgba(212,175,55,0.08)" } : void 0,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 font-medium",
													children: [s.name, s.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ml-2 text-[10px] text-[var(--gold)] uppercase tracking-widest",
														children: tx.live
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 text-muted-foreground tabular-nums",
													children: [
														s.appr,
														" / ",
														s.yld
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 tabular-nums",
													children: fmt(s.data.totalAssetValue)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 tabular-nums",
													children: fmt(s.data.capitalGain)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 tabular-nums",
													children: fmt(s.data.rentalIncome)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 tabular-nums font-semibold",
													children: fmt(s.data.totalReturn)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 tabular-nums text-[var(--emerald-brand)] font-medium",
													children: [s.data.cagr.toFixed(2), "%"]
												})
											]
										}, s.name)) })]
									})
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xs text-muted-foreground max-w-4xl leading-relaxed",
					children: tx.disclaimer
				})
			]
		})
	});
}
function Footer() {
	const { lang } = useLang();
	const tx = t(lang);
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (el) window.scrollTo({
			top: el.getBoundingClientRect().top + window.scrollY - 72,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "panel-dark border-t border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.withLogo,
							alt: "WITH",
							className: "h-9 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display tracking-[0.3em] text-sm",
								children: "WITH"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display tracking-[0.3em] text-[11px] text-white/50",
								children: "PHAM TRI"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-white/55 text-sm max-w-md leading-relaxed",
						children: tx.footer.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-eyebrow text-white/40 mb-4",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2.5",
					children: NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(l.id),
						className: "text-white/70 hover:text-[var(--emerald-brand)] text-sm",
						children: tx.nav.links[i]
					}) }, l.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-eyebrow text-white/40 mb-4",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ir@phamtri-capital.com" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+84 292 000 0000" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-white/50 text-xs pt-3",
							children: [
								"Vo Van Kiet Boulevard",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Zone 4, Can Tho, Vietnam"
							]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tx.footer.rights }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "md:text-right max-w-xl",
					children: "Institutional allocation platform. Access and participation require verified qualified investor status under applicable jurisdictional regulations."
				})]
			})
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacroVision, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masterplan, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapitalFlow, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flagship, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoiSimulator, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
