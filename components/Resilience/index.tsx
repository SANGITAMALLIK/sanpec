'use client';
import { useEffect, useRef, useState } from 'react';

const SustainabilityHero = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const particleCount = 60;
    
    class Particle {
       x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(205, 9, 27, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Grid Background - Red Theme */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #b91c1c 75%, #7f1d1d 100%)',
          backgroundSize: '100% 100%'
        }}
      >
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Diagonal Lines Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 80px)',
          }}
        ></div>
      </div>

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-40"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-950/40 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-950/40 to-transparent z-10"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Premium Breadcrumb */}
        <div className="mb-8 md:mb-12">
          <nav className="flex items-center space-x-3 text-sm md:text-base">
            <a href="#" className="text-red-200 hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-flex items-center group">
              <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-red-300 hover:text-white transition-colors">Our Impact</a>
            <span className="text-gray-400">/</span>
            <span className="text-white font-semibold">Sustainability</span>
          </nav>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center min-h-[70vh]">
          {/* Content Section */}
          <div className="relative z-10">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 md:mb-8 group hover:bg-white/15 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-red-400 mr-3 animate-pulse"></div>
              <span className="text-red-200 text-xs md:text-sm font-bold tracking-widest uppercase">SUSTAINABILITY</span>
              <div className="ml-4 w-0.5 h-4 bg-white/30"></div>
              <span className="ml-4 text-xs text-white/70 font-medium">2024</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.03em'}}>
              <span className="block text-white mb-2">
                Resilience and
              </span>
              <span className="block bg-gradient-to-r from-red-300 via-red-200 to-red-300 bg-clip-text text-transparent">
                Sustainability
              </span>
            </h1>
            
            {/* Description */}
            <div className="relative pl-6 border-l-4 border-red-400/50 my-8 md:my-10">
              <div className="absolute -left-2.5 top-0 w-2 h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                Sustainability is an approach to business that meets the needs of the present without compromising the ability of the future generations to meet their own needs.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10 md:mt-12">
              <button 
                className="group relative px-8 py-4 rounded-full text-white font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ 
                  background: 'linear-gradient(to right, #CD091B, #0D132D)',
                  boxShadow: '0 10px 30px rgba(205, 9, 27, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Journey
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to right, #0D132D, #CD091B)' }}
                ></span>
              </button>
              
              <button className="group px-8 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm text-white font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <span className="flex items-center">
                  View Impact Report
                  <svg className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              {[
                { value: "95%", label: "Renewable Energy", icon: "⚡" },
                { value: "10M+", label: "Trees Planted", icon: "🌳" },
                { value: "100%", label: "Zero Waste", icon: "♻️" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 flex items-center justify-center gap-2">
                    <span className="text-xl">{stat.icon}</span>
                    {stat.label}
                  </div>
                  <div 
                    className="w-0 h-1 group-hover:w-full transition-all duration-500 mx-auto mt-3 rounded-full"
                    style={{ background: 'linear-gradient(to right, #CD091B, #0D132D)' }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image/Visual Section */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden group">
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div 
                    className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl"
                    style={{ background: 'linear-gradient(to right, #CD091B, #0D132D)' }}
                  >
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-2xl text-center font-bold mb-3">Sustainable Future</p>
                  <p className="text-sm text-gray-300 text-center">Building a better tomorrow</p>
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'linear-gradient(to top, rgba(205, 9, 27, 0.2), transparent, rgba(13, 19, 45, 0.2))' }}
                ></div>
              </div>
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-6 w-44 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform -rotate-3 hover:-rotate-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">Carbon Neutral</div>
                  <div className="text-xs text-green-300">Since 2020</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-44 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: 'rgba(205, 9, 27, 0.2)' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#CD091B' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">Clean Energy</div>
                  <div className="text-xs" style={{ color: '#CD091B' }}>100% Renewable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-sm text-white/70 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityHero;