import React from "react";
import Svg from "./Svg";

export default function Home() {
  return (
    <>
      <div className="flex font-bold justify-center items-start md:justify-evenly mt-40 overflow-hidden md:items-start">
        <div className="flex relative">
          <div className="hidden md:block absolute top-40 -left-24">
            <svg
              width="79"
              height="235"
              viewBox="0 0 79 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75.7998 3.19806C50.1843 3.91647 54.9044 2.94458 34.1801 22.898C29.4468 27.4551 22.2901 32.9978 20.6682 41.0942C18.2748 53.042 32.9256 89.1888 42.5174 75.8854C48.7163 67.2878 47.5223 52.5204 38.0924 48.6148C22.6279 42.2098 10.1944 61.1468 5.38686 77.5103C0.0940138 95.5256 4.53909 115.234 17.0132 127.263C22.7118 132.758 31.9039 130.27 26.8618 118.599C16.4911 94.596 4.49663 123.714 6.12058 139.661C9.04561 168.385 33.7168 206.119 56.799 200.135C64.0159 198.264 61.657 194.09 58.6284 191.002C55.5553 187.869 47.8279 176.427 49.9025 180.772C53.5294 188.367 58.1307 191.423 63.2708 195.883C69.9006 201.635 55.68 214.205 51.5604 218.692C49.3978 221.047 46.2555 226.322 45.6706 230.164C44.5155 237.748 52.8538 217.931 54.346 210.482"
                stroke="#00ADB5"
                strokeOpacity="0.2"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col mt-24 p-10">
            <div className="">
              <h1 className="text-6xl md:text-8xl font-bold text-white">
                Full Stack Software
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold text-[#00ADB5]">
                Developer
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-14">
              <a
                href="#Contact"
                className="bg-[#00ADB5] rounded-3xl text-white font-Merriweather text-shadow-lg px-10 py-2 hover:bg-[#0C868C] duration-200 ease-in-out text-center"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/1_RVT7FCTjZrVFTEd7s7WDc131w0slfpu/view?usp=sharing"
                target="_blank"
                download="Wasif_Resume.pdf"
                className="bg-[#393E46] rounded-3xl text-white font-Merriweather text-shadow-lg px-10 py-2 hover:bg-[#2C3034] duration-200 ease-in-out text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Svg />
        </div>
      </div>
    </>
  );
}