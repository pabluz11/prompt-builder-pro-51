import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

interface Section { heading: string; content: string; }
interface FaqItem { question: string; answer: string; }
interface Props {
  title: string; metaDescription: string; h1: string;
  intro: string; sections: Section[]; faq: FaqItem[];
}

const ServicePageLayout = ({ title, metaDescription, h1, intro, sections, faq }: Props) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);
  }, [title, metaDescription]);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">
              Kancelaria Notarialna Warszawa Powiśle
            </span>
            <h1 className="font-serif text-3xl md:text-4xl mt-3 mb-4">{h1}</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm leading-relaxed mb-6">{intro}</p>
            <a href="tel:228691981" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" /> Zadzwoń: 22 869 19 81
            </a>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-3xl">
            {sections.map((s, i) => (
              <div key={i} className="mb-10 last:mb-0">
                <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">{s.heading}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">Najczęstsze pytania</h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i} className="border border-border rounded-sm p-6">
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-narrow">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Potrzebujesz notariusza w Warszawie?</h2>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Kancelaria Notarialna Marta Zabielska · ul. Stefana Jaracza 10/3, Warszawa Powiśle
            </p>
            <a href="tel:228691981" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-lg">
              <Phone className="w-5 h-5" /> 22 869 19 81
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicePageLayout;
