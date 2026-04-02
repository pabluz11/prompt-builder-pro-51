import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Kontakt</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Skontaktuj się z kancelarią
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">Adres</h3>
                  <p className="text-muted-foreground text-sm">
                    ul. Stefana Jaracza 10/3<br />
                    00-378 Warszawa – Powiśle
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">Telefon</h3>
                  <a href="tel:228691981" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                    22 869 19 81
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">Email</h3>
                  <a href="mailto:m.zabielska@notariusze.waw.pl" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                    m.zabielska@notariusze.waw.pl
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">Godziny otwarcia</h3>
                  <div className="text-muted-foreground text-sm space-y-0.5">
                    <p>Poniedziałek – Wtorek: 9:30 – 17:00</p>
                    <p>Środa – Czwartek: 10:00 – 17:00</p>
                    <p>Piątek: 9:30 – 16:00</p>
                    <p className="text-xs italic mt-1 text-muted-foreground/70">*inne terminy po wcześniejszym uzgodnieniu</p>
                  </div>
                </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">Numery rachunków bankowych</h3>
                  <div className="text-muted-foreground text-sm space-y-2 mt-1">
                    <div>
                      <p className="font-medium text-foreground/80">Rachunek bieżący PLN:</p>
                      <p>96 1090 1056 0000 0001 6504 3332</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground/80">Rachunek depozytowy:</p>
                      <p>67 1090 1043 0000 0001 6504 3496</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-foreground">NIP</h3>
                  <p className="text-muted-foreground text-sm">758 199 97 69</p>
                </div>
              </div>
              </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-80 rounded-sm bg-muted border border-border overflow-hidden">
              <iframe
                title="Lokalizacja kancelarii notarialnej"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.0!2d21.027!3d52.235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE0JzA2LjAiTiAyMcKwMDEnMzcuMiJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
