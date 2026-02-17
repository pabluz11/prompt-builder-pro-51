import { motion } from "framer-motion";
import { MessageSquare, FolderOpen, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Kontakt",
    desc: "Skontaktuj się z nami telefonicznie lub mailowo. Ustalimy termin wizyty i omówimy zakres potrzebnych czynności.",
  },
  {
    icon: FolderOpen,
    step: "02",
    title: "Przygotowanie dokumentów",
    desc: "Przygotujemy listę wymaganych dokumentów i pomożemy w ich skompletowaniu przed wizytą w kancelarii.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Sporządzenie aktu",
    desc: "W umówionym terminie sporządzamy akt notarialny z zachowaniem pełnej staranności i zgodności z prawem.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="jak-dzialamy" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Proces</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Jak wygląda wizyta u notariusza?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 relative z-10">
                <s.icon className="w-8 h-8" />
              </div>
              <div className="text-gold font-sans text-sm tracking-widest mb-2">{s.step}</div>
              <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
