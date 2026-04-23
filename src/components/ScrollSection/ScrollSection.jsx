import React from "react";
import Home from "../Home/Home";
import About from "../About/About";

export default function ScrollSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full min-h-screen">
        <Home />
      </section>

      {/* Premium separator */}
      <div className="w-full flex justify-center py-12">
        <div className="w-1 px-px h-32 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-50"></div>
      </div>

      <section className="w-full min-h-screen">
        <About />
      </section>
    </div>
  );
}
