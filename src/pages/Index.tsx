import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import MainContent from "@/components/MainContent";
import DiscordWidget from "@/components/DiscordWidget";
import BlogSection from "@/components/BlogSection";
import CommunityChatCard from "@/components/CommunityChatCard";
import Footer from "@/components/Footer";
import FairyDust from "@/components/FairyDust";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FairyDust />
      <Navbar />
      <HeroSection />
      <StatsBar />

      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <MainContent />
            <BlogSection />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <DiscordWidget />
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <iframe
                src="https://e.widgetbot.io/channels/1450896701106688165/1460981707413913781"
                width="100%"
                height="600"
                allow="clipboard-write; fullscreen"
                className="w-full"
                title="Community Chat"
              />
            </div>
          </div>
        </div>
      </main>

      <CommunityChatCard />
      
      <Footer />
    </div>
  );
};

export default Index;
