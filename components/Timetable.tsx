import Reveal from "./Reveal";
import { timetable } from "@/lib/timetable";

const DIAGONAL_PATTERN =
  "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(45,122,62,0.03) 40px, rgba(45,122,62,0.03) 41px)";

type FlatRow = {
  day: string;
  time: string;
  name: string;
  isFirstOfDay: boolean;
};

const rows: FlatRow[] = timetable.flatMap((day) =>
  day.slots.map((slot, i) => ({
    day: day.day,
    time: slot.time,
    name: slot.name,
    isFirstOfDay: i === 0,
  })),
);

export default function Timetable() {
  return (
    <section
      id="timetable"
      className="relative px-6 py-20 md:py-[120px] overflow-hidden bg-bg"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: DIAGONAL_PATTERN }}
      />
      <div
        className="corner-pulse absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(45,122,62,0.15) 0%, transparent 40%)",
        }}
      />
      <div
        className="corner-pulse absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 100%, rgba(45,122,62,0.12) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <Reveal>
          <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            Weekly Schedule
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(2.2rem,6vw,3.6rem)]">Timetable</h2>
        </Reveal>
        <Reveal>
          <div className="w-[60px] h-[2px] bg-green mx-auto mt-6 mb-12" />
        </Reveal>

        {rows.map((row, i) => (
          <Reveal key={row.day + row.time + row.name} delayMs={i * 100}>
            <div className="flex items-stretch gap-6 md:gap-8 py-6 px-5 md:py-6 md:px-8 lg:px-10 bg-[rgba(20,20,20,0.6)] border-t border-r border-b border-t-[rgba(45,122,62,0.15)] border-r-[rgba(45,122,62,0.15)] border-b-[rgba(45,122,62,0.15)] border-l-2 border-l-green mb-3 transition-all duration-300 hover:border-l-[6px] hover:bg-[rgba(30,30,30,0.7)] hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(45,122,62,0.1)]">
              <div className="w-[90px] md:w-[140px] flex-shrink-0 flex items-center">
                {row.isFirstOfDay && (
                  <h3 className="text-3xl md:text-5xl text-offwhite leading-none">
                    {row.day}
                  </h3>
                )}
              </div>

              <div className="w-px bg-[rgba(45,122,62,0.3)] self-stretch flex-shrink-0" />

              <div className="flex flex-wrap items-center gap-4 flex-1">
                <span className="inline-block bg-[rgba(45,122,62,0.15)] text-green-bright font-semibold px-3 py-1.5 text-sm whitespace-nowrap">
                  {row.time}
                </span>
                <span className="text-offwhite text-lg">{row.name}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
