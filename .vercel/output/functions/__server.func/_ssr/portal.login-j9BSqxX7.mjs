import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as EyeOff, P as Eye, X as ChevronDown, at as ArrowLeft, q as ChevronUp, x as Lock } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as useLang } from "./LangContext-BsxfAWbA.mjs";
import { a as usePortal } from "./store-Ckbp1fQa.mjs";
import { t as Input } from "./input-BIucxNrH.mjs";
import { n as WithLogo, r as pt, t as PortalLangSwitcher } from "./portalTranslations-D9VevV8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.login-j9BSqxX7.js
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
		await new Promise((r) => setTimeout(r, 500));
		const res = login(uid, pw);
		setLoading(false);
		if (!res.ok) {
			setError(res.reason === "Invalid Credentials" ? T.errorInvalid : T.errorDisabled);
			setShake(true);
			setTimeout(() => setShake(false), 600);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center px-4 py-12 bg-[#0a0a0a]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#14a76c]/[0.06] blur-[120px]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalLangSwitcher, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .45,
					ease: "easeOut"
				},
				className: "relative w-full max-w-[380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "rounded-lg border border-white/[0.08] bg-[#141414] p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithLogo, {
									variant: "dark",
									showWordmark: false,
									size: 52,
									animate: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-[18px] font-semibold text-white tracking-[-0.01em]",
									children: T.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] tracking-[0.2em] uppercase text-white/45 mt-1.5",
									children: T.subtitle
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "uid",
										className: "block text-[11px] tracking-[0.12em] uppercase text-white/55 font-medium",
										children: T.idLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "uid",
										autoComplete: "username",
										value: uid,
										onChange: (e) => setUid(e.target.value),
										placeholder: T.idPlaceholder,
										disabled: loading,
										required: true,
										className: "bg-[#1e1e1e] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-10"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "pw",
										className: "block text-[11px] tracking-[0.12em] uppercase text-white/55 font-medium",
										children: T.passwordLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "pw",
											type: showPw ? "text" : "password",
											autoComplete: "current-password",
											value: pw,
											onChange: (e) => setPw(e.target.value),
											className: "bg-[#1e1e1e] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-10 pr-10",
											disabled: loading,
											required: true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPw((v) => !v),
											className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/65 transition-colors",
											tabIndex: -1,
											"aria-label": showPw ? T.hidePassword : T.showPassword,
											children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
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
									transition: { duration: .2 },
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded border border-[#d9534f]/30 bg-[#d9534f]/10 px-3 py-2.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-[#d9534f]",
											children: error
										})
									})
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "w-full flex items-center justify-center gap-2 py-2.5 text-[12px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] disabled:opacity-50 transition-colors mt-2",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }), T.verifying] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), T.loginBtn] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-white/[0.07] pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setShowDemo((v) => !v),
								className: "flex w-full items-center justify-center gap-1.5 text-[11px] text-white/35 hover:text-white/60 transition-colors",
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
									className: "mt-3 rounded bg-white/[0.04] border border-white/[0.07] px-4 py-3 space-y-1.5",
									children: [
										[
											"noah",
											"noah123",
											T.roles.admin
										],
										[
											"sara",
											"sara123",
											T.roles.staff
										],
										[
											"kim",
											"kim123",
											T.roles.platinum
										],
										[
											"lee",
											"lee123",
											T.roles.gold
										]
									].map(([u, p, role]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-white/55",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-white/80 font-medium",
												children: u
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/30 mx-1",
												children: "/"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-white/70",
												children: p
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/30 mx-1.5",
												children: "—"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: role })
										]
									}, u))
								})
							}) })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/with-property",
						className: "inline-flex items-center gap-1.5 text-[11px] text-white/35 hover:text-white/60 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), T.returnToProperty]
					})
				})]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
