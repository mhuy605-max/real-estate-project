import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LangContext-BsxfAWbA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LangContext = (0, import_react.createContext)({
	lang: "en",
	setLang: () => {}
});
function LangProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("en");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value: {
			lang,
			setLang
		},
		children
	});
}
function useLang() {
	return (0, import_react.useContext)(LangContext);
}
//#endregion
export { useLang as n, LangProvider as t };
