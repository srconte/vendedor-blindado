import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const NAV_LINKS = [
  { name: 'O Método', href: '#hero' },
  { name: 'Módulos', href: '#modules' },
  { name: 'Para Quem', href: '#target' },
  { name: 'Garantia', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-4 left-0 right-0 z-50 mx-auto
          w-[calc(100%-2rem)] md:w-[95%] max-w-6xl
          rounded-2xl transition-all duration-300
          ${(isScrolled || isMobileMenuOpen)
            ? 'bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-primary-900/20 py-2.5 px-4 md:px-6' 
            : 'bg-transparent py-4 px-4'
          }
        `}
      >
        <div className="flex items-center justify-between w-full relative h-12">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 cursor-pointer relative z-50 flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>

          {/* Center: Desktop Links (Absolute Centered) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-auto">
            <div className="flex items-center gap-1 bg-slate-950/50 p-1 rounded-full border border-white/5 backdrop-blur-sm shadow-inner">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white px-5 py-2 rounded-full hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center justify-end gap-4 relative z-50 h-full">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                className="!py-2.5 !px-6 !text-xs shadow-none border-none bg-primary-600 hover:bg-primary-500 font-bold whitespace-nowrap"
                onClick={() => {
                  const element = document.getElementById('pain');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                COMPRAR AGORA
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col justify-center items-center md:hidden"
          >
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-900/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-900/20 rounded-full blur-[80px]" />

            <div className="flex flex-col gap-8 items-center w-full px-8 relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-bold text-slate-300 hover:text-white active:scale-95 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full mt-8"
              >
                <Button 
                  fullWidth 
                  className="text-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Quero Vender Mais
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;