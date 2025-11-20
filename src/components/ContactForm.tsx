import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    location: '',
    menuType: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }).max(100),
    email: z.string().trim().email({ message: "Invalid email" }).max(255),
    phone: z.string().trim().min(1, { message: "Phone is required" }).max(20),
    eventType: z.string().min(1, { message: "Event type is required" }),
    guests: z.string().trim().min(1, { message: "Number of guests is required" }),
    location: z.string().trim().min(1, { message: "Location is required" }).max(200),
    menuType: z.string().min(1, { message: "Menu type is required" }),
    message: z.string().trim().max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      // Success - show toast
      toast({
        title: t('contact.success'),
        description: t('contact.subtitle'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guests: '',
        location: '',
        menuType: '',
        message: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Σφάλμα",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const eventTypes = [
    'contact.eventType.wedding',
    'contact.eventType.baptism',
    'contact.eventType.birthday',
    'contact.eventType.ceremony',
    'contact.eventType.fingerFood',
    'contact.eventType.corporate',
    'contact.eventType.other',
  ];

  const menuTypes = [
    'contact.menuType.full',
    'contact.menuType.fingerFood',
    'contact.menuType.buffet',
    'contact.menuType.custom',
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-foreground/70 animate-fade-in">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                    {t('contact.info.title')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{t('contact.info.address')}</p>
                        <p className="text-sm text-foreground/70">Βλαχέρνα Αρκαδίας, Ελλάδα</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{t('contact.info.phone')}</p>
                        <a href="tel:2796051386" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                          27960 51386
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Smartphone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{t('contact.info.mobile')}</p>
                        <a href="tel:6972260829" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                          6972 260829
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.name')}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          maxLength={255}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          maxLength={20}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventType">{t('contact.eventType')}</Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                        >
                          <SelectTrigger id="eventType">
                            <SelectValue placeholder={t('contact.eventType.placeholder')} />
                          </SelectTrigger>
                          <SelectContent className="bg-popover z-50">
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {t(type)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">{t('contact.guests')}</Label>
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="menuType">{t('contact.menuType')}</Label>
                        <Select
                          value={formData.menuType}
                          onValueChange={(value) => setFormData({ ...formData, menuType: value })}
                        >
                          <SelectTrigger id="menuType">
                            <SelectValue placeholder={t('contact.menuType.placeholder')} />
                          </SelectTrigger>
                          <SelectContent className="bg-popover z-50">
                            {menuTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {t(type)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{t('contact.location')}</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                        maxLength={200}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.message')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        maxLength={1000}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold"
                    >
                      {t('contact.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
