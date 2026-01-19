import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const menuItems = [
  {
    id: 'spravki',
    title: 'СПРАВКИ',
    icon: 'FileText',
    submenu: [
      { title: 'Справка 086/у', link: '/spravka-086-u' },
      { title: 'Справка для ГИБДД', link: '#' },
      { title: 'Справка 095/у', link: '#' },
      { title: 'Справка в бассейн', link: '#' },
      { title: 'Справка на оружие', link: '#' },
      { title: 'Справка для работы', link: '#' },
      { title: 'Справка в спортзал', link: '#' },
      { title: 'Справка на санаторий', link: '#' }
    ]
  },
  {
    id: 'medknijki',
    title: 'МЕДКНИЖКИ',
    icon: 'BookOpen',
    submenu: [
      { title: 'Личная медкнижка', link: '#' },
      { title: 'Для общепита', link: '#' },
      { title: 'Для торговли', link: '#' },
      { title: 'Для медработников', link: '#' },
      { title: 'Для образования', link: '#' },
      { title: 'Продление медкнижки', link: '#' }
    ]
  },
  {
    id: 'services',
    title: 'ДОП. УСЛУГИ',
    icon: 'Briefcase',
    submenu: [
      { title: 'Медосмотр', link: '#' },
      { title: 'Анализы', link: '#' },
      { title: 'Флюорография', link: '#' },
      { title: 'Прививки', link: '#' },
      { title: 'Консультации врачей', link: '#' }
    ]
  },
  {
    id: 'info',
    title: 'ИНФОРМАЦИЯ',
    icon: 'Info',
    submenu: [
      { title: 'О компании', link: '#' },
      { title: 'Лицензии', link: '#' },
      { title: 'Цены', link: '#' },
      { title: 'Отзывы', link: '#' }
    ]
  },
  {
    id: 'contacts',
    title: 'КОНТАКТЫ',
    icon: 'MapPin',
    link: '#contacts'
  }
];

