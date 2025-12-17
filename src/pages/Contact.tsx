import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Send,
  Calendar,
  Users,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      content: "info@zovysys.com",
      description: "Send us an email anytime",
      link: "mailto:info@zovysys.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Call Us", 
      content: "+91 90437 65284",
      description: "Mon-Fri from 8am to 6pm EST",
      link: "tel:+919043765284"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Visit Us",
      content: "No 24, Brahminar Street, Mangalam Village and post, Tiruvannamalai, Tamilnadu - 606 752, India.",
      description: "Tech City, TC 12345",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM EST",
      description: "Weekend support available",
      link: "#"
    }
  ];

  const benefits = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Free 30-Minute Consultation",
      description: "Get expert advice on your Zoho implementation needs at no cost."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Dedicated Project Team",
      description: "Work with experienced Zoho specialists committed to your success."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Quick Response Time",
      description: "We respond to all inquiries within 2 hours during business hours."
    }
  ];

  const faqs = [
    {
      question: "How long does a typical Zoho implementation take?",
      answer: "Implementation timelines vary based on complexity. Simple CRM setups can take 2-4 weeks, while comprehensive Zoho One implementations may take 8-12 weeks."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we include comprehensive training as part of all our implementation packages. We also offer ongoing training sessions as your team grows."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer various support packages including 24/7 helpdesk, regular system optimization, and dedicated account management for enterprise clients."
    },
    {
      question: "Can you integrate Zoho with our existing systems?",
      answer: "Absolutely! We specialize in custom integrations and can connect Zoho with most third-party applications through APIs or custom connectors."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Get Your Free Consultation
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              Ready to transform your business with Zoho? Let's discuss your needs and create 
              a customized implementation plan that delivers real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a 
                customized proposal for your business.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="crm-implementation">Zoho CRM Implementation</option>
                    <option value="zoho-one">Zoho One Architecture</option>
                    <option value="automation">Business Process Automation</option>
                    <option value="integrations">Custom Integrations</option>
                    <option value="training">Training & Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    rows={6}
                    placeholder="Tell us about your project, current challenges, and what you hope to achieve with Zoho..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold group"
                >
                  <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Prefer to talk directly? We're here to help through multiple channels.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft p-6">
                    <div className="flex items-start space-x-4">
                      {info.icon}
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link !== "#" ? (
                          <a 
                            href={info.link} 
                            className="text-primary hover:underline font-medium block"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="font-medium">{info.content}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Why Contact Us */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Contact Zovysys?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {benefit.icon}
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our Zoho implementation services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground ml-8">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section (Placeholder) */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              We're located in the heart of the business district, easily accessible by car or public transport.
            </p>
          </div>
          
          <div className="bg-gradient-subtle rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground">
                123 Business District, Suite 100<br />
                Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;