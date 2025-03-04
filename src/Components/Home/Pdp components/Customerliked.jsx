import React from "react";
import product from "../../../assets/Images/similarbags.png";
import arrow from "../../../assets/SVG/arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

function Customerliked() {
  const Similarproduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="max-w-screen-2xl mx-auto py-[100px]">
      <div className="">
        <h1 className="font-med text-2xl font-semibold">CUSTOMER ALSO LIKED</h1>
      </div>

      <div className="flex   pt-10 r relative">
        <div className="swiper-button-next bg-[#444C40] rounded-lg size-10 shrink-0 cursor-pointer absolute right-0  top-2/3 -translate-y-1/2">
          <img src={arrow} alt="" className="px-4 py-3" />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 30, // spaceBetween 30px for screen width >= 1024px
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 30, // spaceBetween 30px for screen width >= 1024px
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 50, // spaceBetween 70px for screen width >= 1280px
              slidesPerView: 5,
            },
          }}
          className=" mySwiper mx-6 md:mx-0  w-[90%] flex "
        >
          {Similarproduct.map(() => (
            <SwiperSlide key={Similarproduct.id}>
              <div className="card w-52 md:w-auto  shrink-0 pt-10 border rounded-xl border-[#D1D1D1] inline-block shadow-md ">
                <div>
                  <img src={product} alt="" />
                </div>
                <div className="text-black space-y-2  py-4 px-3 rounded-b-xl border-t-2 border-[#D1D1D1] ">
                  <div>
                    <h1 className="font-med text-base md:text-xs font-semibold">
                      Lightweight Bag
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-book text-xs font-normal">
                      Black Quilted Satchel Bag
                    </h1>
                  </div>
                  <div className="flex  flex-col md:flex-row gap-2 font-ave font-normal text-base ">
                    <h1 className="font-semibold text-xs">₹ 3,570.00</h1>
                    <h1 className="opacity-30 line-through text-[9px]">
                      ₹ 6,570.00
                    </h1>
                    <h1 className="text-[#FF4242] text-[9px]">(40% OFF)</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Customerliked;
