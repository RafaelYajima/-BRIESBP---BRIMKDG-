import { cn } from "../utils/cn";

type LogoProps = {
  light?: boolean;
  className?: string;
};

/** Logotipo tipográfico do projeto BORA! */
export default function Logo({ light = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-baseline gap-1 font-display select-none", className)}>
      <span
        className={cn(
          "text-[1.55rem] font-extrabold leading-none tracking-tight",
          light ? "text-white" : "text-slate-950"
        )}
      >
        BORA
      </span>
      <span
        aria-hidden
        className="grid size-[1.45rem] translate-y-[2px] rotate-6 place-items-center rounded-[0.45rem] bg-sky-400 text-[1.1rem] font-extrabold leading-none text-blue-950 shadow-[0_4px_12px_-2px_rgba(56,189,248,0.6)]"
      >
        !
      </span>
      <span className="sr-only">BORA!</span>
    </span>
  );
}
