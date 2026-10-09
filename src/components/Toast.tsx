import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useEffect } from "react";

export type ToastData = {
  title: string;
  desc: string;
  actionLabel?: string;
  onAction?: () => void;
};

type ToastProps = {
  toast: ToastData | null;
  onClose: () => void;
};

/** Aviso flutuante usado para mensagens explicativas (ex.: botão "Entrar"). */
export default function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 9000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[80] flex justify-center px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.title}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            className="pointer-events-auto w-full max-w-lg rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-[0_24px_60px_-16px_rgba(2,6,23,0.35)] backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
                <Info className="size-4.5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-slate-950">{toast.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{toast.desc}</p>
                {toast.actionLabel && (
                  <button
                    onClick={() => {
                      toast.onAction?.();
                      onClose();
                    }}
                    className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {toast.actionLabel}
                  </button>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar aviso"
                className="grid size-7 shrink-0 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
