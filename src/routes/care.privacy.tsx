import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import withLogo from "@/assets/with-logo-black.png";

export const Route = createFileRoute("/care/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Data Policy — WITH Care" },
      {
        name: "description",
        content: "How WITH Care collects, uses, and retains employee and HR contact data.",
      },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "What we collect",
    body: "Full name, contact details, company affiliation, and the settlement request details you or your HR team submit through this site or the Care portal — housing preferences, paperwork status, and appointment notes tied to your request.",
  },
  {
    title: "Why we collect it",
    body: "Solely to coordinate your relocation: matching you with a WITH Care agent, scheduling housing viewings and appointments, and tracking paperwork (TRC, tax code, work permit) status on your behalf.",
  },
  {
    title: "Who can see it",
    body: "Your assigned WITH Care agent, your company's designated HR contact (for the fields relevant to the contract tier), and, where required, the government offices processing your paperwork. We do not sell or share data with unrelated third parties.",
  },
  {
    title: "How long we keep it",
    body: "Request and settlement records are retained for the duration of your active contract plus 12 months, after which they are deleted unless you or your HR team request earlier removal.",
  },
  {
    title: "Your choices",
    body: "You can ask your WITH Care agent or your HR contact to review, correct, or delete your data at any time. Guest submissions (no account) can be removed by contacting hello@withcare.example with your request ID.",
  },
];

function PrivacyPage() {
  return (
    <div className="ec-theme min-h-screen bg-[var(--ec-sand)]">
      <header className="border-b border-[var(--ec-teal)]/10 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-6">
          <Link
            to="/employee-care"
            className="inline-flex items-center gap-2 text-sm text-[var(--ec-muted)] transition hover:text-[var(--ec-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            WITH Care
          </Link>
          <div className="flex items-center gap-2">
            <img src={withLogo} alt="WITH" className="h-6 w-auto opacity-80" />
            <HeartHandshake className="h-4 w-4 text-[var(--ec-coral)]" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--ec-coral)]">Legal</p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-[var(--ec-ink)] md:text-4xl">
          Privacy &amp; Data Policy
        </h1>
        <p className="mt-3 text-sm text-[var(--ec-muted)]">
          Last updated{" "}
          {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long" })}. This page
          explains what WITH Care collects when you submit a settlement request or use the Care
          portal, and how that information is handled.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="border-t border-[var(--ec-teal)]/10 pt-6">
              <h2 className="font-display text-lg text-[var(--ec-ink)]">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ec-muted)]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--ec-teal)]/10 bg-white p-6">
          <p className="text-sm text-[var(--ec-muted)]">
            Questions about your data? Contact{" "}
            <a
              href="mailto:hello@withcare.example"
              className="text-[var(--ec-teal)] underline underline-offset-2 hover:text-[var(--ec-teal-soft)]"
            >
              hello@withcare.example
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
