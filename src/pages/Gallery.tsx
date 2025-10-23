import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import headerBg from "@/assets/header-gallery.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

// Sample gallery images
const galleryImages = [
  { id: 1, src: gallery1, category: "tournament", caption: "Match Day Action" },
  { id: 2, src: gallery2, category: "training", caption: "Skills Clinic" },
  { id: 3, src: gallery3, category: "mentorship", caption: "Mentor Huddle" },
  { id: 4, src: gallery4, category: "community", caption: "Local Outreach" },
  { id: 5, src: gallery5, category: "bts", caption: "Behind the Scenes" },
  { id: 6, src: gallery6, category: "tournament", caption: "Tournament Finals" },
  { id: 7, src: gallery7, category: "training", caption: "Youth Development" },
  { id: 8, src: gallery8, category: "mentorship", caption: "Leadership Workshop" },
  { id: 9, src: gallery9, category: "community", caption: "Community Event" },
  { id: 10, src: gallery10, category: "tournament", caption: "Cup Ceremony" },
  { id: 11, src: gallery11, category: "training", caption: "Drill Practice" },
  { id: 12, src: gallery12, category: "bts", caption: "Team Preparation" },
];

type Category = "all" | "tournament" | "training" | "mentorship" | "community" | "bts";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === "all" || img.category === selectedCategory;
    const matchesSearch = img.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
            Photo Gallery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Moments That Matter
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Highlights from tournaments, training, mentorship, and community events across Nigeria.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "tournament" ? "default" : "outline"}
                onClick={() => setSelectedCategory("tournament")}
              >
                Tournament
              </Button>
              <Button
                variant={selectedCategory === "training" ? "default" : "outline"}
                onClick={() => setSelectedCategory("training")}
              >
                Training
              </Button>
              <Button
                variant={selectedCategory === "mentorship" ? "default" : "outline"}
                onClick={() => setSelectedCategory("mentorship")}
              >
                Mentorship
              </Button>
              <Button
                variant={selectedCategory === "community" ? "default" : "outline"}
                onClick={() => setSelectedCategory("community")}
              >
                Community
              </Button>
              <Button
                variant={selectedCategory === "bts" ? "default" : "outline"}
                onClick={() => setSelectedCategory("bts")}
              >
                Behind the Scenes
              </Button>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="search"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="md:w-64"
              />
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="break-inside-avoid overflow-hidden cursor-pointer hover-lift group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No images found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center bg-black/50 rounded-lg px-4 py-2">
              <p className="font-semibold">{filteredImages[currentImageIndex]?.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
