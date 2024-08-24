import "../index.css";
import React, { useEffect, useState, useRef, useContext } from "react";
import UFO from "../assets/UFO.png";
import { RWDContext } from "../App";

function Intro() {
  //Reads Screen width state from App.js
  const { rwdState } = useContext(RWDContext);

  // Mouse coords (hook)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Toggle UFO
  const [toggleUFO, setToggleUFO] = useState(false);

  // Scroll offset
  const [yPos, setYPos] = useState(0);

  // Is UFO Sucking
  const [isSucking, setIsSucking] = useState(false);
  const [tilt, setTilt] = useState(0); // Store tilt angle directly
  const timerRef = useRef(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    //Handles Main Mouse Movement for UFO
    const handleMouseMove = (event) => {
      //Resets timer since user moved mouse
      clearTimeout(timerRef.current); // Clear existing timer

      setIsMouseMoving(true);
      clearTimeout(timerRef.current); // Clear existing timer

      const newPosition = { x: event.clientX, y: event.clientY };
      const deltaX = newPosition.x - position.x;
      const tiltChange = deltaX / 15; // Adjust sensitivity as needed
      setTilt((prevTilt) => Math.max(-15, Math.min(15, prevTilt + tiltChange)));
      setPosition(newPosition);
    };

    //Start Timer In case user stops moving mouse
    timerRef.current = setTimeout(() => {
      setTilt(0);
    }, 50);

    //Makes sure the scroll offset is added to the UFO Absolute transform.
    const handleScroll = () => {
      setYPos(window.scrollY);
    };

    const handleMouseDown = () => {
      setIsSucking(true);
    };
    const handleMouseUp = () => {
      setIsMouseMoving(false);
      setIsSucking(false);

      if (!isTimerRunning) {
        setIsTimerRunning(true);
        clearTimeout(timerRef.current); // Clear existing timer
        timerRef.current = setTimeout(() => {
          setTilt(0);
          setIsTimerRunning(false);
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timerRef.current); // Clear timer on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleUFOState = () => {
    if (rwdState !== "Phone" && rwdState !== "Tablet") {
      if (isSucking === true) {
        return (
          <div
            onDragStart={(event) => {
              // event.preventDefault();
            }}
          >
            <div
              className="absolute top-0 left-0 w-14 h-screen bg-gradient-to-r from-transparent via-green-500 to-transparent"
              style={{
                position: "absolute",
                left: position.x,
                top: position.y + yPos,
                transform: `translate(-50%, 0%) `,
              }}
            ></div>
            <img
              className="transition-transform"
              style={{
                position: "absolute",
                left: position.x,
                top: position.y + yPos,
                transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
                pointerEvents: "none",
                cursor: "none",
              }}
              src={UFO}
              alt="oh no"
            ></img>
            {/* <img
            className="transition-transform"
            style={{
              position: "absolute",
              left: position.x,
              top: position.y + yPos,
              transform: `translate(-50%, -50%) rotate(${tilt}deg)`,

              cursor: "none",
            }}
            src={UFOSucking}
            onDragStart={(event) => {
              event.preventDefault();
            }}
            alt="oh no"
          ></img> */}
          </div>
        );
      } else if (isSucking === false) {
        return (
          <img
            className="transition-transform"
            style={{
              position: "absolute",
              left: position.x,
              top: position.y + yPos,
              transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
              cursor: "hide",
            }}
            src={UFO}
            alt="oh no"
          ></img>
        );
      }
    }
  };

  return (
    <div className="max-w-screen min-h-fit pb-52 w-full font-Merriweather pattern-cross pattern-bg-ccDark pattern-ccGray  pattern-size-24 pattern-opacity-100">
      {/* ToggleUFO Button */}
      {toggleUFO === false ? (
        <div className="fixed top-0 left-0 w-12 h-5 m-6 rounded-full bg-red-500 hover:red-600">
          <div className="w-5 h-5  bg-ccOffWhite rounded-full absolute -z-10 transition-all"></div>
          <button
            className="w-full h-full"
            onClick={() => {
              if (toggleUFO === true) {
                setToggleUFO(false);
              } else {
                setToggleUFO(true);
              }
            }}
          ></button>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-12 h-5 m-6 rounded-full bg-green-500 z-50 hover:bg-green-600">
          <div className="w-5 h-5 bg-ccOffWhite rounded-full absolute -z-10 transition-all translate-x-7"></div>

          <button
            className="w-full h-full "
            onClick={() => {
              if (toggleUFO === true) {
                setToggleUFO(false);
              } else {
                setToggleUFO(true);
              }
            }}
          ></button>
        </div>
      )}
      <div className="w-full items-end flex flex-nowrap pt-44">
        <p className="w-full text-center text-4xl text-white pb-20 ">
          Hi, I am
        </p>
      </div>

      {/* UFO HERE */}
      {toggleUFO === true ? handleUFOState() : ""}

      {/* <p className="w-full text-center text-2xl text-white pb-20">
        A Pragmatic Problem Solver and Developer. <br /> Focused on Developing
        Projects to extend my knowledge!
      </p> */}
    </div>
  );
}

export default Intro;
