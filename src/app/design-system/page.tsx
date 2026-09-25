import type { Metadata } from "next";
import { Showcase } from "./Showcase";

export const metadata: Metadata = {
  title: "Design system — GLDN Tech",
  description: "Biblioteca completa do GLDN Tech design system: fundamentos, componentes, estados, padrões e templates, nos temas escuro e claro.",
};

export default function DesignSystemPage() {
  return <Showcase />;
}
