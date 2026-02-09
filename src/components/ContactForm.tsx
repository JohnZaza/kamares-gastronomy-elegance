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
import { MapPin, Phone, Smartphone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    location: '',
    menuType: '',
    message: '',
    gdpr: false,
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }).max(100),
    email: z.string().trim().email({ message: "Invalid email" }).max(255),
    phone: z.string().trim().min(1, { message: "Phone is required" }).max(20),
    eventDate: z.string().min(1, { message: "Date is required" }),
    eventType: z.string().min(1, { message: "Event type is required" }),
    guests: z.string().trim().min(1, { message: "Number of guests is required" }),
    location: z.string().trim().min(1, { message: "Location is required" }).max(200),
    menuType: z.string().min(1, { message: "Menu type is required" }),
    message: z.string().trim().max(1000),
    gdpr: z.boolean().refine(val => val === true, {
      message: t('contact.gdpr.error'),
    }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);

      const response = await fetch('https://formspree.io/f/mbddlnwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
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
          eventDate: '',
          eventType: '',
          guests: '',
          location: '',
          menuType: '',
          message: '',
          gdpr: false,
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t('contact.gdpr.error'),
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Σφάλμα",
          description: "Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    'contact.eventType.restaurant',
    'contact.eventType.wedding',
    'contact.eventType.baptism',
    'contact.eventType.corporate',
    'contact.eventType.catering',
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

                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '100ms' }}>
                      <div className="bg-accent/10 p-2.5 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground tracking-tight">{t('contact.info.address')}</p>
                        <a
                          href="https://www.google.com/maps/place/%CE%9A%CE%B1%CE%BC%CE%AC%CF%81%CE%B5%CF%82+Hall+-+%CE%95%CF%83%CF%84%CE%B9%CE%B1%CF%84%CF%8C%CF%81%CE%B9%CE%BF+-+Catering/@37.7190296,22.2503561,17z/data=!4m15!1m8!3m7!1s0x13600defa14064a9:0xfec654f569d0d006!2zzprOsc68zqzPgc61z4IgSGFsbCAtIM6Vz4PPhM65zrHPhM-Mz4HOuc6_IC0gQ2F0ZXJpbmc!8m2!3d37.718998!4d22.2504687!10e5!16s%2Fg%2F11fln2299m!3m5!1s0x13600defa14064a9:0xfec654f569d0d006!8m2!3d37.718998!4d22.2504687!16s%2Fg%2F11fln2299m?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground/70 hover:text-accent transition-colors block leading-relaxed"
                        >
                          Βλαχέρνα Αρκαδίας, Ελλάδα
                        </a>
                      </div>
                    </div>

                    {/* Fixed Phone */}
                    <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '200ms' }}>
                      <div className="bg-accent/10 p-2.5 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground tracking-tight">{t('contact.info.phone')}</p>
                        <a href="tel:2796051386" className="text-sm text-foreground/70 hover:text-accent transition-colors block">
                          27960 51386
                        </a>
                      </div>
                    </div>

                    {/* Mobile Phones */}
                    <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '300ms' }}>
                      <div className="bg-accent/10 p-2.5 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                        <Smartphone className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground tracking-tight">{t('contact.info.mobile')}</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:6972260829" className="text-sm text-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent/40 rounded-full" />
                            6972 260829
                          </a>
                          <a href="tel:6977771383" className="text-sm text-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent/40 rounded-full" />
                            6977 771383
                          </a>
                        </div>
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
                        <Label htmlFor="eventDate">{t('contact.eventDate')}</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          required
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
                        />
                      </div>
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

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="gdpr"
                        checked={formData.gdpr}
                        onCheckedChange={(checked) => setFormData({ ...formData, gdpr: checked as boolean })}
                        className="mt-1"
                      />
                      <Label
                        htmlFor="gdpr"
                        className="text-sm font-normal leading-relaxed text-foreground/80 cursor-pointer"
                      >
                        {t('contact.gdpr')}
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Αποστολή...</span>
                        </>
                      ) : (
                        t('contact.submit')
                      )}
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
