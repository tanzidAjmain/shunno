import localFont from "next/font/local"

  export const Hol = localFont({
    src: '../fonts/holstein.ttf', 
     variable: '--font-hol',
  });
  


export default function RandomPage(){


    return(
        <div className={`flex ${Hol.className} ${Hol.variable} flex-col justify-center items-center w-full`}>
       <div className="flex mb-10 flex-row justify-center items-center">
        <h1 className="text-5xl">
            <span className="text-5xl text-[#c80000]">*</span>Randoms
        </h1>
       </div>
       <div className="w-full flex flex-col md:flex-row justify-center items-center ">
        
        <div className="flex flex-rows w-full h-full justify-between p-3">
          <img alt="photo" className="h-50.5 w-35.5" src="https://cdn.pixabay.com/photo/2026/06/26/05/28/05-28-31-5_1280.jpg" />
        <div className="px-2 text-right">
          <h1 className="text-3xl">Gecko</h1>
          <p>lorem ipsum </p>
        </div>
        </div>

          <div className="flex flex-rows w-full  h-full justify-between p-3">
          <img alt="photo" className="h-50.5 w-35.5" src="https://cdn.pixabay.com/photo/2026/06/26/05/28/05-28-31-5_1280.jpg" />
        <div className="px-2">
          <h1 className="text-3xl text-right">Gecko</h1>
          <p>lorem ipsum </p>
        </div>
        </div>
       </div>
       </div>
    )
}