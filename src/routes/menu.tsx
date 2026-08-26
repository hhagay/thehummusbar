import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { AddToCart } from "@/components/add-to-cart";
import { buttonVariants } from "@/components/ui/button";
import { MENU, SITE, type Dietary, formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({ component: MenuPage });

const FILTERS: { id: "all" | Dietary; label: string }[] = [
  { id: "all", label: "All" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "pareve", label: "Pareve" },
  { id: "meat", label: "Meat" },
];

function MenuPage() {
  const [filter, setFilter] = useState<"all" | Dietary>("all");

  const sections = useMemo(() => {
    if (filter === "all") return MENU;
    return MENU.map((section) => ({
      ...section,
      items: section.items.filter((item) => item.dietary === filter),
    })).filter((s) => s.items.length);
  }, [filter]);

  return (
    <PageShell>
      <section className="border-b border-line bg-surface px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Eat</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">The menu</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Walk in, or add plates to the cart for pickup. Every hummus plate comes
            with warm pita, pickles, and house sauces. Filter by vegetarian, pareve, or meat.
          </p>
          <div className="cta-row mt-6">
            <Link to="/cart" className={cn(buttonVariants())}>
              View cart
            </Link>
            <Link to="/catering" className={cn(buttonVariants({ variant: "outline" }))}>
              Trays & catering
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-14 z-30 border-b border-line bg-ink/90 backdrop-blur-md sm:top-[4.5rem]">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-xs font-semibold uppercase tracking-[0.16em]",
                filter === f.id ? "bg-lime text-ink" : "border border-line text-muted hover:text-cream",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <nav className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="min-h-11 inline-flex items-center hover:text-lime">
              {s.title}
            </a>
          ))}
        </nav>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-36">
            <div className="mb-6 border-b border-line pb-4">
              <h2 className="font-display text-3xl font-semibold text-cream">{section.title}</h2>
              {section.blurb ? <p className="mt-2 text-sm text-muted">{section.blurb}</p> : null}
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-lg border border-line bg-surface sm:flex sm:items-stretch sm:gap-4 sm:p-4"
                >
                  {item.image ? (
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface-2 sm:aspect-square sm:size-28 sm:rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full max-w-none object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1 p-4 sm:p-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-cream">{item.name}</h3>
                      <span className="shrink-0 tabular-nums text-sm text-lime">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-olive-2">
                      {item.dietary}
                      {item.popular ? " · house favorite" : ""}
                    </p>
                    <AddToCart item={item} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="rounded-xl border border-line bg-cream p-5 text-ink sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Prefer the paper menu?</h2>
          <p className="mt-2 text-sm text-olive">
            Same kitchen list, printed. Open a page or save it for the table.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["/brand/menu-1.jpg", "Hummus plates"],
              ["/brand/menu-2.jpg", "Platters & vegetarian"],
              ["/brand/menu-3.jpg", "Salads, sides, dessert"],
            ].map(([src, label]) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-md ring-1 ring-olive/20"
              >
                <img
                  src={src}
                  alt={label}
                  className="aspect-[3/4] h-auto w-full max-w-none object-cover object-top"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="cta-row mt-10">
          <a href={SITE.phoneHref} className={cn(buttonVariants({ size: "lg" }))}>
            Call {SITE.phone}
          </a>
          <Link to="/catering" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Cater this menu
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
