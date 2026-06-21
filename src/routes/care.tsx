import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CarePortalProvider } from "@/lib/care/store";
import { CareLangProvider } from "@/lib/care/i18n";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/care")({
  component: CareLayout,
});

function CareLayout() {
  return (
    <CareLangProvider>
      <CarePortalProvider>
        <Outlet />
        <Toaster richColors position="top-right" />
      </CarePortalProvider>
    </CareLangProvider>
  );
}
