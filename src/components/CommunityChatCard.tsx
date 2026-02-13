import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const CommunityChatCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="Toggle community chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[300px] max-md:inset-0 max-md:bottom-0 max-md:right-0 max-md:w-full max-md:h-full">
          <div className="relative h-[85vh] max-md:h-full rounded-xl border border-border/10 bg-card/60 backdrop-blur-md overflow-hidden shadow-2xl">
            {/* Close on mobile */}
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
