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
    const tl = gsap.timeline()
  
    const split = SplitText.create(".heroText", {
      type: "words,lines",
      linesClass: "heroTextLine",
    });
 
    const mottosplit = SplitText.create(".motto", {type:"words, lines"})
  
    const tween = gsap.from(split.words, {
      opacity: 0,
      y: 48,
      color: "#c80000",
      // skewY: 10,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".heroSection",
        start: "top bottom", 
        end: "bottom bottom",
        scrub: 3.5,
      },
    });

    tl.to(".manImage",{
      delay:.5,
      duration:1,
      opacity:0.1
    })

    tl.from(".secondText",{
      duration:.5,
      opacity:1
    })

    tl.to(".lineup", {
      width: "100%",
      duration: 1,
      ease: "power2.inOut",
    });


    tl.from(mottosplit.words,{
      opacity:0,
      y:48,
      stagger:0.118,
      color:"#c80000"
    })

  }, []);

  return (
    <div className={`w-full h-full  ${Hol.variable} ${Hol.className} flex-col`}>
    {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}
    

    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <img src="/logo.jpg" className="manImage fixed "/>
      <div className="flex flex-row w-full items-center justify-center">
      <h1 className="secondText text-black text-[4vw] md:text-[2vw] whitespace-nowrap">HOW <span className="text-[#c80000] px-10">SHUNNO/O/OSHIM </span>
    CAME TO EXISTENCE </h1>
    {/* <img src="/arrow-up-right.svg" className="animate-pulse px-3 rotate-135"></img> */}
    </div>
    <div className="flex flex-row items-center justify-start w-[90vw] md:w-[40vw]">
      <div className="lineup w-0 h-px m-4 bg-[#c80000]"></div>
    </div>
    <h1 className={`motto ${Hol.className} text-s italic`}>
      --- THE ABYSS DOESNT KNOW HOW VOID IT IS <span className="text-[#c80000]">*</span>
    </h1>
   </div>
   
      <section className="heroSection mb-50 flex w-full min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center text-left  justify-center m-4  w-[80vw] h-ful">
        <p className="heroText text-2.5xl border-b">THE ORIGIN</p>
        <h1 className="text-[4vw] box-content text-justify mb-4 heroText ">
        A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.
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
