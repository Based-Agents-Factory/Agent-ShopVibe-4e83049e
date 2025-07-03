
import React, { useEffect, useRef } from 'react';
import { Link2, Clock, BarChart3, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Link2 className="h-6 w-6 text-primary" />,
    title: 'Unlimited Links',
    description: 'Create as many links as you need. No restrictions on the number of links you can share.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Real-time Analytics',
    description: 'Track detailed analytics for each link. See where your visitors are coming from in real-time.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: 'Usage-based Pricing',
    description: 'Only pay for what you use. No monthly fees or hidden costs. Scale up or down as needed.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: 'Custom Domains',
    description: 'Use your own domain to make your links more professional and on-brand.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          ref={sectionRef}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Simple, yet powerful
          </h2>
          <p className="text-foreground/70 text-lg">
            Everything you need to manage your online presence in one place, with fair pricing based only on what you use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/40 transition-all duration-300 hover:shadow-md opacity-0 transform translate-y-4"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl p-8 shadow-sm border border-border/40 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Custom Link Styling</h3>
              <p className="text-foreground/70 mb-6">
                Make your links reflect your brand with complete customization options. Change colors, fonts, and add your logo.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom backgrounds and button styles',
                  'Personal branding options',
                  'Custom animations and transitions',
                  'Mobile-optimized experience'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/20 rounded-lg p-6 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg blur opacity-30"></div>
              <div className="relative space-y-3">
                <div className="h-12 bg-white rounded-lg shadow-sm w-full flex items-center px-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/50 mr-3"></div>
                  <div className="h-4 bg-secondary/40 rounded w-2/3"></div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 bg-white rounded-lg shadow-sm w-full flex items-center px-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/70 mr-3"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-secondary/40 rounded w-2/3 mb-1"></div>
                      <div className="h-2 bg-secondary/30 rounded w-1/2"></div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-secondary/30"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
