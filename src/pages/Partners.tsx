import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import headerBg from "@/assets/header-partners.jpg";
import layi from "@/assets/layi.jpg";
import bjotter from "@/assets/bjotter.jpg";
import shaggi from "@/assets/shaggi.jpg";
import warrip from "@/assets/warrip.jpg";

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

const ambassadors = [
  {
    name: "Layi Wassabi",
    role: "Player Mentor",
    quote: "Sport transforms lives. Cohesion proves it.",
    image: layi
  },
  {
    name: "Brain Jotter",
    role: "Education Ally",
    quote: "Opportunities for youth—this is how we build futures.",
    image: bjotter
  },
  {
    name: "Real Warri Pikin",
    role: "Tournament Patron",
    quote: "Proud to support the Cohesion Cup.",
    image: warrip
  },
  {
    name: "Broda Shaggi",
    role: "Community Advocate",
    quote: "Mentorship is a difference-maker.",
    image: shaggi
  }
];

const Partners = () => {
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
            Partners & Supporters
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powered by Champions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Thank you to the brands and individuals powering access, mentorship, and opportunity 
            for Nigeria's youth.
          </p>
        </div>
      </section>

      {/* Partners Carousel */}
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

          {/* <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8">
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
          </div> */}

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
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner with Cohesion?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Make a meaningful impact while gaining visibility and building community connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Directly support youth development, education, and community transformation through 
                  football and mentorship programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Brand Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gain exposure through tournaments, media coverage, and community events while 
                  demonstrating corporate social responsibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Talent Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with motivated young leaders for internships, volunteer opportunities, 
                  and future employment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ambassadors & Supporters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Champions who lend their voice, time, and network to amplify impact on and off the pitch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ambassadors.map((ambassador, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader className="p-0">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2">{ambassador.name}</CardTitle>
                  <Badge className="mb-3">{ambassador.role}</Badge>
                  <CardDescription className="text-sm italic">
                    "{ambassador.quote}"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Become an Ambassador</h3>
                <p className="text-muted-foreground mb-6">
                  Join as a <strong>Player Mentor</strong>, <strong>Education Ally</strong>, or{" "}
                  <strong>Tournament Patron</strong>—speak at sessions, host skills clinics, or open 
                  doors to internships and scholarships.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="hero-gradient">
                    Apply to Join
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our network of partners and ambassadors creating opportunities for Nigeria's youth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Become a Partner
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
export { Partners };