import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "O kancelarii", href: "#o-kancelarii" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 lg:px-16">
        <a href="#" aria-label="Kancelaria Notarialna Marta Zabielska – strona główna" className="font-serif text-lg md:text-xl text-primary-foreground tracking-wide">
          Kancelaria Notarialna <span className="text-gold">Marta Zabielska</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:228691981"
            className="flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            22 869 19 81
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-navy-light/30"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:228691981"
                className="flex items-center gap-2 text-gold mt-2"
              >
                <Phone className="w-4 h-4" />
                22 869 19 81
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
