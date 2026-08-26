import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageShell, r as LOCATIONS } from "./layout-DlUY722x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-qYaDn6UB.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/food/interior.jpg",
					alt: "",
					className: "h-[42dvh] w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.24em] text-lime",
						children: "Our house"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl font-semibold text-cream",
						children: "The Hummus Bar"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-cream",
					children: "Brooklyn, plate first"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted",
					children: "We started with one obsession: hummus that actually tastes like someone stood over the tahini. The rest of the menu grew around that bowl — falafel fried to order, merguez with real heat, salads that still crunch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "The kitchen is Mediterranean and kosher. That is not a marketing line. It is how we buy, how we cook, and how we clock out for Shabbos. Guests who keep kosher and guests who just want a better plate sit at the same tables."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "Healthy is the default, not a side menu. Chickpeas, herbs, olive oil, grilled chicken, and vegetables do most of the work. If you want fries with that, we will not argue."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-cream p-8 text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo-wide.png",
						alt: "The Hummus Bar logo",
						className: "mb-6 w-full max-w-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-olive",
						children: "Good food. Good mood."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cuisine: Mediterranean kosher" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Supervision: Rabbi Gornish" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Style: house hummus, grilled platters, salads" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Locations: Flatbush & Crown Heights" })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "The bowl",
						d: "Hummus whipped daily. Tahini, lemon, garlic, and enough olive oil to shine."
					},
					{
						n: "02",
						t: "The fire",
						d: "Chicken, kebabs, and merguez off the grill. Schnitzel when you need the crunch."
					},
					{
						n: "03",
						t: "The table",
						d: "Israeli salad, fattoush, quinoa, malabi. The meal should end as bright as it started."
					}
				].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tabular-nums text-lime",
						children: b.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl font-semibold text-cream",
						children: b.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: b.d
					})
				] }, b.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-cream",
				children: "Find us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 md:grid-cols-2",
				children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-lime",
							children: loc.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-lg text-cream",
							children: [
								loc.address,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								loc.city
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: loc.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: loc.maps,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 inline-flex min-h-11 items-center text-sm text-lime hover:underline",
							children: "Open in Maps"
						})
					]
				}, loc.id))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
