import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import martaPhoto from "@/assets/marta-zabielska.jpg";

const NotarySection = () => {
  return (
    <section id="notariusz" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Notariusz</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Notariusz Marta Zabielska
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={martaPhoto}
                alt="Notariusz Marta Zabielska – Kancelaria Notarialna Warszawa Powiśle"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-primary-foreground/90 text-sm font-sans">
                  Notariusz od 2012 roku
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Notariusz</span>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-2 mb-6">
              Marta Zabielska
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Jestem notariuszem od 2012 roku. Przez ponad 13 lat pracy towarzyszę
              klientom w momentach, które naprawdę mają znaczenie – przy zakupie
              pierwszego mieszkania, zabezpieczaniu majątku rodzinnego, zakładaniu
              spółki czy porządkowaniu spraw spadkowych.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Wiem, że wizyta u notariusza rzadko bywa rutynowa. Za każdym dokumentem
              stoi konkretna historia i konkretny człowiek. Dlatego zależy mi, żeby
              każdy klient opuszczał moją kancelarię z pełnym zrozumieniem tego,
              co podpisał – i z poczuciem, że jego interesy są dobrze zabezpieczone.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Kancelarię prowadzę na Powiślu, przy ul. Stefana Jaracza 10/3 w Warszawie.
              Zapraszam do kontaktu.
            </p>
            <a
              href="tel:228691981"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń: 22 869 19 81
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotarySection;
