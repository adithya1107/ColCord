import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaitlistForm } from './WaitlistForm';
import { AdminPanel } from './AdminPanel';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/ColCord.png" 
                alt="ColCord" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-medium text-white">ColCord</span>
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

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="hero"
                size="lg"
                className="text-lg px-5 py-4 h-3 bg-palette-white font-medium text-sm text-palette-black hover:bg-white/90 rounded-none"
              >
                Join Waitlist
              </Button>
              {/* <Button
                onClick={() => setIsAdminOpen(true)}
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-white hover:bg-white/10 h-10 w-10"
                title="Admin Panel"
              >
                <Lock className="h-5 w-5" />
              </Button> */}
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
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    onClick={() => {
                      setIsWaitlistOpen(true);
                      setIsMenuOpen(false);
                    }}
                    variant="hero"
                    className="w-full bg-[#292929] text-white"
                  >
                    Join the Waitlist
                  </Button>
                  {/* <Button
                    onClick={() => {
                      setIsAdminOpen(true);
                      setIsMenuOpen(false);
                    }}
                    variant="ghost"
                    className="w-full text-white/60 hover:text-white hover:bg-white/10 justify-start gap-2"
                  >
                    <Lock className="h-4 w-4" />
                    Admin Panel
                  </Button> */}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      {/* <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      /> */}
    </>
  );
};