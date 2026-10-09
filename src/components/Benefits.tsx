import { CalendarClock, Layers, MessagesSquare, UserCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const BENEFITS = [
  {
    icon: Layers,
    title: "Tudo em um só lugar",
    desc: "Reúna as principais informações dos grupos e eventos em um ambiente centralizado.",
    ring: "group-hover:bg-blue-600",
    tile: "bg-blue-100 text-blue-700",
  },
  {
    icon: UserCheck,
    title: "Saiba quem vai",
    desc: "Consulte as confirmações de presença dos participantes de cada evento.",
    ring: "group-hover:bg-sky-500",
    tile: "bg-sky-100 text-sky-600",
  },
  {
    icon: CalendarClock,
    title: "Eventos organizados",
    desc: "Visualize datas, horários e locais sem depender de longas conversas.",
    ring: "group-hover:bg-slate-900",
    tile: "bg-slate-200 text-slate-800",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação facilitada",
    desc: "Mantenha as conversas relacionadas ao grupo no espaço de comunicação da plataforma.",
    ring: "group-hover:bg-cyan-500",
    tile: "bg-cyan-100 text-cyan-700",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>01 · Benefícios</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12]">
            Menos confusão. <span className="text-blue-600">Mais momentos juntos.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            O BORA! centraliza a organização do seu grupo para você gastar menos tempo procurando informações — e mais
            tempo aproveitando.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_10px_35px_-18px_rgba(30,64,175,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-20px_rgba(30,64,175,0.4)]">
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-display text-4xl font-extrabold text-blue-100 transition-colors group-hover:text-blue-200"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`grid size-13 place-items-center rounded-2xl transition-colors duration-300 group-hover:text-white ${b.tile} ${b.ring}`}
                >
                  <b.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{b.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">{b.desc}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-sky-400 transition-transform duration-300 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
