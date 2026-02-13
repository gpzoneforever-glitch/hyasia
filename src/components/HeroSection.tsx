import { Copy, Users, Gamepad2, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.gif";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-44">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-6 mb-4">
          {/* Players Online Card */}
          <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm px-5 py-3">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-lg font-bold text-foreground">23968 PLAYERS ONLINE</p>
              <p className="text-xs font-semibold text-muted-foreground tracking-wider">MC.HYASIA.NET</p>
            </div>
          </div>

          {/* Logo */}
          <img src={logo} alt="HyAsia Logo" className="w-40 h-40 drop-shadow-2xl" />

          {/* Users Online Card */}
          <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm px-5 py-3">
            <MessageCircle className="h-8 w-8 text-discord" />
            <div className="text-left">
              <p className="text-lg font-bold text-foreground">391 USERS ONLINE</p>
              <p className="text-xs font-semibold text-muted-foreground tracking-wider">DISCORD.GG/HYASIA</p>
            </div>
          </div>
        </div>

        <h1 className="font-display text-6xl font-bold tracking-tight text-foreground text-glow mb-4">
          HYASIA
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
