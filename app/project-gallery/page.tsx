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
        <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
           {/* Background Image */}
           <div className="absolute inset-0">
             <img 
               src="/images/sanpec_2026/22.jpeg" 
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
                 SunZia - Gallery 2026
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
               SunZia
               </span>
             </nav>
           </div>
     
           {/* Bottom Accent Line */}
           <div className="absolute bottom-0 left-0 w-full h-[2px]">
             <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
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