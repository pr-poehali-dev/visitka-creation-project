import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PrizeFund = () => {
  const prizes = [
    {
      place: "1 место",
      title: "Самосвал БелАЗ 75131",
      value: "15 000 000 ₽",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      badge: "ГЛАВНЫЙ ПРИЗ",
      color: "from-yellow-400 to-orange-500",
    },
    {
      place: "2 место",
      title: "Автомобиль Toyota Camry",
      value: "2 500 000 ₽",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
      badge: "СУПЕР ПРИЗ",
      color: "from-blue-400 to-purple-500",
    },
    {
      place: "3 место",
      title: "Мотоцикл Harley Davidson",
      value: "1 200 000 ₽",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      badge: "МЕГА ПРИЗ",
      color: "from-green-400 to-blue-500",
    },
  ];

  const additionalPrizes = [
    "50 сертификатов по 50 000 ₽",
    "100 сертификатов по 25 000 ₽",
    "200 сертификатов по 10 000 ₽",
    "500 сертификатов по 5 000 ₽",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-montserrat">
            🏆 ПРИЗОВОЙ ФОНД
          </h2>
          <div className="text-3xl font-bold text-yellow-300 mb-4">
            Свыше 25 миллионов рублей!
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Тысячи призов ждут своих обладателей
          </p>
        </div>

        {/* Главные призы */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <Card
              key={prize.place}
              className={`relative border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in overflow-hidden bg-gradient-to-br ${prize.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white font-bold px-3 py-1">
                  {prize.badge}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </div>
                <CardTitle className="text-2xl font-black text-white">
                  {prize.place}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-4 relative overflow-hidden rounded-xl">
                  <img
                    src={prize.image}
                    alt={prize.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {prize.title}
                </h3>
                <div className="text-3xl font-black text-yellow-200">
                  {prize.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительные призы */}
        <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white mb-4">
              💰 А ТАКЖЕ МНОЖЕСТВО ДРУГИХ ПРИЗОВ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalPrizes.map((prize, index) => (
                <div
                  key={index}
                  className="bg-white/20 rounded-xl p-4 text-center"
                >
                  <div className="text-xl font-bold text-white">{prize}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="text-2xl font-bold text-yellow-300">
                🎁 Каждый участник получает гарантированный приз!
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrizeFund;
