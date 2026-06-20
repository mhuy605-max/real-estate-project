import { IMAGES } from "./data";
import { ArrowRight } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

export function Hero() {
  const { lang } = useLang();
  const tx = t(lang).hero;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${IMAGES.hero}")` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.9))" }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 text-white">
        <p className="label-eyebrow text-[var(--gold)] mb-6">{tx.eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-semibold max-w-5xl">
          {tx.title1}<span className="text-[var(--gold)]"> :</span> {tx.title2}
        </h1>
        <div className="hairline w-40 my-8" />
        <p className="font-display text-xl md:text-2xl text-white/90 max-w-3xl">
          {tx.subtitle}
        </p>
        <p className="mt-5 max-w-2xl text-white/65 text-base md:text-lg leading-relaxed">
          {tx.desc}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("masterplan")}
            className="group inline-flex items-center gap-2 bg-[var(--emerald-brand)] hover:bg-[#0e8d5a] text-white px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition"
          >
            {tx.cta1}
            <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 text-sm tracking-widest uppercase font-medium transition"
          >
            {tx.cta2}
          </a>
        </div>

        <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex items-end justify-between text-white/50 text-xs tracking-widest uppercase">
          <span>{tx.axis}</span>
          <span className="hidden md:block">{tx.scroll}</span>
        </div>
      </div>
    </section>
  );
}
