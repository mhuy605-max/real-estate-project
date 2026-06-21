import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const TERRA_URL = "https://www.terragroup.co.kr/?zarsrc=410&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo&gidzl=g1rRLqyeanMX0rbHGJAH5gKEM5TSRP8IlbWBK55loHkt2mKBMMkS6hrSLbWFRSiUuLi1NZ7N1VjpJ2kG5G";

const BUILDING_IMAGES = [IMAGES.buildingA, IMAGES.buildingB, IMAGES.buildingC, IMAGES.buildingD];

export function Flagship() {
  const { lang } = useLang();
  const tx = t(lang).flagship;

  return (
    <section id="flagship" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <div className="mt-16 space-y-12">
          {tx.buildings.map((b, idx) => (
            <Reveal key={b.code}>
              <article className="panel-soft border border-white/10 rounded-3xl overflow-hidden">
                <div className="relative h-[340px] md:h-[420px]">
                  <img src={BUILDING_IMAGES[idx]} alt={b.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1) 40%, rgba(0,0,0,0))" }} />
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
                      href={TERRA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 gold-gradient text-black px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm"
                    >
                      {tx.cta}
                      <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-white/40 max-w-4xl leading-relaxed">{tx.footer}</p>
      </div>
    </section>
  );
}
