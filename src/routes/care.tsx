import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/care")({
  component: CareLayout,
});

function CareLayout() {
  return <Outlet />;
}
