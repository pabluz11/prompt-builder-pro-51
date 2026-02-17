import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Kiedy wymagany jest akt notarialny?",
    excerpt: "Poznaj sytuacje, w których prawo wymaga formy aktu notarialnego – od nieruchomości po umowy spółek.",
  },
  {
    title: "Jak przygotować się do wizyty u notariusza?",
    excerpt: "Praktyczny przewodnik: jakie dokumenty zabrać, czego się spodziewać i jak przebiega wizyta.",
  },
  {
    title: "Umowa sprzedaży mieszkania krok po kroku",
    excerpt: "Kompletny poradnik dotyczący procesu sprzedaży nieruchomości w formie aktu notarialnego.",
  },
  {
    title: "Testament u notariusza – co warto wiedzieć",
    excerpt: "Rodzaje testamentów, koszty sporządzenia i dlaczego warto wybrać formę notarialną.",
  },
  {
    title: "Ile kosztuje notariusz w Warszawie?",
    excerpt: "Omówienie taksy notarialnej, opłat sądowych i podatków związanych z czynnościami notarialnymi.",
  },
];

const ArticlesSection = () => {
  return (
    <section id="artykuly" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Wiedza</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Artykuły i poradniki
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-gold text-sm font-sans font-medium">
                Czytaj więcej <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
