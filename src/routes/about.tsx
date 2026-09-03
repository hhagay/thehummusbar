import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { LOCATIONS } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-line">
        <img src="/food/dining-room.jpg" alt="The Hummus Bar dining room" className="h-[42dvh] w-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-lime">Our house</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-cream sm:text-5xl">The Hummus Bar</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-cream">Hummus first. Then everything else.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Scottsdale already has Mediterranean rooms that try to be a little of
            everything. We built a hummus bar: one bowl, done properly, then falafel,
            grill, and salads around it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The kitchen is kosher — not kosher-style. Walk-in only. Lunch hours.
            Closed Saturday. Shabbat trays if you call before Friday close. That is
            the whole hospitality model.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Healthy is the default plate, not a footnote. If you want fries with
            that, we will not argue.
          </p>
        </div>
        <div className="rounded-xl bg-cream p-8 text-ink">
          <img
            src="/brand/logo-wide.png"
            alt="The Hummus Bar logo"
            className="mb-6 w-full max-w-sm"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
            Good food. Good mood.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed">
            <li>Cuisine: Mediterranean kosher</li>
            <li>Walk-in only — no reservations</li>
            <li>Shabbat orders accepted</li>
            <li>4835 E Greenway Rd., Scottsdale, AZ 85254</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            { n: "01", t: "The bowl", d: "Hummus whipped daily. Tahini, lemon, garlic, and enough olive oil to shine." },
            { n: "02", t: "The fire", d: "Chicken, kebabs, and merguez off the grill. Schnitzel when you need the crunch." },
            { n: "03", t: "The table", d: "Israeli salad, fattoush, quinoa, malabi. The meal should end as bright as it started." },
          ].map((b) => (
            <article key={b.n}>
              <p className="text-xs tabular-nums text-lime">{b.n}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cream">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-cream">Find us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <article key={loc.id} className="rounded-xl border border-line p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">{loc.name}</h3>
              <p className="mt-3 text-lg text-cream">
                {loc.address}
                <br />
                {loc.city}
              </p>
              <p className="mt-2 text-sm text-muted">{loc.note}</p>
              <a
                href={loc.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center text-sm text-lime hover:underline"
              >
                Open in Maps
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
