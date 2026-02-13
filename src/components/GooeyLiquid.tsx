const GooeyLiquid = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '180px', marginBottom: '-2px' }}>
      {/* SVG Filter for gooey effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#gooey)' }}>
        {/* Base wave */}
        <svg
          viewBox="0 0 1440 180"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path
            d="M0,180 L0,120 Q60,60 120,100 Q180,140 240,90 Q320,30 400,80 Q460,120 520,70 Q600,10 680,60 Q740,100 800,50 Q880,0 960,70 Q1020,110 1080,60 Q1160,10 1240,80 Q1320,130 1380,90 Q1420,70 1440,80 L1440,180 Z"
            fill="hsl(var(--primary))"
          />
        </svg>

        {/* Dripping blobs */}
        {[
          { cx: 120, cy: 75, r: 22 },
          { cx: 350, cy: 50, r: 18 },
          { cx: 500, cy: 85, r: 12 },
          { cx: 680, cy: 45, r: 25 },
          { cx: 850, cy: 65, r: 15 },
          { cx: 1000, cy: 55, r: 20 },
          { cx: 1200, cy: 70, r: 16 },
          { cx: 200, cy: 40, r: 8 },
          { cx: 600, cy: 35, r: 6 },
          { cx: 900, cy: 30, r: 7 },
          { cx: 1100, cy: 40, r: 5 },
          { cx: 750, cy: 25, r: 9 },
          { cx: 400, cy: 30, r: 5 },
          { cx: 1300, cy: 45, r: 10 },
        ].map((blob, i) => (
          <svg
            key={i}
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            style={{ height: '100%' }}
          >
            <circle
              cx={blob.cx}
              cy={180 - blob.cy}
              r={blob.r}
              fill="hsl(var(--primary))"
            >
              <animate
                attributeName="cy"
                values={`${180 - blob.cy};${180 - blob.cy - 8};${180 - blob.cy}`}
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
              <animate
                attributeName="r"
                values={`${blob.r};${blob.r + 2};${blob.r}`}
                dur={`${2.5 + i * 0.2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              />
            </circle>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default GooeyLiquid;
