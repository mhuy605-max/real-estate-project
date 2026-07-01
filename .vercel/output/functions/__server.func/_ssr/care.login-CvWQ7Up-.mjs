import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal } from "./i18n-BNcuN0TD.mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { B as EyeOff, M as HeartHandshake, Q as ChevronUp, T as Lock, Z as CircleAlert, dt as ArrowLeft, tt as ChevronDown, z as Eye } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { r as CareLangSwitcher } from "./DashboardShell-BQbJfDoA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.login-CvWQ7Up-.js
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
		await new Promise((r) => setTimeout(r, 600));
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
		style: { background: "#060f10" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(14,60,62,0.55) 0%, transparent 70%),radial-gradient(ellipse 50% 40% at 15% 80%, rgba(224,122,95,0.06) 0%, transparent 60%),radial-gradient(ellipse 40% 35% at 85% 15%, rgba(20,130,120,0.05) 0%, transparent 60%)" }
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangSwitcher, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 left-5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/employee-care",
					className: "inline-flex items-center gap-1.5 text-[11px] text-white/28 hover:text-white/55 transition-colors tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), t("login.back")]
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
						className: "rounded-2xl border border-white/[0.07] bg-[#0a1e1f] shadow-[0_32px_80px_rgba(0,0,0,0.6)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-white/[0.06] px-8 py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#e07a5f]/[0.12] ring-1 ring-[#e07a5f]/[0.22]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4 text-[#e07a5f]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-semibold text-white/90 tracking-tight",
										children: "WithCare"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/30 tracking-[0.15em] uppercase mt-0.5",
										children: t("login.tag")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: with_logo_default,
											alt: "WITH",
											className: "h-7 w-auto brightness-0 invert opacity-60"
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
										children: t("login.title")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-white/35 mt-1",
										children: t("login.subtitle")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: submit,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "uid",
												className: "block text-[11px] tracking-[0.1em] uppercase text-white/40 font-medium",
												children: t("login.userId")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "uid",
												autoComplete: "username",
												value: uid,
												onChange: (e) => setUid(e.target.value),
												placeholder: t("login.userIdPlaceholder"),
												disabled: loading,
												required: true,
												className: "w-full h-10 rounded-lg border border-white/[0.09] bg-[#0d2526] px-3.5 text-[13px] text-white/90 placeholder:text-white/20 outline-none transition-all duration-150 focus:border-[#e07a5f]/45 focus:bg-[#0f2829] disabled:opacity-50"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "pw",
												className: "block text-[11px] tracking-[0.1em] uppercase text-white/40 font-medium",
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
													className: "w-full h-10 rounded-lg border border-white/[0.09] bg-[#0d2526] px-3.5 pr-10 text-[13px] text-white/90 placeholder:text-white/20 outline-none transition-all duration-150 focus:border-[#e07a5f]/45 focus:bg-[#0f2829] disabled:opacity-50"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowPw((v) => !v),
													className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/28 hover:text-white/58 transition-colors",
													tabIndex: -1,
													children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-[15px] w-[15px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-[15px] w-[15px]" })
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
											transition: { duration: .18 },
											className: "overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2.5 rounded-lg border border-[#e07a5f]/25 bg-[#e07a5f]/[0.08] px-3.5 py-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 text-[#e07a5f] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[12px] text-[#e07a5f] leading-snug",
													children: err
												})]
											})
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: loading || !uid || !pw,
											className: "mt-1 w-full flex items-center justify-center gap-2 h-10 text-[12px] tracking-[0.1em] uppercase font-semibold bg-[#e07a5f] text-white rounded-lg hover:bg-[#d46f54] active:bg-[#c4644a] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150",
											children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" }), t("login.verifying")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), t("login.signIn")] })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-white/[0.06] pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setShowDemo((v) => !v),
										className: "flex w-full items-center justify-center gap-1.5 text-[11px] text-white/25 hover:text-white/50 transition-colors",
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
											className: "mt-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 space-y-2",
											children: [
												[
													"noah",
													"noah123",
													"Admin",
													"#e07a5f"
												],
												[
													"sara",
													"sara123",
													"Staff",
													"#7dd3ca"
												],
												[
													"kim",
													"kim123",
													"Employee",
													"#a3c4bc"
												],
												[
													"lee",
													"lee123",
													"Employee",
													"#a3c4bc"
												]
											].map(([u, p, role, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-white/72 font-medium",
															children: u
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-white/18",
															children: "/"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-white/45",
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
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/portal/login",
										className: "text-[11px] text-white/25 hover:text-white/50 transition-colors",
										children: t("login.wpLink")
									})
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
export { CareLoginPage as component };
