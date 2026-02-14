import { useState } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
import gallery11 from "@/assets/gallery-11.png";
import gallery12 from "@/assets/gallery-12.png";
import gallery13 from "@/assets/gallery-13.png";
import gallery14 from "@/assets/gallery-14.png";
import galleryMascot from "@/assets/gallery-mascot.gif";

const allImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10,
  gallery11, gallery12, gallery13, gallery14,
];

const IMAGES_PER_PAGE = 5;

const BlogSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
  const images = allImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);

  return (
    <div>
      <div className="rounded-xl border border-border bg-card p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Gallery</h3>
            <p className="text-xs text-muted-foreground">We're all about good vibes and great community. Whether you're here to learn, share, or just chill, you're officially part of the family now. We can't wait to get to know you!</p>
          </div>
        </div>
        <img src={galleryMascot} alt="" className="h-20 w-20 object-contain" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {images.map((src, i) => (
          <img
            key={`${page}-${i}`}
            src={src}
            alt=""
            className={`w-full rounded-lg object-cover transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105 hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)] ${i === 0 ? "col-span-2 h-56" : "h-40"}`}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>
        <span className="text-xs text-muted-foreground">
          {page + 1} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
