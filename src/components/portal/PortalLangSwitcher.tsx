import { useLang } from "@/components/site/LangContext";
import type { Lang } from "@/components/site/LangContext";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "vi", flag: "🇻🇳", label: "VI" },
  { code: "ko", flag: "🇰🇷", label: "KO" },
  { code: "zh", flag: "🇨🇳", label: "ZH" },
];

export function PortalLangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={code.toUpperCase()}
          className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors ${
            lang === code
              ? "bg-with-emerald text-white"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <span>{flag}</span>
          {!compact && <span>{label}</span>}
        </button>
      ))}
    </div>
  );
}
