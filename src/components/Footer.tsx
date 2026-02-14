import hyasiaIcon from "@/assets/hyasia-icon.webp";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border bg-gradient-to-t from-[hsl(270_60%_8%)] via-[hsl(260_40%_10%)] to-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img src={hyasiaIcon} alt="Hyasia" className="h-6 w-6" />
          <span>Hyasia Network © 2026</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors">Home</a>
          <a href="https://store.hyasia.net" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors">Store</a>
          <a href="https://discord.gg/hyasia" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors">Discord</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;