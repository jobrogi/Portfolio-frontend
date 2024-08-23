import "../index.css";
import React, { useEffect, useState, useContext } from "react";
import { RefContext, RWDContext } from "../App";
function Nav() {
  const { IntroRef, SkillsRef, ProjectsRef, PortfolioRef } =
    useContext(RefContext);

  //Reads Screen width state from App.js
  const { rwdState } = useContext(RWDContext);

  const section_1 = 1200;
  const section_2 = 2400;
  const section_3 = 3600;

  //For Name
  const [isFixed, setIsFixed] = useState(false);
  //For Underlines
  const [liActive, setliActive] = useState(0);

  //Checks if the user has scrolled 500px down and then changes a hook based off that.
  function handleScroll() {
    const threshold = 500;
    const scrollPos = window.scrollY;

    if (scrollPos > threshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  function setActiveSection() {
    const scrollPos = window.scrollY;

    if (scrollPos < section_1) {
      setliActive(0);
    }
    if (scrollPos >= section_1) {
      setliActive(1);
    }
    if (scrollPos >= section_2) {
      setliActive(2);
    }
    if (scrollPos >= section_3) {
      setliActive(3);
    }
  }

  //Event listener for listening for a mouse scroll wheel.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", setActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", setActiveSection);
    };
  }, []);

  const handleDynamicName = () => {
    if (rwdState === "Phone") {
      return "J.G";
    } else if (rwdState === "Tablet") {
      return "J Gilliam";
    } else {
      return "Jonathon Gilliam";
    }
  };

  return (
    <div className="w-full h-24 absolute left-0 bottom-0 font-Raleway font-black">
      {/* Nav ------------------------------------------------------------------------------------------------------------*/}
      <div className="w-full h-24 bg-ccDark  lg:px-18 flex flex-nowrap shadow-2xl shadow-black text-white fixed  bottom-0 z-10 md:px-6 px-4">
        {rwdState !== "Phone" ? (
          <ul className="flex justify-start w-full h-24 items-center ">
            <button>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </ul>
        ) : (
          <ul className="flex justify-start w-full h-24 items-center ">
            <li className="ms-2 me-2 text-2xl">
              <button>Contact</button>
            </li>
            <li className="ms-2 me-2 text-2xl">
              <button>Socials</button>
            </li>
          </ul>
        )}

        <li
          className={`flex items-center justify-center h-24 left-0 w-full pointer-events-none transition-all duration-1000   ${
            isFixed
              ? "fixed top-0 text-3xl"
              : "fixed top-60 text-8xl text-orange-500"
          }`}
        >
          <button
            className=" pointer-events-auto text-nowrap"
            onClick={() => {
              IntroRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {" "}
            {/* {rwdState !== "Phone" ? "Jonathon Gilliam" : "J Gilliam"} */}
            {handleDynamicName()}
          </button>
        </li>

        {rwdState === "Phone" ? (
          <ul className="flex justify-end w-full h-24 items-center">
            <i className="fa-solid fa-bars text-2xl"></i>
          </ul>
        ) : (
          <ul className="flex justify-end w-full h-24 items-center">
            <li
              className={`ms-2 me-2 text-2xl transition-all ${
                liActive === 1 ? "text-3xl text-orange-500" : ""
              }`}
            >
              <button
                className=""
                onClick={() => {
                  SkillsRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Skills
              </button>
            </li>
            <li
              className={`ms-2 me-2 text-2xl transition-all ${
                liActive === 2 ? "text-3xl text-orange-500" : ""
              }`}
            >
              <button
                onClick={() => {
                  ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </button>
            </li>
            <li
              className={`ms-2 me-2 text-2xl transition-all ${
                liActive === 3 ? "text-3xl text-orange-500" : ""
              }`}
            >
              <button
                onClick={() => {
                  PortfolioRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Portfolio
              </button>
            </li>
          </ul>
        )}
      </div>
      {/* -----------------------------------------------------------------------------------------------------------------*/}
    </div>
  );
}

export default Nav;
