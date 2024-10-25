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
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    )
      .to(".welcome-message", {
        scale: 200,
        opacity: 0,
        duration: 1.5,
        delay: 1,
      })
      .to(".loading-screen", { opacity: 0, duration: 0.5, display: "none" });
  }, [onComplete]);

  return (
    <>
      {loading && (
        <div className="loading-screen z-50 fixed inset-0 flex items-center justify-center bg-gray-900 text-white">
          <div className="welcome-message text-xl md:text-7xl font-bold ">
            Welcome to Wasif Ansari's Portfolio
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
