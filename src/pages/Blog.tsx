import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Settings
} from 'lucide-react';
import CTASection from '@/components/CTASection';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Complete Guide to Zoho CRM Implementation in 2024",
    excerpt: "Learn the essential steps, best practices, and common pitfalls to avoid when implementing Zoho CRM for your business. This comprehensive guide covers everything from initial setup to advanced customization.",
    category: "Implementation Guides",
    readTime: "12 min read",
    date: "December 15, 2024",
    author: "Alex Thompson",
    image: "/api/placeholder/800/400",
    tags: ["Zoho CRM", "Implementation", "Best Practices"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Zoho Automation Workflows That Will Save Your Team Hours",
      excerpt: "Discover the most effective automation workflows that can eliminate manual tasks and boost productivity across your organization.",
      category: "Automation",
      readTime: "8 min read",
      date: "December 12, 2024",
      author: "Sarah Martinez",
      tags: ["Automation", "Productivity", "Workflows"]
    },
    {
      id: 3,
      title: "Zoho One vs Individual Apps: Which is Right for Your Business?",
      excerpt: "A detailed comparison to help you decide between Zoho's integrated suite and standalone applications based on your business needs.",
      category: "Strategy",
      readTime: "10 min read", 
      date: "December 10, 2024",
      author: "Alex Thompson",
      tags: ["Zoho One", "Strategy", "Business Planning"]
    },
    {
      id: 4,
      title: "How to Set Up Perfect Sales Pipeline in Zoho CRM",
      excerpt: "Step-by-step guide to creating an effective sales pipeline that matches your sales process and drives better conversion rates.",
      category: "Sales & CRM",
      readTime: "6 min read",
      date: "December 8, 2024",
      author: "Sarah Martinez",
      tags: ["Sales Pipeline", "CRM Setup", "Sales Process"]
    },
    {
      id: 5,
      title: "Data Migration to Zoho: A Complete Checklist",
      excerpt: "Ensure a smooth transition from your legacy systems with our comprehensive data migration checklist and best practices.",
      category: "Implementation Guides",
      readTime: "15 min read",
      date: "December 5, 2024",
      author: "Alex Thompson", 
      tags: ["Data Migration", "Implementation", "Checklist"]
    },
    {
      id: 6,
      title: "Integrating Zoho with Popular Business Tools",
      excerpt: "Learn how to connect Zoho with Slack, QuickBooks, Shopify, and other essential business applications for seamless workflows.",
      category: "Integrations",
      readTime: "9 min read",
      date: "December 3, 2024",
      author: "Sarah Martinez",
      tags: ["Integrations", "Third-party Tools", "Workflow"]
    },
    {
      id: 7,
      title: "ROI Calculator: Measuring Your Zoho Implementation Success",
      excerpt: "Track and measure the return on investment of your Zoho implementation with our proven metrics and calculation methods.",
      category: "Business Impact",
      readTime: "7 min read",
      date: "November 30, 2024",
      author: "Alex Thompson",
      tags: ["ROI", "Metrics", "Business Impact"]
    }
  ];

  const categories = [
    { name: "Implementation Guides", count: 15, icon: <BookOpen className="h-4 w-4" /> },
    { name: "Automation", count: 12, icon: <Settings className="h-4 w-4" /> },
    { name: "Sales & CRM", count: 18, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Strategy", count: 8, icon: <Lightbulb className="h-4 w-4" /> },
    { name: "Integrations", count: 10, icon: <Settings className="h-4 w-4" /> },
    { name: "Business Impact", count: 6, icon: <TrendingUp className="h-4 w-4" /> }
  ];

  const popularTags = [
    "Zoho CRM", "Automation", "Implementation", "Best Practices", "Zoho One",
    "Sales Pipeline", "Data Migration", "Integrations", "ROI", "Productivity"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Zoho Insights & Tips
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed animate-slide-up">
              Expert insights, implementation guides, and best practices to help you 
              get the most out of your Zoho investment.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and tips..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border-0 bg-white/90 backdrop-blur-sm text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-large"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most comprehensive and popular content.</p>
          </div>

          <Card className="border-0 shadow-large overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-subtle h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Featured Article Image</p>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-muted-foreground">{featuredPost.date}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="gradient-primary text-white font-semibold group">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid & Sidebar */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">Stay updated with the latest Zoho insights and best practices.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                    <div className="bg-gradient-subtle h-48 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-primary" />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-secondary text-white text-xs px-2 py-1 rounded font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.author}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-0 shadow-soft p-6">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between hover:text-primary cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                          {category.icon}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Popular Tags */}
                <Card className="border-0 shadow-soft p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent hover:text-white cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 shadow-soft p-6 bg-gradient-primary text-white">
                  <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest Zoho tips, implementation guides, and industry insights delivered to your inbox.
                  </p>
                  
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded text-foreground text-sm"
                    />
                    <Button size="sm" className="w-full bg-white text-primary hover:bg-gray-100">
                      Subscribe Now
                    </Button>
                  </div>
                </Card>

                {/* Recent Comments */}
                <Card className="border-0 shadow-soft p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
                  <div className="space-y-4">
                    {[
                      { author: "John Doe", comment: "Great insights on CRM implementation!", article: "Zoho CRM Guide" },
                      { author: "Jane Smith", comment: "This automation tip saved us hours!", article: "Automation Workflows" },
                      { author: "Mike Johnson", comment: "Very helpful migration checklist", article: "Data Migration Guide" }
                    ].map((comment, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <p className="text-sm font-medium">{comment.author}</p>
                        <p className="text-xs text-muted-foreground mb-1">{comment.comment}</p>
                        <p className="text-xs text-primary">on "{comment.article}"</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of business owners and Zoho users who get our weekly insights 
              and implementation tips delivered straight to their inbox.
            </p>

            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary text-white font-semibold px-6">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Personalized Zoho Guidance?"
        subtitle="Get expert advice tailored to your specific business needs and implementation challenges."
        benefits={[
          "Free consultation with Zoho expert",
          "Customized implementation roadmap",
          "Best practice recommendations"
        ]}
      />
    </div>
  );
};

export default Blog;