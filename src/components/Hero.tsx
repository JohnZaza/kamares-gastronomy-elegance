import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/venue-wedding.jpg';
import logoFull from '@/assets/logo-full.png';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kamares Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-earth/60 via-deep-earth/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in flex justify-center">
          <img 
            src={logoFull} 
            alt="Kamares Hall & Catering" 
            className="w-full max-w-2xl h-auto drop-shadow-2xl"
          />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 animate-fade-in font-light drop-shadow-lg">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 animate-fade-in font-light drop-shadow-md">
          {t('hero.description')}
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg shadow-elegant animate-fade-in"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;
