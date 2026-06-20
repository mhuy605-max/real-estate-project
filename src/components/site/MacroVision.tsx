import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    tag: "Why Vietnam",
    title: "The Irreplaceable Alternative in the Global Supply Chain",
    body: "Vietnam stands as Asia's foremost manufacturing hub and the leading destination for relocated multinational technology HQs, supported by 6%+ annual GDP growth and structurally rising FDI inflows.",
  },
  {
    n: "02",
    tag: "Why Mekong Delta",
    title: "A Megacity Consumer Base of 20M & Infrastructural Epiphany",
    body: "The Mekong Delta drives over half of Vietnam's agri-maritime exports and serves a 20-million consumer market. Sovereign infrastructure — deep-sea ports and expressways — is engineered to relieve HCMC congestion and unlock the region.",
  },
  {
    n: "03",
    tag: "Why Can Tho",
    title: "The Sole Centrally Governed Municipality of the West",
    body: "Can Tho is one of Vietnam's five centrally governed municipalities, alongside Hanoi and Ho Chi Minh City — the political, financial, medical and logistics nexus for all 13 Mekong Delta provinces.",
  },
  {
    n: "04",
    tag: "Why Zone 4",
    title: "The Last Sovereign Growth Axis Intersecting Capital Inflows",
    body: "Zone 4 sits at the intersection of the international airport corridor, the AEON Mall retail district, the new centralized government complex, and the Tran De Deep Sea Port expressway link.",
  },
];

export function MacroVision() {
  return (
    <section id="macro" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow="01 / Sovereign Macro Vision"
          title="The Compass of Global Capital: Macro Investment Thesis"
          subtitle="The Causal Value Chain Interconnecting Vietnam's National Dynamics to Zone 4 Asset Repricing."
        />

        <div className="mt-16 space-y-5">
          {ITEMS.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.05}>
              <div className="panel-soft border border-white/10 hover:border-[var(--emerald-brand)]/40 transition-colors rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-44 flex-shrink-0">
                  <div className="font-display text-5xl md:text-6xl text-[var(--gold)] font-light">{it.n}</div>
                  <p className="label-eyebrow text-white/50 mt-3">{it.tag}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-white font-medium leading-snug">{it.title}</h3>
                  <p className="mt-4 text-white/65 leading-relaxed max-w-3xl">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-white/40 max-w-4xl leading-relaxed">
          Formulated in accordance with official whitepapers from Vietnam's Ministry of Planning and
          Investment (MPI) and the Can Tho Urban Master Plan. Institutional allocation capacities are
          strictly limited.
        </p>
      </div>
    </section>
  );
}
