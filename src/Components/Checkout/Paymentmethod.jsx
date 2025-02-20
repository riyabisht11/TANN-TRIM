import React from "react";
import blackarrow from "../../assets/SVG/blackarrow.svg";
import cards from "../../assets/SVG/cards.svg";
import cash from "../../assets/SVG/cash.svg";
import paytm from "../../assets/SVG/paytm.svg";

function Paymentmethod() {
  const array = [
    { img: cards, name: "Cards", img1: blackarrow },
    { img: cash, name: "Cash on delivery", img1: blackarrow },
    { img: paytm, name: "Paytm", img1: blackarrow },
  ];
  return (
    <div className="shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)]  rounded-xl inline-block  overflow-hidden ">
      <main className="px-6 md:px-12 py-7 space-y-12">
        <div className="">
          <h1 className="text-2xl font-semibold text-[#444C40] font-med">
            3. Payment Method
          </h1>
        </div>
        <div className="border border-[#E7E7E7] rounded-xl">
        {array.map((item, idx) => (
          <div className= {`px-7 py-5 flex justify-between cursor-pointer  hover:bg-[#444C40]/30 hover:text-white  w-full lg:w-[648px] ${idx===array.length-1 ? "" :"border-b border-[#E7E7E7]"}` }>
            <div className="flex gap-7">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-[#444C40]  text-base font-semibold font-med">
                  {item.name}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={item.img1} alt="" />
            </div>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
}

export default Paymentmethod;
