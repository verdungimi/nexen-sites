"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const symbols = [
    { icon: "◉", x: 15, y: 20, delay: 0 },
    { icon: "◆", x: 75, y: 30, delay: 0.5 },
    { icon: "▲", x: 25, y: 60, delay: 1 },
    { icon: "●", x: 80, y: 70, delay: 1.5 },
    { icon: "◇", x: 50, y: 15, delay: 0.3 },
    { icon: "■", x: 10, y: 80, delay: 0.8 },
    { icon: "◈", x: 90, y: 50, delay: 1.2 },
    { icon: "◊", x: 40, y: 85, delay: 0.6 },
    { icon: "◐", x: 65, y: 25, delay: 0.7 },
    { icon: "◑", x: 30, y: 45, delay: 1.1 },
    { icon: "◒", x: 85, y: 60, delay: 0.4 },
    { icon: "◓", x: 20, y: 75, delay: 0.9 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {symbols.map((symbol, idx) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return null;
        
        const centerX = (containerRect.width * symbol.x) / 100;
        const centerY = (containerRect.height * symbol.y) / 100;
        const deltaX = (mousePosition.x - centerX) * 0.03;
        const deltaY = (mousePosition.y - centerY) * 0.03;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const scale = 1 + Math.min(distance * 0.0001, 0.3);
        const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        return (
          <div
            key={idx}
            className="absolute text-4xl md:text-6xl opacity-40 text-primary-300 drop-shadow-[0_0_10px_rgba(80,174,223,0.5)] transition-all duration-500 ease-out"
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              transform: `translate(${deltaX}px, ${deltaY}px) rotate(${rotation * 0.2}deg) scale(${scale})`,
            }}
          >
            <span className="animate-float inline-block">{symbol.icon}</span>
          </div>
        );
      })}
    </div>
  );
}


