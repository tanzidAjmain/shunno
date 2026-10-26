'use client';
import localFont from 'next/font/local';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(useGSAP, SplitText);







export const Hol = localFont({
  src: './fonts/holstein.ttf', 
   variable: '--font-hol',
});

export const Num = localFont({
  src: './fonts/holstein.ttf', 
   variable: '--font-num',
});



export default function Home() {


  gsap.registerPlugin(useGSAP, SplitText);

  useGSAP(() => {
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

    tl.to(".entry", {
      y: -30,
      opacity: 1,
      stagger: 0.18,
      ease: "power3.out",
    });

    // Keep SplitText from preventing the loader timeline from starting on
    // browsers where line measurement or font loading causes it to fail.
    let splitter;
    try {
      splitter = SplitText.create(".headerText", { type: "lines, words" });
    } catch (error) {
      console.error("Unable to split the homepage header text:", error);
    }

    if (splitter?.words?.length) {
      tl.from(splitter.words, {
        y: 30,
        skewY: 10,
        stagger: 0.18,
        opacity: 0,
        ease: "power3.out",
      });
    } else {
      tl.from(".headerText", {
        y: 30,
        opacity: 0,
        stagger: 0.18,
        ease: "power3.out",
      });
    }

    // tl.to(splitter.lines, {
    //   borderB: "1px solid #c80000",
    //   duration: 1.5,
    //   ease: "power3.out",
    // })

    

   
    // tl.to(".entry", {
    //   delay: 2.5,
    //   opacity: 1,
    //   ease: "power3.out",
    // });

    
    
  });
  
  
  
  return (

      
    <section className={`${Hol.className} ${Hol.variable} fixed inset-0 h-dvh w-full overflow-hidden overscroll-none bg-black`}>

    

<div className='text-clip pointer-events-none flex flex-row items-center overflow-hidden justify-center md:text-[10vh] text-[30vw] px-5 h-dvh w-full fixed inset-0 z-999 bg-black'>
   
   {/* <div className='second-loader w-full h-full absolute bg-black top-300 left-0 pointer-events-none  z-999999997 '>

   </div> */}
  <div className='min-w-full h-full flex flex-col  items-center justify-between'>
    <img className='entry opacity-0  w-20 h-auto mt-25 ' src='/logo.jpg'/>
   <Link href='/garden' aria-label="Explore the perfume collection" className="pointer-events-auto">
    <div className='header line-through cursor-pointer flex flex-row items-center justify-center'>
    {/* <img className='w-30 h-auto' src='/gate.png'/> */}
    <p className='headerText text-[4vw]  decoration-[#c80000] md:text-[1.3vw] py-15'>ENTER  THE CEMETERY</p>
    <p className='headerText text-[4vw] md:text-[1.3vw] mt-2 p-1 text-[#c80000]'>*</p>
    </div>
    </Link>
  </div>
    <img src="/bg-new-soh-2.jpg" alt="Visual identity of Shunno O Oshim" className="bg-soh fixed w-60, h-60 object-cover md:w-180 md:h-120 ">
    </img>
    </div>

    <div className='loader pointer-events-none w-full h-dvh fixed object-cover inset-0 flex flex-row items-center  justify-center md:text-[10vh] text-[30vw] px-5  z-99999 bg-black overflow-hidden '>
    <p className={`${Num.className} ${Num.variable} loader-counter text-6xl md:text-8xl text-white`}>
      00
    </p>
    <p className={`${Num.className} ${Num.variable} text-[#c80000] text-[10vw] md:text-[5vw] ml-2`}>
      *
    </p>
    <img src="/logo.jpg" alt="Shunno O Oshim"  className="logo pointer-events-none invert-100 absolute opacity-0 p-5 w-50 h-auto">
    </img>
    </div>

  


{/*     
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
        
        </div>
      </div>
    */}
  

  <div className="flex h-full w-full flex-col items-center justify-center">
    <h1 className="sr-only">Shunno O Oshim — independent natural niche perfumes</h1>
    <h2 className="sr-only">Explore The Garden, our collection of natural artisan fragrances</h2>

{/* <div className="entry opacity-0 fixed z-4 flex w-full flex-col justify-end h-full items-center bottom-0">
        <div className="flex flex-row justify-between items-center w-full p-6">
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

      
    <Link href='/garden' aria-label="Explore the perfume collection" onClick={nextAnim}>
       <div>
        <p className={`${Hol.className} ${Hol.variable} flex flex-row text-[#c80000] md:text-[1.1vw] text-[3vw] `}>
         cemetery
        </p>
       </div>
    </Link>

  
        <Link href="/garden"aria-label="Explore the perfume collection" >
          <img width="24" height="24" className="gardenNav  w-[6vw] md:w-[2vw] rounded-full hover:rotate-180 animate-pulse ease-in-out duration-30" src='/astb.svg' alt="" />
        </Link>
    
        
       </div> */}

    
      {/* </div> */}
  </div>


    </section>
  )
}
