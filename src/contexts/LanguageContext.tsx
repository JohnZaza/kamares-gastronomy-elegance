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
    'about.title': 'Καλώς Ήρθατε στις Καμάρες',
    'about.content':
      'Στην καρδιά της γοητευτικής Αρκαδίας, κάτω από το επιβλητικό βλέμμα του καταπράσινου Μαινάλου και στη σκιά του ιστορικού κάστρου του Μπεζενίκου στη Βλαχέρνα, δημιουργήθηκαν οι Καμάρες. Ένας ξεχωριστός χώρος εστίασης και διασκέδασης που φιλοξενεί κοινωνικές εκδηλώσεις και συνεστιάσεις από όλη την Πελοπόννησο. Χαρακτηριστικά μας είναι η άρτια οργάνωση, η ποιότητα των υπηρεσιών και η ζεστή, οικογενειακή φιλοξενία που προσφέρουν οι ιδιοκτήτες.',

    // Services
    'services.title': 'Οι Υπηρεσίες Μας',

    'services.events.title': 'Κοινωνικές Εκδηλώσεις',
    'services.events.description':
      'Οι Καμάρες διαθέτουν μια μεγάλη αίθουσα 400 ατόμων, διακοσμημένη με ανάλαφρους παραδοσιακούς τόνους και έπιπλα, η οποία μπορεί να διαμορφωθεί ανάλογα με το ύφος της εκδήλωσης. Την άνοιξη και το καλοκαίρι, η ευρύχωρη αυλή με θέα το Μαίναλο προσφέρεται για υπαίθριες εκδηλώσεις και τοπικές εορτές. Η πλούσια κουζίνα μας ανταποκρίνεται σε κάθε γευστική προτίμηση και προσαρμόζεται στις ανάγκες της εκδήλωσής σας.',

    'services.restaurant.title': 'Εστιατόριο',
    'services.restaurant.description':
      'Ακολουθώντας την τοπική γαστρονομία και την παραδοσιακή μαγειρική τέχνη, οι Καμάρες υποδέχονται ταξιδιώτες και επισκέπτες προσφέροντας αυθεντικές συνταγές της Αρκαδίας, ψητά, παραδοσιακά πιάτα και γεύσεις που τιμούν την ελληνική κουζίνα.',

    'services.catering.title': 'Catering',
    'services.catering.description':
      'Με εξειδικευμένο προσωπικό και πλήρη εξοπλισμό, οι Καμάρες μπορούν να καλύψουν κάθε είδους εκδήλωση σε οποιονδήποτε χώρο. Παρέχουμε ολοκληρωμένες υπηρεσίες catering και οργάνωσης εκδηλώσεων σε όλη την Αρκαδία — και όχι μόνο.',

    // Catering Additional
    'services.more': 'Περισσότερα',

    // Contact Form
    'contact.title': 'Επικοινωνήστε Μαζί Μας',
    'contact.subtitle': 'Είμαστε εδώ για να κάνουμε την εκδήλωσή σας μοναδική',
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

  /////////////////////////////////////////////////////////////////////////////

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
    'about.title': 'Welcome to Kamares',
    'about.content':
      'In the heart of charming Arcadia, beneath the imposing presence of verdant Mount Mainalo and in the shadow of the historic Bezeniko Castle of Vlacherna, Kamares was created — a unique venue for dining and entertainment. We host social events and gatherings from all over the Peloponnese, offering impeccable organization, high-quality services, and the warm family hospitality that characterizes our establishment.',

    // Services
    'services.title': 'Our Services',

    'services.events.title': 'Social Events',
    'services.events.description':
      'Kamares features a large 400-person hall, decorated in light traditional tones and furnished appropriately for each type of event. During spring and summer, our spacious courtyard with a view of Mount Mainalo provides the perfect setting for outdoor celebrations. Our rich kitchen can accommodate every culinary preference and is fully customizable based on the needs of your event.',

    'services.restaurant.title': 'Restaurant',
    'services.restaurant.description':
      'Inspired by local gastronomy and traditional cooking techniques, Kamares welcomes travelers and visitors with authentic Arcadian recipes, grilled dishes, and flavors that honor the Greek culinary tradition.',

    'services.catering.title': 'Catering',
    'services.catering.description':
      'With specialized staff and full equipment, Kamares can support any type of event at any location. We offer complete catering and event-planning services throughout Arcadia — and beyond.',

    'services.more': 'Learn More',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to make your event truly special',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.eventType': 'Event Type',
    'contact.eventType.placeholder': 'Select event type',
    'contact.eventType.wedding': 'Wedding',
    'contact.eventType.baptism': 'Baptism',
    'contact.eventType.birthday': 'Birthday',
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
    'contact.success': 'Your message has been sent successfully!',

    // Contact Info
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.mobile': 'Mobile',

    // Footer
    'footer.rights': 'All rights reserved',
  },
};

