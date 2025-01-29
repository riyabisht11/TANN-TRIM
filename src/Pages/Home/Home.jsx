import React from "react";
import Hero from "../../Components/Home/Hero";
import Content from "../../Components/Home/Content";
import Content2 from "../../Components/Home/Content2";
import Register from "./Register";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Menu from "../../Components/Topmenu/Menu";
import Cart from "../../Components/Topmenu/Cart";

function Home() {
  return (
    <div className="relative">
      {/* <Forgotpassword/>
    <Login/> */}
      {/* <Register/> */}
      {/* <Menu/> */}
      {/* <Cart /> */}
      <Hero />
      <Content />
      <Content2 />
    </div>
  );
}

export default Home;
