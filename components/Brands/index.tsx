'use client';
import React, { useState, useEffect } from 'react';

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(5);

  const clients = [
    { name: "Pattern Energy", url: "https://patternenergy.com/", logo: "/images/home/logos/1.png" },
    { name: "NextEra Energy", url: "https://www.nexteraenergy.com/", logo: "/images/home/logos/2.png" },
    { name: "Valard", url: "https://www.valard.com/", logo: "/images/home/logos/3.png" },
    { name: "Quanta Services", url: "https://quantaservices.com/", logo: "/images/home/logos/4.png" },
    { name: "ATCO Electric", url: "https://electric.atco.com/en-ca.html", logo: "/images/home/logos/5.png" },
    { name: "SaskPower", url: "https://www.saskpower.com/", logo: "/images/home/logos/6.png" },
    { name: "PacifiCorp", url: "https://www.pacificorp.com/", logo: "/images/home/logos/7.png" },
    { name: "EC Source Services", url: "https://ecsourceservices.com/", logo: "/images/home/logos/8.png" },
    { name: "Southern California Edison", url: "https://www.sce.com/", logo: "/images/home/logos/9.png" },
    { name: "Sharyland Utilities", url: "https://www.sharyland.com/", logo: "/images/home/logos/10.png" },
    { name: "Duke Energy", url: "#", logo: "/images/home/logos/11.png" },
    { name: "Duke Energy", url: "#", logo: "/images/home/logos/12.png" },
    { name: "Oncor", url: "#", logo: "/images/home/logos/13.png" },
    { name: "CPS Energy", url: "#", logo: "/images/home/logos/14.png" },
    { name: "PSEG", url: "#", logo: "/images/home/logos/15.jpg" },
    { name: "Clean Line Energy", url: "#", logo: "/images/home/logos/16.png" },
    { name: "PowerTel", url: "#", logo: "/images/home/logos/17.png" },
    { name: "Client 18", url: "#", logo: "/images/home/logos/18.png" }
  ];

  const allClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 items
      } else {
        setItemsPerView(5); // Desktop: 5 items
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          if (next >= clients.length * 2) {
            return 0;
          }
          return next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, clients.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <section className="relative bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-[#CD091B] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            OUR CLIENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3B6E] mb-3">
            Our Experience
          </h2>
          <div className="flex items-center justify-center gap-1">
            <div className="h-1 w-16 bg-[#CD091B] rounded-full"></div>
            <div className="h-1 w-16 bg-white border-2 border-[#3C3B6E] rounded-full"></div>
            <div className="h-1 w-16 bg-[#CD091B] rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div 
            className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${(currentIndex % clients.length) * (100 / itemsPerView)}%)` }}
              >
                {allClients.map((client, index) => (
                  <div
                    key={`client-${index}`}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <a 
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white rounded-xl p-6 h-32 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-[#CD091B]"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-20 w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#CD091B] text-[#3C3B6E] hover:text-white p-3 rounded-full shadow-lg border border-gray-200 hover:border-[#CD091B] transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#CD091B] text-[#3C3B6E] hover:text-white p-3 rounded-full shadow-lg border border-gray-200 hover:border-[#CD091B] transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Next"
            >
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % clients.length
                    ? 'w-8 bg-[#CD091B]' 
                    : 'w-2 bg-gray-300 hover:bg-[#3C3B6E]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;