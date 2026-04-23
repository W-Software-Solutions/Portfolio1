import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import Projects from "./components/Projects/Projects";
import Scroll from "./components/Scroll/Scroll";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import LoadingScreen from "./components/Loading/Loading";
import CanvasBackground from "./components/CanvasBackground";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-200">
      {/* Immersive 3D Experience Background */}
      <CanvasBackground />

      <LoadingScreen />
      <Scroll />
      <NavBar />

      <main className="relative z-10 w-full flex flex-col items-center top-0 overflow-x-hidden">
        <ScrollSection />
        <div className="container mx-auto px-4 md:px-8 mt-24">
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
