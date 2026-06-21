import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { IMAGES } from "./data";
import { Star } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

function Stars({ n }: { n: number }) {
  return (
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < n ? "fill-[var(--gold)] text-[var(--gold)]" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

export function Portfolio() {
  const { lang } = useLang();
  const tx = t(lang).portfolio;

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <Reveal>
          <p className="mt-10 max-w-4xl text-lg text-foreground/75 leading-relaxed">{tx.intro}</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {tx.assets.map((a, i) => (
            <Reveal key={a.code} delay={(i % 2) * 0.06}>
              <div className="panel-dark rounded-2xl p-8 h-full border border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="label-eyebrow text-[var(--gold)]">{tx.assetClass} {a.code}</p>
                    <h3 className="mt-2 font-display text-2xl text-white font-medium">{a.title}</h3>
                    <p className="mt-1 text-white/50 text-sm">{a.sub}</p>
                  </div>
                  <span className="font-display text-5xl text-white/10">{a.code}</span>
                </div>
                <p className="mt-5 text-white/65 text-sm leading-relaxed">{a.body}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {a.data.map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40 text-xs uppercase tracking-wider">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_280px] gap-8 items-start">
          <Reveal>
            <div className="border border-border rounded-2xl overflow-hidden bg-card">
              <div className="p-6 border-b border-border">
                <p className="label-eyebrow text-[var(--emerald-brand)]">{tx.comparativeLabel}</p>
                <h3 className="font-display text-2xl mt-2 font-semibold">{tx.comparativeTitle}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                      {tx.tableHeaders.map((h) => (
                        <th key={h} className="p-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tx.ratings.map((r) => (
                      <tr key={r.name} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium">{r.name}</td>
                        <td className="p-4"><Stars n={r.stability} /></td>
                        <td className="p-4"><Stars n={r.appreciation} /></td>
                        <td className="p-4"><Stars n={r.yield} /></td>
                        <td className="p-4"><Stars n={r.liquidity} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[280px] relative">
              <img src={IMAGES.retail} alt="Commercial retail" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <p className="label-eyebrow text-[var(--gold)]">{tx.retailLabel}</p>
                <h4 className="font-display text-lg mt-2 leading-snug">{tx.retailCaption}</h4>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-12 text-xs text-muted-foreground max-w-4xl leading-relaxed">{tx.footer}</p>
      </div>
    </section>
  );
}
