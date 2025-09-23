import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShoppingCart, 
  Stethoscope, 
  GraduationCap,
  Factory,
  Landmark,
  Truck,
  Users,
  BarChart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import CTASection from '@/components/CTASection';

const Industries = () => {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Real Estate",
      description: "Streamline property management, client relationships, and sales processes with integrated Zoho solutions.",
      challenges: [
        "Managing multiple property listings",
        "Client communication and follow-ups",
        "Document management and contracts",
        "Lead tracking and conversion"
      ],
      solutions: [
        "Zoho CRM for lead management",
        "Zoho Inventory for property tracking",
        "Zoho Sign for digital contracts",
        "Automated follow-up workflows"
      ],
      results: [
        "40% increase in lead conversion",
        "60% faster contract processing",
        "Improved client communication"
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-secondary" />,
      title: "E-commerce & Retail",
      description: "Optimize inventory management, customer service, and multi-channel sales operations.",
      challenges: [
        "Multi-channel inventory management",
        "Customer service coordination",
        "Order processing delays",
        "Marketing automation needs"
      ],
      solutions: [
        "Zoho Inventory for stock management",
        "Zoho Desk for customer support",
        "Zoho Commerce for online sales",
        "Zoho Campaigns for marketing"
      ],
      results: [
        "30% reduction in stockouts",
        "50% faster order processing",
        "Improved customer satisfaction"
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-accent" />,
      title: "Healthcare & Medical",
      description: "Enhance patient care, appointment scheduling, and medical record management.",
      challenges: [
        "Patient appointment scheduling",
        "Medical records management",
        "Insurance claim processing",
        "Compliance requirements"
      ],
      solutions: [
        "Zoho Bookings for appointments",
        "Custom medical record system",
        "Zoho Creator for compliance",
        "Automated billing processes"
      ],
      results: [
        "25% increase in appointment efficiency",
        "Reduced administrative overhead",
        "Better patient satisfaction"
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Education & Training",
      description: "Manage student enrollment, course delivery, and administrative processes efficiently.",
      challenges: [
        "Student enrollment management",
        "Course content delivery",
        "Progress tracking",
        "Communication with stakeholders"
      ],
      solutions: [
        "Zoho CRM for student management",
        "Zoho Learn for course delivery",
        "Automated progress reporting",
        "Parent-student communication tools"
      ],
      results: [
        "Improved student engagement",
        "Streamlined administrative tasks",
        "Better academic outcomes"
      ]
    },
    {
      icon: <Factory className="h-12 w-12 text-secondary" />,
      title: "Manufacturing",
      description: "Optimize production planning, supply chain management, and quality control processes.",
      challenges: [
        "Production planning complexity",
        "Supply chain visibility",
        "Quality control tracking",
        "Inventory optimization"
      ],
      solutions: [
        "Zoho Inventory for supply chain",
        "Production planning workflows",
        "Quality tracking systems",
        "Real-time reporting dashboards"
      ],
      results: [
        "20% improvement in efficiency",
        "Reduced waste and costs",
        "Better quality control"
      ]
    },
    {
      icon: <Landmark className="h-12 w-12 text-accent" />,
      title: "Financial Services",
      description: "Enhance client management, compliance tracking, and financial reporting capabilities.",
      challenges: [
        "Client relationship management",
        "Regulatory compliance",
        "Document security",
        "Financial reporting accuracy"
      ],
      solutions: [
        "Secure CRM implementation",
        "Compliance workflow automation",
        "Document management system",
        "Custom financial dashboards"
      ],
      results: [
        "Enhanced client satisfaction",
        "Improved compliance rates",
        "Streamlined reporting"
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Logistics & Transportation",
      description: "Streamline fleet management, route optimization, and delivery tracking systems.",
      challenges: [
        "Fleet management complexity",
        "Route optimization needs",
        "Delivery tracking issues",
        "Driver communication"
      ],
      solutions: [
        "Custom fleet management system",
        "Route planning automation",
        "Real-time delivery tracking",
        "Driver mobile applications"
      ],
      results: [
        "15% reduction in fuel costs",
        "Improved delivery times",
        "Better customer visibility"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Professional Services",
      description: "Optimize project management, client billing, and resource allocation processes.",
      challenges: [
        "Project time tracking",
        "Client billing accuracy",
        "Resource allocation",
        "Profitability analysis"
      ],
      solutions: [
        "Zoho Projects for management",
        "Automated time tracking",
        "Custom billing systems",
        "Profitability dashboards"
      ],
      results: [
        "30% better project margins",
        "Accurate time tracking",
        "Improved client satisfaction"
      ]
    }
  ];

  const commonBenefits = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and reporting across all business functions."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Improved Collaboration", 
      description: "Connect teams and departments with integrated communication and project management tools."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline processes to boost overall productivity."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Industries We Serve
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              Specialized Zoho implementations tailored to the unique needs and challenges 
              of your industry. We understand your business because we've helped others like you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each industry has unique challenges. Our expert team delivers customized Zoho solutions 
              that address your specific business needs and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-medium p-8 hover:shadow-large transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  {industry.icon}
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="text-sm text-muted-foreground">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-muted-foreground">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-success mb-3">Typical Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.results.map((result, resultIndex) => (
                      <span 
                        key={resultIndex} 
                        className="bg-success/10 text-success text-xs px-3 py-1 rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact" className="flex items-center justify-center space-x-2">
                      <span>Discuss Your {industry.title} Needs</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Universal Benefits Across Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              Regardless of your industry, these benefits apply to every Zoho implementation we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {commonBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Zovysys for Your Industry?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft p-8">
              <h3 className="text-2xl font-semibold mb-4">Deep Industry Knowledge</h3>
              <p className="text-muted-foreground mb-4">
                We don't just implement Zoho—we understand your industry's unique challenges, 
                regulations, and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Industry-specific workflows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Compliance expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Best practice implementation</span>
                </li>
              </ul>
            </Card>

            <Card className="border-0 shadow-soft p-8">
              <h3 className="text-2xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-muted-foreground mb-4">
                Our success stories across multiple industries demonstrate our ability 
                to deliver results that matter to your bottom line.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Measurable ROI improvements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Operational efficiency gains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Enhanced customer satisfaction</span>
                </li>
              </ul>
            </Card>

            <Card className="border-0 shadow-soft p-8">
              <h3 className="text-2xl font-semibold mb-4">Ongoing Partnership</h3>
              <p className="text-muted-foreground mb-4">
                We're not just implementers—we're your long-term technology partners, 
                helping you evolve and grow with changing industry needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Continuous optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Technology updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Strategic guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Industry Operations?"
        subtitle="Let's discuss how our industry-specific Zoho expertise can help your business thrive."
        benefits={[
          "Industry-focused consultation",
          "Customized solution design",
          "Proven implementation methodology"
        ]}
      />
    </div>
  );
};

export default Industries;