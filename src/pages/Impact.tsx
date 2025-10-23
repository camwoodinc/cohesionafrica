import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import headerBg from "@/assets/header-impact.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const impactData = {
  "2023": { youth: 1800, mentors: 40, communities: 9, value: 480000000 },
  "2024": { youth: 2500, mentors: 65, communities: 14, value: 720000000 },
  "2025": { youth: 3200, mentors: 80, communities: 18, value: 910000000 },
};

const stories = [
  {
    image: story1,
    caption: "\"Cohesion opened doors for me.\" — Amina, U17",
    quote: "Through Cohesion, I learned discipline and gained confidence. Now I'm pursuing my education while playing football."
  },
  {
    image: story2,
    caption: "\"Mentorship built my confidence.\" — Chinedu",
    quote: "My mentor taught me that success isn't just about football—it's about being a leader in my community."
  },
  {
    image: story3,
    caption: "\"I learned to lead a team.\" — Coach Ayo",
    quote: "Seeing these young people grow from uncertain kids to confident leaders is the greatest reward."
  }
];

const Impact = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [currentStory, setCurrentStory] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    youth: 0,
    mentors: 0,
    communities: 0,
    value: 0
  });

  useEffect(() => {
    const data = impactData[selectedYear as keyof typeof impactData];
    const duration = 1000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedValues({
        youth: Math.round(data.youth * progress),
        mentors: Math.round(data.mentors * progress),
        communities: Math.round(data.communities * progress),
        value: Math.round(data.value * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, [selectedYear]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const nextStory = () => setCurrentStory((prev) => (prev + 1) % stories.length);
  const prevStory = () => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);

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
            Measurable Impact
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating Real Change
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Track our progress as we empower Nigeria's youth through football, mentorship, and education.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Year:</span>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    <strong>Methodology:</strong> Social value = Participants × avg. outcome uplift × NGN conversion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-base font-normal">
                  Youth Reached
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">
                  {formatNumber(animatedValues.youth)}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-base font-normal">
                  Active Mentors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">
                  {formatNumber(animatedValues.mentors)}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-base font-normal">
                  Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">
                  {formatNumber(animatedValues.communities)}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-base font-normal">
                  Social Value (NGN)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">
                  {formatNumber(animatedValues.value)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stories of Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Hear directly from the young people whose lives have been changed by Cohesion
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="relative h-[400px]">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentStory ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xl md:text-2xl font-semibold mb-2">{story.caption}</p>
                    <p className="text-lg text-white/90">{story.quote}</p>
                  </div>
                </div>
              ))}
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
                onClick={prevStory}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
                onClick={nextStory}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStory ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                <Link to="/programs">
                  <Button>See Case Studies</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Share Your Story</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground hover-lift">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Be Part of Our Story
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Your support can help us reach more young people and create even greater impact.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/partners">
                  <Button size="lg" variant="secondary">
                    Become a Partner
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                    Get in Touch
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

export default Impact;
