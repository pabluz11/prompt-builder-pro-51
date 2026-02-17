import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-notary.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kancelaria Notarialna Marta Zabielska – wnętrze kancelarii"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 lg:px-16 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 border border-gold/40 rounded-sm">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">
              Kancelaria Notarialna · Warszawa Powiśle
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-beige-light leading-tight mb-6 max-w-4xl mx-auto">
            Notariusz Marta Zabielska
          </h1>

          <p className="font-serif text-lg md:text-xl text-gold-light italic mb-4">
            Doświadczenie i zaufanie w czynnościach notarialnych
          </p>

          <p className="text-beige/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zapewniamy pełną obsługę notarialną z zachowaniem najwyższych standardów
            prawnych. Każda czynność wykonywana jest z dbałością o precyzję, poufność
            i bezpieczeństwo prawne naszych Klientów.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-sans font-semibold px-8 py-3.5 rounded-sm tracking-wide transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Umów wizytę
            </a>
            <a
              href="tel:228691981"
              className="inline-flex items-center justify-center gap-2 border border-beige/40 text-beige-light hover:bg-beige-light/10 font-sans font-semibold px-8 py-3.5 rounded-sm tracking-wide transition-colors"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń 22 869 19 81
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
