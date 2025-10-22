import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Accommodation = () => {
  const options = [
    {
      title: 'Приют "Белый ключ"',
      type: 'Гостевой дом',
      price: 'от 800 ₽/сутки',
      description:
        'Уютный приют на территории парка. Есть спальные места, кухня, баня.',
      features: [
        'Кровати в общих комнатах',
        'Кухня с посудой',
        'Баня',
        'Электричество',
      ],
      icon: 'Home',
    },
    {
      title: 'Кемпинг',
      type: 'Палаточный лагерь',
      price: 'от 200 ₽/сутки',
      description:
        'Оборудованные места для установки палаток с кострищами и туалетами.',
      features: [
        'Место под палатку',
        'Кострище',
        'Туалеты',
        'Питьевая вода',
      ],
      icon: 'Tent',
    },
    {
      title: 'Турбаза "Таганай"',
      type: 'База отдыха',
      price: 'от 1500 ₽/сутки',
      description:
        'Комфортабельная база с отдельными домиками у входа в парк.',
      features: [
        'Отдельные домики',
        'Душ и туалет',
        'Электричество и отопление',
        'Парковка',
      ],
      icon: 'Hotel',
    },
    {
      title: 'Гостиницы Златоуста',
      type: 'Городское размещение',
      price: 'от 2000 ₽/сутки',
      description:
        'Отели и гостиницы в городе Златоуст, в 10 км от парка.',
      features: [
        'Комфортабельные номера',
        'Все удобства',
        'Wi-Fi',
        'Питание',
      ],
      icon: 'Building',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Где остановиться</h1>
            <p className="text-xl text-muted-foreground">
              Варианты размещения для путешественников
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={option.icon} size={32} className="text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{option.title}</h3>
                        <p className="text-sm text-muted-foreground">{option.type}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary mt-2 md:mt-0">
                        {option.price}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{option.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Lightbulb" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Советы путешественникам</h3>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Бронируйте места заранее в летний сезон
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Берите спальный мешок даже для приютов
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    В приютах может не быть мобильной связи
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Возьмите наличные — карты не везде принимают
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Backpack" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Что взять с собой</h3>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Тёплая одежда (даже летом в горах холодно)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Дождевик и непромокаемая обувь
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Фонарик и запасные батарейки
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Аптечка первой помощи
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Средства от насекомых
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
