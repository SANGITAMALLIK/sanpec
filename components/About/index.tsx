'use client';

import React, { useEffect, useState } from 'react';
import { Home, ChevronRight, Download, X } from 'lucide-react';

const AboutHeroSection: React.FC = () => {

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // ✅ Fetch ABOUT category PDF (Change ID if needed)
  useEffect(() => {
    const fetchAboutPDF = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/categories/53'
        );

        const data = await response.json();

        console.log('About Category Data:', data);

          if (data.category_pdf) {
          setPdfUrl(data.category_pdf);
        }

      } catch (error) {
        console.error('Error fetching About PDF:', error);
      }
    };

    fetchAboutPDF();
  }, []);

  return (
    <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/why_sanpec.png" 
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>

        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)
            `
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
        
        <div className="mb-4 sm:mb-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
            ABOUT
          </h1>

          <div className="flex items-center gap-2">
            <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
            <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
            <div className="h-[2px] w-3 sm:w-4 bg-[#DC2626]/40 rounded-full"></div>
          </div>
        </div>

        <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <a 
            href="/" 
            className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-medium">Home</span>
          </a>

          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />

          <span className="text-[#DC2626] font-semibold">
            About
          </span>
        </nav>
      </div>

      {/* ✅ PDF Download Button */}
      {pdfUrl && (
        <button
          onClick={() => setIsPdfModalOpen(true)}
          className="absolute bottom-6 right-6 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 z-20"
        >
          <Download className="w-4 h-4" />
          <span className="font-semibold text-sm">Download Brochure</span>
        </button>
      )}

      {/* ✅ PDF Modal */}
      {isPdfModalOpen && pdfUrl && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">About Section PDF</h3>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="About PDF"
              />
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-[2px]">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
      </div>

    </div>
  );
};

export default AboutHeroSection;