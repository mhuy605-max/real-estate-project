import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, ArrowLeft, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div className="portal-login-bg pointer-events-none absolute inset-0" />

      <div className="absolute top-4 right-4">
        <PortalLangSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-[400px]"
      >
        <motion.div
          animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-border bg-card p-8 shadow-xl"
        >
          <div className="flex flex-col items-center text-center">
            <WithLogo variant="light" showWordmark={false} size={56} animate />
            <h1 className="mt-5 text-xl font-semibold">{T.title}</h1>
            <p className="portal-eyebrow mt-2">{T.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="uid">{T.idLabel}</Label>
              <Input
                id="uid"
                autoComplete="username"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                placeholder={T.idPlaceholder}
                disabled={loading}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pw">{T.passwordLabel}</Label>
              <div className="relative">
                <Input
                  id="pw"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  className="pr-10"
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                >
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-with-emerald text-white hover:bg-with-emerald/90 disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  {T.verifying}
                </span>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  {T.loginBtn}
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 border-t border-border pt-4">
            <button
              type="button"
              onClick={() => setShowDemo((v) => !v)}
              className="flex w-full items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
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
                  className="mt-3 overflow-hidden rounded-xl bg-muted px-4 py-3 text-xs text-muted-foreground"
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-mono font-medium">admin</span> /{" "}
                      <span className="font-mono">admin123</span> — {T.roles.admin}
                    </p>
                    <p>
                      <span className="font-mono font-medium">kim</span> /{" "}
                      <span className="font-mono">kim123</span> — {T.roles.platinum}
                    </p>
                    <p>
                      <span className="font-mono font-medium">lee</span> /{" "}
                      <span className="font-mono">lee123</span> — {T.roles.gold}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-5 text-center">
          <Link
            to="/with-property"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            {T.returnToProperty}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
