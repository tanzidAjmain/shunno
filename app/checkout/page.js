'use client'
import { use, useState } from "react";
import localFont from 'next/font/local';
import { useStore } from "../components/zustand";
import axios from "axios";
import * as validator from 'email-validator';
import ReceivedPage from "../components/received";


export const Hol = localFont({
    src: '../fonts/holstein.ttf', 
     variable: '--font-hol',
  });

export default function CheckoutPage() {
  const [country, setCountry] = useState('');
  const [recieved, setRecieved] = useState(false);
  const [wrongNum,setWrongNum] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number,setNumber] = useState('')
  const [address, setAddress] = useState('');
  const [divisions, setDivisions] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [apartment, setApartment] = useState('');
  const [loading, setloading] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [apiError, setApiError] = useState('');
  const [orderId, setOrderId] = useState('');
  
  const cart = useStore(state => state.cart);
  const orderName = cart.map(itm=>{
    return itm.name
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const phoneDigits = number.replace(/\D/g, '');

    if (phoneDigits.length !== 11){
      setWrongInfo(true)
      return;
    }
    setWrongInfo(false);
    
    let orderID = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderId(orderID);

    if (!validator.validate(email)) {
      // console.log('Invalid email address');
      setWrongInfo(true);
      return;
    }

    const orderDetails = {
      orderID,
      name,
      email,
      number,
      country,
      address,
      divisions,
      district,
      state,
      apartment,
      orderName
    };

    try {
      setloading(true);
      setApiError('');
      const response = await axios.post('/api/send-det', orderDetails);
      console.log(response.data.message);
    } catch (error) {
      const responseError = error.response?.data;
      console.error('Error sending order details:', responseError || error.message);
      setApiError(responseError?.code || responseError?.error || 'ORDER_SEND_FAILED');
    } finally {
      setloading(false);
      setRecieved(true);
    }
  }
  

  const subTotal = cart.reduce((total, item) => total + item.price * item.amount, 0);
  
  return (
    <>
   
      {loading?
      <>
          <div className="h-full w-full flex flex-row justify-center items-center">
            <h1 className={`${Hol.className} ${Hol.variable} text-5xl text-[#c80000] animate-spin m-15`}>*</h1>
          </div>
      </> :
      <>{
        recieved?<ReceivedPage params={{ id: '12345',orderId,name,address,orderName }} /> :
        <>

    <div className={`${Hol.className} ${Hol.variable} flex flex-col items-center justify-center w-full h-full]`}>
     
    
    
    <form className="bg-white flex-col justify-center p-8 h-full  w-full max-w-lg">
    
    
    
    <div className="flex flex-row items-center justify-start w-full max-w-md">
    <div className="my-4  flex justify-between w-full items-center">
    <img className="w-32 h-32 border-l-2 border-[#c80000] object-contain" src="/logo.jpg" alt="logo" />
    <div className="flex flex-row justify-center items-center">
    <h1 className="text-5xl mt-2  font-bold text-[#c80000]">*</h1>
    <h1 className="text-xl p-3 font-bold">CHECKOUT</h1>
    </div>
    </div>
    </div>  
    
    <div className="w-full border">
    <h1 className="text-xl border-b p-4 font-bold ">
    CART :
    </h1>
    {
      cart.length&& cart.map((item, index) => (
        <div key={index} className='flex  flex-row items-center justify-between m-4 p-4 shadow-xl rounded-lg'>
              <div className='h-full p-2'>
                <h1 className='text-[#c80000] p-2 border rounded-full'>{index+1}</h1>
              </div>
              <div className='flex flex-row items-center'>
              <div className='flex flex-col items-start justify-center h-full'>
                <h2 className='text-lg whitespace-nowrap font-bold'>{item.name}</h2>
              </div>
            </div>
          </div>
        ))
      }
      <div>
      <h1 className="text-sm p-3 font-bold"> TOTAL : BDT. {subTotal}</h1>
      <h1 className="text-sm p-3 border-b font-bold">SHIPPING : BDT. {divisions=="Dhaka"?"60":"120"}</h1>
      <h1 className="text-sm p-3 font-bold">Subtotal : BDT. {divisions=="Dhaka"?`${subTotal + 60}`:`${subTotal + 120}`}</h1>
      </div>
      </div>
      <div>{wrongInfo && <p className="text-red-500">* Please provide valid information</p>}</div>
      <div>{apiError && <p className="text-red-500">* Order email failed: {apiError}</p>}</div>
      <div className="border-b mb-4">
      <label className={`block my-2 mx-1  text-sm`}>NAME<span className="text-[#c80000]"> //</span></label>
      <input type="text" required  onChange={(e) => setName(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
      </div>
      
      <div className="border-b mb-4">
      <label className={`block my-2 mx-1  text-sm`}>EMAIL<span className="text-[#c80000]"> //</span></label>
      <input type="text" required  onChange={(e) => setEmail(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
      </div>

      
      <div className="border-b mb-4">
      <label className={`block my-2 mx-1 text-sm`}>COUNTRY<span className="text-[#c80000]"> //</span></label>
      <input list="countries" required  onChange={(e) => setCountry(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
      <datalist id="countries">
      <option value="Bangladesh"></option>
      <option value='United States'></option>
      </datalist>
      </div>
      
      <div className="border-b mb-4">
      <label className={`block my-2 mx-1 text-sm`}>{wrongInfo?"Wrong Number":"Phone"}{country=="Bangladesh"?" +880":'+1'}<span className="text-[#c80000]"> //</span></label>
      <input type='tel' inputMode="numeric"
             pattern="[0-9]{10}"  required
              onChange={(e) => setNumber(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
      </div>

      {
        country === 'Bangladesh' ?
        
        <>
        <div className="border-b mb-4">
        <label className={` my-2 mx-1 text-sm`}>DIVISION<span className="text-[#c80000]"> //</span></label>
        <input list="divisions" onChange={(e) => setDivisions(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
        <datalist id="divisions">
        <option value="Barishal"></option>
        <option value="Chattogram"></option>
        <option value="Dhaka"></option>
        <option value="Khulna"></option>
        <option value="Mymensingh"></option>
        <option value="Rajshahi"></option>
        <option value="Rangpur"></option>
        <option value="Sylhet"></option>
        </datalist>
        </div>
        
        
        <div className="border-b mb-4">
        <label className={`block my-2 mx-1 text-sm`}>DISTRICT<span className="text-[#c80000]"> //</span></label>
        <input list={`districts-${divisions}`} onChange={(e) => setDistrict(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
        <datalist id="districts-Barishal">
        <option value="Barguna"></option>
        <option value="Barishal"></option>
        <option value="Bhola"></option>
        <option value="Jhalokati"></option>
        <option value="Patuakhali"></option>
        <option value="Pirojpur"></option>
        </datalist>
        
        <datalist id="districts-Chattogram">
        <option value="Bandarban"></option>
        <option value="Brahmanbaria"></option>
        <option value="Chandpur"></option>
        <option value="Chattogram"></option>
        <option value="Cox's Bazar"></option>
        <option value="Feni"></option>
        <option value="Khagrachhari"></option>
        <option value="Lakshmipur"></option>
        <option value="Noakhali"></option>
        <option value="Rangamati"></option>
        </datalist>
        
        <datalist id="districts-Dhaka">
        <option value="Dhaka"></option>
        <option value="Faridpur"></option>
        <option value="Gazipur"></option>
        <option value="Gopalganj"></option>
        <option value="Kishoreganj"></option>
        <option value="Madaripur"></option>
        <option value="Manikganj"></option>
        <option value="Munshiganj"></option>
        <option value="Narayanganj"></option>
        <option value="Narsingdi"></option>
        <option value="Rajbari"></option>
        <option value="Shariatpur"></option>
        <option value="Tangail"></option>
        </datalist>
        
        <datalist id="districts-Khulna">
        <option value="Bagerhat"></option>
        <option value="Chuadanga"></option>
        <option value="Jessore"></option>
        <option value="Jhenaidah"></option>
        <option value="Khulna"></option>
        <option value="Kushtia"></option>
        <option value="Magura"></option>
        <option value="Meherpur"></option>
        <option value="Narail"></option>
        <option value="Satkhira"></option>
        </datalist>
        
        <datalist id="districts-Mymensingh">
        <option value="Jamalpur"></option>
        <option value="Mymensingh"></option>
        <option value="Netrokona"></option>
        <option value="Sherpur"></option>
        </datalist>
        
        <datalist id="districts-Rajshahi">
        <option value="Bogra"></option>
        <option value="Joypurhat"></option>
        <option value="Naogaon"></option>
        <option value="Natore"></option>
        <option value="Chapai Nawabganj"></option>
        <option value="Pabna"></option>
        <option value="Rajshahi"></option>
        <option value="Sirajganj"></option>
        </datalist>
        
        <datalist id="districts-Rangpur">
        <option value="Dinajpur"></option>
        <option value="Gaibandha"></option>
        <option value="Kurigram"></option>
        <option value="Lalmonirhat"></option>
        <option value="Nilphamari"></option>
        <option value="Panchagarh"></option>
        <option value="Rangpur"></option>
        <option value="Thakurgaon"></option>
        </datalist>
        
        <datalist id="districts-Sylhet">
        <option value="Habiganj"></option>
        <option value="Moulvibazar"></option>
        <option value="Sunamganj"></option>
        <option value="Sylhet"></option>
        </datalist>
        </div>
        </>
        :
        <>
        <div className="border-b mb-4">
        <label className={`block my-2 mx-1 text-sm`}>STATE<span className="text-[#c80000]"> //</span></label>
        <input list="states" onChange={(e) => setState(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
        <datalist id="states">
        <option value="Alabama"></option>
        <option value="Alaska"></option>
        <option value="Arizona"></option>
        <option value="Arkansas"></option>
        <option value="California"></option>
        <option value="Colorado"></option>
        <option value="Connecticut"></option>
        <option value="Delaware"></option>
        <option value="Florida"></option>
        <option value="Georgia"></option>
        <option value="Hawaii"></option>
        <option value="Idaho"></option>
        <option value="Illinois"></option>
        <option value="Indiana"></option>
        <option value="Iowa"></option>
        <option value="Kansas"></option>
        <option value="Kentucky"></option>
        <option value="Louisiana"></option>
        <option value="Maine"></option>
        <option value="Maryland"></option>
        <option value="Massachusetts"></option>
        <option value="Michigan"></option>
        <option value="Minnesota"></option>
        <option value="Mississippi"></option>
        <option value="Missouri"></option>
        <option value="Montana"></option>
        <option value="Nebraska"></option>
        <option value="Nevada"></option>
        <option value="New Hampshire"></option>
        <option value="New Jersey"></option>
        <option value="New Mexico"></option>
        <option value="New York"></option>
        <option value="North Carolina"></option>
        <option value="North Dakota"></option>
        <option value="Ohio"></option>
        <option value="Oklahoma"></option>
        <option value="Oregon"></option>
        <option value="Pennsylvania"></option>
        <option value="Rhode Island"></option>
        <option value="South Carolina"></option>
        <option value="South Dakota"></option>
        <option value="Tennessee"></option>
        <option value="Texas"></option>
        <option value="Utah"></option>
        <option value="Vermont"></option>
        <option value="Virginia"></option>
        <option value="Washington"></option>
        <option value="West Virginia"></option>
        <option value="Wisconsin"></option>
        <option value="Wyoming"></option>
        <option value="District of Columbia"></option>
        </datalist>
        </div>
        
        
        <div className="border-b mb-4">
        <label className={`block my-2 mx-1  text-sm`}>APARTMENT, SUITE, ETC.<span className="text-[#c80000]"> //</span></label>
        <input type="text"  onChange={(e) => setApartment(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
        </div>
        
        </>
      }
      
      <div className="border-b mb-4">
      <label className={`block my-2 mx-1 text-sm`}>ADDRESS<span className="text-[#c80000]"> //</span></label>
      <input type="text" required onChange={(e) => setAddress(e.target.value)}  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c80000]" />
      </div>
      <button onClick={handleSubmit}  type="submit" className=" border-2 border-[#c80000]  w-full my-4 py-2 px-4 rounded-lg hover:bg-[#c80000] hover:text-white transition-all ease-in-out">{country=="United States" ? "We're still working on US shipments :(" : "PROCEED"}</button>
      </form>
      </div>
         </>
      }
       </>}
      </>
    );
  }
