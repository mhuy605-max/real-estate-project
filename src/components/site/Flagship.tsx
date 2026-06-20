import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";
import { ArrowUpRight } from "lucide-react";

const BUILDINGS = [
  {
    code: "Building A",
    name: "Luxury Residential Landmark",
    img: IMAGES.buildingA,
    stats: "59-Story Tower · 215 Units",
    overview:
      "A signature ultra-high-rise defining Can Tho's skyline along Vo Van Kiet Boulevard, housing corporate executives, healthcare professionals, and tech entrepreneurs at the apex of the residential class.",
    thesis:
      "Generational scarcity asset capturing the highest tier of elite migration into Zone 4. Brand-premium revaluation is reinforced by skyline landmark status and the constraint of finite premier inventory.",
    drivers: [
      "Direct Vo Van Kiet Boulevard frontage",
      "Premium executive residency demand",
      "Limited ultra-high-rise inventory in the corridor",
      "Anchor for international expatriate community",
      "Skyline brand premium with marquee tenant base",
    ],
    metrics: [
      ["Expected Yield", "5.2% – 5.8%"],
      ["Capital Appreciation", "7.5% – 9.2% / yr"],
      ["Investment Grade", "A+"],
      ["Avg Unit Size", "839 – 1,527 sqft"],
    ],
    details: [
      ["Occupancy Rate", "92% – 96%"],
      ["Target Tenant", "C-Suite & Expats"],
      ["Lease Currency", "USD"],
      ["Investment Grade", "Institutional A+"],
    ],
  },
  {
    code: "Building B",
    name: "Medical & Wellness Residence",
    img: IMAGES.buildingB,
    stats: "42-Story Tower · 184 Units",
    overview:
      "Healthcare-specialized residential integrated with Can Tho General Hospital and the international school cluster, structured for the longest-duration tenancy in the portfolio.",
    thesis:
      "Defensive, demographically tail-winded asset class engineered to compound yield with minimum volatility. Tenant stickiness is amplified by adjacency to specialized medical and education infrastructure.",
    drivers: [
      "Direct connectivity to Can Tho General Hospital",
      "International school cluster adjacency",
      "Wellness-grade environmental specifications",
      "Aging-population structural demand",
      "Long-duration medical professional leases",
    ],
    metrics: [
      ["Expected Yield", "4.8% – 5.5%"],
      ["Capital Appreciation", "4.8% – 6.2% / yr"],
      ["Investment Grade", "AA+"],
      ["Avg Unit Size", "699 – 1,345 sqft"],
    ],
    details: [
      ["Occupancy Rate", "94% – 98%"],
      ["Target Tenant", "Medical & Education Pros"],
      ["Lease Currency", "USD + VND Hybrid"],
      ["Investment Grade", "Institutional AA+"],
    ],
  },
  {
    code: "Building D",
    name: "Prime Office Tower",
    img: IMAGES.buildingD,
    stats: "52-Story Class-A · 380 Units",
    overview:
      "Ultra-premium office accommodating multinational shipping lines and logistics operators tied directly to the Tran De Deep Sea Port pipeline, the anchor corporate address of Zone 4.",
    thesis:
      "Sovereign-tenanted cash flow asset capturing direct exposure to the Tran De port logistics buildout. Multi-national lease durations underwrite predictable, USD-denominated income.",
    drivers: [
      "Direct expressway link to Tran De Deep Sea Port",
      "Multinational maritime carrier headquarters",
      "State-backed entity tenancy demand",
      "Class-A infrastructure specifications",
      "USD-denominated corporate lease structure",
    ],
    metrics: [
      ["Expected Yield", "6.2% – 6.9%"],
      ["Capital Appreciation", "5.5% – 7.1% / yr"],
      ["Investment Grade", "A"],
      ["Avg Unit Size", "484 – 3,444 sqft"],
    ],
    details: [
      ["Occupancy Rate", "89% – 93%"],
      ["Target Tenant", "MNCs & State Entities"],
      ["Lease Currency", "USD Corporate"],
      ["Investment Grade", "Institutional A"],
    ],
  },
];

export function Flagship() {
  return (
    <section id="flagship" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow="05 / Flagship Asset Vehicles"
          title="Three Flagship Investment Assets · Detailed Analysis"
          subtitle="Institutional-Grade Premium Asset Research — Building-Level Investment Thesis, Cash Flow Structure, and Risk-Adjusted Return Profiles."
        />

        <div className="mt-16 space-y-12">
          {BUILDINGS.map((b, idx) => (
            <Reveal key={b.code}>
              <article className="panel-soft border border-white/10 rounded-3xl overflow-hidden">
                <div className="relative h-[340px] md:h-[420px]">
                  <img src={b.img} alt={b.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.4))" }} />
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
                    <p className="label-eyebrow text-[var(--gold)]">{b.code} · Flagship 0{idx + 1}</p>
                    <h3 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">{b.name}</h3>
                    <p className="mt-3 text-white/70 text-sm md:text-base tracking-wide">{b.stats}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <p className="label-eyebrow text-white/40">Overview</p>
                      <p className="mt-3 text-white/75 leading-relaxed">{b.overview}</p>
                    </div>
                    <div>
                      <p className="label-eyebrow text-[var(--emerald-brand)]">Investment Thesis</p>
                      <p className="mt-3 text-white/75 leading-relaxed">{b.thesis}</p>
                    </div>
                  </div>

                  <div>
                    <p className="label-eyebrow text-white/40 mb-4">Key Demand Drivers</p>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                      {b.drivers.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-white/80 text-sm">
                          <span className="mt-2 w-1.5 h-1.5 bg-[var(--gold)] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
                    {b.metrics.map(([k, v]) => (
                      <div key={k} className="panel-dark p-5">
                        <p className="text-[10px] tracking-widest uppercase text-white/40">{k}</p>
                        <p className="mt-2 font-display text-xl text-[var(--gold)] font-semibold">{v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 pt-2 border-t border-white/10">
                    {b.details.map(([k, v]) => (
                      <div key={k}>
                        <p className="text-[10px] tracking-widest uppercase text-white/40">{k}</p>
                        <p className="mt-1.5 text-white font-medium text-sm">{v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="#"
                      className="group inline-flex items-center gap-3 gold-gradient text-black px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm"
                    >
                      Request Private Allocation
                      <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-white/40 max-w-4xl leading-relaxed">
          Individual building asset allocations are subject to international foreign quota restrictions
          managed exclusively by WITH Real Estate, in partnership with authorized institutional
          distributors. Availability and terms are reserved for qualified institutional investors only.
        </p>
      </div>
    </section>
  );
}
