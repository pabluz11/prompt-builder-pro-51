import { motion } from "framer-motion";
import { Download } from "lucide-react";

const materials = [
  { title: "Lista dokumentów do sprzedaży mieszkania", desc: "Kompletna lista dokumentów wymaganych przy sporządzaniu aktu sprzedaży nieruchomości." },
  { title: "Lista dokumentów do testamentu", desc: "Dokumenty potrzebne do sporządzenia testamentu w formie aktu notarialnego." },
  { title: "Dane do aktu notarialnego", desc: "Formularz danych osobowych wymaganych do sporządzenia aktu notarialnego." },
  { title: "Informacja o kosztach notarialnych", desc: "Orientacyjne zestawienie opłat notarialnych, sądowych i podatkowych." },
];

const MaterialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Do pobrania</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Materiały dla Klientów
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {materials.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-sm p-6 hover:border-gold/30 transition-colors group cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <Download className="w-4 h-4 text-primary group-hover:text-gold transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-base text-foreground mb-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
