import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PromoHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 px-6 relative overflow-hidden">
      {/* Декоративные звезды и блики */}
      <div className="absolute top-10 left-10 text-6xl animate-pulse">⭐</div>
      <div
        className="absolute top-20 right-20 text-4xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-32 left-20 text-5xl animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        💫
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      >
        ⭐
      </div>

      <div className="text-center max-w-6xl mx-auto animate-fade-in relative z-10">
        {/* Логотип торгового центра */}
        <div className="mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 inline-block mb-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white">ТОРГОВЫЙ ЦЕНТР</h3>
            <p className="text-yellow-100 font-semibold">ПЛАНЕТА МОЛЛ</p>
          </div>
        </div>

        {/* Основной заголовок */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 font-montserrat drop-shadow-lg">
            МЕГА-АКЦИЯ
          </h1>
          <div className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text text-4xl md:text-6xl font-bold mb-4">
            ВЫИГРАЙ БЕЛАЗ!
          </div>
        </div>

        {/* Изображение БелАЗа */}
        <div className="mb-8 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 inline-block shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
              alt="Самосвал БелАЗ"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl animate-pulse">
              ГЛАВНЫЙ ПРИЗ!
            </div>
          </div>
        </div>

        <p className="text-2xl md:text-3xl text-yellow-100 mb-8 font-bold drop-shadow">
          Самосвал БелАЗ 75131 стоимостью 15 000 000 рублей
        </p>

        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Делай покупки в нашем торговом центре на сумму от 2000 рублей и
          получай шанс выиграть легендарный карьерный самосвал!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover-scale"
          >
            <Icon name="Gift" className="mr-3" size={24} />
            УЧАСТВОВАТЬ В АКЦИИ
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-3 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
          >
            <Icon name="FileText" className="mr-2" size={20} />
            Правила акции
          </Button>
        </div>

        {/* Акционные стикеры */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg animate-pulse">
            🔥 РОЗЫГРЫШ 31 ДЕКАБРЯ
          </div>
          <div
            className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            ⚡ УЧАСТИЕ БЕСПЛАТНО
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoHero;
