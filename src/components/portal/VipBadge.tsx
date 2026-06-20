import { Crown } from "lucide-react";
import type { VipGrade } from "@/lib/portal/store";

const cls: Record<VipGrade, string> = {
  Standard: "vip-chip-standard",
  Gold: "vip-chip-gold",
  Platinum: "vip-chip-platinum",
  Diamond: "vip-chip-diamond",
};

export function VipBadge({ grade, withIcon = true }: { grade: VipGrade; withIcon?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${cls[grade]}`}
    >
      {withIcon && grade !== "Standard" && <Crown className="h-3 w-3" />}
      {grade.toUpperCase()}
    </span>
  );
}
