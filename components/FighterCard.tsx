import ImageWithFallback from "./ImageWithFallback";
import type { Fighter } from "@/lib/fighters";

export default function FighterCard({ fighter }: { fighter: Fighter }) {
  return (
    <div className="group bg-card border border-transparent transition-colors duration-300 hover:border-green flex flex-col overflow-hidden">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1A1A1A]">
        <ImageWithFallback
          src={fighter.image}
          alt={fighter.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackLabel={`${fighter.name.toUpperCase()}\nPHOTO COMING SOON`}
          fallbackClassName="w-full h-full text-base whitespace-pre-line"
        />
      </div>
      <div className="p-6">
        <h3 className="text-3xl mb-1.5">{fighter.name}</h3>
        <p className="text-green-bright text-sm uppercase tracking-wide font-semibold">
          {fighter.role}
        </p>
      </div>
    </div>
  );
}
