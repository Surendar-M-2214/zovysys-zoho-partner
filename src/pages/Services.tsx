import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Settings,
  BarChart,
  Users,
  Database,
  Workflow,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  BookOpen,
  Headphones,
  Globe,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const Services = () => {
  const mainServices = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Zoho CRM Implementation",
      description:
        "Complete CRM setup, customization, and optimization for sales excellence.",
      features: [
        "Lead & Contact Management",
        "Sales Pipeline Configuration",
        "Custom Fields & Layouts",
        "Automation Rules & Workflows",
        "Email Integration",
        "Reporting & Analytics",
      ],
      deliverables: [
        "Configured CRM system",
        "User training sessions",
        "Documentation & guides",
        "30-day post-implementation support",
      ],
    },
    {
      icon: <Settings className="h-12 w-12 text-secondary" />,
      title: "Zoho One Architecture",
      description:
        "End-to-end business suite integration for seamless operations across all departments.",
      features: [
        "Multi-app Integration Strategy",
        "Data Synchronization Setup",
        "User Access Management",
        "Cross-platform Workflows",
        "Unified Dashboard Creation",
        "Security Configuration",
      ],
      deliverables: [
        "Integrated Zoho One ecosystem",
        "Architecture documentation",
        "Admin training program",
        "Ongoing optimization plan",
      ],
    },
    {
      icon: <Workflow className="h-12 w-12 text-accent" />,
      title: "Business Process Automation",
      description:
        "Eliminate manual work with intelligent workflows and process optimization.",
      features: [
        "Custom Workflow Design",
        "Email Automation Setup",
        "Approval Process Configuration",
        "Task Automation Rules",
        "Document Generation",
        "Notification Systems",
      ],
      deliverables: [
        "Automated workflow systems",
        "Process documentation",
        "Team training materials",
        "Performance monitoring setup",
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Custom Integrations",
      description:
        "Connect Zoho with third-party applications for a unified business ecosystem.",
      features: [
        "API Integration Development",
        "Data Migration Services",
        "Real-time Synchronization",
        "Custom Connector Creation",
        "Legacy System Integration",
        "Testing & Validation",
      ],
      deliverables: [
        "Integrated system architecture",
        "API documentation",
        "Integration monitoring tools",
        "Maintenance guidelines",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      title: "Zoho Training & Certification",
      description:
        "Comprehensive training programs for your team to maximize Zoho utilization.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Ongoing Support & Maintenance",
      description:
        "24/7 support and regular optimization to keep your systems running smoothly.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      title: "Analytics & Reporting Setup",
      description:
        "Custom dashboards and reports to track KPIs and make data-driven decisions.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Compliance",
      description:
        "Ensure your Zoho implementation meets industry security and compliance standards.",
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Multi-location Setup",
      description:
        "Configure Zoho for businesses operating across multiple locations or countries.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Performance Optimization",
      description:
        "Regular system audits and optimizations to maintain peak performance.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description:
        "We analyze your current processes, identify pain points, and define project scope.",
    },
    {
      step: "2",
      title: "Solution Design",
      description:
        "Create a customized implementation plan tailored to your business needs.",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "Configure, customize, and integrate Zoho applications following best practices.",
    },
    {
      step: "4",
      title: "Testing & Training",
      description:
        "Thorough testing and comprehensive user training to ensure smooth adoption.",
    },
    {
      step: "5",
      title: "Go-Live & Support",
      description:
        "Launch your new system with ongoing support and optimization.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Zoho Implementation Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              Comprehensive Zoho solutions designed to automate your processes,
              streamline operations, and accelerate business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert implementation services tailored to transform your business
              operations.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-0 shadow-medium p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      {service.icon}
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-success" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-secondary">
                          Deliverables:
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map(
                            (deliverable, deliverableIndex) => (
                              <li
                                key={deliverableIndex}
                                className="flex items-center space-x-2"
                              >
                                <ArrowRight className="h-4 w-4 text-accent" />
                                <span className="text-sm">{deliverable}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="h-80 bg-gradient-subtle rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      {service.icon}
                      <p className="text-muted-foreground mt-4">
                        Service Illustration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete support for your Zoho journey from implementation to
              optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful Zoho implementations
              every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Package",
                description:
                  "Perfect for small businesses getting started with Zoho",
                features: [
                  "Single Zoho app implementation",
                  "Basic customization",
                  "User training (up to 5 users)",
                  "30-day support",
                ],
                popular: false,
              },
              {
                name: "Growth Package",
                description:
                  "Ideal for growing businesses needing multiple Zoho apps",
                features: [
                  "Up to 3 Zoho app integration",
                  "Advanced customization",
                  "Process automation setup",
                  "User training (up to 15 users)",
                  "90-day support",
                ],
                popular: true,
              },
              {
                name: "Enterprise Package",
                description: "Comprehensive solution for large organizations",
                features: [
                  "Complete Zoho One implementation",
                  "Custom integrations",
                  "Advanced automation",
                  "Unlimited user training",
                  "6-month support",
                  "Dedicated account manager",
                ],
                popular: false,
              },
            ].map((package_, index) => (
              <Card
                key={index}
                className={`flex-1 justify-between border-0 shadow-medium p-8 relative ${
                  package_.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* {package_.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )} */}
                <div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{package_.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {package_.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {package_.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Button
                      asChild
                      className={`w-full ${
                        package_.popular
                          ? "gradient-primary text-white"
                          : "variant-outline"
                      }`}
                    >
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss which services will best help you achieve your business goals."
        benefits={[
          "Free consultation & assessment",
          "Custom implementation roadmap",
          "Transparent pricing",
        ]}
      />
    </div>
  );
};

export default Services;