// const translations = {
//   el: {
//     // Navigation
//     'nav.home': 'Αρχική',
//     'nav.about': 'Σχετικά',
//     'nav.services': 'Υπηρεσίες',
//     'nav.gallery': 'Γκαλερί',
//     'nav.contact': 'Επικοινωνία',

//     // Hero
//     'hero.title': 'ΚΑΜΑΡΕΣ',
//     'hero.subtitle': 'Ένας μοναδικός χώρος εστίασης και διασκέδασης',
//     'hero.description': 'που φιλοξενεί κοινωνικές εκδηλώσεις και συνεστιάσεις',
//     'hero.cta': 'Επικοινωνήστε Μαζί Μας',

//     // About
//     'about.title': 'Καλώς Ήρθατε',
//     'about.content': 'Στην καρδιά της γοητευτικής Αρκαδίας, κάτω από το επιβλητικό βλέμμα του καταπράσινου Μαινάλου και στην σκιά του ιστορικού κάστρου του Μπεζενίκου της Βλαχέρνας, δημιουργήθηκαν οι Καμάρες, ένας μοναδικός χώρος εστίασης και διασκέδασης που φιλοξενεί κοινωνικές εκδηλώσεις και συνεστιάσεις από όλη την Πελοπόννησο με κύρια χαρακτηριστικά την άρτια οργάνωση, την ποιότητα των υπηρεσιών και την οικογενειακή φιλοξενία που προσφέρουν οι ιδιοκτήτες.',

//     // Services
//     'services.title': 'Οι Υπηρεσίες Μας',
//     'services.events.title': 'Κοινωνικές Εκδηλώσεις',
//     'services.events.description': 'Διαθέτουμε μια μεγάλη αίθουσα 400 ατόμων, διακοσμημένη σε ανάλαφρους παραδοσιακούς τόνους που μπορεί να διαμορφωθεί κατάλληλα ανάλογα με την εκδήλωση.',
//     'services.restaurant.title': 'Εστιατόριο',
//     'services.restaurant.description': 'Ακολουθώντας την τοπική γαστρονομία και παραδοσιακή μαγειρική τέχνη, προσφέρουμε παραδοσιακά πιάτα, ψητά και τοπικές συνταγές της Αρκαδίας.',
//     'services.catering.title': 'Catering',
//     'services.catering.description': 'Με εξειδικευμένο προσωπικό και εξοπλισμό μπορούμε να καλύψουμε κάθε εκδήλωση σε οποιονδήποτε χώρο με υπηρεσίες catering σε όλη την Αρκαδία.',

//     // Contact Form
//     'contact.title': 'Επικοινωνήστε Μαζί Μας',
//     'contact.subtitle': 'Είμαστε εδώ για να κάνουμε την εκδήλωσή σας ξεχωριστή',
//     'contact.name': 'Ονοματεπώνυμο',
//     'contact.email': 'Email',
//     'contact.phone': 'Τηλέφωνο',
//     'contact.eventType': 'Τύπος Εκδήλωσης',
//     'contact.eventType.placeholder': 'Επιλέξτε τύπο εκδήλωσης',
//     'contact.eventType.wedding': 'Γάμος',
//     'contact.eventType.baptism': 'Βάπτιση',
//     'contact.eventType.birthday': 'Γενέθλια',
//     'contact.eventType.ceremony': 'Τελετή',
//     'contact.eventType.fingerFood': 'Finger Food (Εγκαίνια)',
//     'contact.eventType.corporate': 'Εταιρική Εκδήλωση',
//     'contact.eventType.other': 'Άλλο',
//     'contact.guests': 'Αριθμός Ατόμων',
//     'contact.location': 'Τοποθεσία Εκδήλωσης',
//     'contact.menuType': 'Τύπος Μενού',
//     'contact.menuType.placeholder': 'Επιλέξτε τύπο μενού',
//     'contact.menuType.full': 'Πλήρες Μενού',
//     'contact.menuType.fingerFood': 'Finger Food',
//     'contact.menuType.buffet': 'Μπουφές',
//     'contact.menuType.custom': 'Προσαρμοσμένο',
//     'contact.message': 'Επιπλέον Λεπτομέρειες',
//     'contact.submit': 'Αποστολή',
//     'contact.success': 'Το μήνυμά σας στάλθηκε επιτυχώς!',

