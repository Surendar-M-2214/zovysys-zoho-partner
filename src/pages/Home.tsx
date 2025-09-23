import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  BarChart, 
  Settings,
  Shield,
  Headphones,
  Clock
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import servicesGrid from '@/assets/services-grid.jpg';
import CTASection from '@/components/CTASection';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal animation
    const elements = document.querySelectorAll('.scroll-reveal');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Process Automation",
      description: "Streamline your workflows and eliminate manual tasks with intelligent Zoho automation."
    },
    {
      icon: <BarChart className="h-8 w-8 text-secondary" />,
      title: "Data Analytics", 
      description: "Make data-driven decisions with comprehensive reporting and analytics dashboards."
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Custom Integrations",
      description: "Connect Zoho with your existing tools for a unified business ecosystem."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with solutions that grow with your business needs."
    }
  ];

  const services = [
    {
      title: "Zoho CRM Implementation",
      description: "Complete CRM setup, customization, and user training for sales excellence.",
      features: ["Lead Management", "Sales Pipeline", "Custom Fields", "Automation Rules"]
    },
    {
      title: "Zoho One Architecture", 
      description: "End-to-end business suite integration for seamless operations.",
      features: ["Multi-app Integration", "Data Synchronization", "User Management", "Workflow Design"]
    },
    {
      title: "Business Process Automation",
      description: "Eliminate manual work with intelligent workflow automation.",
      features: ["Custom Workflows", "Email Automation", "Approval Processes", "Task Management"]
    }
  ];

  const stats = [
    { number: "100+", label: "Businesses Transformed" },
    { number: "5+", label: "Years of Expertise" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse-glow"></div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce-3d">
          <div className="w-12 h-12 bg-accent/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-rotate-3d">
          <div className="w-8 h-8 bg-secondary/30 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Trusted Partner for 
                <span className="text-accent"> Zoho Implementation</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business operations with our expert Zoho implementation services. 
                We help companies automate, streamline, and scale with comprehensive Zoho solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 shadow-large group hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Certified Zoho Partners</span>
                </div>
              </div>
            </div>

            <div className="scroll-reveal tilt-card">
              <img 
                src={heroImage} 
                alt="Professional team implementing Zoho solutions for business automation"
                className="rounded-2xl shadow-large hover:shadow-glow transition-all duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal tilt-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 animate-pulse-glow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 gradient-subtle relative overflow-hidden">
        {/* Background floating elements */}
        <div className="absolute top-10 right-10 animate-float">
          <div className="w-20 h-20 bg-primary/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-3d">
          <div className="w-16 h-16 bg-secondary/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Zovysys?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep Zoho expertise with proven implementation methodologies 
              to deliver results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 scroll-reveal tilt-card group bg-white/80 backdrop-blur-sm" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-1/3 animate-rotate-3d">
          <div className="w-6 h-6 bg-accent/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Zoho implementation services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-reveal tilt-card">
              <img 
                src={servicesGrid} 
                alt="Professional business solutions including CRM, automation, and analytics"
                className="rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
              />
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-soft p-6 scroll-reveal tilt-card group hover:shadow-medium transition-all duration-300" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center scroll-reveal">
            <Button asChild size="lg" className="gradient-primary text-white font-semibold px-8 py-3 hover:scale-105 transition-all duration-300">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 gradient-subtle relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-primary/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc",
                quote: "Zovysys transformed our chaotic sales process into a streamlined CRM system. Our conversion rates increased by 40% within 3 months.",
                rating: 5
              },
              {
                name: "Michael Chen", 
                title: "Operations Manager, GrowthCo",
                quote: "The automation workflows they built saved us 20 hours per week. Now our team focuses on growth instead of manual tasks.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                title: "Founder, ServicePro",
                quote: "Professional, knowledgeable, and always available for support. The best Zoho implementation partner we could ask for.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft p-6 scroll-reveal tilt-card group hover:shadow-medium transition-all duration-300 bg-white/90 backdrop-blur-sm" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 animate-bounce-3d" style={{ animationDelay: `${i * 0.1}s` }}>⭐</div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;