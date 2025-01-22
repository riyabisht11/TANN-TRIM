import React from "react";
import product from "../../assets/Images/Product 1.png";

function Plp() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11,12];
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-16 py-10 md:py-16">
      <div className=" pb-5 md:pb-10 flex justify-center">
        <h1 className="font-book font-normal text-3xl text-[#444C40] ">
          Tote Bags
        </h1>
      </div>
      <main className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {array.map((item, idx) => (
          <div className="card pt-10 border rounded-xl border-[#D1D1D1] inline-block shadow-md ">
            <div>
              <img src={product} alt="" />
            </div>
            <div className="bg-[#444C40]  space-y-5 text-white py-5 px-7 rounded-b-xl">
              <div>
                <h1 className="font-med text-2xl font-semibold">
                  Lightweight Bag
                </h1>
              </div>
              <div>
                <h1 className="font-book text-base font-normal">
                  Black Quilted Satchel Bag
                </h1>
              </div>
              <div className="flex gap-5 font-ave font-normal text-base ">
                <h1 className="font-semibold text-2xl">₹ 3,570.00</h1>
                <h1 className="opacity-30 line-through">₹ 6,570.00</h1>
                <h1>(40% OFF)</h1>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Plp;
