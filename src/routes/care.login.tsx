import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Lock,
  ArrowLeft,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  AlertCircle,
} from "lucide-react";
import { useCarePortal } from "@/lib/care/store";
import { useCareLang } from "@/lib/care/i18n";
import { CareLangSwitcher } from "@/components/care/DashboardShell";
import withLogo from "@/assets/with-logo-black.png";

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
    await new Promise((r) => setTimeout(r, 600));
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
      style={{ background: "#f6faf8" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(20,167,108,0.10) 0%, transparent 70%)," +
              "radial-gradient(ellipse 50% 40% at 15% 80%, rgba(20,167,108,0.06) 0%, transparent 60%)," +
              "radial-gradient(ellipse 40% 35% at 85% 15%, rgba(20,167,108,0.05) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,31,22,1) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(13,31,22,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Lang switcher */}
      <div className="absolute top-5 right-5 z-10">
        <CareLangSwitcher />
      </div>

      {/* Back link */}
      <div className="absolute top-5 left-5 z-10">
        <Link
          to="/employee-care"
          className="inline-flex items-center gap-1.5 text-[11px] text-black/35 hover:text-black/65 transition-colors tracking-wide"
        >
          <ArrowLeft className="h-3 w-3" />
          {t("login.back")}
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
          <div className="rounded-2xl border border-black/[0.08] bg-white shadow-[0_32px_80px_rgba(13,31,22,0.14)]">
            {/* Card header strip */}
            <div className="border-b border-black/[0.06] px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#14a76c]/[0.12] ring-1 ring-[#14a76c]/[0.22]">
                  <HeartHandshake className="h-4 w-4 text-[#14a76c]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-black/90 tracking-tight">WithCare</p>
                  <p className="text-[10px] text-black/35 tracking-[0.15em] uppercase mt-0.5">
                    {t("login.tag")}
                  </p>
                </div>
                <div className="ml-auto">
                  <img src={withLogo} alt="WITH" className="h-7 w-auto opacity-75" />
                </div>
              </div>
            </div>

            {/* Form body */}
            <div className="px-8 py-7">
              <div className="mb-7">
                <h1 className="text-[18px] font-semibold text-black tracking-[-0.02em]">
                  {t("login.title")}
                </h1>
                <p className="text-[12px] text-black/40 mt-1">{t("login.subtitle")}</p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                {/* User ID */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="uid"
                    className="block text-[11px] tracking-[0.1em] uppercase text-black/45 font-medium"
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
                    className="w-full h-10 rounded-lg border border-black/[0.10] bg-white px-3.5 text-[13px] text-black/90 placeholder:text-black/25 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] disabled:opacity-50"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="pw"
                    className="block text-[11px] tracking-[0.1em] uppercase text-black/45 font-medium"
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
                      className="w-full h-10 rounded-lg border border-black/[0.10] bg-white px-3.5 pr-10 text-[13px] text-black/90 placeholder:text-black/25 outline-none transition-all duration-150 focus:border-[#14a76c]/50 focus:bg-[#f2fbf6] disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black/32 hover:text-black/65 transition-colors"
                      tabIndex={-1}
                    >
                      {showPw ? (
                        <EyeOff className="h-[15px] w-[15px]" />
                      ) : (
                        <Eye className="h-[15px] w-[15px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {err && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-2.5 rounded-lg border border-red-500/25 bg-red-500/[0.06] px-3.5 py-2.5">
                        <AlertCircle className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-[12px] text-red-700 leading-snug">{err}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !uid || !pw}
                  className="mt-1 w-full flex items-center justify-center gap-2 h-10 text-[12px] tracking-[0.1em] uppercase font-semibold bg-[#14a76c] text-white rounded-lg hover:bg-[#109c5f] active:bg-[#0c7548] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {t("login.verifying")}
                    </>
                  ) : (
                    <>
                      <Lock className="h-3 w-3" />
                      {t("login.signIn")}
                    </>
                  )}
                </button>
              </form>

              {/* Demo credentials */}
              <div className="mt-6 border-t border-black/[0.06] pt-5">
                <button
                  type="button"
                  onClick={() => setShowDemo((v) => !v)}
                  className="flex w-full items-center justify-center gap-1.5 text-[11px] text-black/30 hover:text-black/55 transition-colors"
                >
                  {t("login.demo")}
                  {showDemo ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
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
                      <div className="mt-3 rounded-lg border border-black/[0.07] bg-black/[0.015] px-4 py-3 space-y-2">
                        {[
                          ["noah", "noah123", "Admin", "#0b6b47"],
                          ["sara", "sara123", "Staff", "#14a76c"],
                          ["kim", "kim123", "Employee", "#3fcf94"],
                          ["lee", "lee123", "Employee", "#3fcf94"],
                        ].map(([u, p, role, color]) => (
                          <div key={u} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[12px] text-black/75 font-medium">
                                {u}
                              </span>
                              <span className="text-black/20">/</span>
                              <span className="font-mono text-[12px] text-black/48">{p}</span>
                            </div>
                            <span
                              className="text-[10px] tracking-wide font-medium"
                              style={{ color }}
                            >
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer link */}
              <div className="mt-5 text-center">
                <Link
                  to="/portal/login"
                  className="text-[11px] text-black/30 hover:text-black/55 transition-colors"
                >
                  {t("login.wpLink")}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
