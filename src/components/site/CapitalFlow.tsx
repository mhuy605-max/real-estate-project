import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Landmark, Construction, Building2, Users, Home, TrendingUp } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const ICONS = [Landmark, Construction, Building2, Users, Home, TrendingUp];

export function CapitalFlow() {
  const { lang } = useLang();
  const tx = t(lang).capital;

  return (
    <section id="capital" className="panel-dark py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tx.stages.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="panel-soft border border-white/10 hover:border-[var(--gold)]/40 transition-colors rounded-2xl p-7 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-[var(--gold)] font-light">0{i + 1}</span>
                    <Icon className="w-5 h-5 text-[var(--emerald-brand)]" />
                  </div>
                  <p className="label-eyebrow text-white/40 mt-5">{s.tag}</p>
                  <h3 className="mt-2 font-display text-xl text-white font-medium leading-snug">{s.title}</h3>
                  <div className="hairline my-5" />
                  <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 border-l-4 border-[var(--gold)] bg-white/[0.03] px-6 py-5 rounded-r-md">
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              <span className="text-[var(--gold)] font-medium">{tx.footerHighlight}</span>{" "}
              {tx.footerBody}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
