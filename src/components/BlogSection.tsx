import { BookOpen, Calendar, ArrowRight, Eye } from "lucide-react";
import blogThumb from "@/assets/blog-thumb.jpg";

const BlogSection = () => {
  return (
    <div>
      <div className="rounded-xl border border-border bg-card p-6 mb-6 text-center">
        <BookOpen className="mx-auto h-8 w-8 text-primary mb-2" />
        <h3 className="font-display text-xl font-bold text-foreground">Blog</h3>
        <p className="text-xs text-muted-foreground">Anasayfa › Son Haberler</p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden max-w-sm">
        <div className="relative">
          <img src={blogThumb} alt="Blog post" className="h-44 w-full object-cover" />
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-primary/90 px-2 py-1 text-[10px] font-semibold text-primary-foreground">The party just got better because YOU are here!
            <Calendar className="h-3 w-3" />
            11 Dec, 2025
          </span>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-foreground mb-1">test</h4>
          <p className="text-xs text-muted-foreground mb-3">test...</p>
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
              Devamını Oku <ArrowRight className="h-3 w-3" />
            </button>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="h-8 w-8 rounded-lg bg-secondary text-muted-foreground text-xs">&lt;</button>
        <button className="h-8 w-8 rounded-lg bg-primary text-primary-foreground text-xs font-bold">1</button>
        <button className="h-8 w-8 rounded-lg bg-secondary text-muted-foreground text-xs">&gt;</button>
      </div>
    </div>);

};

export default BlogSection;