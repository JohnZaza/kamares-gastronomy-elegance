import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoFull from '@/assets/logo-full.png';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { key: 'nav.home', id: 'hero' },
    { key: 'nav.about', id: 'about' },
    { key: 'nav.services', id: 'services' },
    { key: 'nav.gallery', id: 'gallery' },
    { key: 'nav.contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/98 backdrop-blur-md shadow-soft' : 'bg-gradient-to-b from-deep-earth/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img src={logoFull} alt="ΚΑΜΑΡΕΣ Logo" className="h-10 w-auto brightness-0 invert" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground hover:text-accent transition-colors font-semibold text-sm tracking-wide drop-shadow-md"
              >
                {t(link.key)}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 bg-background/98 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-accent transition-colors font-semibold"
              >
                {t(link.key)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
