import { useState, useEffect } from "react";
import { Signal } from "lucide-react";

const LiveSignal = () => {
  const [level, setLevel] = useState<"good" | "mid" | "bad">("good");

  useEffect(() => {
    const update = () => {
      const rand = Math.random();
      setLevel(rand > 0.4 ? "good" : rand > 0.15 ? "mid" : "bad");
    };
    const interval = setInterval(update, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  const color = level === "good" ? "text-primary" : level === "mid" ? "text-amber-500" : "text-red-500";

  return <Signal className={`h-5 w-5 transition-colors duration-500 ${color}`} />;
};

const stats = [
{ label: "SERVER", live: true },
{ label: "WEBSITE", live: true },
{ label: "DISCORD", live: true }];


const StatsBar = () => {
  return (
    <div className="container mx-auto px-4 -mt-6 relative z-20">
      <div className="rounded-xl overflow-hidden border border-border">
        <div className="grid grid-cols-3 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-4 flex items-center gap-3">
              <LiveSignal />
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
        <img alt="Banner" className="w-full h-auto block" src="/lovable-uploads/ca3a35e1-170b-4e41-981f-51e4d5dd3e5e.png" />
      </div>
    </div>);

};

export default StatsBar;