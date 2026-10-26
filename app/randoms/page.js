'use client'
import localFont from "next/font/local"
import BottomMenu from "../components/bottom";
import { DataProv } from "../components/provider";

  export const Hol = localFont({
    src: '../fonts/holstein.ttf', 
     variable: '--font-hol',
  });
  


export default function RandomPage(){

  // const products = DataProv()
  

    return(
      <div className={`flex ${Hol.className} ${Hol.variable} flex-col justify-center items-center w-full`}>
       <div className="flex mb-10 flex-row justify-center items-center w-full">
            <span className="text-[10vw] md:text-[5.5vw] mt-10 text-[#c80000]">*</span>
        <h1 className="text-[10vw] md:text-[3.5vw] mt-10">
          RANDOMS
        </h1>
       </div>
       <div className="h-full flex flex-col justify-center items-center ">
        <h2 className="text-gray-700 mb-10 ">ARCHIVE. of SHUNNO</h2>
        <p className="text-xs"> [ NOTHING FOR NOW ]</p>
       </div>
        <BottomMenu/>
       </div>
    )
}
