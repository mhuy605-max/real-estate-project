import { useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

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
  const [inp, setInp] = useState<Inputs>({ price: 2_500_000, equity: 30, years: 10, appr: 6.5, yld: 5.0 });
  const base = useMemo(() => compute(inp), [inp]);
  const conservative = useMemo(() => compute({ ...inp, appr: 3.5, yld: 4.0 }), [inp]);
  const bull = useMemo(() => compute({ ...inp, appr: 9.0, yld: 6.5 }), [inp]);

  const chartData = useMemo(() => {
    const arr: any[] = [];
    for (let y = 0; y <= inp.years; y++) {
      arr.push({
        year: `Y${y}`,
        Conservative: Math.round(inp.price * Math.pow(1 + 3.5 / 100, y)),
        "Base Case": Math.round(inp.price * Math.pow(1 + inp.appr / 100, y)),
        "Bull Case": Math.round(inp.price * Math.pow(1 + 9.0 / 100, y)),
      });
    }
    return arr;
  }, [inp]);

  const sliders = [
    { key: "price" as const, label: "Purchase Price", min: 500_000, max: 5_000_000, step: 100_000, format: (v: number) => fmtFull(v) },
    { key: "equity" as const, label: "Equity Contribution", min: 10, max: 50, step: 5, format: (v: number) => `${v}%` },
    { key: "years" as const, label: "Holding Period", min: 1, max: 25, step: 1, format: (v: number) => `${v} yrs` },
    { key: "appr" as const, label: "Annual Appreciation", min: 1, max: 15, step: 0.5, format: (v: number) => `${v.toFixed(1)}%` },
    { key: "yld" as const, label: "Annual Rental Yield", min: 2, max: 10, step: 0.5, format: (v: number) => `${v.toFixed(1)}%` },
  ];

  const metrics = [
    { label: "Total Asset Value", value: fmt(base.totalAssetValue), pct: `+${(((base.totalAssetValue - inp.price) / inp.price) * 100).toFixed(1)}%` },
    { label: "Capital Gain", value: fmt(base.capitalGain), pct: `${((base.capitalGain / inp.price) * 100).toFixed(1)}%` },
    { label: "CAGR", value: `${base.cagr.toFixed(2)}%`, pct: `${inp.years}-yr Compounded` },
    { label: "Cumulative Rental", value: fmt(base.rentalIncome), pct: `${fmt(base.annualRental)} / yr` },
    { label: "Total Return", value: fmt(base.totalReturn), pct: `${((base.totalReturn / inp.price) * 100).toFixed(1)}% ROI` },
  ];

  const scenarios = [
    { name: "Conservative", appr: "3.5%", yld: "4.0%", data: conservative, highlight: false },
    { name: "Base Case", appr: `${inp.appr.toFixed(1)}%`, yld: `${inp.yld.toFixed(1)}%`, data: base, highlight: true },
    { name: "Bull Case", appr: "9.0%", yld: "6.5%", data: bull, highlight: false },
  ];

  return (
    <section id="simulator" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="06 / Investment Scenario Modeling"
          title="ROI Simulator"
          subtitle="Institutional-Grade Multi-Scenario Capital Return Modeling and Cash Flow Analysis."
        />

        <div className="mt-14 grid lg:grid-cols-[400px_1fr] gap-8">
          <div className="panel-dark rounded-2xl p-8 space-y-8">
            <p className="label-eyebrow text-[var(--gold)]">Allocation Inputs</p>
            {sliders.map((s) => (
              <div key={s.key}>
                <div className="flex items-baseline justify-between mb-3">
                  <label className="text-white/70 text-sm">{s.label}</label>
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
              {metrics.map((m) => (
                <div key={m.label} className="border border-border rounded-xl p-5 bg-card">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">{m.label}</p>
                  <p className="font-display text-xl mt-2 font-semibold tabular-nums">{m.value}</p>
                  <p className="text-xs text-[var(--emerald-brand)] mt-1 tabular-nums">{m.pct}</p>
                </div>
              ))}
            </div>

            <div className="panel-dark rounded-2xl p-6">
              <p className="label-eyebrow text-[var(--gold)] mb-4">Asset Value Trajectory · {inp.years}-Year Horizon</p>
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
                    <Line type="monotone" dataKey="Conservative" stroke="#6b7280" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Base Case" stroke="#d4af37" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="Bull Case" stroke="#14a76c" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <p className="label-eyebrow text-[var(--emerald-brand)]">Scenario Comparison</p>
                <h3 className="font-display text-xl mt-1 font-semibold">Three-Case Return Modeling</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
                      <th className="p-4">Scenario</th>
                      <th className="p-4">Appr / Yield</th>
                      <th className="p-4">Total Asset Value</th>
                      <th className="p-4">Capital Gain</th>
                      <th className="p-4">Rental Income</th>
                      <th className="p-4">Total Return</th>
                      <th className="p-4">CAGR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((s) => (
                      <tr
                        key={s.name}
                        className={`border-b border-border last:border-0 ${s.highlight ? "bg-[var(--gold)]/8" : ""}`}
                        style={s.highlight ? { background: "rgba(212,175,55,0.08)" } : undefined}
                      >
                        <td className="p-4 font-medium">
                          {s.name}
                          {s.highlight && <span className="ml-2 text-[10px] text-[var(--gold)] uppercase tracking-widest">Live</span>}
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

        <p className="mt-10 text-xs text-muted-foreground max-w-4xl leading-relaxed">
          This simulation presents illustrative scenarios for educational purposes. Past performance
          does not guarantee future results. Actual returns may differ materially based on market
          volatility, currency fluctuations, tenant changes, and other factors.
        </p>
      </div>
    </section>
  );
}
