import { createFileRoute, Outlet } from "@tanstack/react-router";

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
    <div className="font-inter">
      <Outlet />
    </div>
  );
}
