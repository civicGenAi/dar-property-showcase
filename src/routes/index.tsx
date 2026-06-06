import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kareen is my agent — Private real estate advisory · Dar es Salaam" },
      { name: "description", content: "A private real estate advisory placing premium homes across Masaki, Mikocheni and Mbezi Beach." },
      { property: "og:title", content: "Kareen is my agent" },
      { property: "og:description", content: "Private real estate advisory · Dar es Salaam." },
    ],
  }),
  component: () => (
    <ClientOnly fallback={<div className="min-h-screen bg-[var(--ivory)]" />}>
      <App />
    </ClientOnly>
  ),
});
