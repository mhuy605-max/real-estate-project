import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, ArrowLeft, Eye, EyeOff, ChevronDown, ChevronUp, Building2, AlertCircle } from "lucide-react";

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
      const to =
        state.session.role === "admin"
          ? "/portal/admin"
          : state.session.role === "staff"
            ? "/portal/staff"
            : "/portal/investor";
      navigate({ to, replace: true });
    }
  }, [state.session, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const res = login(uid, pw);
    setLoading(false);
    if (!res.ok) {
      setError(res.reason === "Invalid Credentials" ? T.errorInvalid : T.errorDisabled);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#080808] px-4 py-12">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(20,167,108,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Lang switcher */}
      <div className="absolute top-5 right-5 z-10">
        <PortalLangSwitcher />
      </div>

      {/* Back link */}
      <div className="absolute top-5 left-5 z-10">
        <Link
          to="/portal"
          className="inline-flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wide"
        >
          <ArrowLeft className="h-3 w-3" />
          {T.returnToProperty}
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[400px]"
      >
        <motion.div
          animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e0e] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

            {/* Card header strip */}
            <div className="border-b border-white/[0.06] px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#14a76c]/10 ring-1 ring-[#14a76c]/20">
                  <Building2 className="h-4 w-4 text-[#14a76c]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white/90 tracking-tight">WithProperty</p>
                  <p className="text-[10px] text-white/35 tracking-[0.15em] uppercase mt-0.5">Owner Portal</p>
                </div>
                <div className="ml-auto">
                  <WithLogo variant="dark" showWordmark={false} size={28} />
                </div>
              </div>
            </div>

            {/* Form body */}
            <div className="px-8 py-7">
              <div className="mb-7">
                <h1 className="text-[18px] font-semibold text-white tracking-[-0.02em]">{T.title}</h1>
                <p className="text-[12px] text-white/38 mt-1">{T.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Owner ID */}
                <div className="space-y-1.5">
                  <label htmlFor="uid" className="block text-[11px] tracking-[0.1em] uppercase text-white/45 font-medium">
                    {T.idLabel}
                  </label>
                  <input
                    id="uid"
                    autoComplete="username"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    placeholder={T.idPlaceholder}
                    disabled={loading}
                    required
                    className="w-full h-10 rounded-lg border border-white/[0.1] bg-[#161616] px-3.5 text-[13px] text-white/90 placeholder:text-white/22 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#181818] disabled:opacity-50"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label htmlFor="pw" className="block text-[11px] tracking-[0.1em] uppercase text-white/45 font-medium">
                    {T.passwordLabel}
                  </label>
                  <div className="relative">
                    <input
                      id="pw"
                      type={showPw ? "text" : "password"}
                      autoComplete="current-password"
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                      disabled={loading}
                      required
                      className="w-full h-10 rounded-lg border border-white/[0.1] bg-[#161616] px-3.5 pr-10 text-[13px] text-white/90 placeholder:text-white/22 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#181818] disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      tabIndex={-1}
                      aria-label={showPw ? T.hidePassword : T.showPassword}
                    >
                      {showPw ? <EyeOff className="h-[15px] w-[15px]" /> : <Eye className="h-[15px] w-[15px]" />}
                    </button>
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/[0.08] px-3.5 py-2.5">
                        <AlertCircle className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-[12px] text-red-400 leading-snug">{error}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !uid || !pw}
                  className="mt-1 w-full flex items-center justify-center gap-2 h-10 text-[12px] tracking-[0.1em] uppercase font-semibold bg-[#14a76c] text-white rounded-lg hover:bg-[#0f8a59] active:bg-[#0d7a51] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {T.verifying}
                    </>
                  ) : (
                    <>
                      <Lock className="h-3 w-3" />
                      {T.loginBtn}
                    </>
                  )}
                </button>
              </form>

              {/* Demo credentials */}
              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <button
                  type="button"
                  onClick={() => setShowDemo((v) => !v)}
                  className="flex w-full items-center justify-center gap-1.5 text-[11px] text-white/28 hover:text-white/55 transition-colors"
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
                      <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 space-y-2">
                        {[
                          ["noah", "noah123", T.roles.admin, "#14a76c"],
                          ["sara", "sara123", T.roles.staff, "#a3e4c8"],
                          ["kim", "kim123", T.roles.platinum, "#d4af37"],
                          ["lee", "lee123", T.roles.gold, "#e8c98a"],
                        ].map(([u, p, role, color]) => (
                          <div key={u} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[12px] text-white/75 font-medium">{u}</span>
                              <span className="text-white/20">/</span>
                              <span className="font-mono text-[12px] text-white/50">{p}</span>
                            </div>
                            <span className="text-[10px] tracking-wide font-medium" style={{ color }}>
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
