import Icon from "@/components/ui/icon";

const PromoRules = () => {
  const rules = [
    {
      icon: "Trophy",
      title: "Участвуйте в конкурсе",
      description:
        "Создайте креативный проект и получите шанс выиграть главный приз",
    },
    {
      icon: "Calendar",
      title: "Соблюдайте сроки",
      description: "Подайте заявку до окончания срока регистрации",
    },
    {
      icon: "Users",
      title: "Командная работа",
      description:
        "Можно участвовать как индивидуально, так и в команде до 5 человек",
    },
    {
      icon: "Award",
      title: "Честная игра",
      description:
        "Все работы должны быть оригинальными и созданными специально для конкурса",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🏆 Правила участия
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Следуйте простым правилам и станьте победителем нашей промо-акции
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                <Icon name={rule.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {rule.title}
              </h3>
              <p className="text-white/80 text-center leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            📋 Дополнительные условия
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/90">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Возраст участников: от 18 лет
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Регистрация до 31 декабря 2024
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Подача работ до 15 января 2025
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Объявление результатов: 1 февраля
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Вручение призов: в течение 14 дней
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-300" />
                Поддержка участников 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoRules;
