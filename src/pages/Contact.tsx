import React from 'react';
import { Mail, MessageSquare, Users, Calendar } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-20 lg:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-8">
            Get in <span className="font-bold">Touch</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Have questions about Colcord? Want to learn more about our vision or discuss partnership opportunities? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 lg:p-12">
              <h2 className="text-2xl font-semibold text-white mb-8 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/40 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/40 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/40 transition-colors"
                    placeholder="your.email@university.edu"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                    University/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/40 transition-colors"
                    placeholder="Your university or organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">University Partnership</option>
                    <option value="demo">Demo Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/40 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-3 font-medium hover:bg-white/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Common questions about Colcord and our development process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-3">When will Colcord be available?</h3>
              <p className="text-white/60 font-light">
                We're currently in active development. Join our waitlist to be notified when we launch our beta program and get early access opportunities.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-3">How can universities get involved?</h3>
              <p className="text-white/60 font-light">
                We're actively seeking university partners to help shape Colcord's development. Contact us at team@colcord.co.in to discuss collaboration opportunities.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-3">Will Colcord integrate with existing university systems?</h3>
              <p className="text-white/60 font-light">
                Yes, Colcord is being designed with integration capabilities to work alongside existing university systems while gradually providing a unified alternative.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-3">How can I provide feedback on the platform?</h3>
              <p className="text-white/60 font-light">
                We welcome feedback from all members of the university community. Email us at team@colcord.co.in or join our waitlist to participate in user research sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-8">
              Let's <span className="font-bold">Connect</span>
            </h2>
            <div className="bg-white/5 border border-white/10 p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Mail className="h-6 w-6 text-white" />
                <span className="text-lg text-white">team@colcord.co.in</span>
              </div>
              <p className="text-white/60 mb-8 font-light">
                Ready to transform your university's digital experience? We're here to help.
              </p>
              <a 
                href="mailto:team@colcord.co.in?subject=Partnership Inquiry&body=Hi, I would like to discuss a potential partnership with Colcord."
                className="bg-white text-black px-8 py-3 font-medium hover:bg-white/90 transition-colors duration-300"
              >
                Start Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};