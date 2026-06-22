import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HeartHandshake, ArrowRight, Shield, Globe } from "lucide-react";
import { useState } from "react";
import withLogo from "@/assets/with-logo.png";

export const Route = createFileRoute("/portal/")({
  head: () => ({ meta: [{ title: "WITH — Portal" }] }),
  component: PortalLanding,
});

type Lang = "en" | "vi" | "zh" | "ko";

const LABELS: Record<Lang, {
  tag: string; choose: string; select: string;
  wp: string; wpDesc: string; wpSub: string;
  care: string; careDesc: string; careSub: string;
  enter: string; copy: string; secure: string;
}> = {
  en: {
    tag: "Unified Access Portal",
    choose: "Select your portal",
    select: "Choose the platform you'd like to access today.",
    wp: "WithProperty",
    wpDesc: "Investor portal — asset management, ROI tracking, and property reports.",
    wpSub: "Investor · Admin · Staff",
    care: "WithCare",
    careDesc: "Employee care portal — relocation support, housing, paperwork, and settlement services.",
    careSub: "Employee · Staff · Admin",
    enter: "Access portal",
    secure: "Secure · Encrypted · Private",
    copy: `© ${new Date().getFullYear()} WITH Group · Ho Chi Minh City`,
  },
  vi: {
    tag: "Cổng Truy Cập Thống Nhất",
    choose: "Chọn cổng của bạn",
    select: "Chọn nền tảng bạn muốn truy cập hôm nay.",
    wp: "WithProperty",
    wpDesc: "Cổng nhà đầu tư — quản lý tài sản, theo dõi ROI và báo cáo bất động sản.",
    wpSub: "Nhà đầu tư · Quản trị · Nhân viên",
    care: "WithCare",
    careDesc: "Cổng chăm sóc nhân viên — hỗ trợ di chuyển, nhà ở, giấy tờ và dịch vụ định cư.",
    careSub: "Nhân viên · Chuyên viên · Quản trị",
    enter: "Truy cập cổng",
    secure: "Bảo mật · Mã hóa · Riêng tư",
    copy: `© ${new Date().getFullYear()} WITH Group · Thành phố Hồ Chí Minh`,
  },
  zh: {
    tag: "统一访问门户",
    choose: "选择您的门户",
    select: "请选择您今天要访问的平台。",
    wp: "WithProperty",
    wpDesc: "投资者门户 — 资产管理、投资回报率追踪和房产报告。",
    wpSub: "投资者 · 管理员 · 员工",
    care: "WithCare",
    careDesc: "员工关怀门户 — 搬迁支持、住房、文件和定居服务。",
    careSub: "员工 · 专员 · 管理员",
    enter: "进入门户",
    secure: "安全 · 加密 · 私密",
    copy: `© ${new Date().getFullYear()} WITH集团 · 胡志明市`,
  },
  ko: {
    tag: "통합 액세스 포털",
    choose: "포털을 선택하세요",
    select: "오늘 접속할 플랫폼을 선택해 주세요.",
    wp: "WithProperty",
    wpDesc: "투자자 포털 — 자산 관리, ROI 추적 및 부동산 보고서.",
    wpSub: "투자자 · 관리자 · 직원",
    care: "WithCare",
    careDesc: "직원 케어 포털 — 이주 지원, 주거, 서류 및 정착 서비스.",
    careSub: "직원 · 담당자 · 관리자",
    enter: "포털 접속",
    secure: "보안 · 암호화 · 비공개",
    copy: `© ${new Date().getFullYear()} WITH 그룹 · 호치민시`,
  },
};

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "vi", label: "VI", flag: "🇻🇳" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

function PortalLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const tx = LABELS[lang];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 py-16">

      {/* Background: layered gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(20,167,108,0.07) 0%, transparent 65%)," +
              "radial-gradient(ellipse 60% 50% at 85% 100%, rgba(224,122,95,0.06) 0%, transparent 65%)," +
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(20,167,108,0.025) 0%, transparent 70%)",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(8,8,8,0.6) 100%)",
          }}
        />
      </div>

      {/* Language switcher — top right */}
      <div className="absolute top-5 right-5 flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-1 py-1 backdrop-blur-sm">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-150 ${
              lang === l.code
                ? "bg-white/[0.12] text-white shadow-sm"
                : "text-white/35 hover:text-white/65"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Top-left: Globe icon */}
      <div className="absolute top-5 left-5 flex items-center gap-2 text-white/20">
        <Globe className="h-3.5 w-3.5" />
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">WITH Group</span>
      </div>

      <div className="relative w-full max-w-[680px]">

        {/* ── Header ── */}
        <div className="mb-14 flex flex-col items-center text-center anim-fade-up">
          <div className="mb-7 anim-scale-in delay-100">
            <img
              src={withLogo}
              alt="WITH"
              className="h-[52px] w-auto opacity-90 brightness-0 invert"
            />
          </div>

          {/* Tag */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 anim-fade-in delay-150">
            <Shield className="h-3 w-3 text-[#14a76c]" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/45 font-medium">
              {tx.tag}
            </span>
          </div>

          <h1 className="text-[28px] font-semibold text-white tracking-[-0.02em] leading-tight anim-fade-up delay-200">
            {tx.choose}
          </h1>
          <p className="mt-2.5 text-[13px] text-white/38 max-w-xs leading-relaxed anim-fade-in delay-300">
            {tx.select}
          </p>
        </div>

        {/* ── Portal cards ── */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* WithProperty */}
          <Link
            to="/portal/login"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-[#14a76c]/40 hover:bg-[#111111] hover:shadow-[0_0_48px_rgba(20,167,108,0.10)] anim-fade-up delay-300"
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(20,167,108,0.08), transparent 70%)",
              }}
            />
            {/* Top accent line */}
            <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#14a76c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#14a76c]/[0.1] ring-1 ring-[#14a76c]/[0.2] transition-all duration-300 group-hover:bg-[#14a76c]/[0.15] group-hover:ring-[#14a76c]/[0.35]">
                <Building2 className="h-[18px] w-[18px] text-[#14a76c]" />
              </div>

              {/* Title */}
              <h2 className="text-[16px] font-semibold text-white tracking-[-0.01em]">{tx.wp}</h2>

              {/* Sub-roles */}
              <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-[#14a76c]/60 font-medium">{tx.wpSub}</p>

              {/* Description */}
              <p className="mt-3 text-[13px] text-white/40 leading-relaxed">{tx.wpDesc}</p>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#14a76c] tracking-wide">
                  {tx.enter}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-[#14a76c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>

          {/* WithCare */}
          <Link
            to="/care/login"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-[#e07a5f]/40 hover:bg-[#111111] hover:shadow-[0_0_48px_rgba(224,122,95,0.10)] anim-fade-up delay-400"
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(224,122,95,0.08), transparent 70%)",
              }}
            />
            {/* Top accent line */}
            <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#e07a5f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07a5f]/[0.1] ring-1 ring-[#e07a5f]/[0.2] transition-all duration-300 group-hover:bg-[#e07a5f]/[0.15] group-hover:ring-[#e07a5f]/[0.35]">
                <HeartHandshake className="h-[18px] w-[18px] text-[#e07a5f]" />
              </div>

              {/* Title */}
              <h2 className="text-[16px] font-semibold text-white tracking-[-0.01em]">{tx.care}</h2>

              {/* Sub-roles */}
              <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-[#e07a5f]/60 font-medium">{tx.careSub}</p>

              {/* Description */}
              <p className="mt-3 text-[13px] text-white/40 leading-relaxed">{tx.careDesc}</p>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#e07a5f] tracking-wide">
                  {tx.enter}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-[#e07a5f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        </div>

        {/* ── Footer ── */}
        <div className="mt-10 flex flex-col items-center gap-2.5 anim-fade-in delay-500">
          <div className="flex items-center gap-2 text-white/20">
            <div className="h-px w-8 bg-white/10" />
            <Shield className="h-3 w-3" />
            <span className="text-[10px] tracking-[0.18em] uppercase font-medium">{tx.secure}</span>
            <div className="h-px w-8 bg-white/10" />
          </div>
          <p className="text-[11px] text-white/18">{tx.copy}</p>
        </div>
      </div>
    </div>
  );
}
