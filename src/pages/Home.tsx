import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Zap,
  CheckCircle,
  BarChart,
  Settings,
  Shield,
  Award,
  TrendingUp,
} from "lucide-react";
import coreService from "@/assets/core_service.webp";
import CTASection from "@/components/CTASection";

// Helper function to get suffix from stat value
const getSuffix = (value: string): string => {
  if (value.includes("%")) return "%";
  if (value.includes("+")) return "+";
  if (value.includes("/")) return "/7";
  return "";
};

// Counter Animation Component
const CounterAnimation = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal animation
    const elements = document.querySelectorAll(".scroll-reveal");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
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
      description:
        "Streamline your workflows and eliminate manual tasks with intelligent Zoho automation.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-secondary" />,
      title: "Data Analytics",
      description:
        "Make data-driven decisions with comprehensive reporting and analytics dashboards.",
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Custom Integrations",
      description:
        "Connect Zoho with your existing tools for a unified business ecosystem.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security with solutions that grow with your business needs.",
    },
  ];

  const services = [
    {
      title: "Zoho CRM Implementation",
      description:
        "Complete CRM setup, customization, and user training for sales excellence.",
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Custom Fields",
        "Automation Rules",
      ],
    },
    {
      title: "Zoho One Architecture",
      description:
        "End-to-end business suite integration for seamless operations.",
      features: [
        "Multi-app Integration",
        "Data Synchronization",
        "User Management",
        "Workflow Design",
      ],
    },
    {
      title: "Business Process Automation",
      description:
        "Eliminate manual work with intelligent workflow automation.",
      features: [
        "Custom Workflows",
        "Email Automation",
        "Approval Processes",
        "Task Management",
      ],
    },
  ];

  const heroStats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  const stats = [
    { number: "100+", label: "Businesses Transformed" },
    { number: "5+", label: "Years of Expertise" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24 / 7", label: "Support Available" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 min-h-screen flex items-center"
      >
        {/* Animated Background Elements - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Certified Zoho Implementation Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  {" "}
                  Zoho Implementation
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business operations with our expert Zoho
                solutions. We help small, mid, and enterprise-level businesses
                automate, streamline, and scale their operations using the
                complete Zoho ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:border-blue-600 hover:shadow-xl hover:text-blue-600 hover:-translate-y-1 transition-all duration-200">
                  <Link
                    to="/services"
                    className="flex items-center justify-center"
                  >
                    View Our Services
                  </Link>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 text-blue-600 mb-3 border-2 border-blue-200">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      <CounterAnimation
                        target={parseInt(
                          stat.value.replace("+", "").replace("%", "")
                        )}
                        suffix={getSuffix(stat.value)}
                      />
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105 animate-float">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-green-200 rounded w-3/4 animate-pulse delay-75"></div>
                    <div className="h-4 bg-blue-200 rounded w-1/2 animate-pulse delay-150"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="text-2xl font-bold">Zoho CRM</div>
                        <div className="text-sm opacity-90">
                          Customer Management
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="text-2xl font-bold">Zoho One</div>
                        <div className="text-sm opacity-90">Complete Suite</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements - Hidden on mobile */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-float hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-float animation-delay-2000 hidden md:block"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-float animation-delay-4000 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center scroll-reveal tilt-card p-6 border-2 border-gray-200 rounded-lg"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  <CounterAnimation
                    target={parseInt(
                      stat.number
                        .replace("+", "")
                        .replace("%", "")
                        .replace("/", "")
                    )}
                    suffix={getSuffix(stat.number)}
                  />
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
              We combine deep Zoho expertise with proven implementation
              methodologies to deliver results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 scroll-reveal tilt-card group bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
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
              Comprehensive Zoho implementation services tailored to your
              business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-reveal tilt-card">
              <img
                src={coreService}
                alt="Professional business solutions including CRM, automation, and analytics"
                className="rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
              />
            </div>

            <div className="space-y-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="border-0 shadow-soft p-6 scroll-reveal tilt-card group hover:shadow-medium transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
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
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-3 hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 gradient-subtle relative overflow-hidden">
        {/* Floating elements */}
        <div
          className="absolute top-10 right-1/4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-14 h-14 bg-primary/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from businesses we've
              helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc",
                quote:
                  "Zovysys transformed our chaotic sales process into a streamlined CRM system. Our conversion rates increased by 40% within 3 months.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                title: "Operations Manager, GrowthCo",
                quote:
                  "The automation workflows they built saved us 20 hours per week. Now our team focuses on growth instead of manual tasks.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                title: "Founder, ServicePro",
                quote:
                  "Professional, knowledgeable, and always available for support. The best Zoho implementation partner we could ask for.",
                rating: 5,
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-0 shadow-soft p-6 scroll-reveal tilt-card group hover:shadow-medium transition-all duration-300 bg-white/90 backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <div
                      key={`${testimonial.name}-star-${i}`}
                      className="text-yellow-400 animate-bounce-3d"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
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
