import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-vsok-orange to-vsok-cyan rounded-lg flex items-center justify-center">
                <Icon name="Boxes" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-vsok-navy" style={{ fontFamily: 'Montserrat' }}>VSok</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-vsok-orange transition-colors">Каталог</a>
              <a href="#gallery" className="text-gray-700 hover:text-vsok-orange transition-colors">Галерея</a>
              <a href="#delivery" className="text-gray-700 hover:text-vsok-orange transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-vsok-orange transition-colors">Контакты</a>
              <a href="#faq" className="text-gray-700 hover:text-vsok-orange transition-colors">FAQ</a>
            </div>
            <Button className="bg-vsok-orange hover:bg-vsok-orange/90">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-vsok-navy mb-6 animate-scale-in" 
              style={{ fontFamily: 'Montserrat' }}>
            3D Фигурки
            <span className="block bg-gradient-to-r from-vsok-orange via-vsok-cyan to-vsok-blue bg-clip-text text-transparent">
              Высшего Качества
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            От шестеренок до игровых моделей — печатаем на полимерном принтере с разрешением 12К. 
            Каждая деталь идеальна!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-vsok-orange to-vsok-cyan hover:opacity-90 text-white font-semibold px-8">
              <Icon name="Eye" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="border-vsok-blue text-vsok-blue hover:bg-vsok-blue hover:text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-orange to-vsok-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Качество 12К
              </h3>
              <p className="text-gray-600">Невероятная детализация благодаря технологии высокого разрешения</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-cyan to-vsok-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Быстрая доставка
              </h3>
              <p className="text-gray-600">Отправляем заказы в день обращения по всей России</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-blue to-vsok-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Индивидуальный заказ
              </h3>
              <p className="text-gray-600">Печатаем по вашим 3D-моделям любой сложности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-vsok-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
            Популярные модели
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Самые востребованные 3D фигурки от наших клиентов
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/d5d93540-4f6a-46d6-8302-34c76f1e090e.jpg" 
                    alt="3D игровая фигурка"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-vsok-navy" style={{ fontFamily: 'Montserrat' }}>
                    Игровые фигурки
                  </CardTitle>
                  <Badge className="bg-vsok-cyan text-white">ХИТ</Badge>
                </div>
                <CardDescription className="mb-4">
                  Детализированные персонажи для настольных игр и коллекционирования
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-vsok-orange">от 299₽</span>
                  <Button size="sm" className="bg-vsok-orange hover:bg-vsok-orange/90">
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/2f64b8d7-9e61-46ce-8937-ff0821186898.jpg" 
                    alt="3D шестеренки"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-vsok-navy" style={{ fontFamily: 'Montserrat' }}>
                    Механические детали
                  </CardTitle>
                  <Badge variant="outline" className="border-vsok-blue text-vsok-blue">ТОЧНОСТЬ</Badge>
                </div>
                <CardDescription className="mb-4">
                  Шестеренки, подшипники и другие технические компоненты
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-vsok-orange">от 159₽</span>
                  <Button size="sm" className="bg-vsok-orange hover:bg-vsok-orange/90">
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/88d9f6eb-d057-422f-b630-8d82330540c3.jpg" 
                    alt="3D коллекция фигурок"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-vsok-navy" style={{ fontFamily: 'Montserrat' }}>
                    Коллекционные наборы
                  </CardTitle>
                  <Badge className="bg-vsok-gold text-white">СКИДКА</Badge>
                </div>
                <CardDescription className="mb-4">
                  Готовые наборы фигурок со скидкой до 30%
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-vsok-orange">от 999₽</span>
                  <Button size="sm" className="bg-vsok-orange hover:bg-vsok-orange/90">
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-vsok-cyan text-vsok-cyan hover:bg-vsok-cyan hover:text-white">
              <Icon name="Grid3x3" size={20} className="mr-2" />
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-r from-vsok-cyan/10 to-vsok-blue/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-vsok-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
            Галерея работ
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Примеры наших лучших работ в качестве 12К
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-white/50 rounded-lg hover-scale cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Icon name="Image" size={32} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-vsok-navy mb-12" style={{ fontFamily: 'Montserrat' }}>
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/50 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold text-vsok-navy hover:text-vsok-orange">
                Какое качество печати вы гарантируете?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Мы используем полимерные принтеры с разрешением 12К, что обеспечивает исключительную детализацию. 
                Каждая модель проходит контроль качества перед отправкой.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/50 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold text-vsok-navy hover:text-vsok-orange">
                Сколько времени занимает печать и доставка?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Печать стандартных моделей занимает 1-2 дня, сложные проекты — до 5 дней. 
                Доставка по России занимает от 2 до 7 рабочих дней в зависимости от региона.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/50 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold text-vsok-navy hover:text-vsok-orange">
                Можете ли вы напечатать мою собственную модель?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Конечно! Мы принимаем файлы в форматах STL, OBJ, PLY. Перед печатью наши специалисты 
                проверят модель на технологичность и при необходимости предложат оптимизацию.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/50 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold text-vsok-navy hover:text-vsok-orange">
                Какие материалы вы используете?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Мы работаем с высококачественными фотополимерными смолами различных цветов и свойств: 
                стандартные, прочные, гибкие, прозрачные и специальные материалы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-vsok-navy mb-12" style={{ fontFamily: 'Montserrat' }}>
            Доставка и оплата
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-vsok-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Способы доставки
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={16} className="text-vsok-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">Курьером по Москве</h4>
                    <p className="text-gray-600">Доставка в день заказа — 300₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Package" size={16} className="text-vsok-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">Почта России</h4>
                    <p className="text-gray-600">По всей стране — от 200₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Truck" size={16} className="text-vsok-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">СДЭК</h4>
                    <p className="text-gray-600">До пункта выдачи — от 150₽</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-vsok-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Способы оплаты
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CreditCard" size={16} className="text-vsok-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">Банковские карты</h4>
                    <p className="text-gray-600">Visa, MasterCard, МИР</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Smartphone" size={16} className="text-vsok-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">Электронные кошельки</h4>
                    <p className="text-gray-600">ЮMoney, QIWI, WebMoney</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-vsok-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Banknote" size={16} className="text-vsok-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vsok-navy">Наличные</h4>
                    <p className="text-gray-600">При получении заказа</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-vsok-navy mb-12" style={{ fontFamily: 'Montserrat' }}>
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-orange to-vsok-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Телефон
              </h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
            </div>

            <div className="hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-cyan to-vsok-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Email
              </h3>
              <p className="text-gray-600">orders@vsok.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </div>

            <div className="hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-vsok-blue to-vsok-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-vsok-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
                Telegram
              </h3>
              <p className="text-gray-600">@vsok_support</p>
              <p className="text-sm text-gray-500">Быстрые ответы 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vsok-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-vsok-orange to-vsok-cyan rounded-lg flex items-center justify-center">
                  <Icon name="Boxes" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat' }}>VSok</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Профессиональная 3D печать высокого качества для ваших проектов
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-vsok-orange transition-colors">Игровые фигурки</a></li>
                <li><a href="#" className="hover:text-vsok-orange transition-colors">Механические детали</a></li>
                <li><a href="#" className="hover:text-vsok-orange transition-colors">Коллекционные модели</a></li>
                <li><a href="#" className="hover:text-vsok-orange transition-colors">Индивидуальные заказы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>Информация</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#delivery" className="hover:text-vsok-cyan transition-colors">Доставка</a></li>
                <li><a href="#faq" className="hover:text-vsok-cyan transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-vsok-cyan transition-colors">Гарантия качества</a></li>
                <li><a href="#" className="hover:text-vsok-cyan transition-colors">Возврат товара</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>orders@vsok.ru</li>
                <li>@vsok_support</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 VSok. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;