'use client';
import React, { useState, useEffect } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Grid, Camera, Home, Video } from 'lucide-react';

// Generate media items from the folder
const mediaItems = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    type: 'image',
    src: `/images/sanpec_2026/${i + 1}.jpeg`,
    thumbnail: `/images/sanpec_2026/${i + 1}.jpeg`
  })),
  { id: 51, type: 'video', src: '/images/sanpec_2026/51.mp4', thumbnail: '/images/sanpec_2026/51.mp4', title: 'Project Execution Video 1' },
  { id: 52, type: 'video', src: '/images/sanpec_2026/52.mp4', thumbnail: '/images/sanpec_2026/52.mp4', title: 'Project Execution Video 2' },
  { id: 53, type: 'video', src: '/images/sanpec_2026/53.mp4', thumbnail: '/images/sanpec_2026/53.mp4', title: 'Project Execution Video 3' }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const filteredItems = mediaItems.filter(item => 
    filter === 'all' || item.type === filter
  );

  const openLightbox = (item) => {
    setSelectedItem(item);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setIsPlaying(false);
  };

  const navigateItem = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateItem('next');
      if (e.key === 'ArrowLeft') navigateItem('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Header with Animated SVG Power Infrastructure */}
      <div className="relative bg-gradient-to-br from-[#0B1931] via-[#0F1F3D] to-[#0B1931] overflow-hidden" style={{ height: '400px' }}>
        
        {/* Animated SVG Power Infrastructure Background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#DC2626" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
            <linearGradient id="powerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Large Transmission Tower - Left */}
          <g transform="translate(100, 60)">
            <line x1="30" y1="0" x2="30" y2="220" stroke="url(#powerGlow)" strokeWidth="4" strokeLinecap="round"/>
            <line x1="0" y1="50" x2="60" y2="50" stroke="#DC2626" strokeWidth="3"/>
            <line x1="8" y1="90" x2="52" y2="90" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="15" y1="130" x2="45" y2="130" stroke="#DC2626" strokeWidth="2"/>
            <line x1="30" y1="50" x2="10" y2="110" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="30" y1="50" x2="50" y2="110" stroke="#DC2626" strokeWidth="2.5"/>
            {/* Insulators */}
            <circle cx="0" cy="50" r="4" fill="#DC2626">
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="50" r="4" fill="#DC2626">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="8" cy="90" r="3" fill="#FCD34D">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="52" cy="90" r="3" fill="#FCD34D">
              <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Medium Transmission Tower - Center */}
          <g transform="translate(320, 80)">
            <line x1="25" y1="0" x2="25" y2="200" stroke="url(#powerGlow)" strokeWidth="3.5"/>
            <line x1="0" y1="45" x2="50" y2="45" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="7" y1="80" x2="43" y2="80" stroke="#DC2626" strokeWidth="2"/>
            <line x1="13" y1="115" x2="37" y2="115" stroke="#DC2626" strokeWidth="1.8"/>
            <line x1="25" y1="45" x2="8" y2="100" stroke="#DC2626" strokeWidth="2"/>
            <line x1="25" y1="45" x2="42" y2="100" stroke="#DC2626" strokeWidth="2"/>
            <circle cx="0" cy="45" r="3.5" fill="#DC2626"/>
            <circle cx="50" cy="45" r="3.5" fill="#DC2626"/>
          </g>

          {/* Electric Pole - Right Center */}
          <g transform="translate(540, 100)">
            <line x1="18" y1="0" x2="18" y2="170" stroke="url(#powerGlow)" strokeWidth="3"/>
            <line x1="0" y1="35" x2="36" y2="35" stroke="#DC2626" strokeWidth="2"/>
            <circle cx="0" cy="35" r="3" fill="#DC2626">
              <animate attributeName="fill-opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="36" cy="35" r="3" fill="#DC2626">
              <animate attributeName="fill-opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <line x1="18" y1="35" x2="18" y2="25" stroke="#DC2626" strokeWidth="1.5"/>
          </g>

          {/* Large Tower - Far Right */}
          <g transform="translate(750, 70)">
            <line x1="28" y1="0" x2="28" y2="210" stroke="url(#powerGlow)" strokeWidth="4"/>
            <line x1="0" y1="55" x2="56" y2="55" stroke="#DC2626" strokeWidth="3"/>
            <line x1="8" y1="95" x2="48" y2="95" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="16" y1="135" x2="40" y2="135" stroke="#DC2626" strokeWidth="2"/>
            <line x1="28" y1="55" x2="10" y2="115" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="28" y1="55" x2="46" y2="115" stroke="#DC2626" strokeWidth="2.5"/>
          </g>

          {/* Small Pole - Left Center */}
          <g transform="translate(220, 110)" opacity="0.9">
            <line x1="15" y1="0" x2="15" y2="150" stroke="#DC2626" strokeWidth="2.5"/>
            <line x1="0" y1="30" x2="30" y2="30" stroke="#DC2626" strokeWidth="1.5"/>
            <circle cx="0" cy="30" r="2.5" fill="#FCD34D"/>
            <circle cx="30" cy="30" r="2.5" fill="#FCD34D"/>
          </g>

          {/* Animated Power Lines */}
          <line x1="100" y1="110" x2="850" y2="125" stroke="#DC2626" strokeWidth="2" opacity="0.6" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="0.8s" repeatCount="indefinite"/>
          </line>
          <line x1="100" y1="150" x2="850" y2="160" stroke="#DC2626" strokeWidth="1.8" opacity="0.5" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="100" y1="190" x2="850" y2="195" stroke="#DC2626" strokeWidth="1.5" opacity="0.4" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.3s" repeatCount="indefinite"/>
          </line>

          {/* Electrical Sparks & Glow Effects */}
          <circle cx="130" cy="110" r="3" fill="#FCD34D" opacity="0.9">
            <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="345" cy="125" r="2.5" fill="#FCD34D" opacity="0.7">
            <animate attributeName="r" values="2.5;5.5;2.5" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="558" cy="135" r="3" fill="#FCD34D" opacity="0.8">
            <animate attributeName="r" values="3;6.5;3" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.25;0.8" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="778" cy="125" r="2.8" fill="#FCD34D" opacity="0.75">
            <animate attributeName="r" values="2.8;6;2.8" dur="1.6s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.75;0.2;0.75" dur="1.6s" repeatCount="indefinite"/>
          </circle>
        </svg>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0B1931]/30 to-[#0B1931]/60"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6">
          <div className="max-w-5xl">
            <div className="inline-block mb-3">
              <span className="bg-[#DC2626]/20 border border-[#DC2626]/40 text-[#DC2626] px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm">
                ⚡ Powering The Future
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              Projects Gallery <span className="text-[#DC2626]">2026</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl">
              Transforming Global Energy Infrastructure Through Innovation & Excellence
            </p>

            <nav className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Home className="w-4 h-4 text-[#DC2626]" />
              <ChevronRight className="w-3.5 h-3.5" />
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-semibold">Project Gallery</span>
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626]">
          <div className="h-full bg-white/30 animate-pulse"></div>
        </div>
      </div>

      {/* Modern Filter Section with Tabs */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#CD091B] rounded-full"></div>
              <h2 className="text-lg font-bold text-gray-800">Browse Projects</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  filter === 'all'
                    ? 'bg-[#CD091B] text-white shadow-xl shadow-red-500/40 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                {filter === 'all' && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
                <Grid className="inline w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">All</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold relative z-10 ${
                  filter === 'all' ? 'bg-white/25' : 'bg-gray-200'
                }`}>
                  {mediaItems.length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter('image')}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  filter === 'image'
                    ? 'bg-[#CD091B] text-white shadow-xl shadow-red-500/40 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                {filter === 'image' && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
                <Camera className="inline w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Images</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold relative z-10 ${
                  filter === 'image' ? 'bg-white/25' : 'bg-gray-200'
                }`}>
                  50
                </span>
              </button>
              
              <button
                onClick={() => setFilter('video')}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  filter === 'video'
                    ? 'bg-[#CD091B] text-white shadow-xl shadow-red-500/40 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                {filter === 'video' && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
                <Video className="inline w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Videos</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold relative z-10 ${
                  filter === 'video' ? 'bg-white/25' : 'bg-gray-200'
                }`}>
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid with Lazy Loading */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 relative">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 200, 200, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 200, 200, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 relative z-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              onContextMenu={handleContextMenu}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#CD091B]"
            >
              {item.type === 'image' ? (
                <>
                  {!loadedImages.has(item.id) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <img
                    src={item.src}
                    alt={`Project ${item.id}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(item.id)}
                    onContextMenu={handleContextMenu}
                    draggable="false"
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 select-none ${
                      loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  />
                </>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover select-none"
                    muted
                    preload="metadata"
                    onContextMenu={handleContextMenu}
                    controlsList="nodownload"
                    disablePictureInPicture
                    style={{ pointerEvents: 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#CD091B] to-[#EF4444] backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform shadow-2xl shadow-red-500/50">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-gradient-to-r from-[#CD091B] to-[#EF4444] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      {item.type === 'video' ? '🎥 VIDEO' : `📸 #${item.id}`}
                    </div>
                    {item.type === 'image' && (
                      <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        JPG
                      </div>
                    )}
                  </div>
                 
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-bold border border-white/20">
                SANPEC
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center backdrop-blur-sm"
          onContextMenu={handleContextMenu}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CD091B] to-[#EF4444] hover:from-red-700 hover:to-red-600 flex items-center justify-center text-white transition-all z-50 shadow-2xl shadow-red-500/50 group"
          >
            <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateItem('prev')}
            className="absolute left-6 w-16 h-16 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#CD091B] hover:to-[#EF4444] backdrop-blur-md flex items-center justify-center text-white transition-all shadow-2xl group"
          >
            <ChevronLeft className="w-8 h-8 group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={() => navigateItem('next')}
            className="absolute right-6 w-16 h-16 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#CD091B] hover:to-[#EF4444] backdrop-blur-md flex items-center justify-center text-white transition-all shadow-2xl group"
          >
            <ChevronRight className="w-8 h-8 group-hover:scale-125 transition-transform" />
          </button>

          {/* Content */}
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-12">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                onContextMenu={handleContextMenu}
                draggable="false"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl select-none"
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              />
            ) : (
              <div className="relative max-w-full max-h-full">
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay={isPlaying}
                  className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl select-none"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onContextMenu={handleContextMenu}
                  controlsList="nodownload"
                  disablePictureInPicture
                />
              </div>
            )}
          </div>

          {/* Enhanced Info Bar */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/20 shadow-2xl"> 
            <p className="text-gray-300 text-sm text-center flex items-center justify-center gap-2">
              <span className="bg-[#CD091B] px-2 py-0.5 rounded text-white font-semibold">
                {filteredItems.findIndex(item => item.id === selectedItem.id) + 1}
              </span>
              <span>of</span>
              <span className="bg-gray-600 px-2 py-0.5 rounded text-white font-semibold">
                {filteredItems.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}