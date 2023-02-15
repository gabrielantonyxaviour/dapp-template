import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ETHLogo from "../assets/ethlogo.png";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const NavElement = ({ to, label }) => {
    return (
      <li className=" px-5 text-lg font-semibold text-[#A9A9A9] hover:text-white">
        <Link
          className="select-none"
          to={to}
          onClick={() => {
            setNav(!nav);
          }}
        >
          {label}
        </Link>
      </li>
    );
  };
  return (
    <div className="p-4 my-4 py-6 flex justify-between items-center max-w-[1400px] bg-gradient-to-r from-black to-[#181818] mx-auto rounded-lg">
      <div className="flex ">
        <img src={ETHLogo} width={35} height={35}></img>
        <h1 class=" pl-3 text-lg  md:text-2xl font-bold text-[#4CBB17] select-none hover:text-white cursor-default ease-in-out duration-500">
          <Link
            className="select-none   text-sm sm:text-base lg:text-xl "
            to="/"
          >
            Super Offers
          </Link>
        </h1>
      </div>

      <ul class="hidden lg:flex select-none ">
        <NavElement to="/" label="Home" />
        <NavElement to="/offer" label="Dashboard" />
        <NavElement to="/" label="Your offers" />
      </ul>
      <ConnectButton />
      <div class="block lg:hidden">
        {nav ? (
          <AiOutlineClose size={20} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleNav} />
        )}
      </div>
      <div
        class={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 class="w-full text-2xl font-bold text-[#D22B2B] m-4 hover:text-white cursor-default ease-in-out duration-500">
          <Link
            className="select-none   text-sm sm:text-base lg:text-xl "
            to="/"
          >
            Super Offers
          </Link>
        </h1>

        <ul class="p-5 uppercase text-xs sm:text-base">
          <NavElement to="/" label="Home" />
          <NavElement to="/offer" label="Dashboard" />
          <NavElement to="/" label="Your offers" />
        </ul>
      </div>
    </div>
  );
}
