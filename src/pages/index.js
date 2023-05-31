import React, { useState, useEffect } from "react";
import "../globals.css";
import Landing from "components/Landing";
import About from "components/About";
import Header from "components/Header";
import { headerData } from "public/constants";
import Contact from "components/Contact";
import CarrerGraph from "components/CarrerGraph";
import "font-awesome/css/font-awesome.min.css";
import QuickDownloads from "components/QuickDownloads";

export default function Home() {
  const [currentContent, setCurrentContent] = useState("Home");
  return (
    <div className="h-[100vh] max-h-[100vh] overflow-y-scroll bg-black opacity-70">
      <Header
        headerData={headerData}
        current={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <div className="flex flex-col w-full justify-center items-center  px-2 sm:px-20 font-kalam py-20 duration-100">
        {currentContent === "Home" && (
          <div className="w-full ">
            <Landing />
          </div>
        )}
        {currentContent === "About" && (
          <div className="w-full">
            <About />
          </div>
        )}
        {currentContent === "Contact Me" && (
          <div className="w-full">
            <Contact />
          </div>
        )}
        {currentContent === "Carrer Graph" && (
          <div className="w-full">
            <CarrerGraph />
          </div>
        )}
        {currentContent === "Quick Downloads" && (
          <div className="w-full">
            <QuickDownloads />
          </div>
        )}
      </div>
    </div>
  );
}
