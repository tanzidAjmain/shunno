import { siteUrl } from "../seo";

export const metadata = {
  title: "The Garden | Natural Niche Perfumes",
  description:
    "Explore The Garden by Shunno O Oshim: independent natural perfumes made with rare oud, animalic musk, and botanical extracts.",
  alternates: { canonical: "/garden" },
  openGraph: {
    title: "The Garden | Shunno O Oshim",
    description: "A collection of independent natural niche perfumes.",
    url: `${siteUrl}/garden`,
  },
};

export default function GardenLayout({ children }) {
  return children;
}
