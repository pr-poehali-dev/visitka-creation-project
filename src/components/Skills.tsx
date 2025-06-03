import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "Code",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Дизайн",
      icon: "Palette",
      skills: [
        "Figma",
        "Adobe XD",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Инструменты",
      icon: "Settings",
      skills: [
        "Git",
        "VS Code",
        "Webpack",
        "Vite",
        "npm/yarn",
        "API Integration",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Навыки и технологии
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современный стек технологий для создания качественных цифровых
            продуктов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={category.icon as any}
                    size={28}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                    >
                      {skill}
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

export default Skills;
