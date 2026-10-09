import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { scrollToId } from "../utils/scroll";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Benefícios", id: "beneficios" },
  { label: "Como funciona", id: "como-funciona" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "FAQ", id: "faq" },
];

type HeaderProps = {
  onLoginInfo: () => void;
};

export default function Header({ onLoginInfo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo — BORA!"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <Logo />
        </button>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            onClick={onLoginInfo}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-bold text-blue-800 transition-all hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <LogIn className="size-4" aria-hidden />
            Entrar
          </button>
          <button
            onClick={() => go("interesse")}
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_-8px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Começar agora
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </button>
        </div>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-900 shadow-sm lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação móvel" className="space-y-1 px-5 pb-6 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  onClick={() => go(link.id)}
                  className="block w-full rounded-xl px-4 py-3 text-left font-display text-base font-bold text-slate-950 transition-colors hover:bg-blue-50"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex flex-col gap-2.5 pt-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    onLoginInfo();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-sm font-bold text-blue-800"
                >
                  <LogIn className="size-4" aria-hidden />
                  Entrar
                </button>
                <button
                  onClick={() => go("interesse")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
                >
                  Começar agora
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
