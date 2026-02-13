import { Trophy, Gift, Heart, ShoppingCart, Package } from "lucide-react";

const avatar = "https://mc-heads.net/avatar/demo/40";

const TopDonors = () => (
  <div className="rounded-xl border border-border bg-card p-4">
    <div className="flex items-center justify-between mb-3">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Trophy className="h-4 w-4 text-gold" />
        En Çok Bağış Yapanlar
      </h4>
      <span className="text-[10px] text-muted-foreground">TÜM ZAMANLAR</span>
    </div>
    <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gold/20 text-xs font-bold text-gold">1</span>
      <img src={avatar} alt="demo" className="h-8 w-8 rounded-full" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">demo</p>
        <p className="text-[10px] text-muted-foreground">admin</p>
      </div>
      <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">17,100.00 Lora coin</span>
    </div>
  </div>
);

const MonthlyDonors = () => (
  <div className="rounded-xl border border-border bg-card p-4">
    <div className="flex items-center justify-between mb-3">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Gift className="h-4 w-4 text-primary" />
        En Çok Bağış Yapanlar
      </h4>
      <span className="text-[10px] text-primary">BU AY</span>
    </div>
    <div className="flex flex-col items-center py-6 text-muted-foreground">
      <Package className="h-8 w-8 mb-2 opacity-40" />
      <p className="text-xs">Veri bulunamadı.</p>
    </div>
  </div>
);

const RecentDonations = () => (
  <div className="rounded-xl border border-border bg-card p-4">
    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
      <Heart className="h-4 w-4 text-destructive" />
      Son Bağışlar
    </h4>
    <div className="space-y-3">
      {[{ amount: "15,000.00" }, { amount: "1,500.00" }].map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <img src={avatar} alt="demo" className="h-8 w-8 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">demo</p>
            <p className="text-[10px] text-muted-foreground">Üstsüz</p>
          </div>
          <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">{d.amount} Lora coin</span>
        </div>
      ))}
    </div>
  </div>
);

const RecentPurchases = () => (
  <div className="rounded-xl border border-border bg-card p-4">
    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
      <ShoppingCart className="h-4 w-4 text-gold" />
      Son Satın Alımlar
    </h4>
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <img src={avatar} alt="demo" className="h-8 w-8 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">demo</p>
            <p className="text-[10px] text-muted-foreground">test12Yandext</p>
          </div>
          <span className="text-[10px] font-semibold text-primary">testürün</span>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="space-y-4">
      <TopDonors />
      <MonthlyDonors />
      <RecentDonations />
      <RecentPurchases />
    </div>
  );
};

export default Sidebar;
