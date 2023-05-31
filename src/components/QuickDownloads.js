import React, { useState, useEffect } from "react";
import { DownloadItems } from "public/constants";

export default function QuickDownloads({}) {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between flex-col sm:flex-row">
          <div className="w-full sm:w-3/6 h-[60vh] px-2">
            <iframe
              src="https://drive.google.com/file/d/1GVI2bKFoaCOIXxRjGIM_OS6IS2iyek_8/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className=""
            ></iframe>
          </div>
          <div className="w-full sm:w-3/6 my-auto">
            <h1 className="text-white text-2xl underline font-kalam text-center py-2">
              Resume
            </h1>
            <p
              className="text-white text-xl font-kalam text-center animate-bounce h-4 cursor-pointer py-4"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1GVI2bKFoaCOIXxRjGIM_OS6IS2iyek_8/view?usp=sharing"
                );
              }}
            >
              Click here to Download
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between flex-col sm:flex-row-reverse mt-8">
          <div className="w-full sm:w-3/6 h-[60vh] px-2">
            <iframe
              src="https://drive.google.com/file/d/1modCsrakej7FdMqxIV_TGLfICaQ0vZL7/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className=""
            ></iframe>
          </div>
          <div className="w-full sm:w-3/6 my-auto">
            <h1 className="text-white text-2xl underline font-kalam text-center py-2 px-2">
              Research Paper published in IAJPS
            </h1>
            <p className="text-white text-xl font-kalam text-center py-2 px-2">
              Topic:ASSESSMENT OF ANTIOXIDANT AND PROTECTIVEPOTENTIALS OF OCIMUM
              TENUIFLORUM LINN. LEAVESETHANOLIC EXTRACT: AN IN VITRO STUDY
            </p>
            <p
              className="text-white text-xl font-kalam text-center animate-bounce h-4 cursor-pointer py-4"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1modCsrakej7FdMqxIV_TGLfICaQ0vZL7/view?usp=share_link"
                );
              }}
            >
              Click here to Download
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
