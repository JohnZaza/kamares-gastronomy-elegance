import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Menu = () => {
    const { t } = useLanguage();

    const menuCategories = [
        {
            id: 'cheeses',
            title: t('menu.cheeses'),
            items: [
                { name: t('menu.item.feta.name'), price: '4.00' },
                { name: t('menu.item.graviera.name'), price: '5.00' },
                { name: t('menu.item.saganaki.name'), price: '6.00' },
            ],
        },
        {
            id: 'appetizers',
            title: t('menu.appetizers'),
            items: [
                { name: t('menu.item.tzatziki.name'), price: '3.50' },
                { name: t('menu.item.tirokafteri.name'), price: '3.50' },
                { name: t('menu.item.fries.name'), price: '4.00' },
                { name: t('menu.item.cheesepies.name'), price: '6.00' },
                { name: t('menu.item.imam.name'), price: '7.00' },
            ],
        },
        {
            id: 'salads',
            title: t('menu.salads'),
            items: [
                { name: t('menu.item.cabbage.name'), price: '5.00' },
                { name: t('menu.item.lettuce.name'), price: '5.00' },
                { name: t('menu.item.greek_salad.name'), price: '8.00' },
                { name: t('menu.item.caesar.name'), price: '8.00' },
                { name: t('menu.item.veggie_feast.name'), price: '8.00' },
            ],
        },
        {
            id: 'grill',
            title: t('menu.grill'),
            items: [
                { name: t('menu.item.porkchops.name'), price: '10.00' },
                { name: t('menu.item.sausage.name'), price: '9.00' },
                { name: t('menu.item.bifteki.name'), price: '10.00' },
                { name: t('menu.item.biftekig_gst.name'), price: '11.00' },
                { name: t('menu.item.pansetes.name'), price: '10.00' },
                { name: t('menu.item.psaronefri.name'), price: '12.00' },
                { name: t('menu.item.chicken_fillet.name'), price: '10.00' },
                { name: t('menu.item.veal.name'), price: '16.00' },
                { name: t('menu.item.lambchops.name'), price: '35.00' },
            ],
        },
        {
            id: 'drinks',
            title: t('menu.soft_drinks'),
            items: [
                { name: t('menu.item.soft_drinks.name'), price: '2.50' },
                { name: t('menu.item.bread.name'), price: '0.50' },
                { name: t('menu.item.water.name'), price: '1.50' },
            ],
        },
        {
            id: 'beers',
            title: t('menu.beers'),
            items: [
                { name: t('menu.item.alfa.name'), price: '4.00' },
                { name: t('menu.item.amstel.name'), price: '4.00' },
                { name: t('menu.item.mamos.name'), price: '4.00' },
                { name: t('menu.item.heineken.name'), price: '5.00' },
                { name: t('menu.item.kaizer.name'), price: '5.00' },
            ],
        },
        {
            id: 'wine',
            title: t('menu.wine'),
            items: [
                { name: t('menu.item.wine_rose_half.name'), price: '3.50' },
                { name: t('menu.item.wine_rose_750.name'), price: '6.00' },
                { name: t('menu.item.wine_white_half.name'), price: '3.50' },
                { name: t('menu.item.wine_white_750.name'), price: '6.00' },
            ],
        },
        {
            id: 'spirits',
            title: t('menu.spirits'),
            items: [
                { name: t('menu.item.tsipouro_200.name'), price: '8.50' },
                { name: t('menu.item.ouzo_200.name'), price: '7.50' },
            ],
        },
    ];

    return (
        <section id="menu" className="py-24 bg-card/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                        {t('menu.title')}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <Tabs defaultValue="cheeses" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-background shadow-elegant">
                        {menuCategories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="font-serif text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                {category.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {menuCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {category.items.map((item, index) => (
                                    <div key={index} className="flex justify-between items-start border-b border-border/50 pb-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-semibold text-primary">{item.name}</h4>
                                        </div>
                                        <span className="text-lg font-serif font-bold text-accent">
                                            €{item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Menu;
