import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { AddToCart } from "@/components/add-to-cart";
import { buttonVariants } from "@/components/ui/button";
import { findMenuItem } from "@/lib/cart";
import { useCart } from "@/lib/cart-context";
import { MENU, type Dietary, formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/order")({ component: OrderPage });

const FILTERS: { id: "all" | Dietary; label: string }[] = [
  { id: "all", label: "All" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "pareve", label: "Pareve" },
  { id: "meat", label: "Meat" },
];

function OrderPage() {
  const [filter, setFilter] = useState<"all" | Dietary>("all");
  const { lines, count, total, setQty, remove } = useCart();

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
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Pickup</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">Order</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Add plates to the cart, then check out for pickup on Greenway. Pay at
            the counter. Every hummus plate comes with warm pita, pickles, and house sauces.
          </p>
        </div>
      </section>

      <div className="sticky top-14 z-30 border-b border-line bg-ink/90 backdrop-blur-md sm:top-[4.5rem]">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
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
          <Link
            to="/cart"
            className={cn(buttonVariants({ size: "sm" }), "ml-auto shrink-0")}
          >
            Cart {count ? `· ${count}` : ""}
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <nav className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="inline-flex min-h-11 items-center hover:text-lime">
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
              <ul className="grid gap-4">
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
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface p-5 lg:sticky lg:top-32">
          <h2 className="font-display text-2xl font-semibold text-cream">Cart</h2>
          {!lines.length ? (
            <p className="mt-3 text-sm text-muted">Add a plate. Quantity starts at 1.</p>
          ) : (
            <ul className="mt-4 divide-y divide-line">
              {lines.map((line) => {
                const item = findMenuItem(line.id);
                if (!item) return null;
                return (
                  <li key={line.id} className="flex items-start justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm text-cream">{item.name}</p>
                      <p className="mt-1 text-xs text-muted">
                        {line.qty} × {formatPrice(item.price)}
                      </p>
                      <div className="mt-2 flex gap-1">
                        <button
                          type="button"
                          className="inline-flex size-11 items-center justify-center text-lime"
                          aria-label="Increase"
                          onClick={() => setQty(line.id, line.qty + 1)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="inline-flex size-11 items-center justify-center text-muted hover:text-cream"
                          aria-label="Decrease"
                          onClick={() => (line.qty <= 1 ? remove(line.id) : setQty(line.id, line.qty - 1))}
                        >
                          −
                        </button>
                      </div>
                    </div>
                    <p className="shrink-0 tabular-nums text-sm text-lime">
                      {formatPrice(item.price * line.qty)}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="tabular-nums text-cream">{formatPrice(total)}</span>
          </div>
          <Link
            to="/cart"
            className={cn(buttonVariants(), "mt-5 w-full", !count && "pointer-events-none opacity-40")}
          >
            Checkout
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
