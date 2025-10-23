import React from "react";

const partners = [
  { name: "ASPIRA Nigeria Ltd", product: "Viva Detergent", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=100&fit=crop" },
  { name: "Maltina", product: "Beverages", logo: "https://images.unsplash.com/photo-1615750185825-2023a7c1e921?w=300&h=100&fit=crop" },
  { name: "Nestlé Pure Life", product: "Water", logo: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&h=100&fit=crop" },
  { name: "Nestlé Milo", product: "Nutrition", logo: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=100&fit=crop" },
  { name: "Dios Delite", product: "Food", logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=100&fit=crop" },
  { name: "Ziba Beach Resort", product: "Hospitality", logo: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=100&fit=crop" },
  { name: "Nigeria Info", product: "Media", logo: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=100&fit=crop" },
  { name: "SuperSport", product: "Broadcasting", logo: "https://images.unsplash.com/photo-1614166107675-92e2f1f14d3e?w=300&h=100&fit=crop" }
];

const PartnersCarousel = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Corporate Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Leading brands supporting youth empowerment through football
          </p>
        </div>

        <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8">
          <div className="flex gap-12 items-center animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                  title={`${partner.name} - ${partner.product}`}
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 5s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnersCarousel;
