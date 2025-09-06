import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, Users, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');

  // Replace this URL with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzE-QCrE477MbPRC7YbqrisG5VLbdi6clQ9jQVhK6Ajoyf1R9FFUDYCxpVNCkmplwYLfg/exec';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      university: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields (First Name, Last Name, Email, and Message).');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we're using no-cors mode, we can't read the response
      // So we assume success if no error was thrown
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      resetForm();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your message. Please try again or email us directly at team@colcord.co.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const StatusMessage = () => {
    if (!submitStatus) return null;

    return (
      <div className={`flex items-center space-x-3 p-4 rounded-lg mb-6 ${
        submitStatus === 'success' 
          ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
          : 'bg-red-900/20 border border-red-500/30 text-red-400'
      }`}>
        {submitStatus === 'success' ? (
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
        )}
        <p className="font-body text-sm">{submitMessage}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-palette-black font-body">
      {/* Hero Section */}
      <section className="bg-palette-black py-20 lg:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-8">
            Get in <span className="font-bold">Touch</span>
          </h1>
          <p className="font-body text-xl text-white/60 max-w-3xl mx-auto font-light">
            Have questions about ColCord? Want to learn more about our vision or discuss partnership opportunities? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-32 bg-palette-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 lg:p-12">
              <h2 className="font-heading text-2xl font-semibold text-palette-white mb-8 text-center">Send us a Message</h2>
              
              <StatusMessage />
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white placeholder-white/40 transition-colors font-body disabled:opacity-50"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white placeholder-white/40 transition-colors font-body disabled:opacity-50"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white placeholder-white/40 transition-colors font-body disabled:opacity-50"
                    placeholder="your.email@university.edu"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                    University/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white placeholder-white/40 transition-colors font-body disabled:opacity-50"
                    placeholder="Your university or organization"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                    Subject
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white font-body disabled:opacity-50"
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
                  <label className="block text-sm font-medium text-palette-white mb-2 font-body">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-palette-black border border-white/20 focus:outline-none focus:border-white/40 text-palette-white placeholder-white/40 transition-colors font-body resize-none disabled:opacity-50"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-palette-white text-palette-black px-8 py-3 font-medium hover:bg-white/90 transition-colors duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <p className="font-body text-xl text-white/60 max-w-2xl mx-auto font-light">
              Common questions about ColCord and our development process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-palette-black border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold text-palette-white mb-3">When will ColCord be available?</h3>
              <p className="font-body text-white/60 font-light">
                We're currently in active development. Join our waitlist to be notified when we launch our beta program and get early access opportunities.
              </p>
            </div>
            
            <div className="bg-palette-black border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold text-palette-white mb-3">How can universities get involved?</h3>
              <p className="font-body text-white/60 font-light">
                We're actively seeking university partners to help shape ColCord's development. Contact us at team@colcord.co.in to discuss collaboration opportunities.
              </p>
            </div>
            
            <div className="bg-palette-black border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold text-palette-white mb-3">Will ColCord integrate with existing university systems?</h3>
              <p className="font-body text-white/60 font-light">
                Yes, ColCord is being designed with integration capabilities to work alongside existing university systems while gradually providing a unified alternative.
              </p>
            </div>
            
            <div className="bg-palette-black border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold text-palette-white mb-3">How can I provide feedback on the platform?</h3>
              <p className="font-body text-white/60 font-light">
                We welcome feedback from all members of the university community. Email us at team@colcord.co.in or join our waitlist to participate in user research sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32 bg-palette-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-8">
              Let's <span className="font-bold">Connect</span>
            </h2>
            <div className="bg-white/5 border border-white/10 p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Mail className="h-6 w-6 text-palette-white" />
                <span className="font-body text-lg text-palette-white">team@colcord.co.in</span>
              </div>
              <p className="font-body text-white/60 mb-8 font-light">
                Ready to transform your university's digital experience? We're here to help.
              </p>
              <a 
                href="mailto:team@colcord.co.in?subject=Partnership Inquiry&body=Hi, I would like to discuss a potential partnership with Colcord."
                className="bg-palette-white text-palette-black px-8 py-3 font-medium hover:bg-white/90 transition-colors duration-300 font-body inline-block"
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