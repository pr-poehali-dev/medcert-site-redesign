import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Справка 086/у',
    description: 'Для поступления в учебное заведение',
    price: '2 500 ₽',
    icon: 'GraduationCap'
  },
  {
    title: 'Медицинская книжка',
    description: 'Оформление и продление',
    price: '3 500 ₽',
    icon: 'BookOpen'
  },
  {
    title: 'Справка для ГИБДД',
    description: 'Для получения водительских прав',
    price: '2 000 ₽',
    icon: 'Car'
  },
  {
    title: 'Справка 095/у',
    description: 'Для студентов и абитуриентов',
    price: '1 500 ₽',
    icon: 'FileText'
  },
  {
    title: 'Справка в бассейн',
    description: 'Медицинский допуск',
    price: '800 ₽',
    icon: 'Droplets'
  },
  {
    title: 'Справка на оружие',
    description: 'Для получения лицензии',
    price: '3 000 ₽',
    icon: 'Shield'
  }
];

const advantages = [
  {
    title: 'Быстрое оформление',
    description: 'Получите справку в день обращения',
    icon: 'Zap'
  },
  {
    title: 'Без очередей',
    description: 'Удобная запись на удобное время',
    icon: 'Clock'
  },
  {
    title: 'Официальные документы',
    description: 'Все справки с печатью и подписью врача',
    icon: 'BadgeCheck'
  },
  {
    title: 'Доступные цены',
    description: 'Честные цены без скрытых платежей',
    icon: 'Wallet'
  }
];

const steps = [
  {
    number: '1',
    title: 'Оставьте заявку',
    description: 'Заполните форму или позвоните нам',
    icon: 'Phone'
  },
  {
    number: '2',
    title: 'Консультация',
    description: 'Менеджер свяжется и уточнит детали',
    icon: 'MessageCircle'
  },
  {
    number: '3',
    title: 'Посещение клиники',
    description: 'Приходите в удобное время',
    icon: 'Building2'
  },
  {
    number: '4',
    title: 'Получение справки',
    description: 'Забирайте готовый документ',
    icon: 'CheckCircle2'
  }
];

const reviews = [
  {
    name: 'Анна Петрова',
    text: 'Очень быстро оформили медкнижку для работы. Никаких очередей, всё чётко и профессионально!',
    rating: 5
  },
  {
    name: 'Дмитрий Соколов',
    text: 'Нужна была срочно справка для ГИБДД. Сделали за один день! Рекомендую.',
    rating: 5
  },
  {
    name: 'Елена Иванова',
    text: 'Отличный сервис! Помогли с продлением медкнижки, все документы в порядке.',
    rating: 5
  }
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Cross" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">МедДокумент</h1>
              <p className="text-xs text-muted-foreground">Справки и медкнижки</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#how-to-order" className="text-sm font-medium hover:text-primary transition-colors">
              Как заказать
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </a>
            <Button>
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (495) 123-45-67
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white border-t py-4 animate-fade-in">
            <div className="container mx-auto px-4 flex flex-col gap-3">
              <a
                href="#services"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Преимущества
              </a>
              <a
                href="#how-to-order"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Как заказать
              </a>
              <a
                href="#reviews"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Отзывы
              </a>
              <Button className="w-full">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (495) 123-45-67
              </Button>
            </div>
          </nav>
        )}
      </header>

      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Медицинские справки <br />
              <span className="text-primary">быстро и официально</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Оформление всех видов медицинских справок и медкнижек в день обращения. 
              Лицензированная медицинская организация с опытом работы более 10 лет.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">О наших услугах</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Наша медицинская клиника специализируется на оформлении медицинских справок любой сложности. 
                Мы понимаем, как важно получить документ быстро и без лишних хлопот, поэтому создали максимально 
                удобную систему работы.
              </p>
              <p className="mb-4">
                Все справки и медкнижки оформляются в соответствии с действующим законодательством РФ, 
                имеют все необходимые печати и подписи лицензированных врачей. Наши документы принимаются 
                во всех государственных и частных учреждениях.
              </p>
              <p>
                Помимо первичного оформления, мы предлагаем услуги по продлению и переоформлению 
                существующих медицинских документов. Работаем как с физическими, так и с юридическими лицами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4 text-center">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр медицинских справок с официальным оформлением
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="outline">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              * Срочное оформление за 2 часа — дополнительно 1 000 ₽
            </p>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-order" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4 text-center">Как заказать справку</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Простой процесс из 4 шагов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <Icon name={step.icon} className="text-primary mx-auto mb-3" size={32} />
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-muted-foreground" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Отзывы наших клиентов</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{review.text}</p>
                  <p className="font-semibold text-sm">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-center">Оставьте заявку</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Мы свяжемся с вами в течение 10 минут
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Ваш телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
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

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
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
                  +7 (495) 123-45-67
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
  );
}
