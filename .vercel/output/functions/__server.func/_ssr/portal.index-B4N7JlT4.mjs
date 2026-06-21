import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as with_logo_default } from "./with-logo-BnTFlW0T.mjs";
import { $ as Building2, O as HeartHandshake, it as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal.index-B4N7JlT4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LABELS = {
	en: {
		tag: "Unified Platform",
		choose: "Choose your portal",
		select: "Select the platform you'd like to access",
		wp: "WithProperty",
		wpDesc: "Investor portal — asset management, ROI tracking, and property reports.",
		care: "WithCare",
		careDesc: "Employee care portal — relocation support, housing, paperwork, and settlement services.",
		enter: "Enter portal",
		unified: "EN",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH Group · Ho Chi Minh City`
	},
	vi: {
		tag: "Nền Tảng Thống Nhất",
		choose: "Chọn cổng của bạn",
		select: "Chọn nền tảng bạn muốn truy cập",
		wp: "WithProperty",
		wpDesc: "Cổng nhà đầu tư — quản lý tài sản, theo dõi ROI và báo cáo bất động sản.",
		care: "WithCare",
		careDesc: "Cổng chăm sóc nhân viên — hỗ trợ di chuyển, nhà ở, giấy tờ và dịch vụ định cư.",
		enter: "Vào cổng",
		unified: "VI",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH Group · Thành phố Hồ Chí Minh`
	},
	zh: {
		tag: "统一平台",
		choose: "选择您的门户",
		select: "请选择您要访问的平台",
		wp: "WithProperty",
		wpDesc: "投资者门户 — 资产管理、投资回报率追踪和房产报告。",
		care: "WithCare",
		careDesc: "员工关怀门户 — 搬迁支持、住房、文件和定居服务。",
		enter: "进入门户",
		unified: "ZH",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH集团 · 胡志明市`
	},
	ko: {
		tag: "통합 플랫폼",
		choose: "포털을 선택하세요",
		select: "접속할 플랫폼을 선택해 주세요",
		wp: "WithProperty",
		wpDesc: "투자자 포털 — 자산 관리, ROI 추적 및 부동산 보고서.",
		care: "WithCare",
		careDesc: "직원 케어 포털 — 이주 지원, 주거, 서류 및 정착 서비스.",
		enter: "포털 입장",
		unified: "KO",
		copy: `© ${(/* @__PURE__ */ new Date()).getFullYear()} WITH 그룹 · 호치민시`
	}
};
var LANGS = [
	{
		code: "en",
		label: "EN"
	},
	{
		code: "vi",
		label: "VI"
	},
	{
		code: "zh",
		label: "中文"
	},
	{
		code: "ko",
		label: "한국어"
	}
];
function PortalLanding() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const tx = LABELS[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(20,167,108,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 90%, rgba(224,122,95,0.07) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.03]",
				style: {
					backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
					backgroundSize: "48px 48px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 right-5 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur",
				children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLang(l.code),
					className: `rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all ${lang === l.code ? "bg-white/15 text-white" : "text-white/40 hover:text-white/70"}`,
					children: l.label
				}, l.code))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 flex flex-col items-center text-center anim-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 anim-scale-in delay-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: with_logo_default,
									alt: "WITH",
									className: "h-14 w-auto opacity-90"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-[10px] tracking-[0.3em] uppercase text-white/35 anim-fade-in delay-200",
								children: tx.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-semibold text-white tracking-tight anim-fade-up delay-200",
								children: tx.choose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/40 anim-fade-in delay-300",
								children: tx.select
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal/login",
							className: "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] p-8 transition-all duration-300 hover:border-[#14a76c]/50 hover:shadow-[0_0_32px_rgba(20,167,108,0.12)] anim-fade-up delay-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
									style: { background: "radial-gradient(ellipse at 30% 30%, rgba(20,167,108,0.07), transparent 70%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#14a76c]/10 ring-1 ring-[#14a76c]/20 transition-all group-hover:bg-[#14a76c]/15 group-hover:ring-[#14a76c]/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-[#14a76c]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold text-white",
									children: tx.wp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/45 leading-relaxed",
									children: tx.wpDesc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[#14a76c]",
									children: [
										tx.enter,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/care/login",
							className: "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] p-8 transition-all duration-300 hover:border-[#e07a5f]/50 hover:shadow-[0_0_32px_rgba(224,122,95,0.12)] anim-fade-up delay-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
									style: { background: "radial-gradient(ellipse at 30% 30%, rgba(224,122,95,0.07), transparent 70%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e07a5f]/10 ring-1 ring-[#e07a5f]/20 transition-all group-hover:bg-[#e07a5f]/15 group-hover:ring-[#e07a5f]/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-5 w-5 text-[#e07a5f]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold text-white",
									children: tx.care
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/45 leading-relaxed",
									children: tx.careDesc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[#e07a5f]",
									children: [
										tx.enter,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-center text-[11px] text-white/20 anim-fade-in delay-500",
						children: tx.copy
					})
				]
			})
		]
	});
}
//#endregion
export { PortalLanding as component };
