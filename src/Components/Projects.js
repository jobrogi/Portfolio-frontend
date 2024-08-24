import "../index.css";
import React, { useContext } from "react";
import { RWDContext } from "../App";
function Projects() {
  const { rwdState } = useContext(RWDContext);

  return (
    <div className=" w-full min-h-screen Desktop:px-20 Laptop:px-0 py-10 pattern-paper pattern-ccGray pattern-bg-ccDark pattern-size-24 pattern-opacity-100">
      <p className="w-full text-center text-ccOffWhite text-2xl pb-10 font-Merriweather">
        Please be advised these projects are still being worked on along with
        this website. I appreciate your patience!
      </p>
      <div className="flex Desktop:flex-nowrap Laptop:flex-wrap Tablet:flex-wrap Phone:flex-wrap">
        <div className="flex flex-wrap Desktop:w-1/2 Laptop:w-full">
          <div className="w-1/2 min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Voxel Game Engine
              </h1>
            </button>
          </div>
          <div className="w-1/2 min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Wizardly Survival
              </h1>
            </button>
          </div>
          <div className="w-full min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Real Time Chat
              </h1>
            </button>
          </div>{" "}
        </div>
        <div className="Desktop:w-1/2 Laptop:w-full Tablet:w-full Phone:w-full min-h-96 p-3 hover:p-1 transition-all group">
          <button className=" bg-ccOffWhite w-full h-full flex justify-center items-center">
            <h1 className="text-ccGray font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
              Ghillie Studios
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
