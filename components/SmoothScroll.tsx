'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  useEffect(() => {
    // Lenis smooth scroll initialize karo
    const lenis = new Lenis({
      duration: 1.5, // Kitna slow scroll chahiye (1.5 medium hai, 2-3 bohot slow)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical', // Vertical scroll
      gestureOrientation: 'vertical', // Touch gesture
      smoothWheel: true, // Mouse wheel ko smooth banao
      wheelMultiplier: 1, // Scroll speed (1 = normal, 0.5 = slow, 2 = fast)
      touchMultiplier: 2, // Touch scroll speed
      infinite: false, // Infinite scroll nahi chahiye
    })

    // Animation frame function
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function - jab component unmount ho
    return () => {
      lenis.destroy()
    }
  }, [])

  return null // Kuch render nahi karna
}