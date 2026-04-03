import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";

const LocalSeoSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Lokalizacja kancelarii</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-8">
            Notariusz Warszawa Powiśle – Kancelaria przy ul. Stefana Jaracza
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div itemScope itemType="https://schema.org/PostalAddress">
                <h3 className="font-serif text-lg mb-1">Adres</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  <span itemProp="streetAddress">ul. Stefana Jaracza 10/3</span><br />
                  <span itemProp="postalCode">00-378</span>{" "}
                  <span itemProp="addressLocality">Warszawa</span><br />
                  <span>dzielnica Powiśle</span>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Godziny</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Poniedziałek – Wtorek: 9:30 – 17:00<br />
                  Środa – Czwartek: 10:00 – 17:00<br />
                  Piątek: 9:30 – 16:00<br />
                  <span className="italic text-xs">*inne terminy po wcześniejszym uzgodnieniu</span>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Dojazd</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Dogodny dojazd z dzielnic:<br />
                  Śródmieście, Solec, Mokotów,<br />
                  Powiśle i okolic
                </p>
              </div>
            </div>
          </div>

          <p className="text-primary-foreground/70 leading-relaxed text-sm">
            Nasza kancelaria notarialna mieści się w prestiżowej części Warszawy – na Powiślu,
            przy ul. Stefana Jaracza. Sporządzamy akty notarialne i umowy notarialne dla klientów
            z całej Warszawy, w szczególności z dzielnic Śródmieście, Powiśle, Solec oraz Mokotów.
            Dogodna lokalizacja zapewnia łatwy dojazd komunikacją miejską oraz samochodem.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalSeoSection;
