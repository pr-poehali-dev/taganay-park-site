import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/gallery', label: 'Фотогалерея' },
    { path: '/rules', label: 'Правила посещения' },
    { path: '/accommodation', label: 'Где остановиться' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Icon name="Mountain" size={28} />
            <span>Таганай</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
