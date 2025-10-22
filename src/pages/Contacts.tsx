import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-4">Контакты</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg">
            Свяжитесь с нами для получения информации о посещении парка
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Администрация парка</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-foreground/70">+7 (3513) 62-00-00</p>
                      <p className="text-foreground/70">+7 (3513) 62-11-22</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-foreground/70">info@taganay.org</p>
                      <p className="text-foreground/70">tourism@taganay.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-foreground/70">
                        456209, Челябинская область,<br />
                        г. Златоуст, ул. Шишкина, д. 3а
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-foreground/70">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-foreground/70">Сб-Вс: Выходной</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">КПП «Центральная усадьба»</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-foreground/70">
                    <Icon name="Phone" size={16} className="text-primary" />
                    +7 (3513) 67-10-05
                  </p>
                  <p className="flex items-center gap-2 text-foreground/70">
                    <Icon name="Clock" size={16} className="text-primary" />
                    Ежедневно 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ваш вопрос или сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Отправить
                  <Icon name="Send" size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-foreground/70">Карта расположения парка</p>
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

export default Contacts;
