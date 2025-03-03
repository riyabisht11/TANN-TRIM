import React from "react";

function Deliveryadd() {
  const array = [
    { name: "Email Id", type: "email", id: "email" },
    { name: "First Name", type: "text", id: "text" },
    { name: "Last Name", type: "text", id: "text" },
    { name: "Telephone", type: "tel", id: "number" },
    { name: "Delivery Address", type: "text", id: "text" },
    { name: "Town", type: "text", id: "text" },
    { name: "State / Territory", type: "text", id: "text" },
    { name: "Postcode", type: "text", id: "number" },
    { name: "Country", type: "text", id: "text" },
  ];
  return (
    <div
      id="delivery-address"
      className="shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)]  rounded-xl inline-block  overflow-hidden"
    >
      <div className="py-8 px-6 md:px-12">
        <div>
          <h1 className=" font-med text-2xl text-[#444C40] font-semibold">
            2. Delivery address
          </h1>
        </div>
        <div>
          <h1 className="text-xs text-[#444C40] text-semibold opacity-30 pt-10 pb-6">
            All fields required
          </h1>
        </div>
        <div className="">
          <form action="" className="">
            <div className="space-y-6">
              {array.map((item, idx) => (
                <div className="flex flex-col gap-2 ">
                  <label
                    for="email"
                    className="text-[#C7CAC6] text-xs font-semibold font-med"
                  >
                    {item.name}
                  </label>
                  <input
                    type={item.type}
                    id={item.id}
                    className="rounded-lg outline-none border border-[#E7E7E7] px-5 py-3 text-[#444C40] font-med font-semibold text-xs "
                  />
                </div>
              ))}
            </div>
          </form>
        </div>

        <div className="flex gap-2 pt-9">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 rounded-sm accent-[#444C40] opacity-40"
            />
            <span className="text-[#C7CAC6] text-sm font-semibold flex items-center">
              Same billing address
            </span>
          </label>
        </div>
      </div>
      <div
        onClick={() => {
          document.getElementById("payment-method")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="bg-[#444C40] flex justify-center hover:brightness-125 duration-500 transition-all"
      >
        <button className="text-white font-med text-base font-semibold py-5 ">
          CONTINUE TO PAYMENT
        </button>
      </div>
    </div>
  );
}

export default Deliveryadd;
