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
    className={`${Hol.className} ${Hol.variable} fixed bottom-4 right-4 md:bottom-8 md:right-8 z-100  overflow-auto`}
  >
    <div className="flex flex-col items-end leading-relaxed justify-center  text-black  px-4 py-4">
    <Link href="/Manifesto" onClick={e=>{
    
    }}>
      <h1 className="md:text-[1.2vw] hover:line-through decoration-[#c80000] duration-1000 p-1 text-[4vw] font-bold leading-none">
         Manifesto <span className="text-[#c80000] md:text-[1.2vw] text-[4vw]">*</span>
      </h1>
    </Link>

    <Link href="/Manifesto">
      <h1 className="md:text-[1.2vw] hover:line-through decoration-[#c80000] p-1 text-[4vw] font-bold leading-none">
        Random <span className="text-[#c80000] md:text-[1.2vw] text-[4vw]">*</span>
      </h1>
    </Link>

    <Link href="/Scratchers">
      <h1 className="md:text-[1.2vw] hover:line-through decoration-[#c80000] p-1 text-[4vw] font-bold leading-none">
        Scratchers <span className="text-[#c80000] md:text-[1.2vw] text-[4vw]">*</span>
      </h1>
    </Link>
    <h1 className="md:text-[1vw] border-l border-[#c80000] pl-2 mt-2 text-[2vw] font-bold leading-none">
        C.2026.SHUNNO.O.OSHIM.
      </h1>
    </div>
    </div>
      </>
    )
}