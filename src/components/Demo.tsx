import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CalendarCheck2,
  CalendarDays,
  CircleCheck,
  Clock,
  Crown,
  Link2,
  MapPin,
  MessagesSquare,
  Search,
  Send,
  UserPlus,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

/* ---------------------------------- dados fictícios ---------------------------------- */

const MEMBERS = [
  { name: "Ana", initials: "AN", bg: "bg-blue-500", role: "Administradora" },
  { name: "Léo", initials: "LE", bg: "bg-sky-500" },
  { name: "Marina", initials: "MA", bg: "bg-rose-500" },
  { name: "Bia", initials: "BI", bg: "bg-emerald-500" },
  { name: "Rafa", initials: "RA", bg: "bg-cyan-600" },
];

const GROUP_EVENTS = [
  { title: "Trilha do mirante", when: "Sáb · 09h", confirmed: 4 },
  { title: "Jantar no centro", when: "Sáb · 20h", confirmed: 5 },
];

const SCHEDULE = [
  {
    day: "Sexta-feira",
    items: [
      { time: "19h00", label: "Encontro na rodoviária" },
      { time: "21h30", label: "Check-in na pousada" },
    ],
  },
  {
    day: "Sábado",
    items: [
      { time: "09h00", label: "Trilha do mirante" },
      { time: "13h00", label: "Almoço no centro" },
      { time: "20h00", label: "Jantar com o grupo" },
    ],
  },
  {
    day: "Domingo",
    items: [
      { time: "11h00", label: "Café da manhã" },
      { time: "13h00", label: "Retorno para casa" },
    ],
  },
];

type ChatMsg = { author: string; text: string; mine?: boolean; bg?: string };

const INITIAL_CHAT: ChatMsg[] = [
  { author: "Ana", text: "Gente, a pousada está confirmada para sexta-feira.", bg: "bg-blue-500" },
  { author: "Léo", text: "Perfeito! Eu levo a caixa de som.", bg: "bg-sky-500" },
  { author: "Marina", text: "Alguém confirma o horário da trilha de sábado?", bg: "bg-rose-500" },
  { author: "Ana", text: "09h na portaria principal. Está no cronograma do grupo.", bg: "bg-blue-500" },
];

/* ---------------------------------- telas da demo ---------------------------------- */

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
      <div className="flex gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-rose-300" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-300" />
      </div>
      <span className="truncate rounded-full bg-white px-3.5 py-1 text-[11px] font-semibold text-slate-400 ring-1 ring-slate-200/80">
        bora.app · {label}
      </span>
      <span className="ml-auto flex gap-2.5 text-slate-300" aria-hidden>
        <Search className="size-4" />
        <Bell className="size-4" />
      </span>
    </div>
  );
}

function Avatar({ initials, bg, size = "size-9", text = "text-[10px]" }: { initials: string; bg: string; size?: string; text?: string }) {
  return (
    <span aria-hidden className={cn("grid shrink-0 place-items-center rounded-full font-bold text-white", size, text, bg)}>
      {initials}
    </span>
  );
}

