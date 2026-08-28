import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
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
            The kitchen list, one scroll. Walk in and order at the counter, or
            add plates under Order for pickup. Every hummus plate comes with warm
            pita, pickles, and house sauces.
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
        <div className="overflow-hidden rounded-xl border border-line bg-cream">
          <img
            src="/brand/menu-full.jpg"
            alt="The Hummus Bar paper menu, all pages"
            className="h-auto w-full max-w-none"
          />
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
