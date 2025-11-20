import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
