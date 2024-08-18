import "../index.css";
import React, { useEffect, useState, useContext } from "react";
import { RefContext } from "../App"; // Adjust the path as needed

function Nav() {
  var screenWidth = window.screen.width;
  const [isMobile, setIsMobile] = useState(false);

  const { IntroRef, SkillsRef, ProjectsRef, PortfolioRef } =
    useContext(RefContext);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Event listener for listening for a mouse scroll wheel.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", setActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", setActiveSection);
    };
  }, []);

  return (
    <div className="bg-ccDark w-full h-24 sticky top-0 font-Raleway font-black">
      {/* Nav ------------------------------------------------------------------------------------------------------------*/}
      <div className="w-full h-24 bg-ccBlack lg:px-18 flex flex-nowrap shadow-2xl shadow-black text-white fixed top-0 z-10 md:px-6 px-4">
        {isMobile === false ? (
          <ul className="flex justify-start w-full h-24 items-center ">
            <button>
              <i class="fa-solid fa-bars text-2xl"></i>
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
            className=" pointer-events-auto"
            onClick={() => {
              IntroRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {" "}
            {isMobile === false ? "Jonathon Gilliam" : "J Gilliam"}
          </button>
        </li>

        {isMobile === true ? (
          <ul className="flex justify-end w-full h-24 items-center">
            <i class="fa-solid fa-bars text-2xl"></i>
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
