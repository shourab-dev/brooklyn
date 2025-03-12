import React, { useState } from "react";
import PrimaryButton from "./utils/PrimaryButton";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const menuLinks = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Process",
      url: "#",
    },
    {
      title: "Portfolio",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Services",
      url: "#",
    },
  ];

  const [active, setActive] = useState(false)




  return (
    <nav className="py-5 ">
      <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="logo ">
          <a href="#">
            <img src="/public/images/Logo.png" alt="" className="max-w-full" />
          </a>
        </div>

        {/* Menu */}
        <div
          className={`menu ${
            !active ? "invisible opacity-0" : "visible opacity-100"
          }  transition-all duration-300 lg:visible lg:opacity-100 col-span-2 fixed lg:static bg-gray-700/50 lg:bg-transparent inset-0`}
        >
          <ul
            className={`${
              !active ? "scale-x-0" : ""
            } origin-left lg:scale-x-100 transition-all duration-400  lg:flex justify-end items-center relative gap-12 bg-white h-full lg:h-auto max-w-3/4 lg:max-w-full p-8 lg:p-0 `}
          >
            <button
              className="closeBtn absolute right-6 lg:hidden text-xl text-red-500 "
              onClick={() => setActive(false)}
            >
              <RxCross2 />
            </button>
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="font-medium leading-[150%] text-[#333] my-3 inline-block"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <PrimaryButton>Contact</PrimaryButton>
            </li>
          </ul>
        </div>

        {/* Menu Icon */}
        <div className="icon text-end lg:hidden">
          <button className="text-xl" onClick={() => setActive(true)}>
            <RiMenu3Line />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
