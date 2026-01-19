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

const reviews = [
  {
    name: 'Наталья',
    title: 'Сделано лучше чем ожидала!',
    text: 'Все отлично! Получила справку 086/у — проверка в медицинском центре прошла легко. Никаких претензий к качеству. Очень довольна :)'
  },
  {
    name: 'Анатолий Иванович',
    title: 'Сделали хорошо!',
    text: 'Работаю с Вами не первый раз. Более честной и профессиональной компании не встречал. Отличный сервис, рекомендую!'
  },
  {
    name: 'Сергей',
    title: 'Доволен как слон! Спасибо!',
    text: 'Сегодня получил заказ. Сделали быстро, выглядит как оригинальный, проверку проходит, доставка быстрая. Спасибо большое!'
  },
  {
    name: 'Елена',
    title: 'Все прошло отлично!',
    text: 'Заказала медкнижку для работы. Понравилось качество исполнения, все печати на месте. Обращусь еще при необходимости. Спасибо!'
  }
];

export default function Index() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', document: '', message: '' });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 1));
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? Math.max(0, reviews.length - 3) : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="fixed top-0 left-0 w-[220px] h-full bg-gradient-to-b from-primary via-primary to-primary/90 z-40">
        <div className="absolute top-0 left-0 right-0 h-24 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="relative w-14 h-14 mb-1">
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
            <span className="text-xs font-bold text-foreground uppercase">Dr. Справкин</span>
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

        <section className="relative py-12 md:py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/c7782af7-a763-40b2-802f-73b245e1575d/files/f3453abe-2832-4975-ba4d-748bc0009b0b.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block mb-4">
                  <svg className="w-12 md:w-16 h-2" viewBox="0 0 100 10">
                    <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  СПРАВКИ И МЕДКНИЖКИ
                  <br />
                  <span className="text-primary">БЫСТРО И ОФИЦИАЛЬНО</span>
                </h1>
                <div className="bg-secondary text-secondary-foreground inline-block px-3 md:px-4 py-2 font-bold text-base md:text-lg mb-4 md:mb-6">
                  100% ПРОХОЖДЕНИЕ ПРОВЕРОК
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Конфиденциальность, оригинальные документы от действующих организаций,
                  быстрая доставка, низкая стоимость, отсутствие предоплаты
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button size="lg" className="px-6 md:px-8 w-full sm:w-auto">
                    <Icon name="FileText" className="mr-2" size={20} />
                    Заказать справку
                  </Button>
                  <Button size="lg" variant="outline" className="px-6 md:px-8 w-full sm:w-auto">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить
                  </Button>
                </div>
              </div>

              <div className="relative animate-scale-in hidden lg:block">
                <img 
                  src="https://cdn.poehali.dev/files/1-й скриншот.png"
                  alt="Медицинские справки"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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

        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
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

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              СТОИМОСТЬ СПРАВОК <span className="text-primary">В МОСКВЕ:</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
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

        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 md:h-24 hidden md:block">
            <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z" fill="currentColor" className="text-gray-100" />
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              ЧТО НУЖНО, ЧТОБЫ <span className="text-primary">КУПИТЬ СПРАВКИ В МОСКВЕ?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16">
              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Building2" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Оформление Заявки</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Прием заявления и подготовка требуемого медицинского документа
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="ClipboardList" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Консультация Клиента</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Определяем требования и рассчитываем стоимость услуги
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Calendar" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Изготовление Справок</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Создание медицинского документа при помощи специализированного оборудования
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="GraduationCap" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Проверка нашей Работы</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Осуществление контроля и подтверждение соответствия медицинской справки нормативам
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="CreditCard" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Оплата и доставка</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Оплата и выбор варианта доставки справки и отчетных документов
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mb-6">
                    <Icon name="BadgeCheck" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Сдача в бухгалтерию</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Доставка медицинской отчетности в бухгалтерский отдел или налоговую инспекцию
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              КАК СДЕЛАТЬ ЗАКАЗ?
            </h2>
            <div className="bg-secondary text-secondary-foreground inline-block px-4 md:px-6 py-2 font-bold text-base md:text-xl mb-8 md:mb-12">
              ВЫПОЛНИТЬ 4 ПРОСТЫХ ШАГА
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-8 order-2 lg:order-1">
                <img 
                  src="https://cdn.poehali.dev/files/6-й скриншот.png"
                  alt="Образец справки"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white text-foreground rounded-lg flex items-center justify-center text-4xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Онлайн заявка или телефонный звонок</h3>
                    <p className="text-lg text-white/80">
                      Свяжитесь с нами любым удобным способом - через форму на сайте или по телефону
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white text-foreground rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2">Согласование и уточнение деталей</h3>
                    <p className="text-sm md:text-lg text-white/80">
                      Наш специалист уточнит все детали и рассчитает стоимость
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white text-foreground rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2">Быстрая доставка в удобное время</h3>
                    <p className="text-sm md:text-lg text-white/80">
                      Доставим справку курьером в любое удобное для вас время и место
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white text-foreground rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2">Оплата после получения и проверки</h3>
                    <p className="text-sm md:text-lg text-white/80">
                      Оплачиваете только после получения и проверки документа
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 hidden md:block">
            <svg width="150" height="80" viewBox="0 0 150 80">
              <path d="M0,40 Q25,20 50,40 T100,40 T150,40" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-300" />
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16">
              ОТЗЫВЫ <span className="text-primary">ПОКУПАТЕЛЕЙ</span>
            </h2>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                          <Icon name="User" className="text-gray-400" size={32} />
                        </div>
                        <h4 className="text-xl font-bold">{review.name}</h4>
                      </div>
                      <h5 className="text-lg font-bold text-secondary mb-4">{review.title}</h5>
                      <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={prevReviews}
                  className="w-12 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
                  aria-label="Предыдущие отзывы"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <button
                  onClick={nextReviews}
                  className="w-12 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
                  aria-label="Следующие отзывы"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block"></div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="absolute top-0 left-0 hidden md:block">
              <svg width="150" height="80" viewBox="0 0 150 80">
                <path d="M0,40 Q25,20 50,40 T100,40 T150,40" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-300" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              ОСТАВЬТЕ <span className="text-primary">ЗАЯВКУ:</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl">
              Оставьте свои данные и наш менеджер ответит на все ваши вопросы, предложит лучшее решение вашего вопроса:
            </p>

            <form onSubmit={handleSubmit} className="max-w-5xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
                <Input
                  type="tel"
                  placeholder="ТЕЛЕФОН"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-14 bg-white border-0 text-base placeholder:text-gray-400 placeholder:font-normal"
                />
                <Input
                  type="text"
                  placeholder="ИМЯ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-14 bg-white border-0 text-base placeholder:text-gray-400 placeholder:font-normal"
                />
                <Input
                  type="email"
                  placeholder="E-MAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 bg-white border-0 text-base placeholder:text-gray-400 placeholder:font-normal"
                />
                <Input
                  type="text"
                  placeholder="ДОКУМЕНТ"
                  value={formData.document}
                  onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                  className="h-14 bg-white border-0 text-base placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <Textarea
                placeholder="Сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mb-6 bg-white border-0 min-h-[200px] text-base placeholder:text-gray-400"
              />

              <Button 
                type="submit" 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-12 py-6 text-xl border-2 border-secondary hover:border-secondary/90"
              >
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </section>

        <footer id="contacts" className="bg-white py-8 md:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-12 pb-6 md:pb-8 border-b border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold">МEDDОКУМЕНТ</h3>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Ваш город:</p>
                    <p className="font-bold text-primary text-lg">Москва</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email:</p>
                    <a href="mailto:express.spravki@gmail.com" className="font-bold text-lg hover:text-primary transition-colors">
                      express.spravki@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <a href="tel:+79853143399" className="text-2xl font-bold hover:text-primary transition-colors">
                    +7 (985) 314-33-99
                  </a>
                </div>

                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 border-2 border-secondary">
                  ПОЗВОНИТЕ МНЕ
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div>
                <h4 className="text-xl font-bold mb-6 uppercase">Справки:</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка 086/у</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка для ГИБДД</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка 095/у</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка в бассейн</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка на оружие</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка для работы</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Справка в спортзал</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 uppercase">Медкнижки:</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Личная медкнижка</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для общепита</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для торговли</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для медработников</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Для образования</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Продление медкнижки</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 uppercase">Медосмотры:</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Медосмотр для работы</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Медосмотр для водителей</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Медосмотр для студентов</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Анализы</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Флюорография</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Прививки</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Консультации врачей</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 uppercase">Дополнительные услуги:</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Оформление документов</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Срочное изготовление</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Доставка документов</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Консультация специалиста</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Проверка подлинности</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Продление справок</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}