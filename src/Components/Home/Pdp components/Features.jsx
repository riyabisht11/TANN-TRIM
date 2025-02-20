import React from "react";
import insidebag from "../../../assets/Images/inside.png";
import back from "../../../assets/Images/back.png";
import handle from "../../../assets/Images/handle.png";

function Features() {
  const details = [
    {
      name: "EVEN BETTER WITH AGE",
      text: "The exclusive Designers Edition leather is carefully selected for its rich texture, natural shine, and luxurious handfeel. With time, it develops a unique patina, enhancing its beauty and character, making each piece truly one of a kind. ",
      img: insidebag,
    },
    {
      name: "EVERYTHING IN PLACE",
      text: "Designed for seamless organization, our bags feature dedicated pen loops, a secure phone pocket, a business card section, and a padded laptop compartment, ensuring everything you need is always within reach.",
      img: back,
    },
    {
      name: "STRUCTURE AND FORM",
      text: "Crafted with pre-formed leather panels, this bag is designed to maintain its elegant shape while maximizing internal space. The unique structure allows it to open wide for easy access without losing form, ensuring a seamless blend of style and practicality.",
      img: handle,
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto space-y-16 lg:space-y-0 py-8 lg:py-[50px] overflow-x-hidden">
      {details.map((item, idx) => (
        <div className="flex gap-5 sm:gap-12 lg:gap-32 justify-center flex-col md:flex-row">
          <div className={`max-w-[350px]   mx-auto md:mx-0 ${idx==1 ? "md:self-end md:pb-10 lg:pb-20" :  " md:pt-10 lg:pt-20"}`}>
            <h1 className="font-ave text-sm md:text-2xl font-semibold text-center text-[#444C40] pt-2 md:pt-0">
              {item.name}
            </h1>
            <h1 className="font-book text-base md:text-base lg:text-2xl font-normal text-center text-[#707070] pt-5">
              {item.text}
            </h1>
          </div>
          <div  className={` w-1/2 md:w-auto mx-auto md:mx-0 right pt-5 order-last
                ${
              idx % 2 !== 0 ? "md:order-first" : "md:order-last"
            } `}
            data-aos={idx % 2 !== 0 ? "fade-right" : "fade-left"}
      
                data-aos-duration="1500">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
