import React from "react";
import insidebag from "../../../assets/Images/inside.png";
import back from "../../../assets/Images/back.png";
import handle from "../../../assets/Images/handle.png";

function Features() {
  const details = [
    {
      name: "EVEN BETTER WITH AGE",
      text: "The exclusive Designers Edition leather is chosen for its structure, shine and handfeel. Take care of it, and it will do the same for you.",
      img: insidebag,
    },
    {
      name: "EVERYTHING IN PLACE",
      text: "Pen loops, phone pocket, business card section and laptop compartment keep everything on hand.",
      img: back,
    },
    {
      name: "STRUCTURE AND FORM",
      text: "Pre-formed leather panels enhance the internal space and give the bag a unique structure that opens right out without losing form.",
      img: handle,
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto space-y-16 lg:space-y-0 py-8 lg:py-[140px]">
      {details.map((item, idx) => (
        <div className="flex gap-5 md:gap-32 justify-center flex-col md:flex-row">
          <div className={`max-w-[350px]   mx-auto md:mx-0 ${idx==1 ? "md:self-end md:pb-10 lg:pb-20" :  " md:pt-10 lg:pt-20"}`}>
            <h1 className="font-ave text-sm md:text-base font-semibold text-center text-[#444C40] pt-2 md:pt-0">
              {item.name}
            </h1>
            <h1 className="font-book text-base md:text-xl lg:text-2xl font-normal text-center text-[#707070] pt-2">
              {item.text}
            </h1>
          </div>
          <div  className={` w-1/2 md:w-auto mx-auto md:mx-0 right pt-5 order-last
                ${
              idx % 2 !== 0 ? "md:order-first" : "md:order-last"
            } `}>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
