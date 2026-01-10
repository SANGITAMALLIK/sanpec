'use client';

import React, { useState, useEffect } from 'react';
import { Search, Home, ChevronRight, Filter, ArrowRight, TrendingUp, Zap, Mail, Tag, ChevronLeft } from 'lucide-react';

const ResearchandInnovation: React.FC = () => {
    return (
        <div className="relative bg-[#0B1931] overflow-hidden" style={{ height: '370px' }}>
        {/* Power Poles and Towers Elements */}
        <div className="absolute inset-0 opacity-15">
          {/* Transmission Tower 1 - Left */}
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              {/* Tower Main Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Cross Arms */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              {/* Support Lines */}
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-red-600 transform -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-red-600 transform translate-x-8 -rotate-12"></div>
            </div>
          </div>

          {/* Transmission Tower 2 - Right */}
          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              {/* Tower Main Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Cross Arms */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-18 h-1 bg-red-600"></div>
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-red-600"></div>
              {/* Support Lines */}
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-red-600 transform -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-red-600 transform translate-x-10 -rotate-12"></div>
            </div>
          </div>

          {/* Electric Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              {/* Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Top Insulators */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          {/* Electric Pole 2 - Center Right */}
          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              {/* Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Top Insulators */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-red-600"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          {/* Power Lines connecting structures */}
          <div className="absolute top-36 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-red-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Rsearch and Innovation
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed">
              Transforming Global Energy Infrastructure Through Strategic Thinking
            </p>

            <nav className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Home className="w-4 h-4 text-[#DC2626]" />
              <ChevronRight className="w-4 h-4" />
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Rsearch and Innovation</span>
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DC2626]"></div>
      </div>
    );
};
export default ResearchandInnovation;