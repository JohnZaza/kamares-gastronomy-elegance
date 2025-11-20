import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'el' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('el')}
        className="font-medium"
      >
        EL
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="font-medium"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
