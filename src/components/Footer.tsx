import { AnimatePresence, motion } from "framer-motion";
import { FlaskConical, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { scrollToId } from "../utils/scroll";
import Logo from "./Logo";

const NAV = [
  { label: "Benefícios", id: "beneficios" },
  { label: "Como funciona", id: "como-funciona" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "Perguntas frequentes", id: "faq" },
  { label: "Formulário de interesse", id: "interesse" },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 size-96 rounded-full bg-blue-700/25 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-20">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              O BORA! é uma plataforma web idealizada para centralizar a organização de grupos e eventos: datas,
              horários, locais, confirmações de presença e conversas em um único ambiente.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300">
              <FlaskConical className="size-3.5 text-sky-300" aria-hidden />
              Protótipo acadêmico — landing page de apresentação
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Navegação</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Projeto</p>
            <ul className="mt-5 space-y-3">
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <ShieldCheck className="size-4 text-sky-300" aria-hidden />
                  Política de Privacidade
                </button>
              </li>
              <li className="text-sm leading-relaxed">
                Entrega 5 — Landing Page
                <span className="block text-xs text-slate-500">BRIESBP - BRIMKDG</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs leading-relaxed text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Projeto BORA! — Página desenvolvida exclusivamente para fins acadêmicos.</p>
          <p>Depoimentos, telas e dados exibidos nesta página são fictícios e ilustrativos.</p>
        </div>
      </div>

      {/* Modal — espaço reservado da Política de Privacidade */}
      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/70 p-5 backdrop-blur-sm"
            onClick={() => setPrivacyOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 text-slate-600 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-blue-100 text-blue-700">
                  <ShieldCheck className="size-5" aria-hidden />
                </span>
                <button
                  onClick={() => setPrivacyOpen(false)}
                  aria-label="Fechar"
                  className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="size-4.5" aria-hidden />
                </button>
              </div>
              <h3 id="privacy-title" className="mt-5 font-display text-xl font-extrabold text-slate-950">
                Política de Privacidade
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Este espaço está reservado para o documento oficial, que será publicado pela equipe do projeto antes de
                qualquer disponibilização pública da plataforma.
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                Enquanto isso, vale reforçar: esta landing page é um <strong className="font-semibold">protótipo acadêmico</strong> e
                não coleta, armazena ou compartilha dados pessoais.
              </p>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="mt-6 w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Entendi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
