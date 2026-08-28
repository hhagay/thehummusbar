import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { SITE } from "@/lib/site";
import { notifyKitchen } from "@/lib/notify-kitchen";

export const Route = createFileRoute("/catering")({ component: CateringPage });

const PACKAGES = [
  {
    name: "Hummus bar",
    price: "From $18 / guest",
    detail: "Three hummus toppings, pita, pickles, Israeli salad, falafel.",
    image: "/food/catering-hummus-bar.jpg",
  },
  {
    name: "Grill table",
    price: "From $28 / guest",
    detail: "Chicken or kebab platters, rice, salad, hummus, fries, sauces.",
    image: "/food/catering-grill.jpg",
  },
  {
    name: "Simcha spread",
    price: "From $36 / guest",
    detail: "Full platters plus vegetarian shawarma, fattoush, malabi.",
    image: "/food/catering-simcha.jpg",
  },
];

function CateringPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needsActivation, setNeedsActivation] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const name = String(data.name ?? "");
    const from = String(data.email ?? "");
    const phone = String(data.phone ?? "");
    const date = String(data.date ?? "");
    const guests = String(data.guests ?? "");
    const notes = String(data.notes ?? "");
    setSending(true);
    setError(null);
    const result = await notifyKitchen({
      subject: `Catering request from ${name}`,
      fields: {
        name,
        email: from,
        phone,
        date,
        headcount: guests,
        notes: notes || "(none)",
      },
    });
    setSending(false);
    if (!result.ok) {
      setError(result.error ?? "Could not email the kitchen.");
      return;
    }
    setNeedsActivation(result.needsActivation);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <PageShell>
      <section className="relative min-h-[48dvh] overflow-hidden">
        <img src="/food/catering.jpg" alt="Catering spread" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex min-h-[48dvh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Feed the room</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">Trays from the bar</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Office lunches, sheva brachos, and Friday drop-offs. Same kitchen as
          the walk-in line — hummus, grill, salad — sized for a table, not a
          banquet hall. No event planners, no party packages. Email the tray
          you want.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-line bg-surface">
              <img src={p.image} alt={p.name} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-cream">{p.name}</h2>
                <p className="mt-2 text-sm text-lime">{p.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-cream">Request a quote</h2>
            <p className="mt-4 text-sm text-muted">
              Tell us the date, headcount, and whether you need meat, pareve, or both.
              Scottsdale drop-off is our default. Email{" "}
              <a className="text-lime hover:underline" href={SITE.emailHref}>
                {SITE.email}
              </a>{" "}
              or call {SITE.phone} for same-week events, including Shabbat orders.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-ink p-4 sm:p-6">
            {sent ? (
              <p className="text-sm leading-relaxed text-cream">
                {needsActivation
                  ? `Check ${SITE.email} (inbox and spam) for a FormSubmit confirmation. Click it once, then send the request again.`
                  : `Quote emailed to ${SITE.email}. Call the kitchen if the event is inside 72 hours.`}
              </p>
            ) : (
              <form onSubmit={(ev) => void onSubmit(ev)} className="grid gap-4">
                <div>
                  <Label htmlFor="c-name">Name</Label>
                  <Input id="c-name" name="name" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="c-phone">Phone</Label>
                    <Input id="c-phone" name="phone" type="tel" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-date">Event date</Label>
                    <Input id="c-date" name="date" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="c-guests">Headcount</Label>
                    <Input id="c-guests" name="guests" type="number" min={8} defaultValue={20} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="c-notes">What are we feeding?</Label>
                  <Textarea id="c-notes" name="notes" placeholder="Office lunch, Shabbat order, drop-off on Greenway…" />
                </div>
                {error ? <p className="text-sm text-lime">{error}</p> : null}
                <Button type="submit" size="lg" className="w-full" disabled={sending}>
                  {sending ? "Sending…" : "Send request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
