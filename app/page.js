'use client';
import localFont from 'next/font/local';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import  * as textSplitter from 'gsap/SplitText'
import next from 'next';






export const Hol = localFont({
  src: './fonts/myst.otf', 
   variable: '--font-hol',
});

export const Num = localFont({
  src: './fonts/holstein.ttf', 
   variable: '--font-num',
});



export default function Home() {



const router = useRouter()


  gsap.registerPlugin(useGSAP, textSplitter);

  useGSAP(() => {

    const splitter = textSplitter.SplitText.create(".headerText", { type: "lines, words" });

    const tl = gsap.timeline();



    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        const el = document.querySelector(".loader-counter");
        if (el) el.textContent = counter.val.toFixed(0).padStart(2, "0");
      },
    });

    tl.to(".logo", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      ease: "power3.out",
    });

    tl.to(".loader", {
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.8,
      delay: 0.2,
      onComplete: () => {
        document.querySelector(".loader")?.remove();
      },
    });

    tl.to(".text-clip", {
      clipPath: "polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)",
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".bg-soh", {
      scale: 1,
      duration: 0.6,
      ease: "power3.inOut",
    });

    tl.to(".text-clip", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "expo.out",
    });

    tl.from(splitter.words, {
      // delay: 0.5,
      y: 30,
      skewY:10,
      stagger: 0.18,
      opacity: 0,
      ease: "power3.out",
    });

    // tl.to(splitter.lines, {
    //   borderB: "1px solid #c80000",
    //   duration: 1.5,
    //   ease: "power3.out",
    // })

    

   
    tl.to(".entry", {
      opacity: 1,
      y: -30,
      ease: "power3.out",
    });

    
  });

  const nextAnim = () => {
    // const tl = gsap.timeline();
    gsap.to(".gardenNav", {
      delay: 0.2,
      rotate: 360,
    });
  }

  return (

      
    <section className={`${Hol.className} ${Hol.variable} bg-black `}>

    

<div className='text-clip pointer-events-none flex flex-row items-center overflow-hidden justify-center md:text-[10vh] text-[30vw] px-5 h-full  w-full fixed z-999 bg-white '>
   
   {/* <div className='second-loader w-full h-full absolute bg-black top-300 left-0 pointer-events-none  z-999999997 '>

   </div> */}

    <img src="/new-bg-soh.jpg" alt="Abstract visual identity of Shunno O Oshim" width="1720" height="880" className="bg-soh absolute h-screen w-screen object-cover">
    </img>
    </div>

    <div className='loader pointer-events-none w-screen h-screen fixed object-cover inset-0 flex flex-row items-center  justify-center md:text-[10vh] text-[30vw] px-5  z-99999 bg-black overflow-hidden '>
    <p className={`${Num.className} ${Num.variable} loader-counter text-6xl md:text-8xl text-white`}>
      00
    </p>
    <p className={`${Num.className} ${Num.variable} text-[#c80000] text-[10vw] md:text-[5vw] ml-2`}>
      *
    </p>
    <img src="/bw-logo.jpg" alt="Shunno O Oshim" width="222" height="246" className="logo pointer-events-none  absolute opacity-0 p-5 ">
    </img>
    </div>

  


    
      <div  className="header w-full fixed z-10 flex flex-row justify-between items-center px-5 py-3 ">
       
       <div>
   <p className="headerText md:text-[1vw] gap-2 text-[3vw]  ">
        The
        </p>
</div>
<div>
   <p className="headerText md:text-[1vw] gap-2 text-[3vw]  ">
        garden 
        </p>
</div>
       

<div>
        <p className="headerText md:text-[1vw]  text-[3vw]  ">
        <span className="italic text-[#c80000] animate-pulse">died</span> 
        </p>

</div>
         <div className=''>
        <p className="headerText md:text-[1vw]  text-[3vw] ">
         a long ago
        </p>
        {/* <span className="animate-pulse text-2xl text-[#c80000] px-2">*</span> */}
        {/* <div className='liner w-0 h-px bg-[#c80000]'></div> */}
        </div>
      </div>
   
  

  <div className="flex w-full flex-col items-center justify-center min-h-screen">
    <h1 className="sr-only">Shunno O Oshim — independent natural niche perfumes</h1>
    <h2 className="sr-only">Explore The Garden, our collection of natural artisan fragrances</h2>

      <div className="entry fixed bottom-3 opacity-0 w-full z-4 flex flex-col justify-end min-h-screen">
        <div className="flex flex-row  justify-between items-center w-full p-6">
     <div>
        <p className={`${Hol.className} ${Hol.variable} flex flex-row text-black md:text-[1vw] text-[3vw] `}>
         Visit
        </p>
       </div>
       <div>

        <p className={`${Hol.className} ${Hol.variable} flex flex-row text-black md:text-[1vw] text-[3vw] `}>
         the
        </p>
       </div>

       <div>

        <p className={`${Hol.className} ${Hol.variable} flex flex-row text-[#c80000] md:text-[1.1vw] text-[3vw] `}>
         cemetry 
        </p>
       </div>

       <div onClick={nextAnim}>
        <Link href="/garden"aria-label="Explore the perfume collection" >
          <img width="24" height="24" className="gardenNav  w-[6vw] md:w-[2vw] rounded-full hover:border animate-pulse ease-in-out duration-30" src='/astb.svg' alt="" />
        </Link>
       </div>
        {/* <h1 className={`${Hol.className} ${Hol.variable} py-4 text-black md:text-[1.5vw]  text-[5vw] font-bold  `}>
        ----------------------
        </h1> */}
        
       </div>

    
      </div>
  </div>


    </section>
  )
}
