
import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-sm font-medium text-foreground/80 mb-4 opacity-0" ref={headingRef} style={{animationDelay: '0.1s'}}>
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Simpler, cheaper, fairer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient opacity-0" ref={headingRef} style={{animationDelay: '0.3s'}}>
              One link for<br/>everything you do
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-lg opacity-0" ref={subheadingRef} style={{animationDelay: '0.5s'}}>
              Share all your content with one simple link. Pay only for what you use, not for features you'll never need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0" ref={ctaRef} style={{animationDelay: '0.7s'}}>
              <Button href="#signup" size="lg">
                Get Started
              </Button>
              <Button href="#demo" variant="outline" size="lg">
                See Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-3 mt-4 opacity-0" style={{animationDelay: '0.9s'}}>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-secondary/70 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-secondary/50 border-2 border-white"></div>
              </div>
              <span className="text-sm text-foreground/70">
                Trusted by <span className="font-semibold">10,000+</span> creators
              </span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={imageRef} style={{animationDelay: '0.9s'}}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl blur opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-border/40">
                <div className="bg-secondary/30 p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/40"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/40"></div>
                    <div className="flex-1 ml-2">
                      <div className="h-6 bg-secondary/70 rounded w-4/5 mx-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                      <div className="text-xl font-semibold">LW</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">@linkwise</h3>
                    <p className="text-sm text-foreground/60">Sharing simplified</p>
                  </div>
                  <div className="space-y-3 pt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg bg-secondary/30 h-12 flex items-center justify-center">
                        <div className="w-4/5 h-4 bg-secondary/70 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-16 top-1/3 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
