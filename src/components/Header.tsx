import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/ColCord Logo White.png" 
              alt="Colcord" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-medium text-white">Colcord</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="mailto:team@colcord.co.in?subject=Waitlist Registration&body=Hi, I would like to join the Colcord waitlist."
              className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-300"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="mailto:team@colcord.co.in?subject=Waitlist Registration&body=Hi, I would like to join the Colcord waitlist."
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-300 w-full text-center"
              >
                Join Waitlist
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};