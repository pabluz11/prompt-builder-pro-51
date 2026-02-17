import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Dziękujemy za wiadomość. Skontaktujemy się wkrótce.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
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
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 rounded-sm bg-muted border border-border flex items-center justify-center overflow-hidden">
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

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-foreground mb-1.5">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-sans text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans text-foreground mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-sans text-foreground mb-1.5">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-sans font-semibold px-8 py-3.5 rounded-sm tracking-wide transition-colors w-full"
              >
                <Send className="w-4 h-4" />
                Wyślij wiadomość
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
