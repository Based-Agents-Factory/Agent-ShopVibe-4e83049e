
import React, { useRef, useEffect } from 'react';
import Button from './Button';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const usageItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const comparisonRef = useRef<HTMLDivElement>(null);

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
    if (pricingCardRef.current) observer.observe(pricingCardRef.current);
    if (comparisonRef.current) observer.observe(comparisonRef.current);
    
    usageItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const usageItems = [
    { 
      name: 'Page Views', 
      price: '$0.50 per 1,000 views',
      description: 'We pay $0.43 for server costs, adding only a 15% markup'
    },
    { 
      name: 'Link Clicks', 
      price: '$0.20 per 100 clicks',
      description: 'We pay $0.17 for tracking and processing, with a 15% markup'
    },
    { 
      name: 'Custom Domains', 
      price: '$1.00 per domain monthly',
      description: 'Our DNS provider charges us $0.87/domain, we add 15%'
    },
    { 
      name: 'Analytics Storage', 
      price: '$0.10 per month per GB',
      description: 'Based on our cloud storage costs of $0.087/GB + 15%'
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          ref={sectionRef}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Transparent, usage-based pricing
          </h2>
          <p className="text-foreground/70 text-lg">
            We charge only 15% above our actual costs. No subscriptions, no hidden fees, no feature paywalls.
            You only pay for what you use, when you use it.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-border/40 overflow-hidden opacity-0"
          ref={pricingCardRef}
          style={{animationDelay: '0.3s'}}
        >
          <div className="p-8 border-b border-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-sm font-medium text-foreground/80 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Cost + 15% Model
                </div>
                <h3 className="text-2xl font-bold">Pay-As-You-Go</h3>
                <p className="text-foreground/70 mt-2">The fairest pricing model for everyone</p>
              </div>
              
              <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end">
                <div className="text-4xl font-bold">$0</div>
                <p className="text-foreground/70">Base fee</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h4 className="font-semibold mb-6">Our Cost + 15% Pricing:</h4>
            
            <div className="space-y-6">
              {usageItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border/40 opacity-0"
                  ref={el => (usageItemRefs.current[index] = el)}
                  style={{animationDelay: `${0.4 + (0.1 * index)}s`}}
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                  <div className="md:text-right mt-3 md:mt-0">
                    <div className="font-semibold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-4">Example:</h4>
              <p className="text-foreground/80 mb-4">
                If your page gets 5,000 views and 300 link clicks in a month with 1 custom domain:
              </p>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>5,000 page views</span>
                  <span>$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span>300 link clicks</span>
                  <span>$0.60</span>
                </div>
                <div className="flex justify-between">
                  <span>1 custom domain</span>
                  <span>$1.00</span>
                </div>
                <div className="pt-2 border-t border-border/40 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total monthly cost</span>
                    <span>$4.10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100 opacity-0"
              ref={comparisonRef}
              style={{animationDelay: '0.7s'}}
            >
              <h4 className="font-semibold mb-4 text-green-800">LinkWise vs. LinkTree:</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-medium">Feature</div>
                  <div className="col-span-1 font-medium text-primary">LinkWise</div>
                  <div className="col-span-1 font-medium text-gray-500">LinkTree</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border/40 pb-3">
                  <div className="col-span-1">Monthly fee for basic usage</div>
                  <div className="col-span-1 text-green-600 font-semibold">$0</div>
                  <div className="col-span-1 text-gray-600">$5-9/month</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border/40 pb-3">
                  <div className="col-span-1">Custom domain</div>
                  <div className="col-span-1 text-green-600 font-semibold">$1/month per domain</div>
                  <div className="col-span-1 text-gray-600">$9+/month (premium plan)</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border/40 pb-3">
                  <div className="col-span-1">Analytics</div>
                  <div className="col-span-1 text-green-600 font-semibold">Included, pay only for storage</div>
                  <div className="col-span-1 text-gray-600">Limited in free plan</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border/40 pb-3">
                  <div className="col-span-1">Unlimited links</div>
                  <div className="col-span-1 text-green-600 font-semibold">Always included</div>
                  <div className="col-span-1 text-gray-600">Premium plans only</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1">Average monthly cost</div>
                  <div className="col-span-1 text-green-600 font-semibold">$2-5 based on actual usage</div>
                  <div className="col-span-1 text-gray-600">$9+ fixed monthly fee</div>
                </div>
              </div>
              
              <p className="mt-6 text-foreground/80 text-sm">
                With LinkWise, a typical creator saves 50-80% compared to traditional subscription services,
                while getting all premium features from day one.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Button href="#signup" size="lg">Get Started</Button>
              <p className="mt-4 text-sm text-foreground/60">No credit card required to start</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
