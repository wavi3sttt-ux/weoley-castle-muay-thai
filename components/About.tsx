import Reveal from "./Reveal";
import FighterCard from "./FighterCard";
import ImageWithFallback from "./ImageWithFallback";
import { fighters } from "@/lib/fighters";
import { stats } from "@/lib/stats";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            About
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(2.2rem,6vw,3.6rem)] mb-12">The Coach</h2>
        </Reveal>

        <div className="mb-16">
          <Reveal>
            <div className="w-full md:w-[40%] md:max-w-[400px] md:float-left md:mr-10 md:mb-5">
              <div className="group relative w-full h-[500px] md:h-auto md:aspect-[4/5] overflow-hidden border border-green transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(45,122,62,0.3)]">
                <ImageWithFallback
                  src="/winnie.jpeg"
                  alt="Zak Garbett, Head Coach"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  fallbackLabel="ZAK GARBETT"
                  fallbackClassName="w-full h-full text-base"
                />
              </div>
              <p className="text-grey text-sm text-center mt-3">
                Zak Garbett, Head Coach
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xl leading-[1.8] mb-7 text-offwhite">
              Zak Garbett began training Muay Thai at nine years old,
              introduced to the sport by his mother at a local gym in
              Weoley Castle. Twenty-one years on, he has built one of the
              most successful Muay Thai gyms in the country.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-[1.8] mb-7 text-[#DCD8CE]">
              Born and raised in Weoley Castle, Zak trained and competed
              for over two decades under the guidance of Dean James, whom
              he credits as the defining influence on his career. In 2017,
              at the age of 24, he left his position at Severn Trent to
              open Weoley Castle Muay Thai above a local public house.
              Nine years later, the gym stands as one of the most
              respected names in British combat sports.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-[1.8] mb-7 text-[#DCD8CE]">
              Zak is the striking coach behind some of the most respected
              names in professional combat sports. His athletes include
              Fabian Edwards, a top PFL contender and former champion, and
              Amarie Derick, who competes for LFL, one of the leading
              professional MMA promotions in the Netherlands. Alongside
              them sits a roster of elite MMA fighters and some of the
              most decorated Muay Thai competitors in the United Kingdom,
              winning consistently at the highest level: WBC titles, ISKA
              titles, national championships, and a long record of open
              tournament victories.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-[1.8] mb-7 text-[#DCD8CE]">
              His junior programme is the clearest measure of the gym&apos;s
              standard. Fighters developed at Weoley Castle now represent
              Team GB internationally, competing at world level and
              returning with wins against the strongest opposition in
              their weight classes. Young athletes who began their careers
              on these mats now compete for their country.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-[1.8] text-[#DCD8CE]">
              For all the titles, Zak remains most proud of the fighters
              winning their first bouts.
            </p>
          </Reveal>

          <div className="clear-both" />
        </div>

        <div className="mb-20">
          <Reveal>
            <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Professional Roster
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {fighters.map((fighter, i) => (
              <Reveal key={fighter.name} delayMs={i * 100}>
                <FighterCard fighter={fighter} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Track Record
          </span>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 mb-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.headline} delayMs={i * 100}>
              <div className="p-8 px-5 lg:p-10 text-center border-t border-l border-green/50">
                <h3 className="text-green-bright text-2xl mb-2.5">
                  {stat.headline}
                </h3>
                <p className="text-offwhite text-sm leading-snug">
                  {stat.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex items-center justify-center gap-5 mx-auto mb-20 max-w-[800px] text-center px-3">
            <div className="w-0.5 self-stretch bg-green shrink-0" />
            <blockquote className="italic text-green-bright text-[clamp(1.3rem,3.5vw,2rem)] tracking-wide font-display">
              &ldquo;It changed my life. Now I get to give that to every kid
              who walks through the door.&rdquo;
            </blockquote>
            <div className="w-0.5 self-stretch bg-green shrink-0" />
          </div>
        </Reveal>

        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <h3 className="text-4xl text-offwhite mb-8 text-center">
              The Mission
            </h3>
          </Reveal>
          <Reveal>
            <p className="leading-[1.8] mb-7 text-[#DCD8CE]">
              Weoley Castle Muay Thai was founded to serve its community. The
              gym exists for the young people of Birmingham who need
              direction, purpose, and support. The championships followed.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-green-bright text-[clamp(1.8rem,5vw,2.6rem)] text-center tracking-wide my-12">
              Knives down. Gloves up.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-[1.8] mb-7 text-[#DCD8CE]">
              In a city facing a serious knife crime problem, Weoley Castle
              Muay Thai offers something different. Every session develops
              discipline, respect, confidence, and the habit of showing up.
              Some members go on to become champions. Others go on to become
              better versions of themselves. Both outcomes matter equally.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-[1.8] text-[#DCD8CE]">
              Strong fighters. Strong people. Respectful, capable adults.
              That is what Weoley Castle stands for.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
