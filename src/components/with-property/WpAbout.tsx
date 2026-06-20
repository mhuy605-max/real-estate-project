import { Award, Globe, Percent } from "lucide-react";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import { WpReveal } from "./WpReveal";

const BADGE_ICONS = [Award, Globe, Percent];

export function WpAbout() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  return (
    <section id="about" className="py-24 px-6 bg-[var(--wp-bg)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: story + badges */}
          <WpReveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="wp-gold-rule" />
                <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                  {wp.about.eyebrow}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)] mb-6">
                {wp.about.title}
              </h2>
              <p className="text-[var(--wp-text-muted)] leading-relaxed mb-10">
                {wp.about.story}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {wp.about.badges.map((badge, i) => {
                  const Icon = BADGE_ICONS[i];
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-5 rounded-lg bg-[var(--wp-navy)] text-white gap-3"
                    >
                      <Icon className="w-7 h-7 text-[var(--wp-gold)]" />
                      <span className="text-xs font-semibold leading-snug">{badge}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </WpReveal>

          {/* Right: values */}
          <WpReveal delay={150}>
            <div className="bg-[var(--wp-navy)]/4 rounded-xl p-8 border border-[var(--wp-border)]">
              <h3 className="font-display font-bold text-[var(--wp-navy)] text-xl mb-7">
                {wp.about.valuesTitle}
              </h3>
              <div className="space-y-5">
                {wp.about.values.map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full wp-gold-gradient flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-[var(--wp-navy)] text-sm">{val.title}</p>
                      <p className="text-[var(--wp-text-muted)] text-sm leading-relaxed">{val.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </WpReveal>
        </div>
      </div>
    </section>
  );
}
