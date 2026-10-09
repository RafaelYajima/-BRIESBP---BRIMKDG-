import { FlaskConical, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const TESTIMONIALS = [
  {
    quote: "A ideia de reunir as informações do evento em um só lugar torna o planejamento mais simples.",
    name: "Ana",
    role: "Estudante universitária",
    initials: "AN",
    bg: "bg-blue-500",
  },
  {
    quote: "A confirmação de presença ajuda a visualizar quem pretende participar.",
    name: "Pedro",
    role: "Organizador de encontros",
    initials: "PE",
    bg: "bg-sky-500",
  },
  {
    quote: "Ter os detalhes do grupo e dos eventos centralizados facilita a organização.",
    name: "Marina",
    role: "Participante de grupos de amigos",
    initials: "MA",
    bg: "bg-cyan-600",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>03 · Depoimentos</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12]">
            Organização que faz sentido para todo mundo.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
          <div
            role="note"
            className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-left"
          >
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-sky-100 text-sky-700">
              <FlaskConical className="size-4" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-sky-900">
              <strong className="font-bold">Exemplos fictícios para fins de prototipação acadêmica.</strong> Os
              depoimentos abaixo ilustram como esta seção poderá ser apresentada no produto final. Eles não representam
              usuários reais, avaliações verificadas ou resultados comprovados.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + t.role} delay={0.12 + i * 0.08}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_12px_38px_-18px_rgba(30,64,175,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-20px_rgba(30,64,175,0.4)]">
                <span className="absolute right-6 top-6 rounded-full border border-dashed border-sky-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-500">
                  Exemplo fictício
                </span>
                <span className="grid size-11 place-items-center rounded-2xl bg-blue-600 text-sky-300">
                  <Quote className="size-5 fill-current" aria-hidden />
                </span>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span aria-hidden className={`grid size-11 place-items-center rounded-full text-xs font-bold text-white ${t.bg}`}>
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-slate-950">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role} <span className="text-blue-400">· personagem fictícia</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
