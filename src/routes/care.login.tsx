import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, ArrowLeft, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";
import { useCarePortal } from "@/lib/care/store";
import { useCareLang } from "@/lib/care/i18n";
import { CareLangSwitcher } from "@/components/care/DashboardShell";
import withLogo from "@/assets/with-logo.png";

export const Route = createFileRoute("/care/login")({
  head: () => ({ meta: [{ title: "Sign in — WITH Care" }] }),
  component: CareLoginPage,
});

function CareLoginPage() {
  const { login } = useCarePortal();
  const { t } = useCareLang();
  const nav = useNavigate();
  const [uid, setUid] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const u = login(uid, pw);
    setLoading(false);
    if (!u) {
      setErr(t("login.error"));
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    if (u.role === "admin") nav({ to: "/care/admin" });
    else if (u.role === "staff") nav({ to: "/care/staff" });
    else nav({ to: "/care/employee" });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(160deg, #071619 0%, #0a2021 55%, #071619 100%)" }}
    >
      {/* Language switcher */}
      <div className="absolute top-5 right-5 z-10">
        <CareLangSwitcher />
      </div>
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(224,122,95,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(45,130,130,0.09) 0%, transparent 70%)" }}
        />
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
          className="rounded-lg border border-white/[0.08] bg-[#0d2526] p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={withLogo}
              alt="WITH"
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#e07a5f]/40" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e07a5f]/70">
                {t("login.tag")}
              </span>
              <span className="h-px w-8 bg-[#e07a5f]/40" />
            </div>
            <h1 className="mt-4 text-[18px] font-semibold text-white tracking-[-0.01em]">
              {t("login.title")}
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1.5">
              {t("login.subtitle")}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="uid"
                className="block text-[11px] tracking-[0.12em] uppercase text-white/50 font-medium"
              >
                {t("login.userId")}
              </label>
              <input
                id="uid"
                autoComplete="username"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder={t("login.userIdPlaceholder")}
                disabled={loading}
                required
                className="w-full h-10 rounded bg-[#142829] border border-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/55"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="pw"
                className="block text-[11px] tracking-[0.12em] uppercase text-white/50 font-medium"
              >
                {t("login.password")}
              </label>
              <div className="relative">
                <input
                  id="pw"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder={t("login.passwordPlaceholder")}
                  disabled={loading}
                  required
                  className="w-full h-10 rounded bg-[#142829] border border-white/10 px-3 py-2 pr-10 text-sm text-white/90 placeholder:text-white/25 outline-none transition focus:border-[#e07a5f]/55"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  tabIndex={-1}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {err && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="rounded border border-[#e07a5f]/30 bg-[#e07a5f]/10 px-3 py-2.5">
                    <p className="text-[12px] text-[#e07a5f]">{err}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading || !uid || !pw}
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 text-[12px] tracking-[0.12em] uppercase font-semibold bg-[#e07a5f] text-white rounded hover:bg-[#d96a4f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  {t("login.verifying")}
                </>
              ) : (
                <>
                  <Lock className="h-3.5 w-3.5" />
                  {t("login.signIn")}
                </>
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 border-t border-white/[0.07] pt-4">
            <button
              type="button"
              onClick={() => setShowDemo((v) => !v)}
              className="flex w-full items-center justify-center gap-1.5 text-[11px] text-white/30 hover:text-white/55 transition-colors"
            >
              {t("login.demo")}
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
                      ["noah", "noah123", "Admin"],
                      ["sara", "sara123", "Staff"],
                      ["kim", "kim123", "Employee"],
                      ["lee", "lee123", "Employee"],
                    ].map(([u, p, role]) => (
                      <p key={u} className="text-[11px] text-white/50">
                        <span className="font-mono text-white/80 font-medium">{u}</span>
                        <span className="text-white/25 mx-1">/</span>
                        <span className="font-mono text-white/65">{p}</span>
                        <span className="text-white/25 mx-1.5">—</span>
                        <span>{role}</span>
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-between">
          <Link
            to="/employee-care"
            className="inline-flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/55 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            {t("login.back")}
          </Link>
          <Link
            to="/portal/login"
            className="text-[11px] text-white/30 hover:text-white/55 transition-colors"
          >
            {t("login.wpLink")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
