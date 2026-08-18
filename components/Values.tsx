import Image from "next/image";
import Reveal from "./Reveal";

const values = [
  { title: "Discipline", line: "Showing up and doing the work, every time." },
  { title: "Respect", line: "For coaches, training partners, and yourself." },
  {
    title: "Strength",
    line: "Built round after round, session after session.",
  },
  {
    title: "Honour",
    line: "Carrying yourself with integrity, in and out of the gym.",
  },
];

export default function Values() {
  return (
    <section className="relative px-6 py-20 md:py-[120px] overflow-hidden">
      <Image
        src="/dylan.jpeg"
        alt=""
        fill
        className="object-cover object-[center_20%] z-0"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(10,10,10,0.8),rgba(10,10,10,0.85))]" />
      <div className="absolute inset-0 z-[1] bg-green/5" />

      <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4">
        {values.map((value, i) => (
          <Reveal key={value.title} delayMs={i * 100}>
            <div
              className={`text-center p-7 px-5 border-t md:border-t-0 md:border-l border-green/40 first:border-t-0 first:md:border-l-0`}
            >
              <h3 className="text-3xl text-green-bright mb-2.5">
                {value.title}
              </h3>
              <p className="text-offwhite/80 text-sm">{value.line}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
