import React from "react";
import { careerGraphData } from "public/constants";
import 'animate.css';

export default function CarrerGraph({}) {
  return (
    <>
      <div className="w-full flex flex-col duration-10 scroll-smooth fadeinout duration-100">
        <h1 className="w-full text-center text-white text-4xl my-2 font-kalam">Trajectory of my Professional Journey...</h1>
          {careerGraphData?.map((x, index) => {
            return (
              <div className="w-full" key={index}>
                <div
                  className={` w-full sm:w-4/5 bg-[#808080] min-h-[100px] rounded-lg my-4 py-2 px-4 ${
                    index % 2 == 0 ? "sm:float-left" : "sm:float-right"
                  } hover:scale-110 duration-300 `}
                >
                  <div className="font-kalam animate__animated animate__fadeInUp">
                    <h1 className="my-1 font-bold">{x?.heading}</h1>
                    <p className="my-1">{x?.description}</p>
                    <p className="my-1">{x?.duration}</p>
                    <p className="my-1">{x?.marksObtained}</p>
                    <p className="my-1">{x?.ExtraInfo}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
