import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS, LANGUAGES, IMAGES } from "./data";
import { useLang } from "./LangContext";
import { t } from "./translations";
import type { Lang } from "./LangContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Nav() {
  const { lang, setLang } = useLang();
  const tx = t(lang);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between text-white">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3">
            <img src={IMAGES.withLogo} alt="WITH" className="h-9 w-auto" />
            <span className="font-display tracking-[0.3em] text-sm">WITH</span>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-[13px] tracking-wide transition-colors ${
                  active === l.id ? "text-[var(--emerald-brand)]" : "text-white/70 hover:text-white"
                }`}
              >
                {tx.nav.links[i]}
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

            <Link
              to="/with-property"
              className="hidden sm:inline-flex items-center px-4 py-2 text-[11px] tracking-[0.2em] uppercase border border-[var(--emerald-brand)] text-[var(--emerald-brand)] font-semibold rounded-sm hover:bg-[var(--emerald-brand)] hover:text-black transition-colors"
            >
              With Property
            </Link>

            <button
              onClick={() => setLoginOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase gold-gradient text-black font-semibold rounded-sm hover:opacity-90"
            >
              <Lock className="w-3 h-3" /> {tx.nav.secureLogin}
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
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm panel-dark p-8 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <img src={IMAGES.withLogo} alt="WITH" className="h-8 w-auto" />
              <span className="font-display tracking-[0.3em] text-sm">WITH</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-lg font-display tracking-wide text-white/90 hover:text-[var(--emerald-brand)]"
              >
                {tx.nav.links[i]}
              </button>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              to="/with-property"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-[11px] tracking-[0.2em] uppercase border border-[var(--emerald-brand)] text-[var(--emerald-brand)] font-semibold rounded-sm hover:bg-[var(--emerald-brand)] hover:text-black transition-colors mb-6"
              onClick={() => setOpen(false)}
            >
              With Property — Brokerage Services
            </Link>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="label-eyebrow text-white/40 mb-3">Language</p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`px-3 py-1 text-xs border ${
                    lang === l.code
                      ? "border-[var(--emerald-brand)] text-[var(--emerald-brand)]"
                      : "border-white/20 text-white/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display tracking-wide">{tx.nav.loginTitle}</DialogTitle>
            <DialogDescription>{tx.nav.loginDesc}</DialogDescription>
          </DialogHeader>
          <Button disabled className="w-full">{tx.nav.loginBtn}</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
