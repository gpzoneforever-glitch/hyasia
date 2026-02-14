import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Volume2, VolumeX, Pause, Play } from "lucide-react";

const CommunityChatCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.4);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Find or create the global audio element
    const existing = document.querySelector("audio[data-bg-music]") as HTMLAudioElement;
    if (existing) {
      audioRef.current = existing;
      setIsPlaying(!existing.paused);
      setVolume(existing.volume);
      setMuted(existing.muted);
    }
  }, []);

  const togglePlay = () => {
    // Try to grab audio if not yet found
    if (!audioRef.current) {
      const el = document.querySelector("audio[data-bg-music]") as HTMLAudioElement;
      if (!el) return;
      audioRef.current = el;
    }
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setMuted(audioRef.current.muted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
      if (v > 0 && audioRef.current.muted) {
        audioRef.current.muted = false;
        setMuted(false);
      }
    }
  };

  return (
    <>
      {/* Music + Chat controls stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Pause/Play */}
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-transform hover:scale-110 hover:bg-secondary"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        {/* Volume */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={toggleMute}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-transform hover:scale-110 hover:bg-secondary"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : volume}
            onChange={handleVolume}
            className="w-10 h-1 accent-primary cursor-pointer [writing-mode:vertical-lr] rotate-180 origin-center"
            style={{ height: 60 }}
            aria-label="Volume"
          />
        </div>

        {/* Chat toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
          aria-label="Toggle community chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[300px] max-md:inset-0 max-md:bottom-0 max-md:right-0 max-md:w-full max-md:h-full">
          <div className="relative h-[85vh] max-md:h-full rounded-xl border border-border/10 bg-card/60 backdrop-blur-md overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-background/80 p-1.5 md:hidden"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
            <iframe
              src="https://e.widgetbot.io/channels/1450896701106688165/1460981707413913781"
              width="100%"
              height="100%"
              allow="clipboard-write; fullscreen"
              className="w-full h-full"
              title="Community Chat"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityChatCard;
