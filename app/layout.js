import { Geist, Pinyon_Script } from "next/font/google";
import Transition from './provider';
import TransitionProvider from "./provider";




import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



// const pinyon = Pinyon_Script({
//   variable: "Pinyon",
//   subsets:['latin'],
//   weight:"400"
// })

export const metadata = {
  title: "Shunno /o/ Oshim",
  description: "Official Store for Shunno /o/ Oshim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href='/logo.jpg' type='image/jpg'  />
      <body
        className={`${geistSans.variable}   antialiased`}
        >
          {/* <TransitionProvider> */}
            {children}
          {/* </TransitionProvider> */}
      </body>
      
    </html>
  );
}
