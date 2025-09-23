import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  benefits?: string[];
  className?: string;
}

const CTASection = ({ 
  title = "Ready to Transform Your Business?",
  subtitle = "Get a free consultation with our Zoho experts and discover how we can help streamline your operations.",
  benefits = [
    "Free 30-minute consultation",
    "Custom solution roadmap",
    "No commitment required"
  ],
  className = ""
}: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 gradient-primary ${className}`}>
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-slide-up">
            {subtitle}
          </p>
          
          {/* Benefits */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 shadow-large group"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>

          {/* Trust Signal */}
          <p className="text-blue-200 text-sm mt-6">
            ✨ Trusted by 100+ businesses • 5+ years of Zoho expertise • Certified Zoho Partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;