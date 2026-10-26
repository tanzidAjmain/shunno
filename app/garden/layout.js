import { siteUrl } from "../seo";

export const metadata = {
  title: "The Cemetery",
  description:
    "Explore The Cemetery of the Dead Garden: independent house with natural olfactory scents and perfumes made with rare oud, animalic musk, and botanical extracts.",
  alternates: { canonical: "/garden" },
  openGraph: {
    title: "The Cemetery | Shunno O Oshim",
    description: "A collection of natural hyper-niche artisanal perfumes.",
    url: `${siteUrl}/garden`,
  },
};

export default function GardenLayout({ children }) {
  return children;
}
