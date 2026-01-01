"use client";

export default function HeroBackground() {
  return (
    <div className="hero-background">
      <div className="hero-background__gradient"></div>
      <div className="hero-background__noise"></div>
      <div className="hero-background__shapes">
        <div className="hero-background__shape hero-background__shape--1"></div>
        <div className="hero-background__shape hero-background__shape--2"></div>
        <div className="hero-background__shape hero-background__shape--3"></div>
      </div>
    </div>
  );
}

