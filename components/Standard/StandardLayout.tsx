'use client';
import React, { useState } from 'react';
import { X, Eye, Download, FileText } from 'lucide-react';

const PDFGallery = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  // PDF files data
  const pdfFiles = [
    
    {
      id: 2,
      name: "Innovation Management",
      fileName: "Innovation Management.pdf",
      path: "/images/pdf/Innovation Management.pdf",
      thumbnail: "/images/pdf/Innovation Management.pdf"
    },
    {
      id: 3,
      name: "Innovation Strategy",
      fileName: "Innovation Strategy.pdf",
      path: "/images/pdf/Innovation Strategy.pdf",
      thumbnail: "/images/pdf/Innovation Strategy.pdf"
    },
    {
      id: 4,
      name: "ISO+18404-2015",
      fileName: "ISO+18404-2015 (1).pdf",
      path: "/images/pdf/ISO+18404-2015 (1).pdf",
      thumbnail: "/images/pdf/ISO+18404-2015 (1).pdf"
    },
    {
      id: 5,
      name: "ISO 56006:2021",
      fileName: "ISO_56006_2021(en) (1).pdf",
      path: "/images/pdf/ISO_56006_2021(en) (1).pdf",
      thumbnail: "/images/pdf/ISO_56006_2021(en) (1).pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      {/* <div className="bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
              <FileText className="w-8 h-8 text-[#CD091B]" />
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#CD091B]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#101631] mb-3 tracking-tight">
              PDF <span className="text-[#CD091B]">Library</span>
            </h1>
            <div className="w-24 h-1 bg-[#CD091B] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse and view our collection of important documents
            </p>
          </div>
        </div>
      </div> */}

      {/* PDF Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pdfFiles.map((pdf) => (
            <div
              key={pdf.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-[#CD091B]"
            >
              {/* PDF Thumbnail - Using iframe for first page preview */}
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <iframe
                  src={`${pdf.path}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none scale-110"
                  title={pdf.name}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101631]/90 via-[#101631]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedPDF(pdf)}
                    className="flex items-center gap-2 bg-[#CD091B] text-white px-6 py-3 rounded-lg font-bold transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#101631] shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                    View PDF
                  </button>
                </div>

                {/* PDF Icon Badge */}
                <div className="absolute top-3 right-3 bg-[#CD091B] text-white p-2 rounded-lg shadow-lg">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              {/* PDF Info */}
              <div className="p-4 border-t-2 border-gray-100">
                <h3 className="font-bold text-[#101631] text-sm mb-2 line-clamp-2 group-hover:text-[#CD091B] transition-colors">
                  {pdf.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{pdf.fileName}</p>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPDF(pdf)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-[#CD091B] text-gray-700 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <a
                    href={pdf.path}
                    download={pdf.fileName}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-[#101631] text-gray-700 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for PDF Viewer */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border-4 border-[#CD091B]">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#101631] to-[#101631]/90 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CD091B] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{selectedPDF.name}</h3>
                  <p className="text-gray-300 text-sm">{selectedPDF.fileName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPDF.path}
                  download={selectedPDF.fileName}
                  className="flex items-center gap-2 bg-[#CD091B] hover:bg-[#CD091B]/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={() => setSelectedPDF(null)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src={selectedPDF.path}
                className="w-full h-full"
                title={selectedPDF.name}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PDFGallery;