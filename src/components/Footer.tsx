
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                LinkWise
              </span>
            </Link>
            <p className="text-foreground/70 mb-4">
              The simple way to share your content with a single link, with usage-based pricing that scales with you.
            </p>
            <div className="flex space-x-4">
              {['#', '#', '#'].map((href, i) => (
                <a 
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-foreground/20"></div>
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Examples', 'Customers']
            },
            {
              title: 'Resources',
              links: ['Documentation', 'Blog', 'Guides', 'Support']
            },
            {
              title: 'Company',
              links: ['About', 'Terms', 'Privacy', 'Contact']
            }
          ].map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    {link === "Terms" ? (
                      <Link
                        to="/terms"
                        className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                      >
                        Terms
                      </Link>
                    ) : (
                      <a 
                        href="#" 
                        className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LinkWise. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Terms
            </Link>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
