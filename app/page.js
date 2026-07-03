'use client';
import localFont from 'next/font/local';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from 'next/navigation';
import  * as textSplitter from 'gsap/SplitText'






export const Hol = localFont({
  src: './fonts/holstein.ttf', 
   variable: '--font-hol',
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
        const el = document.querySelector(".loader h1");
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
      delay: 0.5,
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

  const nextPageHandler = () => {
    gsap.to(".gardenNav", {
      scale: 1.2,
      rotate: 360,
      loop: 1,
      duration: 1.5,
      onComplete: () => {
        router.push("/garden");
      }
    });
  };

  return (

      
    <section className={`${Hol.className} ${Hol.variable} bg-black `}>

    

<div className='text-clip pointer-events-none flex flex-row items-center overflow-hidden justify-center md:text-[10vh] text-[30vw] px-5 h-screen w-screen fixed z-999 bg-white '>
   
   {/* <div className='second-loader w-full h-full absolute bg-black top-300 left-0 pointer-events-none  z-999999997 '>

   </div> */}

    <img src="/new-bg-soh.jpg" alt="loader" className="bg-soh absolute h-screen w-screen object-cover">
    </img>
    </div>

    <div className='loader pointer-events-none w-screen h-screen fixed object-cover inset-0 flex flex-row items-center  justify-center md:text-[10vh] text-[30vw] px-5  z-99999 bg-black overflow-hidden '>
    <h1 className="text-white">
      00
    </h1>
    <h1 className={`${Hol.className} ${Hol.variable} text-[#c80000] text-[20vw] ml-2`}>
      *
    </h1>
    <img src="/bw-logo.jpg" alt="loader" className="logo pointer-events-none  absolute opacity-0 p-5 ">
    </img>
    </div>

  


    
      <div  className="header  fixed z-10 flex flex-col justify-start px-5 py-3 min-w-screen ">
        <div className='max-w-30'>

        <h1 className="headerText md:text-[1vw]  text-[3vw]  font-">
          THE GARDEN  <span className="italic">DIED</span> 
        </h1>
        <div className='flex flex-row items-center justify-start'>

        <h1 className="headerText md:text-[1vw] text-[3vw] font-stretch-200% ">
          A   LONG  TIME   AGO. 
        </h1>
        <span className="animate-pulse text-2xl text-[#c80000] px-2">*</span>
        {/* <div className='liner w-0 h-px bg-[#c80000]'></div> */}
        </div>
        </div>
      </div>
   
  

  <div className="flex mr-[5vw] flex-col items-center justify-center min-h-screen ">
    <div className="hero">
    
    </div>
      <div className="entry opacity-0 w-full z-4 pb-6 flex flex-row place-items-end justify-center min-h-screen min-w-screen">
        <div className="flex flex-row  justify-end items-end min-w-screen  ">
       <div>
        <h1>
          ENTER 
        </h1>
        <h1  className={`${Hol.className} ${Hol.variable}  flex flex-row   text-black md:text-[1.1vw]  text-[3.5vw] font-bold hover:animate-pulse pointer  transition-all duration-300 ease-in-out  `}>
         THE <p className=" pl-1  "> GARDEN .</p>
        </h1>
       </div>
        {/* <h1 className={`${Hol.className} ${Hol.variable} py-4 text-black md:text-[1.5vw]  text-[5vw] font-bold  `}>
        ----------------------
        </h1> */}

        <div onClick={nextPageHandler} >
        <img className=" gardenNav ml-2 border  w-[12vw] md:w-[3.5vw] p-3  rounded-full  hover:border-[#c80000]  ease-in-out duration-300" src='/arrow-up-right.svg'/>
        </div>
       </div>

    
      </div>
  </div>


    </section>
  )
}