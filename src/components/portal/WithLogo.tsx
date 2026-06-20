import { motion } from "framer-motion";
import logoLight from "@/assets/with-logo.png";
import logoBlack from "@/assets/with-logo-black.png";

interface WithLogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  size?: number;
  animate?: boolean;
}

export function WithLogo({
  variant = "light",
  showWordmark = true,
  size = 36,
  animate = false,
}: WithLogoProps) {
  const src = variant === "dark" ? logoLight : logoBlack;
  const toneText = variant === "dark" ? "text-white" : "text-foreground";
  const toneMuted = variant === "dark" ? "text-white/60" : "text-muted-foreground";
  const divider = variant === "dark" ? "bg-white/30" : "bg-foreground/20";

  const img = (
    <img
      src={src}
      alt="WITH"
      style={{ height: size, width: "auto" }}
      className={`block select-none ${variant === "light" ? "mix-blend-multiply" : ""}`}
      draggable={false}
    />
  );

  return (
    <div className="flex items-center gap-3">
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {img}
        </motion.div>
      ) : (
        img
      )}
      {showWordmark && (
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-sm font-semibold tracking-[0.28em] ${toneText}`}
            >
              WITH
            </span>
          </div>
          <span className={`h-5 w-px ${divider}`} aria-hidden />
          <span className={`portal-eyebrow !text-[10px] ${toneMuted}`}>Owner Portal</span>
        </div>
      )}
    </div>
  );
}
