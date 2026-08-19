import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/447487639360";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span className="block text-green-bright text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            Find Us
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(2.2rem,6vw,3.6rem)] mb-12">
            Location &amp; Contact
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <Reveal>
            <div>
              <p className="mb-5 leading-relaxed">
                <span className="block text-green-bright text-xs tracking-[0.15em] uppercase mb-1.5">
                  Address
                </span>
                112 Shenley Lane, Selly Oak, Birmingham B29 4HA
              </p>
              <p className="mb-5 leading-relaxed">
                <span className="block text-green-bright text-xs tracking-[0.15em] uppercase mb-1.5">
                  WhatsApp
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent transition-colors duration-300 hover:text-green-bright hover:border-green-bright"
                >
                  +44 7487 639360
                </a>
              </p>
              <p className="mb-5 leading-relaxed">
                <span className="block text-green-bright text-xs tracking-[0.15em] uppercase mb-1.5">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/weoley_castle_muay_thai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent transition-colors duration-300 hover:text-green-bright hover:border-green-bright"
                >
                  @weoley_castle_muay_thai
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="block text-green-bright text-xs tracking-[0.15em] uppercase mb-1.5">
                  Facebook
                </span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent transition-colors duration-300 hover:text-green-bright hover:border-green-bright"
                >
                  Weoley Castle Muay Thai
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full aspect-[4/3] border border-green/30">
              <iframe
                src="https://maps.google.com/maps?q=112%20Shenley%20Lane%2C%20Selly%20Oak%2C%20Birmingham%20B29%204HA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Weoley Castle Muay Thai location"
                className="map-frame w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="text-center">
            <h2 className="cta-glow text-[clamp(2.4rem,7vw,4.5rem)] text-offwhite mb-9">
              Ready To Train?
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-block bg-green text-offwhite border border-green px-[60px] py-[26px] text-xl uppercase tracking-[0.1em] font-bold transition-all duration-300 hover:bg-transparent hover:text-green-bright hover:scale-[1.03]"
            >
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
