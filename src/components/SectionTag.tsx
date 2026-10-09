import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type SectionTagProps = {
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
  className?: string;
};

/** Etiqueta (eyebrow) que identifica visualmente cada seção da página. */
export default function SectionTag({ children, icon, dark = false, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
        dark
          ? "border-white/25 bg-white/10 text-white/90"
          : "border-blue-200 bg-blue-50 text-blue-700",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
