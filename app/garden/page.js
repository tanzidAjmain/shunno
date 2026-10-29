'use client'
import localFont from 'next/font/local';
import Image from 'next/image';
import gsap from 'gsap';
import BottomMenu from '../components/bottom';
import CartLogo from '../components/cartLogo';
import Link from 'next/link';
import { useStore } from '../components/zustand';
import { DataProv } from '../components/provider';

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
  variable: '--font-hol',
});

export default function GardenPage() {
  const { products, loading } = DataProv();

  const setImg = useStore((s) => s.setDetimage);
  const setDesctn = useStore((s) => s.setDesc);
  const setNoteDiagraph = useStore((s) => s.setNoteDiagraph);
  const setMoreImages = useStore((s) => s.setMoreImages);
  const inc = useStore((s) => s.increase);

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center min-h-screen w-screen bg-white">
        <Image src="/logo.jpg" alt="Loading..." width={200} height={200} className="w-20 h-auto" priority />
      </div>
    );
  }

  if (!products || products.length === 0) return null;

  const openStory = (product) => {
    setImg(product.image);
    setDesctn(product.description);
    setNoteDiagraph(product.notediagraph);
    setMoreImages(product.moreImages);
    gsap.to('.motion', { rotation: 360 });
  };

  return (
    <>
      <CartLogo />
    <main className='flex flex-row items-center justify-center min-h-full min-w-full bg-white'>
      <section className={`${Hol.className} ${Hol.variable} w-full h-dvh md:w-[40vw] bg-white`}>
        <h1 className="sr-only">The Garden — Shunno O Oshim natural niche perfume collection</h1>

        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={{ thresholdDelta: 10, sensitivity: 1 }}
          keyboard={{ enabled: true }}
          speed={700}
          modules={[Mousewheel, Keyboard, EffectFade]}
          effect={"fade"} // Set effect to 'fade' or remove for vertical slide
          fadeEffect={{
            crossFade: true}} // Optional: crossFade for smoother transition
          className="h-full w-full"
          >
          {products.map((product, idx) => (
            <SwiperSlide key={product.id || idx} className="relative h-full  overflow-hidden">
              {/* Product Background Image */}
              <Image
                src={product.image}
                alt={product.name || 'Product'}
                priority={idx === 0}
                fill
                className="object-contain mb-5  p-20  w-full h-auto  select-none"
                />

              {/* Fixed Bottom Overlay with Respective Text */}
              <div className="absolute inset-x-0 bottom-26 z-10 flex-row from-black/80 via-black/30 to-transparent px-5 pb-3 pt-24 text-white md:bottom-30 md:px-10">
                <div className="flex items-baseline justify-between gap-4 border-b  text-black pb-2">
                  <p className="truncate text-lg  font-bold uppercase ">{product.name}</p>
                  <p className="shrink-0 text-sm uppercase border-l border-[#c80000] px-3 md:text-base">{product.series}</p>
                </div>
                <div className="flex items-center justify-between pt-2 text-sm md:text-base text-black">
                  <p>{product.price} BDT.</p>
                  <Link
                    onClick={() => openStory(product)}
                    href={`/garden/${encodeURIComponent(product.name)}/${product.id}/${product.price}/${product.archive}`}
                    className="flex items-center gap-3 uppercase cursor-pointer"
                    aria-label={`Read the story of ${product.name}`}
                    >
                    <span className="hover:line-through decoration-[#c80000]">Story</span>
                    <img src="/astb.svg" alt="" width="16" height="16" className="motion hover:rotate-180 h-4 w-4 " />
                  </Link>
                </div>
                <div className="relative z-10 flex w-full flex-row items-center justify-center">
                  {String(product.archived ?? product.archive ?? "").trim().toUpperCase() !== "TRUE" ? (
                    <button
                      type="button"
                      aria-label={`Add ${product.name} to basket`}
                      onClick={() => inc({
                        id: product.id,
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        amount: 1,
                      })}
                      className={`mt-2 w-full cursor-pointer rounded-xs border px-4 text-2xl font-bold text-[#c80000] transition-colors duration-300 hover:bg-[#c80000] hover:text-white md:text-[2.5vh] ${Hol.className} ${Hol.variable}`}
                    >
                      +
                    </button>
                  ) : (
                    <span className="mt-10 font-bold text-black">ARCHIVED</span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

       </main>
      <BottomMenu />
    </>
  );
}
