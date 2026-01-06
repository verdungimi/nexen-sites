"use client";

export default function ZoldhazHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Natural gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a0f] via-[#1a2e1a] to-[#0f1a0f]"></div>
      
      {/* Main image overlay - placeholder for actual green house/construction image */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1a2e1a]/50 to-transparent">
          {/* This will be replaced with actual image: <img src="/images/greenhouse-work.jpg" alt="Zöldház szerelési munkák" className="w-full h-full object-cover" /> */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <svg className="w-64 h-64 mx-auto text-[#435936]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p className="text-[#435936]/20 text-sm mt-4">Zöldház / Szerelési munkák képe</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23435936' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Natural light overlay - no neon */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
    </div>
  );
}
