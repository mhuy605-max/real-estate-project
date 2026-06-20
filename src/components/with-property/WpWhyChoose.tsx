import { Shield, FileText, Languages, Zap, BadgeDollarSign } from "lucide-react";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import { WpReveal } from "./WpReveal";

const ICONS = [Shield, FileText, Languages, Zap, BadgeDollarSign];

export function WpWhyChoose() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  return (
    <section id="why-choose" className="py-24 px-6 bg-[var(--wp-bg)]">
      <div className="mx-auto max-w-7xl">
        <WpReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="wp-gold-rule" />
              <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                {wp.whyChoose.eyebrow}
              </span>
              <div className="wp-gold-rule" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)]">
              {wp.whyChoose.title}
            </h2>
          </div>
        </WpReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wp.whyChoose.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <WpReveal key={i} delay={i * 80}>
                <div className="group p-8 rounded-lg border border-[var(--wp-border)] hover:border-[var(--wp-border-gold)] hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-full bg-[var(--wp-navy)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--wp-gold)]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--wp-navy)] group-hover:text-[var(--wp-gold)] transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-[var(--wp-navy)] text-lg mb-3">{item.title}</h3>
                  <p className="text-[var(--wp-text-muted)] text-sm leading-relaxed">{item.body}</p>
                </div>
              </WpReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
