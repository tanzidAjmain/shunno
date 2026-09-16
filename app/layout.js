import { Geist } from "next/font/google";
// import { createContext } from "react";
import { ProductProvider } from "./components/provider";






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
  title: "Shunno /o/ Oshim",
  description: "Official Store for Shunno /o/ Oshim",
  keywords: "Shunno, Oshim, Art, perfume, fragrance, online store, unique art, limited edition, handmade, luxury, exclusive, creative, artistic expression",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href='/logo.jpg' type='image/jpg'  />
      <body
        className={`${geistSans.variable}   antialiased`}
        
        >
          {/* <ProductProvider> */}
            {children}
          {/* </ProductProvider> */}
      </body>
      
    </html>
  );
}
