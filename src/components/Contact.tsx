import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      title: "Локация",
      value: "Москва, Россия",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: "Github", href: "#", label: "GitHub" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Instagram", href: "#", label: "Instagram" },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Декоративные геометрические фигуры */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200 rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Давайте работать вместе
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готов обсудить ваш проект и найти лучшие решения для ваших задач
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="border-purple-100 hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={method.icon as any}
                    size={20}
                    className="text-purple-600"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <a
                  href={method.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all"
              >
                <Icon name={social.icon as any} size={20} />
              </Button>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-3 rounded-full text-lg hover-scale"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Начать проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
