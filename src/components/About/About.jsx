import React from "react";
import Svg from "./Svg";
import Svg2 from "./Svg2";
export default function About() {
  return (
    <>
      <div
        id="Aboutme"
        className="  flex font-bold justify-center  md:justify-evenly mt-40 overflow-hidden  md:items-start "
      >
        <div className="flex  relative">
          <svg
            width="64"
            height="49"
            viewBox="0 0 64 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.54386 43.2728C6.43841 42.1357 8.15154 40.0316 5.7504 39.6595C5.20725 39.5754 4.6999 39.2562 4.16693 39.4977C2.52529 40.2418 1 41.8799 1 43.8275C1 46.9383 4.41177 47.6119 6.89019 47.5717C11.0717 47.5037 12.3439 43.4296 13.8207 40.1295C15.3126 36.7959 16.9697 33.5163 18.5176 30.2066C20.269 26.4616 23.1415 23.4782 24.9585 19.7675C25.7377 18.1763 26.7551 16.7751 27.7583 15.3222C29.3145 13.0685 30.4241 10.7949 31.5372 8.29607C32.4504 6.2459 33.463 4.37372 34.5817 2.43323C35.0341 1.64852 34.8641 0.44639 35.7292 1.28532C36.3859 1.92229 37.4308 2.34071 38.3147 2.50257C42.1792 3.21021 45.7329 3.95921 49.7126 3.64278C53.7376 3.32275 57.7604 2.74606 61.7225 1.97869C63.0694 1.71782 62.4953 2.03188 61.8602 2.84926C60.7829 4.23565 59.8631 5.70489 58.8309 7.10963C57.4849 8.94154 57.0112 11.1478 56.2148 13.2421C55.3393 15.5443 54.2974 17.7434 53.4609 20.0834C51.8444 24.6057 49.4864 28.7299 46.5686 32.5255C44.8777 34.7252 42.789 38.567 39.6228 38.4115C34.723 38.1708 38.0316 28.5256 40.3725 26.6396C41.6326 25.6243 43.0108 26.7173 43.1646 28.0802C43.3759 29.9529 42.7335 32.5192 40.9156 33.4346C38.9976 34.4004 37.5272 34.2845 39.0032 31.7936C39.8962 30.2865 40.4273 31.9452 40.7932 31.2081"
              stroke="#00ADB5"
              strokeOpacity="0.5"
              strokeWidth="1.66333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex  flex-col mt-24 p-10  ">
            <div className="flex">
              <h1 className=" text-6xl  md:text-8xl font-bold  text-white">
                About
              </h1>
              <h2 className=" ml-4 text-6xl md:text-8xl font-bold  text-[#00ADB5]">
                me
              </h2>
              <Svg2 />
            </div>
            <div className="w-[300px] md:w-[500px] my-10 text-white">
              <p>
                I'm Wasif Ansari, a passionate Full stack developer skilled in
                Python, React, Node.js, and MongoDB. I specialize in creating dynamic,
                responsive web applications with a focus on performance and user
                experience. My goal is to build innovative, scalable solutions
                that solve real-world problems and deliver exceptional value to
                users.
              </p>
            </div>
            <div className=" ml-36">
              <svg
                width="147"
                height="151"
                viewBox="0 0 147 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M144.983 129.949C135.542 140.244 125.486 154.672 110.276 146.398C103.049 142.467 99.8201 129.504 102.056 122.295C103.912 116.315 104.073 108.237 111.252 105.966C116.892 104.182 123.012 106.103 125.787 111.636C133.667 127.352 111.088 131.593 101.466 127.161C88.3332 121.112 80.6304 82.906 95.2557 74.9488C107.795 68.1263 111.132 84.0356 101.898 90.7708C88.9096 100.245 79.5108 98.3807 70.8134 82.8051C64.0224 70.6437 71.0156 53.7512 80.654 46.3004C82.6557 44.753 91.6532 32.7134 92.7203 34.3949C103.25 50.9866 74.2106 64.6983 61.3647 58.6593C46.6051 51.7205 31.7502 44.5314 24.4464 29.7666C20.5188 21.8268 16.0278 -4.27598 15.9654 4.58192C15.8872 15.6671 14.7695 30.6357 7.90121 40.0406C5.85748 42.8392 -0.452875 51.9335 5.18009 42.9876C10.9814 33.7745 16.306 25.7945 20.0825 16.168C20.9229 14.0258 18.8009 10.1882 18.2705 8.0719C17.8214 6.27943 23.8073 9.88589 24.5621 10.1528C31.0791 12.4572 37.8087 11.3548 44.3068 9.53466C50.1067 7.91009 57.2488 3.96021 60.6442 6.79476"
                  stroke="#00ADB5"
                  strokeOpacity="0.2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Svg />
        </div>
      </div>
      <hr className="border-b-[1px] border-[#393E46] my-28" />
    </>
  );
}