export default function Spravka086u() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    documentName: 'Справка 086/у', 
    fullName: '', 
    birthDate: '', 
    phone: '', 
    comment: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="fixed top-0 left-0 w-[220px] h-full bg-gradient-to-b from-primary via-primary to-primary/90 z-40">
        <div className="absolute top-0 left-0 right-0 h-24 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center -gap-1">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path 
                  d="M 10 30 Q 10 15, 25 15 L 75 15 Q 90 15, 90 30 L 85 70 Q 85 75, 80 75 L 20 75 Q 15 75, 15 70 Z" 
                  fill="#22c55e"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <rect x="45" y="35" width="10" height="25" fill="white" rx="1"/>
                <rect x="37.5" y="42.5" width="25" height="10" fill="white" rx="1"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Caveat, cursive' }}>Dr. Справкин</span>
          </div>
        </div>

        <nav className="mt-24 pt-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a
                href={item.link || '#'}
                className="flex items-center gap-3 px-6 py-5 text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer border-b border-white/10"
              >
                <Icon name={item.icon} size={28} className="flex-shrink-0" />
                <span className="text-sm font-semibold uppercase tracking-wide">{item.title}</span>
                {item.submenu && <Icon name="ChevronRight" size={18} className="ml-auto" />}
              </a>

              {item.submenu && hoveredMenu === item.id && (
                <div className="fixed left-[220px] top-24 bottom-0 w-[800px] bg-white shadow-2xl animate-slide-in-right z-50 overflow-y-auto">
                  <div className="p-8">
                    <h3 className="text-lg font-bold mb-6 text-primary uppercase">{item.title}:</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                      {item.submenu.map((subitem, idx) => (
                        <a
                          key={idx}
                          href={subitem.link}
                          className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-base"
                        >
                          {subitem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="ml-[220px]">
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3 md:gap-8 text-xs md:text-sm flex-wrap">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span className="font-medium hidden sm:inline">Ваш город:</span>
                  <span className="text-primary font-semibold underline cursor-pointer">Москва</span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span>Email:</span>
                  <a href="mailto:info@meddocument.ru" className="text-primary font-semibold">
                    info@meddocument.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <a href="tel:+79851234567" className="text-lg md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  +7 (985) 123-45-67
                </a>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-3 md:px-6 text-sm md:text-base">
                  ПОЗВОНИТЕ МНЕ
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Главная</a>
            <Icon name="ChevronRight" size={16} />
            <a href="#" className="hover:text-primary transition-colors">Все справки</a>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground font-semibold">Справка 086/у</span>
          </div>

          <section className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 uppercase">
              <span className="text-primary">СПРАВКА</span> 086/У
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/c7782af7-a763-40b2-802f-73b245e1575d/files/53fc9c50-1993-40b0-b5e0-13f2980f16d8.jpg"
                  alt="Справка 086/у" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -left-4 top-8 w-24 h-24 border-4 border-secondary rounded-sm"></div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-20 translate-x-20"></div>
                  
                  <div className="relative z-10">
                    <div className="text-muted-foreground text-lg mb-2">Стоимость:</div>
                    <div className="text-7xl font-black text-primary mb-4">
                      1500<span className="text-4xl">₽</span>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6 uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      ЗАКАЗАТЬ ЭТУ УСЛУГУ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <Card className="bg-white shadow-lg border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-center uppercase">
                  ОСТАВЬТЕ <span className="text-primary">ЗАЯВКУ</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-muted-foreground">
                        Название справки
                      </label>
                      <Input
                        type="text"
                        value={formData.documentName}
                        onChange={(e) => setFormData({ ...formData, documentName: e.target.value })}
                        className="w-full border-2 border-primary/30 focus:border-primary"
                        placeholder="Справка 086/у"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-muted-foreground">
                        ФИО
                      </label>
                      <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full border-2 border-primary/30 focus:border-primary"
                        placeholder="Иванов Иван Иванович"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-muted-foreground">
                        Дата рождения
                      </label>
                      <Input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                        className="w-full border-2 border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-muted-foreground">
                        Номер телефона
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border-2 border-primary/30 focus:border-primary"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-muted-foreground">
                      Комментарий к заказу
                    </label>
                    <Textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full min-h-[120px] border-2 border-primary/30 focus:border-primary"
                      placeholder="Укажите дополнительные пожелания или информацию..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 uppercase"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <div className="mb-8">
              <div className="w-24 h-1 bg-primary mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                КУПИТЬ <span className="text-primary">СПРАВКУ 086/У</span>
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                Компания «Dr. Справкин» специализируется на изготовлении, оформлении и выдаче справки 086/у любой сложности! 
                Предлагаем высокое качество услуг и ответственный подход к каждому заказу. При заказе справки 086/у 
                мы гарантируем успешное прохождение проверки через специальные приложения, так как изготавливаем подлинные 
                справки 086/у для отчетности и оптимизации процессов. Приобретая у нас справку 086/у, вы гарантированно получите:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">
                      <strong>Оригинальную справку 086/у</strong> и документы от действующих медицинских учреждений;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">
                      <strong>100% гарантия подлинности</strong> – изготавливаем справку 086/у, на 100% идентичные оригиналам 
                      с корректным QR кодом;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">
                      <strong>Конфиденциальность</strong> – гарантируем сохранность личной информации заказчиков;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">
                      <strong>Возможность выбора даты заказчиком</strong> – при заказе справки 086/у можем оформить документ 
                      с текущим или задним числом;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-primary text-white py-12 mt-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Dr. Справкин</h3>
                <p className="text-white/80">Быстрое оформление медицинских документов с доставкой по всей России</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Контакты</h3>
                <div className="space-y-2 text-white/80">
                  <p>+7 (985) 123-45-67</p>
                  <p>info@meddocument.ru</p>
                  <p>г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Работаем</h3>
                <p className="text-white/80">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2024 Dr. Справкин. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
