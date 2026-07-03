'use client'
import localFont from 'next/font/local';
import { useEffect, useState,  } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BottomMenu from '../components/bottom';
import CartLogo from '../components/cartLogo';
import Link  from 'next/link';
import Lenis from 'lenis';
import { useStore } from '../components/zustand';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});



export default function GardenPage() {


  // console.log(inc)
  
  // const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: 'MONKEY FOR THE WILD', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"] },
    { id: 2, name: 'MONKEY FOR THE SEGS', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"] },
  ]);
  
  const inc = useStore(s=> s.increase);


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


      gsap.to('.prodList', {
        delay: 0.5,
        opacity: 1,
        delay: 0.9,
        ease: "power3.out",
        stagger: 0.5,
      })

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

  return (
    <>

    <CartLogo />

      <section className={`prodList opacity-0 ${Hol.className} ${Hol.variable} flex flex-col  items-center  justify-center min-h-screen w-screen overflow-scroll mt-10 mb-40`}>
        {
          products.map((product,i) => (
            <div key={`${product.id}-${i}`} className="flex xl:flex-row flex-col items-stretch justify-center mb-14  p-4 mt-40  w-[90vw] md:w-[50vw]">
            <div className=" flex duration-300  flex-row items-center justify-center md:justify-start md:items-start ">
              <h1 className='shadow-xl text-[#c80000]  md:text-[4vw] text-[7vw] absolute z-99  md:px-13 px-6.5 md:mt-[-10vh] md:ml-[-5vh] py-2.5 md:py-5 rounded-full skew-y-9'>{i+1}</h1>
            </div>

              <Image src={product.image} alt={product.name} width={5000} height={200} className="w-full z-99 rounded-t-4xl md:rounded-4xl h-auto p-4" />

    

              <div className='flex flex-col ml-2 md:rounded-4xl rounded-b-4xl  items-start justify-center p-4'>
              <h2 className=" text-[5vw] border-b whitespace-nowrap w-full md:text-[3vw] font-bold pb-5"><span className='text-[#c80000]'>*</span>{product.name}</h2>

                <Link onClick={() => {
                  gsap.to('.motion', {
                    rotation: 360,
                  }) 
                }}  href={`/garden/${product.image}/${product.name}/${product.id}/${product.price}`} className='w-full'>
                <div className='flex mb-2 flex-row items-center justify-between  p-1 cursor-pointer rounded-4xl'>
                <h1 className=' hover:line-through decoration-[#c80000]'>* THE STORY</h1>
                  <img src='/arrow-up-right.svg' alt='arrow' className='motion w-[5vw] md:w-[2vw] m-2 border-2  rounded-full hover:rotate-45 hover:border-[#c80000] z-[-100000] ease-in-out duration-300 ' />
                </div>
                </Link>

                {
                  product.Materials.map((material, index) => (
                    <p key={index} className='text-black pb-2 box-content text-justify mb-1'><span className='font-bold text-[#c80000]'>Materials: </span> / {material} <br/></p>
                  ))
                }
              
              <p className='pb-2 border-y  '>/ Organic Percentage : <span className='text-[#c80000] font-bold'>{product.organicPercentage}</span>  <br/> 
              / Date: <span className='text-[#c80000] font-bold'>{product.date}</span>  <br/>
               / Produced Qty: <span className='text-[#c80000] font-bold'>{product.qunatity}</span><br/>
               /<span className='text-[#c80000]'> {product.ml}ml</span> </p>
              <p className="text-gray-700 box-content text-justify mb-4">{product.description}</p>
             
             <div className='flex flex-row w-full justify-between items-center' >
              <p className="text-gray-900 font-bold ">BDT. {product.price}</p>
              <button
                onClick={()=>{
                  console.log(useStore.getState().cart);
                  inc({id:product.id, image: product.image, name: product.name, price: product.price, amount:1})
                }
                } className="px-4 py-2 bg-[#c80000] text-white rounded-2xl hover:bg-[#a01000] transition-colors duration-300"
                >
                <span className='text-white'>*</span> Add
              </button>
             </div>
            </div>
            </div>
          ))}
      </section>
          <BottomMenu />
    </>
  );
}