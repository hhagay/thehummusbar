import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, d as Facebook, o as Menu, t as X, u as Instagram } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-DlUY722x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "The Hummus Bar",
	shortName: "Hummus Bar",
	tagline: "Good Food. Good Mood.",
	cuisine: "Mediterranean Kosher",
	phone: "718-381-6550",
	phoneHref: "tel:+17183816550",
	email: "hello@thehummusbar.com",
	emailHref: "mailto:hello@thehummusbar.com",
	instagram: "https://www.instagram.com/hummusbarnyc/",
	facebook: "https://www.facebook.com/hummusbarnyc",
	tiktok: "https://www.tiktok.com/@hummusbarnyc",
	yelp: "https://www.yelp.com/biz/hummus-bar-brooklyn"
};
var LOCATIONS = [{
	id: "flatbush",
	name: "Flatbush",
	address: "1202 Avenue J",
	city: "Brooklyn, NY 11230",
	note: "Original kitchen, off East 12th Street",
	maps: "https://maps.google.com/?q=1202+Avenue+J+Brooklyn+NY+11230"
}, {
	id: "crown-heights",
	name: "Crown Heights",
	address: "325 Kingston Avenue",
	city: "Brooklyn, NY 11213",
	note: "Second location, next to Weinstein's",
	maps: "https://maps.google.com/?q=325+Kingston+Avenue+Brooklyn+NY"
}];
var HOURS = [
	{
		days: "Sunday – Thursday",
		time: "12:00 PM – 12:00 AM"
	},
	{
		days: "Friday",
		time: "11:00 AM – 3:00 PM"
	},
	{
		days: "Saturday",
		time: "Closed for Shabbos"
	}
];
var MENU = [
	{
		id: "hummus-plates",
		title: "Hummus Plates",
		blurb: "All hummus plates are served with warm pita, pickles, and house sauces.",
		items: [
			{
				id: "tahini",
				name: "Hummus Tahini",
				description: "Creamy house hummus topped with tahini and a hard-boiled egg.",
				price: 14.95,
				dietary: "pareve",
				popular: true
			},
			{
				id: "chickpeas",
				name: "Hummus with Warm Chickpeas",
				description: "Creamy house hummus topped with warm seasoned chickpeas and a hard-boiled egg.",
				price: 14.95,
				dietary: "pareve",
				image: "/food/hero-hummus.jpg"
			},
			{
				id: "fava",
				name: "Hummus with Fava Beans",
				description: "Creamy house hummus topped with slow-cooked fava beans.",
				price: 15.95,
				dietary: "vegetarian"
			},
			{
				id: "mushroom",
				name: "Mushroom Hummus",
				description: "Creamy house hummus topped with sauteed mushrooms and onions.",
				price: 16.95,
				dietary: "vegetarian",
				image: "/food/mushroom.jpg"
			},
			{
				id: "shakshuka-hummus",
				name: "Hummus Shakshuka",
				description: "Creamy house hummus topped with shakshuka and eggs.",
				price: 17.95,
				dietary: "pareve",
				image: "/food/shakshuka.jpg",
				popular: true
			},
			{
				id: "sloppy",
				name: "Sloppy Joe Hummus",
				description: "Creamy house hummus topped with savory seasoned ground beef.",
				price: 19.95,
				dietary: "meat"
			},
			{
				id: "merguez-hummus",
				name: "Merguez Sausage Hummus",
				description: "Creamy house hummus topped with grilled, spiced beef sausages.",
				price: 19.95,
				dietary: "meat",
				image: "/food/merguez.jpg"
			},
			{
				id: "baby-chicken-hummus",
				name: "Baby Chicken Hummus",
				description: "Creamy house hummus topped with tender grilled boneless chicken thigh pieces.",
				price: 20.95,
				dietary: "meat",
				image: "/food/chicken.jpg",
				popular: true
			},
			{
				id: "falafel-hummus",
				name: "Falafel Hummus",
				description: "Creamy house hummus served with crisp, house-made falafel.",
				price: 17.95,
				dietary: "vegetarian",
				image: "/food/falafel.jpg",
				popular: true
			}
		]
	},
	{
		id: "platters",
		title: "Platters",
		items: [
			{
				id: "grilled-chicken-platter",
				name: "Grilled Baby Chicken Platter",
				description: "Grilled boneless chicken thighs served with rice, chopped Israeli salad, and fries.",
				price: 23.95,
				dietary: "meat",
				image: "/food/chicken.jpg"
			},
			{
				id: "beef-kebab",
				name: "Beef Kebab Platter",
				description: "Seasoned grilled beef kebabs served with rice, chopped Israeli salad, and fries.",
				price: 24.95,
				dietary: "meat",
				image: "/food/kebab.jpg",
				popular: true
			},
			{
				id: "merguez-platter",
				name: "Merguez Sausage Platter",
				description: "Grilled spiced beef sausages served with rice, chopped Israeli salad, and fries.",
				price: 23.95,
				dietary: "meat",
				image: "/food/merguez.jpg"
			},
			{
				id: "schnitzel",
				name: "Chicken Schnitzel Platter",
				description: "Crispy breaded chicken breast served with rice, chopped Israeli salad, and fries.",
				price: 23.95,
				dietary: "meat"
			},
			{
				id: "arayes",
				name: "Beef Arayes Platter",
				description: "Crispy pita stuffed with seasoned ground beef, served with rice, chopped Israeli salad, and fries.",
				price: 24.95,
				dietary: "meat"
			},
			{
				id: "shakshuka",
				name: "Shakshuka",
				description: "Eggs simmered in a spiced tomato and pepper sauce, served with tahini and chopped Israeli salad.",
				price: 18.95,
				dietary: "pareve",
				image: "/food/shakshuka.jpg"
			},
			{
				id: "falafel-platter",
				name: "Falafel Platter",
				description: "House-made falafel served with tahini, fries, and chopped Israeli salad.",
				price: 18.95,
				dietary: "vegetarian",
				image: "/food/falafel.jpg"
			}
		]
	},
	{
		id: "vegetarian",
		title: "Vegetarian",
		items: [{
			id: "veg-sausage",
			name: "House-Made Vegetarian Sausage Hummus",
			description: "Creamy house hummus topped with our house-made vegetarian sausages.",
			price: 18.95,
			dietary: "vegetarian"
		}, {
			id: "veg-shawarma",
			name: "Vegetarian Shawarma Hummus",
			description: "Creamy house hummus topped with sauteed soy strips and onions, seasoned shawarma-style.",
			price: 18.95,
			dietary: "vegetarian"
		}]
	},
	{
		id: "salads",
		title: "Salads",
		items: [
			{
				id: "king",
				name: "The King Salad",
				description: "Cucumber, tomato, onion, tahini, warm chickpeas, hard-boiled egg, parsley, and walnuts.",
				price: 16.95,
				dietary: "pareve",
				popular: true
			},
			{
				id: "quinoa",
				name: "Quinoa & Roasted Sweet Potato Salad",
				description: "Quinoa, roasted sweet potato, green onion, arugula, and almonds.",
				price: 15.95,
				dietary: "vegetarian",
				image: "/food/quinoa.jpg"
			},
			{
				id: "fattoush",
				name: "Fattoush Salad",
				description: "Tomato, cucumber, hot pepper, red onion, radish, mint, parsley, toasted pita, and za'atar.",
				price: 15.95,
				dietary: "vegetarian",
				image: "/food/fattoush.jpg"
			}
		]
	},
	{
		id: "sides",
		title: "Sides",
		items: [{
			id: "fries",
			name: "French Fries",
			description: "Golden, crispy French fries.",
			price: 6.95,
			dietary: "pareve"
		}, {
			id: "home-fries",
			name: "Home Fries",
			description: "Crispy seasoned potato cubes.",
			price: 7.95,
			dietary: "pareve"
		}]
	},
	{
		id: "dessert",
		title: "Dessert",
		items: [{
			id: "malabi",
			name: "Coconut Malabi",
			description: "Chilled pareve coconut pudding with rosewater syrup, pistachios, and coconut.",
			price: 8.95,
			dietary: "pareve",
			image: "/food/malabi.jpg"
		}]
	}
];
function formatPrice(n) {
	return `$${n.toFixed(2)}`;
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/catering",
		label: "Catering"
	},
	{
		to: "/reservations",
		label: "Reservations"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-lime text-ink hover:bg-lime-hot",
			cream: "bg-cream text-ink hover:bg-cream-2",
			outline: "border border-line bg-transparent text-fg hover:border-lime hover:text-lime",
			ghost: "text-fg hover:text-lime",
			dark: "bg-olive text-cream hover:bg-olive-2"
		},
		size: {
			sm: "h-10 px-4 text-xs rounded-sm",
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-sm rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function TikTokIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 3c.4 2.6 1.9 4.6 4.5 5.1v3.1c-1.6.1-3.1-.4-4.5-1.3v6.6c0 3.5-2.8 6.3-6.4 6.3S1.7 19.9 1.7 16.4 4.6 10 8.1 10c.4 0 .8 0 1.2.1v3.3c-.4-.1-.8-.2-1.2-.2-1.8 0-3.2 1.5-3.2 3.2s1.4 3.3 3.2 3.3 3.2-1.5 3.2-3.3V3h3.2Z" })
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo-mark.png",
						alt: "",
						className: "size-10 rounded-full object-cover ring-1 ring-line"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-[13px] font-semibold tracking-[0.22em] text-cream",
							children: "THE HUMMUS BAR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-[10px] uppercase tracking-[0.22em] text-muted sm:block",
							children: SITE.tagline
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("flex h-11 items-center px-3 text-xs font-medium uppercase tracking-[0.16em] transition-colors", active ? "text-lime" : "text-muted hover:text-cream"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.phoneHref,
							className: cn(buttonVariants({
								variant: "outline",
								size: "sm"
							}), "hidden sm:inline-flex"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), "Call"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reservations",
							className: cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex"),
							children: "Reserve"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "lg:hidden px-2",
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-ink lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-4 py-3",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: cn("flex min-h-12 items-center border-b border-line text-sm uppercase tracking-[0.16em]", pathname === item.to ? "text-lime" : "text-cream"),
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: SITE.phoneHref,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						size: "lg",
						children: ["Call ", SITE.phone]
					})
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo-wide.png",
						alt: "The Hummus Bar",
						className: "mb-5 h-24 w-auto rounded-md object-contain bg-cream p-2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm leading-relaxed text-muted",
						children: "Brooklyn Mediterranean kosher kitchen. House hummus, grilled platters, and fresh salads — built for a good mood."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-cream/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"1202 Avenue J",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Brooklyn, NY 11230"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"325 Kingston Avenue",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Brooklyn, NY 11213"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-lime hover:underline",
							href: SITE.phoneHref,
							children: SITE.phone
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime",
						children: "Connect"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-cream hover:border-lime hover:text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.facebook,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-cream hover:border-lime hover:text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.tiktok,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "TikTok",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-cream hover:border-lime hover:text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokIcon, { className: "size-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs uppercase tracking-[0.18em] text-muted",
						children: "Glatt kosher · Rabbi Gornish"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line py-5 text-center text-[11px] uppercase tracking-[0.18em] text-muted",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" The Hummus Bar · Good food. Good mood."
			]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-ink text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PageShell as a, cn as c, MENU as i, formatPrice as l, HOURS as n, SITE as o, LOCATIONS as r, buttonVariants as s, Button as t };
