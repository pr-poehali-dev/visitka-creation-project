import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const PromoContact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (800) 123-45-67",
      description: "Бесплатный звонок по России",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "promo@example.com",
      description: "Ответим в течение 2 часов",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@promo_support",
      description: "Онлайн поддержка 24/7",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, ул. Примерная, 123",
      description: "Офис для встреч",
    },
  ];

  const socialLinks = [
    { icon: "Instagram", name: "Instagram", href: "#" },
    { icon: "Facebook", name: "Facebook", href: "#" },
    { icon: "Twitter", name: "Twitter", href: "#" },
    { icon: "Youtube", name: "YouTube", href: "#" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            📞 Свяжитесь с нами
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Есть вопросы о промо-акции? Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                <Icon name={contact.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-xl font-bold text-white mb-2">
                {contact.value}
              </p>
              <p className="text-white/70 text-sm">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                💬 Часто задаваемые вопросы
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-white/30 pl-4">
                  <h4 className="font-semibold text-white mb-1">
                    Как принять участие?
                  </h4>
                  <p className="text-white/80 text-sm">
                    Заполните форму регистрации выше
                  </p>
                </div>
                <div className="border-l-4 border-white/30 pl-4">
                  <h4 className="font-semibold text-white mb-1">
                    Когда объявят результаты?
                  </h4>
                  <p className="text-white/80 text-sm">1 февраля 2025 года</p>
                </div>
                <div className="border-l-4 border-white/30 pl-4">
                  <h4 className="font-semibold text-white mb-1">
                    Можно ли участвовать командой?
                  </h4>
                  <p className="text-white/80 text-sm">
                    Да, до 5 человек в команде
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                🌟 Следите за нами
              </h3>
              <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <Icon name={social.icon} size={20} className="text-white" />
                  </a>
                ))}
              </div>
              <Button className="bg-white text-orange-500 hover:bg-white/90 px-6 py-2 rounded-lg font-semibold">
                <Icon name="Bell" size={16} className="mr-2" />
                Подписаться на обновления
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Промо-акция. Все права защищены.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Условия участия
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoContact;
