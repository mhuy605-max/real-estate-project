import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
}

export function WpHero() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--wp-navy)]"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--wp-navy)] via-[var(--wp-navy-light)] to-[var(--wp-navy-mid)] opacity-90" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--wp-gold)] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--wp-gold)] to-transparent opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="wp-gold-rule" />
          <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
            {wp.hero.eyebrow}
          </span>
          <div className="wp-gold-rule" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
          {wp.hero.headline}
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {wp.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="wp-gold-gradient text-[var(--wp-navy)] px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            {wp.hero.cta1}
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="border border-white/30 text-white px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-white/10 hover:border-white/50 transition-all"
          >
            {wp.hero.cta2}
          </button>
        </div>

        <div className="border-t border-[var(--wp-border-gold)] pt-10 max-w-2xl mx-auto">
          <p className="text-[var(--wp-gold)] text-sm italic leading-relaxed opacity-80">
            "{wp.hero.tagline}"
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <div className="w-px h-10 bg-white/50" />
        <span className="text-white/60 text-[10px] tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
}
