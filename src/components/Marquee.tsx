import { Sparkles } from "lucide-react";

const ITEMS = [
  "Festas",
  "Viagens",
  "Encontros de amigos",
  "Reuniões de equipe",
  "Atividades da turma",
  "Churrascos",
  "Excursões",
  "Confraternizações",
];

/** Faixa decorativa com exemplos de atividades que podem ser organizadas. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div aria-hidden className="relative z-10 -my-3 overflow-hidden py-3">
      <div className="-mx-4 -rotate-[1.2deg] bg-blue-700 py-3.5 shadow-[0_18px_40px_-18px_rgba(30,64,175,0.5)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.18em] text-white/95"
            >
              {item}
              <Sparkles className="size-4 text-sky-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
