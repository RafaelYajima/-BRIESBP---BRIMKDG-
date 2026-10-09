import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CalendarCheck2,
  CircleCheck,
  ListChecks,
  MapPin,
  MessagesSquare,
  Play,
  Settings,
  Sparkles,
} from "lucide-react";
import { scrollToId } from "../utils/scroll";
import SectionTag from "./SectionTag";

const AVATARS = [
  { initials: "AN", bg: "bg-blue-500" },
  { initials: "LE", bg: "bg-sky-500" },
  { initials: "MA", bg: "bg-rose-500" },
  { initials: "BI", bg: "bg-emerald-500" },
  { initials: "PE", bg: "bg-cyan-600" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[110px] sm:pt-[130px]" id="inicio">
      {/* Fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] size-[560px] rounded-full bg-blue-300/40 blur-[130px]" />
        <div className="absolute left-[-12%] top-40 size-[460px] rounded-full bg-cyan-200/40 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[22%] size-[380px] rounded-full bg-sky-200/40 blur-[110px]" />
        <div className="bg-dots absolute inset-x-0 top-0 h-[420px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* Coluna de texto */}
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <SectionTag icon={<Sparkles className="size-3.5" aria-hidden />}>
              Plataforma de organização de eventos em grupo
            </SectionTag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[3.9rem] xl:text-[4.3rem]"
          >
            Se organizar em grupo não precisa ser{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">uma bagunça.</span>
              <span
                aria-hidden
                className="absolute inset-x-[-4px] bottom-1 top-[62%] -z-0 -rotate-1 rounded-md bg-sky-300/70 sm:bottom-2"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            Organize eventos, reúna as informações importantes e acompanhe quem vai participar em um só lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => scrollToId("interesse")}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-[0_18px_38px_-12px_rgba(37,99,235,0.75)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Quero conhecer o BORA!
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
            <button
              onClick={() => scrollToId("como-funciona")}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-blue-200 bg-white/80 px-7 py-[14px] text-base font-bold text-blue-800 backdrop-blur transition-all hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="grid size-6 place-items-center rounded-full bg-blue-600 text-white transition-transform group-hover:scale-110">
                <Play className="ml-0.5 size-3 fill-current" aria-hidden />
              </span>
              Ver como funciona
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <div className="flex -space-x-2.5">
              {AVATARS.map((a) => (
                <span
                  key={a.initials + a.bg}
                  aria-hidden
                  className={`grid size-9 place-items-center rounded-full border-2 border-white text-[10px] font-bold text-white ${a.bg}`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="max-w-[280px] text-sm leading-snug text-slate-500">
              Pensado para <strong className="font-semibold text-slate-950">turmas, grupos de amigos e equipes</strong>{" "}
              — direto do navegador.
            </p>
          </motion.div>
        </div>

        {/* Composição visual — simulação da interface */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          {/* Chip flutuante: confirmação */}
          <div
            aria-hidden
            className="absolute -right-3 -top-8 z-20 hidden animate-float items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_40px_-14px_rgba(2,6,23,0.3)] sm:flex"
          >
            <span className="grid size-8 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CircleCheck className="size-4.5" />
            </span>
            <div className="text-xs">
              <p className="font-bold text-slate-950">Bia confirmou presença</p>
              <p className="text-slate-400">agora no evento “Churrasco da Ju”</p>
            </div>
          </div>

          {/* Chip flutuante: cronograma */}
          <div
            aria-hidden
            className="absolute -left-4 bottom-16 z-20 hidden animate-float-slow items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_40px_-14px_rgba(2,6,23,0.3)] sm:flex"
          >
            <span className="grid size-8 place-items-center rounded-full bg-sky-100 text-sky-600">
              <ListChecks className="size-4.5" />
            </span>
            <div className="text-xs">
              <p className="font-bold text-slate-950">Cronograma do grupo</p>
              <p className="text-slate-400">3 eventos planejados</p>
            </div>
          </div>

          {/* Janela do app simulada */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_40px_90px_-28px_rgba(2,6,23,0.4)]">
            {/* Barra da janela */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-rose-300" />
                <span className="size-2.5 rounded-full bg-amber-300" />
                <span className="size-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="truncate rounded-full bg-white px-3.5 py-1 text-[11px] font-semibold text-slate-400 ring-1 ring-slate-200/80">
                bora.app · Grupo: Amigos de Sábado
              </span>
              <span className="ml-auto flex gap-1 text-slate-300" aria-hidden>
                <Bell className="size-4" />
                <Settings className="size-4" />
              </span>
            </div>

            <div className="space-y-4 p-5">
              {/* Cabeçalho do grupo fictício */}
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 font-display text-sm font-bold text-white">
                  AS
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-[15px] font-bold text-slate-950">Amigos de Sábado</p>
                  <p className="text-xs text-slate-400">8 membros · criado por Marina</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700 ring-1 ring-blue-100">
                  <MessagesSquare className="size-3.5" aria-hidden />
                  Chat
                </span>
              </div>

              {/* Card do evento */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-5 text-white">
                <div aria-hidden className="absolute -right-8 -top-10 size-36 rounded-full bg-cyan-400/25 blur-2xl" />
                <div aria-hidden className="absolute -bottom-12 left-16 size-32 rounded-full bg-sky-400/15 blur-2xl" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-950">
                    <CalendarCheck2 className="size-3" aria-hidden />
                    Próximo evento
                  </span>
                  <p className="mt-3 font-display text-lg font-bold leading-snug">Churrasco de aniversário da Ju</p>
                  <div className="mt-2.5 space-y-1.5 text-[13px] text-blue-100/90">
                    <p className="flex items-center gap-2">
                      <CalendarCheck2 className="size-3.5 shrink-0" aria-hidden />
                      Sábado, 24 de maio · 16h
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="size-3.5 shrink-0" aria-hidden />
                      Casa da Ju — Vila Madalena, São Paulo
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {AVATARS.slice(0, 4).map((a) => (
                        <span
                          key={a.bg}
                          aria-hidden
                          className={`grid size-7 place-items-center rounded-full border-2 border-blue-800 text-[8px] font-bold text-white ${a.bg}`}
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold text-blue-100">6 de 8 confirmados</p>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.4, delay: 0.9, ease }}
                          className="h-full rounded-full bg-sky-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini área de mensagens */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <MessagesSquare className="size-3.5" aria-hidden />
                  Chat do grupo
                </p>
                <div className="space-y-2.5">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-[13px] leading-snug text-slate-600 shadow-sm ring-1 ring-slate-100">
                    <span className="mb-0.5 block text-[11px] font-bold text-blue-700">Marina</span>
                    Alguém pode ficar responsável pelo carvão?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-blue-600 px-3.5 py-2.5 text-[13px] leading-snug text-white shadow-sm">
                    <span className="mb-0.5 block text-[11px] font-bold text-sky-300">Léo</span>
                    Eu levo! Também separo os jogos de mesa.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-medium text-slate-400">
            Interface ilustrativa com dados fictícios — protótipo acadêmico.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
