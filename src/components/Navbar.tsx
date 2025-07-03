
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            LinkWise
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors duration-300 link-underline">
            Home
          </Link>
          <Link to="#features" className="text-foreground/80 hover:text-foreground transition-colors duration-300 link-underline">
            Features
          </Link>
          <Link to="#pricing" className="text-foreground/80 hover:text-foreground transition-colors duration-300 link-underline">
            Pricing
          </Link>
          <Link to="/terms" className="text-foreground/80 hover:text-foreground transition-colors duration-300 link-underline">
            Terms
          </Link>
          <Button href="#signup" variant="primary" size="sm">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/50 transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="#features" 
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={toggleMobileMenu}
          >
            Features
          </Link>
          <Link 
            to="#pricing" 
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/terms"
            className="text-foreground/80 hover:text-foreground py-2 transition-colors"
            onClick={toggleMobileMenu}
          >
            Terms
          </Link>
          <Button href="#signup" variant="primary" fullWidth>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
