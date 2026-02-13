import { Users, MessageCircle, Signal } from "lucide-react";
import banner from "@/assets/banner.gif";

const stats = [
{ icon: Users, value: "-", label: "ÇEVRİMİÇİ" },
{ icon: MessageCircle, value: "966", label: "DISCORD" },
{ icon: Signal, value: "✓", label: "SERVER STATUS", color: "text-primary" }];


const StatsBar = () => {
  return (
    <div className="container mx-auto px-4 -mt-6 relative z-20">
      <div className="rounded-xl overflow-hidden border border-border">
        <div className="grid grid-cols-3 gap-px bg-border">
          {stats.map((stat) =>
          <div key={stat.label} className="flex flex-col items-center gap-1 bg-card py-5">
              <stat.icon className={`h-5 w-5 ${stat.color || "text-muted-foreground"}`} />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs font-medium tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          )}
        </div>
        <img alt="Banner" className="w-full h-auto block" src="/lovable-uploads/ca3a35e1-170b-4e41-981f-51e4d5dd3e5e.png" />
      </div>
    </div>);

};

export default StatsBar;