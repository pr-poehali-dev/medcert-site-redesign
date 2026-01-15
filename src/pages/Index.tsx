import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const menuItems = [
  {
    id: 'spravki',
    title: 'СПРАВКИ',
    icon: 'FileText',
    submenu: [
      { title: 'Справка 086/у', link: '#' },
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

const advantages = [
  {
    title: 'Безопасность',
    description: 'Конфиденциальность и безопасность при заказе любых услуг',
    icon: 'Shield'
  },
  {
    title: 'Легально',
    description: 'Легальные и корректно оформленные справки',
    icon: 'BadgeCheck'
  },
  {
    title: 'Большой выбор',
    description: 'Все виды справок и медкнижек',
    icon: 'Library'
  },
  {
    title: 'Быстрая доставка',
    description: 'Оперативно доставляем справки по всей России',
    icon: 'Truck'
  },
  {
    title: 'Подлинность',
    description: 'Все справки оригинальные, 100% проходят проверку',
    icon: 'CheckCircle2'
  }
];

export default function Index() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="fixed top-0 left-0 w-[160px] h-full bg-gradient-to-b from-primary via-primary to-primary/90 z-40">
        <div className="absolute top-0 left-0 right-0 h-24 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-1">
              <Icon name="Cross" className="text-white" size={28} />
            </div>
            <span className="text-xs font-bold text-foreground uppercase">МедДокумент</span>
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
                <div className="fixed left-[160px] top-24 bottom-0 w-[800px] bg-white shadow-2xl animate-slide-in-right z-50 overflow-y-auto">
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

      <div className="ml-[160px]">
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span className="font-medium">Ваш город:</span>
                  <span className="text-primary font-semibold underline cursor-pointer">Москва</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span>Email:</span>
                  <a href="mailto:info@meddocument.ru" className="text-primary font-semibold">
                    info@meddocument.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="tel:+79851234567" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  +7 (985) 123-45-67
                </a>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6">
                  ПОЗВОНИТЕ МНЕ
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block mb-4">
                  <svg className="w-16 h-2" viewBox="0 0 100 10">
                    <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
                  </svg>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  СПРАВКИ И МЕДКНИЖКИ
                  <br />
                  <span className="text-primary">БЫСТРО И ОФИЦИАЛЬНО</span>
                </h1>
                <div className="bg-secondary text-secondary-foreground inline-block px-4 py-2 font-bold text-lg mb-6">
                  100% ПРОХОЖДЕНИЕ ПРОВЕРОК
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Конфиденциальность, оригинальные документы от действующих организаций,
                  быстрая доставка, низкая стоимость, отсутствие предоплаты
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="px-8">
                    <Icon name="FileText" className="mr-2" size={20} />
                    Заказать справку
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить
                  </Button>
                </div>
              </div>

              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/1-й скриншот.png"
                  alt="Медицинские справки"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon} className="text-primary" size={32} />
                    </div>
                    <h4 className="font-bold mb-2">{advantage.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold mb-12">
              КУПИТЬ СПРАВКИ <span className="text-primary">В МОСКВЕ</span>
            </h2>
            
            <div className="max-w-5xl">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Компания «МедДокумент» специализируется на изготовлении, оформлении и печати медицинских справок в Москве любой сложности! Предлагая высокое качество услуг и ответственный подход к каждому заказу. При заказе справки в Москве мы гарантируем успешное прохождение проверки через специальные приложения, так как изготавливаем подлинные медицинские справки в Москве для отчетности и оптимизации НДС. Приобретая у нас справки в Москве, вы гарантированно получите:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Оригинальные медицинские справки в Москве и документы от действующих медицинских организаций;</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">100% гарантия подлинности – изготавливаем справки в Москве, на 100% идентичные оригиналам с корректным QR кодом;</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Конфиденциальность – гарантируем сохранность личной информации заказчиков;</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Возможность выбора даты заказчиком – при заказе справки в Москве можем оформить документ с текущим или задним числом;</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Низкая стоимость справок в Москве - у нас очень конкурентные цены на справки в Москве;</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Быстрая доставка – оперативно доставляем справки курьером и транспортными компаниями по России;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-center mb-4">
              СТОИМОСТЬ СПРАВОК <span className="text-primary">В МОСКВЕ:</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-primary/5 p-6 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/4-й скриншот.png"
                    alt="Справки малой стоимости"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Справки на сумму 500 - 1 500 руб.</h3>
                  <div className="bg-primary text-primary-foreground text-center py-3 px-6 text-2xl font-bold mb-4">
                    от 800 руб.
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 text-lg">
                    ЗАКАЗАТЬ ЭТУ УСЛУГУ
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-primary/5 p-6 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/4-й скриншот.png"
                    alt="Справки средней стоимости"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Справки на сумму 1 500 - 3 000 руб.</h3>
                  <div className="bg-primary text-primary-foreground text-center py-3 px-6 text-2xl font-bold mb-4">
                    от 1 200 руб.
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 text-lg">
                    ЗАКАЗАТЬ ЭТУ УСЛУГУ
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-primary/5 p-6 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/files/4-й скриншот.png"
                    alt="Справки высокой стоимости"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Справки на сумму 3 000 - 5 000 руб.</h3>
                  <div className="bg-primary text-primary-foreground text-center py-3 px-6 text-2xl font-bold mb-4">
                    от 1 800 руб.
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 text-lg">
                    ЗАКАЗАТЬ ЭТУ УСЛУГУ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-8">
            <div className="max-w-xl mx-auto">
              <Card className="animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-center">Оставьте заявку</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Мы свяжемся с вами в течение 10 минут
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      type="tel"
                      placeholder="Ваш телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer id="contacts" className="bg-foreground text-white py-12">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Cross" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">МедДокумент</h4>
                    <p className="text-xs text-muted">Справки и медкнижки</p>
                  </div>
                </div>
                <p className="text-sm text-muted">
                  Лицензированная медицинская организация
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Контакты</h5>
                <div className="space-y-2 text-sm text-muted">
                  <p className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (985) 123-45-67
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    info@meddocument.ru
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    Москва, ул. Примерная, д. 1
                  </p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Режим работы</h5>
                <div className="space-y-2 text-sm text-muted">
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted">
              <p>© 2024 МедДокумент. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}