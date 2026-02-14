import { useState, useEffect } from "react";
import { Signal } from "lucide-react";

const PingIndicator = () => {
  const [pingLevel, setPingLevel] = useState(4); // 1-4 bars

  useEffect(() => {
    const interval = setInterval(() => {
      setPingLevel(Math.floor(Math.random() * 4) + 1);
    }, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  // green for good (3-4), orange for mid (2), red for bad (1)
  const color = pingLevel >= 3 ? "hsl(var(--primary))" : pingLevel === 2 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex items-end gap-[2px] h-5">
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className="w-[3px] rounded-sm transition-all duration-500"
          style={{
            height: `${bar * 4 + 4}px`,
            backgroundColor: bar <= pingLevel ? color : "hsl(var(--muted-foreground) / 0.2)",
          }}
        />
      ))}
    </div>
  );
};

const stats = [
  { label: "SERVER", usesPing: true },
  { label: "WEBSITE", usesPing: true },
  { icon: Signal, label: "DISCORD", color: "text-primary" },
];

const StatsBar = () => {
  return (
    <div className="container mx-auto px-4 -mt-6 relative z-20">
      <div className="rounded-xl overflow-hidden border border-border">
        <div className="grid grid-cols-3 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-card py-5">
              {stat.usesPing ? (
                <PingIndicator />
              ) : (
                stat.icon && <stat.icon className={`h-5 w-5 ${stat.color || "text-muted-foreground"}`} />
              )}
              <span className="text-xs font-medium tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
        <img alt="Banner" className="w-full h-auto block" src="/lovable-uploads/ca3a35e1-170b-4e41-981f-51e4d5dd3e5e.png" />
      </div>
    </div>
  );
};

export default StatsBar;