//     // Contact Info
//     'contact.info.title': 'Πληροφορίες Επικοινωνίας',
//     'contact.info.address': 'Διεύθυνση',
//     'contact.info.phone': 'Τηλέφωνο',
//     'contact.info.mobile': 'Κινητό',

//     // Footer
//     'footer.rights': 'Όλα τα δικαιώματα κατοχυρωμένα',
//   },
//   en: {
//     // Navigation
//     'nav.home': 'Home',
//     'nav.about': 'About',
//     'nav.services': 'Services',
//     'nav.gallery': 'Gallery',
//     'nav.contact': 'Contact',

//     // Hero
//     'hero.title': 'KAMARES',
//     'hero.subtitle': 'A unique dining and entertainment venue',
//     'hero.description': 'hosting social events and gatherings',
//     'hero.cta': 'Contact Us',

//     // About
//     'about.title': 'Welcome',
//     'about.content': 'In the heart of charming Arcadia, under the imposing gaze of the verdant Mount Mainalo and in the shadow of the historic Bezeniko castle of Vlacherna, Kamares was created - a unique dining and entertainment venue that hosts social events and gatherings from all over the Peloponnese, characterized by excellent organization, quality services, and the family hospitality offered by the owners.',

//     // Services
//     'services.title': 'Our Services',
//     'services.events.title': 'Social Events',
//     'services.events.description': 'We feature a large hall for 400 people, decorated in light traditional tones that can be appropriately configured according to the event being hosted.',
//     'services.restaurant.title': 'Restaurant',
//     'services.restaurant.description': 'Following local gastronomy and traditional cooking, we offer traditional dishes, grilled meats, and local recipes from Arcadia.',
//     'services.catering.title': 'Catering',
//     'services.catering.description': 'With specialized staff and equipment, we can cover any event at any location with catering services throughout Arcadia.',

//     // Contact Form
//     'contact.title': 'Contact Us',
//     'contact.subtitle': 'We are here to make your event special',
//     'contact.name': 'Full Name',
//     'contact.email': 'Email',
//     'contact.phone': 'Phone',
//     'contact.eventType': 'Event Type',
//     'contact.eventType.placeholder': 'Select event type',
//     'contact.eventType.wedding': 'Wedding',
//     'contact.eventType.baptism': 'Baptism',
//     'contact.eventType.birthday': 'Birthday Party',
//     'contact.eventType.ceremony': 'Ceremony',
//     'contact.eventType.fingerFood': 'Finger Food (Grand Opening)',
//     'contact.eventType.corporate': 'Corporate Event',
//     'contact.eventType.other': 'Other',
//     'contact.guests': 'Number of Guests',
//     'contact.location': 'Event Location',
//     'contact.menuType': 'Menu Type',
//     'contact.menuType.placeholder': 'Select menu type',
//     'contact.menuType.full': 'Full Menu',
//     'contact.menuType.fingerFood': 'Finger Food',
//     'contact.menuType.buffet': 'Buffet',
//     'contact.menuType.custom': 'Custom',
//     'contact.message': 'Additional Details',
//     'contact.submit': 'Submit',
//     'contact.success': 'Your message was sent successfully!',

//     // Contact Info
//     'contact.info.title': 'Contact Information',
//     'contact.info.address': 'Address',
//     'contact.info.phone': 'Phone',
//     'contact.info.mobile': 'Mobile',

//     // Footer
//     'footer.rights': 'All rights reserved',
//   },
// };

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
