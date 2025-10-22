import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryItems = [
    {
      image: "https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/3d4cd49c-5b73-4998-af5d-c85a289b9f02.jpg",
      title: "Двуглавая сопка",
      description: "Главная вершина парка высотой 1034 метра"
    },
    {
      image: "https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/d2d6c61e-e6a8-495a-b16e-6615d9cadd09.jpg",
      title: "Зимний Таганай",
      description: "Заснеженные склоны и хвойные леса"
    },
    {
      image: "https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/257795d1-1308-4136-95fe-afe86d9e2ec6.jpg",
      title: "Осенняя тропа",
      description: "Золотая осень в горах Южного Урала"
    }
  ];

  const rules = [
    { icon: "MapPin", text: "Регистрация в визит-центре обязательна" },
    { icon: "Flame", text: "Разводить костры только в специально отведённых местах" },
    { icon: "Trash2", text: "Весь мусор необходимо уносить с собой" },
    { icon: "Dog", text: "Домашние животные только на поводке" },
    { icon: "Mountain", text: "Не отклоняйтесь от маркированных троп" },
    { icon: "Tent", text: "Ночёвки только в оборудованных местах" }
  ];

  const accommodations = [
    {
      title: "Приют 'Таганай'",
      description: "Основной визит-центр у входа в парк. Жильё, баня, кафе.",
      distance: "0 км от входа"
    },
    {
      title: "Приют 'Белый ключ'",
      description: "Горный приют на высоте 700м. Домики и места под палатки.",
      distance: "8 км от входа"
    },
    {
      title: "Гостиницы Златоуста",
      description: "Комфортное размещение в городе в 15 минутах от парка.",
      distance: "6 км от входа"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Таганай</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
                Фотогалерея
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-foreground hover:text-primary transition-colors">
                Правила
              </button>
              <button onClick={() => scrollToSection('accommodation')} className="text-foreground hover:text-primary transition-colors">
                Где остановиться
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/3d4cd49c-5b73-4998-af5d-c85a289b9f02.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Национальный парк Таганай</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">Жемчужина Южного Урала</p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('gallery')}
            className="bg-secondary hover:bg-secondary/90"
          >
            Исследовать парк
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">О парке</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Таганай — один из красивейших национальных парков России, расположенный на территории 
              Южного Урала. Парк славится своими горными хребтами, каменными реками, реликтовыми лесами 
              и уникальной флорой. Здесь проложены туристические маршруты различной сложности, 
              от однодневных прогулок до многодневных походов.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Фотогалерея</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Правила посещения</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rules.map((rule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={rule.icon} className="text-primary" size={24} />
                  </div>
                  <p className="text-sm leading-relaxed pt-2">{rule.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Где остановиться</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {accommodations.map((place, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Home" className="text-accent mt-1" size={24} />
                  <h4 className="text-xl font-semibold">{place.title}</h4>
                </div>
                <p className="text-muted-foreground mb-4">{place.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Icon name="MapPin" size={16} />
                  <span>{place.distance}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Контакты</h3>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Icon name="MapPin" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-primary-foreground/90">г. Златоуст, Челябинская область</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Phone" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-primary-foreground/90">+7 (351) 000-00-00</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Mail" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary-foreground/90">info@taganay.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-primary-foreground/90">Ежедневно, 8:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 Национальный парк Таганай. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
