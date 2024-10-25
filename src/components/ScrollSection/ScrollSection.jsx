import React, { useRef, useEffect } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (sectionRef.current.children.length - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: "power1.inOut",
          },
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <Home />
          </div>
          <div className="scroll-section">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
}
