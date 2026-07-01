import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as useCareLang, l as useCarePortal } from "./i18n-CMzyrgwE.mjs";
import { t as with_logo_black_default } from "./with-logo-black-CurIuk3w.mjs";
import { $ as ChevronUp, B as Eye, M as HeartHandshake, Q as CircleAlert, T as Lock, V as EyeOff, ft as ArrowLeft, nt as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { r as CareLangSwitcher } from "./DashboardShell-B2q2rbIl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.login-gOn2zWAH.js
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
		style: { background: "#f6faf8" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(20,167,108,0.10) 0%, transparent 70%),radial-gradient(ellipse 50% 40% at 15% 80%, rgba(20,167,108,0.06) 0%, transparent 60%),radial-gradient(ellipse 40% 35% at 85% 15%, rgba(20,167,108,0.05) 0%, transparent 60%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.03]",
					style: {
						backgroundImage: "linear-gradient(rgba(13,31,22,1) 1px, transparent 1px),linear-gradient(90deg, rgba(13,31,22,1) 1px, transparent 1px)",
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
					className: "inline-flex items-center gap-1.5 text-[11px] text-black/35 hover:text-black/65 transition-colors tracking-wide",
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
						className: "rounded-2xl border border-black/[0.08] bg-white shadow-[0_32px_80px_rgba(13,31,22,0.14)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-black/[0.06] px-8 py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#14a76c]/[0.12] ring-1 ring-[#14a76c]/[0.22]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4 text-[#14a76c]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-semibold text-black/90 tracking-tight",
										children: "WithCare"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-black/35 tracking-[0.15em] uppercase mt-0.5",
										children: t("login.tag")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: with_logo_black_default,
											alt: "WITH",
											className: "h-7 w-auto opacity-75"
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
										className: "text-[18px] font-semibold text-black tracking-[-0.02em]",
										children: t("login.title")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-black/40 mt-1",
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
												className: "block text-[11px] tracking-[0.1em] uppercase text-black/45 font-medium",
												children: t("login.userId")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "uid",
												autoComplete: "username",
												value: uid,
												onChange: (e) => setUid(e.target.value),
												placeholder: t("login.userIdPlaceholder"),
												disabled: loading,
												required: true,
												className: "w-full h-10 rounded-lg border border-black/[0.10] bg-white px-3.5 text-[13px] text-black/90 placeholder:text-black/25 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] disabled:opacity-50"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "pw",
												className: "block text-[11px] tracking-[0.1em] uppercase text-black/45 font-medium",
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
													className: "w-full h-10 rounded-lg border border-black/[0.10] bg-white px-3.5 pr-10 text-[13px] text-black/90 placeholder:text-black/25 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] disabled:opacity-50"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowPw((v) => !v),
													className: "absolute right-3 top-1/2 -translate-y-1/2 text-black/32 hover:text-black/65 transition-colors",
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
												className: "flex items-start gap-2.5 rounded-lg border border-red-500/25 bg-red-500/[0.06] px-3.5 py-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[12px] text-red-700 leading-snug",
													children: err
												})]
											})
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: loading || !uid || !pw,
											className: "mt-1 w-full flex items-center justify-center gap-2 h-10 text-[12px] tracking-[0.1em] uppercase font-semibold bg-[#14a76c] text-white rounded-lg hover:bg-[#109c5f] active:bg-[#0c7548] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150",
											children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" }), t("login.verifying")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), t("login.signIn")] })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-black/[0.06] pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setShowDemo((v) => !v),
										className: "flex w-full items-center justify-center gap-1.5 text-[11px] text-black/30 hover:text-black/55 transition-colors",
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
											className: "mt-3 rounded-lg border border-black/[0.07] bg-black/[0.015] px-4 py-3 space-y-2",
											children: [
												[
													"noah",
													"noah123",
													"Admin",
													"#0b6b47"
												],
												[
													"sara",
													"sara123",
													"Staff",
													"#14a76c"
												],
												[
													"kim",
													"kim123",
													"Employee",
													"#3fcf94"
												],
												[
													"lee",
													"lee123",
													"Employee",
													"#3fcf94"
												]
											].map(([u, p, role, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-black/75 font-medium",
															children: u
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-black/20",
															children: "/"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[12px] text-black/48",
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
										className: "text-[11px] text-black/30 hover:text-black/55 transition-colors",
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
