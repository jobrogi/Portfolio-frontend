import "../index.css";
import React, { useState, useEffect, useRef } from "react";

function Card(props) {
  const divRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [skewX, setSkewX] = useState(0.0);
  const [skewY, setSkewY] = useState(0.0);
  const [positionX, setPositionX] = useState({ xStart: 0, xEnd: 0 });
  const [positionY, setPositionY] = useState({ yStart: 0, yEnd: 0 });

  const minX = -2;
  const maxX = 2;
  // Props include:
  // Icon C++ ICON
  // Name C++
  // Category Programming Language
  // Description
  //Progress Bar percentage

  function mapInRange(num, inMin, inMax, outMin, outMax) {
    return (
      (((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin) * -1
    );
  }

  function getDivPos() {
    const rect = divRef.current.getBoundingClientRect();
    setPositionX({ xStart: rect.left, xEnd: rect.right });
    setPositionY({ yStart: rect.top, yEnd: rect.bottom });
  }

  useEffect(() => {
    getDivPos(divRef.current);

    // console.log(divRef);
  }, []);

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleSkew = () => {
      if (isHovering) {
        setSkewX(
          Math.round(
            mapInRange(coords.x, positionX.xStart, positionX.xEnd, minX, maxX)
          )
        );
        setSkewY(
          Math.round(
            mapInRange(coords.y, positionY.yStart, positionY.yEnd, minX, maxX)
          )
        );
      }
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    const animationFrame = requestAnimationFrame(handleSkew);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  });

  const skewStyle = {
    transform: `skewX(${skewY}deg) skewY(${skewX}deg)`,
  };

  return (
    <div
      className="bg-ccOffWhite rounded-md shadow-2xl shadow-black w-80 h-400 p-4 flex flex-wrap m-4 content-between relative transition-all"
      style={skewStyle}
      ref={divRef}
    >
      <button
        className="absolute top-0 left-0 w-full h-full"
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setSkewX(0.0);
          setSkewY(0.0);
        }}
      ></button>
      <div className="flex flex-wrap content-start">
        {props.isFontAwesome === true ? (
          <div className="w-20 h-20 text-6xl flex justify-center items-center me-2">
            {props.Icon}
          </div>
        ) : (
          <img src={props.Icon} className="w-20 h-20 object-cover"></img>
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
