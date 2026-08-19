"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

const WHATSAPP_URL = "https://wa.me/447487639360";
const HEADLINE = "KNIVES DOWN. GLOVES UP.";
const HEADLINE_START_DELAY = 2.5;

export default function Hero() {
  const [bgFailed, setBgFailed] = useState(false);
  const [glowSettled, setGlowSettled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGlowSettled(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden px-6 pt-32 pb-16"
    >
      {!bgFailed && (
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[60%_center] md:object-[70%_center] lg:object-center z-0"
          onError={(e) => {
            console.error("hero-bg.jpg failed to load", e);
            setBgFailed(true);
          }}
        />
      )}

      <div className="bg-drift absolute -inset-[20%] z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,122,62,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(45,122,62,0.18),transparent_50%)]" />
      <div className="absolute inset-0 z-[1] bg-[rgba(10,10,10,0.35)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.6)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] z-[1] bg-[linear-gradient(to_top,rgba(10,10,10,0.7),transparent)]" />

      <div className="cinematic-flash pointer-events-none absolute inset-0 z-[6] bg-offwhite" />

      <div className="relative z-[2] flex-1 flex flex-col justify-start pt-8 md:pt-12 items-center text-center w-full">
        <div className="relative mb-7">
          <div
            className={`absolute top-1/2 left-1/2 w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,122,62,0.45)_0%,transparent_70%)] z-0 ${
              glowSettled ? "logo-glow" : "glow-intro"
            }`}
          />
          <ImageWithFallback
            src="/logo.png"
            alt="Weoley Castle Muay Thai logo"
            width={420}
            height={420}
            priority
            className="logo-intro relative z-[1] max-w-[320px] md:max-w-[420px] w-full h-auto block"
            fallbackLabel="WEOLEY CASTLE MUAY THAI"
            fallbackClassName="relative z-[1] w-[320px] h-[320px] max-w-[70vw] text-lg"
            onError={(e) => {
              console.error("logo.png failed to load in hero", e);
            }}
          />
        </div>

        <h1
          className="w-full px-2 md:whitespace-nowrap text-[clamp(2rem,6vw,5.5rem)] mb-5"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9)" }}
        >
          {HEADLINE.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i}> </span>
            ) : (
              <span
                key={i}
                className="letter"
                style={{
                  animationDelay: `${HEADLINE_START_DELAY + i * 0.035}s`,
                }}
              >
                {ch}
              </span>
            ),
          )}
        </h1>

        <p
          className="text-grey text-base md:text-lg max-w-[520px] mb-10 tracking-wide"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9)" }}
        >
          Birmingham&apos;s home of Muay Thai. Discipline. Respect. Strength. Honour.
        </p>

        <div className="flex flex-col items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow bg-green text-offwhite border border-green px-10 py-[18px] text-sm uppercase tracking-[0.1em] font-bold transition-all duration-300 hover:bg-transparent hover:text-green-bright hover:scale-[1.02]"
          >
            Message us on WhatsApp
          </a>
          <a
            href="#timetable"
            className="text-offwhite border-b border-green pb-0.5 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-green-bright"
          >
            View timetable
          </a>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] text-xs tracking-[0.3em] text-grey">
        SCROLL
      </div>
    </section>
  );
}
