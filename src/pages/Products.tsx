import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Mail, 
  DollarSign, 
  Users, 
  Scale, 
  HeadphonesIcon, 
  PieChart, 
  FolderKanban,
  Code,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import CTASection from '@/components/CTASection';

const Products = () => {
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

  const productCategories = [
    {
      id: 'sales-marketing',
      title: 'Sales & Marketing',
      icon: BarChart3,
      description: 'Complete sales automation and marketing solutions',
      gradient: 'from-blue-500 to-cyan-500',
      products: [
        { name: 'Zoho CRM', description: 'Customer relationship management', features: ['Lead Management', 'Sales Pipeline', 'Analytics'] },
        { name: 'Zoho Campaigns', description: 'Email marketing automation', features: ['Email Templates', 'A/B Testing', 'Analytics'] },
        { name: 'Zoho Social', description: 'Social media management', features: ['Post Scheduling', 'Analytics', 'Team Collaboration'] },
        { name: 'Zoho Survey', description: 'Customer feedback collection', features: ['Custom Surveys', 'Real-time Results', 'Integration'] },
      ]
    },
    {
      id: 'email-collaboration',
      title: 'Email & Collaboration',
      icon: Mail,
      description: 'Enterprise communication and collaboration tools',
      gradient: 'from-green-500 to-teal-500',
      products: [
        { name: 'Zoho Mail', description: 'Professional email hosting', features: ['Custom Domain', 'Mobile Apps', 'Security'] },
        { name: 'Zoho WorkDrive', description: 'Cloud file storage and sync', features: ['File Sharing', 'Version Control', 'Collaboration'] },
        { name: 'Zoho Connect', description: 'Internal social network', features: ['Team Chat', 'Groups', 'Activity Feeds'] },
        { name: 'Zoho Meeting', description: 'Video conferencing solution', features: ['Screen Sharing', 'Recording', 'Webinars'] },
      ]
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: DollarSign,
      description: 'Comprehensive financial management solutions',
      gradient: 'from-purple-500 to-pink-500',
      products: [
        { name: 'Zoho Books', description: 'Online accounting software', features: ['Invoicing', 'Expense Tracking', 'Reports'] },
        { name: 'Zoho Invoice', description: 'Professional invoicing', features: ['Custom Templates', 'Payment Gateway', 'Automation'] },
        { name: 'Zoho Expense', description: 'Expense management', features: ['Receipt Scanning', 'Approval Workflow', 'Integration'] },
        { name: 'Zoho Subscriptions', description: 'Recurring billing management', features: ['Subscription Plans', 'Dunning', 'Analytics'] },
      ]
    },
    {
      id: 'human-resources',
      title: 'Human Resources',
      icon: Users,
      description: 'Complete HR management and employee engagement',
      gradient: 'from-orange-500 to-red-500',
      products: [
        { name: 'Zoho People', description: 'HR management system', features: ['Employee Database', 'Attendance', 'Performance'] },
        { name: 'Zoho Recruit', description: 'Applicant tracking system', features: ['Job Posting', 'Resume Parsing', 'Interview Scheduling'] },
        { name: 'Zoho Payroll', description: 'Payroll processing', features: ['Salary Calculation', 'Tax Compliance', 'Reports'] },
        { name: 'Zoho Survey (HR)', description: 'Employee feedback', features: ['Engagement Surveys', 'Exit Interviews', 'Analytics'] },
      ]
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: Scale,
      description: 'Legal practice management and compliance',
      gradient: 'from-indigo-500 to-blue-500',
      products: [
        { name: 'Zoho Contracts', description: 'Contract lifecycle management', features: ['Template Library', 'E-signatures', 'Approval Workflow'] },
        { name: 'Zoho Sign', description: 'Digital signature solution', features: ['Legally Binding', 'Multi-party Signing', 'Audit Trail'] },
        { name: 'Zoho Vault', description: 'Password management', features: ['Secure Storage', 'Team Sharing', 'Access Control'] },
      ]
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      icon: HeadphonesIcon,
      description: 'Customer service and support solutions',
      gradient: 'from-teal-500 to-green-500',
      products: [
        { name: 'Zoho Desk', description: 'Help desk software', features: ['Ticket Management', 'Knowledge Base', 'Automation'] },
        { name: 'Zoho SalesIQ', description: 'Live chat and visitor tracking', features: ['Real-time Chat', 'Visitor Analytics', 'Lead Scoring'] },
        { name: 'Zoho Assist', description: 'Remote support software', features: ['Screen Sharing', 'File Transfer', 'Session Recording'] },
      ]
    },
    {
      id: 'bi-analytics',
      title: 'BI & Analytics',
      icon: PieChart,
      description: 'Business intelligence and data analytics',
      gradient: 'from-cyan-500 to-blue-500',
      products: [
        { name: 'Zoho Analytics', description: 'Self-service BI platform', features: ['Data Visualization', 'Custom Reports', 'Dashboards'] },
        { name: 'Zoho Reports', description: 'Reporting and analytics', features: ['Drag-drop Designer', 'Scheduled Reports', 'Collaboration'] },
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: FolderKanban,
      description: 'Project planning and team collaboration',
      gradient: 'from-pink-500 to-rose-500',
      products: [
        { name: 'Zoho Projects', description: 'Project management software', features: ['Gantt Charts', 'Time Tracking', 'Collaboration'] },
        { name: 'Zoho Sprints', description: 'Agile project management', features: ['Scrum Boards', 'Burndown Charts', 'Retrospectives'] },
        { name: 'Zoho BookTime', description: 'Time tracking solution', features: ['Time Sheets', 'Project Tracking', 'Billing'] },
      ]
    },
    {
      id: 'developer-platform',
      title: 'Developer Platform',
      icon: Code,
      description: 'Low-code/no-code development platform',
      gradient: 'from-violet-500 to-purple-500',
      products: [
        { name: 'Zoho Creator', description: 'Custom app development', features: ['Drag-drop Builder', 'Workflow Automation', 'Integration'] },
        { name: 'Zoho Flow', description: 'Integration platform', features: ['App Connectors', 'Workflow Builder', 'API Management'] },
        { name: 'Zoho Deluge', description: 'Cloud scripting platform', features: ['Custom Functions', 'API Integration', 'Automation'] },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-glow">
              <Zap className="h-4 w-4" />
              50+ Zoho Products & Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete <span className="gradient-primary bg-clip-text px-4 text-white whitespace-nowrap">Zoho Ecosystem</span> at Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover comprehensive business solutions across all categories. From sales automation to project management, we help you leverage the complete Zoho suite for your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white font-semibold px-8 py-3 hover:shadow-medium transition-all duration-300">
                <Link to="/contact">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/services">View Implementation Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse-glow"></div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce-3d">
          <div className="w-12 h-12 bg-secondary/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-rotate-3d">
          <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Zoho Products by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of Zoho solutions, organized by business function to help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className={`scroll-reveal tilt-card group hover:shadow-large transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {category.products.slice(0, 3).map((product) => (
                        <div key={product.name} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{product.name}</h4>
                            <p className="text-xs text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    >
                      <Link to={`/contact?category=${category.id}`}>
                        Explore {category.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed overview of all Zoho products we implement and support for your business transformation.
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="scroll-reveal" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} p-3`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.products.map((product, productIndex) => (
                      <Card 
                        key={product.name} 
                        className="tilt-card group hover:shadow-medium transition-all duration-300 bg-white/90 backdrop-blur-sm border-border/50"
                        style={{ animationDelay: `${(categoryIndex * 0.2) + (productIndex * 0.1)}s` }}
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {product.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Products;