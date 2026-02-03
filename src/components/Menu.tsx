import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Menu = () => {
    const { t } = useLanguage();

    const menuCategories = [
        {
            id: 'starters',
            title: t('menu.starters'),
            items: [
                { name: t('menu.item.salad.name'), price: '9.00', description: t('menu.item.salad.desc') },
                { name: t('menu.item.halloumi.name'), price: '7.50', description: t('menu.item.halloumi.desc') },
                { name: t('menu.item.tzatziki.name'), price: '5.00', description: t('menu.item.tzatziki.desc') },
            ],
        },
        {
            id: 'mains',
            title: t('menu.mains'),
            items: [
                { name: t('menu.item.lamb.name'), price: '18.00', description: t('menu.item.lamb.desc') },
                { name: t('menu.item.mousaka.name'), price: '14.00', description: t('menu.item.mousaka.desc') },
                { name: t('menu.item.chicken.name'), price: '13.50', description: t('menu.item.chicken.desc') },
            ],
        },
        {
            id: 'desserts',
            title: t('menu.desserts'),
            items: [
                { name: t('menu.item.baklava.name'), price: '6.50', description: t('menu.item.baklava.desc') },
                { name: t('menu.item.yogurt.name'), price: '5.50', description: t('menu.item.yogurt.desc') },
            ],
        },
        {
            id: 'drinks',
            title: t('menu.drinks'),
            items: [
                { name: t('menu.item.wine.name'), price: '5.00', description: t('menu.item.wine.desc') },
                { name: t('menu.item.coffee.name'), price: '3.00', description: t('menu.item.coffee.desc') },
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

                <Tabs defaultValue="starters" className="w-full max-w-4xl mx-auto">
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
                                            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                                                {item.description}
                                            </p>
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
