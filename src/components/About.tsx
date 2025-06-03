import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Более 5 лет создаю цифровые продукты, которые решают реальные
              задачи бизнеса. Специализируюсь на React, TypeScript и современных
              веб-технологиях.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Верю, что хороший дизайн и качественный код идут рука об руку.
              Каждый проект подхожу с вниманием к деталям и фокусом на
              результат.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Проектов</div>
                </CardContent>
              </Card>
              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600">Лет опыта</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Александр Петров"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
