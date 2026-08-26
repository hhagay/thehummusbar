import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageShell, o as SITE, t as Button } from "./layout-DlUY722x.mjs";
import { n as Label, r as Textarea, t as Input } from "./input-CBVG5Gzw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catering-BH8OuThz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PACKAGES = [
	{
		name: "Hummus bar",
		price: "From $18 / guest",
		detail: "Three hummus toppings, pita, pickles, Israeli salad, falafel."
	},
	{
		name: "Grill table",
		price: "From $28 / guest",
		detail: "Chicken or kebab platters, rice, salad, hummus, fries, sauces."
	},
	{
		name: "Simcha spread",
		price: "From $36 / guest",
		detail: "Full platters plus vegetarian shawarma, fattoush, malabi."
	}
];
function CateringPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget).entries());
		const existing = JSON.parse(localStorage.getItem("hb-catering") || "[]");
		existing.push({
			...data,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem("hb-catering", JSON.stringify(existing));
		setSent(true);
		e.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[48dvh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/food/catering.jpg",
					alt: "Catering spread",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[48dvh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.24em] text-lime",
						children: "Feed the room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl font-semibold text-cream",
						children: "Catering"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-muted",
				children: "Office lunches, sheva brachos, bris, and weeknight dinners that should not taste like a tray from nowhere. Kosher, Mediterranean, and actually hot when it lands."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold text-cream",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-lime",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: p.detail
						})
					]
				}, p.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-cream",
					children: "Request a quote"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						"Tell us the date, headcount, and whether you need meat, pareve, or both. Drop-off in Brooklyn is our default. Call ",
						SITE.phone,
						" for same-week events."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-line bg-ink p-6",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-cream",
						children: "Quote request saved. We will follow up by email. If the event is inside 72 hours, call the kitchen."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c-name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "c-name",
								name: "name",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "c-email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "c-email",
									name: "email",
									type: "email",
									required: true
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "c-phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "c-phone",
									name: "phone",
									type: "tel",
									required: true
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "c-date",
									children: "Event date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "c-date",
									name: "date",
									type: "date",
									required: true
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "c-guests",
									children: "Headcount"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "c-guests",
									name: "guests",
									type: "number",
									min: 8,
									defaultValue: 20,
									required: true
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c-notes",
								children: "What are we feeding?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "c-notes",
								name: "notes",
								placeholder: "Office lunch, meat platters, drop-off on Kingston…"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								children: "Send request"
							})
						]
					})
				})]
			})
		})
	] });
}
//#endregion
export { CateringPage as component };
