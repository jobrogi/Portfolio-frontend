import "../index.css";
import React, { useState } from "react";
import ProfileIMG from "../ProfileIMG.jpg";
function Intro() {
  return (
    <div className="bg-ccDark w-full h-screen font-Merriweather">
      <div className="h-1/4 w-full items-end flex flex-nowrap">
        <p className="w-full text-center text-4xl text-white pb-20 ">
          Hi, I am
        </p>
      </div>
      {/* <p className="w-full text-center text-2xl text-white pb-20">
        A Pragmatic Problem Solver and Developer. <br /> Focused on Developing
        Projects to extend my knowledge!
      </p> */}
    </div>
  );
}

export default Intro;
