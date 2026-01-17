"use client";

import { useEffect, useRef } from 'react';

interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
}

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}: DarkVeilProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('DarkVeil: Canvas ref is null');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('DarkVeil: Could not get 2d context');
      return;
    }

    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * resolutionScale;
        canvas.height = rect.height * resolutionScale;
        console.log('DarkVeil: Canvas size set to', canvas.width, 'x', canvas.height, 'from container', rect.width, 'x', rect.height);
      } else {
        canvas.width = window.innerWidth * resolutionScale;
        canvas.height = window.innerHeight * resolutionScale;
        console.log('DarkVeil: Canvas size set to', canvas.width, 'x', canvas.height, 'from window');
      }
    };

    setCanvasSize();
    console.log('DarkVeil: Component mounted, starting animation');

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      if (!ctx) return;

      time += speed * 0.01;

      // Clear canvas with dark background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create animated gradient orbs - MUCH STRONGER for visibility
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 50,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        500
      );
      gradient1.addColorStop(0, 'rgba(124, 92, 255, 0.6)');
      gradient1.addColorStop(0.3, 'rgba(80, 174, 223, 0.4)');
      gradient1.addColorStop(0.6, 'rgba(124, 92, 255, 0.2)');
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
      gradient2.addColorStop(0, 'rgba(80, 174, 223, 0.5)');
      gradient2.addColorStop(0.3, 'rgba(124, 92, 255, 0.3)');
      gradient2.addColorStop(0.6, 'rgba(80, 174, 223, 0.15)');
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
      gradient3.addColorStop(0, 'rgba(124, 92, 255, 0.4)');
      gradient3.addColorStop(0.4, 'rgba(80, 174, 223, 0.25)');
      gradient3.addColorStop(0.8, 'rgba(124, 92, 255, 0.1)');
      gradient3.addColorStop(1, 'rgba(124, 92, 255, 0)');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add noise if noiseIntensity > 0
      if (noiseIntensity > 0) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const noise = (Math.random() - 0.5) * noiseIntensity * 255;
          data[i] = Math.max(0, Math.min(255, data[i] + noise));
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
        }
        ctx.putImageData(imageData, 0, 0);
      }

      // Add scanlines if scanlineIntensity > 0
      if (scanlineIntensity > 0 && scanlineFrequency > 0) {
        ctx.strokeStyle = `rgba(0, 0, 0, ${scanlineIntensity})`;
        ctx.lineWidth = 1;
        for (let y = 0; y < canvas.height; y += scanlineFrequency) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none'
      }}
    />
  );
}

