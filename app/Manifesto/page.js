'use client'
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import localFont from "next/font/local";
import BottomMenu from "../components/bottom";


export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});

export default function ManifestoPage() {


  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  
    const split = SplitText.create(".heroText", {
      type: "words,lines",
      linesClass: "heroTextLine",
    });
  
    const tween = gsap.from(split.words, {
      opacity: 0,
      y: 48,
      color: "#c80000",
      // skewY: 10,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".heroSection",
        // pin: true,
        start: "top bottom", 
        end: "bottom bottom",
        scrub: 3.5,
      },
    });

  }, []);

  return (
    <div className={`w-full h-full  ${Hol.variable} ${Hol.className} `}>
    {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}
    
    <div className="flex w-full min-h-screen flex-row items-center justify-center">
      <img src="/logo.jpg" className="fixed opacity-5"/>
      <h1 className="text-black text-[4vw] md:text-[1.5vw] whitespace-nowrap">HOW <span className="text-[#c80000] px-10">SHUNNO/O/OSHIM </span>
    CAME TO EXISTENCE "</h1>
    </div>
      <section className="heroSection my-10 flex w-full min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start w-full h-ful">
        <p className="heroText text-2.5xl border-b">THE ORIGIN</p>
        <h1 className="text-[5vw] heroText w-[80vw] block ">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h1>
        </div>

          <p className="heroText text-2.5xl border-b">THE FUTURE</p>
        <h1 className="text-[5vw] heroText w-[80vw] block ">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h1>
      </section>
      <BottomMenu/>
    </div>
  );
}
