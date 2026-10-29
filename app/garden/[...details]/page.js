'use client'

import CartLogo from '../../components/cartLogo';
import localFont from 'next/font/local';
import {useParams} from "next/navigation";
import { useState } from "react";
import { useStore } from '../../components/zustand';
import { DataProv } from '../../components/provider';




  export const Hol = localFont({
    src: '../../fonts/holstein.ttf', 
     variable: '--font-hol',
  });
  
   export const det = localFont({
    src: '../../fonts/type.ttf', 
     variable: '--font-hol',
  });
  


export default function GardenProductPage() {


  // const [cart, setCart] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const inc = useStore(s=> s.increase);
  const params = useParams();
  const description = useStore(s=> s.desc);
  const noteDiagraph = useStore(s=> s.noteDiagraph);
  const detailImage = useStore(s=> s.detImage);
  const { products } = DataProv();

       const rawName = params?.details?.[0] ?? "";
       const productName = (() => {
  try {
    const plusFixed = rawName.replace(/\+/g, " ");
     const decoded = decodeURIComponent(plusFixed);
     return decoded.replace(/-/g, " ").trim();
   } catch (e) {
     return rawName.replace(/-/g, " ").replace(/\+/g, " ").trim();
   }
 })();
  const product = products.find((item) => String(item.id) === String(params?.details?.[1]));
  const productDescription = description || product?.description || "Discover this independent natural perfume by Shunno O Oshim.";
  const productImage = detailImage || product?.image || "/logo.jpg";
  const productNoteDiagram = noteDiagraph || product?.notediagraph;
  const productMoreImages = product?.moreImages || [];
  const displayedImageIndex = Math.min(currentImage, Math.max(productMoreImages.length - 1, 0));

  const nextImage = () => {
    setCurrentImage((index) => (index + 1) % productMoreImages.length);
  };

  const previousImage = () => {
    setCurrentImage((index) => (index - 1 + productMoreImages.length) % productMoreImages.length);
  };

  return (

 

    <div className='overflow-x-hidden'>


     {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}

    <CartLogo />

    <div>


    <div className={`w-screen  min-h-screen p-5 bg-white mb-40 md:mb-0 flex md:flex-row flex-col items-center justify-around  ${Hol.className} ${Hol.variable} `}>
      
      {/* <div className="flex flex-row items-center justify-start w-full my-9"> */}
       {/* <h1 className="text-2xl italic p-5 font-bold">
        Story Behind : 
        </h1><br/> */}
        <span className=" text-3xl whitespace-pre-wrap md:text-[4vw]  px-3 ">{productName}</span> 
      {/* </div> */}

      <div className=''>
        <div className='circle-border-2 '>
        <div className='circle-border'>
        <img src={productImage} alt={`${productName} niche perfume by Shunno O Oshim`} width="1200" height="1200" className="w-[85%] md:w-[95%] h-auto m-5 rounded-3xl line-through decoration-[#c80000] "/>
     </div>
      </div>
      </div>
    </div>
    </div>

    {productMoreImages.length > 0 && (
      <div>
      <div className="relative shadow-xl  rounded-2xl px-2 py-6  mx-auto my-5 flex flex-col w-full max-w-3xl tracking-wider items-center justify-center">
      <div className='w-full px-5 flex items-center justify-between flex-row'>
      <h1 className={`text-2xl  py-10  font-bold ${Hol.className} ${Hol.variable}`}>album:</h1>
      <p className={`text-3xl py-10 font-bold ${Hol.className} ${Hol.variable} text-[#c80000]`}>*</p>
      </div>
      <div className='flex flex-col w-full items-center justify-around gap-2'>

        <img
          src={productMoreImages[displayedImageIndex]}
          alt={`Additional image ${displayedImageIndex + 1}`}
          className="h-auto w-[90%] object-cover md:w-[30vw]"
          />
          <div className='flex flex-row items-center  p-4 justify-between w-full m-4'>
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className=" left-3 z-10 rounded-full  bg-white border px-4 py-3 text-2xl  shadow"
          >
          <img src="/astb.svg" alt="Previous" />
        </button>

        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className=" right-3 z-10 rounded-full bg-white border px-4 py-3  text-2xl shadow"
          >
          <img src="/astb.svg" alt="Next" />
        </button>
        </div>
        </div>
      </div>
      </div>
    )}
    <span className="w-[85%] min-h-screen mt-20 flex flex-col md:flex-row items-center justify-center m-auto">
      <div className="h-[45%] items-start">
        <h2 className={`text-2xl p-5 font-bold ${Hol.className} ${Hol.variable} text-black`}>
          THE THOUGHT BEHIND:
        </h2>
      <p className={`w-[85%] mt-5 p-4 box-content bg-white ${det.className} ${det.variable} flex md:flex-row flex-col items-center justify-around ${Hol.className} ${Hol.variable} text-black text-justify `}>
      {productDescription}
      </p>

    

      </div>
      {productNoteDiagram && <img src={productNoteDiagram} alt={`Scent note diagram for ${productName}`} width="1200" height="1200" className="w-[85%] mt-2 p-4 bg-white flex md:flex-row md:w-[35%] flex-col items-center justify-around line-through decoration-[#c80000]" />}
    </span>
    <div className="w-full flex items-center justify-center mb-6">
      {
        params?.details?.[3] === "FALSE" ? <>
        
        <button onClick={()=>{
          inc({id:params?.details?.[1], image: productImage, name: productName, price: params?.details?.[2], amount:1})

        }}  className={`mt-2 w-[30vw] cursor-pointer rounded-xs border px-4 text-2xl font-bold text-[#c80000] transition-colors duration-300 hover:bg-[#c80000] hover:text-white md:text-[2.5vh] ${Hol.className} ${Hol.variable}`}
           >
             +
           </button>
    
        </> : <></>
      }
    </div>
    </div>
  );
}
