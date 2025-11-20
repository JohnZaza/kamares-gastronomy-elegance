import React, { createContext, useContext, useState } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά',
    'nav.services': 'Υπηρεσίες',
    'nav.gallery': 'Γκαλερί',
    'nav.contact': 'Επικοινωνία',
    
    // Hero
    'hero.title': 'ΚΑΜΑΡΕΣ',
    'hero.subtitle': 'Ένας μοναδικός χώρος εστίασης και διασκέδασης',
    'hero.description': 'που φιλοξενεί κοινωνικές εκδηλώσεις και συνεστιάσεις',
    'hero.cta': 'Επικοινωνήστε Μαζί Μας',
    
    // About
    'about.title': 'Καλώς Ήρθατε',
    'about.content': 'Στην καρδιά της γοητευτικής Αρκαδίας, κάτω από το επιβλητικό βλέμμα του καταπράσινου Μαινάλου και στην σκιά του ιστορικού κάστρου του Μπεζενίκου της Βλαχέρνας, δημιουργήθηκαν οι Καμάρες, ένας μοναδικός χώρος εστίασης και διασκέδασης που φιλοξενεί κοινωνικές εκδηλώσεις και συνεστιάσεις από όλη την Πελοπόννησο με κύρια χαρακτηριστικά την άρτια οργάνωση, την ποιότητα των υπηρεσιών και την οικογενειακή φιλοξενία που προσφέρουν οι ιδιοκτήτες.',
    
    // Services
    'services.title': 'Οι Υπηρεσίες Μας',
    'services.events.title': 'Κοινωνικές Εκδηλώσεις',
    'services.events.description': 'Διαθέτουμε μια μεγάλη αίθουσα 400 ατόμων, διακοσμημένη σε ανάλαφρους παραδοσιακούς τόνους που μπορεί να διαμορφωθεί κατάλληλα ανάλογα με την εκδήλωση.',
    'services.restaurant.title': 'Εστιατόριο',
    'services.restaurant.description': 'Ακολουθώντας την τοπική γαστρονομία και παραδοσιακή μαγειρική τέχνη, προσφέρουμε παραδοσιακά πιάτα, ψητά και τοπικές συνταγές της Αρκαδίας.',
    'services.catering.title': 'Catering',
    'services.catering.description': 'Με εξειδικευμένο προσωπικό και εξοπλισμό μπορούμε να καλύψουμε κάθε εκδήλωση σε οποιονδήποτε χώρο με υπηρεσίες catering σε όλη την Αρκαδία.',
    
    // Contact Form
    'contact.title': 'Επικοινωνήστε Μαζί Μας',
    'contact.subtitle': 'Είμαστε εδώ για να κάνουμε την εκδήλωσή σας ξεχωριστή',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.eventType': 'Τύπος Εκδήλωσης',
    'contact.eventType.placeholder': 'Επιλέξτε τύπο εκδήλωσης',
    'contact.eventType.wedding': 'Γάμος',
    'contact.eventType.baptism': 'Βάπτιση',
    'contact.eventType.birthday': 'Γενέθλια',
    'contact.eventType.ceremony': 'Τελετή',
    'contact.eventType.fingerFood': 'Finger Food (Εγκαίνια)',
    'contact.eventType.corporate': 'Εταιρική Εκδήλωση',
    'contact.eventType.other': 'Άλλο',
    'contact.guests': 'Αριθμός Ατόμων',
    'contact.location': 'Τοποθεσία Εκδήλωσης',
    'contact.menuType': 'Τύπος Μενού',
    'contact.menuType.placeholder': 'Επιλέξτε τύπο μενού',
    'contact.menuType.full': 'Πλήρες Μενού',
    'contact.menuType.fingerFood': 'Finger Food',
    'contact.menuType.buffet': 'Μπουφές',
    'contact.menuType.custom': 'Προσαρμοσμένο',
    'contact.message': 'Επιπλέον Λεπτομέρειες',
    'contact.submit': 'Αποστολή',
    'contact.success': 'Το μήνυμά σας στάλθηκε επιτυχώς!',
    
    // Contact Info
    'contact.info.title': 'Πληροφορίες Επικοινωνίας',
    'contact.info.address': 'Διεύθυνση',
    'contact.info.phone': 'Τηλέφωνο',
    'contact.info.mobile': 'Κινητό',
    
    // Footer
    'footer.rights': 'Όλα τα δικαιώματα κατοχυρωμένα',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'KAMARES',
    'hero.subtitle': 'A unique dining and entertainment venue',
    'hero.description': 'hosting social events and gatherings',
    'hero.cta': 'Contact Us',
    
    // About
    'about.title': 'Welcome',
    'about.content': 'In the heart of charming Arcadia, under the imposing gaze of the verdant Mount Mainalo and in the shadow of the historic Bezeniko castle of Vlacherna, Kamares was created - a unique dining and entertainment venue that hosts social events and gatherings from all over the Peloponnese, characterized by excellent organization, quality services, and the family hospitality offered by the owners.',
    
    // Services
    'services.title': 'Our Services',
    'services.events.title': 'Social Events',
    'services.events.description': 'We feature a large hall for 400 people, decorated in light traditional tones that can be appropriately configured according to the event being hosted.',
    'services.restaurant.title': 'Restaurant',
    'services.restaurant.description': 'Following local gastronomy and traditional cooking, we offer traditional dishes, grilled meats, and local recipes from Arcadia.',
    'services.catering.title': 'Catering',
    'services.catering.description': 'With specialized staff and equipment, we can cover any event at any location with catering services throughout Arcadia.',
    
    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to make your event special',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.eventType': 'Event Type',
    'contact.eventType.placeholder': 'Select event type',
    'contact.eventType.wedding': 'Wedding',
    'contact.eventType.baptism': 'Baptism',
    'contact.eventType.birthday': 'Birthday Party',
    'contact.eventType.ceremony': 'Ceremony',
    'contact.eventType.fingerFood': 'Finger Food (Grand Opening)',
    'contact.eventType.corporate': 'Corporate Event',
    'contact.eventType.other': 'Other',
    'contact.guests': 'Number of Guests',
    'contact.location': 'Event Location',
    'contact.menuType': 'Menu Type',
    'contact.menuType.placeholder': 'Select menu type',
    'contact.menuType.full': 'Full Menu',
    'contact.menuType.fingerFood': 'Finger Food',
    'contact.menuType.buffet': 'Buffet',
    'contact.menuType.custom': 'Custom',
    'contact.message': 'Additional Details',
    'contact.submit': 'Submit',
    'contact.success': 'Your message was sent successfully!',
    
    // Contact Info
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.mobile': 'Mobile',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
