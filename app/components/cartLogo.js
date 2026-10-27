'use client'
import localFont from "next/font/local"
import Image from "next/image";
import Link from "next/link";
import {useStore} from "./zustand"

export const Hol = localFont({
    src: '../fonts/holstein.ttf',
    variable: '--font-hol',
});

export const num = localFont({
    src: '../fonts/holstein.ttf',
    variable: '--font-hol',
});

export default function CartLogo() {

    

    return (
        <div >
         {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}
            <div className="fixed top-0 z-100 opacity-100 flex w-full flex-row items-center justify-between bg-white text-white">
              
                
            <div className="mx-5">
              <Link href='/garden' className="pointer-events-auto flex  flex-row items-center justify-center">
                <img src='/second-logo.jpg' alt='Shunno O Oshim' width="200" height="200" className='w-13 h-auto'/>
              </Link>
            </div>
         

              {/* <span className={`${Hol.className} ${Hol.variable} ml-5 text-[#c80000]`}>*</span> */}
             <div>
              <Image src="/logo.jpg" alt="Shunno O Oshim" className="w-15  h-auto mx-5 my-4  " width={130} height={200}></Image>
              
             </div>
        
            


              <div className='flex flex-row items-center  mt-4 m-2  text-black '>     
                <div className="flex flex-row items-center justify-center">
                <span className={`${num.className} ${num.variable} md:text-[1.5vw] text-[5vw] px-2 py-0 bg-[#c80000] text-white rounded-full`}>{useStore(s=>s.items)}</span>
                <Link  href="/cart" className="pointer-events-auto">
                <div className="flex flex-row items-center justify-center border rounded-full  mx-3">
                <img src='/astb.svg' alt='Shopping basket' width="20" height="16" className='h-[3vh] m-2'>
                </img>
                { useStore(s=>s.items) > 0 ? (
                <div className="flex flex-row items-center justify-center ">
                <p className={`${Hol.className} ${Hol.variable} text-black md:text-[1.1vw] text-[4vw] px-2 py-0 rounded-full`}>BASKET</p>
                <div className="bg-[#c80000] h-2 w-2 rounded full animate-pulse m-2"></div>
                </div>
                ) : null }
                </div>
                </Link>
                </div>
              </div> 
              </div>
            <div>
        </div>
        </div>
    )

}
