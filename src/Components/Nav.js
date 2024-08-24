import "../index.css";
import React, { useEffect, useState, useContext } from "react";
import { RefContext, RWDContext } from "../App";
function Nav() {
  const { IntroRef, SkillsRef, ProjectsRef, PortfolioRef } =
    useContext(RefContext);

  //controls hamburger menu
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  //Reads Screen width state from App.js
  const { rwdState } = useContext(RWDContext);

  // This clientHeight allows for a way to get the height dynamically.
  var section_1 = 0;
  var section_2 = 0;
  var section_3 = 10000;
  var rect;

  var threshold = 300;

  //For Name
  const [isFixed, setIsFixed] = useState(false);
  //For Underlines
  const [liActive, setliActive] = useState(0);

  useEffect(() => {
    if (IntroRef != null) {
      // rect = IntroRef.current.getBoundingClientRect();
      section_1 = IntroRef.current.clientHeight - 300;
      threshold = IntroRef.current.clientHeight - 300;
    } else {
      console.log("ERR Intro Ref === Null");
    }
    if (SkillsRef != null) {
      // rect = SkillsRef.current.getBoundingClientRect();
      section_2 =
        IntroRef.current.clientHeight + SkillsRef.current.clientHeight - 200;
    } else {
      console.log("ERR Skills Ref === Null");
    }
    if (ProjectsRef != null) {
      section_3 =
        IntroRef.current.clientHeight +
        SkillsRef.current.clientHeight +
        ProjectsRef.current.clientHeight -
        200;
    } else {
      console.log("ERR Projects Ref === Null");
    }
  }, []);

  //Checks if the user has scrolled 500px down and then changes a hook based off that.
  function handleScroll() {
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
    // console.log("CLIENT HEIGHT " + );
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
      {showHamburgerMenu ? (
        <div className="bottom-24 left-0 fixed bg-ccOffWhite w-16 h-fit transition-all duration-1000">
          <ul className="pt-4 w-full">
            <li className="w-full text-center">
              <button>
                <a
                  href="https://www.linkedin.com/in/jbgilliam"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-linkedin text-6xl"></i>
                </a>
              </button>
            </li>
            <li className="w-full text-center">
              <button>
                <a
                  href="mailto:Jobrogi@gmail.com?subject=Cool Website!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope text-6xl"></i>
                </a>
              </button>
            </li>
            <li className="w-full text-center">
              <button>
                <a
                  href="https://github.com/jobrogi"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-github text-6xl"></i>
                </a>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="-bottom-52 left-0 fixed bg-ccOffWhite w-16 h-fit transition-all duration-1000">
          <ul className="pt-4 w-full">
            <li className="w-full text-center">
              <button>
                <i className="fa-brands fa-linkedin text-6xl"></i>
              </button>
            </li>
            <li className="w-full text-center">
              <button>
                <i className="fa-solid fa-envelope text-6xl"></i>
              </button>
            </li>
            <li className="w-full text-center">
              <button>
                <i className="fa-brands fa-github text-6xl"></i>
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Nav ------------------------------------------------------------------------------------------------------------*/}
      <div className="w-full h-24 bg-ccDark  lg:px-18 flex flex-nowrap shadow-2xl shadow-black text-white fixed  bottom-0 z-10 md:px-6 px-4">
        {rwdState !== "Phone" ? (
          <ul className="flex justify-start w-full h-24 items-center ">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => {
                if (showHamburgerMenu === false) {
                  setShowHamburgerMenu(true);
                } else {
                  setShowHamburgerMenu(false);
                }
              }}
            >
              {showHamburgerMenu ? (
                <i className="fa-solid fa-caret-down text-2xl flex flex-nowrap items-center">
                  {rwdState !== "Phone" ? (
                    <h1 className="ps-4 text-xl">Contact</h1>
                  ) : (
                    ""
                  )}
                </i>
              ) : (
                <i className="fa-solid fa-bars text-2xl flex flex-nowrap items-center">
                  {rwdState !== "Phone" ? (
                    <h1 className="ps-4 text-xl">Contact</h1>
                  ) : (
                    ""
                  )}
                </i>
              )}
            </button>
          </ul>
        ) : (
          <ul className="flex justify-start w-full h-24 items-center ">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => {
                if (showHamburgerMenu === false) {
                  setShowHamburgerMenu(true);
                } else {
                  setShowHamburgerMenu(false);
                }
              }}
            >
              {showHamburgerMenu ? (
                <i className="fa-solid fa-caret-down text-2xl flex flex-nowrap items-center">
                  {rwdState !== "Phone" ? (
                    <h1 className="ps-4 text-xl">Contact</h1>
                  ) : (
                    ""
                  )}
                </i>
              ) : (
                <i className="fa-solid fa-bars text-2xl flex flex-nowrap items-center">
                  {rwdState !== "Phone" ? (
                    <h1 className="ps-4 text-xl">Contact</h1>
                  ) : (
                    ""
                  )}
                </i>
              )}
            </button>
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
              <h1 className="Phone:text-base Tablet:text-2xl">Skills</h1>
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
              <h1 className="Phone:text-base Tablet:text-2xl">Projects</h1>
            </button>
          </li>
          <li
            className={`ms-2 me-2 text-2xl transition-all ${
              liActive === 3 ? "text-3xl text-orange-500" : ""
            }`}
          >
            <button
              className=""
              onClick={() => {
                PortfolioRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <h1 className="Phone:text-base Tablet:text-2xl">Portfolio</h1>
            </button>
          </li>
        </ul>
      </div>
      {/* -----------------------------------------------------------------------------------------------------------------*/}
    </div>
  );
}

export default Nav;
