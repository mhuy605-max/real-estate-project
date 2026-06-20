import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/components/site/LangContext";
import { WpNav } from "@/components/with-property/WpNav";
import { WpHero } from "@/components/with-property/WpHero";
import { WpWhyChoose } from "@/components/with-property/WpWhyChoose";
import { WpSegments } from "@/components/with-property/WpSegments";
import { WpServices } from "@/components/with-property/WpServices";
import { WpAbout } from "@/components/with-property/WpAbout";
import { WpLeadForm } from "@/components/with-property/WpLeadForm";
import { WpFooter } from "@/components/with-property/WpFooter";

export const Route = createFileRoute("/with-property")({
  head: () => ({
    meta: [
      { title: "With Property — Cross-Border Real Estate Expertise You Can Trust" },
      {
        name: "description",
        content:
          "With Property: 20+ years of experience in Vietnam helping investors, students, and expats find the right property. Korean, English, Vietnamese. 100% Free Brokerage.",
      },
      { property: "og:title", content: "With Property — Cross-Border Real Estate Expertise" },
      { property: "og:description", content: "Cross-Border Real Estate Value, Partnering With You Every Step of the Way." },
    ],
  }),
  component: WithPropertyPage,
});

function WithPropertyPage() {
  return (
    <LangProvider>
      <div className="wp-theme min-h-screen">
        <WpNav />
        <main>
          <WpHero />
          <WpWhyChoose />
          <WpSegments />
          <WpServices />
          <WpAbout />
          <WpLeadForm />
        </main>
        <WpFooter />
      </div>
    </LangProvider>
  );
}
