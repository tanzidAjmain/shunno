'use client'
import localFont from 'next/font/local';
import { use, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BottomMenu from '../components/bottom';
import CartLogo from '../components/cartLogo';
import Link  from 'next/link';
import Lenis from 'lenis';
import { useStore } from '../components/zustand';
import { DataProv } from '../components/provider';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});



export default function GardenPage() {


  const {products, loading} = DataProv()
  // console.log(products)
 
  
  
  const inc = useStore(s=> s.increase);
  const setImg = useStore(s=> s.setDetimage);
  const setDesctn = useStore(s=> s.setDesc);
  const setNoteDiagraph = useStore(s=> s.setNoteDiagraph);


useEffect(() => {



 gsap.registerPlugin(ScrollTrigger);

 const lenis = new Lenis();


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);

    const tl = gsap.timeline();
    tl.to('.motion', {
    delay:5,
    rotateY: 360,
    loop: 5,
    duration: 1.5,
    ease: "power3.out",
  })


}, [])

// setTimeout(() => {
 
  
// }, 4000);

  if (loading) return (
    <div className='animate-pulse flex flex-col items-center justify-center min-h-screen w-screen'>
      <Image  src='/logo.jpg' alt='****' width={200} height={200} className='w-[40vw] md:w-[10vw] h-auto' />
    </div>
  )

  return (
    <>

    <CartLogo />

      <section className={` ${Hol.className} ${Hol.variable} flex flex-col  items-center  justify-center min-h-screen  overflow-scroll mt-10 mb-40`}>
        <h1 className="sr-only">The Garden — Shunno O Oshim natural niche perfume collection</h1>
        <h2 className="sr-only">Available natural perfumes and their stories</h2>
        
        {
        
          products.map((product,i) => (
            <div key={`${product.id}-${i}`} className="prodList  flex xl:flex-row flex-col items-stretch justify-center mb-14  p-4 mt-40  w-[90vw] md:w-[50vw]">
            {/* <div className=" flex duration-300  flex-row items-center justify-center md:justify-start md:items-start ">
              <h1 className=' text-black md:text-[1vw] animate-spin text-[7vw] absolute -z-100  md:px-13 px-6.5 md:mt-[-10vh] md:ml-[-5vh] py-2.5 md:py-5 rounded-full '>Obscene Trilogy</h1>
            </div> */}

              <Image src={`${product.image}`} alt={product.name} width={5000} height={200} className="w-full z-99 rounded-t-4xl md:rounded-4xl h-auto p-4" />
              

    

              <div className='flex flex-col ml-2 md:rounded-4xl rounded-b-4xl  items-start justify-center p-4'>
                <div className='flex flex-row border-b w-full  min-w-[25vw] items-center justify-between gap-2 mb-2'>
                  <h2 className=" text-[5vw]  w-full whitespace-nowrap md:text-[1.5vw] font-bold pb-5">{product.name}</h2>
                  <span className='text-[#c80000] text-4xl'>*</span>
                </div>
              <div className='flex flex-row w-full items-center justify-between gap-2 mb-2'>
                <p className='text-black text-l'>MEMBER OF :</p>
                <p>{product.series}</p>
              </div>
                <Link onClick={() => {
                  setImg(product.image);
                  setDesctn(product.description);
                  setNoteDiagraph(product.notediagraph);
                  gsap.to('.motion', {
                    rotation: 360,
                  }) 
                }}  href={`/garden/${product.name}/${product.id}/${product.price}/${product.archive}`} className='w-full'>
                <div className='flex mb-2 flex-row items-center justify-between  p-1 cursor-pointer rounded-4xl'>
                <p className='hover:line-through decoration-[#c80000]'>* THE STORY</p>
                  <img src='/arrow-up-right.svg' alt='' width="24" height="24" className='motion w-[5vw] md:w-[2vw] m-2 border-2 rounded-full hover:rotate-45 hover:border-[#c80000] z-[-100000] ease-in-out duration-300' />
                </div>
                </Link>

                
                    <div>
                      <div className='flex flex-col items-startjustify-center'>
                        
                        <div className='flex flex-row w-full items-start justify-start flex-wrap mb-5 gap-1 text-justify'>
                        <p className='text-[#c80000] text-l  w-full'> / Materials: <br/></p>
                      {
                        product.materials.map((material, index) => (
                          <p key={index} className='text-black text-l'><span className='font-bold text-[#c80000]'></span>  {material},  <br/></p>
                        ))
                      }
                      </div>
                      </div>
                    </div>
               
              <p className='pb-2 border-y  '>/ Organic Percentage : <span className='text-[#c80000] font-bold'>{product.organicPercentage}</span>  <br/> 
              / Date: <span className='text-[#c80000] font-bold'>{product.date}</span>  <br/>
               / Produced Qty: <span className='text-[#c80000] font-bold'>{product.qunatity}</span><br/>
               /<span className='text-[#c80000]'> {product.ml}ml</span> </p>
              {/* <p className="text-gray-700 box-content text-justify mb-4">{product.description}</p> */}
             
             <div className='flex flex-row w-full justify-between items-center' >
              <p className="text-gray-900 font-bold ">BDT. {product.price}</p>
              {
                product.archive === "TRUE" ? <p className='text-[#c80000] font-bold'>STOCK KILLED</p> : <>
              <button
                onClick={()=>{
                  // console.log(useStore.getState().cart);
                  inc({id:product.id, image: product.image, name: product.name, price: product.price, amount:1})
                }
                } className="px-4 py-2 bg-[#c80000] text-white rounded-2xl hover:bg-[#a01000] transition-colors duration-300"
                >
                <span className='text-white'>*</span> Add
              </button>
                </>
              }
             </div>
            </div>
            </div>
          ))}
      </section>
          <BottomMenu />
    </>
  );
}
