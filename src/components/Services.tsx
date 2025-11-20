import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, UtensilsCrossed, Truck } from 'lucide-react';
import venue3 from '@/assets/venue-3.jpg';
import service from '@/assets/service.jpg';
import venueSign from '@/assets/venue-sign.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calendar,
      title: t('services.events.title'),
      description: t('services.events.description'),
      image: venue3,
    },
    {
      icon: UtensilsCrossed,
      title: t('services.restaurant.title'),
      description: t('services.restaurant.description'),
      image: service,
    },
    {
      icon: Truck,
      title: t('services.catering.title'),
      description: t('services.catering.description'),
      image: venueSign,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16 animate-fade-in">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-earth/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
