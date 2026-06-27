'use client'

import CartLogo from '../../components/cartLogo';
import localFont from 'next/font/local';
import {useParams} from "next/navigation";
import { useStore } from '../../components/zustand';




  export const Hol = localFont({
    src: '../../fonts/holstein.ttf', 
     variable: '--font-hol',
  });
  


export default function GardenProductPage() {


  // const [cart, setCart] = useState(0);

  const inc = useStore(s=> s.increase);
  const params = useParams();

  console.log(params?.details)

   

       const rawName = params?.details?.[1] ?? "";
       const productName = (() => {
  try {
    const plusFixed = rawName.replace(/\+/g, " ");
     const decoded = decodeURIComponent(plusFixed);
     return decoded.replace(/-/g, " ").trim();
   } catch (e) {
     return rawName.replace(/-/g, " ").replace(/\+/g, " ").trim();
   }
 })();

  return (

 

    <div>


     {/* <div className={`page-two absolute z-100 w-full h-full top-0 bg-black`}></div> */}

    <CartLogo />

    <div className="w-screen h-screen flex flex- items-center justify-center">


    <div className={`w-[85%] p-4  bg-white  flex md:flex-row flex-col mt-50 md:mt-4 items-center justify-around ${Hol.className} ${Hol.variable} `}>
      <div className="flex flex-row items-center justify-start w-full my-9">
      <h1 className="text-2xl p-5 font-bold">
        Story Behind : <br/><span className="line-through text-[8vw]  md:text-[4vw] decoration-[#c80000]">{productName}</span> 
        {/* <span className='mt-4 text-4xl'>↝</span> */}
    </h1><br/>
      </div>
      <div className='justify-center items-center flex flex-col '>
        
           {/* <h1 className='text-black absolute'>look down</h1> */}
      </div> 
      {/* <span className="text-[#c80000] p-2 text-[4vh]">________________*________________</span> */}
      {/* <div> */}
      <div className=''>
      <div className='circle-border-2 '>

    
      <div className='circle-border'>
      <img  src={`/${params?.details?.[0]}`} alt={productName} className="w-[85%] md:w-[95%] h-auto m-5 rounded-3xl line-through decoration-[#c80000] "/>
        </div>
      {/* </div> */}
      </div>
      </div>
      <div className='flex flex-row items-center'>
       
      </div>
    </div>
    </div>
    <span className="w-[85%] flex flex-col md:flex-row items-center justify-center m-auto">
      <div className="h-[65%] items-start">
        <h1 className={`text-2xl p-5 font-bold ${Hol.className} ${Hol.variable} text-black`}>
          THE THOUGHT BEHIND:
        </h1>
      <p className={`w-[85%] mt-10 p-4 box-content bg-white  flex md:flex-row flex-col items-center justify-around ${Hol.className} ${Hol.variable} text-black text-justify `}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
      </p>

    

      </div>
      <img src="/notediagraph.jpg" alt="story" className="w-[85%] mt-2 p-4 bg-white  flex md:flex-row md:w-[35%] flex-col items-center justify-around line-through decoration-[#c80000] "/>
    </span>
    <div className="w-screen flex items-center justify-center mb-6">
      
    <button onClick={()=>{
      inc({id:params?.details?.[2], image: `/${params?.details?.[0]}`, name: productName, price: params?.details?.[3], amount:1})

    }} className={`px-4 py-2 text-[#c80000] hover:text-white rounded-xs border hover:bg-[#a01000] transition-colors duration-300 mt-10 ${Hol.className} ${Hol.variable} text-[4vw] md:text-[1.5vh] font-bold`}>
        <span className="text-[#c80000]">*</span> ADD TO BASKET
    </button>
    </div>
    </div>
  );
}