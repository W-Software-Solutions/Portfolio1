import React from "react";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center md:justify-between border-b-[1px] border-[#00ADB5] text-white font-Merriweather overflow-hidden">
      <div className="mx-8">
        <p className="font-Anton text-2xl">Wasif Ansari</p>
      </div>

      <div className="flex flex-row  items-center gap-4">
        <div className="cursor-pointer text-[15px]  md:text-xl relative flex  gap-3 md:gap-12 mx-10 my-8">
          <a href="#Home">Home</a>
          <a href="#Aboutme">About me</a>
          <a href="#Projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}
