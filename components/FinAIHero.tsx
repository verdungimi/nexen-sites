"use client";

import { useEffect, useRef } from 'react';

export default function FinAIHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect mobile device and reduce DPR for better performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const dpr = isMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5);
    
    const setCanvasSize = () => {
      // Reduce resolution for better performance on mobile
      const currentIsMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      const currentDPR = currentIsMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5);
      
      // Use viewport dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set canvas internal size
      canvas.width = width * currentDPR;
      canvas.height = height * currentDPR;
      
      // Set canvas display size
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Reset transform and scale
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(currentDPR, currentDPR);
    };

    setCanvasSize();

    let animationFrame: number;
    let time = 0;
    let lastFrameTime = performance.now();
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (!ctx) return;

      const elapsed = currentTime - lastFrameTime;
      if (elapsed < frameInterval) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = currentTime - (elapsed % frameInterval);
      time += 0.008; // Slightly reduced for smoother animation

      // Get actual display dimensions (not scaled)
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Clear canvas
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Create animated gradient orbs - stronger effect
      const gradient1 = ctx.createRadialGradient(
        displayWidth * 0.2 + Math.sin(time) * 50,
        displayHeight * 0.3 + Math.cos(time * 0.7) * 50,
        0,
        displayWidth * 0.2,
        displayHeight * 0.3,
        500
      );
      gradient1.addColorStop(0, 'rgba(124, 92, 255, 0.25)');
      gradient1.addColorStop(0.3, 'rgba(80, 174, 223, 0.15)');
      gradient1.addColorStop(0.6, 'rgba(124, 92, 255, 0.08)');
      gradient1.addColorStop(1, 'rgba(124, 92, 255, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      const gradient2 = ctx.createRadialGradient(
        displayWidth * 0.8 + Math.cos(time * 0.8) * 60,
        displayHeight * 0.7 + Math.sin(time * 0.6) * 60,
        0,
        displayWidth * 0.8,
        displayHeight * 0.7,
        600
      );
      gradient2.addColorStop(0, 'rgba(80, 174, 223, 0.22)');
      gradient2.addColorStop(0.3, 'rgba(124, 92, 255, 0.12)');
      gradient2.addColorStop(0.6, 'rgba(80, 174, 223, 0.06)');
      gradient2.addColorStop(1, 'rgba(80, 174, 223, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Add a third gradient orb for more depth
      const gradient3 = ctx.createRadialGradient(
        displayWidth * 0.5 + Math.sin(time * 0.5) * 80,
        displayHeight * 0.5 + Math.cos(time * 0.9) * 80,
        0,
        displayWidth * 0.5,
        displayHeight * 0.5,
        450
      );
      gradient3.addColorStop(0, 'rgba(124, 92, 255, 0.18)');
      gradient3.addColorStop(0.4, 'rgba(80, 174, 223, 0.10)');
      gradient3.addColorStop(0.8, 'rgba(124, 92, 255, 0.05)');
      gradient3.addColorStop(1, 'rgba(124, 92, 255, 0)');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      animationFrame = requestAnimationFrame(animate);
    };

    animate(performance.now());

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        // Force redraw after resize
        time = 0;
      }, 150); // Debounce resize events
    };

    // Handle viewport changes on mobile (keyboard, orientation, etc.)
    const handleOrientationChange = () => {
      setTimeout(() => {
        setCanvasSize();
        time = 0;
      }, 300);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });
    // Handle visual viewport changes (mobile keyboard)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize, { passive: true });
    }

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0,
        bottom: 0,
        width: '100vw', 
        height: '100vh',
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    />
  );
}

