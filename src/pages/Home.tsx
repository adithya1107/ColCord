import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  Calendar, 
  Briefcase, 
  Shield, 
  BarChart3,
  Bell,
  GraduationCap,
  Building,
  UserCheck,
  Heart,
  Zap,
  Target,
  ChevronRight,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaitlistForm } from '@/components/WaitlistForm';

export const Home = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setCurrentModule((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    {
      icon: <BookOpen className="h-6 w-6 text-palette-white" />,
      title: 'Academic Management',
      description: 'Streamlined course registration, grade tracking, and academic planning.',
      scenario: 'Students register for courses, track assignments, and view grades all in one place'
    },
    {
      icon: <Bell className="h-6 w-6 text-palette-white" />,
      title: 'Communication Hub',
      description: 'Unified messaging system connecting all university stakeholders.',
      scenario: 'Professors send class updates, admin shares campus news, students collaborate'
    },
    {
      icon: <Calendar className="h-6 w-6 text-palette-white" />,
      title: 'Campus Life',
      description: 'Event management, club activities, and campus engagement tools.',
      scenario: 'Students discover events, join clubs, book facilities, stay connected'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-palette-white" />,
      title: 'Career Services',
      description: 'Placement opportunities, internships, and alumni networking.',
      scenario: 'Students access job postings, connect with alumni mentors, track progress'
    },
    {
      icon: <Shield className="h-6 w-6 text-palette-white" />,
      title: 'Digital Identity',
      description: 'Secure campus access and integrated safety features.',
      scenario: 'Digital student IDs, secure building access, emergency notifications'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-palette-white" />,
      title: 'Analytics Dashboard',
      description: 'Role-specific insights and performance analytics.',
      scenario: 'Students see progress, faculty track performance, admin monitor metrics'
    }
  ];

  const userSegments = [
    {
      icon: <GraduationCap className="h-8 w-8 text-palette-white" />,
      title: 'Students',
      description: 'Complete academic journey management from enrollment to graduation.',
      features: ['Course Management', 'Assignment Tracking', 'Campus Events', 'Peer Networking']
    },
    {
      icon: <Users className="h-8 w-8 text-palette-white" />,
      title: 'Faculty',
      description: 'Comprehensive teaching tools and administrative workflows.',
      features: ['Course Creation', 'Student Management', 'Research Tools', 'Collaboration']
    },
    {
      icon: <Building className="h-8 w-8 text-palette-white" />,
      title: 'Administration',
      description: 'Institutional oversight with data-driven insights.',
      features: ['Operations Monitor', 'Analytics Dashboard', 'Resource Planning', 'Reporting']
    },
    {
      icon: <UserCheck className="h-8 w-8 text-palette-white" />,
      title: 'Alumni',
      description: 'Lifelong connection with alma mater and current students.',
      features: ['Networking Events', 'Mentorship Programs', 'Career Services', 'Giving Back']
    },
    {
      icon: <Heart className="h-8 w-8 text-palette-white" />,
      title: 'Parents',
      description: 'Stay informed about student progress and campus activities.',
      features: ['Academic Updates', 'Campus Notifications', 'Event Calendar', 'Communication']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-palette-black font-body">
        {/* Hero Section */}
        <section className="relative bg-palette-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-px h-32 bg-white/10"></div>
            <div className="absolute top-1/3 right-1/3 w-32 h-px bg-white/10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-px h-24 bg-white/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">

                  <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                    In Development
                  </div>
                  
                  <h1 className="font-heading text-6xl lg:text-8xl font-light text-palette-white mb-8 leading-none tracking-tight">
                    One Platform.
                    <span className="block font-bold">One Ecosystem</span>
                  </h1>
                  
                  <p className="font-body text-xl text-white/60 mb-12 max-w-2xl leading-relaxed font-light">
                    A comprehensive digital platform connecting students, faculty, administrators, 
                    alumni, and parents through seamless technology integration.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setIsWaitlistOpen(true)}
                      variant="hero"
                      size="lg"
                      className="px-8 py-4 font-medium bg-palette-white text-palette-black hover:bg-white/90 transition-all duration-300 flex items-center justify-center group rounded-none"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <a 
                      href="https://colcorddemo.vercel.app" target='_blank' rel='noreferrer'
                      className="border border-white/20 text-palette-white px-8 py-4 text-sm font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center lg:pt-1 lg:pb-0"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Request Demo
                    </a>
                  </div>
                </div>
                
                <div className="lg:col-span-5 hidden md:block">
                  <div className="relative">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-4">
                        <div className="h-16"></div>
                        <div className="h-24 bg-palette-white border border-white/20"></div>
                        <div className="h-12 bg-white/5 border border-white/10"></div>
                      </div>
                      <div className="space-y-4 mt-8">
                        <div className="h-20 bg-white/5 border border-white/10"></div>
                        <div className="h-16 bg-white/5 border border-white/10"></div>
                        <div className="h-28 bg-palette-white border border-white/20"></div>
                      </div>
                      <div className="space-y-4 mt-4">
                        <div className="h-24 bg-palette-white border border-white/20"></div>
                        <div className="h-12 bg-white/5 border border-white/10"></div>
                        <div className="h-20 bg-white/5 border border-white/10"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-palette-black via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Modules */}
        <section className="py-20 lg:py-32 bg-palette-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Platform <span className="font-bold">Modules</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-3xl font-light">
                Comprehensive functionality designed to address every aspect of university operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/5 border border-white/10 p-8 lg:p-12">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-4 border border-white/20">
                    {modules[currentModule].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-palette-white mb-4">{modules[currentModule].title}</h3>
                    <p className="font-body text-white/60 mb-6 text-lg font-light">{modules[currentModule].description}</p>
                    <div className="bg-white/5 p-4 border border-white/10">
                      <p className="font-body text-sm text-white/80 font-light">
                        {modules[currentModule].scenario}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div 
                    key={index} 
                    className={`bg-white/5 border p-6 transition-all duration-300 cursor-pointer ${
                      index === currentModule 
                        ? 'border-white/40 bg-white/10' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    onClick={() => setCurrentModule(index)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-white/10 p-2 border border-white/20">
                        {module.icon}
                      </div>
                    </div>
                    <h4 className="font-body text-sm font-medium text-palette-white mb-2">{module.title}</h4>
                    <div className="flex items-center text-white/40">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      <span className="font-body text-xs">Explore</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Segments */}
        <section className="py-20 lg:py-32 bg-palette-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Built for <span className="font-bold">Everyone</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-3xl font-light">
                Tailored experiences for every member of the university ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userSegments.slice(0, 3).map((segment, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="bg-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-white/20">
                    {segment.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-4 text-center">{segment.title}</h3>
                  <p className="font-body text-white/60 leading-relaxed mb-6 text-center font-light">{segment.description}</p>
                  <div className="space-y-2">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/60 font-body">
                        <div className="w-1 h-1 bg-white/40 mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {userSegments.slice(3).map((segment, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="bg-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-white/20">
                    {segment.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-4 text-center">{segment.title}</h3>
                  <p className="font-body text-white/60 leading-relaxed mb-6 text-center font-light">{segment.description}</p>
                  <div className="space-y-2">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/60 font-body">
                        <div className="w-1 h-1 bg-white/40 mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 lg:py-32 bg-white/5 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-8">
                  The <span className="font-bold">Challenge</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-palette-white mt-2 flex-shrink-0"></div>
                    <p className="font-body text-white/60 font-light">Multiple disconnected systems creating operational inefficiencies</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-palette-white mt-2 flex-shrink-0"></div>
                    <p className="font-body text-white/60 font-light">Students managing dozens of platforms for basic university functions</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-palette-white mt-2 flex-shrink-0"></div>
                    <p className="font-body text-white/60 font-light">Faculty overwhelmed by administrative complexity</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-palette-white mt-2 flex-shrink-0"></div>
                    <p className="font-body text-white/60 font-light">Administrators lacking unified institutional insights</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-semibold text-palette-white mb-6">Our Solution</h3>
                <p className="font-body text-white/60 mb-8 leading-relaxed font-light text-lg">
                  Colcord eliminates fragmentation by creating a unified ecosystem where every 
                  university function operates seamlessly within a single, intuitive platform.
                </p>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-palette-white" />
                  <span className="font-body text-palette-white font-medium">One platform, infinite possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-palette-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-8">
              Shape the <span className="font-bold">Future</span>
            </h2>
            <p className="font-body text-xl text-white/60 mb-16 max-w-3xl mx-auto font-light">
              Join our development journey and help create the platform that will transform 
              university experiences across India.
            </p>
            
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              variant="hero"
              size="lg"
              className="px-12 py-6 text-xl rounded-none font-medium bg-palette-white text-palette-black hover:bg-white/90 transition-all duration-300 flex items-center justify-center group mx-auto"
            >
              Join Our Waitlist
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </div>

      {/* Waitlist Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};