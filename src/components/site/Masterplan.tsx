import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";

const METRICS = [
  { value: "400 ha+", label: "Total Developed Area", note: "Plan Confirmed" },
  { value: "5.4T ₫", label: "Government Allocation", note: "Budget Deployed" },
  { value: "150K+", label: "Target Residents", note: "Elite Profession" },
];

const DISTRICTS = [
  ["Strategic Location", "Vo Van Kiet Golden Axis", "Direct connection from the international airport to the downtown core."],
  ["Government District", "Central Administrative Belt", "Site of relocated centralized government and ministerial complexes."],
  ["AEON Mall District", "Retail Epicenter", "Anchored by the 5.4 trillion VND Japanese AEON Mall flagship."],
  ["Airport Corridor", "International Gate Corporate Axis", "Reserved for multinational executives and regional corporate HQs."],
  ["Logistics Corridor", "Tran De Port Deep-Sea Link", "Expressway entry connecting directly to the $2B Tran De Deep Sea Port."],
  ["Residential Cluster", "Premium Living Core", "Premium townhouses and luxury high-rises for high-income residents."],
  ["Commercial Cluster", "Landmark Financial Hub", "International banks, maritime carriers, and luxury retail anchors."],
  ["Future Value Map", "Strategic Repricing Zone", "Positioned to capture compounding J-Curve revaluation as infrastructure completes."],
];

export function Masterplan() {
  return (
    <section id="masterplan" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="02 / Masterplan District Clustering"
          title="Can Tho Zone 4 Mega Masterplan"
          subtitle="City-Scale Development Architecture Integrating Sovereign Administration, Logistics, and Wealth Clusters."
        />

        <Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl">
              <img src={IMAGES.masterplan} alt="Masterplan skyline" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="label-eyebrow text-[var(--emerald-brand)] mb-4">Overview</p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Zone 4 represents the epicenter of the Vietnamese central government's macroeconomic
                diversification strategy. Anchored by <span className="font-medium text-foreground">Vo Van Kiet Boulevard</span>, it is engineered as a self-sustaining compact city platform
                geared for rapid capital compounding.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="panel-dark rounded-xl p-5">
                    <div className="font-display text-2xl md:text-3xl text-[var(--gold)] font-semibold">{m.value}</div>
                    <p className="text-white/60 text-xs mt-2 leading-snug">{m.label}</p>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">{m.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          {DISTRICTS.map((d, i) => (
            <Reveal key={d[0]} delay={(i % 4) * 0.05}>
              <div className="group border border-border hover:border-[var(--emerald-brand)] hover:shadow-lg transition-all rounded-xl p-7 h-full bg-card">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{d[0]}</h3>
                  <span className="font-display text-xs text-[var(--gold)] tracking-widest">0{i + 1}</span>
                </div>
                <p className="label-eyebrow text-[var(--emerald-brand)] mt-2">{d[1]}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{d[2]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed">
          Every asset block within the Zone 4 layout is brought to market via the integrated pipeline
          of <span className="text-foreground font-medium">Pham Tri (Issuer)</span>,{" "}
          <span className="text-foreground font-medium">Terra Group (Developer)</span>, and{" "}
          <span className="text-foreground font-medium">WITH Real Estate (Exclusive Agency)</span>.
        </p>
      </div>
    </section>
  );
}
