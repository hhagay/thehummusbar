import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageShell, c as cn, i as MENU, l as formatPrice, s as buttonVariants } from "./layout-DlUY722x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-1AFTAZ56.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "vegetarian",
		label: "Vegetarian"
	},
	{
		id: "pareve",
		label: "Pareve"
	},
	{
		id: "meat",
		label: "Meat"
	}
];
function MenuPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const sections = (0, import_react.useMemo)(() => {
		if (filter === "all") return MENU;
		return MENU.map((section) => ({
			...section,
			items: section.items.filter((item) => item.dietary === filter)
		})).filter((s) => s.items.length);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-surface px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.24em] text-lime",
						children: "Eat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl font-semibold text-cream",
						children: "The menu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-muted",
						children: "Every hummus plate lands with warm pita, pickles, and house sauces. Meat and pareve stay in their lanes."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-30 border-b border-line bg-ink/90 backdrop-blur-md sm:top-[4.5rem]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-xs font-semibold uppercase tracking-[0.16em]", filter === f.id ? "bg-lime text-ink" : "border border-line text-muted hover:text-cream"),
					children: f.label
				}, f.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mb-10 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${s.id}`,
						className: "min-h-11 inline-flex items-center hover:text-lime",
						children: s.title
					}, s.id))
				}),
				sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: section.id,
					className: "mb-16 scroll-mt-36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 border-b border-line pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold text-cream",
							children: section.title
						}), section.blurb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: section.blurb
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-4 md:grid-cols-2",
						children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 overflow-hidden rounded-lg border border-line bg-surface p-4",
							children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "hidden size-24 shrink-0 rounded-md object-cover sm:block"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-cream",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 tabular-nums text-sm text-lime",
											children: formatPrice(item.price)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted",
										children: item.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-[10px] uppercase tracking-[0.16em] text-olive-2",
										children: [item.dietary, item.popular ? " · house favorite" : ""]
									})
								]
							})]
						}, item.id))
					})]
				}, section.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-cream p-8 text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Prefer the paper menu?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-olive",
							children: "Same kitchen list, printed. Open a page or save it for the table."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: [
								["/brand/menu-1.jpg", "Hummus plates"],
								["/brand/menu-2.jpg", "Platters & vegetarian"],
								["/brand/menu-3.jpg", "Salads, sides, dessert"]
							].map(([src, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: src,
								target: "_blank",
								rel: "noreferrer",
								className: "overflow-hidden rounded-md ring-1 ring-olive/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: label,
									className: "aspect-[3/4] w-full object-cover object-top"
								})
							}, src))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reservations",
						className: cn(buttonVariants({ size: "lg" })),
						children: "Reserve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catering",
						className: cn(buttonVariants({
							variant: "outline",
							size: "lg"
						})),
						children: "Cater this menu"
					})]
				})
			]
		})
	] });
}
//#endregion
export { MenuPage as component };
