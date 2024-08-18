import React from "react";

const handleUFOState = () => {
  if (isSucking === true) {
    return (
      <img
        className="transition-all duration-200"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y + yPos,
          transform: "translate(-50%, -50%)",
          cursor: "none",

          //Handles Tilt
          ...(isTiltingLeft ? { rotate: "-15deg" } : {}),
          ...Intro(isTiltingRight ? { rotate: "15deg" } : {}),
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
        className="transition-all duration-200"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y + yPos,
          transform: "translate(-50%, -50%)",
          cursor: "none",
        }}
        src={UFO}
        alt="oh no"
      ></img>
    );
  }
};

function UFO({ isSucking, position, yPos, isTiltingL, isTiltingR }) {
  return handleUFOState();
}
