import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { s as useCarePortal } from "./store-BM69R9gw.mjs";
import { n as useCareLang } from "./i18n-B5WUMUco.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { F as EyeOff, P as Eye, X as ChevronDown, at as ArrowLeft, q as ChevronUp, x as Lock } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { r as CareLangSwitcher } from "./DashboardShell-3PxWNer-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.login-CtkWIkxS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CareLoginPage() {
	const { login } = useCarePortal();
	const { t } = useCareLang();
	const nav = useNavigate();
	const [uid, setUid] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [shake, setShake] = (0, import_react.useState)(false);
	const [showDemo, setShowDemo] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setErr(null);
		setLoading(true);
		await new Promise((r) => setTimeout(r, 500));
		const u = login(uid, pw);
		setLoading(false);
		if (!u) {
			setErr(t("login.error"));
			setShake(true);
			setTimeout(() => setShake(false), 600);
			return;
		}
		if (u.role === "admin") nav({ to: "/care/admin" });
		else if (u.role === "staff") nav({ to: "/care/staff" });
		else nav({ to: "/care/employee" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center px-4 py-12",
		style: { background: "linear-gradient(160deg, #071619 0%, #0a2021 55%, #071619 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 right-5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangSwitcher, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px]",
					style: { background: "radial-gradient(circle, rgba(224,122,95,0.07) 0%, transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-40 -right-20 h-96 w-96 rounded-full blur-[100px]",
					style: { background: "radial-gradient(circle, rgba(45,130,130,0.09) 0%, transparent 70%)" }
				})]
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
					className: "rounded-lg border border-white/[0.08] bg-[#0d2526] p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: with_logo_default,
									alt: "WITH",
									className: "h-12 w-auto brightness-0 invert opacity-90"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-[#e07a5f]/40" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] uppercase tracking-[0.25em] text-[#e07a5f]/70",
											children: t("login.tag")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-[#e07a5f]/40" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 text-[18px] font-semibold text-white tracking-[-0.01em]",
									children: t("login.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1.5",
									children: t("login.subtitle")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "uid",
										className: "block text-[11px] tracking-[0.12em] uppercase text-white/50 font-medium",
										children: t("login.userId")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "uid",
										autoComplete: "username",
										value: uid,
										onChange: (e) => setUid(e.target.value),
										placeholder: t("login.userIdPlaceholder"),
										disabled: loading,
										required: true,
										className: "w-full h-10 rounded bg-[#142829] border border-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/55"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "pw",
										className: "block text-[11px] tracking-[0.12em] uppercase text-white/50 font-medium",
										children: t("login.password")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "pw",
											type: showPw ? "text" : "password",
											autoComplete: "current-password",
											value: pw,
											onChange: (e) => setPw(e.target.value),
											placeholder: t("login.passwordPlaceholder"),
											disabled: loading,
											required: true,
											className: "w-full h-10 rounded bg-[#142829] border border-white/10 px-3 py-2 pr-10 text-sm text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/55"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPw((v) => !v),
											className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",
											tabIndex: -1,
											children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
										className: "rounded border border-[#e07a5f]/30 bg-[#e07a5f]/10 px-3 py-2.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-[#e07a5f]",
											children: err
										})
									})
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading || !uid || !pw,
									className: "mt-2 w-full flex items-center justify-center gap-2 py-2.5 text-[12px] tracking-[0.12em] uppercase font-semibold bg-[#e07a5f] text-white rounded hover:bg-[#d96a4f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }), t("login.verifying")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), t("login.signIn")] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-white/[0.07] pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setShowDemo((v) => !v),
								className: "flex w-full items-center justify-center gap-1.5 text-[11px] text-white/30 hover:text-white/55 transition-colors",
								children: [t("login.demo"), showDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
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
											"Admin"
										],
										[
											"sara",
											"sara123",
											"Staff"
										],
										[
											"kim",
											"kim123",
											"Employee"
										],
										[
											"lee",
											"lee123",
											"Employee"
										]
									].map(([u, p, role]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-white/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-white/80 font-medium",
												children: u
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/25 mx-1",
												children: "/"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-white/65",
												children: p
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/25 mx-1.5",
												children: "—"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: role })
										]
									}, u))
								})
							}) })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/employee-care",
						className: "inline-flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/55 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), t("login.back")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal/login",
						className: "text-[11px] text-white/30 hover:text-white/55 transition-colors",
						children: t("login.wpLink")
					})]
				})]
			})
		]
	});
}
//#endregion
export { CareLoginPage as component };
