const GooeyLiquid = () => {
  const blobs = [
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
  { cx: 1300, cy: 45, r: 10 }];


  return (
    <div className="relative w-full overflow-hidden" style={{ height: '180px', marginBottom: '-2px' }}>
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey" />

          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#gooey)' }}>
        {blobs.map((blob, i) => {}





        )}
      </div>
    </div>);

};

export default GooeyLiquid;