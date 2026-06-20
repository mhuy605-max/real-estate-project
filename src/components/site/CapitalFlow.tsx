import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Landmark, Construction, Building2, Users, Home, TrendingUp } from "lucide-react";

const STAGES = [
  { n: "01", tag: "Government Investment", title: "Sovereign Budget Concentration", body: "The central government concentrates Mekong Delta development budget into Can Tho, prioritizing Zone 4 as the strategic deployment vector.", Icon: Landmark },
  { n: "02", tag: "Infrastructure Development", title: "Mega Infrastructure Repricing", body: "The 2-hour HCMC expressway, AEON Mall, and Tran De Deep Sea Port solidify structural downside protection for every asset class.", Icon: Construction },
  { n: "03", tag: "Business Expansion", title: "MNC Capital Influx", body: "Multinational maritime carriers and logistics giants establish regional HQs across the Zone 4 business cluster.", Icon: Building2 },
  { n: "04", tag: "Population Growth", title: "High-Income Elite Migration", body: "150,000+ administrative professionals, engineers, and expats relocate into the Zone 4 living core.", Icon: Users },
  { n: "05", tag: "Rental Demand", title: "Hyper Rental Demand Scarcity", body: "Severe under-supply of premium residential triggers aggressive rental yield expansion across all asset tiers.", Icon: Home },
  { n: "06", tag: "Land Appreciation", title: "J-Curve Asset Repricing Cycle", body: "Premier yields combine with sequential repricing milestones to trigger a compounding J-Curve appreciation cycle.", Icon: TrendingUp },
];

export function CapitalFlow() {
  return (
    <section id="capital" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow="03 / Capital Flow Circulation"
          title="The Deterministic Mechanism of Capital Inflow"
          subtitle="A 6-Stage Macroeconomic Loop Transmuting State Fiscal Deployment into Asset Value Appreciation."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.06}>
              <div className="panel-soft border border-white/10 hover:border-[var(--gold)]/40 transition-colors rounded-2xl p-7 h-full">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-[var(--gold)] font-light">{s.n}</span>
                  <s.Icon className="w-5 h-5 text-[var(--emerald-brand)]" />
                </div>
                <p className="label-eyebrow text-white/40 mt-5">{s.tag}</p>
                <h3 className="mt-2 font-display text-xl text-white font-medium leading-snug">{s.title}</h3>
                <div className="hairline my-5" />
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border-l-4 border-[var(--gold)] bg-white/[0.03] px-6 py-5 rounded-r-md">
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              <span className="text-[var(--gold)] font-medium">Capital flows never occur by chance;</span>{" "}
              they track sovereign infrastructure pipelines. Zone 4 represents the premier target for
              capturing macro revaluation before phase-one allocation closure.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
