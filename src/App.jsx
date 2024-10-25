import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import Projects from "./components/Projects/Projects";
import Scroll from "./components/Scroll/Scroll";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import LoadingScreen from "./components/Loading/Loading";
export default function App() {
  return (
    <>
      <div className=" bg-slate-950">
        <div className="  bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div>
            <LoadingScreen />
            <Scroll />
            <NavBar />
            <ScrollSection />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
