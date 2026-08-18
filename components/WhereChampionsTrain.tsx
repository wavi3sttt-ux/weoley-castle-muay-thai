"use client";

import { useEffect, useRef, useState } from "react";

const LINES = ["WHERE CHAMPIONS", "TRAIN"];

const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")";

export default function WhereChampionsTrain() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            videoRef.current?.play().catch(() => {});
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  let letterIndex = 0;

  return (
    <section
      id="where-champions-train"
      ref={sectionRef}
      className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden px-6 md:px-12 py-20 md:py-[120px]"
    >
      <video
        ref={videoRef}
        src="/fabian-training.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/ring-pic.jpeg"
        className="absolute inset-0 w-full h-full object-cover object-[50%_15%] z-0"
        style={{ filter: "blur(2px) brightness(0.6) saturate(0.8)" }}
      />

      <div className="absolute inset-0 z-[1] bg-[rgba(10,10,10,0.75)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(45,122,62,0.1),rgba(10,10,10,0.4))]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          opacity: 0.05,
          backgroundImage: GRAIN_BG,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 text-center max-w-[90vw] mx-auto">
        <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-4">
          In The Gym
        </span>
        <h2
          className="text-[clamp(2rem,5vw,5rem)] text-offwhite mb-6 max-w-[90vw] mx-auto whitespace-normal break-words [overflow-wrap:break-word]"
          style={{ textShadow: "0 0 30px rgba(0,0,0,0.8)" }}
        >
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.split("").map((ch) => {
                const i = letterIndex;
                letterIndex += 1;
                return ch === " " ? (
                  <span key={i}> </span>
                ) : (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-500 ease-out ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${i * 0.035}s` }}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          ))}
        </h2>
        <p className="text-offwhite/90 max-w-[600px] mx-auto mb-6 leading-relaxed">
          Home to PFL contenders, professional MMA fighters, and Team GB
          internationals. Trained in a room above a Birmingham pub. Built to
          the highest standard in the country.
        </p>
        <p className="text-green-bright text-sm uppercase tracking-wide">
          Featuring Fabian Edwards
        </p>
      </div>
    </section>
  );
}
