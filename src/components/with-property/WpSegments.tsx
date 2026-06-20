import { TrendingUp, GraduationCap, Briefcase, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import { WpReveal } from "./WpReveal";

const ICONS = [TrendingUp, GraduationCap, Briefcase];

export function WpSegments() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  return (
    <section id="segments" className="py-24 px-6 bg-[var(--wp-navy)]">
      <div className="mx-auto max-w-7xl">
        <WpReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="wp-gold-rule" />
              <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                {wp.segments.eyebrow}
              </span>
              <div className="wp-gold-rule" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              {wp.segments.title}
            </h2>
          </div>
        </WpReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wp.segments.items.map((seg, i) => {
            const Icon = ICONS[i];
            return (
              <WpReveal key={i} delay={i * 100}>
                <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[var(--wp-border-gold)] transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[var(--wp-gold)]/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--wp-gold)]" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl">{seg.title}</h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--wp-gold)]" />
                        <span className="text-[var(--wp-gold)] text-xs font-semibold uppercase tracking-widest">Goals</span>
                      </div>
                      <ul className="space-y-1">
                        {seg.goals.map((g, j) => (
                          <li key={j} className="text-white/70 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/30">
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-white/40" />
                        <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Pain Points</span>
                      </div>
                      <ul className="space-y-1">
                        {seg.painPoints.map((p, j) => (
                          <li key={j} className="text-white/50 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/20">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Solutions</span>
                      </div>
                      <ul className="space-y-1">
                        {seg.solutions.map((s, j) => (
                          <li key={j} className="text-white/70 text-sm pl-6 relative before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400/40">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </WpReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
