"use client";


import { useState } from "react";
import { X } from "lucide-react";

import MainButton from "./MainButton";
import InquiryModal from "../Modal";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";


function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal open/close state

  // Toggle Modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-[9999] ">
    {/* DESKTOP */}
    <div className=" hidden lg:block animate-in fade-in zoom-in bg-background p-4 pt-0 pb-0 border-b border-b-superGray">
      <div className="flex justify-between mx-[41px] gap-8 items-center ">
        <div className="flex gap-[2.5rem] items-center">
          <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
          <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
            {PORTFOLIO_OWNER_FIRSTNAME}
          </div>
        </div>
        <div className="flex text-[16px] items-center select-none border border-superGray h-[5.34rem] rounded-t-[0.75rem] mt-[1.88rem]">
          <p
            className={`hover:text-white hover:rounded-tl-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
          >
            Home
          </p>
          <p
            className={`hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
          >
            About Me
          </p>
          <p
            className={`hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 border-r border-r-superGray self-stretch  font-[500] text-customGrayAlt2`}
          >
            Portfolio
          </p>
          <p
            className={`hover:text-white  hover:rounded-tr-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 self-stretch   font-[500] text-customGrayAlt2`}
          >
            Services
          </p>
        </div>
        <div className="flex items-center gap-[40px] select-none">
          <div className="flex gap-[2.5rem] items-center">
            <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
            <MainButton text="Contact Me" action={toggleModal} />
            </div>

            <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Nav */}
      <div className="block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-background animate-in fade-in zoom-in border-b border-b-superGray">
        <div className="flex justify-between mx-[10px]">
          {/* Mobile Menu */}
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center">
              <div className="text-2xl md:text-4xl font-extrabold uppercase mt-8 text-white outline outline-[1px] outline-superGray rounded-tl-[1.25rem] ">
                <img
                  src="/images/hamburger.png"
                  alt="logo"
                  className="cursor-pointer animate-in fade-in zoom-in"
                  // You can add a toggle function for mobile menu if needed
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default NavBar;
