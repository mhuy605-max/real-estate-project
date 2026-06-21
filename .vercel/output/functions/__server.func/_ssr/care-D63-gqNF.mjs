import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as CarePortalProvider } from "./store-BM69R9gw.mjs";
import { t as CareLangProvider } from "./i18n-B5WUMUco.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-D63-gqNF.js
var import_jsx_runtime = require_jsx_runtime();
function CareLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareLangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarePortalProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		richColors: true,
		position: "top-right"
	})] }) });
}
//#endregion
export { CareLayout as component };
