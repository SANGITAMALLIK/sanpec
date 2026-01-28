"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface SliderContextType {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  resetSlide: () => void;
}

const SliderContext = createContext<SliderContextType>({
  currentSlide: 0,
  setCurrentSlide: () => {},
  resetSlide: () => {}
});

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const resetSlide = () => {
    // console.log('🔄 Resetting slide to 0'); // Debug log
    setCurrentSlide(0);
  };

  const updateSlide = (index: number) => {
    // console.log('🎯 Updating slide to:', index); // Debug log
    setCurrentSlide(index);
  };

  return (
    <SliderContext.Provider value={{ currentSlide, setCurrentSlide: updateSlide, resetSlide }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => useContext(SliderContext);