import React from 'react'
import orderplaced from "../../assets/SVG/orderplaced.svg"
import { Link } from 'react-router'

function Orderplaced() {
  return (
    <main className='bg-[#444C40] h-full w-full'>
    <div className="max-w-screen-2xl mx-auto px-16 py-16 bg-[#444C40] h-screen flex flex-col justify-center items-center">
    <div className=" max-w-lg mx-auto  space-y-12">
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-center">
        <img src={orderplaced} alt="" />
      </div>
      <div className='flex justify-center '>
        <h1 className="font-med text-white text-xs md:text-base font-semibold whitespace-nowrap">
        Order Id  #7633458
        </h1>
        
      </div>

      <div>
        <h1 className="font-med text-white text-xs md:text-base font-semibold whitespace-nowrap">
        Order has been placed successfuly
        </h1>
      </div>
      
      <div className="flex justify-center py-5 rounded-xl w-full relative bg-white/5">
      <Link to ="/">
        <button className="font-roboto text-base font-medium text-white  z-50 opacity-100">
        Continue Shopping
        </button>
        </Link>
      </div>
      
      
    </div>
  </div>
  </main>
  )
}

export default Orderplaced
