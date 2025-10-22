import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Rules = () => {
  const rules = [
    {
      icon: 'ShieldCheck',
      title: 'Соблюдайте режим охраны',
      description: 'Передвигайтесь только по маркированным тропам. Не нарушайте границы заповедных зон.'
    },
    {
      icon: 'Trash2',
      title: 'Не оставляйте мусор',
      description: 'Уносите все отходы с собой. Сохраняйте чистоту природы для будущих поколений.'
    },
    {
      icon: 'Flame',
      title: 'Будьте осторожны с огнём',
      description: 'Разводите костры только в специально отведённых местах. Полностью тушите огонь перед уходом.'
    },
    {
      icon: 'Trees',
      title: 'Берегите растения',
      description: 'Не рвите редкие растения и цветы. Не повреждайте деревья и кустарники.'
    },
    {
      icon: 'Footprints',
      title: 'Уважайте дикую природу',
      description: 'Не беспокойте животных. Наблюдайте за ними на безопасном расстоянии.'
    },
    {
      icon: 'Volume2',
      title: 'Соблюдайте тишину',
      description: 'Избегайте громких звуков и музыки. Позвольте другим насладиться покоем природы.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-4">Правила посещения</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg">
            Соблюдение этих правил поможет сохранить уникальную природу Таганая
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rules.map((rule, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={rule.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{rule.title}</h3>
                <p className="text-foreground/70">{rule.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Важная информация</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Ticket" size={20} className="text-primary" />
                  Пропускной режим
                </h3>
                <p className="text-foreground/70">
                  Для посещения парка необходимо оформить пропуск на КПП. 
                  Стоимость посещения: взрослые — 100₽, дети — 50₽.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  Регистрация маршрута
                </h3>
                <p className="text-foreground/70">
                  При планировании многодневного похода обязательно зарегистрируйте свой маршрут 
                  в администрации парка для вашей безопасности.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  Режим работы
                </h3>
                <p className="text-foreground/70">
                  Парк открыт круглогодично. КПП работает с 8:00 до 20:00. 
                  В зимний период время работы может быть сокращено.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">
            © 2024 Национальный парк Таганай. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
