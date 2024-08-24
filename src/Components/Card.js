import "../index.css";
import React from "react";

function Card(props) {
  return (
    <div className="bg-ccOffWhite rounded-md shadow-2xl shadow-black w-320 h-420 Phone:p-2 Tablet:p-4 Laptop:p-4 Desktop:p-4 flex flex-wrap m-4 content-between relative transition-all bg-gradient-to-t from-ccOffWhite to-orange-200 hover:w-330 hover:h-410 Desktop:basis-96 Laptop:basis-80">
      <button className="absolute top-0 left-0 w-full h-full"></button>
      <div className="flex flex-wrap content-start">
        {props.isFontAwesome === true ? (
          <div className="w-20 h-20 text-6xl flex justify-center items-center me-2">
            {props.Icon}
          </div>
        ) : (
          <img
            src={props.Icon}
            alt="Oh No"
            className="w-20 h-20 object-cover"
          ></img>
        )}
        <div className="h-fit">
          <h1 className="text-2xl pt-2 font-Raleway font-black">
            {props.Name}
          </h1>
          <p className="font-semibold">{props.Category}</p>
        </div>
        <hr className="h-0.5 w-full bg-black" />
        <p className="pt-4">{props.Desc}</p>
      </div>

      <div className="flex flex-nowrap w-full items-center ">
        <h1 className="text-4xl font-semibold">{props.Level}</h1>

        {/* PROGRESS BAR HERE */}
        <div className="flex flex-wrap w-full">
          <div className="flex flex-nowrap w-full justify-between me-4">
            <h1 className="font-semibold text-lg ps-4">Level</h1>
            <h1 className="font-semibold text-lg ps-4">{props.Percent}%</h1>
          </div>
          <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600 text-center text-white rounded-md mx-4">
            <div
              className="h-2 bg-red-500 rounded-md"
              style={{ width: `${props.Percent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
