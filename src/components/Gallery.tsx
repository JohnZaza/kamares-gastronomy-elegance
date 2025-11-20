import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import team from '@/assets/team.jpg';
import venue3 from '@/assets/venue-3.jpg';
import service from '@/assets/service.jpg';
import venueWedding from '@/assets/venue-wedding.jpg';
import venueSign from '@/assets/venue-sign.jpg';
import team2 from '@/assets/team-2.jpg';
import venue4 from '@/assets/venue-4.jpg';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: venue1, alt: 'Outdoor Wedding Setup' },
    { src: venue2, alt: 'Elegant Table Setting' },
    { src: venue3, alt: 'Outdoor Event Space' },
    { src: venueWedding, alt: 'Wedding Celebration' },
    { src: venueSign, alt: 'Kamares Venue' },
    { src: venue4, alt: 'Evening Reception' },
    { src: team, alt: 'Professional Team' },
    { src: team2, alt: 'Our Staff' },
    { src: service, alt: 'Service Excellence' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16 animate-fade-in">
          {t('nav.gallery')}
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
