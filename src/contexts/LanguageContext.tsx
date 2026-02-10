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
    'nav.restaurant': 'Εστιατόριο',
    'nav.menu': 'Μενού',
    'nav.catering': 'Catering',
    'nav.gallery': 'Γκαλερί',
    'nav.contact': 'Επικοινωνία',

    // Hero
    'hero.title': 'ΚΑΜΑΡΕΣ',
    'hero.subtitle': 'Εστιατόριο & Catering',
    'hero.description': 'Ανακαλύψτε τις αυθεντικές γεύσεις της Αρκαδίας και δημιουργήστε αξέχαστες αναμνήσεις.',
    'hero.cta.restaurant': 'Δείτε το Εστιατόριο',
    'hero.cta.catering': 'Οργανώστε μια Εκδήλωση',

    // Restaurant Section
    'restaurant.title': 'Το Εστιατόριο Μας',
    'restaurant.subtitle': 'Αυθεντική Αρκαδική Γαστρονομία',
    'restaurant.content': 'Στις Καμάρες, η παράδοση συναντά την ποιότητα. Ακολουθώντας την τοπική γαστρονομία και την παραδοσιακή μαγειρική τέχνη, σας προσφέρουμε αυθεντικές συνταγές της Αρκαδίας, ψητά στα κάρβουνα και πιάτα που τιμούν την ελληνική κουζίνα. Κάθε γεύμα είναι μια γιορτή των αισθήσεων.',
    'restaurant.menu.cta': 'Δείτε το Μενού',

    // Menu Section
    'menu.title': 'Το Μενού Μας',
    'menu.cheeses': 'Τυριά',
    'menu.appetizers': 'Ορεκτικά',
    'menu.grill': 'Της Ώρας',
    'menu.bread_water': 'Ψωμί & Νερό',
    'menu.salads': 'Σαλάτες',
    'menu.soft_drinks': 'Αναψυκτικά',
    'menu.beers': 'Μπύρες',
    'menu.wine': 'Κρασί Χύμα',
    'menu.spirits': 'Τσίπουρο & Ούζο',

    // Menu Items - Cheeses
    'menu.item.feta.name': 'Φέτα',
    'menu.item.graviera.name': 'Γραβιέρα',
    'menu.item.saganaki.name': 'Σαγανάκι',

    // Menu Items - Appetizers
    'menu.item.tzatziki.name': 'Τζατζίκι',
    'menu.item.tirokafteri.name': 'Τυροκαυτερή',
    'menu.item.fries.name': 'Πατάτες Τηγανιτές',
    'menu.item.cheesepies.name': 'Τυροπιτάκια με Μέλι',
    'menu.item.imam.name': 'Μελιτζάνες Ιμάμ',

    // Menu Items - Grill
    'menu.item.porkchops.name': 'Χοιρινές Μπριζόλες',
    'menu.item.sausage.name': 'Λουκάνικο Χωριάτικο',
    'menu.item.bifteki.name': 'Μπιφτέκι στη Σχάρα',
    'menu.item.biftekig_gst.name': 'Μπιφτέκι Γεμιστό',
    'menu.item.pansetes.name': 'Πανσέτες Χοιρινές Μερίδα',
    'menu.item.psaronefri.name': 'Ψαρονέφρι',
    'menu.item.chicken_fillet.name': 'Κοτόπουλο Φιλέτο',
    'menu.item.veal.name': 'Μοσχαρίσια Γάλακτος',
    'menu.item.lambchops.name': 'Παϊδάκια (Κιλό)',

    // Menu Items - Bread & Water
    'menu.item.bread.name': 'Ψωμί',
    'menu.item.water.name': 'Νερό 1.5 LT',

    // Menu Items - Salads
    'menu.item.cabbage.name': 'Λάχανο',
    'menu.item.lettuce.name': 'Μαρούλι',
    'menu.item.greek_salad.name': 'Χωριάτική',
    'menu.item.caesar.name': 'Καισάρα',
    'menu.item.veggie_feast.name': 'Πανδαισία Λαχανικών',

    // Menu Items - Soft Drinks
    'menu.item.soft_drinks.name': 'Αναψυκτικά',

    // Menu Items - Beers
    'menu.item.alfa.name': 'Άλφα',
    'menu.item.amstel.name': 'Amstel',
    'menu.item.mamos.name': 'Mamos',
    'menu.item.heineken.name': 'Heineken',
    'menu.item.kaizer.name': 'Kaizer',

    // Menu Items - Wine
    'menu.item.wine_rose_half.name': 'Μισό Κιλό Ροζέ',
    'menu.item.wine_rose_750.name': '750ml Ροζέ',
    'menu.item.wine_white_half.name': 'Μισό Κιλό Λευκό',
    'menu.item.wine_white_750.name': '750ml Λευκό',

    // Menu Items - Spirits
    'menu.item.tsipouro_200.name': 'Τσίπουρο 200ml',
    'menu.item.ouzo_200.name': 'Ούζο 200ml',

    // Catering Section
    'catering.title': 'Catering & Εκδηλώσεις',
    'catering.subtitle': 'Επαγγελματική Οργάνωση σε Κάθε Χώρο',
    'catering.content': 'Με εξειδικευμένο προσωπικό και πλήρη εξοπλισμό, οι Καμάρες μπορούν να καλύψουν κάθε είδους εκδήλωση. Από μεγάλες δεξιώσεις στην αίθουσα 400 ατόμων έως ιδιωτικά catering στον χώρο σας, εξασφαλίζουμε ότι η κάθε στιγμή θα είναι μοναδική.',
    'catering.book.cta': 'Ζητήστε Προσφορά',

    // About
    'about.title': 'Καλώς Ήρθατε στις Καμάρες',
    'about.content':
      'Στην καρδιά της γοητευτικής Αρκαδίας, κάτω από το επιβλητικό βλέμμα του καταπράσινου Μαινάλου στη Βλαχέρνα, δημιουργήθηκαν οι Καμάρες. Ένας ξεχωριστός χώρος που συνδυάζει την παραδοσιακή εστίαση με την άρτια οργάνωση κοινωνικών εκδηλώσεων. Χαρακτηριστικά μας είναι η ποιότητα των υλικών, η επαγγελματική συνέπεια και η ζεστή, οικογενειακή φιλοξενία.',

    // Services (Legacy keys kept for compatibility until updated)
    'services.title': 'Οι Υπηρεσίες Μας',
    'services.events.title': 'Κοινωνικές Εκδηλώσεις',
    'services.events.description': 'Γάμοι, βαπτίσεις και κοινωνικές εκδηλώσεις στην πολυτελή μας αίθουσα ή στον υπαίθριο χώρο μας.',
    'services.restaurant.title': 'Εστιατόριο',
    'services.restaurant.description': 'Παραδοσιακή κουζίνα με τοπικά προϊόντα και αυθεντικές γεύσεις της Αρκαδίας.',
    'services.catering.title': 'Catering',
    'services.catering.description': 'Ολοκληρωμένες υπηρεσίες catering για κάθε σας ανάγκη σε όλη την Πελοπόννησο.',

    // Contact Form
    'contact.title': 'Επικοινωνήστε Μαζί Μας',
    'contact.subtitle': 'Είμαστε εδώ για να συζητήσουμε τις ανάγκες σας',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.eventDate': 'Ημερομηνία',
    'contact.eventType': 'Είδος Ενδιαφέροντος',
    'contact.eventType.placeholder': 'Επιλέξτε μια κατηγορία',
    'contact.eventType.restaurant': 'Κράτηση Εστιατορίου',
    'contact.eventType.wedding': 'Γάμος',
    'contact.eventType.baptism': 'Βάπτιση',
    'contact.eventType.corporate': 'Εταιρική Εκδήλωση',
    'contact.eventType.catering': 'Εξωτερικό Catering',
    'contact.eventType.other': 'Άλλο',
    'contact.guests': 'Αριθμός Ατόμων',
    'contact.message': 'Λεπτομέρειες / Σχόλια',
    'contact.submit': 'Αποστολή',
    'contact.success': 'Το μήνυμά σας στάλθηκε επιτυχώς!',
    'contact.gdpr': 'Συμφωνώ με την επεξεργασία των προσωπικών μου δεδομένων.',

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
    'nav.restaurant': 'Restaurant',
    'nav.menu': 'Menu',
    'nav.catering': 'Catering',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'KAMARES',
    'hero.subtitle': 'Restaurant & Catering',
    'hero.description': 'Discover the authentic flavors of Arcadia and create unforgettable memories.',
    'hero.cta.restaurant': 'Explore Restaurant',
    'hero.cta.catering': 'Plan an Event',

    // Restaurant Section
    'restaurant.title': 'Our Restaurant',
    'restaurant.subtitle': 'Authentic Arcadian Gastronomy',
    'restaurant.content': 'At Kamares, tradition meets quality. Following local gastronomy and traditional culinary arts, we offer authentic recipes from Arcadia, grilled specialties, and dishes that honor Greek cuisine. Every meal is a celebration of the senses.',
    'restaurant.menu.cta': 'View Menu',

    // Menu Section
    'menu.title': 'Our Menu',
    'menu.cheeses': 'Cheeses',
    'menu.appetizers': 'Appetizers',
    'menu.grill': 'Grill Specialties',
    'menu.bread_water': 'Bread & Water',
    'menu.salads': 'Salads',
    'menu.soft_drinks': 'Soft Drinks',
    'menu.beers': 'Beers',
    'menu.wine': 'House Wine',
    'menu.spirits': 'Spirits',

    // Menu Items - Cheeses
    'menu.item.feta.name': 'Feta Cheese',
    'menu.item.graviera.name': 'Graviera Cheese',
    'menu.item.saganaki.name': 'Saganaki (Fried Cheese)',

    // Menu Items - Appetizers
    'menu.item.tzatziki.name': 'Tzatziki',
    'menu.item.tirokafteri.name': 'Spicy Feta Dip (Tirokafteri)',
    'menu.item.fries.name': 'Fresh French Fries',
    'menu.item.cheesepies.name': 'Small Cheese Pies with Honey',
    'menu.item.imam.name': 'Imam Eggplants',

    // Menu Items - Grill
    'menu.item.porkchops.name': 'Pork Chops',
    'menu.item.sausage.name': 'Traditional Village Sausage',
    'menu.item.bifteki.name': 'Grilled Ground Beef Burger',
    'menu.item.biftekig_gst.name': 'Stuffed Burger',
    'menu.item.pansetes.name': 'Pork Belly Portion',
    'menu.item.psaronefri.name': 'Pork Tenderloin',
    'menu.item.chicken_fillet.name': 'Chicken Fillet',
    'menu.item.veal.name': 'Veal Chop',
    'menu.item.lambchops.name': 'Lamb Chops (per kg)',

    // Menu Items - Bread & Water
    'menu.item.bread.name': 'Bread',
    'menu.item.water.name': 'Mineral Water 1.5 LT',

    // Menu Items - Salads
    'menu.item.cabbage.name': 'Cabbage Salad',
    'menu.item.lettuce.name': 'Lettuce Salad',
    'menu.item.greek_salad.name': 'Greek Salad',
    'menu.item.caesar.name': "Caesar's Salad",
    'menu.item.veggie_feast.name': 'Vegetable Feast',

    // Menu Items - Soft Drinks
    'menu.item.soft_drinks.name': 'Soft Drinks 330ml',

    // Menu Items - Beers
    'menu.item.alfa.name': 'Alfa Beer',
    'menu.item.amstel.name': 'Amstel Beer',
    'menu.item.mamos.name': 'Mamos Beer',
    'menu.item.heineken.name': 'Heineken Beer',
    'menu.item.kaizer.name': 'Kaizer Beer',

    // Menu Items - Wine
    'menu.item.wine_rose_half.name': 'Rosé Wine 500ml',
    'menu.item.wine_rose_750.name': 'Rosé Wine 750ml',
    'menu.item.wine_white_half.name': 'White Wine 500ml',
    'menu.item.wine_white_750.name': 'White Wine 750ml',

    // Menu Items - Spirits
    'menu.item.tsipouro_200.name': 'Tsipouro 200ml',
    'menu.item.ouzo_200.name': 'Ouzo 200ml',

    // Catering Section
    'catering.title': 'Catering & Events',
    'catering.subtitle': 'Professional Organization Anywhere',
    'catering.content': 'With specialized staff and full equipment, Kamares can support any type of event. From large receptions in our 400-person hall to private catering at your location, we ensure every moment is unique.',
    'catering.book.cta': 'Request a Quote',

    // About
    'about.title': 'Welcome to Kamares',
    'about.content':
      'In the heart of charming Arcadia, beneath the imposing presence of Mount Mainalo in Vlacherna, Kamares was created. A unique venue that combines traditional dining with professional event organization. Our hallmarks are the quality of ingredients, professional consistency, and warm, family hospitality.',

    // Services
    'services.title': 'Our Services',
    'services.events.title': 'Social Events',
    'services.events.description': 'Weddings, baptisms, and social gatherings in our luxurious hall or outdoor courtyard.',
    'services.restaurant.title': 'Restaurant',
    'services.restaurant.description': 'Traditional cuisine featuring local products and authentic Arcadian flavors.',
    'services.catering.title': 'Catering',
    'services.catering.description': 'Comprehensive catering services for all your needs throughout the Peloponnese.',

    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to discuss your requirements',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.eventDate': 'Date',
    'contact.eventType': 'Interest Type',
    'contact.eventType.placeholder': 'Select a category',
    'contact.eventType.restaurant': 'Restaurant Booking',
    'contact.eventType.wedding': 'Wedding',
    'contact.eventType.baptism': 'Baptism',
    'contact.eventType.corporate': 'Corporate Event',
    'contact.eventType.catering': 'External Catering',
    'contact.eventType.other': 'Other',
    'contact.guests': 'Number of Guests',
    'contact.message': 'Details / Comments',
    'contact.submit': 'Submit',
    'contact.success': 'Your message has been sent successfully!',
    'contact.gdpr': 'I agree to the processing of my personal data.',

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
