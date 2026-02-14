import { useState, useRef, useEffect, useCallback } from "react";

const ASSETS_TO_PRELOAD = [
  "/lovable-uploads/c8e3b353-a6a1-4689-83d2-abbb29a18db9.png",
  "/lovable-uploads/16e71af9-9ceb-41e9-a87d-bd7bce25c81c.png",
  "/lovable-uploads/ca3a35e1-170b-4e41-981f-51e4d5dd3e5e.png",
];

const ASSET_LABELS = [
  "Loading textures...",
  "Loading world data...",
  "Loading UI assets...",
  "Initializing audio...",
  "Preparing environment...",
  "Almost ready...",
];

const SplashScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [phase, setPhase] = useState<"splash" | "loading" | "fading">("splash");
  const [progress, setProgress] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(ASSET_LABELS[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startLoading = useCallback(() => {
    // Start music
    if (!audioRef.current) {
      const audio = new Audio("/bg-music.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      audio.setAttribute("data-bg-music", "true");
      document.body.appendChild(audio);
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {});

    setPhase("loading");

    let loaded = 0;
    const totalSteps = ASSETS_TO_PRELOAD.length + 3; // images + simulated steps

    const advance = () => {
      loaded++;
      const pct = Math.round((loaded / totalSteps) * 100);
      setProgress(pct);
      setCurrentLabel(ASSET_LABELS[Math.min(loaded, ASSET_LABELS.length - 1)]);

      if (loaded >= totalSteps) {
        setTimeout(() => {
          setPhase("fading");
          setTimeout(() => onEnter(), 800);
        }, 400);
      }
    };

    // Preload images
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = advance;
      img.onerror = advance;
    });

    // Simulated steps with staggered delays
    setTimeout(advance, 800);
    setTimeout(advance, 1600);
    setTimeout(advance, 2200);
  }, [onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/splash-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        {phase === "splash" ? (
          <>
            <button
              onClick={startLoading}
              className="font-display text-2xl px-10 py-4 rounded-xl border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.5)] active:scale-95 animate-pulse"
            >
              CONTINUE
            </button>
            <span className="font-display text-sm text-muted-foreground tracking-widest uppercase">
              Anti Bot
            </span>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 w-72">
            <span className="font-display text-xl text-primary text-glow">
              {progress}%
            </span>
            <div className="w-full h-3 rounded-full border border-border bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out green-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-display text-xs text-muted-foreground tracking-wide animate-pulse">
              {currentLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
