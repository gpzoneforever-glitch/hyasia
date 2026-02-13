import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import MainContent from "@/components/MainContent";
import DiscordWidget from "@/components/DiscordWidget";
import BlogSection from "@/components/BlogSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CommunityChatCard from "@/components/CommunityChatCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <Sidebar />
          </div>
        </div>
      </main>

      <CommunityChatCard />
      <Footer />
    </div>
  );
};

export default Index;
