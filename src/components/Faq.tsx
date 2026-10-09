import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleHelp, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { scrollToId } from "../utils/scroll";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const FAQ_ITEMS = [
  {
    q: "O que é o BORA!?",
    a: "É uma plataforma web idealizada para facilitar a organização de eventos e atividades em grupo, reunindo informações, participantes e comunicação em um único ambiente.",
  },
  {
    q: "Para quem o BORA! foi pensado?",
    a: "Para estudantes, grupos de amigos e pessoas ou equipes que precisam organizar atividades coletivas.",
  },
  {
    q: "Posso organizar diferentes tipos de eventos?",
    a: "A proposta contempla encontros, festas, viagens, reuniões e outras atividades que envolvam um grupo de participantes.",
  },
  {
    q: "Como os participantes podem confirmar presença?",
    a: "A plataforma prevê um recurso para que os participantes indiquem se irão ou não ao evento.",
  },
  {
    q: "Preciso instalar um aplicativo?",
    a: "O projeto foi concebido como uma plataforma web acessível por navegador. A disponibilidade pública e os requisitos definitivos de acesso devem ser confirmados antes do lançamento.",
  },
  {
    q: "O BORA! é gratuito?",
    a: "A política comercial definitiva deverá ser confirmada pela equipe do projeto. Não anuncie preços, planos ou condições de assinatura como definitivos sem essa confirmação.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: (typeof FAQ_ITEMS)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        open ? "border-blue-200 bg-white shadow-[0_16px_40px_-18px_rgba(30,64,175,0.3)]" : "border-slate-200/80 bg-white/70 hover:border-blue-200"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
      >
        <span
          aria-hidden
          className={cn(
            "hidden font-display text-sm font-extrabold sm:block",
            open ? "text-blue-600" : "text-blue-300"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-base font-bold text-slate-950 sm:text-lg">{item.q}</span>
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
            open ? "rotate-45 bg-blue-600 text-white" : "bg-blue-50 text-blue-700"
          )}
        >
          <Plus className="size-4.5" aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 leading-relaxed text-slate-500 sm:pl-[60px]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-gradient-to-b from-transparent via-blue-50/60 to-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionTag>04 · Perguntas frequentes</SectionTag>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12]">
                Dúvidas? A gente responde.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
                Reunimos as principais perguntas sobre a proposta do BORA! e o status atual do projeto.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_-20px_rgba(30,64,175,0.3)]">
                <p className="flex items-center gap-2.5 font-display text-base font-bold text-slate-950">
                  <span className="grid size-8 place-items-center rounded-lg bg-blue-100 text-blue-700">
                    <CircleHelp className="size-4" aria-hidden />
                  </span>
                  Não encontrou sua dúvida?
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  Deixe seu interesse no formulário e acompanhe as próximas etapas do projeto.
                </p>
                <button
                  onClick={() => scrollToId("interesse")}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900"
                >
                  Ir para o formulário
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item, i) => (
              <Reveal key={item.q} delay={0.05 * i}>
                <FaqItem
                  item={item}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex((v) => (v === i ? null : i))}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
