const GooeyLiquid = () => {
  return (
    <div className="relative w-full overflow-hidden -mb-px" style={{ height: '220px' }}>
      {/* SVG Filter for gooey effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="gooey"
            />
          </filter>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#gooey)' }}>
        {/* Base wave - attached to bottom */}
        <svg
          viewBox="0 0 1440 220"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,220 L0,140 Q40,70 100,120 Q160,170 220,90 Q280,20 360,80 Q420,130 480,60 Q540,0 620,70 Q680,120 740,50 Q820,-10 900,80 Q960,140 1020,60 Q1080,0 1160,90 Q1220,150 1280,70 Q1340,10 1400,100 Q1430,130 1440,110 L1440,220 Z"
            fill="url(#liquidGradient)"
          />
        </svg>

        {/* Large dramatic dripping blobs */}
        {[
          { cx: 80, cy: 100, r: 30 },
          { cx: 200, cy: 70, r: 22 },
          { cx: 320, cy: 120, r: 35 },
          { cx: 450, cy: 60, r: 18 },
          { cx: 560, cy: 90, r: 28 },
          { cx: 700, cy: 110, r: 32 },
          { cx: 820, cy: 55, r: 20 },
          { cx: 950, cy: 80, r: 26 },
          { cx: 1080, cy: 100, r: 30 },
          { cx: 1200, cy: 65, r: 24 },
          { cx: 1350, cy: 95, r: 28 },
          // Small floating bubbles
          { cx: 150, cy: 45, r: 10 },
          { cx: 380, cy: 35, r: 7 },
          { cx: 620, cy: 30, r: 9 },
          { cx: 780, cy: 25, r: 6 },
          { cx: 1000, cy: 40, r: 8 },
          { cx: 1150, cy: 30, r: 5 },
          { cx: 1300, cy: 50, r: 11 },
          { cx: 500, cy: 20, r: 5 },
          { cx: 900, cy: 15, r: 4 },
        ].map((blob, i) => (
          <svg
            key={i}
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <circle
              cx={blob.cx}
              cy={220 - blob.cy}
              r={blob.r}
              fill="url(#liquidGradient)"
            >
              <animate
                attributeName="cy"
                values={`${220 - blob.cy};${220 - blob.cy - 15};${220 - blob.cy}`}
                dur={`${1.8 + i * 0.25}s`}
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              />
              <animate
                attributeName="r"
                values={`${blob.r};${blob.r + 4};${blob.r}`}
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.1}s`}
              />
            </circle>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default GooeyLiquid;
