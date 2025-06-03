import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce платформа",
      description:
        "Современная платформа онлайн-торговли с интуитивным интерфейсом",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Мобильное приложение",
      description: "Дизайн и прототип для финтех приложения",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["UI/UX", "Figma", "Prototyping"],
      link: "#",
    },
    {
      title: "Корпоративный сайт",
      description: "Адаптивный сайт для технологической компании",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "CMS", "SEO"],
      link: "#",
    },
    {
      title: "Дашборд аналитики",
      description: "Интерактивная панель с визуализацией данных",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Charts"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Портфолио
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Избранные проекты, которые демонстрируют мой подход к решению задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ExternalLink" className="text-white" size={24} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
