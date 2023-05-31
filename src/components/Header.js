import React, { useState, useEffect } from "react";
import { ReactPropTypes } from "react";
import MenuIconActive from "../public/icons/menuactive.svg";
import MenuIcon from "../public/icons/menu.svg";

import Image from "next/image";

export default function Header({ current, headerData, setCurrentContent }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="flex justify-between h-20 py-10 sticky top-0 z-[10] bg-black opacity-100">
      <div className="mx-2 sm:ml-10 sm:mr-0">
        {current !== "Home" && (
          <p className="text-xl animate-charcter font-kalam">
            <span>Anjani </span> <span>Saxena... </span>
          </p>
        )}
      </div>
      <div className="hidden sm:flex w-full h-20 justify-end ">
          {headerData.map((x) => {
            return (
              <div key={x} className="mx-2 sm:mx-10">
                <p
                  onClick={() => setCurrentContent(x)}
                  className={`text-white cursor-pointer ${
                    current === x
                      ? "font-bold duration-100 underline jello"
                      : "hover:animate-bounce h-4"
                  }`}
                >
                  {x}
                </p>
              </div>
            );
          })}
      </div>
      <div
        className={`sm:hidden absolute  h-[50vh] z-10 right-0 top-0 flex justify-end  bg-orange-500 ${
          isOpen ? "w-full rounded-l-full rounded-br-full" : "bg-transparent"
        }`}
      >
        {isOpen && (
          <div className="z-10 h-[100%] flex flex-col  justify-center w-full items-center	">
            {headerData.map((x) => {
              return (
                <div key={x} className="mx-2 sm:mx-10 py-4">
                  <p
                    onClick={() => {
                      setCurrentContent(x);
                      setIsOpen(false);
                    }}
                    className={`text-white cursor-pointer ${
                      current === x
                        ? "font-bold duration-100 underline jello"
                        : "h-4"
                    }`}
                  >
                    {x}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div
          className={`group absolute flex h-20 w-20 cursor-pointer items-center transition-transform duration-300	ease-in-out justify-center rounded-3xl p-2 z-10`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block h-1 w-10 origin-center rounded-full  transition-transform duration-300	ease-in-out ${
                isOpen
                  ? "translate-y-1.5 rotate-45 bg-slate-700"
                  : "bg-slate-500"
              }`}
            ></span>
            <span
              className={`block h-1 origin-center rounded-full bg-orange-500 transition-transform duration-400	 ease-in-out ${
                isOpen ? "hidden" : " w-8"
              }`}
            ></span>
            <span
              className={`block h-1 origin-center rounded-full bg-orange-500 transition-transform duration-500	ease-in-out ${
                isOpen
                  ? "w-10 -translate-y-1.5 -rotate-45 bg-slate-700"
                  : " w-6"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
Header.ReactPropTypes = {
  current: String,
  headerData: Array,
};
Header.defaultProps = {
  current: "Home",
  headerData: [],
};
