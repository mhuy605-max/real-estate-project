import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";
import { t } from "./translations";

export function MacroVision() {
  const { lang } = useLang();
  const tx = t(lang).macro;

  return (
    <section id="macro" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <div className="mt-16 space-y-5">
          {tx.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="panel-soft border border-white/10 hover:border-[var(--emerald-brand)]/40 transition-colors rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-44 flex-shrink-0">
                  <div className="font-display text-5xl md:text-6xl text-[var(--gold)] font-light">0{i + 1}</div>
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

        <p className="mt-12 text-xs text-white/40 max-w-4xl leading-relaxed">{tx.footer}</p>
      </div>
    </section>
  );
}
