import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import tournament from "@/assets/tournament.jpg";
import headerBg from "@/assets/header-cup.jpg";

type FormRole = "SOLO" | "TEAM" | "COACH" | "OTHER";

const Cup = () => {
  const [activeForm, setActiveForm] = useState<FormRole>("SOLO");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ref = `CCH-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    
    toast({
      title: "Registration Submitted!",
      description: `Your reference number is ${ref}. We'll contact you soon with more details.`,
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
            Cohesion Cup 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Register for the Tournament
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A national youth football tournament for players, teams, and coaches. 
            <strong> Participation is free.</strong>
          </p>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={tournament} 
                  alt="Cohesion Cup tournament" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <Badge className="bg-success text-success-foreground">Registration Open</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">Lagos (TBD)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dates</p>
                      <p className="font-medium">Aug–Sep (TBD)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Cost</p>
                      <p className="font-medium text-success">FREE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories & Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">U13 (≤13 years)</Badge>
                    <Badge variant="outline">U15 (14–15 years)</Badge>
                    <Badge variant="outline">U17 (16–17 years)</Badge>
                    <Badge variant="outline">Open (18+ years)</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Age verification required. Participants under 18 require guardian consent.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Register Now</CardTitle>
                  <CardDescription>Choose your registration type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Button
                      variant={activeForm === "SOLO" ? "default" : "outline"}
                      onClick={() => setActiveForm("SOLO")}
                    >
                      Solo Player
                    </Button>
                    <Button
                      variant={activeForm === "TEAM" ? "default" : "outline"}
                      onClick={() => setActiveForm("TEAM")}
                    >
                      Team
                    </Button>
                    <Button
                      variant={activeForm === "COACH" ? "default" : "outline"}
                      onClick={() => setActiveForm("COACH")}
                    >
                      Coach
                    </Button>
                    <Button
                      variant={activeForm === "OTHER" ? "default" : "outline"}
                      onClick={() => setActiveForm("OTHER")}
                    >
                      Other
                    </Button>
                  </div>

                  {/* Solo Form */}
                  {activeForm === "SOLO" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select name="category" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="U13">U13</SelectItem>
                              <SelectItem value="U15">U15</SelectItem>
                              <SelectItem value="U17">U17</SelectItem>
                              <SelectItem value="OPEN">Open</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" name="city" placeholder="Lagos" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" name="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" name="lastName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" name="phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth *</Label>
                          <Input id="dob" name="dob" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Input id="position" name="position" placeholder="FW / MF / DF / GK" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm">
                          I accept the rules and media consent *
                        </Label>
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="hero-gradient">Submit</Button>
                        <Button type="reset" variant="outline">Clear</Button>
                      </div>
                    </form>
                  )}

                  {/* Team Form */}
                  {activeForm === "TEAM" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="teamName">Team Name *</Label>
                          <Input id="teamName" name="teamName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="teamCity">City *</Label>
                          <Input id="teamCity" name="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="teamCategory">Category *</Label>
                          <Select name="category" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="U13">U13</SelectItem>
                              <SelectItem value="U15">U15</SelectItem>
                              <SelectItem value="U17">U17</SelectItem>
                              <SelectItem value="OPEN">Open</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="managerName">Manager Name *</Label>
                          <Input id="managerName" name="managerName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="managerEmail">Manager Email *</Label>
                          <Input id="managerEmail" name="managerEmail" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="managerPhone">Manager Phone *</Label>
                          <Input id="managerPhone" name="managerPhone" type="tel" required />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="teamConsent" required />
                        <Label htmlFor="teamConsent" className="text-sm">
                          I acknowledge proof-of-age policy *
                        </Label>
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="hero-gradient">Submit</Button>
                        <Button type="reset" variant="outline">Clear</Button>
                      </div>
                    </form>
                  )}

                  {/* Coach Form */}
                  {activeForm === "COACH" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="coachName">Name *</Label>
                          <Input id="coachName" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coachEmail">Email *</Label>
                          <Input id="coachEmail" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coachPhone">Phone *</Label>
                          <Input id="coachPhone" name="phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coachCity">City *</Label>
                          <Input id="coachCity" name="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="certs">Certifications</Label>
                          <Input id="certs" name="certs" placeholder="NIS / CAF / FIFA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="exp">Experience (years)</Label>
                          <Input id="exp" name="exp" type="number" min="0" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="coachConsent" required />
                        <Label htmlFor="coachConsent" className="text-sm">
                          I accept the terms *
                        </Label>
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="hero-gradient">Submit</Button>
                        <Button type="reset" variant="outline">Clear</Button>
                      </div>
                    </form>
                  )}

                  {/* Other Form */}
                  {activeForm === "OTHER" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="otherRole">Role *</Label>
                          <Select name="role" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Referee">Referee</SelectItem>
                              <SelectItem value="Volunteer">Volunteer</SelectItem>
                              <SelectItem value="Sponsor">Sponsor</SelectItem>
                              <SelectItem value="Media">Media</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="otherName">Name/Organization *</Label>
                          <Input id="otherName" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="otherEmail">Email *</Label>
                          <Input id="otherEmail" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="otherPhone">Phone *</Label>
                          <Input id="otherPhone" name="phone" type="tel" required />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="otherConsent" required />
                        <Label htmlFor="otherConsent" className="text-sm">
                          I accept the terms *
                        </Label>
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="hero-gradient">Submit</Button>
                        <Button type="reset" variant="outline">Clear</Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cup;
