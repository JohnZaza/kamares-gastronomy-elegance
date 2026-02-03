import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Utensils, Calendar, ArrowRight } from 'lucide-react';
import traditionalFood from '@/assets/traditional-food.jpg';
import venueWedding from '@/assets/venue-wedding.jpg';

const Services = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      {/* Restaurant Section */}
      <section id="restaurant" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide">
                <Utensils className="h-4 w-4" />
                {t('nav.restaurant')}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                {t('restaurant.title')}
              </h2>
              <p className="text-xl text-accent font-medium italic">
                {t('restaurant.subtitle')}
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t('restaurant.content')}
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                >
                  {t('restaurant.menu.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative animate-fade-in-right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={traditionalFood}
                  alt="Restaurant Gastronomy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-earth/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      </div>

      {/* Catering/Events Section */}
      <section id="catering" className="py-24 bg-card/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide">
                <Calendar className="h-4 w-4" />
                {t('nav.catering')}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                {t('catering.title')}
              </h2>
              <p className="text-xl text-accent font-medium italic">
                {t('catering.subtitle')}
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t('catering.content')}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-background/50 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary mb-1">400+</h4>
                  <p className="text-xs text-foreground/60 uppercase tracking-widest">{t('contact.guests')}</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary mb-1">Premium</h4>
                  <p className="text-xs text-foreground/60 uppercase tracking-widest">Quality Service</p>
                </div>
              </div>
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg group"
                >
                  {t('catering.book.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative animate-fade-in-left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={venueWedding}
                  alt="Catering & Events Venue"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-earth/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
