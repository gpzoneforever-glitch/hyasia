import { Home, ShoppingBag, MessageSquare, HelpCircle, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-12">
      




















































      <div className="border-t border-border py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-[10px] text-muted-foreground">Tüm hakları saklıdır. © 2026</p>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">Powered by LoaderOS</span>
            <span className="rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">Designed by Gamalize</span>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;