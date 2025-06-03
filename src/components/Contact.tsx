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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
