import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { IMAGES } from "@/components/site/data";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import type { Lang } from "@/components/site/LangContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const SECTION_IDS = ["why-choose", "segments", "services", "about", "contact"];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "vi", label: "Tiếng Việt" },
];

function scrollToSection(id: string, setOpen: (b: boolean) => void) {
  setOpen(false);
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function WpNav() {
  const { lang, setLang } = useLang();
  const wp = t(lang).wp;
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[var(--wp-navy)]/95 backdrop-blur-md border-b border-[var(--wp-border-gold)]">
        <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between text-white">
          <Link to="/" className="flex items-center gap-3">
            <img src={IMAGES.withLogo} alt="WITH" className="h-9 w-auto" />
            <span className="text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold">PROPERTY</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {SECTION_IDS.map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id, setOpen)}
                className="text-[13px] tracking-wide text-white/70 hover:text-[var(--wp-gold)] transition-colors"
              >
                {wp.nav.links[i]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex items-center gap-1 text-xs tracking-widest uppercase text-white/70 hover:text-white">
                {lang.toUpperCase()} <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {LANGUAGES.map((l) => (
                  <DropdownMenuItem key={l.code} onClick={() => setLang(l.code as Lang)}>
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("contact", setOpen)}
              className="hidden sm:inline-flex items-center px-4 py-2 text-[11px] tracking-[0.2em] uppercase wp-gold-gradient text-[var(--wp-navy)] font-semibold rounded-sm hover:opacity-90"
            >
              {wp.nav.cta}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-white"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[var(--wp-navy)] p-8 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <img src={IMAGES.withLogo} alt="WITH" className="h-8 w-auto" />
              <span className="text-[var(--wp-gold)] font-display text-sm tracking-widest font-semibold">PROPERTY</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="w-5 h-5 text-white" /></button>
          </div>
          <nav className="flex flex-col gap-5">
            {SECTION_IDS.map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id, setOpen)}
                className="text-left text-lg font-display tracking-wide text-white/90 hover:text-[var(--wp-gold)]"
              >
                {wp.nav.links[i]}
              </button>
            ))}
          </nav>
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{wp.nav.langLabel}</p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`px-3 py-1 text-xs border ${
                    lang === l.code
                      ? "border-[var(--wp-gold)] text-[var(--wp-gold)]"
                      : "border-white/20 text-white/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Link to="/" className="text-sm text-white/50 hover:text-white/80 underline underline-offset-4">
              ← IR Site (WITH Capital)
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
