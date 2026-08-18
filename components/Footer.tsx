import ImageWithFallback from "./ImageWithFallback";

const WHATSAPP_URL = "https://wa.me/447487639360";

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-10 text-center">
      <ImageWithFallback
        src="/logo.png"
        alt="Weoley Castle Muay Thai"
        width={140}
        height={36}
        className="h-9 w-auto mx-auto mb-5 opacity-80"
        fallbackLabel="WCMT"
        fallbackClassName="h-9 w-24 mx-auto mb-5 text-xs opacity-80"
      />
      <p className="text-grey text-sm mb-6">
        &copy; 2026 Weoley Castle Muay Thai. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey text-sm uppercase tracking-wide transition-colors duration-300 hover:text-green-bright"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/weoley_castle_muay_thai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey text-sm uppercase tracking-wide transition-colors duration-300 hover:text-green-bright"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey text-sm uppercase tracking-wide transition-colors duration-300 hover:text-green-bright"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
