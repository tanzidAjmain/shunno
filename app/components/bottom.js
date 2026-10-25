'use client'
import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});




export default function BottomMenu() {
    const pathname = usePathname();
    const isActive = (href) => pathname === href || (href === '/garden' && pathname?.startsWith('/garden/'));
    const links = [
      { label: 'CEMETERY', href: '/garden', className: 'md:text-[1.2vw] hover:line-through decoration-[#c80000] p-2 text-[3.5vw] leading-none' },
      { label: 'MANIFESTO', href: '/Manifesto', className: 'md:text-[1.2vw] p-2 text-justify hover:line-through decoration-[#c80000] duration-1000 text-[3.5vw] leading-none' },
      { label: 'RANDOMS', href: '/randoms', className: 'md:text-[1.2vw] p-2 text-justify hover:line-through decoration-[#c80000] text-[3.5vw] leading-none' },
      { label: 'SCRATCHERS', href: '/Scratchers', className: 'md:text-[1.2vw] p-2 text-justify hover:line-through decoration-[#c80000] text-[3.5vw] leading-none' },
      { label: 'CONDITIONS', href: '/policy', className: 'md:text-[1.2vw] hover:line-through decoration-[#c80000] p-2 text-[3.5vw] leading-none' },
    ];


    return (
        
      <div className="w-full flex flex-row items-center justify-center">
      <div
    className={`${Hol.className} ${Hol.variable}  w-full md:w-[70vw] bg-white fixed bottom-0 p-4 z-100  `}
  >
    <div className="flex  flex-row items-center leading-relaxed justify-between w-full  text-black  px-1 py-4">
   
    

    {links.map(({ label, href, className }) => (
      <Link href={href} key={href}>
      <div className="flex flex-row items-center justify-center" key={href}>
        <h2 className={className}>{label}</h2>
          {isActive(href) && <span className="text-[#c80000] md:text-[1vw] text-[2.5vw]">*</span>}
      </div>
      </Link>
    ))}

    
  
    </div>
    <div className='w-full flex flex-row items-center justify-start'>
    <p className="md:text-[.7vw] text-bold border-l border-[#c80000]  px-4 mx-2  text-[2vw] leading-none">
        C.2026.SHUNNO.O.OSHIM.
      </p>
    </div>
    </div>
      </div>
    )
}
