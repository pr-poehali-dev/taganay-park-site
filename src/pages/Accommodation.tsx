import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Accommodation = () => {
  const accommodations = [
    {
      icon: 'Home',
      title: 'Приют «Таганай»',
      description: 'Уютный приют в центральной усадьбе парка с базовыми удобствами',
      features: ['Койко-места', 'Кухня', 'Баня', 'Электричество'],
      price: 'от 500₽/сутки'
    },
    {
      icon: 'Tent',
      title: 'Кемпинг',
      description: 'Оборудованные площадки для установки палаток',
      features: ['Навесы', 'Костровища', 'Туалеты', 'Вода'],
      price: 'от 200₽/сутки'
    },
    {
      icon: 'Mountain',
      title: 'Приют «Белый ключ»',
      description: 'Горный приют на маршруте к вершинам',
      features: ['Спальные места', 'Печка', 'Общая кухня'],
      price: 'от 400₽/сутки'
    }
  ];

  const hotels = [
    {
      name: 'Гостиница «Таганай»',
      location: 'г. Златоуст, 5 км от парка',
      description: 'Комфортабельная гостиница с современными удобствами',
      rating: 4.5
    },
    {
      name: 'База отдыха «Уральская»',
      location: 'пос. Магнитка, 3 км от КПП',
      description: 'База отдыха с коттеджами и номерами',
      rating: 4.2
    },
    {
      name: 'Гостевой дом «Лесной»',
      location: 'п. Пушкинский, 7 км от парка',
      description: 'Уютный гостевой дом в окружении леса',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-4">Где остановиться</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg">
            Варианты размещения на территории парка и в окрестностях
          </p>
          
          <h2 className="text-3xl font-bold mb-8">На территории парка</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {accommodations.map((place, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={place.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{place.title}</h3>
                <p className="text-foreground/70 mb-4">{place.description}</p>
                
                <div className="space-y-2 mb-4">
                  {place.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-primary">{place.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Info" size={24} className="text-primary" />
              Бронирование
            </h3>
            <p className="text-foreground/70 mb-4">
              Для бронирования мест в приютах и на кемпинге необходимо заранее связаться 
              с администрацией парка. Особенно это важно в летний сезон и в выходные дни.
            </p>
            <p className="text-foreground/70">
              Телефон для бронирования: <span className="font-semibold">+7 (3513) 62-00-00</span>
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8">Гостиницы рядом с парком</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                    <Icon name="Star" size={16} className="text-primary fill-primary" />
                    <span className="text-sm font-semibold text-primary">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 mb-3 text-sm text-foreground/70">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{hotel.location}</span>
                </div>
                
                <p className="text-foreground/70">{hotel.description}</p>
              </div>
            ))}
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

export default Accommodation;
