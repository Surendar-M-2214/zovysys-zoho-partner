import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Clock } from 'lucide-react';
import CTASection from '@/components/CTASection';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "We put our clients at the center of everything we do, ensuring their success is our success."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Results-Driven",
      description: "Every solution we implement is designed to deliver measurable business outcomes and ROI."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Excellence & Quality",
      description: "We maintain the highest standards in implementation, training, and ongoing support."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule without compromising quality."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Consultant",
      experience: "3+ years Zoho expertise",
      specialization: "CRM Implementation & Automation"
    },
    {
      name: "Sarah Martinez",
      role: "Senior Implementation Specialist", 
      experience: "2+ years Zoho expertise",
      specialization: "Zoho One Architecture & Integrations"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About Zovysys
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              We are a passionate team of Zoho specialists dedicated to helping businesses 
              unlock their full potential through intelligent automation and streamlined processes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Zovysys was born from a simple observation: too many businesses struggle with 
                  disconnected systems, manual processes, and data silos that hold them back 
                  from reaching their true potential.
                </p>
                <p>
                  As a team with over 5 years of combined experience in business process optimization 
                  and Zoho implementations, we recognized the transformative power of the Zoho ecosystem. 
                  We founded Zovysys to bridge the gap between complex technology and practical 
                  business solutions.
                </p>
                <p>
                  Today, we're proud to be trusted partners for businesses of all sizes, from 
                  growing startups to established enterprises, helping them automate operations, 
                  improve efficiency, and scale sustainably.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-soft p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="border-0 shadow-soft p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="border-0 shadow-soft p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </Card>
              <Card className="border-0 shadow-soft p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-medium p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses to achieve operational excellence through intelligent 
                Zoho implementations that eliminate manual work, improve data visibility, 
                and enable scalable growth.
              </p>
            </Card>

            <Card className="border-0 shadow-medium p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading Zoho implementation partner, known for delivering 
                transformative solutions that help businesses thrive in an increasingly 
                digital and competitive landscape.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals passionate about helping your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-medium p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground mb-2">{member.experience}</p>
                <p className="text-sm text-secondary font-medium">{member.specialization}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Businesses Choose Zovysys
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-4">Deep Zoho Expertise</h3>
              <p className="text-muted-foreground">
                With 5+ years of combined experience, we understand every aspect of the Zoho 
                ecosystem and how to leverage it for maximum business impact.
              </p>
            </Card>

            <Card className="border-0 shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-4">Proven Methodology</h3>
              <p className="text-muted-foreground">
                Our structured approach ensures smooth implementations, minimal disruption, 
                and rapid user adoption across your organization.
              </p>
            </Card>

            <Card className="border-0 shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-4">Ongoing Partnership</h3>
              <p className="text-muted-foreground">
                We don't just implement and leave. We provide ongoing support, training, 
                and optimization to ensure long-term success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Partner with Zovysys?"
        subtitle="Let's discuss how our expertise can help transform your business operations."
      />
    </div>
  );
};

export default About;