import React from 'react';
import { Target, Heart, Users, Award, Lightbulb, Globe, ExternalLink, Zap } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Innovation',
      description: 'Building next-generation university technology with cutting-edge solutions and forward-thinking design.'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Community-Centered',
      description: 'Every decision prioritizes the needs of students, faculty, and the entire university community.'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Collaboration',
      description: 'Great education happens when everyone in the university ecosystem works together seamlessly.'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
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
      linkedin: 'https://www.linkedin.com/in/adithyaadiga/?originalSubdomain=in',
      description: 'Leading technical architecture and development to build scalable, innovative solutions for the future of university technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-20 lg:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8">
                <Lightbulb className="h-4 w-4 mr-2 text-white" />
                Our Vision
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
                Building the Future of
                <span className="block font-bold">University Life</span>
              </h1>
              
              <p className="text-xl text-white/60 mb-8 leading-relaxed font-light">
                Colcord addresses the fundamental challenge of fragmented university 
                systems by creating a unified ecosystem that transforms how educational 
                institutions connect and serve their communities.
              </p>
              
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-white" />
                <span className="text-lg font-medium text-white">
                  One platform, unified experience
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white/5 border border-white/10 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/10 border border-white/20"></div>
                    <div className="h-20 bg-white border border-white/40"></div>
                    <div className="h-20 bg-white border border-white/40"></div>
                    <div className="h-20 bg-white/10 border border-white/20"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-sm font-medium text-white/60">Unified Ecosystem</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-black border border-white/20 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">In Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Our <span className="font-bold">Mission</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
              To create a unified digital ecosystem that eliminates friction in university life 
              and empowers every member of the academic community to thrive.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
                <p className="text-white/60 font-light">
                  A world where university technology enhances rather than complicates 
                  the educational experience for everyone.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Impact</h3>
                <p className="text-white/60 font-light">
                  Creating seamless connections between students, faculty, administrators, 
                  alumni, and parents through unified technology.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Future</h3>
                <p className="text-white/60 font-light">
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
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Core <span className="font-bold">Values</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              The principles guiding our development of Colcord and commitment to the university community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-black border border-white/10 p-8 text-center hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-white/20">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/60 font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Our <span className="font-bold">Team</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
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
                      className="w-full h-full object-cover border border-white/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.6)] group-hover:border-white/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-white/60 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-white/60 mb-6 font-light">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">LinkedIn</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
            
            {/* Second row - CTO */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative w-32 h-32 mx-auto mb-6 group">
                    <img 
                      src={team[2].image} 
                      alt={`${team[2].name} profile`}
                      className="w-full h-full object-cover border border-white/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.6)] group-hover:border-white/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{team[2].name}</h3>
                  <p className="text-white/60 font-medium mb-4">{team[2].role}</p>
                  <p className="text-sm text-white/60 mb-6 font-light">{team[2].description}</p>
                  <a 
                    href={team[2].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">LinkedIn</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Story */}
      <section className="py-20 lg:py-32 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Why <span className="font-bold">Colcord</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Understanding the challenges that led us to envision a better solution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-black border border-white/10 p-8">
                <h3 className="text-xl font-semibold text-white mb-3">The Challenge</h3>
                <p className="text-white/60 font-light">
                  Universities operate with dozens of disconnected systems. Students struggle with 
                  multiple logins for course registration, assignments, campus events, and career services. 
                  Faculty waste time on redundant tasks across different platforms, and administrators lack 
                  unified insights. This fragmentation creates barriers to learning and community building.
                </p>
              </div>
              
              <div className="bg-black border border-white/10 p-8">
                <h3 className="text-xl font-semibold text-white mb-3">The Opportunity</h3>
                <p className="text-white/60 font-light">
                  We saw an opportunity to reimagine university technology from the ground up. Instead of 
                  adding another tool to the mix, we're building a comprehensive ecosystem that brings 
                  everything together—from academic management to campus life, from career services to 
                  alumni networking—in one intuitive, powerful platform.
                </p>
              </div>
              
              <div className="bg-white/10 border border-white/20 p-8">
                <h3 className="text-xl font-semibold text-white mb-3">The Solution</h3>
                <p className="text-white/80 font-light">
                  Colcord is more than software—it's a unified ecosystem designed to strengthen 
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
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Join Our <span className="font-bold">Journey</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Be part of creating the platform that will transform university life. Your input will help 
            shape Colcord's development and ensure it meets real community needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:team@colcord.co.in?subject=Waitlist Registration&body=Hi, I would like to join the Colcord waitlist."
              className="bg-white text-black px-8 py-3 font-medium hover:bg-white/90 transition-colors duration-300"
            >
              Join Waitlist
            </a>
            <a 
              href="mailto:team@colcord.co.in?subject=Contact Request&body=Hi, I would like to get in touch with the Colcord team."
              className="border border-white/20 text-white px-8 py-3 font-medium hover:bg-white/5 hover:border-white/40 transition-colors duration-300"
            >
              Contact Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};