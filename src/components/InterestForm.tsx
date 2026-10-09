import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CircleAlert,
  CircleCheck,
  Mail,
  Megaphone,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const PROFILES = [
  "Estudante",
  "Grupo de amigos",
  "Organização de eventos",
  "Equipe de trabalho",
  "Outro",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = Partial<Record<"nome" | "email" | "perfil", string>>;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-rose-600">
      <CircleAlert className="size-3.5 shrink-0" aria-hidden />
      {message}
    </p>
  );
}

const inputBase =
  "h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:ring-4";
const inputOk = "border-slate-200 focus:border-blue-500 focus:ring-blue-100";
const inputErr = "border-rose-300 bg-rose-50/40 focus:border-rose-400 focus:ring-rose-100";

export default function InterestForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!nome.trim()) e.nome = "Informe seu nome para continuarmos.";
    if (!email.trim()) e.email = "Informe seu e-mail.";
    else if (!EMAIL_RE.test(email.trim())) e.email = "Digite um e-mail válido, como nome@exemplo.com.";
    if (!perfil) e.perfil = "Selecione o perfil que mais combina com você.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const reset = () => {
    setNome("");
    setEmail("");
    setPerfil("");
    setConsent(false);
    setErrors({});
    setSent(false);
  };

  return (
    <section id="interesse" className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-10 size-[420px] rounded-full bg-blue-200/50 blur-[120px]" />
        <div className="absolute bottom-0 right-[-6%] size-[380px] rounded-full bg-sky-200/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_50px_110px_-40px_rgba(2,6,23,0.45)] lg:grid-cols-[0.95fr_1.05fr]">
            {/* Painel esquerdo */}
            <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-14 -top-16 size-60 rounded-full bg-blue-600/40 blur-3xl" />
                <div className="absolute -bottom-20 right-0 size-56 rounded-full bg-cyan-500/25 blur-3xl" />
                <div className="bg-dots absolute inset-0 opacity-[0.13]" />
              </div>
              <div className="relative">
                <SectionTag dark icon={<Sparkles className="size-3.5" aria-hidden />}>
                  05 · Demonstrar interesse
                </SectionTag>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-[1.15]">
                  Fique por dentro do BORA!
                </h2>
                <p className="mt-4 leading-relaxed text-blue-100/80">
                  Preencha os campos abaixo para demonstrar interesse no projeto.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: Megaphone, text: "Novidades sobre o andamento do projeto" },
                    { icon: Bell, text: "Aviso quando a plataforma tiver previsão de lançamento" },
                    { icon: Users, text: "Contato apenas sobre o BORA!, sem mensagens aleatórias" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky-300">
                        <item.icon className="size-4.5" aria-hidden />
                      </span>
                      <span className="text-sm font-medium text-blue-100/90">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-sky-300" aria-hidden />
                  <p className="text-xs leading-relaxed text-slate-400">
                    <strong className="font-bold text-white">Formulário demonstrativo.</strong> Por se tratar de um
                    protótipo acadêmico sem backend, os dados preenchidos não são enviados a nenhum servidor — tudo fica
                    apenas no seu navegador.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário / confirmação */}
            <div className="relative p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="grid size-20 place-items-center rounded-full bg-emerald-100 text-emerald-600"
                    >
                      <CircleCheck className="size-10" aria-hidden />
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-slate-950">
                      Interesse registrado — obrigado{nome.trim() ? `, ${nome.trim().split(" ")[0]}` : ""}!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                      Sua demonstração de interesse foi concluída nesta página. Vale lembrar: este é um envio
                      demonstrativo de um protótipo acadêmico — <strong className="font-semibold">nenhum dado foi enviado ou armazenado</strong> em
                      servidores, e nenhum e-mail será disparado.
                    </p>
                    <button
                      onClick={reset}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-200 px-6 py-3 text-sm font-bold text-blue-800 transition-colors hover:bg-blue-50"
                    >
                      <RotateCcw className="size-4" aria-hidden />
                      Preencher novamente
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    noValidate
                    onSubmit={onSubmit}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="nome" className="mb-2 block text-sm font-bold text-slate-950">
                        Nome <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-slate-400" aria-hidden />
                        <input
                          id="nome"
                          name="nome"
                          type="text"
                          autoComplete="name"
                          placeholder="Como podemos te chamar?"
                          value={nome}
                          onChange={(e) => {
                            setNome(e.target.value);
                            if (errors.nome) setErrors((p) => ({ ...p, nome: undefined }));
                          }}
                          aria-invalid={!!errors.nome}
                          aria-describedby={errors.nome ? "erro-nome" : undefined}
                          className={cn(inputBase, "pl-11", errors.nome ? inputErr : inputOk)}
                        />
                      </div>
                      <FieldError id="erro-nome" message={errors.nome} />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-950">
                        E-mail <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-slate-400" aria-hidden />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="nome@exemplo.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                          }}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "erro-email" : undefined}
                          className={cn(inputBase, "pl-11", errors.email ? inputErr : inputOk)}
                        />
                      </div>
                      <FieldError id="erro-email" message={errors.email} />
                    </div>

                    <div>
                      <label htmlFor="perfil" className="mb-2 block text-sm font-bold text-slate-950">
                        Perfil de utilização <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="perfil"
                          name="perfil"
                          value={perfil}
                          onChange={(e) => {
                            setPerfil(e.target.value);
                            if (errors.perfil) setErrors((p) => ({ ...p, perfil: undefined }));
                          }}
                          aria-invalid={!!errors.perfil}
                          aria-describedby={errors.perfil ? "erro-perfil" : undefined}
                          className={cn(
                            inputBase,
                            "appearance-none pr-11",
                            errors.perfil ? inputErr : inputOk,
                            !perfil && "text-slate-400"
                          )}
                        >
                          <option value="" disabled>
                            Como você pretende usar o BORA!?
                          </option>
                          {PROFILES.map((p) => (
                            <option key={p} value={p} className="text-slate-700">
                              {p}
                            </option>
                          ))}
                        </select>
                        <svg
                          aria-hidden
                          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <FieldError id="erro-perfil" message={errors.perfil} />
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <input
                        id="consentimento"
                        name="consentimento"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded border-slate-300 accent-blue-600"
                      />
                      <label htmlFor="consentimento" className="cursor-pointer text-xs leading-relaxed text-slate-500">
                        <span className="font-semibold text-slate-600">(Opcional)</span> Autorizo a utilização dos
                        dados informados para contato da equipe sobre o projeto BORA!.
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 font-display text-base font-extrabold text-white shadow-[0_18px_38px_-12px_rgba(37,99,235,0.75)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
                      >
                        Enviar interesse
                        <Send className="size-4.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
                      </button>
                      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                        Campos marcados com * são obrigatórios. Protótipo sem banco de dados: nenhuma informação sai do
                        seu navegador.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
