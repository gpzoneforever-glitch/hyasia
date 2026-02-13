import { Home, ShoppingBag, MessageSquare, HelpCircle, Headphones, LogIn, UserPlus } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: ShoppingBag, label: "Store" },
  { icon: MessageSquare, label: "Forum" },
  { icon: HelpCircle, label: "Help" },
  { icon: Headphones, label: "Support" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <LogIn className="h-4 w-4" />
            Login
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
