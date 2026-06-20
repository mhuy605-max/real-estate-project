import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";
import { Star } from "lucide-react";

const ASSETS = [
  {
    code: "A",
    title: "Premium Landmark Residential",
    sub: "Luxury Residential",
    body: "High-rise private mixed-use absorbing demand from outdated downtown housing stock, anchoring the residential repricing curve.",
    data: [
      ["Investment Thesis", "Scarcity-Driven Repricing"],
      ["Demand Driver", "Elite Migration Inflow"],
      ["Growth Factor", "Skyline Brand Premium"],
      ["Yield Range", "5.0% – 5.8%"],
      ["Risk Profile", "Moderate"],
    ],
  },
  {
    code: "B",
    title: "Healthcare & Wellness Asset Class",
    sub: "Medical & Wellness Residence",
    body: "Asset zones structurally linked to regional hospitals and international schools, optimized for long-duration tenancy.",
    data: [
      ["Investment Thesis", "Defensive Yield Compounding"],
      ["Demand Driver", "Medical Tourism + Expats"],
      ["Growth Factor", "Aging Demographic Tailwind"],
      ["Yield Range", "4.8% – 5.5%"],
      ["Risk Profile", "Low"],
    ],
  },
  {
    code: "C",
    title: "Class-A Prime Office Assets",
    sub: "Corporate Office",
    body: "Premium corporate space for maritime lines, logistics anchors, and state-backed entities operating near Tran De Port.",
    data: [
      ["Investment Thesis", "Sovereign-Tenanted Cash Flow"],
      ["Demand Driver", "MNC HQ Relocation"],
      ["Growth Factor", "Port-Adjacent Premium"],
      ["Yield Range", "6.0% – 6.8%"],
      ["Risk Profile", "Moderate-Low"],
    ],
  },
  {
    code: "D",
    title: "AEON Mall Synergized Commercial",
    sub: "Retail",
    body: "Premium retail rows synced with AEON Mall foot traffic, capturing the highest velocity of consumer flow in the corridor.",
    data: [
      ["Investment Thesis", "Foot-Traffic Capture"],
      ["Demand Driver", "AEON Anchored Demand"],
      ["Growth Factor", "Luxury Brand Onboarding"],
      ["Yield Range", "6.5% – 7.2%"],
      ["Risk Profile", "Moderate"],
    ],
  },
  {
    code: "E",
    title: "International Gate Hospitality",
    sub: "Hospitality",
    body: "Hospitality nodes positioned directly on the airport expansion corridor, capturing inbound MICE and corporate travel.",
    data: [
      ["Investment Thesis", "Aviation-Linked Upside"],
      ["Demand Driver", "Airport Capacity Expansion"],
      ["Growth Factor", "Tourism + MICE Growth"],
      ["Yield Range", "7.0% – 8.0%"],
      ["Risk Profile", "Higher"],
    ],
  },
];

const RATINGS = [
  { name: "Premium Residential", stability: 4, appreciation: 4, yield: 3, liquidity: 4 },
  { name: "Medical & Wellness", stability: 5, appreciation: 3, yield: 3, liquidity: 2 },
  { name: "Prime Office", stability: 4, appreciation: 4, yield: 4, liquidity: 3 },
  { name: "AEON Retail", stability: 3, appreciation: 5, yield: 5, liquidity: 5 },
  { name: "Hospitality", stability: 3, appreciation: 5, yield: 5, liquidity: 4 },
];

const STRATEGIES = [
  { name: "Conservative", alloc: "Medical 50% / Office 30% / Residential 20%", note: "Maximize downside protection and defensive yield." },
  { name: "Balanced", alloc: "Residential 40% / Office 30% / Retail 30%", note: "Blended duration with steady appreciation exposure." },
  { name: "Growth", alloc: "Retail 40% / Residential 40% / Hospitality 20%", note: "Maximum upside capture on the J-Curve revaluation." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < n ? "fill-[var(--gold)] text-[var(--gold)]" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="04 / Portfolio Asset Ecosystem"
          title="Comprehensive Asset Portfolio Ecosystem"
          subtitle="Acquiring a Macro Mixed-Use Capital District Beyond Isolated Building Level Speculation."
        />

        <Reveal>
          <p className="mt-10 max-w-4xl text-lg text-foreground/75 leading-relaxed">
            Can Tho Zone 4 is engineered as an institutional-grade mixed-use matrix. Luxury
            residential, commercial retail, prime office, medical wellness, and hospitality assets are
            interconnected via capital loops that compound each other's valuations.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {ASSETS.map((a, i) => (
            <Reveal key={a.code} delay={(i % 2) * 0.06}>
              <div className="panel-dark rounded-2xl p-8 h-full border border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="label-eyebrow text-[var(--gold)]">Asset Class {a.code}</p>
                    <h3 className="mt-2 font-display text-2xl text-white font-medium">{a.title}</h3>
                    <p className="mt-1 text-white/50 text-sm">{a.sub}</p>
                  </div>
                  <span className="font-display text-5xl text-white/10">{a.code}</span>
                </div>
                <p className="mt-5 text-white/65 text-sm leading-relaxed">{a.body}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {a.data.map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40 text-xs uppercase tracking-wider">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_280px] gap-8 items-start">
          <Reveal>
            <div className="border border-border rounded-2xl overflow-hidden bg-card">
              <div className="p-6 border-b border-border">
                <p className="label-eyebrow text-[var(--emerald-brand)]">Comparative Asset Profile</p>
                <h3 className="font-display text-2xl mt-2 font-semibold">Risk-Adjusted Star Ratings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                      <th className="p-4">Asset Class</th>
                      <th className="p-4">Stability</th>
                      <th className="p-4">Appreciation</th>
                      <th className="p-4">Rental Yield</th>
                      <th className="p-4">Liquidity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RATINGS.map((r) => (
                      <tr key={r.name} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium">{r.name}</td>
                        <td className="p-4"><Stars n={r.stability} /></td>
                        <td className="p-4"><Stars n={r.appreciation} /></td>
                        <td className="p-4"><Stars n={r.yield} /></td>
                        <td className="p-4"><Stars n={r.liquidity} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[280px] relative">
              <img src={IMAGES.retail} alt="Commercial retail" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <p className="label-eyebrow text-[var(--gold)]">Retail Corridor</p>
                <h4 className="font-display text-lg mt-2 leading-snug">AEON-anchored commercial spine driving foot traffic and yield expansion across the district.</h4>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <p className="label-eyebrow text-[var(--emerald-brand)]">Allocation Strategies</p>
          <h3 className="font-display text-2xl md:text-3xl mt-2 font-semibold">Profile-Based Portfolio Construction</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {STRATEGIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="border border-border rounded-2xl p-7 h-full hover:border-[var(--gold)] hover:shadow-lg transition-all bg-card">
                  <p className="label-eyebrow text-[var(--gold)]">{s.name} Investor</p>
                  <p className="mt-3 font-display text-lg font-medium leading-snug">{s.alloc}</p>
                  <div className="hairline opacity-30 my-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed">
          Allocations within this institutional ecosystem are strictly regulated under international
          foreign quota ceilings managed exclusively by WITH Real Estate.
        </p>
      </div>
    </section>
  );
}
