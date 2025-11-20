import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 animate-fade-in">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in">
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
