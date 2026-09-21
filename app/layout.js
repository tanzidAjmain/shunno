import { Geist } from "next/font/google";
// import { createContext } from "react";
import { ProductProvider } from "./components/provider";
import { brandName, siteDescription, siteUrl } from "./seo";






import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const ProductContext = createContext();
 

//  const products = [
//     { id: 1, name: 'MONKEY FOR THE WILD', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"], archive: false },
//     { id: 2, name: 'MONKEY FOR THE SEGS', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"], archive: false },
//   ];
// const pinyon = Pinyon_Script({
//   variable: "Pinyon",
//   subsets:['latin'],
//   weight:"400"
// })

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${brandName} | Natural Niche Perfumes`, template: `%s | ${brandName}` },
  description: siteDescription,
  applicationName: brandName,
  keywords: ["Shunno O Oshim", "niche perfume", "natural perfume", "artisan fragrance", "oud perfume", "Bangladesh perfume"],
  authors: [{ name: brandName }],
  creator: brandName,
  publisher: brandName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: brandName,
    title: `${brandName} | Natural Niche Perfumes`,
    description: siteDescription,
    images: [{ url: "/shunno-o-ooshim.jpg", width: 1674, height: 910, alt: "Shunno O Oshim natural niche perfumes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | Natural Niche Perfumes`,
    description: siteDescription,
    images: ["/shunno-o-ooshim.jpg"],
  },
  icons: { icon: [{ url: "/logo.jpg", type: "image/jpeg" }], apple: [{ url: "/logo.jpg", type: "image/jpeg" }] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}   antialiased`}
        
        >
          {/* <ProductProvider> */}
            {children}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "Organization",
                      name: brandName,
                      url: siteUrl,
                      logo: `${siteUrl}/logo.jpg`,
                      description: siteDescription,
                    },
                    {
                      "@type": "WebSite",
                      name: brandName,
                      url: siteUrl,
                      description: siteDescription,
                    },
                  ],
                }),
              }}
            />
          {/* </ProductProvider> */}
      </body>
      
    </html>
  );
}
