import hero from "@/assets/birdseye-hero.jpg";
import river from "@/assets/birdseye-river.jpg";
import siteplan from "@/assets/siteplan.jpg";
import withLogo from "@/assets/with-logo.png";
import withLogoDark from "@/assets/with-logo-dark.jpg";
import withLogoBlack from "@/assets/with-logo-black.png";
import towerA from "@/assets/final_A.png";
import towerB from "@/assets/final_B.png";
import towerC from "@/assets/final_C.png";
import towerD from "@/assets/final_D.png";

export const IMAGES = {
  hero,
  masterplan: siteplan,
  buildingA: towerA,
  buildingB: towerB,
  buildingC: towerC,
  buildingD: towerD,
  retail: siteplan,
  withLogo,
  withLogoDark,
  withLogoBlack,
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
