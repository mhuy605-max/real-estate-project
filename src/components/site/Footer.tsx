import { NAV_LINKS, IMAGES } from "./data";
import { useLang } from "./LangContext";
import { t } from "./translations";

export function Footer() {
  const { lang } = useLang();
  const tx = t(lang);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };
  return (
    <footer className="panel-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 text-white">
            <img src={IMAGES.withLogo} alt="WITH" className="h-9 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-display tracking-[0.3em] text-sm">WITH</span>
              <span className="font-display tracking-[0.3em] text-[11px] text-white/50">PHAM TRI</span>
            </div>
          </div>
          <p className="mt-5 text-white/55 text-sm max-w-md leading-relaxed">
            {tx.footer.tagline}
          </p>
        </div>
        <div>
          <p className="label-eyebrow text-white/40 mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l, i) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} className="text-white/70 hover:text-[var(--emerald-brand)] text-sm">
                  {tx.nav.links[i]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-eyebrow text-white/40 mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>ir@phamtri-capital.com</li>
            <li>+84 292 000 0000</li>
            <li className="text-white/50 text-xs pt-3">Vo Van Kiet Boulevard<br/>Zone 4, Can Tho, Vietnam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>{tx.footer.rights}</p>
          <p className="md:text-right max-w-xl">
            Institutional allocation platform. Access and participation require verified qualified
            investor status under applicable jurisdictional regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
