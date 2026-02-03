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
    'menu.starters': 'Ορεκτικά',
    'menu.mains': 'Κυρίως Πιάτα',
    'menu.desserts': 'Επιδόρπια',
    'menu.drinks': 'Ποτά',
    'menu.price.from': 'Από',

    // Menu Items - Starters
    'menu.item.salad.name': 'Παραδοσιακή Σαλάτα',
    'menu.item.salad.desc': 'Φρέσκια ντομάτα, αγγούρι, φέτα και ελιές.',
    'menu.item.halloumi.name': 'Χαλούμι Σχάρας',
    'menu.item.halloumi.desc': 'Κυπριακό τυρί στη σχάρα με λεμόνι και μυρωδικά.',
    'menu.item.tzatziki.name': 'Τζατζίκι',
    'menu.item.tzatziki.desc': 'Παραδοσιακό τζατζίκι με γιαούρτι, αγγούρι και σκόρδο.',

    // Menu Items - Mains
    'menu.item.lamb.name': 'Αρκαδικό Αρνάκι',
    'menu.item.lamb.desc': 'Αρνάκι σιγομαγειρεμένο με μυρωδικά και πατάτες φούρνου.',
    'menu.item.mousaka.name': 'Μουσακάς',
    'menu.item.mousaka.desc': 'Στρώσεις από μελιτζάνες, κιμά και κρέμα μπεσαμέλ.',
    'menu.item.chicken.name': 'Κοτόπουλο Σχάρας',
    'menu.item.chicken.desc': 'Μαριναρισμένο στήθος κοτόπουλου με λαχανικά εποχής.',

    // Menu Items - Desserts
    'menu.item.baklava.name': 'Μπακλαβάς',
    'menu.item.baklava.desc': 'Παραδοσιακός μπακλαβάς με ξηρούς καρπούς και σιρόπι.',
    'menu.item.yogurt.name': 'Γιαούρτι με Μέλι',
    'menu.item.yogurt.desc': 'Παραδοσιακό γιαούρτι με μέλι και καρύδια.',

    // Menu Items - Drinks
    'menu.item.wine.name': 'Τοπικό Κόκκινο Κρασί',
    'menu.item.wine.desc': 'Ποτήρι από εκλεκτό τοπικό κρασί.',
    'menu.item.coffee.name': 'Ελληνικός Καφές',
    'menu.item.coffee.desc': 'Παραδοσιακός ελληνικός καφές στη χόβολη.',

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
    'menu.starters': 'Starters',
    'menu.mains': 'Main Courses',
    'menu.desserts': 'Desserts',
    'menu.drinks': 'Drinks',
    'menu.price.from': 'From',

    // Menu Items - Starters
    'menu.item.salad.name': 'Traditional Salad',
    'menu.item.salad.desc': 'Fresh tomatoes, cucumbers, feta cheese, and olives.',
    'menu.item.halloumi.name': 'Grilled Halloumi',
    'menu.item.halloumi.desc': 'Cypriot cheese served with lemon and herbs.',
    'menu.item.tzatziki.name': 'Tzatziki',
    'menu.item.tzatziki.desc': 'Yogurt, cucumber, and garlic dip.',

    // Menu Items - Mains
    'menu.item.lamb.name': 'Arcadian Lamb',
    'menu.item.lamb.desc': 'Slow-cooked lamb with herbs and lemon-roasted potatoes.',
    'menu.item.mousaka.name': 'Mousaka',
    'menu.item.mousaka.desc': 'Layers of eggplant, minced meat, and bechamel sauce.',
    'menu.item.chicken.name': 'Grilled Chicken',
    'menu.item.chicken.desc': 'Marinated chicken breast served with seasonal vegetables.',

    // Menu Items - Desserts
    'menu.item.baklava.name': 'Baklava',
    'menu.item.baklava.desc': 'Layers of filo pastry filled with nuts and syrup.',
    'menu.item.yogurt.name': 'Greek Yogurt',
    'menu.item.yogurt.desc': 'Served with honey and walnuts.',

    // Menu Items - Drinks
    'menu.item.wine.name': 'Local Red Wine',
    'menu.item.wine.desc': 'Glass of premium local wine.',
    'menu.item.coffee.name': 'Greek Coffee',
    'menu.item.coffee.desc': 'Traditionally brewed.',

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
