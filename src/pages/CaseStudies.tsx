import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart, 
  CheckCircle,
  ArrowRight,
  Building2,
  ShoppingCart,
  Stethoscope,
  Target
} from 'lucide-react';
import CTASection from '@/components/CTASection';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "Technology Services",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      size: "50-100 employees",
      challenge: "Struggling with disconnected systems, manual sales processes, and poor visibility into customer interactions. Their team was spending 40% of time on administrative tasks instead of serving clients.",
      solution: "Implemented comprehensive Zoho One architecture with CRM, Projects, Books, and custom automation workflows. Integrated their existing tools and created unified dashboards for management visibility.",
      results: [
        { metric: "40%", description: "Increase in sales productivity" },
        { metric: "60%", description: "Reduction in administrative time" },
        { metric: "25%", description: "Improvement in customer satisfaction scores" },
        { metric: "3x", description: "Faster project delivery" }
      ],
      testimonial: {
        quote: "Zovysys transformed our chaotic operations into a well-oiled machine. Our team now focuses on what matters most—serving our clients and growing the business.",
        author: "Sarah Johnson",
        title: "CEO, TechStart Solutions"
      },
      timeline: "8 weeks",
      services: ["Zoho CRM Implementation", "Zoho One Architecture", "Custom Automations", "Team Training"]
    },
    {
      company: "RetailMax Chain",
      industry: "E-commerce & Retail", 
      icon: <ShoppingCart className="h-8 w-8 text-secondary" />,
      size: "200+ employees",
      challenge: "Multi-location inventory chaos, inconsistent customer service, and no unified view of business performance. Stock-outs were costing them $50K monthly in lost sales.",
      solution: "Deployed Zoho Inventory across 15 locations, integrated Zoho Desk for customer support, and created real-time analytics dashboards. Automated reorder processes and customer communication workflows.",
      results: [
        { metric: "90%", description: "Reduction in stock-outs" },
        { metric: "50%", description: "Faster customer issue resolution" },
        { metric: "$200K", description: "Annual cost savings" },
        { metric: "35%", description: "Increase in customer retention" }
      ],
      testimonial: {
        quote: "The visibility and control we now have over our operations is game-changing. We've eliminated the guesswork and can make data-driven decisions across all locations.",
        author: "Michael Chen",
        title: "Operations Director, RetailMax Chain"
      },
      timeline: "12 weeks",
      services: ["Zoho Inventory Setup", "Multi-location Configuration", "Customer Support Integration", "Analytics Implementation"]
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare Services",
      icon: <Stethoscope className="h-8 w-8 text-accent" />,
      size: "25-50 employees",
      challenge: "Paper-based patient records, inefficient appointment scheduling, and compliance tracking nightmares. Patients were waiting 30+ minutes due to scheduling conflicts.",
      solution: "Implemented Zoho CRM for patient management, Zoho Bookings for appointments, and custom Creator apps for compliance tracking. Automated patient communication and follow-up workflows.",
      results: [
        { metric: "80%", description: "Reduction in patient wait times" },
        { metric: "95%", description: "Improvement in appointment accuracy" },
        { metric: "100%", description: "Compliance tracking automation" },
        { metric: "40%", description: "Increase in patient satisfaction" }
      ],
      testimonial: {
        quote: "Our patients love the new appointment system, and our staff can focus on care instead of paperwork. The compliance tracking alone has saved us countless hours.",
        author: "Dr. Emily Rodriguez",
        title: "Practice Manager, HealthCare Plus"
      },
      timeline: "6 weeks", 
      services: ["Patient Management System", "Appointment Scheduling", "Compliance Automation", "Staff Training"]
    }
  ];

  const successMetrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      metric: "Average 40%",
      description: "Increase in operational efficiency across all client implementations"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      metric: "60% Faster", 
      description: "Process completion times after Zoho automation implementation"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      metric: "95% Adoption",
      description: "User adoption rate within 30 days of go-live"
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      metric: "ROI in 6 Months",
      description: "Average time for clients to see positive return on investment"
    }
  ];

  const implementationHighlights = [
    {
      title: "Discovery & Planning",
      description: "In-depth analysis of current processes and pain points to design the optimal solution architecture.",
      duration: "Week 1-2"
    },
    {
      title: "Custom Configuration",
      description: "Tailored setup of Zoho applications with custom fields, workflows, and integrations.",
      duration: "Week 3-6"
    },
    {
      title: "Testing & Training", 
      description: "Comprehensive testing with real data and hands-on training for all user groups.",
      duration: "Week 7-8"
    },
    {
      title: "Go-Live & Support",
      description: "Smooth transition to new systems with dedicated support during the critical first weeks.",
      duration: "Week 9+"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              Real businesses, real challenges, real results. See how our Zoho implementations 
              have transformed operations and accelerated growth for companies just like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-soft p-6 text-center">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{metric.metric}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deep into the transformation journeys of businesses that partnered with Zovysys 
              to achieve remarkable operational improvements and growth.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-large p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      {study.icon}
                      <div>
                        <h3 className="text-2xl font-bold">{study.company}</h3>
                        <p className="text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{study.size}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">Implementation: {study.timeline}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Services Provided:</h4>
                      <div className="space-y-2">
                        {study.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-destructive">The Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">Our Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Results Grid */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-success">Results Achieved</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-4 bg-success/5 rounded-lg">
                              <div className="text-2xl font-bold text-success mb-1">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                        <p className="text-muted-foreground italic mb-4">"{study.testimonial.quote}"</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold">{study.testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{study.testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              The methodology behind every successful transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationHighlights.map((phase, index) => (
              <Card key={index} className="border-0 shadow-soft p-6 text-center relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
                <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {phase.duration}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Clients Succeed */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Our Clients Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft p-8">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Business-First Approach</h3>
              <p className="text-muted-foreground">
                We focus on solving business problems, not just implementing technology. 
                Every solution is designed with clear ROI and measurable outcomes in mind.
              </p>
            </Card>

            <Card className="border-0 shadow-soft p-8">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Change Management Excellence</h3>
              <p className="text-muted-foreground">
                We ensure smooth user adoption with comprehensive training, clear documentation, 
                and ongoing support that makes the transition seamless for your team.
              </p>
            </Card>

            <Card className="border-0 shadow-soft p-8">
              <CheckCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Long-term Partnership</h3>
              <p className="text-muted-foreground">
                Our relationship doesn't end at go-live. We provide ongoing optimization, 
                support, and strategic guidance to ensure continued success and growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing list of businesses that have transformed their operations with Zovysys.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white font-semibold px-8 py-3 group">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="See What Zovysys Can Do for You"
        subtitle="Every success story starts with a conversation. Let's discuss how we can help transform your business."
        benefits={[
          "Free business assessment",
          "Custom transformation roadmap",
          "ROI projections"
        ]}
      />
    </div>
  );
};

export default CaseStudies;