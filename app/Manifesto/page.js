'use client'
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import localFont from "next/font/local";
import BottomMenu from "../components/bottom";
import { IBM_Plex_Mono } from "next/font/google";

const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight:"400"
  
})



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
      duration:.2,
      opacity:1
    })

    tl.to(".lineup", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });


    gsap.from(mottosplit.words,{
      opacity:0,
      y:48,
      stagger:0.118,
      color:"#c80000"
    })

  }, []);

  return (
    <div className={`w-full h-full  ${IBM.variable} ${IBM.className} flex-col`}>
    {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}
    

    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <img src="/logo.jpg" className="manImage fixed "/>
      {/* <div className="flex flex-row w-full items-center justify-center">
      <h1 className="secondText text-black text-[4vw] md:text-[2vw] whitespace-nowrap">HOW <span className="text-[#c80000] px-10">SHUNNO/O/OSHIM </span>
    CAME TO EXISTENCE </h1>
    </div> */}
    <h1 className={`motto ${IBM.className} text-l md:text-xl italic`}>
      THE ABYSS DOESN'T KNOW HOW VOID IT IS
    </h1>
    <div className="flex flex-row items-center justify-start w-[90vw] md:w-[40vw]">
      <div className="lineup w-0 h-px m-4 bg-black"></div>
       <span className={`text-[#c80000] ${Hol.className}`}>*</span>
    </div>
   </div>
   
      <section className="heroSection mb-50 flex w-full min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center text-left  justify-center m-4 w-[70vw] md:w-[60vw] h-full">
        <p className="heroText text-2.5xl border-b">THE ORIGIN</p>
        <h1 className="md:text-[2vw] text-[3vw] box-content text-justify  my-4 heroText ">
        Before there was form, there was breath, there was scent, raw and sacred.
        At shunno/o/oshim, we view scent not as a cosmetic enhancer rather as an substantial truth, something to be felt, something that carves something in the void of human soul. A bridge it is, spanning the total emptiness Shunno[zero] from which we emerge and the boundless cosmos Oshim[infinite] to which we return.
        </h1>
        </div>
        <div className="flex flex-col items-center text-left  justify-center m-4 w-[70vw] md:w-[60vw] h-full">

        <p className="heroText text-2.5xl border-b">THE BlOOD OF THE EARTH</p>
        <h1 className="md:text-[2vw] text-[3vw] box-content text-justify  my-4 heroText  ">
        We take pride in crafting strictly with 100% natural, uncompromised raw materials. Rare wild ouds, raw animalic musks, and botanical extracts form our palette. These are not approximations, they are living, breathing extractions harvested from the earth and for the earthlings. 
        </h1>
        </div>
      </section>
      <BottomMenu/>
    </div>
  );
}
