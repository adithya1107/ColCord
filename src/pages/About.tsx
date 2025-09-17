import React, { useEffect, useState } from 'react';
import { Target, Heart, Users, Award, Lightbulb, Globe, ExternalLink, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaitlistForm } from '@/components/WaitlistForm';

export const About = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const values = [
    {
      icon: <Target className="h-8 w-8 text-palette-white" />,
      title: 'Innovation',
      description: 'Building next-generation university technology with cutting-edge solutions and forward-thinking design.'
    },
    {
      icon: <Heart className="h-8 w-8 text-palette-white" />,
      title: 'Community-Centered',
      description: 'Every decision prioritizes the needs of students, faculty, and the entire university community.'
    },
    {
      icon: <Users className="h-8 w-8 text-palette-white" />,
      title: 'Collaboration',
      description: 'Great education happens when everyone in the university ecosystem works together seamlessly.'
    },
    {
      icon: <Award className="h-8 w-8 text-palette-white" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every aspect of our platform and service.'
    }
  ];

  const team = [
    {
      name: 'Anirudh',
      role: 'Co-Founder',
      image: '/anirudh.jpeg',
      linkedin: 'https://www.linkedin.com/in/android-aggarwal/',
      description: 'Passionate about creating technology solutions that transform educational experiences and connect university communities.'
    },
    {
      name: 'Shrisai',
      role: 'Co-Founder',
      image: '/shrisai.jpeg',
      linkedin: 'https://www.linkedin.com/in/shrisaihari/',
      description: 'Dedicated to building scalable platforms that simplify complex university operations and enhance student success.'
    },
    {
      name: 'Adithya',
      role: 'CTO',
      image: '/adithya.jpeg',
      linkedin: 'https://www.linkedin.com/in/adithyaadiga/',
      description: 'Leading technical architecture and development to build scalable, innovative solutions for the future of university technology.'
    },
    {
      name: 'Tanishq',
      role: 'Technical Lead',
      image: '/tanishq.png',
      linkedin: 'https://www.linkedin.com/in/tanishq-kochar/',
      description: 'Focused on creating user-friendly interfaces and experiences that empower students and faculty in their academic journeys.'
    },
    {
      name: 'Jeevith',
      role: 'Technical Lead',
      image: '/jeevith.png',
      linkedin: 'https://www.linkedin.com/in/jeevith-gangadhara-782b21311/',
      description: 'Bringing a vision for integrated university systems that enhance collaboration and streamline campus life.'
    },
    {
      name: 'Shreya',
      role: 'CMO',
      image: '/shreya.png',
      linkedin: 'https://www.linkedin.com/in/shreya-joshi-b4113b245/',
      description: 'Crafting compelling narratives and strategies to connect Colcord with university communities and drive engagement.'
    }
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style jsx>{`
        .textbook {
          position: relative;
          border-radius: 12px;
          padding: 40px 30px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: perspective(1000px) rotateX(5deg);
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        .textbook:hover {
          transform: perspective(1000px) rotateX(0deg) translateY(-10px);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .textbook::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.3) 50%, 
            rgba(255, 255, 255, 0.1) 100%);
          border-radius: 12px 12px 0 0;
        }
        
        .textbook::after {
          content: '';
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 20px;
          width: 3px;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(255, 255, 255, 0.1) 100%);
          border-radius: 2px;
        }
        
        .book-1 {
          background: linear-gradient(145deg, #000000 0%, #1a1a1a 100%);
          color: #ffffff;
        }
        
        .book-2 {
          background: linear-gradient(145deg, #292929 0%, #3d3d3d 100%);
          color: #ffffff;
        }
        
        .book-3 {
          background: linear-gradient(145deg, #5f5f5f 0%, #737373 100%);
          color: #ffffff;
        }
        
        .book-spine {
          position: absolute;
          left: -5px;
          top: 10px;
          bottom: 10px;
          width: 10px;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.05) 100%);
          border-radius: 5px 0 0 5px;
          box-shadow: inset 2px 0 4px rgba(0, 0, 0, 0.3);
        }
        
        .page-corner {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 20px 20px 0;
          border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
        }
        
        @media (max-width: 768px) {
          .textbook {
            transform: none;
            padding: 30px 25px;
          }
          
          .textbook:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-palette-black font-body">
        {/* Hero Section */}
        <section className="bg-palette-black py-20 lg:py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8 font-body">
                  <Lightbulb className="h-4 w-4 mr-2 text-palette-white" />
                  Our Vision
                </div>
                
                <h1 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-8 leading-tight">
                  Building the Future of
                  <span className="block font-bold">University Life</span>
                </h1>
                
                <p className="font-body text-xl text-white/60 mb-8 leading-relaxed font-light">
                  ColCord addresses the fundamental challenge of fragmented university 
                  systems by creating a unified ecosystem that transforms how educational 
                  institutions connect and serve their communities.
                </p>
                
                <div className="flex items-center space-x-4">
                  <Globe className="h-8 w-8 text-palette-white" />
                  <span className="font-body text-lg font-medium text-palette-white">
                    One platform, unified experience
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="bg-white/5 border border-white/10 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-white/10 border border-white/20"></div>
                      <div className="h-20 bg-palette-white border border-white/40"></div>
                      <div className="h-20 bg-palette-white border border-white/40"></div>
                      <div className="h-20 bg-white/10 border border-white/20"></div>
                    </div>
                    <div className="mt-6 text-center">
                      <span className="font-body text-sm font-medium text-white/60">Unified Ecosystem</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-palette-black border border-white/20 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-palette-white rounded-full animate-pulse"></div>
                      <span className="font-body text-sm font-medium text-palette-white">In Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-32 bg-palette-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Our <span className="font-bold">Mission</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-3xl mx-auto font-light">
                To create a unified digital ecosystem that eliminates friction in university life 
                and empowers every member of the academic community to thrive.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-semibold text-palette-white mb-4">Vision</h3>
                  <p className="font-body text-white/60 font-light">
                    A world where university technology enhances rather than complicates 
                    the educational experience for everyone.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-semibold text-palette-white mb-4">Impact</h3>
                  <p className="font-body text-white/60 font-light">
                    Creating seamless connections between students, faculty, administrators, 
                    alumni, and parents through unified technology.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-semibold text-palette-white mb-4">Future</h3>
                  <p className="font-body text-white/60 font-light">
                    Continuously evolving to meet the changing needs of modern universities 
                    and their diverse communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Core <span className="font-bold">Values</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-2xl mx-auto font-light">
                The principles guiding our development of ColCord and commitment to the university community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-palette-black border border-white/10 p-8 text-center hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <div className="bg-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-white/20">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-4">{value.title}</h3>
                  <p className="font-body text-white/60 font-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32 bg-palette-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Our <span className="font-bold">Team</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-2xl mx-auto font-light">
                Passionate innovators working together to revolutionize university technology.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* First row - Co-Founders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {team.slice(0, 2).map((member, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative w-32 h-32 mx-auto mb-6 group">
                      <img 
                        src={`${member.image}`} 
                        alt={`${member.name} profile`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.6)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-palette-white mb-2">{member.name}</h3>
                    <p className="font-body text-white/60 font-medium mb-4">{member.role}</p>
                    <p className="font-body text-sm text-white/60 mb-6 font-light">{member.description}</p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-palette-white hover:text-white/80 transition-colors duration-300 font-body"
                    >
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {team.slice(2, 4).map((member, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative w-32 h-32 mx-auto mb-6 group">
                      <img 
                        src={`${member.image}`} 
                        alt={`${member.name} profile`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.6)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-palette-white mb-2">{member.name}</h3>
                    <p className="font-body text-white/60 font-medium mb-4">{member.role}</p>
                    <p className="font-body text-sm text-white/60 mb-6 font-light">{member.description}</p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-palette-white hover:text-white/80 transition-colors duration-300 font-body"
                    >
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {team.slice(4, 6).map((member, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative w-32 h-32 mx-auto mb-6 group">
                      <img 
                        src={`${member.image}`} 
                        alt={`${member.name} profile`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.6)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-palette-white mb-2">{member.name}</h3>
                    <p className="font-body text-white/60 font-medium mb-4">{member.role}</p>
                    <p className="font-body text-sm text-white/60 mb-6 font-light">{member.description}</p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-palette-white hover:text-white/80 transition-colors duration-300 font-body"
                    >
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Story */}
        <section className="py-20 lg:py-32 bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
                Why <span className="font-bold">ColCord</span>
              </h2>
              <p className="font-body text-xl text-white/60 max-w-2xl mx-auto font-light">
                Understanding the challenges that led us to envision a better solution.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 p-8">
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-3">The Challenge</h3>
                  <p className="font-body text-white/60 font-light">
                    Universities operate with dozens of disconnected systems. Students struggle with 
                    multiple logins for course registration, assignments, campus events, and career services. 
                    Faculty waste time on redundant tasks across different platforms, and administrators lack 
                    unified insights. This fragmentation creates barriers to learning and community building.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-8">
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-3">The Opportunity</h3>
                  <p className="font-body text-white/60 font-light">
                    We saw an opportunity to reimagine university technology from the ground up. Instead of 
                    adding another tool to the mix, we're building a comprehensive ecosystem that brings 
                    everything together from academic management to campus life, from career services to 
                    alumni networking in one intuitive, powerful platform.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-8">
                  <h3 className="font-heading text-xl font-semibold text-palette-white mb-3">The Solution</h3>
                  <p className="font-body text-white/60 font-light">
                    Colcord is more than software it's a unified ecosystem designed to strengthen 
                    university communities. By connecting every stakeholder through one platform, we're 
                    creating the foundation for more engaged, efficient, and connected campus life that 
                    serves students, faculty, administrators, alumni, and parents alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-palette-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
              Join Our <span className="font-bold">Journey</span>
            </h2>
            <p className="font-body text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Be part of creating the platform that will transform university life. Your input will help 
              shape ColCord's development and ensure it meets real community needs.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="hero"
                size="lg"
                className="px-8 py-6 font-medium bg-palette-white text-palette-black hover:bg-white/90 transition-colors duration-300 rounded-none"
              >
                Join Waitlist
              </Button>
            </div>
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