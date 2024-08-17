import "./index.css";
import React, { createContext, useContext, useState, useRef } from "react";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Portfolio from "./Components/Portfolio";

export const RefContext = createContext();

function App() {
  //Refs to scroll to said component
  const IntroRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const PortfolioRef = useRef(null);

  //REF FORWARD TO NAV COMP

  return (
    <RefContext.Provider
      value={{ IntroRef, SkillsRef, ProjectsRef, PortfolioRef }}
    >
      <div ref={IntroRef}>
        <Intro />
      </div>
      <div ref={SkillsRef}>
        <Skills />
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <div ref={PortfolioRef}>
        <Portfolio />
      </div>

      {/* Nav Rendered last due to the refs needing an actual value */}
      <Nav />
    </RefContext.Provider>
  );
}

export default App;
