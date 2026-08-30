import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { MENU, SITE, formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({ component: MenuPage });

function MenuPage() {
  return (
    <PageShell>
      <section className="border-b border-line bg-surface px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Eat</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">The menu</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Every plate, photographed. Walk in and order at the counter, or add
            plates under Order for pickup. Hummus plates come with warm pita,
            pickles, and house sauces.
          </p>
          <div className="cta-row mt-6">
            <Link to="/order" className={cn(buttonVariants())}>
              Order pickup
            </Link>
            <Link to="/catering" className={cn(buttonVariants({ variant: "outline" }))}>
              Trays & catering
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <nav className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
          {MENU.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="inline-flex min-h-11 items-center hover:text-lime">
              {s.title}
            </a>
          ))}
        </nav>

        {MENU.map((section) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-28">
            <div className="mb-6 border-b border-line pb-4">
              <h2 className="font-display text-3xl font-semibold text-cream">{section.title}</h2>
              {section.blurb ? <p className="mt-2 text-sm text-muted">{section.blurb}</p> : null}
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-lg border border-line bg-surface"
                >
                  {item.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full max-w-none object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-4">
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
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="rounded-xl border border-line bg-cream p-5 text-ink sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Printed menu</h2>
          <p className="mt-2 text-sm text-olive">Same list, one scroll, for the table.</p>
          <div className="mt-6 overflow-hidden rounded-md ring-1 ring-olive/20">
            <img
              src="/brand/menu-full.jpg"
              alt="The Hummus Bar paper menu"
              className="h-auto w-full max-w-none"
            />
          </div>
        </div>

        <div className="cta-row mt-10">
          <a href={SITE.phoneHref} className={cn(buttonVariants({ size: "lg" }))}>
            Call {SITE.phone}
          </a>
          <Link to="/order" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Order these plates
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
