import { Home, Building2, TrendingUp } from "lucide-react";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import { WpReveal } from "./WpReveal";

const ICONS = { Home, Building2, TrendingUp } as const;

export function WpServices() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <WpReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="wp-gold-rule" />
              <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                {wp.services.eyebrow}
              </span>
              <div className="wp-gold-rule" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)]">
              {wp.services.title}
            </h2>
          </div>
        </WpReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wp.services.items.map((svc, i) => {
            const Icon = ICONS[svc.icon as keyof typeof ICONS] ?? Home;
            return (
              <WpReveal key={i} delay={i * 100}>
                <div className="group bg-white rounded-lg p-10 text-center shadow-sm border border-[var(--wp-border)] hover:shadow-xl hover:border-[var(--wp-border-gold)] transition-all duration-300 flex flex-col">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--wp-navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--wp-navy-light)] transition-colors">
                    <Icon className="w-8 h-8 text-[var(--wp-gold)]" />
                  </div>
                  <h3 className="font-display font-bold text-[var(--wp-navy)] text-xl mb-4">{svc.title}</h3>
                  <p className="text-[var(--wp-text-muted)] text-sm leading-relaxed flex-1">{svc.body}</p>
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
                    }}
                    className="mt-8 wp-gold-gradient text-[var(--wp-navy)] px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {wp.services.cta}
                  </button>
                </div>
              </WpReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
