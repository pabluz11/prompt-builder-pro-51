import { motion } from "framer-motion";
import { Scale, Shield, Eye, MapPin } from "lucide-react";

const features = [
  { icon: Scale, title: "Precyzja prawna", desc: "Każdy dokument sporządzany jest z najwyższą starannością i zgodnością z obowiązującym prawem." },
  { icon: Shield, title: "Poufność", desc: "Gwarantujemy pełną dyskrecję i ochronę danych osobowych naszych Klientów." },
  { icon: Eye, title: "Neutralność", desc: "Jako notariusz działam jako bezstronny gwarant zgodności czynności prawnych." },
  { icon: MapPin, title: "Dogodna lokalizacja", desc: "Kancelaria mieści się na Powiślu – w samym sercu Warszawy." },
];

const AboutSection = () => {
  return (
    <section id="o-kancelarii" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">O kancelarii</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-6">
            Kancelaria Notarialna Warszawa Powiśle – notariusz Marta Zabielska
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kancelaria Notarialna Marty Zabielskiej w Warszawie na Powiślu świadczy kompleksową
            obsługę notarialną – sporządzamy akty notarialne, umowy notarialne oraz
            wszelkie dokumenty wymagające formy aktu notarialnego. Obsługujemy klientów indywidualnych
            i biznesowych z całej Warszawy: Śródmieście, Powiśle, Solec, Mokotów i okolic.
            Wieloletnie doświadczenie, indywidualne podejście do każdej sprawy oraz dbałość o najwyższe standardy
            etyczne i prawne stanowią fundament naszej działalności.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary/10 mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
