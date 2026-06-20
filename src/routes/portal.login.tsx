import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, ArrowLeft, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";

import { Input } from "@/components/ui/input";
import { WithLogo } from "@/components/portal/WithLogo";
import { PortalLangSwitcher } from "@/components/portal/PortalLangSwitcher";
import { usePortal } from "@/lib/portal/store";
import { pt } from "@/lib/portal/portalTranslations";
import { useLang } from "@/components/site/LangContext";

export const Route = createFileRoute("/portal/login")({
  component: LoginPage,
});

function LoginPage() {
  const { state, login } = usePortal();
  const { lang } = useLang();
  const T = pt(lang).login;
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (state.session) {
      navigate({
        to: state.session.role === "admin" ? "/portal/admin" : "/portal/investor",
        replace: true,
      });
    }
  }, [state.session, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const res = login(uid, pw);
    setLoading(false);
    if (!res.ok) {
      setError(res.reason === "Invalid Credentials" ? T.errorInvalid : T.errorDisabled);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12 bg-[#0a0a0a]">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#14a76c]/[0.06] blur-[120px]" />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <PortalLangSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-[380px]"
      >
        <motion.div
          animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-lg border border-white/[0.08] bg-[#141414] p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <WithLogo variant="dark" showWordmark={false} size={52} animate />
            <h1 className="mt-5 text-[18px] font-semibold text-white tracking-[-0.01em]">{T.title}</h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/45 mt-1.5">{T.subtitle}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="uid" className="block text-[11px] tracking-[0.12em] uppercase text-white/55 font-medium">
                {T.idLabel}
              </label>
              <Input
                id="uid"
                autoComplete="username"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder={T.idPlaceholder}
                disabled={loading}
                required
                className="bg-[#1e1e1e] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-10"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="pw" className="block text-[11px] tracking-[0.12em] uppercase text-white/55 font-medium">
                {T.passwordLabel}
              </label>
              <div className="relative">
                <Input
                  id="pw"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  className="bg-[#1e1e1e] border-white/12 text-white/90 placeholder:text-white/25 focus:border-[#14a76c]/60 focus:ring-0 h-10 pr-10"
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/65 transition-colors"
                  tabIndex={-1}
                  aria-label={showPw ? T.hidePassword : T.showPassword}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="rounded border border-[#d9534f]/30 bg-[#d9534f]/10 px-3 py-2.5">
                    <p className="text-[12px] text-[#d9534f]">{error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-[12px] tracking-[0.12em] uppercase font-semibold bg-[#14a76c] text-white rounded hover:bg-[#0f8a59] disabled:opacity-50 transition-colors mt-2"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  {T.verifying}
                </>
              ) : (
                <>
                  <Lock className="h-3.5 w-3.5" />
                  {T.loginBtn}
                </>
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 border-t border-white/[0.07] pt-4">
            <button
              type="button"
              onClick={() => setShowDemo((v) => !v)}
              className="flex w-full items-center justify-center gap-1.5 text-[11px] text-white/35 hover:text-white/60 transition-colors"
            >
              {T.demoCredentials}
              {showDemo ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
            <AnimatePresence>
              {showDemo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 rounded bg-white/[0.04] border border-white/[0.07] px-4 py-3 space-y-1.5">
                    {[
                      ["admin", "admin123", T.roles.admin],
                      ["kim", "kim123", T.roles.platinum],
                      ["lee", "lee123", T.roles.gold],
                    ].map(([u, p, role]) => (
                      <p key={u} className="text-[11px] text-white/55">
                        <span className="font-mono text-white/80 font-medium">{u}</span>
                        <span className="text-white/30 mx-1">/</span>
                        <span className="font-mono text-white/70">{p}</span>
                        <span className="text-white/30 mx-1.5">—</span>
                        <span>{role}</span>
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-5 text-center">
          <Link
            to="/with-property"
            className="inline-flex items-center gap-1.5 text-[11px] text-white/35 hover:text-white/60 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            {T.returnToProperty}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
