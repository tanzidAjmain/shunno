'use client'
import localFont from "next/font/local";
import BottomMenu from "../components/bottom";
import { useState } from "react";
import axios from "axios";

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
   variable: '--font-hol',
});


export default function ScratchersPage() {

  const [comment, setComment] = useState('');
  const [review, setReview] = useState('');
  const [feedback, setFeedback] = useState('');
  const [product, setProduct] = useState('');
  const [c,setC] = useState(false);
  const [r,setR] = useState(false);
  const [f,setF] = useState(false);
  const [load,setload] = useState(false);

  return (
    <div className={`${Hol.className} ${Hol.variable} w-full h-full`}>
      <div className="flex w-full flex-col items-center mt-10 justify-center">
        <div className="flex flex-row w-full items-center justify-center">
         <span className="text-[#c80000]  text-[10vw] md:text-[5.5vw]">* </span>
        <h1 className="text-black text-[10vw] md:text-[3.5vw]">
            SCRATCHERS </h1>
        </div>
      </div>

    <div className="flex flex-row w-full p-2 items-center justify-center mt-10">
      <h1 onClick={()=>{setC(true);setF(false);setR(false)}} className="border cursor-pointer hover:bg-[#c80000] hover:text-white ease-in-out duration-200 rounded-2xl p-2 m-1">LEAVE A COMMENT?</h1>
      <h1 onClick={()=>{setR(true);setC(false); setF(false)}} className="border cursor-pointer hover:bg-[#c80000] hover:text-white ease-in-out duration-200 rounded-2xl p-2 m-1">LEAVE A REVIEW?</h1>
      <h1 onClick={()=>{setF(true);setC(false); setR(false)}} className="border cursor-pointer hover:bg-[#c80000] hover:text-white ease-in-out duration-200 rounded-2xl p-2 m-1">LEAVE A FEEDBACK?</h1>
    </div>

    <div className="flex row w-full p-2 items-center justify-center mt-10">
    {
      c?
      <>
      <textarea  className="p-2 text-2xl resize-none selection:bg-[#c80000] overflow-scroll border rounded-2xl h-[35vh] w-[75vw] md:w-[45vw]" type="box" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Leave a comment" />
      </>:<></>
    }
    {
      r?
      <>
      <div className="flex flex-col items-center justify-center">
      <input placeholder="product name" className="p-2 mb-2 text-2xl resize-none selection:bg-[#c80000] overflow-scroll border rounded-2xl h-[10vh] w-[75vw] md:w-[45vw]" value={product} type="text" onChange={(e) => setProduct(e.target.value)} />
      <textarea className="p-2 text-2xl resize-none selection:bg-[#c80000] overflow-scroll border rounded-2xl h-[35vh] w-[75vw] md:w-[45vw]" type="text" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Leave a review" />
      </div>
      </>:<></>
    }
    {
      f?
      <>
      <textarea className="p-2 text-2xl resize-none selection:bg-[#c80000] overflow-scroll border rounded-2xl h-[35vh] w-[75vw] md:w-[45vw]" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Leave a feedback" />
      </>:<></>
    }
    </div>
    <BottomMenu />
    {
      c||r||f?
      <>
      <div className="flex flex-row w-full p-2 items-center justify-center mt-10">
    <button onClick={async () => {
      console.log('clicked')
      try{
        setload(true);
        const response = await axios.post('/api/send-det', {
          review,
          comment,
          feedback,
        });
      } catch (error) {
        const responseError = error.response?.data;
        console.error('Error sending order details:', responseError || error.message);
        setApiError(responseError?.code || responseError?.error || 'ORDER_SEND_FAILED');
      } finally {
        setload(false);
        // setRecieved(true);
        console.log('feedback sent successfully');
      }
    }}
    disabled={load}
    className={`border w-[75vw] md:w-[45vw] cursor-pointer hover:bg-[#c80000] hover:text-white ease-in-out duration-200 rounded-2xl p-2 m-1`}>{load?"****":<span>SEND</span>}</button>
    </div>
    </>:<></>
  }
    </div>
  );
}