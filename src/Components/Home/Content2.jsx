import React from 'react'
import img from '../../assets/Images/Gift.png'
import play from '../../assets/SVG/Play.svg'

function Content2() {
  return (
    <div className='max-w-screen-2xl mx-auto px-5 md:px-16 py-14'>
        <div className='flex justify-between flex-col md:flex-row gap-8 md:gap-0'>
            <div className="left font-ave font-normal text-xl md:text-2xl  text-center md:text-start max-w-[735px] text-[#9A9A9A] flex items-center">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisc.</h1>
            </div>
            <div className="right relative md:shrink-0">
                <img src={img} alt="" className='rounded-full mx-auto md:mx-0 size-[250px] md:size-[350px] xl:size-[502px]'/>
                <div className='bg-black bg-opacity-40 absolute inset-0  md:w-full md:h-full rounded-full mx-auto md:mx-0 size-[250px] md:size-[350px] xl:size-[502px] '></div>
                <div className='absolute z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'>
                    <img src={play}alt="" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Content2