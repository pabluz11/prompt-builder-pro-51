import { motion } from "framer-motion";
import { Home, FileText, Handshake, Stamp, Building2, Lock } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Nieruchomości",
    desc: "Umowy sprzedaży, darowizny, zamiany nieruchomości. Wpisy do ksiąg wieczystych, ustanawianie hipotek i służebności.",
  },
  {
    icon: FileText,
    title: "Spadki i testamenty",
    desc: "Sporządzanie testamentów, akty poświadczenia dziedziczenia, umowy o dział spadku i zrzeczenie się dziedziczenia.",
  },
  {
    icon: Handshake,
    title: "Umowy i pełnomocnictwa",
    desc: "Pełnomocnictwa ogólne i szczególne, umowy majątkowe małżeńskie, umowy dożywocia i inne czynności cywilnoprawne.",
  },
  {
    icon: Stamp,
    title: "Poświadczenia notarialne",
    desc: "Poświadczenia podpisów, zgodności kopii z oryginałem, daty okazania dokumentu oraz pozostanie przy życiu.",
  },
  {
    icon: Building2,
    title: "Obsługa firm",
    desc: "Akty założycielskie spółek, zmiany umów spółek, protokoły zgromadzeń wspólników i walnych zgromadzeń.",
  },
  {
    icon: Lock,
    title: "Depozyty notarialne",
    desc: "Bezpieczne przechowywanie środków pieniężnych, dokumentów i papierów wartościowych w depozycie notarialnym.",
  },
];

const ServicesSection = () => {
  return (
    <section id="uslugi" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Usługi</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Zakres czynności notarialnych
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 mb-5 group-hover:bg-gold/10 transition-colors">
                <s.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
