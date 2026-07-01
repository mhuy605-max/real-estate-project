import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as with_logo_black_default } from "./with-logo-black-CurIuk3w.mjs";
import { M as HeartHandshake, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.privacy-fLcSe69z.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "What we collect",
		body: "Full name, contact details, company affiliation, and the settlement request details you or your HR team submit through this site or the Care portal — housing preferences, paperwork status, and appointment notes tied to your request."
	},
	{
		title: "Why we collect it",
		body: "Solely to coordinate your relocation: matching you with a WITH Care agent, scheduling housing viewings and appointments, and tracking paperwork (TRC, tax code, work permit) status on your behalf."
	},
	{
		title: "Who can see it",
		body: "Your assigned WITH Care agent, your company's designated HR contact (for the fields relevant to the contract tier), and, where required, the government offices processing your paperwork. We do not sell or share data with unrelated third parties."
	},
	{
		title: "How long we keep it",
		body: "Request and settlement records are retained for the duration of your active contract plus 12 months, after which they are deleted unless you or your HR team request earlier removal."
	},
	{
		title: "Your choices",
		body: "You can ask your WITH Care agent or your HR contact to review, correct, or delete your data at any time. Guest submissions (no account) can be removed by contacting hello@withcare.example with your request ID."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ec-theme min-h-screen bg-[var(--ec-sand)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-[var(--ec-teal)]/10 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/employee-care",
					className: "inline-flex items-center gap-2 text-sm text-[var(--ec-muted)] transition hover:text-[var(--ec-ink)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "WITH Care"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: with_logo_black_default,
						alt: "WITH",
						className: "h-6 w-auto opacity-80"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4 text-[var(--ec-coral)]" })]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-[var(--ec-coral)]",
					children: "Legal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl tracking-tight text-[var(--ec-ink)] md:text-4xl",
					children: "Privacy & Data Policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-[var(--ec-muted)]",
					children: [
						"Last updated",
						" ",
						(/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
							year: "numeric",
							month: "long"
						}),
						". This page explains what WITH Care collects when you submit a settlement request or use the Care portal, and how that information is handled."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-8",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-[var(--ec-teal)]/10 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg text-[var(--ec-ink)]",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-[var(--ec-muted)]",
							children: s.body
						})]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--ec-muted)]",
						children: [
							"Questions about your data? Contact",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@withcare.example",
								className: "text-[var(--ec-teal)] underline underline-offset-2 hover:text-[var(--ec-teal-soft)]",
								children: "hello@withcare.example"
							}),
							"."
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
