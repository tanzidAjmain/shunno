import localFont from "next/font/local"
import { IBM_Plex_Mono } from "next/font/google";

const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight:"400"
  
})

export const Hol = localFont({
  src: '../fonts/holstein.ttf', 
  variable: '--font-hol',
});

export default function policyPage(){
    return(
        <div className="flex flex-col">
        <div className="flex justify-center w-full items-center">
            <h1 className={`${Hol.className} text-4xl p-4`}>
                TERMS & CONDITION
            </h1><span className={`${Hol.className} text-[#c80000] text-3xl`}>
                *
            </span>
        </div>

        <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>FOR THE WEBSITE USE <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            These Terms & Conditions govern your access to www.byshunno.com and apply to all your visits, transactions, and purchases with us.
            <br/>
            •Scope: These conditions apply strictly to direct sales of our products to private individual customers through this website.
            <br/>
            •Online Specificity: The terms outlined here apply exclusively to online purchases made on our website and do not extend to in-store policies or third-party retailers.
            <br/>
            •Updates & Revisions: We reserve the right to revise these terms as needed.
            We encourage you to review this page periodically.</h1>
        </div>


        <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>PROHIBITED ACTIVITES <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            Fraudulent activities, misrepresentation, and misuse of the website is strictly prohibited and can lead to legal issues</h1>
        </div>


        <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>POINT TO NOTE <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
        We do not guarantee that all the items available at the www.byshunno.com online shop are in stock at the time of your order. In the case of incorrect stock balance affecting your order we will contact you by e-mail. Orto Parisi cannot warrant that the content of www.ortoparisi.com is at all time free of inaccuracies or typographical errors. Neither can we guarantee that all information is up-to-date. Orto Parisi may at any time change the content of the site and the items available in the product range. Though we strive to always display the correct texts, images and pricing in the site and web shop, errors may occur. If you have been charged the wrong amount when shopping from the web shop, we will give you the option of placing a new order with the correct price or canceling your order..</h1>
        </div>


         <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>TRADEMARK <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            Our TRADEMARK includes SHUNNO /O/ OSHIM logo and name amongst other graphic contents and intellectual properties used in the website and in the packaging or the final product.
        </h1>
        </div>

        <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>PRODUCT VARIATION <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            As we use natural raw materials /as of now we take pride in using natural raw materials only/ , variations in the colour of the perfume may occur from batch to batch. These variations are a natural characteristic of the ingredients and do not affect the quality or formulation of the fragrance. These variations don't constitute a defect and can not be considered as valid grounds for return or refund.
        </h1>
        </div>

        <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>DELAY IN DELIVERY <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            SHUNNO /O/ OSHIM targets to deliver all orders within the stated delivery time. If the delivery has not taken place within 30 days of payment, the customer has the right to cancel the order free of charge and is entitled to a full refund including shipping costs.
        </h1>
        </div>

         <div className="flex w-full items-center justify-start m-3 md:m-10 border-b-2 ">
        <h1>VIOLATION OF RULES <span className={`${Hol.className} text-[#c80000]`}>*</span></h1>
        </div>
        
        <div className={`${IBM.className}  flex w-full  justify-center`}>
        <h1 className="text-justify w-[70vw] p-05 mt-10 text-[4vw] md:text-3xl" >
            SHUNNO /O/ OSHIM reserves the right to seek remedies of law and blockade of your access to SHUNNO /O/ OSHIM if your violations of these terms and conditons can be seen.
        </h1>
        </div>


        </div>
    )
}