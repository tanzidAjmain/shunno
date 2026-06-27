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
        
        
            <div className=" bg-white top-0 flex flex-row items-center fixed  w-screen justify-between text-white">
              <Image src="/logo.jpg" alt="logo" width={100} height={150}></Image>
              <div>
                {/* <h1 className={`${Hol.className} ${Hol.variable} md:text-[1.5vw] text-[4vw] text-black`}> Garden </h1> */}
              </div>
              <div className=' flex flex-row items-center w-screen justify-end mt-4 m-2 inset-0 text-black '>
                <h1 className={`${Hol.className} ${Hol.variable} md:text-[1.5vw] text-[5vw] px-2 py-0 bg-[#c80000] text-white rounded-full`}>{useStore(s=>s.items)}</h1>
                <Link  href="/cart" className="pointer-events-auto">
                <img src='/astb.svg' alt='box' className=' border-b-2 h-[3vh] m-2 '>
                </img>
                </Link>
              </div>
        
            <div>
        </div>
        </div>
        </>
    )

}