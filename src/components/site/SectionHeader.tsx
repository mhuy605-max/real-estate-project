import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center max-w-3xl mx-auto" : "max-w-4xl"}>
      <p className={`label-eyebrow ${dark ? "text-[var(--gold)]" : "text-[var(--emerald-brand)]"} mb-5`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl md:text-5xl font-semibold leading-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-white/60" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
