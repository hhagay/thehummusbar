import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { HOURS, LOCATIONS, SITE } from "@/lib/site";
import { notifyKitchen } from "@/lib/notify-kitchen";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
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
    const message = String(data.message ?? "");
    setSending(true);
    setError(null);
    const result = await notifyKitchen({
      subject: `Question from ${name}`,
      fields: { name, email: from, message },
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.24em] text-lime">Talk to us</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">Contact</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Pickup, catering, and Shabbat orders — walk in during hours, no table
          reservations. Email{" "}
          <a className="text-lime hover:underline" href={SITE.emailHref}>
            {SITE.email}
          </a>{" "}
          or call.
        </p>
        <p className="mt-3 text-sm text-muted">
          Need a flyer or QR?{" "}
          <a className="text-lime hover:underline" href="/share">
            Download the share kit
          </a>
          .
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <a
            href={SITE.phoneHref}
            className="rounded-xl border border-line bg-surface p-6 hover:border-lime"
          >
            <Phone className="size-5 text-lime" />
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">Phone</p>
            <p className="mt-1 text-lg text-cream">{SITE.phone}</p>
          </a>
          <a
            href={SITE.emailHref}
            className="rounded-xl border border-line bg-surface p-6 hover:border-lime"
          >
            <Mail className="size-5 text-lime" />
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">Email</p>
            <p className="mt-1 break-all text-lg text-cream">{SITE.email}</p>
          </a>
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-md border border-line text-cream hover:text-lime"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-md border border-line text-cream hover:text-lime"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">Social</p>
            <p className="mt-1 text-lg text-cream">@hummusbaraz</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <article key={loc.id} className="rounded-xl border border-line p-6">
              <MapPin className="size-5 text-lime" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-cream">{loc.name}</h2>
              <p className="mt-2 text-sm text-muted">
                {loc.address}
                <br />
                {loc.city}
              </p>
              <a
                href={loc.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-11 items-center text-sm text-lime hover:underline"
              >
                Directions
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ul>
            {HOURS.map((h) => (
              <li key={h.days} className="flex flex-col gap-1 border-b border-line py-4 text-sm sm:flex-row sm:justify-between">
                <span className="text-cream">{h.days}</span>
                <span className="text-muted">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-line bg-surface p-6">
            {sent ? (
              <p className="text-sm text-cream">
                {needsActivation
                  ? `Check ${SITE.email} (inbox and spam) for a FormSubmit confirmation and click it once.`
                  : `Message emailed to ${SITE.email}.`}
              </p>
            ) : (
              <form onSubmit={(ev) => void onSubmit(ev)} className="grid gap-4">
                <div>
                  <Label htmlFor="m-name">Name</Label>
                  <Input id="m-name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="m-email">Email</Label>
                  <Input id="m-email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="m-msg">Message</Label>
                  <Textarea id="m-msg" name="message" required />
                </div>
                {error ? <p className="text-sm text-lime">{error}</p> : null}
                <Button type="submit" className="w-full sm:w-auto" disabled={sending}>
                  {sending ? "Sending…" : "Send"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
