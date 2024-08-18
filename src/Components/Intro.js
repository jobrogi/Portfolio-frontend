import "../index.css";
import React, { useEffect, useState, useMemo } from "react";
import UFO from "../assets/UFO.png";
import UFOSucking from "../assets/UFOSUCK.png";

function Intro() {
  // Mouse coords (hook)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  // Scroll offset
  const [yPos, setYPos] = useState(0);

  // Is UFO Sucking
  const [isSucking, setIsSucking] = useState(false);
  // Is Tilting Left
  const [isTiltingLeft, setIsTiltingLeft] = useState(false);
  // Is Tilting Right
  const [isTiltingRight, setIsTiltingRight] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setLastPosition(position);
      setPosition({ x: event.clientX, y: event.clientY });
      handleTilt();
    };
    const handleScroll = () => {
      setYPos(window.scrollY);
    };

    const handleMouseDown = () => {
      setIsSucking(true);
    };
    const handleMouseUp = () => {
      setIsSucking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleTilt = () => {
    //Need to tilt right
    if (lastPosition.x > position.x) {
      setIsTiltingLeft(true);
      setIsTiltingRight(false);
    } else if (lastPosition.x < position.x) {
      setIsTiltingLeft(false);
      setIsTiltingRight(true);
    }
  };

  const handleUFOState = () => {
    if (isSucking === true) {
      return (
        <img
          className="transition-transform"
          style={{
            position: "absolute",
            left: position.x,
            top: position.y + yPos,
            transform: `translate(-50%, -50%) ${
              isTiltingLeft ? "rotate(-15deg" : ""
            } ${isTiltingRight ? "rotate(15deg" : ""}`,
            cursor: "none",
          }}
          src={UFOSucking}
          onDragStart={(event) => {
            event.preventDefault();
          }}
          alt="oh no"
        ></img>
      );
    } else if (isSucking === false) {
      return (
        <img
          className="transition-transform"
          style={{
            position: "absolute",
            left: position.x,
            top: position.y + yPos,
            transform: `translate(-50%, -50%) ${
              isTiltingLeft ? "rotate(-15deg" : ""
            } ${isTiltingRight ? "rotate(15deg" : ""}`,
            cursor: "none",
          }}
          src={UFO}
          alt="oh no"
        ></img>
      );
    }
  };

  return (
    <div className="bg-ccDark w-full h-screen font-Merriweather relative overflow-hidden">
      <div className="h-1/4 w-full items-end flex flex-nowrap">
        <p className="w-full text-center text-4xl text-white pb-20 ">
          Hi, I am
        </p>
      </div>

      {/* UFO HERE */}
      {handleUFOState()}
      {/* <p className="w-full text-center text-2xl text-white pb-20">
        A Pragmatic Problem Solver and Developer. <br /> Focused on Developing
        Projects to extend my knowledge!
      </p> */}
    </div>
  );
}

export default Intro;
