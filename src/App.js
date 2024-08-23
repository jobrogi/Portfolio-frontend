import "./index.css";
import React, { createContext, useEffect, useRef, useState } from "react";

// Components
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Portfolio from "./Components/Portfolio";

// Contexts
export const RefContext = createContext();
export const RWDContext = createContext();

function App() {
  //For RWDContext
  const [rwdState, setRwdState] = useState("");

  useEffect(() => {
    const handleResize = () => {
      //Checks for extra large state. Sets the RWD State to DesktopXL
      if (
        window.outerWidth > 1200 ||
        (window.outerWidth <= 1200 && window.outerWidth >= 1024)
      ) {
        setRwdState("Desktop");
      } else if (window.outerWidth < 1024 && window.outerWidth >= 770) {
        setRwdState("Laptop");
      } else if (window.outerWidth < 770 && window.outerWidth >= 480) {
        setRwdState("Tablet");
      } else if (window.outerWidth < 480) {
        setRwdState("Phone");
      }
    };

    // Listener for window size
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(rwdState);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.outerWidth]);

  //Refs to scroll to said component
  const IntroRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const PortfolioRef = useRef(null);

  return (
    <RefContext.Provider
      value={{ IntroRef, SkillsRef, ProjectsRef, PortfolioRef }}
    >
      {/* Debuger */}
      {/* <div className="w-full h-10 bg-red-500">{rwdState}</div> */}
      <RWDContext.Provider value={{ rwdState }}>
        <div className="max-w-screen min-h-screen bg-red-500 relative overflow-hidden">
          <div className="w-full h-full" ref={IntroRef}>
            <Intro />
          </div>

          <div className="w-full h-full" ref={SkillsRef}>
            <Skills />
          </div>
          {/* 
          <div className="w-full h-full" ref={ProjectsRef}>
            <Projects />
          </div>

          <div className="w-full h-full" ref={PortfolioRef}>
            <Portfolio />
          </div> */}
          {/*  */}
        </div>

        {/* Nav Rendered last due to the refs needing an actual value */}

        <Nav />
      </RWDContext.Provider>
    </RefContext.Provider>
  );
}

export default App;
