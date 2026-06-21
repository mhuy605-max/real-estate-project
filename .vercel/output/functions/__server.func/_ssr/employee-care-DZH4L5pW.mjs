import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as CarePortalProvider, s as useCarePortal, t as CARE_CATEGORIES } from "./store-BM69R9gw.mjs";
import { n as useCareLang, t as CareLangProvider } from "./i18n-B5WUMUco.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { C as Languages, D as House, I as Ellipsis, M as FileText, O as HeartHandshake, T as KeyRound, V as Compass, it as ArrowRight, k as GraduationCap, l as Sparkles, m as Plane, s as Stethoscope } from "../_libs/lucide-react.mjs";
import { a as objectType, i as enumType, o as stringType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employee-care-DZH4L5pW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmployeeCarePageWrapper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarePortalProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeCarePage, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		richColors: true,
		position: "top-right"
	})] }) });
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal, .reveal-left");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("visible");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
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
			className: `rounded-full px-2.5 py-1 uppercase tracking-wide transition-all ${lang === l ? "bg-[var(--ec-coral)] text-white shadow-sm" : "text-white/60 hover:text-white"}`,
			children: l
		}, l))]
	});
}
function Nav() {
	const { t } = useCareLang();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-30 transition-all duration-300 ${scrolled ? "bg-[var(--ec-teal-deep)]/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/employee-care",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: with_logo_default,
						alt: "WITH",
						className: "h-8 w-auto brightness-0 invert opacity-90"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-widest text-[var(--ec-coral-soft)]",
						children: "CARE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 text-sm md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "opacity-70 transition hover:opacity-100",
							children: t("nav.how")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "opacity-70 transition hover:opacity-100",
							children: t("nav.services")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hr",
							className: "opacity-70 transition hover:opacity-100",
							children: t("nav.hr")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#request",
							className: "opacity-70 transition hover:opacity-100",
							children: t("nav.request")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePicker, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portal",
							className: "hidden rounded-full bg-[var(--ec-coral)] px-4 py-2 text-xs font-medium text-white shadow-md shadow-[var(--ec-coral)]/25 transition hover:bg-[#d96a4f] sm:inline-flex",
							children: "Portal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/with-property",
							className: "hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white sm:inline-flex",
							children: "WithProperty"
						})
					]
				})
			]
		})
	});
}
function Hero() {
	const { t } = useCareLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[var(--ec-teal-deep)] pt-36 pb-32 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(65% 55% at 15% 25%, rgba(224,122,95,0.22) 0%, transparent 70%), radial-gradient(55% 55% at 85% 85%, rgba(45,140,140,0.28) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.04]",
				style: {
					backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
					backgroundSize: "200px 200px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: with_logo_default,
					alt: "",
					className: "w-[28%] max-w-xs brightness-0 invert opacity-[0.12] select-none"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--ec-coral-soft)] anim-fade-in delay-100",
						children: t("hero.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl leading-[1.05] tracking-tight md:text-6xl md:leading-[1.02] anim-fade-up delay-200",
						children: t("hero.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-white/65 anim-fade-up delay-300",
						children: t("hero.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3 anim-fade-up delay-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#request",
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--ec-coral)] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--ec-coral)]/30 transition hover:bg-[#d96a4f] hover:shadow-[var(--ec-coral)]/45",
							children: [
								t("hero.cta.request"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hr",
							className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10",
							children: t("hero.cta.hr")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap gap-4 anim-fade-in delay-600",
						children: [
							{
								label: "4 Service Categories",
								accent: "var(--ec-coral-soft)"
							},
							{
								label: "Pre-arrival to Renewal",
								accent: "#7dd3d1"
							},
							{
								label: "EN · KO · VI",
								accent: "var(--ec-coral-soft)"
							}
						].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: chip.accent }
							}), chip.label]
						}, chip.label))
					})
				] }) })
			})
		]
	});
}
function SectionHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 max-w-2xl reveal",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-6 bg-[var(--ec-coral)]" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl tracking-tight text-[var(--ec-ink)] md:text-4xl",
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
		src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
		alt: "Modern apartment in Ho Chi Minh City",
		label: "Housing"
	},
	{
		src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
		alt: "Paperwork and documents",
		label: "Paperwork"
	},
	{
		src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
		alt: "Healthcare consultation",
		label: "Healthcare"
	},
	{
		src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
		alt: "Children at international school",
		label: "Schooling"
	}
];
function PhotoStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[var(--ec-teal-deep)] py-10 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-4 px-6 md:grid md:grid-cols-4 md:max-w-7xl md:mx-auto",
			children: CARE_PHOTOS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal relative min-w-[72vw] md:min-w-0 flex-shrink-0 overflow-hidden rounded-2xl aspect-[4/3] group",
				style: { transitionDelay: `${i * 80}ms` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.src,
						alt: p.alt,
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
	useReveal();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "bg-[var(--ec-sand)] py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("how.title"),
				sub: t("how.sub")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: steps.map(({ icon: Icon, k }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal group relative rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[var(--ec-teal)]/25",
					style: { transitionDelay: `${i * 80}ms` },
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
				}, k))
			})]
		})
	});
}
function Services() {
	const { t } = useCareLang();
	const items = [
		{
			icon: House,
			k: "housing"
		},
		{
			icon: FileText,
			k: "paperwork"
		},
		{
			icon: Stethoscope,
			k: "medical"
		},
		{
			icon: GraduationCap,
			k: "school"
		},
		{
			icon: Sparkles,
			k: "settle"
		},
		{
			icon: Ellipsis,
			k: "other"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-white py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Services",
				title: t("svc.title"),
				sub: t("svc.sub")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-[var(--ec-teal)]/10 bg-[var(--ec-teal)]/8 md:grid-cols-2 lg:grid-cols-3",
				children: items.map(({ icon: Icon, k }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal group bg-white p-7 transition-all duration-300 hover:bg-[var(--ec-sand)]",
					style: { transitionDelay: `${i * 60}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ec-teal)]/8 text-[var(--ec-teal)] transition group-hover:bg-[var(--ec-teal)]/15 group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-[var(--ec-ink)]",
							children: t(`svc.${k}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[var(--ec-muted)]",
							children: t(`svc.${k}.d`)
						})
					]
				}, k))
			})]
		})
	});
}
function HRTiers() {
	const { t } = useCareLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hr",
		className: "bg-[var(--ec-teal)] py-24 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ec-coral-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-6 bg-[var(--ec-coral-soft)]" }), t("hr.title")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight md:text-4xl",
						children: t("hr.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-white/65",
						children: t("hr.sub")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					{
						k: "trial",
						featured: false
					},
					{
						k: "basic",
						featured: false
					},
					{
						k: "pro",
						featured: true
					},
					{
						k: "premium",
						featured: false
					}
				].map(({ k, featured }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `reveal rounded-2xl p-7 transition-all duration-300 ${featured ? "bg-[var(--ec-coral)] text-white shadow-2xl shadow-black/25 ring-1 ring-white/20 scale-[1.02]" : "bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:-translate-y-1"}`,
					style: { transitionDelay: `${i * 80}ms` },
					children: [
						featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-3 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/90",
							children: "Most Popular"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: t(`tier.${k}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-sm ${featured ? "text-white/85" : "text-white/55"}`,
							children: t(`tier.${k}.d`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-6 text-xs ${featured ? "text-white/75" : "text-white/40"}`,
							children: "Sales-assisted onboarding"
						})
					]
				}, k))
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
		className: "bg-[var(--ec-sand-warm)] py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-left",
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "reveal rounded-2xl border border-[var(--ec-teal)]/8 bg-white p-7 shadow-md shadow-[var(--ec-teal)]/5",
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: submitting,
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ec-teal)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--ec-teal)]/20 transition hover:bg-[var(--ec-teal-light)] hover:shadow-[var(--ec-teal)]/30 disabled:opacity-60",
					children: [
						t("form.submit"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
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
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-center mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: with_logo_default,
						alt: "WITH",
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
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ec-theme min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HRTiers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { EmployeeCarePageWrapper as component };
