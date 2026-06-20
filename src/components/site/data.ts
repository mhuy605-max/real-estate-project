import heroAsset from "@/assets/birdseye-hero.jpg.asset.json";
import riverAsset from "@/assets/birdseye-river.jpg.asset.json";
import siteplanAsset from "@/assets/siteplan.jpg.asset.json";
import withLogoAsset from "@/assets/with-logo.png.asset.json";
import withLogoDarkAsset from "@/assets/with-logo-dark.png.asset.json";

export const IMAGES = {
  hero: heroAsset.url,
  masterplan: siteplanAsset.url,
  buildingA: riverAsset.url,
  buildingB: heroAsset.url,
  buildingD: riverAsset.url,
  retail: siteplanAsset.url,
  withLogo: withLogoAsset.url,
  withLogoDark: withLogoDarkAsset.url,
};

export const NAV_LINKS = [
  { id: "macro", label: "Macro Vision" },
  { id: "masterplan", label: "Masterplan" },
  { id: "capital", label: "Capital Flow" },
  { id: "portfolio", label: "Portfolio" },
  { id: "flagship", label: "Flagship Assets" },
  { id: "simulator", label: "ROI Simulator" },
];

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "简体中文" },
  { code: "vi", label: "Tiếng Việt" },
];
