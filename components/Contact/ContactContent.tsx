'use client';
import React, { useState } from 'react';
import { Linkedin, Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';

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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Direct Gmail link - Opens Gmail compose with all data filled
      const mailtoLink = `mailto:amitdevrani9@gmail.com?subject=${encodeURIComponent(
        `New Contact: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
      )}`;

      // Open user's email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 6000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-5 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <p className="font-bold text-green-800 text-lg">Email client opened! ✓</p>
                  <p className="text-green-700 text-sm mt-1">
                    Please send the email from your email app to complete the submission.
                  </p>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <p className="font-bold text-red-800 text-lg">Oops! Something went wrong ✗</p>
                  <p className="text-red-700 text-sm mt-1">
                    Please email us directly at ajmallik@sanpec.com
                  </p>
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
                {isSubmitting ? 'Processing...' : 'Submit'}
                <Send size={20} />
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
                  <p className="font-bold text-xl mb-2" style={{ color: '#101631' }}>SANPEC.</p>
                  <p className="text-gray-700 leading-relaxed">
                    Houston11819<br />
                    Skydale<br />
                    DriveTomball Texas
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
                href="#" 
                className="inline-flex items-center justify-center w-14 h-14 bg-[#101631] hover:bg-[#CD091B] text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={28} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}