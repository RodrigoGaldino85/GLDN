import type { Metadata } from "next";

// Internal catalogue — keep it out of search results.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function DesignSystemLayout({ children }: LayoutProps<"/design-system">) {
  return children;
}