function ScreenGroup() {
  const [invited, setInvited] = useState(false);
  return (
    <div className="space-y-4 p-5">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-5 text-white">
        <div aria-hidden className="absolute -right-10 -top-12 size-40 rounded-full bg-cyan-400/25 blur-2xl" />
        <div className="relative flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300 ring-1 ring-white/20">
              <Users className="size-3" aria-hidden />
              Grupo
            </span>
            <p className="mt-2.5 font-display text-lg font-bold leading-snug">Viagem de fim de semana</p>
            <p className="mt-1 text-xs text-blue-100/85">Criado por Ana · 6 membros</p>
          </div>
          <button
            onClick={() => setInvited(true)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-sky-400 px-3.5 py-2 text-xs font-bold text-blue-950 transition-transform hover:scale-105"
          >
            {invited ? <CircleCheck className="size-3.5" aria-hidden /> : <Link2 className="size-3.5" aria-hidden />}
            {invited ? "Link copiado" : "Convidar"}
          </button>
        </div>
        <AnimatePresence>
          {invited && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="relative mt-2 text-[11px] text-blue-100/80"
            >
              Pronto! Agora é só compartilhar o link de convite com o grupo. (ação ilustrativa)
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4 ring-1 ring-slate-100/60">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Membros</p>
        <ul className="space-y-2.5">
          {MEMBERS.map((m) => (
            <li key={m.name} className="flex items-center gap-3">
              <Avatar initials={m.initials} bg={m.bg} />
              <span className="text-sm font-semibold text-slate-950">{m.name}</span>
              {m.role && (
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-0.5 text-[10px] font-bold text-sky-700">
                  <Crown className="size-3" aria-hidden />
                  {m.role}
                </span>
              )}
            </li>
          ))}
          <li className="flex items-center gap-3 border-t border-dashed border-slate-200 pt-2.5 text-slate-400">
            <span className="grid size-9 place-items-center rounded-full border-2 border-dashed border-slate-200">
              <UserPlus className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-medium">Convidar novo integrante…</span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4 ring-1 ring-slate-100/60">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Próximos eventos</p>
        <div className="space-y-2">
          {GROUP_EVENTS.map((e) => (
            <div key={e.title} className="flex items-center gap-3 rounded-xl bg-blue-50/70 px-3.5 py-3">
              <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white">
                <CalendarDays className="size-4.5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-950">{e.title}</p>
                <p className="text-xs text-slate-400">{e.when}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                {e.confirmed} confirmados
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenEvent() {
  const [rsvp, setRsvp] = useState<"pending" | "yes" | "no">("pending");
  const yesBase = MEMBERS.slice(0, 4);
  const noBase = MEMBERS.slice(4);
  const yesCount = yesBase.length + (rsvp === "yes" ? 1 : 0);

  return (
    <div className="space-y-4 p-5">
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          <CalendarCheck2 className="size-3" aria-hidden />
          Evento
        </span>
        <p className="mt-3 font-display text-xl font-bold text-slate-950">Trilha do mirante + piquenique</p>
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <p className="flex items-center gap-2.5">
            <CalendarDays className="size-4 shrink-0 text-blue-600" aria-hidden />
            Sábado, 14 de junho · 09h00
          </p>
          <p className="flex items-center gap-2.5">
            <MapPin className="size-4 shrink-0 text-blue-600" aria-hidden />
            Portaria principal do parque — ponto de encontro
          </p>
        </div>

        {/* RSVP interativo */}
        <div className="mt-4 rounded-xl bg-white p-3.5 ring-1 ring-blue-100">
          <p className="text-xs font-bold text-slate-500">Você vai participar?</p>
          <div className="mt-2.5 flex gap-2">
            <button
              onClick={() => setRsvp((v) => (v === "yes" ? "pending" : "yes"))}
              aria-pressed={rsvp === "yes"}
              className={cn(
                "flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
                rsvp === "yes"
                  ? "bg-emerald-600 text-white shadow-[0_8px_20px_-6px_rgba(5,150,105,0.6)]"
                  : "bg-slate-100 text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
              )}
            >
              Vou
            </button>
            <button
              onClick={() => setRsvp((v) => (v === "no" ? "pending" : "no"))}
              aria-pressed={rsvp === "no"}
              className={cn(
                "flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
                rsvp === "no"
                  ? "bg-rose-600 text-white shadow-[0_8px_20px_-6px_rgba(225,29,72,0.5)]"
                  : "bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-700"
              )}
            >
              Não vou
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 ring-1 ring-slate-100/60">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-600">
            <CircleCheck className="size-3.5" aria-hidden />
            Confirmados · {yesCount}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {yesBase.map((m) => (
              <span key={m.name} className="flex items-center gap-1.5 rounded-full bg-emerald-50 py-1 pl-1 pr-2.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                <Avatar initials={m.initials} bg={m.bg} size="size-5" text="text-[8px]" />
                {m.name}
              </span>
            ))}
            <AnimatePresence>
              {rsvp === "yes" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 rounded-full bg-blue-600 py-1 pl-1 pr-2.5 text-xs font-bold text-white"
                >
                  <Avatar initials="VC" bg="bg-blue-400" size="size-5" text="text-[8px]" />
                  Você
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 ring-1 ring-slate-100/60">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-rose-500">
            <Clock className="size-3.5" aria-hidden />
            Não vão · {noBase.length + (rsvp === "no" ? 1 : 0)}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {noBase.map((m) => (
              <span key={m.name} className="flex items-center gap-1.5 rounded-full bg-rose-50 py-1 pl-1 pr-2.5 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
                <Avatar initials={m.initials} bg={m.bg} size="size-5" text="text-[8px]" />
                {m.name}
              </span>
            ))}
            <AnimatePresence>
              {rsvp === "no" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 rounded-full bg-slate-600 py-1 pl-1 pr-2.5 text-xs font-bold text-white"
                >
                  <Avatar initials="VC" bg="bg-slate-400" size="size-5" text="text-[8px]" />
                  Você
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-slate-400">Interação ilustrativa — nenhuma resposta é registrada.</p>
    </div>
  );
}

function ScreenSchedule() {
  return (
    <div className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-bold text-slate-950">Cronograma</p>
          <p className="text-xs text-slate-400">Viagem de fim de semana · 14 a 16 de junho</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700 ring-1 ring-blue-100">
          <CalendarDays className="size-3.5" aria-hidden />7 atividades
        </span>
      </div>
      <div className="nice-scroll max-h-[380px] space-y-5 overflow-y-auto pr-1">
        {SCHEDULE.map((block) => (
          <div key={block.day}>
            <p className="mb-2.5 inline-flex rounded-lg bg-blue-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              {block.day}
            </p>
            <ol className="relative ml-5 space-y-3 border-l-2 border-dashed border-blue-200 pl-5">
              {block.items.map((item) => (
                <li key={item.time + item.label} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[27px] top-1/2 size-3 -translate-y-1/2 rounded-full border-[3px] border-white bg-sky-400 shadow"
                  />
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-sm">
                    <span className="rounded-lg bg-blue-50 px-2 py-1 font-display text-xs font-bold text-blue-700">
                      {item.time}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">{item.label}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenChat() {
  const [messages, setMessages] = useState<ChatMsg[]>(INITIAL_CHAT);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { author: "Você", text, mine: true }]);
    setDraft("");
  };

  return (
    <div className="flex flex-col p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 font-display text-xs font-bold text-white">
          VF
        </span>
        <div>
          <p className="font-display text-sm font-bold text-slate-950">Chat · Viagem de fim de semana</p>
          <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />6 membros no grupo
          </p>
        </div>
      </div>

      <div ref={listRef} className="nice-scroll h-[290px] space-y-3 overflow-y-auto rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        {messages.map((msg, i) => (
          <div key={i} className={cn("flex animate-pop-in", msg.mine && "justify-end")}>
            <div
              className={cn(
                "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug shadow-sm",
                msg.mine
                  ? "rounded-tr-md bg-blue-600 text-white"
                  : "rounded-tl-md bg-white text-slate-600 ring-1 ring-slate-100"
              )}
            >
              <span className={cn("mb-0.5 block text-[11px] font-bold", msg.mine ? "text-sky-300" : "text-blue-700")}>
                {msg.author}
              </span>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="mt-3 flex items-center gap-2"
      >
        <label htmlFor="demo-chat" className="sr-only">
          Escreva uma mensagem de teste
        </label>
        <input
          id="demo-chat"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Escreva uma mensagem de teste…"
          maxLength={140}
          className="h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="submit"
          aria-label="Enviar mensagem de teste"
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition-transform hover:scale-105 active:scale-95"
        >
          <Send className="size-4.5" aria-hidden />
        </button>
      </form>
      <p className="mt-2 text-center text-[11px] text-slate-400">
        Chat demonstrativo — as mensagens ficam apenas nesta página.
      </p>
    </div>
  );
}

/* ---------------------------------- seção completa ---------------------------------- */

const TABS = [
  { id: "grupo", label: "Grupo", icon: Users, content: <ScreenGroup />, bar: "Grupo: Viagem de fim de semana" },
  { id: "evento", label: "Evento", icon: CalendarCheck2, content: <ScreenEvent />, bar: "Evento: Trilha do mirante" },
  { id: "cronograma", label: "Cronograma", icon: CalendarDays, content: <ScreenSchedule />, bar: "Cronograma do grupo" },
  { id: "chat", label: "Chat", icon: MessagesSquare, content: <ScreenChat />, bar: "Chat do grupo" },
] as const;

const STEPS = [
  {
    title: "Crie ou entre em um grupo.",
    desc: "Monte o espaço do seu grupo e reúna os integrantes com um convite simples.",
  },
  {
    title: "Organize um evento e convide os participantes.",
    desc: "Registre data, horário e local — tudo o que importa fica salvo no evento.",
  },
  {
    title: "Acompanhe as confirmações e consulte as informações.",
    desc: "Veja quem confirmou presença, siga o cronograma e converse no chat do grupo.",
  },
];

export default function Demo() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("grupo");
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] size-[520px] rounded-full bg-blue-600/25 blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-8%] size-[520px] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="bg-dots absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Texto + passos */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionTag dark>02 · Como funciona</SectionTag>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
                Veja como organizar seu próximo evento.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-blue-100/80">
                Um fluxo simples, do primeiro convite ao dia do evento. Explore as telas ilustrativas ao lado.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-0">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={0.1 + i * 0.1}>
                  <li className="relative flex gap-5 pb-8 last:pb-0">
                    {i < STEPS.length - 1 && (
                      <span aria-hidden className="absolute left-[26px] top-14 h-[calc(100%-3.5rem)] w-px bg-gradient-to-b from-blue-400/50 to-transparent" />
                    )}
                    <span className="grid size-[52px] shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 font-display text-lg font-extrabold text-sky-300 backdrop-blur">
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-lg font-bold leading-snug text-white">{step.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-slate-400">{step.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Dispositivo com abas */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]">
              {/* Abas */}
              <div role="tablist" aria-label="Telas de demonstração" className="flex gap-1 overflow-x-auto border-b border-slate-100 bg-slate-50/90 p-2">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={cn(
                      "relative flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-bold transition-colors sm:flex-1 sm:justify-center",
                      tab === t.id ? "text-white" : "text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                    )}
                  >
                    {tab === t.id && (
                      <motion.span
                        layoutId="demo-tab"
                        className="absolute inset-0 rounded-xl bg-blue-600 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <t.icon className="relative size-4" aria-hidden />
                    <span className="relative">{t.label}</span>
                  </button>
                ))}
              </div>

              <WindowBar label={active.bar} />

              <div className="relative min-h-[520px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={tab}
                    role="tabpanel"
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -28 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {active.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-slate-400">
              Telas ilustrativas com dados fictícios — sem conexão com banco de dados.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
