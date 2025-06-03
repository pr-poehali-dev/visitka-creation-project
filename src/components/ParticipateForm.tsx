import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ParticipateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    projectDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Принять участие
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Заполните форму регистрации и станьте участником нашей промо-акции
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Имя и фамилия *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Телефон
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Название команды
                </label>
                <Input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Опционально для команд"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Описание проекта
              </label>
              <Textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Расскажите о вашей идее проекта..."
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
              <Icon name="Info" size={20} className="text-blue-300" />
              <p className="text-white/90 text-sm">
                Поля отмеченные * обязательны для заполнения. Ваши данные
                защищены и не передаются третьим лицам.
              </p>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-white text-orange-500 hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            После отправки заявки вы получите подтверждение на email в течение
            24 часов
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParticipateForm;
