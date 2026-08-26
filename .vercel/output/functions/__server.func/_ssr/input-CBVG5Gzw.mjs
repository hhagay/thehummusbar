import "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn } from "./layout-DlUY722x.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full rounded-md border border-line bg-surface px-4 text-sm text-fg placeholder:text-muted", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted", className),
		...props
	});
}
//#endregion
export { Label as n, Textarea as r, Input as t };
