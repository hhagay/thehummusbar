import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { PageShell } from "@/components/layout";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { findMenuItem, makeOrderId, mixWarning, saveOrder, type PlacedOrder } from "@/lib/cart";
import { useCart } from "@/lib/cart-context";
import { notifyKitchen } from "@/lib/notify-kitchen";
import { HOURS, SITE, formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cart")({ component: CartPage });

function ticketText(order: PlacedOrder) {
  return [
    `Pickup order ${order.id}`,
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email}`,
    `Pickup: ${order.pickup}`,
    order.note ? `Note: ${order.note}` : "",
    "",
    ...order.lines.map((line) => `${line.qty} × ${line.name} — ${formatPrice(line.price * line.qty)}`),
    "",
    `Total: ${formatPrice(order.total)}`,
    "Pay at pickup.",
  ]
    .filter((row) => row !== "")
    .join("\n");
}

function CartPage() {
  const { lines, total, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState<PlacedOrder | null>(null);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!lines.length || sending) return;
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const orderLines = lines
      .map((line) => {
        const item = findMenuItem(line.id);
        if (!item) return null;
        return { id: item.id, name: item.name, qty: line.qty, price: item.price };
      })
      .filter((row): row is NonNullable<typeof row> => Boolean(row));

    const order: PlacedOrder = {
      id: makeOrderId(),
      createdAt: new Date().toISOString(),
      name: String(data.name ?? ""),
      phone: String(data.phone ?? ""),
      email: String(data.email ?? ""),
      note: String(data.note ?? ""),
      pickup: String(data.pickup ?? "ASAP"),
      lines: orderLines,
      total,
    };

    setSending(true);
    setError(null);
    const result = await notifyKitchen({
      subject: `Pickup order ${order.id} — ${order.name}`,
      fields: {
        ticket: order.id,
        name: order.name,
        phone: order.phone,
        email: order.email,
        pickup: order.pickup,
        note: order.note || "(none)",
        items: order.lines
          .map((line) => `${line.qty} × ${line.name} (${formatPrice(line.price * line.qty)})`)
          .join("\n"),
        total: formatPrice(order.total),
        pay: "Pay at pickup. Walk-in kitchen. No delivery.",
      },
    });
    setSending(false);

    if (!result.ok) {
      setError(result.error ?? "Could not email the kitchen.");
      return;
    }

    saveOrder(order);
    clear();
    setNeedsActivation(result.needsActivation);
    setPlaced(order);
  }

  if (placed) {
    return (
      <PageShell>
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Order in</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream">{placed.id}</h1>
          {needsActivation ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">
              First-time setup: check <span className="text-cream">{SITE.email}</span> inbox and
              spam for a message from FormSubmit. Click <span className="text-cream">Confirm
              email</span> once. After that, every pickup ticket lands in Gmail. Then place the
              order again, or call {SITE.phone} with this ticket.
            </p>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ticket emailed to {SITE.email}. Pay at the counter on Greenway. If it is not in
              the inbox within a minute, check spam or call {SITE.phone}.
            </p>
          )}
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {placed.lines.map((line) => (
              <li key={line.id} className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-cream">
                  {line.qty} × {line.name}
                </span>
                <span className="tabular-nums text-lime">{formatPrice(line.price * line.qty)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-right text-lg font-semibold text-cream">{formatPrice(placed.total)}</p>
          <div className="cta-row mt-8">
            <Link to="/menu" className={cn(buttonVariants({ size: "lg" }))}>
              Order again
            </Link>
            <a href={SITE.phoneHref} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              Call the kitchen
            </a>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => void navigator.clipboard.writeText(ticketText(placed))}
            >
              Copy ticket
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="text-xs uppercase tracking-[0.24em] text-lime">Pickup</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">Cart</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Order for pickup on Greenway. The ticket emails {SITE.email}. Pay at the counter.
          We do not deliver. Sun–Thu 10–6, Friday 10–2, Saturday closed.
        </p>

        {!lines.length ? (
          <div className="mt-12 rounded-xl border border-line bg-surface p-8">
            <p className="text-cream">The cart is empty.</p>
            <p className="mt-2 text-sm text-muted">Add plates from the menu, then place the order here.</p>
            <Link to="/menu" className={cn(buttonVariants(), "mt-6 inline-flex")}>
              Browse the menu
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
            <div>
              <ul className="space-y-3">
                {lines.map((line) => {
                  const item = findMenuItem(line.id);
                  if (!item) return null;
                  return (
                    <li
                      key={line.id}
                      className="flex gap-3 overflow-hidden rounded-lg border border-line bg-surface p-3 sm:gap-4 sm:p-4"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          className="size-20 shrink-0 rounded-md object-cover sm:size-24"
                        />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h2 className="font-semibold text-cream">{item.name}</h2>
                            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-olive-2">
                              {item.dietary} · {formatPrice(item.price)} each
                            </p>
                          </div>
                          <p className="shrink-0 tabular-nums text-sm text-lime">
                            {formatPrice(item.price * line.qty)}
                          </p>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <QuantityStepper
                            value={line.qty}
                            min={1}
                            onChange={(qty) => setQty(line.id, qty)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-muted"
                            onClick={() => remove(line.id)}
                          >
                            <Trash2 className="size-4" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {mixWarning(lines) ? (
                <p className="mt-4 text-sm text-muted">{mixWarning(lines)}</p>
              ) : null}
            </div>

            <aside className="h-fit rounded-xl border border-line bg-surface p-5 sm:p-6">
              <h2 className="font-display text-2xl font-semibold text-cream">Place order</h2>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="tabular-nums text-cream">{formatPrice(total)}</span>
              </div>
              <p className="mt-2 text-xs text-muted">Tax calculated at the counter. Pickup only.</p>
              <form onSubmit={(ev) => void onSubmit(ev)} className="mt-6 grid gap-4">
                <div>
                  <Label htmlFor="o-name">Name</Label>
                  <Input id="o-name" name="name" required autoComplete="name" />
                </div>
                <div>
                  <Label htmlFor="o-phone">Phone</Label>
                  <Input id="o-phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div>
                  <Label htmlFor="o-email">Email</Label>
                  <Input id="o-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <Label htmlFor="o-pickup">Pickup</Label>
                  <Input
                    id="o-pickup"
                    name="pickup"
                    placeholder="ASAP, or a time during hours"
                    defaultValue="ASAP"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="o-note">Note</Label>
                  <Textarea
                    id="o-note"
                    name="note"
                    className="min-h-24"
                    placeholder="Shabbat order, extra pita, no onions…"
                  />
                </div>
                {error ? <p className="text-sm text-lime">{error}</p> : null}
                <Button type="submit" size="lg" className="w-full" disabled={sending}>
                  {sending ? "Sending to kitchen…" : `Place order · ${formatPrice(total)}`}
                </Button>
              </form>
              <ul className="mt-6 space-y-1 text-xs text-muted">
                {HOURS.map((row) => (
                  <li key={row.days}>
                    {row.days}: {row.time}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )}
      </section>
    </PageShell>
  );
}
