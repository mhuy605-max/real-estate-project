import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";
import { useLang } from "./LangContext";
import { t } from "./translations";

export function Masterplan() {
  const { lang } = useLang();
  const tx = t(lang).masterplan;

  return (
    <section id="masterplan" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl">
              <img src={IMAGES.masterplan} alt="Masterplan skyline" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="label-eyebrow text-[var(--emerald-brand)] mb-4">{tx.overviewLabel}</p>
              <p className="text-lg leading-relaxed text-foreground/80">{tx.overviewBody}</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {tx.metrics.map((m) => (
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
          {tx.districts.map((d, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
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

        <p className="mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed">{tx.footer}</p>
      </div>
    </section>
  );
}
