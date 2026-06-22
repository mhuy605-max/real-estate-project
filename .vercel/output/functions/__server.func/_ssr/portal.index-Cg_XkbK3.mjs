import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { M as HeartHandshake, P as Globe, at as Building2, d as Shield, ut as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.index-Cg_XkbK3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LABELS = {
	en: {
		tag: "Unified Access Portal",
		choose: "Select your portal",
		select: "Choose the platform you'd like to access today.",
		wp: "WithProperty",
		wpDesc: "Investor portal — asset management, ROI tracking, and property reports.",
		wpSub: "Investor · Admin · Staff",
		care: "WithCare",
		careDesc: "Employee care portal — relocation support, housing, paperwork, and settlement services.",
		careSub: "Employee · Staff · Admin",
		enter: "Access portal",
		secure: "Secure · Encrypted · Private",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH Group · Ho Chi Minh City`
	},
	vi: {
		tag: "Cổng Truy Cập Thống Nhất",
		choose: "Chọn cổng của bạn",
		select: "Chọn nền tảng bạn muốn truy cập hôm nay.",
		wp: "WithProperty",
		wpDesc: "Cổng nhà đầu tư — quản lý tài sản, theo dõi ROI và báo cáo bất động sản.",
		wpSub: "Nhà đầu tư · Quản trị · Nhân viên",
		care: "WithCare",
		careDesc: "Cổng chăm sóc nhân viên — hỗ trợ di chuyển, nhà ở, giấy tờ và dịch vụ định cư.",
		careSub: "Nhân viên · Chuyên viên · Quản trị",
		enter: "Truy cập cổng",
		secure: "Bảo mật · Mã hóa · Riêng tư",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH Group · Thành phố Hồ Chí Minh`
	},
	zh: {
		tag: "统一访问门户",
		choose: "选择您的门户",
		select: "请选择您今天要访问的平台。",
		wp: "WithProperty",
		wpDesc: "投资者门户 — 资产管理、投资回报率追踪和房产报告。",
		wpSub: "投资者 · 管理员 · 员工",
		care: "WithCare",
		careDesc: "员工关怀门户 — 搬迁支持、住房、文件和定居服务。",
		careSub: "员工 · 专员 · 管理员",
		enter: "进入门户",
		secure: "安全 · 加密 · 私密",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH集团 · 胡志明市`
	},
	ko: {
		tag: "통합 액세스 포털",
		choose: "포털을 선택하세요",
		select: "오늘 접속할 플랫폼을 선택해 주세요.",
		wp: "WithProperty",
		wpDesc: "투자자 포털 — 자산 관리, ROI 추적 및 부동산 보고서.",
		wpSub: "투자자 · 관리자 · 직원",
		care: "WithCare",
		careDesc: "직원 케어 포털 — 이주 지원, 주거, 서류 및 정착 서비스.",
		careSub: "직원 · 담당자 · 관리자",
		enter: "포털 접속",
		secure: "보안 · 암호화 · 비공개",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH 그룹 · 호치민시`
	}
};
var LANGS = [
	{
		code: "en",
		label: "EN",
		flag: "🇺🇸"
	},
	{
		code: "vi",
		label: "VI",
		flag: "🇻🇳"
	},
	{
		code: "zh",
		label: "中文",
		flag: "🇨🇳"
	},
	{
		code: "ko",
		label: "한국어",
		flag: "🇰🇷"
	}
];
function PortalLanding() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const tx = LABELS[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(20,167,108,0.07) 0%, transparent 65%),radial-gradient(ellipse 60% 50% at 85% 100%, rgba(224,122,95,0.06) 0%, transparent 65%),radial-gradient(ellipse 50% 40% at 50% 50%, rgba(20,167,108,0.025) 0%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-[0.028]",
						style: {
							backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
							backgroundSize: "64px 64px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(8,8,8,0.6) 100%)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 right-5 flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-1 py-1 backdrop-blur-sm",
				children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLang(l.code),
					className: `rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-150 ${lang === l.code ? "bg-white/[0.12] text-white shadow-sm" : "text-white/35 hover:text-white/65"}`,
					children: l.label
				}, l.code))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-5 left-5 flex items-center gap-2 text-white/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.2em] uppercase font-medium",
					children: "WITH Group"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-[680px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 flex flex-col items-center text-center anim-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-7 anim-scale-in delay-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: with_logo_default,
									alt: "WITH",
									className: "h-[52px] w-auto opacity-90 brightness-0 invert"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 anim-fade-in delay-150",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3 text-[#14a76c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] tracking-[0.22em] uppercase text-white/45 font-medium",
									children: tx.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[28px] font-semibold text-white tracking-[-0.02em] leading-tight anim-fade-up delay-200",
								children: tx.choose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-[13px] text-white/38 max-w-xs leading-relaxed anim-fade-in delay-300",
								children: tx.select
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal/login",
							className: "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-[#14a76c]/40 hover:bg-[#111111] hover:shadow-[0_0_48px_rgba(20,167,108,0.10)] anim-fade-up delay-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
									style: { background: "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(20,167,108,0.08), transparent 70%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#14a76c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#14a76c]/[0.1] ring-1 ring-[#14a76c]/[0.2] transition-all duration-300 group-hover:bg-[#14a76c]/[0.15] group-hover:ring-[#14a76c]/[0.35]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-[18px] w-[18px] text-[#14a76c]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[16px] font-semibold text-white tracking-[-0.01em]",
											children: tx.wp
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[10px] tracking-[0.15em] uppercase text-[#14a76c]/60 font-medium",
											children: tx.wpSub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-[13px] text-white/40 leading-relaxed",
											children: tx.wpDesc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#14a76c] tracking-wide",
												children: [tx.enter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-gradient-to-r from-[#14a76c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/care/login",
							className: "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-[#e07a5f]/40 hover:bg-[#111111] hover:shadow-[0_0_48px_rgba(224,122,95,0.10)] anim-fade-up delay-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
									style: { background: "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(224,122,95,0.08), transparent 70%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#e07a5f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07a5f]/[0.1] ring-1 ring-[#e07a5f]/[0.2] transition-all duration-300 group-hover:bg-[#e07a5f]/[0.15] group-hover:ring-[#e07a5f]/[0.35]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-[18px] w-[18px] text-[#e07a5f]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[16px] font-semibold text-white tracking-[-0.01em]",
											children: tx.care
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[10px] tracking-[0.15em] uppercase text-[#e07a5f]/60 font-medium",
											children: tx.careSub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-[13px] text-white/40 leading-relaxed",
											children: tx.careDesc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#e07a5f] tracking-wide",
												children: [tx.enter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-gradient-to-r from-[#e07a5f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })]
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-center gap-2.5 anim-fade-in delay-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-white/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] tracking-[0.18em] uppercase font-medium",
									children: tx.secure
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-8 bg-white/10" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/18",
							children: tx.copy
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { PortalLanding as component };
