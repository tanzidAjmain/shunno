import { productNameFromSlug, siteUrl } from "../../seo";

export async function generateMetadata({ params }) {
  const { details = [] } = await params;
  const rawName = details[0] || "Niche Perfume";
  const productName = productNameFromSlug(rawName);
  const pathname = `/garden/${details.map(encodeURIComponent).join("/")}`;

  return {
    title: `${productName} | Natural Hyper Niche Sartorial Scents`,
    description: `${productName} Shunno O Oshim, an independent hyper niche artisanal olfactory house created with rare natural materials. Discover its story and scent.`,
    alternates: { canonical: pathname },
    openGraph: {
      title: `${productName} | Shunno O Oshim`,
      description: `Discover ${productName}, by Shunno O Oshim.`,
      url: `${siteUrl}${pathname}`,
    },
  };
}

export default function ProductLayout({ children }) {
  return children;
}
