import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { IMAGES } from "@/components/site/data";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";

const SECTION_IDS = ["why-choose", "segments", "services", "about", "contact"];

export function WpFooter() {
  const { lang } = useLang();
  const wp = t(lang).wp;

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  }

  return (
    <footer className="bg-[var(--wp-navy)] text-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={IMAGES.withLogo} alt="WITH" className="h-8 w-auto" />
              <span className="text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold">WITH</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed italic">
              "{wp.footer.tagline}"
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-5">
              {wp.footer.nav}
            </h4>
            <ul className="space-y-2">
              {SECTION_IDS.map((id, i) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/60 hover:text-[var(--wp-gold)] text-sm transition-colors"
                  >
                    {wp.nav.links[i]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-5">
              {wp.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[var(--wp-gold)] flex-shrink-0" />
                {wp.footer.contactPlaceholder}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[var(--wp-gold)] flex-shrink-0" />
                {wp.footer.phonePlaceholder}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{wp.footer.rights}</p>
          <Link to="/" className="text-white/30 hover:text-white/60 text-xs transition-colors">
            ← WITH Sovereign Capital (IR Site)
          </Link>
        </div>
      </div>
    </footer>
  );
}
