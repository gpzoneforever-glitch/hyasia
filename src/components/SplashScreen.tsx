import { useState, useRef, useEffect } from "react";

const SplashScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [fading, setFading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Simulate preloading assets
    const images = [
      "/lovable-uploads/c8e3b353-a6a1-4689-83d2-abbb29a18db9.png",
      "/splash-bg.mp4",
    ];

    let loaded = 0;
    const total = images.length + 1; // +1 for simulated delay

    const tick = () => {
      loaded++;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded >= total) {
        setTimeout(() => setLoading(false), 300);
      }
    };

    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = tick;
      img.onerror = tick;
    });

    // Simulated extra load step
    setTimeout(tick, 1500);
  }, []);

  const handleContinue = () => {
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
        {loading ? (
          /* Loading state */
          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-xl text-primary text-glow">
              Loading...
            </span>
            <div className="w-56 h-3 rounded-full border border-border bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out green-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-display text-sm text-muted-foreground">
              {progress}%
            </span>
          </div>
        ) : (
          /* Ready state */
          <>
            <button
              onClick={handleContinue}
              className="font-display text-2xl px-10 py-4 rounded-xl border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.5)] active:scale-95 animate-pulse"
            >
              CONTINUE
            </button>
            <span className="font-display text-sm text-muted-foreground tracking-widest uppercase">
              Anti Bot
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
