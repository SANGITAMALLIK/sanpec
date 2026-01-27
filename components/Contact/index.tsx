'use client';
import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/merged_power_towers.png" 
          alt="About Background"
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
  );
};

export default ContactPage;