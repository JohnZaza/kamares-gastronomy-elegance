import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
// import heroImage from '@/assets/venue-wedding.jpg';
import logoFull from '@/assets/logo-full.png';
import heroImage from '@/assets/testchat.png';

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
        <div className="mb-12 animate-fade-in flex justify-center relative group">
          {/* Subtle "whitening" / glow effect for visibility */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <img
            src={logoFull}
            alt="Kamares Hall & Catering"
            className="w-full max-w-3xl h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
          />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 animate-fade-in font-light drop-shadow-lg">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 animate-fade-in font-light drop-shadow-md">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button
            size="lg"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg shadow-elegant w-full sm:w-auto"
          >
            {t('hero.cta.restaurant')}
          </Button>
          <Button
            size="lg"
            onClick={() => document.getElementById('catering')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg shadow-elegant w-full sm:w-auto"
          >
            {t('hero.cta.catering')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;
