'use client'
import { useRouter } from 'next/navigation';
import { useStore } from '../components/zustand';
import localFont from 'next/font/local';
import gsap from 'gsap';
import { useEffect } from 'react';

const Hol = localFont({
    src: '../fonts/myst.otf',
    variable: '--font-hol',
});


export default function CartPage() {
  const cart = useStore(state => state.cart);
  const remove = useStore(s=>s.removeItem);
  const router = useRouter()

useEffect(() => {
  
}, [])


  return (
    
    <div className={`${Hol.className} ${Hol.variable}`}>
    <h2 className="sr-only">Selected niche perfumes</h2>
    {
        cart.length === 0 ?
         <div className='flex flex-col items-center w-full min-h-screen justify-center  text-black '>
            <h1>BASKET IS EMPTY !</h1>
            <p>such a bad taste.. :( blehh </p>
              {/* <img src='/cat2.png' alt='cat' className='w-30 h-30 object-cover  mr-4' /> */}
        </div>
     : <>
     <div className='flex flex-col items-center w-full overflow-x-hidden justify-center  inset-0 text-black '>
              <h1 className='text-[8vw] md:text-[4vw] m-2'>BASKET <span className='text-[#c80000]'>*</span></h1>
              {/* <p>some good choice(s)</p> */}
      </div>
      {
        cart.map((item, index) => (
          <div key={index} className='flex  flex-col md:flex-row items-center justify-between m-4 p-4 shadow-xl rounded-lg'>
            <div className='h-full p-2'>
              <h1 className='border-[#c80000] px-2 py-2 border rounded-full'>{index+1}</h1>
            </div>
            <div className='flex flex-row border-l items-center'>
            <img src={item.image} alt={`${item.name} perfume`} width="180" height="180" className='w-45 h-45 object-cover rounded-full mr-4' />
            <div className='flex flex-col items-start justify-center h-full'>
              <h2 className='text-s whitespace-nowrap font-bold'>{item.name}</h2>
              <p className='text-gray-600'>Price: BDT. {item.price}</p>
              {/* <p className='text-gray-600'>Quantity: {item.amount}</p> */}
            </div>

            </div>
            <div className='flex rounded-full flex-col items-end w-full h-full'>
              <p  onClick={()=>{
                remove(item.id);
              }} className='text-[#c80000] m-3 cursor-grab'>remove</p>
            </div>
          </div>
        ))
      }
      <div className='flex flex-row items-center justify-between h-full text-black '>
              <div className='flex flex-row justify-center h-full items-center'>

              <h1 className='text-[3.5vw] p-4 md:text-[1.1vw] whitespace-nowrap m-3'>Subtotal: {cart.reduce((acc, item) => acc + item.price * item.amount, 0)} BDT. </h1>
              <div className=''>
              <h1 className=' aster text-[#c80000] text-2xl'>*</h1>
              </div>
              </div>
              {/* <div className=' border w-[50vw]'></div> */}
              <div className='flex flex-row items-center justify-center h-full'>

              <button onClick={()=>{router.push("/checkout")}} onMouseEnter={()=>{
                gsap.to(".aster", {
                  paddingLeft:"25%",
                  duration: 1,
                  ease: "power3.out",
                });
              }}
              onMouseLeave={()=>{
                gsap.to(".aster", {
                  paddingLeft:"0vw",
                  duration: 1,
                  ease: "power3.out",
                });
              }}
              className={`px-4 py-3  whitespace-nowrap  hover:border rounded-full border-[#c80000]  ${Hol.className} ${Hol.variable} text-[3.5vw] md:text-[1.1vw] font-bold`}>
                      check out
             </button>

             <button onClick={()=>{router.push("/garden")}} 
              className={`px-4  mx-2 py-3 m-1  hover:border border-[#c80000] rounded-full ${Hol.className} ${Hol.variable} text-[3.5vw] md:text-[1.1vw] font-bold`}>
                      {/* <img src='/arrow-up-right.svg' alt='Continue shopping' width="24" height="24" className='-rotate-135 '/> */}
                      Back
             </button>
             </div>
      </div>
    </>
    }
    </div>
  );
}
