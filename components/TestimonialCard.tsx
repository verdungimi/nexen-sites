interface TestimonialCardProps {
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

export default function TestimonialCard({ name, business, testimonial, result }: TestimonialCardProps) {
  return (
    <div className="card-hover bg-[#17151C] border border-[rgba(255,255,255,0.1)] p-8 rounded-2xl shadow-lg h-full relative overflow-hidden group hover:border-[#F2A93B]/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2A93B]/10 via-[#2DD4BF]/5 to-[#F2A93B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <div className="relative z-10">
        <div className="mb-4">
          <svg className="w-8 h-8 text-[#F2A93B] group-hover:text-[#2DD4BF] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        <p className="text-[#A69F91] mb-6 group-hover:text-white transition-colors duration-300 leading-relaxed">{testimonial}</p>
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
          <p className="font-semibold text-white group-hover:text-[#F2A93B] transition-all duration-300 drop-shadow-md">{name}</p>
          <p className="text-sm text-[#A69F91] group-hover:text-white/90 transition-colors mt-1">{business}</p>
          {result && (
            <p className="text-sm text-[#F2A93B] font-medium mt-2 group-hover:text-[#2DD4BF] transition-colors">{result}</p>
          )}
        </div>
      </div>
    </div>
  );
}
