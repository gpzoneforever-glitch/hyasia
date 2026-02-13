import { Home, ShoppingBag, MessageSquare, HelpCircle, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h5 className="font-semibold text-foreground mb-3">Hakkımızda</h5>
            <p className="text-xs text-muted-foreground mb-4">
              Bu menü Yönetici Panelinden düzenlenebilir.niz
            </p>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-secondary px-3 py-1.5 text-xs text-muted-foreground">🇹🇷 Türkçe</span>
              <span className="rounded-lg bg-secondary px-3 py-1.5 text-xs text-muted-foreground">₺ TL</span>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Hızlı Menü</h5>
            <ul className="space-y-2">
              {[
                { icon: Home, label: "Anasayfa" },
                { icon: ShoppingBag, label: "Mağaza" },
                { icon: MessageSquare, label: "Forum" },
                { icon: HelpCircle, label: "Yardım" },
                { icon: Headphones, label: "Destek" },
              ].map((item) => (
                <li key={item.label}>
                  <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Sosyal Medya</h5>
            <ul className="space-y-2">
              {["Facebook", "Instagram", "X", "Youtube", "TikTok", "Discord"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Bağlantılar</h5>
            <ul className="space-y-2">
              {["Kurallar", "Hizmet Şartları", "Gizlilik Politikası"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-[10px] text-muted-foreground">Tüm hakları saklıdır. © 2026</p>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">Powered by LoaderOS</span>
            <span className="rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">Designed by Gamalize</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
