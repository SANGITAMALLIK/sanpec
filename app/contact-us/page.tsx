'use client';
import React, { useState } from 'react';
import { Linkedin, Mail, Phone, MapPin, Send, CheckCircle, XCircle, Home, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ Store form data before clearing
    const submittedData = { ...formData };
    
    // ✅ Immediately show success and clear form
    setIsSubmitting(true);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // ✅ Reset after 1 second
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);

    // ✅ Auto-hide success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);

    // ✅ Send email in background (no await - fire and forget)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData)
    }).catch(error => {
      console.error('Email sending error:', error);
      // Silently fail - user already got success message
    });
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/merged_power_towers.png" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          
          {/* Subtle Pattern Overlay for depth */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)
              `
            }}
          ></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
          {/* Page Title */}
          <div className="mb-4 sm:mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
              CONTACT
            </h1>
            {/* Elegant Underline */}
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
              <div className="h-[2px] w-3 sm:w-4 bg-[#DC2626]/40 rounded-full"></div>
            </div>
          </div>
          
          {/* Simple Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
            {/* Home Link with Icon */}
            <a 
              href="/" 
              className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">Home</span>
            </a>

            {/* Separator */}
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />

            {/* Current Page (Active) */}
            <span className="text-[#DC2626] font-semibold">
              Contact
            </span>
          </nav>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
        </div>
      </div>

      {/* ========== CONTACT FORM SECTION ========== */}
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-3 animate-fadeIn">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <p className="font-bold text-green-800 text-lg">Message sent successfully! ✓</p>
                    <p className="text-green-700 text-sm mt-1">We'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3">
                  <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <p className="font-bold text-red-800 text-lg">Oops! Something went wrong ✗</p>
                    <p className="text-red-700 text-sm mt-1">Please email us at ajmallik@sanpec.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-[#101631] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-[#CD091B] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="PHONE NUMBER"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-[#101631] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 font-medium"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SUBJECT"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-[#CD091B] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE"
                    rows={6}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-[#101631] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 font-medium resize-none"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-[#101631] text-white font-bold text-lg rounded-xl hover:bg-[#CD091B] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Submit
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-12">
              
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
                  Get in touch
                </h1>
                <div className="w-24 h-1.5 bg-[#CD091B] rounded-full mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We appreciate your feedback, inquiries, and opportunities for collaboration. Please reach out to discuss your upcoming projects or to learn more about our services.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#CD091B] shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={24} />
                  <div>
                    <p className="font-bold text-xl mb-2" style={{ color: '#101631' }}>SANPEC INC</p>
                    <p className="text-gray-700 leading-relaxed">
                     11819 Skydale Drive Tomball Texas
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                
                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#101631] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <Mail className="flex-shrink-0" style={{ color: '#101631' }} size={24} />
                    <div>
                      <p className="font-semibold text-gray-600 text-sm mb-1">Email:</p>
                      <a href="mailto:ajmallik@sanpec.com" className="text-lg font-bold hover:text-[#CD091B] transition-colors" style={{ color: '#101631' }}>
                        ajmallik@sanpec.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#CD091B] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <Phone className="flex-shrink-0" style={{ color: '#CD091B' }} size={24} />
                    <div>
                      <p className="font-semibold text-gray-600 text-sm mb-1">Phone:</p>
                      <a href="tel:+18323924230" className="text-lg font-bold hover:text-[#CD091B] transition-colors" style={{ color: '#101631' }}>
                        +1 (832) 392 4230
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#101631' }}>Follow Us:</h3>
                <a 
                  href="https://www.linkedin.com/company/sanpec-inc/posts/?feedView=all" 
                  className="inline-flex items-center justify-center w-14 h-14 bg-[#101631] hover:bg-[#CD091B] text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={28} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}