'use client'
import localFont from 'next/font/local';
import Link from 'next/link';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});




export default function BottomMenu() {



    return (
        
      <>
      <div
    className={`${Hol.className} ${Hol.variable} w-full bg-white fixed bottom-0 p-4 z-100  overflow-auto`}
  >
    <div className="flex  flex-row items-center leading-relaxed justify-between w-full  text-black  px-1 py-4">
   
    

    <Link href="/Manifesto">
      <h2 className="md:text-[1vw] p-2 text-justify hover:line-through decoration-[#c80000] duration-1000 text-[3.5vw] leading-none">
         MANIFESTO <span className="text-[#c80000] md:text-[1.2vw] opacity-0 md:opacity-100 text-[2.5vw]">*</span>
      </h2>
    </Link>

    <Link href="/randoms">

      <h2 className="md:text-[1vw] p-2 text-justify hover:line-through decoration-[#c80000] text-[3.5vw] leading-none">
        RANDOMS <span className="text-[#c80000] md:text-[1.2vw] opacity-0 md:opacity-100 text-[2.5vw]">*</span>
      </h2>
    </Link>


    <Link href="/Scratchers">

      <h2 className="md:text-[1vw] p-2 text-justify hover:line-through decoration-[#c80000] text-[3.5vw]  leading-none">
        SCRATCHERS <span className="text-[#c80000] md:text-[1.2vw] opacity-0 md:opacity-100 text-[2.5vw]">*</span>
      </h2>
    </Link> 

     <Link href="/policy">

      <h2 className="md:text-[1vw] hover:line-through  decoration-[#c80000] p-2 text-[3.5vw]  leading-none">
      CONDITIONS <span className="text-[#c80000] opacity-0 md:opacity-100 md:text-[1vw] text-[2.5vw]">*</span>
      </h2>
    </Link> 

     <Link href="/garden">

       <h2 className="md:text-[1vw] hover:line-through decoration-[#c80000]p-2 text-[3.5vw]  leading-none">
      CEMETERY <span className="text-[#c80000] opacity-0 md:opacity-100 md:text-[1vw] text-[2.5vw]">*</span>
      </h2>
  
    </Link>
  
    </div>
    <div className='w-full flex flex-row items-center justify-start'>
    <p className="md:text-[.7vw] text-bold border-l border-[#c80000]  px-4 mx-2  text-[2vw] leading-none">
        C.2026.SHUNNO.O.OSHIM.
      </p>
    </div>
    </div>
      </>
    )
}
