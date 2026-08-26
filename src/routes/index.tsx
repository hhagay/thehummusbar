import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { PageShell } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { HOURS, MENU, SITE, formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const featured = MENU[0].items.filter((i) => i.popular).slice(0, 4);

function Home() {
  return (
    <PageShell>
      <section className="relative min-h-[78dvh] overflow-hidden sm:min-h-[88dvh]">
        <img
          src="/food/hero-hummus.jpg"
          alt="House hummus with olive oil, chickpeas, and pita"
          className="absolute inset-0 size-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-ink/25" />
        <div className="relative mx-auto flex min-h-[78dvh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[88dvh] sm:px-6 sm:pb-24 sm:pt-28">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-lime sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
            Mediterranean · Kosher · Scottsdale
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-7xl">
            Good food.
            <br />
            Good mood.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:mt-6 sm:text-lg">
            A walk-in kosher hummus bar on Greenway — plates, platters, and
            salads for lunch. No OpenTable. No dinner rush. Come hungry.
          </p>
          <div className="cta-row mt-7 sm:mt-8">
            <Link to="/menu" className={cn(buttonVariants({ size: "lg" }))}>
              Order pickup
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl divide-y divide-line px-4 py-2 sm:grid-cols-3 sm:divide-y-0 sm:px-6 sm:py-5">
          <p className="py-3 text-sm text-cream sm:py-0">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-lime">Address</span>
            4835 E Greenway Rd., Scottsdale
          </p>
          <p className="py-3 text-sm text-cream sm:py-0">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-lime">Hours</span>
            Sun–Thu 10–6 · Fri 10–2 · Sat closed
          </p>
          <p className="py-3 text-sm text-cream sm:py-0">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-lime">Reach us</span>
            <a className="hover:text-lime" href={SITE.phoneHref}>{SITE.phone}</a>
            <span className="hidden sm:inline">{" · "}</span>
            <a className="mt-1 block break-all hover:text-lime sm:mt-0 sm:inline" href={SITE.emailHref}>
              {SITE.email}
            </a>
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            {
              icon: Leaf,
              title: "Healthy as the default",
              body: "Hummus, salads, and grill — not a steakhouse with a hummus side. Built for how you want to feel after lunch.",
            },
            {
              icon: ShieldCheck,
              title: "Kosher kitchen",
              body: "The whole line is kosher. Not kosher-style. Meat and pareve stay separate. Closed Saturday.",
            },
            {
              icon: Sparkles,
              title: "Walk-in, not waitlist",
              body: "No reservations. Come in. Call for Shabbat trays and catering before Friday close.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="mt-0.5 size-5 shrink-0 text-lime" />
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-lime">The lineup</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl">Signature plates</h2>
          </div>
          <Link to="/menu" className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}>
            Full menu
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                {item.image ? (
                  <img src={item.image} alt="" className="size-full object-cover" />
                ) : (
                  <img src="/food/hero-hummus.jpg" alt="" className="size-full object-cover" />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-cream">{item.name}</h3>
                  <p className="shrink-0 tabular-nums text-sm text-lime">{formatPrice(item.price)}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <img src="/food/interior.jpg" alt="Dining room" className="h-56 w-full object-cover sm:h-full sm:min-h-[320px]" />
        <div className="flex flex-col justify-center bg-cream px-4 py-12 text-ink sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-olive">Scottsdale</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            4835 E Greenway Rd.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-olive">
            One counter, one address. Walk in for a plate. We are not a dinner
            reservation room — we are a hummus bar with lunch hours.
          </p>
          <div className="cta-row mt-8">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "dark" }))}
            >
              Get directions
            </a>
            <a href={SITE.phoneHref} className={cn(buttonVariants({ variant: "outline" }), "border-olive/30 text-ink")}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-20 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Hours</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cream">When we fire the pita</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {HOURS.map((row) => (
              <li key={row.days} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-sm text-cream">{row.days}</span>
                <span className="text-sm tabular-nums text-muted">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Walk in</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cream">No reservations</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Come when you are hungry. For offices and simchas, we also cater.
          </p>
          <div className="cta-row mt-8">
            <a href={SITE.phoneHref} className={cn(buttonVariants())}>
              Call the kitchen
            </a>
            <Link to="/catering" className={cn(buttonVariants({ variant: "outline" }))}>
              Catering
            </Link>
            <a href={SITE.phoneHref} className={cn(buttonVariants({ variant: "outline" }))}>
              Shabbat Orders
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
