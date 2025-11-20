import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-2xl font-bold mb-2">ΚΑΜΑΡΕΣ</p>
        <p className="text-sm text-primary-foreground/80">
          © {currentYear} ΚΑΜΑΡΕΣ. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
