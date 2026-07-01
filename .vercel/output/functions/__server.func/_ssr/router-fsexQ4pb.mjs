import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as CarePortalProvider, r as CareLangProvider, t as CARE_CATEGORIES } from "./i18n-C-udbzCl.mjs";
import { a as objectType, i as enumType, o as stringType } from "../_libs/zod.mjs";
import { t as LangProvider } from "./LangContext-BsxfAWbA.mjs";
import { t as PortalProvider } from "./store-Ckbp1fQa.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-fsexQ4pb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D_e-jlbc.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error(error, { boundary: "root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "WITH" },
			{
				name: "description",
				content: "Pham Tri Real Estate Project"
			},
			{
				name: "author",
				content: "Pham Tri"
			},
			{
				property: "og:title",
				content: "WITH"
			},
			{
				property: "og:description",
				content: "Pham Tri Real Estate Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarePortalProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-right"
		})] }) }) }) })
	});
}
var $$splitComponentImporter$14 = () => import("./with-property-CfMrjLOl.mjs");
var Route$14 = createFileRoute("/with-property")({
	head: () => ({ meta: [
		{ title: "With Property — Cross-Border Real Estate Expertise You Can Trust" },
		{
			name: "description",
			content: "With Property: 20+ years of experience in Vietnam helping investors, students, and expats find the right property. Korean, English, Vietnamese. 100% Free Brokerage."
		},
		{
			property: "og:title",
			content: "With Property — Cross-Border Real Estate Expertise"
		},
		{
			property: "og:description",
			content: "Cross-Border Real Estate Value, Partnering With You Every Step of the Way."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./portal-BCVPKtxU.mjs");
var Route$13 = createFileRoute("/portal")({
	head: () => ({ meta: [
		{ title: "WITH Owner Portal" },
		{
			name: "description",
			content: "Private asset management access for WITH owners."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./employee-care-DfYnU1GU.mjs");
var Route$12 = createFileRoute("/employee-care")({
	head: () => ({ meta: [
		{ title: "WITH Care — Settlement Support for Your Team in Vietnam" },
		{
			name: "description",
			content: "Relocation concierge for foreign teams in Vietnam — housing, paperwork, healthcare, schools."
		},
		{
			property: "og:title",
			content: "WITH Care — Settlement Support"
		},
		{
			property: "og:description",
			content: "Housing, paperwork, healthcare, schools — handled, from pre-arrival to renewal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
objectType({
	name: stringType().min(2, "Required"),
	contact: stringType().min(3, "Required"),
	company: stringType().optional(),
	category: enumType(CARE_CATEGORIES),
	subject: stringType().min(2, "Required"),
	details: stringType().min(5, "Please add a few words")
});
var $$splitComponentImporter$11 = () => import("./care-Do9SD9mk.mjs");
var Route$11 = createFileRoute("/care")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./routes-BqZaR1Cj.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "WITH — Pham Tri : Sovereign Capital | Zone 4 Can Tho Investor Relations" },
		{
			name: "description",
			content: "Institutional-grade sovereign capital gateway positioning Can Tho Zone 4 as Southern Vietnam's last integrated investment ecosystem."
		},
		{
			property: "og:title",
			content: "WITH — Pham Tri : Sovereign Capital"
		},
		{
			property: "og:description",
			content: "The Last Sovereign Growth Corridor of Southern Vietnam."
		},
		{
			property: "og:image",
			content: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./portal.index-Cg_XkbK3.mjs");
var Route$9 = createFileRoute("/portal/")({
	head: () => ({ meta: [{ title: "WITH — Portal" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./portal.staff-DIz8p6jL.mjs");
var Route$8 = createFileRoute("/portal/staff")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./portal.login-CwoafTg6.mjs");
var Route$7 = createFileRoute("/portal/login")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./portal.investor-BrjG8v9Q.mjs");
var Route$6 = createFileRoute("/portal/investor")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./portal.admin-CByHIvo3.mjs");
var Route$5 = createFileRoute("/portal/admin")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./care.staff-DB2qCtLk.mjs");
var Route$4 = createFileRoute("/care/staff")({
	head: () => ({ meta: [{ title: "Staff — WITH Care" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./care.privacy-fLcSe69z.mjs");
var Route$3 = createFileRoute("/care/privacy")({
	head: () => ({ meta: [{ title: "Privacy & Data Policy — WITH Care" }, {
		name: "description",
		content: "How WITH Care collects, uses, and retains employee and HR contact data."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./care.login-SsLHQwp_.mjs");
var Route$2 = createFileRoute("/care/login")({
	head: () => ({ meta: [{ title: "Sign in — WITH Care" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./care.employee-a61p64NX.mjs");
var Route$1 = createFileRoute("/care/employee")({
	head: () => ({ meta: [{ title: "My Care — WITH Care" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./care.admin-BjlVHfVt.mjs");
var Route = createFileRoute("/care/admin")({
	head: () => ({ meta: [{ title: "Admin — WITH Care" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WithPropertyRoute = Route$14.update({
	id: "/with-property",
	path: "/with-property",
	getParentRoute: () => Route$15
});
var PortalRoute = Route$13.update({
	id: "/portal",
	path: "/portal",
	getParentRoute: () => Route$15
});
var EmployeeCareRoute = Route$12.update({
	id: "/employee-care",
	path: "/employee-care",
	getParentRoute: () => Route$15
});
var CareRoute = Route$11.update({
	id: "/care",
	path: "/care",
	getParentRoute: () => Route$15
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var PortalIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => PortalRoute
});
var PortalStaffRoute = Route$8.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => PortalRoute
});
var PortalLoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => PortalRoute
});
var PortalInvestorRoute = Route$6.update({
	id: "/investor",
	path: "/investor",
	getParentRoute: () => PortalRoute
});
var PortalAdminRoute = Route$5.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => PortalRoute
});
var CareStaffRoute = Route$4.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => CareRoute
});
var CarePrivacyRoute = Route$3.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => CareRoute
});
var CareLoginRoute = Route$2.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => CareRoute
});
var CareEmployeeRoute = Route$1.update({
	id: "/employee",
	path: "/employee",
	getParentRoute: () => CareRoute
});
var CareRouteChildren = {
	CareAdminRoute: Route.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => CareRoute
	}),
	CareEmployeeRoute,
	CareLoginRoute,
	CarePrivacyRoute,
	CareStaffRoute
};
var CareRouteWithChildren = CareRoute._addFileChildren(CareRouteChildren);
var PortalRouteChildren = {
	PortalAdminRoute,
	PortalInvestorRoute,
	PortalLoginRoute,
	PortalStaffRoute,
	PortalIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	CareRoute: CareRouteWithChildren,
	EmployeeCareRoute,
	PortalRoute: PortalRoute._addFileChildren(PortalRouteChildren),
	WithPropertyRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
