import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения информации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    456043, Челябинская область
                    <br />
                    г. Златоуст, ул. Шишкина, д. 3а
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (3513) 67-61-77</p>
                  <p className="text-muted-foreground">+7 (3513) 67-61-66</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">taganay@uole.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00
                    <br />
                    Сб-Вс: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Ваше сообщение"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Как добраться</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Car" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">На автомобиле</h4>
                  <p className="text-muted-foreground">
                    Из Челябинска по трассе М5 в сторону Златоуста (130 км). Въезд в парк
                    находится за городом по указателям.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Train" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">На поезде</h4>
                  <p className="text-muted-foreground">
                    До станции Златоуст, затем автобусом или такси до центрального входа в
                    парк (около 10 км).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Bus" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">На автобусе</h4>
                  <p className="text-muted-foreground">
                    Рейсовые автобусы Челябинск-Златоуст, затем местный транспорт до входа
                    в парк.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
