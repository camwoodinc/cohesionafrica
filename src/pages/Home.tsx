import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroCarousel from "@/components/HeroCarousel";
import { Trophy, Users, Heart, TrendingUp } from "lucide-react";
import playerAction from "@/assets/player-action.jpg";
import growthImg from "@/assets/growth.jpg";
import excellenceImg from "@/assets/excellence.jpg";
import communityImg from "@/assets/community.jpg";
import opportunityImg from "@/assets/opportunity.jpg";
import PartnersCarousel from "@/components/PartnerCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
              Nigeria • Football • Youth
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The youth, the stars, the future.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cohesion Empowerment Foundation uses football and mentorship to inspire hope, 
              discipline, and opportunity among Nigeria's most vulnerable young people.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/cup">
                <Button size="lg" className="hero-gradient">
                  Register for Cohesion Cup
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-in">
            <HeroCarousel />
          </div>
        </div>
      </section>

    <PartnersCarousel />

      {/* About Section */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="overflow-hidden rounded-2xl hover-lift">
              <img 
                src={playerAction} 
                alt="Young player in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About the Cohesion Empowerment Foundation
              </h2>
              <p className="text-muted-foreground text-lg">
                Cohesion was born to show at-risk pre-teens that there's another path—to spark 
                bigger dreams and open real opportunities. We use the power of football and 
                structured mentorship to curb drugs, cultism, and alcohol among young people 
                (ages 9–13 and 14–18), pairing the nation's most loved sport with life skills, 
                education access, and community support.
              </p>
              <p className="text-muted-foreground font-medium">
                It's not just football. It's the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Challenge We're Solving
            </h2>
            <p className="text-lg text-muted-foreground">
              Nigerian children face overlapping risks—poverty, interrupted schooling, unsafe 
              streets, and harmful social pressure. Millions are out of school, and a huge share 
              of the population is under 15. Left unaddressed, risk tolerance rises while 
              opportunity narrows.
            </p>
            <p className="text-lg font-medium">
              Cohesion channels passion for football into safer choices, mentorship, and 
              learning—so talent can become trajectory.
            </p>
          </div>

          


        </div>
      </section>

      {/* Why Cohesion */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Cohesion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Serious football, serious futures. We blend sport, mentorship, and education to 
              create measurable change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={growthImg} 
                  alt="Growth through football" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Confidence, discipline, and life skills—built on the pitch, applied off it.
                </CardDescription>
                <Link to="/programs">
                  <Button variant="link" className="px-0 mt-4">
                    Learn more →
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={excellenceImg} 
                  alt="Excellence in training" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Modern training, fair play, and clear standards that raise performance.
                </CardDescription>
                <Link to="/cup">
                  <Button variant="link" className="px-0 mt-4">
                    See tournament →
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={communityImg} 
                  alt="Community support" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Players, mentors, and allies who look out for one another.
                </CardDescription>
                <Link to="/partners">
                  <Button variant="link" className="px-0 mt-4">
                    Join partners →
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={opportunityImg} 
                  alt="Opportunity for youth" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real pathways to education, vocations, internships, and work.
                </CardDescription>
                <Link to="/impact">
                  <Button variant="link" className="px-0 mt-4">
                    View impact →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join us in empowering Nigeria's youth through football, mentorship, and opportunity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/cup">
              <Button size="lg" variant="secondary">
                Register for the Cup
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
