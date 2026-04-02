import { motion } from "framer-motion";
import { Home, Building, Building2, Gavel, Briefcase, Shield, ScrollText, Heart } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Obrót nieruchomościami",
    desc: "Umowy notarialne sprzedaży, darowizny i zamiany nieruchomości. Akty notarialne z wpisem do ksiąg wieczystych, ustanawianie hipotek i służebności.",
  },
  {
    icon: Building,
    title: "Inwestycje deweloperskie",
    desc: "Obsługa procesów deweloperskich, przygotowanie i negocjowanie umów inwestycyjnych, wsparcie na każdym etapie realizacji inwestycji.",
  },
  {
    icon: Building2,
    title: "Obsługa spółek",
    desc: "Tworzenie i przekształcanie spółek, zmiany umów spółek, protokoły zgromadzeń wspólników i walnych zgromadzeń.",
  },
  {
    icon: Gavel,
    title: "Poddania się egzekucji",
    desc: "Sporządzanie aktów notarialnych o poddaniu się egzekucji, zabezpieczanie wierzytelności i interesów stron transakcji.",
  },
  {
    icon: Briefcase,
    title: "Transakcje M&A",
    desc: "Przygotowanie i obsługa transakcji kupna i sprzedaży przedsiębiorstw oraz udziałów, wsparcie prawne w procesach fuzji i przejęć.",
  },
  {
    icon: Shield,
    title: "Zabezpieczenia przy finansowaniach",
    desc: "Ustanawianie zabezpieczeń wierzytelności, w tym hipotek, zastawów i oświadczeń o poddaniu się egzekucji.",
  },
  {
    icon: ScrollText,
    title: "Prawo spadkowe",
    desc: "Sporządzanie testamentów w formie aktu notarialnego, akty poświadczenia dziedziczenia, umowy o dział spadku i zrzeczenie się dziedziczenia.",
  },
  {
    icon: Heart,
    title: "Prawo rodzinne",
    desc: "Umowy majątkowe małżeńskie, rozdzielność majątkowa, czynności związane z zarządem majątkiem rodzinnym.",
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
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Usługi notarialne</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-3">
            Akty notarialne i umowy – pełen zakres usług
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Nasza kancelaria notarialna sporządza akty notarialne, umowy notarialne
            oraz wszystkie czynności wymagające udziału notariusza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card border border-border rounded-sm p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 mb-5 group-hover:bg-gold/10 transition-colors">
                <s.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
