import { createFileRoute } from "@tanstack/react-router";
import { Download, QrCode } from "lucide-react";
import { PageShell } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { HOURS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/share")({ component: SharePage });

const FILES = [
  {
    href: "/share/hang-card-5x7.png",
    title: "Hang card · 5×7",
    detail: "Print and tape in the window or on a flyer.",
  },
  {
    href: "/share/poster-letter.png",
    title: "Poster · 8.5×11",
    detail: "Letter-size sheet for the counter or a bulletin board.",
  },
  {
    href: "/share/share-square.png",
    title: "Square card",
    detail: "Save to your phone and send in texts or stories.",
  },
  {
    href: "/share/hummus-bar.vcf",
    title: "Contact card (.vcf)",
    detail: "Opens as a contact: name, phone, address, hours.",
  },
];

function SharePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.24em] text-lime">Share the bar</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
          QR & print kit
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Scan the code to save The Hummus Bar on a phone. Download a card to
          hang, text, or print.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <div className="rounded-xl border border-line bg-cream p-6 text-center text-ink">
            <img
              src="/share/qr-contact.png"
              alt="QR code to save The Hummus Bar"
              className="mx-auto w-full max-w-[16rem]"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-olive">
              Scan to save
            </p>
            <p className="mt-1 text-sm">Name · address · phone · hours</p>
            <a
              href="/share/qr-contact.png"
              download="hummus-bar-qr.png"
              className={cn(buttonVariants({ size: "sm" }), "mt-5")}
            >
              <Download className="size-4" />
              Download QR
            </a>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-2xl font-semibold text-cream">{SITE.name}</h2>
            <p className="mt-1 text-sm text-muted">{SITE.tagline} · {SITE.cuisine}</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-lime">Address</dt>
                <dd className="mt-1 text-cream">
                  4835 E Greenway Rd., Scottsdale, AZ 85254
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-lime">Phone</dt>
                <dd className="mt-1">
                  <a className="text-cream hover:text-lime" href={SITE.phoneHref}>
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-lime">Hours</dt>
                <dd className="mt-1 space-y-1 text-cream">
                  {HOURS.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-lime">Social</dt>
                <dd className="mt-1 text-cream">@hummusbaraz</dd>
              </div>
            </dl>
          </div>
        </div>

        <h2 className="mt-14 font-display text-2xl font-semibold text-cream">Downloads</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {FILES.map((f) => (
            <li key={f.href}>
              <a
                href={f.href}
                download
                className="flex min-h-24 items-start gap-4 rounded-xl border border-line bg-surface p-5 hover:border-lime"
              >
                <QrCode className="mt-0.5 size-5 shrink-0 text-lime" />
                <span>
                  <span className="block font-semibold text-cream">{f.title}</span>
                  <span className="mt-1 block text-sm text-muted">{f.detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
