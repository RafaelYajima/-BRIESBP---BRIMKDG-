import { motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useState } from "react";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import Demo from "./components/Demo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InterestForm from "./components/InterestForm";
import Marquee from "./components/Marquee";
import Testimonials from "./components/Testimonials";
import Toast, { type ToastData } from "./components/Toast";
import { scrollToId } from "./utils/scroll";

export default function App() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const closeToast = useCallback(() => setToast(null), []);

  const showLoginInfo = useCallback(() => {
    setToast({
      title: "Área de acesso em desenvolvimento",
      desc: "O login faz parte da plataforma BORA!, que ainda não está publicada. Esta landing page é um protótipo acadêmico — deixe seu interesse no formulário para acompanhar o projeto.",
      actionLabel: "Ir para o formulário",
      onAction: () => scrollToId("interesse"),
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Barra de progresso de rolagem */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300"
      />

      <Header onLoginInfo={showLoginInfo} />

      <main>
        {/* 1 · Proposta de valor */}
        <Hero />
        <Marquee />
        {/* 2 · Benefícios */}
        <Benefits />
        {/* 3 · Demonstração do produto */}
        <Demo />
        {/* 4 · Depoimentos fictícios */}
        <Testimonials />
        {/* 5 · Perguntas frequentes */}
        <Faq />
        {/* 6 · Chamada para ação */}
        <Cta />
        {/* 7 · Formulário de interesse */}
        <InterestForm />
      </main>

      <Footer />

      <Toast toast={toast} onClose={closeToast} />

      {/* Textura sutil sobre toda a página */}
      <div aria-hidden className="bg-noise pointer-events-none fixed inset-0 z-[65] opacity-[0.035]" />
    </div>
  );
}
