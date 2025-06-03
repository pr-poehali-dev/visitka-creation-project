import PromoHero from "@/components/PromoHero";
import PromoRules from "@/components/PromoRules";
import PrizeFund from "@/components/PrizeFund";
import ParticipateForm from "@/components/ParticipateForm";
import PromoTimer from "@/components/PromoTimer";
import PromoContact from "@/components/PromoContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-red-500">
      <PromoHero />
      <PromoTimer />
      <PrizeFund />
      <PromoRules />
      <ParticipateForm />
      <PromoContact />
    </div>
  );
};

export default Index;
