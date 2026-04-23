import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: handleLoadingComplete });

    tl.fromTo(
      ".welcome-message",
      { scale: 0.8, opacity: 0, filter: "blur(10px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
    )
      .to(".welcome-message", {
        scale: 15,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.2,
        delay: 0.8,
        ease: "power2.inOut"
      })
      .to(".loading-screen", { opacity: 0, duration: 0.5, display: "none" });
  }, [onComplete]);

  return (
    <>
      {loading && (
        <div className="loading-screen z-[999] fixed inset-0 flex items-center justify-center bg-[#050505] text-white overflow-hidden pointer-events-none">
          <div className="welcome-message text-3xl md:text-6xl lg:text-8xl font-space font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] whitespace-nowrap">
            Welcome to Wasif Ansari's Portfolio
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
