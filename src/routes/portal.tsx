import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PortalProvider } from "@/lib/portal/store";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "WITH Owner Portal" },
      { name: "description", content: "Private asset management access for WITH owners." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PortalLayout,
});

function PortalLayout() {
  return (
    <PortalProvider>
      <div className="portal-app font-inter">
        <Outlet />
      </div>
    </PortalProvider>
  );
}
