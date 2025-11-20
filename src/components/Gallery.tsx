import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import heroImage from '@/assets/hero-kamares.jpg';
import receptionHall from '@/assets/reception-hall.jpg';
import traditionalFood from '@/assets/traditional-food.jpg';
import outdoorCourtyard from '@/assets/outdoor-courtyard.jpg';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: heroImage, alt: 'Kamares Venue' },
    { src: receptionHall, alt: 'Reception Hall' },
    { src: traditionalFood, alt: 'Traditional Food' },
    { src: outdoorCourtyard, alt: 'Outdoor Courtyard' },
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
