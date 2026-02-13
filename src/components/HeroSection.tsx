import { Copy } from "lucide-react";
import heroBg from "@/assets/hero-bg.gif";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-32">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="font-display text-6xl font-bold tracking-tight text-foreground text-glow mb-4">
          HYTERRA
        </h1>
        <p className="max-w-lg text-muted-foreground mb-8">
          En iyi oyun deneyimine katılın. İmparatorluğunuzu kurun, diğerleriyle savaşın
          ve dünyanın hakimi olun!
        </p>
        <button className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
          <Copy className="h-4 w-4" />
          play.hyterra.com
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
