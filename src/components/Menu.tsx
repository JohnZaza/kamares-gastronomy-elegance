import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Utensils,
    Wine,
    Beer,
    GlassWater,
    Beef,
    Salad as SaladIcon,
    ChefHat,
    Milk
} from 'lucide-react';

const Menu = () => {
    const { t } = useLanguage();

    const menuCategories = [
        {
            id: 'grill',
            title: t('menu.grill'),
            icon: <Beef className="w-5 h-5" />,
            items: [
                { name: t('menu.item.porkchops.name') },
                { name: t('menu.item.sausage.name') },
                { name: t('menu.item.bifteki.name') },
                { name: t('menu.item.biftekig_gst.name') },
                { name: t('menu.item.pansetes.name') },
                { name: t('menu.item.psaronefri.name') },
                { name: t('menu.item.chicken_fillet.name') },
                { name: t('menu.item.veal.name') },
                { name: t('menu.item.lambchops.name') },
            ],
        },
        {
            id: 'starters_salads',
            title: t('menu.starters_salads'),
            icon: <SaladIcon className="w-5 h-5" />,
            items: [
                { name: t('menu.item.greek_salad.name') },
                { name: t('menu.item.tzatziki.name') },
                { name: t('menu.item.tirokafteri.name') },
                { name: t('menu.item.feta.name') },
                { name: t('menu.item.graviera.name') },
                { name: t('menu.item.saganaki.name') },
                { name: t('menu.item.fries.name') },
                { name: t('menu.item.cheesepies.name') },
                { name: t('menu.item.imam.name') },
                { name: t('menu.item.cabbage.name') },
                { name: t('menu.item.lettuce.name') },
                { name: t('menu.item.caesar.name') },
                { name: t('menu.item.veggie_feast.name') },
            ],
        },
        {
            id: 'drinks_spirits',
            title: t('menu.drinks_spirits'),
            icon: <GlassWater className="w-5 h-5" />,
            items: [
                { name: t('menu.item.soft_drinks.name') },
                { name: t('menu.item.bread.name') },
                { name: t('menu.item.water.name') },
                { name: t('menu.item.alfa.name') },
                { name: t('menu.item.amstel.name') },
                { name: t('menu.item.mamos.name') },
                { name: t('menu.item.heineken.name') },
                { name: t('menu.item.kaizer.name') },
                { name: t('menu.item.wine_rose_half.name') },
                { name: t('menu.item.wine_rose_750.name') },
                { name: t('menu.item.wine_white_half.name') },
                { name: t('menu.item.wine_white_750.name') },
                { name: t('menu.item.tsipouro_200.name') },
                { name: t('menu.item.ouzo_200.name') },
            ],
        },
    ];

    return (
        <section id="menu" className="py-24 bg-card/10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-accent font-serif italic text-lg mb-2 block tracking-wider uppercase">
                        {t('restaurant.subtitle')}
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                        {t('menu.title')}
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-accent/30" />
                        <Utensils className="w-6 h-6 text-accent animate-pulse" />
                        <div className="w-12 h-px bg-accent/30" />
                    </div>
                </div>

                <Tabs defaultValue="grill" className="w-full max-w-5xl mx-auto">
                    <TabsList className="flex flex-wrap h-auto gap-2 p-2 mb-12 bg-background/50 backdrop-blur-sm shadow-elegant rounded-xl border border-border/50 justify-center">
                        {menuCategories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="flex-1 min-w-[150px] gap-2 py-3 px-4 font-serif text-base transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                            >
                                {category.icon}
                                {category.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {menuCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="animate-fade-in outline-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {category.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex items-center gap-3 py-2 px-1 transition-all duration-300 hover:scale-[1.01]"
                                    >
                                        <div className="flex-none">
                                            <h4 className="text-xl font-serif font-semibold text-primary/90 group-hover:text-primary transition-colors">
                                                {item.name}
                                            </h4>
                                        </div>
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
