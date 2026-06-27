'use client'
import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TransitionProvider({ children }) {

  // Save the state as a string in localStorage


     gsap.registerPlugin(useGSAP)

  return (
    <TransitionRouter
    auto
   // ...existing code...
    // ...existing code...
    leave={(next) => {


      const loader = document.querySelector('.second-loader');
     

     let tween = gsap.to(loader, {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        onComplete: next
      })

      gsap.to('.header', {
        opacity: 0,
        duration: .5,
        ease: "power3.inOut",
      })

      gsap.to('.entry', {
        opacity: 0,
        duration: .5,
        ease: "power3.inOut",
      })
      
 
    return () => { tween.kill();}
      // safety fallback
    }}

   
    >
        {children}
    </TransitionRouter>
  );
}