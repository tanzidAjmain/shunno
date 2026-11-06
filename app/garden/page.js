'use client'
import localFont from 'next/font/local';
import Image from 'next/image';
import gsap from 'gsap';
import BottomMenu from '../components/bottom';
import CartLogo from '../components/cartLogo';
import Link from 'next/link';
import { useStore } from '../components/zustand';
import { DataProv } from '../components/provider';
import { useState } from 'react';

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
  variable: '--font-hol',
});

export default function GardenPage() {
  const { products, loading } = DataProv();
  const [activeIndex, setActiveIndex] = useState(0);

  const setImg = useStore((s) => s.setDetimage);
  const setDesctn = useStore((s) => s.setDesc);
  const setNoteDiagraph = useStore((s) => s.setNoteDiagraph);
  const setMoreImages = useStore((s) => s.setMoreImages);
  const inc = useStore((s) => s.increase);
  const setOrganicPercentage = useStore((s) => s.setOrganicPercentage);
  const setProducedQty = useStore((s) => s.setProducedQty);
  const setMl = useStore((s) => s.setMl);
  const setMaterials = useStore((s) => s.setMaterials);

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center min-h-screen w-screen bg-white">
        <Image src="/logo.jpg" alt="Loading..." width={200} height={200} className="w-20 h-auto" priority />
      </div>
    );
  }

  if (!products || products.length === 0) return null;

  // console.log(Math.min(activeIndex, products.length - 1))
  const activeProduct = products[Math.min(activeIndex, products.length - 1)];

  const openStory = (product) => {
    setImg(product.image);
    setDesctn(product.description);
    setNoteDiagraph(product.notediagraph);
    setMoreImages(product.moreImages);
    setOrganicPercentage(product.organicPercentage);
    setProducedQty(product.quantity);
    setMl(product.ml);
    setMaterials(product.materials);
    gsap.to('.motion', { rotation: 360 });
  };

  return (
    <>
      <CartLogo />
    <main className='flex flex-row items-center justify-center min-h-full min-w-full bg-white'>
      <section className={`${Hol.className} ${Hol.variable} w-full h-dvh md:w-[40vw] bg-white`}>
        <h1 className="sr-only">The Garden — Shunno O Oshim natural niche perfume collection</h1>

       <div className="relative h-dvh w-full overflow-hidden">
       <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={{ thresholdDelta: 10, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        speed={700}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Mousewheel, Keyboard]}
        className="absolute inset-0 h-full w-full"
        > 
          {products.map((product, idx) => (
            <SwiperSlide key={product.id || idx} className="relative h-full overflow-hidden">
               <Link
                onClick={() => openStory(activeProduct)}
                href={`/garden/${encodeURIComponent(activeProduct.name)}/${activeProduct.id}/${activeProduct.price}/${activeProduct.archive ?? activeProduct.archived ?? ''}`}
                className="flex cursor-pointer items-center gap-2 uppercase"
                aria-label={`Read the story of ${activeProduct.name}`}
              >
              <Image
                src={product.image}
                alt={product.name || 'Product'}
                priority={idx === 0}
                fill
                className="pointer-events-auto backdrop-blur-2xl select-none object-contain p-20"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* The details stay fixed while only the image layer moves. */}
        <div className="pointer-events-none  absolute inset-x-0 bottom-26 z-10 px-5 pb-3  md:bottom-30 md:px-10">
          <div className="pointer-events-auto">
            <div className="flex items-baseline justify-between gap-4 border-b pb-2 text-black">
              <p className="truncate text-lg  font-bold uppercase">{activeProduct.name}</p>
              <p className="shrink-0 border-l  border-[#c80000] px-3 text-sm uppercase md:text-base">{activeProduct.series}</p>
            </div>
            <div className="flex items-center justify-between pt-2 text-sm text-black md:text-base">
              <p>{activeProduct.price} BDT.</p>
              <Link
                onClick={() => openStory(activeProduct)}
                href={`/garden/${encodeURIComponent(activeProduct.name)}/${activeProduct.id}/${activeProduct.price}/${activeProduct.archive ?? activeProduct.archived ?? ''}`}
                className="flex cursor-pointer items-center gap-2 uppercase"
                aria-label={`Read the story of ${activeProduct.name}`}
              >
                <span className="hover:line-through decoration-[#c80000]">Story</span>
                <img src="/astb.svg" alt="" width="16" height="16" className="motion h-4 w-4 hover:rotate-180" />
              </Link>
            </div>
            <div className="flex w-full flex-row items-center justify-center">
              {String(activeProduct.archived ?? activeProduct.archive ?? "").trim().toUpperCase() !== "TRUE" ? (
                <button
                  type="button"
                  aria-label={`Add ${activeProduct.name} to basket`}
                  onClick={() => inc({
                    id: activeProduct.id,
                    image: activeProduct.image,
                    name: activeProduct.name,
                    price: activeProduct.price,
                    amount: 1,
                  })}
                  className={`mt-2 w-full cursor-pointer rounded-xs border px-4 text-2xl font-bold text-[#c80000] hover:bg-[#c80000] hover:text-white md:text-[2.5vh] ${Hol.className} ${Hol.variable}`}
                >
                  +
                </button>
              ) : (
                <span className="mt-10 font-bold text-black">ARCHIVED</span>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>

       </main>
      <BottomMenu />
    </>
  );
}
