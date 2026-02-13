import { Image } from "lucide-react";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const BlogSection = () => {
  return (
    <div>
      <div className="rounded-xl border border-border bg-card p-6 mb-6 text-center">
        <Image className="mx-auto h-8 w-8 text-primary mb-2" />
        <h3 className="font-display text-xl font-bold text-foreground">Gallery</h3>
        <p className="text-xs text-muted-foreground">Anasayfa › Galeri</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`w-full rounded-lg object-cover ${i === 0 ? "col-span-2 h-56" : "h-40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
