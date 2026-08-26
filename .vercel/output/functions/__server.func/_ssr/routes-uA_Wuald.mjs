import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, i as ShieldCheck, l as Leaf, r as Sparkles } from "../_libs/lucide-react.mjs";
import { a as PageShell, c as cn, i as MENU, l as formatPrice, n as HOURS, o as SITE, r as LOCATIONS, s as buttonVariants } from "./layout-DlUY722x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uA_Wuald.js
var import_jsx_runtime = require_jsx_runtime();
var featured = MENU[0].items.filter((i) => i.popular).slice(0, 4);
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88dvh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/food/hero-hummus.jpg",
					alt: "House hummus with olive oil, chickpeas, and pita",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-xs font-medium uppercase tracking-[0.28em] text-lime",
							children: "Mediterranean · Kosher · Brooklyn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-7xl",
							children: [
								"Good food.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Good mood."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg",
							children: "House hummus, grilled platters, and bright salads from a kitchen that takes kosher seriously and flavor personally."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/menu",
								className: cn(buttonVariants({ size: "lg" })),
								children: ["View the menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reservations",
								className: cn(buttonVariants({
									variant: "outline",
									size: "lg"
								})),
								children: "Reserve a table"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6",
				children: [
					{
						icon: Leaf,
						title: "Healthy by habit",
						body: "Chickpeas, tahini, herbs, and grilled proteins — plates that feel as good as they taste."
					},
					{
						icon: ShieldCheck,
						title: "Kosher kitchen",
						body: "Supervised under Rabbi Gornish. Meat and pareve menus, Shabbos-aware hours."
					},
					{
						icon: Sparkles,
						title: "Made in house",
						body: "Hummus, falafel, sauces, and vegetarian sausages come off our line, not a truck."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mt-0.5 size-5 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-cream",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.body
					})] })]
				}, item.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.24em] text-lime",
					children: "The lineup"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-semibold text-cream",
					children: "Signature plates"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					className: cn(buttonVariants({ variant: "outline" })),
					children: "Full menu"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-glow)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-surface-2",
						children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "size-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/food/hero-hummus.jpg",
							alt: "",
							className: "size-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-cream",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "shrink-0 tabular-nums text-sm text-lime",
								children: formatPrice(item.price)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: item.description
						})]
					})]
				}, item.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/food/interior.jpg",
				alt: "Dining room",
				className: "h-full min-h-[320px] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-cream px-6 py-16 text-ink sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-olive",
						children: "Two kitchens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-tight",
						children: [
							"Flatbush original.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Crown Heights next."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-sm leading-relaxed text-olive",
						children: "Same house hummus, same neon energy, two Brooklyn corners. Walk in for a plate or book the room for a night that actually feeds people."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-5",
						children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.16em]",
								children: loc.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									loc.address,
									", ",
									loc.city
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: loc.maps,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-1 inline-flex min-h-11 items-center text-sm font-medium text-olive-2 underline-offset-4 hover:underline",
								children: "Directions"
							})
						] }, loc.id))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.24em] text-lime",
					children: "Hours"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold text-cream",
					children: "When we fire the pita"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-cream",
							children: row.days
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm tabular-nums text-muted",
							children: row.time
						})]
					}, row.days))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted",
					children: "Hours shift around yom tov — call ahead on holiday weeks."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-surface p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.24em] text-lime",
						children: "Tonight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold text-cream",
						children: "Walk in or book it"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: [
							"Hungry now? Call ",
							SITE.phone,
							". Planning a table, a sheva brachos, or office lunch? We hold seats and send catering."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneHref,
							className: cn(buttonVariants()),
							children: "Call the kitchen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catering",
							className: cn(buttonVariants({ variant: "outline" })),
							children: "Catering"
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
