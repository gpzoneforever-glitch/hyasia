import { useState, useRef } from "react";

const SplashScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [fading, setFading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleContinue = () => {
    // Start music
    if (!audioRef.current) {
      audioRef.current = new Audio("/bg-music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    audioRef.current.play().catch(() => {});

    setFading(true);
    setTimeout(() => onEnter(), 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/splash-bg.mp4" type="video/mp4" />
      </video>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <button
          onClick={handleContinue}
          className="font-display text-2xl px-10 py-4 rounded-xl border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.5)] active:scale-95"
        >
          CONTINUE
        </button>
        <span className="font-display text-sm text-muted-foreground tracking-widest uppercase">
          Anti Bot
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
