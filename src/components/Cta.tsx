import { ArrowRight, CalendarCheck2, MapPin, Users } from "lucide-react";
import { scrollToId } from "../utils/scroll";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="relative px-5 pb-24 pt-4 sm:px-8 sm:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 px-6 py-16 text-center shadow-[0_50px_100px_-35px_rgba(2,6,23,0.65)] sm:px-12 sm:py-20">
          {/* decorações */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-24 size-72 rounded-full bg-cyan-500/25 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 size-80 rounded-full bg-sky-400/20 blur-3xl" />
            <span className="absolute -right-8 top-6 select-none font-display text-[11rem] font-extrabold leading-none tracking-tight text-white/[0.05] max-lg:hidden">
              BORA!
            </span>
            <span className="absolute left-8 top-10 grid size-12 rotate-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-300 backdrop-blur max-sm:hidden">
              <CalendarCheck2 className="size-5" />
            </span>
            <span className="absolute bottom-12 left-16 grid size-12 -rotate-6 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-300 backdrop-blur max-sm:hidden">
              <Users className="size-5" />
            </span>
            <span className="absolute bottom-16 right-24 grid size-12 rotate-6 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-300 backdrop-blur max-sm:hidden">
              <MapPin className="size-5" />
            </span>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.14]">
              Seu próximo evento começa com{" "}
              <span className="relative inline-block">
                uma boa organização.
                <svg
                  aria-hidden
                  viewBox="0 0 320 14"
                  className="absolute -bottom-2 left-0 w-full text-sky-400"
                  fill="none"
                >
                  <path
                    d="M4 10C60 4 160 2 316 8"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100/85">
              Conheça a proposta do BORA! e descubra uma forma mais organizada de planejar atividades com outras
              pessoas.
            </p>
            <div className="mt-9">
              <button
                onClick={() => scrollToId("interesse")}
                className="group inline-flex items-center gap-2.5 rounded-full bg-sky-400 px-8 py-4 font-display text-base font-extrabold text-blue-950 shadow-[0_20px_45px_-12px_rgba(56,189,248,0.5)] transition-all hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
              >
                Quero conhecer o BORA!
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
              </button>
              <p className="mt-5 text-xs font-medium text-blue-100/60">
                Protótipo acadêmico — o lançamento público da plataforma ainda será confirmado pela equipe.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
