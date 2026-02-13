import { useState } from "react";
import { Gamepad2, ShoppingBag, ScrollText, X } from "lucide-react";
import kweebecGif from "@/assets/kweebec.gif";
import rulesCharacter from "@/assets/rules-character.png";

const MainContent = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              ONLINE
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-1">WELCOME TO </h2>
            <h2 className="font-display text-3xl font-bold text-primary text-glow mb-4">​HYASIA TOP HYTALE SERVER PH              </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              We've blended high-performance hosting with unique gameplay features to ensure your Hytale experience is second to none.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => setShowRules(!showRules)}
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors green-glow">

                <ScrollText className="h-4 w-4" />
                Community Rules
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
      </div>

      {showRules &&
      <div className="rounded-xl border border-border bg-card p-6 relative">
          <button
          onClick={() => setShowRules(false)}
          className="absolute top-4 right-4 rounded-sm text-muted-foreground hover:text-foreground transition-colors">

            <X className="h-5 w-5" />
          </button>
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">SERVER RULES</h3>
              <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
                <li><span className="font-semibold text-foreground">Be Kind:</span> No harassment, hate speech, or bullying. Treat every adventurer with respect.</li>
                <li><span className="font-semibold text-foreground">Keep It Clean:</span> Keep chat civil and avoid excessive spam or NSFW content.</li>
                <li><span className="font-semibold text-foreground">No Advertising:</span> Don't promote other servers or services without permission.</li>
                <li><span className="font-semibold text-foreground">Listen to Staff:</span> Our moderators are here to keep the peace. Their word is final.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 hidden sm:block">
              <img alt="Rules character" className="w-52 h-52 object-contain -mb-6 -mr-2" src="/lovable-uploads/16e71af9-9ceb-41e9-a87d-bd7bce25c81c.png" />
            </div>
          </div>
        </div>
      }
    </div>);

};

export default MainContent;