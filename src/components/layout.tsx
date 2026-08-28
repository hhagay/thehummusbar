import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { NAV, SITE, HOURS } from "@/lib/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:gap-4 sm:px-6">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/brand/logo-mark.png"
            alt=""
            className="size-9 shrink-0 rounded-full object-cover ring-1 ring-line sm:size-10"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[11px] font-semibold tracking-[0.14em] text-cream sm:text-[13px] sm:tracking-[0.22em]">
              THE HUMMUS BAR
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted sm:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.to || (item.to === "/order" && pathname === "/cart");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-11 items-center px-3 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                  active ? "text-lime" : "text-muted hover:text-cream",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "size-11 px-0 sm:w-auto sm:px-4",
            )}
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{SITE.phone}</span>
          </a>
          <Link
            to="/cart"
            aria-label={count ? `Cart, ${count} items` : "Cart"}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "relative size-11 px-0",
            )}
            onClick={() => setOpen(false)}
          >
            <ShoppingBag className="size-4" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-lime px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            ) : null}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden size-11 px-0"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-12 items-center border-b border-line text-sm uppercase tracking-[0.16em]",
                  pathname === item.to || (item.to === "/order" && pathname === "/cart")
                    ? "text-lime"
                    : "text-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={SITE.phoneHref}>
                <Button className="w-full" size="lg">
                  Call
                </Button>
              </a>
              <a href={SITE.maps} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full" size="lg">
                  Directions
                </Button>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink-2 pb-28 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <img
            src="/brand/logo-wide.png"
            alt="The Hummus Bar"
            className="mb-5 h-16 w-auto max-w-full rounded-md object-contain bg-cream p-2 sm:h-20"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            House hummus on Greenway. Walk-in kosher kitchen — lunch hours, Shabbat
            trays, no table reservations.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">Menu</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-10 items-center text-cream hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">Visit</p>
          <ul className="space-y-3 text-sm text-cream/90">
            <li>
              4835 E Greenway Rd.
              <br />
              Scottsdale, AZ 85254
            </li>
            <li>
              <a className="text-lime hover:underline" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </li>
            <li>
              <a className="text-lime hover:underline break-all" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a className="text-lime hover:underline" href={SITE.maps} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">Hours</p>
          <ul className="space-y-2 text-sm text-cream/90">
            {HOURS.map((row) => (
              <li key={row.days}>
                <span className="block text-muted">{row.days}</span>
                {row.time}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">Kosher · Walk-in</p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-5 text-center text-[11px] uppercase tracking-[0.14em] text-muted sm:tracking-[0.18em]">
        © {new Date().getFullYear()} The Hummus Bar · Good food. Good mood.
      </div>
    </footer>
  );
}

function MobileDock() {
  const { count } = useCart();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
        <a href={SITE.phoneHref} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full px-2")}>
          <Phone className="size-4" />
          Call
        </a>
        <Link to="/cart" className={cn(buttonVariants({ size: "lg" }), "relative w-full px-2")}>
          <ShoppingBag className="size-4" />
          Cart
          {count > 0 ? (
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold text-lime">
              {count}
            </span>
          ) : null}
        </Link>
        <a
          href={SITE.maps}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full px-2")}
        >
          Map
        </a>
      </div>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip bg-ink text-fg">
      <SiteHeader />
      <div className="flex-1 pb-24 md:pb-0">{children}</div>
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
