import { useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { useLang } from "./LangContext";
import { t } from "./translations";

type Inputs = { price: number; equity: number; years: number; appr: number; yld: number };

function compute({ price, years, appr, yld }: Inputs) {
  const totalAssetValue = price * Math.pow(1 + appr / 100, years);
  const capitalGain = totalAssetValue - price;
  const annualRental = price * (yld / 100);
  const rentalIncome = annualRental * years;
  const totalReturn = capitalGain + rentalIncome;
  const cagr = years > 0 ? (Math.pow(totalAssetValue / price, 1 / years) - 1) * 100 : 0;
  return { totalAssetValue, capitalGain, annualRental, rentalIncome, totalReturn, cagr };
}

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : n >= 1_000
    ? `$${(n / 1_000).toFixed(1)}K`
    : `$${n.toFixed(0)}`;

const fmtFull = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function RoiSimulator() {
  const { lang } = useLang();
  const tx = t(lang).roi;

  const [inp, setInp] = useState<Inputs>({ price: 500_000, equity: 30, years: 10, appr: 6.5, yld: 5.0 });
  const base = useMemo(() => compute(inp), [inp]);
  const conservative = useMemo(() => compute({ ...inp, appr: 3.5, yld: 4.0 }), [inp]);
  const bull = useMemo(() => compute({ ...inp, appr: 9.0, yld: 6.5 }), [inp]);

  const chartData = useMemo(() => {
    const arr: any[] = [];
    for (let y = 0; y <= inp.years; y++) {
      arr.push({
        year: `Y${y}`,
        [tx.scenarios[0]]: Math.round(inp.price * Math.pow(1 + 3.5 / 100, y)),
        [tx.scenarios[1]]: Math.round(inp.price * Math.pow(1 + inp.appr / 100, y)),
        [tx.scenarios[2]]: Math.round(inp.price * Math.pow(1 + 9.0 / 100, y)),
      });
    }
    return arr;
  }, [inp, tx.scenarios]);

  const sliderDefs = [
    { key: "price" as const, min: 5_000, max: 5_000_000, step: 5_000, format: (v: number) => fmtFull(v) },
    { key: "equity" as const, min: 10, max: 50, step: 5, format: (v: number) => `${v}%` },
    { key: "years" as const, min: 1, max: 25, step: 1, format: (v: number) => `${v} yrs` },
    { key: "appr" as const, min: 1, max: 15, step: 0.5, format: (v: number) => `${v.toFixed(1)}%` },
    { key: "yld" as const, min: 2, max: 10, step: 0.5, format: (v: number) => `${v.toFixed(1)}%` },
  ];

  const metricValues = [
    { value: fmt(base.totalAssetValue), pct: `+${(((base.totalAssetValue - inp.price) / inp.price) * 100).toFixed(1)}%` },
    { value: fmt(base.capitalGain), pct: `${((base.capitalGain / inp.price) * 100).toFixed(1)}%` },
    { value: `${base.cagr.toFixed(2)}%`, pct: `${inp.years}-yr ${tx.cagrSuffix}` },
    { value: fmt(base.rentalIncome), pct: `${fmt(base.annualRental)} / yr` },
    { value: fmt(base.totalReturn), pct: `${((base.totalReturn / inp.price) * 100).toFixed(1)}% ROI` },
  ];

  const scenarios = [
    { name: tx.scenarios[0], appr: "3.5%", yld: "4.0%", data: conservative, highlight: false },
    { name: tx.scenarios[1], appr: `${inp.appr.toFixed(1)}%`, yld: `${inp.yld.toFixed(1)}%`, data: base, highlight: true },
    { name: tx.scenarios[2], appr: "9.0%", yld: "6.5%", data: bull, highlight: false },
  ];

  return (
    <section id="simulator" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={tx.eyebrow}
          title={tx.title}
          subtitle={tx.subtitle}
        />

        <div className="mt-14 grid lg:grid-cols-[400px_1fr] gap-8">
          <div className="panel-dark rounded-2xl p-8 space-y-8">
            <p className="label-eyebrow text-[var(--gold)]">{tx.inputsLabel}</p>
            {sliderDefs.map((s, i) => (
              <div key={s.key}>
                <div className="flex items-baseline justify-between mb-3">
                  <label className="text-white/70 text-sm">{tx.sliders[i].label}</label>
                  <span className="font-display text-[var(--gold)] font-medium tabular-nums">{s.format(inp[s.key])}</span>
                </div>
                <Slider
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={[inp[s.key]]}
                  onValueChange={(v) => setInp((p) => ({ ...p, [s.key]: v[0] }))}
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-2 uppercase tracking-widest">
                  <span>{s.format(s.min)}</span>
                  <span>{s.format(s.max)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {tx.metrics.map((label, i) => (
                <div key={label} className="border border-border rounded-xl p-5 bg-card">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">{label}</p>
                  <p className="font-display text-xl mt-2 font-semibold tabular-nums">{metricValues[i].value}</p>
                  <p className="text-xs text-[var(--emerald-brand)] mt-1 tabular-nums">{metricValues[i].pct}</p>
                </div>
              ))}
            </div>

            <div className="panel-dark rounded-2xl p-6">
              <p className="label-eyebrow text-[var(--gold)] mb-4">{tx.chartLabel} · {inp.years}-{tx.yearHorizon}</p>
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                    <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} tickFormatter={(v) => fmt(v)} />
                    <Tooltip
                      contentStyle={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
                      labelStyle={{ color: "#fff" }}
                      formatter={(v: any) => fmtFull(v)}
                    />
                    <Legend wrapperStyle={{ fontSize: 12, color: "#fff" }} />
                    <Line type="monotone" dataKey={tx.scenarios[0]} stroke="#6b7280" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey={tx.scenarios[1]} stroke="#d4af37" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey={tx.scenarios[2]} stroke="#14a76c" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <p className="label-eyebrow text-[var(--emerald-brand)]">{tx.scenarioLabel}</p>
                <h3 className="font-display text-xl mt-1 font-semibold">{tx.scenarioTitle}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
                      {tx.tableHeaders.map((h) => (
                        <th key={h} className="p-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((s) => (
                      <tr
                        key={s.name}
                        className={`border-b border-border last:border-0`}
                        style={s.highlight ? { background: "rgba(212,175,55,0.08)" } : undefined}
                      >
                        <td className="p-4 font-medium">
                          {s.name}
                          {s.highlight && <span className="ml-2 text-[10px] text-[var(--gold)] uppercase tracking-widest">{tx.live}</span>}
                        </td>
                        <td className="p-4 text-muted-foreground tabular-nums">{s.appr} / {s.yld}</td>
                        <td className="p-4 tabular-nums">{fmt(s.data.totalAssetValue)}</td>
                        <td className="p-4 tabular-nums">{fmt(s.data.capitalGain)}</td>
                        <td className="p-4 tabular-nums">{fmt(s.data.rentalIncome)}</td>
                        <td className="p-4 tabular-nums font-semibold">{fmt(s.data.totalReturn)}</td>
                        <td className="p-4 tabular-nums text-[var(--emerald-brand)] font-medium">{s.data.cagr.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-4xl leading-relaxed">{tx.disclaimer}</p>
      </div>
    </section>
  );
}
