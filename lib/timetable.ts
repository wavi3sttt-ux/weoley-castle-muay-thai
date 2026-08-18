export type ClassSlot = {
  time: string;
  name: string;
};

export type Day = {
  day: string;
  slots: ClassSlot[];
};

export const timetable: Day[] = [
  {
    day: "Monday",
    slots: [
      { time: "6.00 - 7.00", name: "Muay Thai Junior" },
      { time: "7.00 - 8.30", name: "Muay Thai Adult" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "6.00 - 7.00", name: "Pad Blast" },
      { time: "7.00 - 8.00", name: "Muay Thai / Drills / Technique" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "10.00 - 11.15", name: "Muay Thai Adult" },
      { time: "6.00 - 7.00", name: "Muay Thai Junior" },
      { time: "7.00 - 8.30", name: "Muay Thai Adult" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "6.00 - 7.00", name: "Open Mat" },
      { time: "7.00 - 8.00", name: "Muay Thai / Drills / Technique / Pads" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "5.30 - 6.30", name: "Muay Thai Junior" },
      { time: "6.30 - 7.30", name: "Sparring (Adult)" },
      { time: "7.30 - 8.00", name: "Conditioning & Open Mat" },
    ],
  },
  {
    day: "Saturday",
    slots: [{ time: "10.00 - 2.00", name: "Open Mat" }],
  },
];
