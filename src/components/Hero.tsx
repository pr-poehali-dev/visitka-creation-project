import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50 px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-2xl">
            <span className="text-4xl text-white font-bold">А</span>
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
