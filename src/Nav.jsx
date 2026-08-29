import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/juicelogo.png";
const Nav = () => {
  return (
    <div className="w-full h-40  fixed z-50 flex items-start justify-between text-3xl font-bold text-white">
      {/* left nav */}
      <div className="lg:ml-20 ml-9 mt-7 ">
        <img
          className="lg:w-35 w-42 cursor-pointer"
          src={logo}
          alt="Juice Logo"
        />
      </div>
      {/* center nav  */}
      <div className="text-base flex lg:gap-5 gap-2 font-medium pt-6 lg:pt-25 lg:pl-55 md:pr-72 pr-2 lg:pr-0 ">
        <button className="bg-white cursor-pointer text-black hover:bg-[#c6fd00] hover:text-white  px-6 py-2 rounded-full ">
          Products
        </button>
        <button className=" bg-white/40 backdrop-blur-md   cursor-pointer hover:bg-[#c6fd00] hover:text-white   text-black px-7 py-2 rounded-full ">
          Contact
        </button>
      </div>
      {/* right nav */}
      <div className="hidden lg:flex items-center text-base gap-7 mr-20 mt-8 font-medium ">
        <Link className=" hover:text-[#c6fd00]   cursor-pointer" to="/">
          Home
        </Link>
        <Link className=" hover:text-[#c6fd00]  cursor-pointer" to="/">
          Products
        </Link>
        <a className=" hover:text-[#c6fd00]  cursor-pointer" href="">
          Contact
        </a>

        <button className="bg-white hover:bg-[#c6fd00] hover:text-white   text-black px-3 py-2 rounded-full cursor-pointer ">
          Place order &gt;
        </button>
      </div>
    </div>
  );
};

export default Nav;
