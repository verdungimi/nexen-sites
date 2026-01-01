"use client";

import { useEffect, useRef } from 'react';

export default function FinAIHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      // Only cover viewport height, not full document height
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      if (!ctx) return;

      time += 0.01;

      // Clear canvas
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create animated gradient orbs - stronger effect
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 50,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        500
      );
      gradient1.addColorStop(0, 'rgba(124, 92, 255, 0.25)');
      gradient1.addColorStop(0.3, 'rgba(80, 174, 223, 0.15)');
      gradient1.addColorStop(0.6, 'rgba(124, 92, 255, 0.08)');
      gradient1.addColorStop(1, 'rgba(124, 92, 255, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 0.8) * 60,
        canvas.height * 0.7 + Math.sin(time * 0.6) * 60,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        600
      );
      gradient2.addColorStop(0, 'rgba(80, 174, 223, 0.22)');
      gradient2.addColorStop(0.3, 'rgba(124, 92, 255, 0.12)');
      gradient2.addColorStop(0.6, 'rgba(80, 174, 223, 0.06)');
      gradient2.addColorStop(1, 'rgba(80, 174, 223, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a third gradient orb for more depth
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.5) * 80,
        canvas.height * 0.5 + Math.cos(time * 0.9) * 80,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        450
      );
      gradient3.addColorStop(0, 'rgba(124, 92, 255, 0.18)');
      gradient3.addColorStop(0.4, 'rgba(80, 174, 223, 0.10)');
      gradient3.addColorStop(0.8, 'rgba(124, 92, 255, 0.05)');
      gradient3.addColorStop(1, 'rgba(124, 92, 255, 0)');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}
    />
  );
}

