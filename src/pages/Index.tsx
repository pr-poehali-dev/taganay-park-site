import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/98d9c12c-d70a-4da0-9a44-80e101ccd899.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Национальный парк Таганай
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Уникальная природная территория на Южном Урале
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Узнать больше
            <Icon name="ChevronDown" size={20} />
          </a>
        </div>
      </section>

      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">О парке</h2>
          
          <div className="prose prose-lg mx-auto text-foreground/80">
            <p className="text-lg leading-relaxed mb-6">
              Национальный парк «Таганай» расположен в одном из самых живописных уголков Южного Урала, 
              в западной части Челябинской области, недалеко от старинного уральского города Златоуста.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Парк создан в 1991 году и занимает площадь 568 квадратных километров. 
              Территория отличается разнообразием ландшафтов — здесь можно встретить горную тундру, 
              таёжные леса, каменные реки и уникальные скальные образования.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Особенности парка</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mountain" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Горные вершины</h3>
              <p className="text-foreground/70">
                Величественные хребты Таганая поднимаются на высоту более 1100 метров над уровнем моря
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Trees" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Таёжные леса</h3>
              <p className="text-foreground/70">
                Уникальные таёжные экосистемы с редкими видами растений и животных
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Каменные реки</h3>
              <p className="text-foreground/70">
                Удивительные природные образования из огромных каменных глыб
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Маршруты</h2>
              <p className="text-lg text-foreground/70 mb-6">
                В парке проложено несколько туристических маршрутов различной сложности — 
                от простых однодневных прогулок до многодневных походов для опытных туристов.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Маршрут к Двуглавой сопке (1-2 дня)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Круглица — высшая точка парка (2-3 дня)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Большая каменная река (1 день)</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/e558e63f-66a2-4705-a76c-bf65ba944c3a.jpg"
                alt="Скалы Таганая"
                className="w-full h-full object-cover"
              />
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

export default Index;
