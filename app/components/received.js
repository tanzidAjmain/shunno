'use client';
import  Link from "next/link";
import localFont from "next/font/local";

const Hol = localFont({
  src: '../fonts/holstein.ttf',
  variable: '--font-hol',
});

export default function ReceivedPage({ params }) { 
  return (
    <div className={`${Hol.className} ${Hol.variable} mt-50 flex flex-col items-center justify-center w-full min-h-full]`}>
     <div className="flex flex-col border  p-2 items-center justify-center  h-full">
      <img src="/logo.jpg" className="w-[30vw] h-[30vh] md:w-[20vw] md:h-[20vh] object-contain" />
      <h1 className="text-5xl border-b-2 p-2">Receipt</h1>
      <div className='p-5'>
      <p>Order ID: {params.orderId}</p>
      <h1>has been recieved.</h1>
      <p>NAME: {params.name}</p>
      <p>ADDRESS: {params.address}</p>
      <p className="whitespace-pre-wrap">PRODUCT: {params.orderName.join(", ")}</p>
      <Link href="/garden">
      <p className="text-[#c80000] italic mt-2 ">continue to garden?</p>
      </Link>
      </div>
     </div>
    </div>
  );
}  