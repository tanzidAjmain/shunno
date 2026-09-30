'use client'
import localFont from "next/font/local"
import Image from "next/image";
import Link from "next/link";
import {useStore} from "./zustand"

export const Hol = localFont({
    src: '../fonts/holstein.ttf',
    variable: '--font-hol',
});

export default function CartLogo() {

    

    return (
        <>
         {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}
            <div className="fixed top-0 z-100 flex w-full items-center justify-between bg-white text-white">
              <Link href='/garden'>
              <Image src="/logo.jpg" alt="Shunno O Oshim" className="md:w-29 md:h-20" width={130} height={200}></Image>
              </Link>
              <div>
                {/* <h1 className={`${Hol.className} ${Hol.variable} md:text-[1.5vw] text-[4vw] text-black`}> Garden </h1> */}
              </div>

              <div className='flex flex-row items-center w-screen justify-end mt-4 m-2 inset-0 text-black '>     
                <div className="flex flex-row items-center justify-center">
                <span className={`${Hol.className} ${Hol.variable} md:text-[1.5vw] text-[5vw] px-2 py-0 bg-[#c80000] text-white rounded-full`}>{useStore(s=>s.items)}</span>
                <Link  href="/cart" className="pointer-events-auto">
                <div className="flex flex-row items-center justify-center border rounded-full p-1 mx-3">
                <img src='/astb.svg' alt='Shopping basket' width="24" height="24" className='h-[3vh] m-2'>
                </img>
                { useStore(s=>s.items) > 0 ? (
                <div className="flex flex-row items-center justify-center ">
                <p className={`${Hol.className} ${Hol.variable} text-black md:text-[1.1vw] text-[4vw] px-2 py-0 rounded-full`}>CART</p>
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
        </>
    )

}
