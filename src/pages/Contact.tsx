import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import headerBg from "@/assets/header-contact.jpg";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = `CCT-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    
    toast({
      title: "Message Sent!",
      description: `Thank you for reaching out. Your reference number is ${ref}. We'll get back to you soon.`,
    });
    
    e.currentTarget.reset();
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
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Partnerships, media inquiries, mentoring, volunteering—we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Amina Yusuf"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topic">Reason *</Label>
                      <Select name="topic" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="mentoring">Mentoring</SelectItem>
                          <SelectItem value="volunteering">Volunteering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to be contacted about my inquiry *
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="hero-gradient">
                      Send Message
                    </Button>
                    <Button type="reset" variant="outline">
                      Clear
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    Prefer email? Write to <strong>hello@cohesion.ng</strong>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    hello@cohesion.ng
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24-48 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    +234 (0) XXX XXX XXXX
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    Monday to Friday, 9am - 5pm WAT
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Lagos, Nigeria
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    Serving communities across Nigeria
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay connected with Cohesion on social media for the latest updates, 
                    stories, and opportunities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Instagram</Badge>
                    <Badge variant="outline">X (Twitter)</Badge>
                    <Badge variant="outline">YouTube</Badge>
                    <Badge variant="outline">LinkedIn</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can I get involved?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  There are many ways to get involved—as a player, mentor, partner, volunteer, or supporter. 
                  Use the contact form above to let us know your interest.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is the tournament really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! The Cohesion Cup is completely free for all participants. We believe financial 
                  barriers shouldn't prevent talented young people from participating.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can my company become a partner?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We welcome partnerships with organizations that share our mission. Contact us using 
                  the form above or email hello@cohesion.ng to discuss partnership opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Where do you operate?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  While based in Lagos, we work with communities across Nigeria. Our goal is to expand 
                  our reach to serve more young people in need.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
