import React from "react";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { current } from "tailwindcss/colors";
import { AboutSection } from "public/constants";
export default function About() {
  return (
    <div className="py-10 w-full  font-kalam mx-4">
      <div className="flex w-full justify-center fadeinout duration-100">
        <p className="text-white text-4xl">
          Who is Anjani Saxena? Here you go....
        </p>
      </div>
      {AboutSection?.map((x, index) => {
        return (
          <div className="w-full py-10 px-2 sm:px-20  fadeinout duration-500" key={index}>
            <h1 className="text-white text-2xl text-left font-kalam font-bold">{x.heading}</h1>
            <p className="text-white text-lg text-left font-kalam">
              {x.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
