import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">
              Kancelaria Notarialna <span className="text-gold">Marta Zabielska</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Kancelaria notarialna w Warszawie na Powiślu. Sporządzamy akty notarialne,
              umowy notarialne, testamenty i obsługujemy transakcje nieruchomościami.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                ul. Stefana Jaracza 10/3, Warszawa
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:228691981" className="hover:text-gold transition-colors">22 869 19 81</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:m.zabielska@notariusze.waw.pl" className="hover:text-gold transition-colors">
                  m.zabielska@notariusze.waw.pl
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Akty notarialne</li>
              <li>Umowy notarialne nieruchomości</li>
              <li>Testamenty</li>
              <li>Obsługa spółek</li>
              <li>Prawo spadkowe i rodzinne</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/30 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Kancelaria Notarialna Marta Zabielska. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
