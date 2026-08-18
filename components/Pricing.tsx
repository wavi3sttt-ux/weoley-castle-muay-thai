import Reveal from "./Reveal";
import { pricingPlans } from "@/lib/pricing";

const WHATSAPP_URL = "https://wa.me/447487639360";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-20 md:py-[120px]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            Membership
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(2.2rem,6vw,3.6rem)] mb-12">Pricing</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delayMs={i * 100}>
              <div
                className={`relative h-full flex flex-col bg-card p-10 px-8 border transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(45,122,62,0.4)] ${
                  plan.popular ? "border-green" : "border-green/30"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-px -left-px bg-green text-offwhite text-[0.65rem] tracking-[0.12em] px-3.5 py-1.5 font-bold">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl mb-4 mt-2 font-display">
                  {plan.name}
                </h3>
                <div className="font-display text-green-bright text-4xl mb-2">
                  {plan.price}
                  <span className="text-base text-grey font-body ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-grey text-sm mb-8 flex-grow">
                  {plan.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow text-center bg-green text-offwhite border border-green px-5 py-2.5 text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-transparent hover:text-green-bright hover:scale-[1.02]"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
