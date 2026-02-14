import { useState } from "react";
import { ShoppingBag, ScrollText, Users, X } from "lucide-react";
import kweebecGif from "@/assets/kweebec.gif";
import staffIwanderinglich from "@/assets/staff-iwanderinglich.png";
import staffTinidor from "@/assets/staff-tinidor.png";
import staffYuki from "@/assets/staff-yuki.png";

const MainContent = () => {
  const [showRules, setShowRules] = useState(false);
  const [showStaff, setShowStaff] = useState(false);

  const staffMembers = [
    { name: "tinidor", role: "owner", image: staffTinidor },
    { name: "iWanderingLich", role: "staff", image: staffIwanderinglich },
    { name: "yuki", role: "developer", image: staffYuki },
  ];

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
                onClick={() => { setShowRules(!showRules); setShowStaff(false); }}
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_8px_24px_hsl(142_70%_45%/0.3)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 green-glow"
                style={{ perspective: "600px" }}>
                <ScrollText className="h-4 w-4" />
                Community Rules
              </button>
              <a href="https://store.hyasia.net/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-[0_8px_24px_hsl(0_0%_0%/0.4)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95"
                style={{ perspective: "600px" }}>
                <ShoppingBag className="h-4 w-4" />
                Store
              </a>
              <button
                onClick={() => { setShowStaff(!showStaff); setShowRules(false); }}
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-[0_8px_24px_hsl(0_0%_0%/0.4)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95"
                style={{ perspective: "600px" }}>
                <Users className="h-4 w-4" />
                Staff Team
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
              <img alt="Rules character" className="w-40 h-40 object-contain" src="/lovable-uploads/16e71af9-9ceb-41e9-a87d-bd7bce25c81c.png" />
            </div>
          </div>
        </div>
      }

      {showStaff &&
        <div className="rounded-xl border border-border bg-card p-6 relative">
          <button
            onClick={() => setShowStaff(false)}
            className="absolute top-4 right-4 rounded-sm text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">STAFF TEAM</h3>
          <div className="grid grid-cols-3 gap-6">
            {staffMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-contain mb-3 drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]" />
                <span className="font-display text-lg font-bold text-foreground">{member.name}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      }
    </div>);

};

export default MainContent;