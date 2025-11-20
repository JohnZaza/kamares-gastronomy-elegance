import { useLanguage } from '@/contexts/LanguageContext';
import logoFull from '@/assets/logo-full.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <img 
            src={logoFull} 
            alt="Kamares Hall & Catering" 
            className="h-16 w-auto brightness-0 invert opacity-90"
          />
        </div>
        <p className="text-sm text-primary-foreground/80">
          © {currentYear} ΚΑΜΑΡΕΣ. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
