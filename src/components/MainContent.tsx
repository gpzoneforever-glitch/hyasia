import { Gamepad2, ShoppingBag } from "lucide-react";
import characterImg from "@/assets/character.png";
import kweebecGif from "@/assets/kweebec.gif";

const MainContent = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            ŞİMDİ AKTİF
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mb-1">WELCOME TO </h2>
          <h2 className="font-display text-3xl font-bold text-primary text-glow mb-4">​HYASIA TOP HYTALE SERVER PH              </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm">
            We’ve blended high-performance hosting with unique gameplay features to ensure your Hytale experience is second to none.
          

          </p>
          <div className="flex items-center gap-3 mb-8">
            <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors green-glow">
              <Gamepad2 className="h-4 w-4" />
              Şimdi Oyna
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              <ShoppingBag className="h-4 w-4" />
              Mağaza
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center flex-shrink-0">
          <img src={kweebecGif} alt="Kweebec character" className="w-64 h-64 object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]" />
        </div>
      </div>
    </div>);

};

export default MainContent;