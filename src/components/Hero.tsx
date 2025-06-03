import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50 px-6 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 bg-purple-400 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="text-center max-w-4xl mx-auto animate-fade-in relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
              alt="Александр Петров"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-montserrat">
          Александр Петров
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Frontend разработчик & UI/UX дизайнер
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Создаю современные веб-приложения и цифровые продукты с фокусом на
          пользовательский опыт и чистый код
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
          >
            <Icon name="Mail" className="mr-2" size={20} />
            Связаться со мной
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full"
          >
            <Icon name="Download" className="mr-2" size={20} />
            Скачать резюме
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
