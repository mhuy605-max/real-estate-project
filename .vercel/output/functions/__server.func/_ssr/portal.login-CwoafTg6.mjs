import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { B as EyeOff, Q as ChevronUp, T as Lock, Z as CircleAlert, at as Building2, dt as ArrowLeft, tt as ChevronDown, z as Eye } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal } from "./store-Ckbp1fQa.mjs";
import { n as WithLogo, r as pt, t as PortalLangSwitcher } from "./portalTranslations-BjcHVlWO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.login-CwoafTg6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { state, login } = usePortal();
	const { lang } = useLang();
	const T = pt(lang).login;
	const navigate = useNavigate();
	const [uid, setUid] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [shake, setShake] = (0, import_react.useState)(false);
	const [showDemo, setShowDemo] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (state.session) navigate({
			to: state.session.role === "admin" ? "/portal/admin" : state.session.role === "staff" ? "/portal/staff" : "/portal/investor",
			replace: true
		});
	}, [state.session, navigate]);
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setLoading(true);
		await new Promise((r) => setTimeout(r, 600));
		const res = login(uid, pw);
		setLoading(false);
		if (!res.ok) {
			setError(res.reason === "Invalid Credentials" ? T.errorInvalid : T.errorDisabled);
			setShake(true);
			setTimeout(() => setShake(false), 600);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center bg-[#080808] px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(20,167,108,0.07) 0%, transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.025]",
					style: {
						backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
						backgroundSize: "64px 64px"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 right-5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalLangSwitcher, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 left-5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portal",
					className: "inline-flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), T.returnToProperty]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .5,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative w-full max-w-[400px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: shake ? { x: [
						0,
						-8,
						8,
						-6,
						6,
						-3,
						3,
						0
					] } : { x: 0 },
					transition: { duration: .55 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/[0.08] bg-[#0e0e0e] shadow-[0_32px_80px_rgba(0,0,0,0.5)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-white/[0.06] px-8 py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#14a76c]/10 ring-1 ring-[#14a76c]/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-[#14a76c]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-semibold text-white/90 tracking-tight",
										children: "WithProperty"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/35 tracking-[0.15em] uppercase mt-0.5",
										children: "Owner Portal"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
											variant: "dark",
											showWordmark: false,
											size: 28
										})
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-8 py-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-7",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-[18px] font-semibold text-white tracking-[-0.02em]",
										children: T.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-white/38 mt-1",
										children: T.subtitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSubmit,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "uid",
												className: "block text-[11px] tracking-[0.1em] uppercase text-white/45 font-medium",
												children: T.idLabel
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "uid",
												autoComplete: "username",
												value: uid,
												onChange: (e) => setUid(e.target.value),
												placeholder: T.idPlaceholder,
												disabled: loading,
												required: true,
												className: "w-full h-10 rounded-lg border border-white/[0.1] bg-[#161616] px-3.5 text-[13px] text-white/90 placeholder:text-white/22 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#181818] disabled:opacity-50"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "pw",
												className: "block text-[11px] tracking-[0.1em] uppercase text-white/45 font-medium",
												children: T.passwordLabel
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "pw",
													type: showPw ? "text" : "password",
													autoComplete: "current-password",
													value: pw,
													onChange: (e) => setPw(e.target.value),
													disabled: loading,
													required: true,
													className: "w-full h-10 rounded-lg border border-white/[0.1] bg-[#161616] px-3.5 pr-10 text-[13px] text-white/90 placeholder:text-white/22 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#181818] disabled:opacity-50"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowPw((v) => !v),
													className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",
													tabIndex: -1,
													"aria-label": showPw ? T.hidePassword : T.showPassword,
													children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-[15px] w-[15px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-[15px] w-[15px]" })
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
											transition: { duration: .18 },
											className: "overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/[0.08] px-3.5 py-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[12px] text-red-400 leading-snug",
													children: error
												})]
											})
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: loading || !uid || !pw,
											className: "mt-1 w-full flex items-center justify-center gap-2 h-10 text-[12px] tracking-[0.1em] uppercase font-semibold bg-[#14a76c] text-white rounded-lg hover:bg-[#0f8a59] active:bg-[#0d7a51] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150",
											children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" }), T.verifying] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), T.loginBtn] })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-white/[0.06] pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setShowDemo((v) => !v),
										className: "flex w-full items-center justify-center gap-1.5 text-[11px] text-white/28 hover:text-white/55 transition-colors",
										children: [T.demoCredentials, showDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showDemo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 space-y-2",
											children: [
												[
													"noah",
													"noah123",
													T.roles.admin,
													"#14a76c"
												],
												[
													"sara",
													"sara123",
													T.roles.staff,
													"#a3e4c8"
												],
												[
													"kim",
													"kim123",
													T.roles.platinum,
													"#d4af37"
												],
												[
													"lee",
													"lee123",
													T.roles.gold,
													"#e8c98a"
												]
											].map(([u, p, role, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-white/75 font-medium",
															children: u
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-white/20",
															children: "/"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-white/50",
															children: p
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] tracking-wide font-medium",
													style: { color },
													children: role
												})]
											}, u))
										})
									}) })]
								})
							]
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { LoginPage as component };
