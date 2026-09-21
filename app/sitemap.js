import { siteUrl } from "./seo";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/garden`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/Manifesto`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/randoms`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
