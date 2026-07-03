import BottomMenu from "../components/bottom";
import localFont from "next/font/local";

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});

export default function ScratchersPage() {
  return (
    <div className={`${Hol.className} ${Hol.variable} w-full h-full`}>
      <div className="flex w-full flex-col items-center mt-10 justify-center">
        <div className="flex items-start">
         <span className="text-[#c80000] px-10 text-5xl">* </span>
        <h1 className="text-black text-[4vw] md:text-[1.5vw]">
            Something feels odd?<br/> Or want to leave us a comment? <br/> Or leave a review?</h1>
        </div>
      </div>
    </div>
  );
}