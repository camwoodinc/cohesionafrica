import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, Calendar, BookOpen, Handshake, TrendingUp, Shield } from "lucide-react";
import training from "@/assets/training.jpg";
import allStarsImg from "@/assets/all-stars.jpg";
import adoptTeamImg from "@/assets/adopt-team.jpg";
import headerBg from "@/assets/header-programs.jpg";
import AdoptCarousel from "@/components/AdoptCarousel";

const Programs = () => {
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
            Programs & Initiatives
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Lives Through Sport
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our comprehensive programs combine football training with mentorship, education support, 
            and community engagement to create lasting change.
          </p>
        </div>
      </section>

      {/* 10-Year Goals */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our 10-Year Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ambitious targets to create measurable impact across Nigeria's youth communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Scale Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Engage and mentor <strong className="text-foreground">20,000 children</strong> in 10 years.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Build a Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Grow a strong <strong className="text-foreground">alumni & mentor community</strong> guiding younger players.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Champion Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Foster a <strong className="text-foreground">drug-free, socially responsible</strong> cohort of Young Leaders.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Grow Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Teach <strong className="text-foreground">leadership & problem-solving</strong> through sport and teamwork.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expand Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Increase access to <strong className="text-foreground">education & vocations</strong> for at-risk youth.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Shift Risk Perception</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong className="text-foreground">Lower risk tolerance</strong> among school-leavers by changing how choices are viewed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Participant Selection
              </h2>
              <p className="text-lg text-muted-foreground">
                We recruit from <strong>local communities and schools</strong> across Nigeria. 
                Every participant must:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Be a student—or an out-of-school youth <strong className="text-foreground">willing to return</strong> (we help with materials)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Come from a <strong className="text-foreground">socio-economically disadvantaged</strong> background</span>
                </li>
              </ul>
              <p className="text-lg">
                After completing the tournament and programme activities, participants are recognised as 
                <strong className="text-primary"> Young Leaders</strong>—ambassadors who model positive change 
                in their communities.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl hover-lift">
              <img 
                src={training} 
                alt="Participant selection and training" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Year-Round Support */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Post-Event & Year-Round Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The final whistle isn't the end. After the two-day tournament, we provide ongoing 
              mentorship so participants stay guided, connected, and accountable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Monthly Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sessions with accomplished footballers, coaches, and leaders.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Education & Vocations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Learning materials, tutoring, and vocational exposure.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Community Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Young Leaders design local initiatives for safety and inclusion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All-Stars Program */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl hover-lift">
              <img 
                src={allStarsImg} 
                alt="Cohesion All-Stars training session" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <Card className="hover-lift">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Cohesion All-Stars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Standout players from the tournament enter a one-year mentorship and training 
                  programme with a dedicated coach sponsored by Cohesion. Performance today; 
                  potential for tomorrow.
                </CardDescription>
                <p className="text-sm text-muted-foreground italic">
                  First cohort unveiled in 2021.
                </p>
                <div className="flex gap-3">
                  <Link to="/contact">
                    <Button className="hero-gradient">Support the All-Stars</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adopt-a-Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="hover-lift">
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Adopt-a-Team Programme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Corporate partners can make a lasting difference by adopting a team. Fund 
                  educational materials, mentorship, and ongoing support for a group of Young Leaders.
                </CardDescription>
                <CardDescription className="text-base">
                  Partners gain meaningful visibility and can engage Young Leaders as volunteers, 
                  interns, or future employees.
                </CardDescription>
                <div className="flex gap-3">
                  <Link to="/contact">
                    <Button className="hero-gradient">Adopt a Team</Button>
                  </Link>
                  <Link to="/partners">
                    <Button variant="outline">See Partners</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <div className="animate-fade-in">
            <AdoptCarousel />
          </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground hover-lift">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Join Our Programs Today
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Whether you're a player, mentor, partner, or supporter—there's a place for you in the 
                Cohesion movement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/cup">
                  <Button size="lg" variant="secondary">
                    Register for Cup
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Programs;
