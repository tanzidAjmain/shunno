'use client'
import localFont from "next/font/local"
import BottomMenu from "../components/bottom";
import { DataProv } from "../components/provider";

  export const Hol = localFont({
    src: '../fonts/holstein.ttf', 
     variable: '--font-hol',
  });
  


export default function RandomPage(){

  const products = DataProv()
  

    return(
      <div className={`flex ${Hol.className} ${Hol.variable} flex-col justify-center items-center w-full`}>
       <div className="flex mb-10 flex-row justify-center items-center">
        <h1 className="text-5xl mt-10">
            <span className="text-5xl text-[#c80000]">*</span>Randoms
        </h1>
       </div>
       <div className="h-full flex-col justify-center items-center ">
        <h2 className="text-gray-700 mb-10 ">ARCHIVE. of SHUNNO</h2>
        <p>NOTHING FOR NOW.</p>
        <BottomMenu/>
       </div>
       </div>
    )
}
