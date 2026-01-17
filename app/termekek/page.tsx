"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import KlimaImage from "@/components/KlimaImage";
import KlimaModal from "@/components/KlimaModal";

const klimaProducts = [
  {
    id: 1,
    name: "Samsung AR35",
    power: "3,5 kW",
    price: "240.000 Ft",
    description: "Gazdaságos hűtés, kiegészítő fűtés -5 °C-ig",
    features: ["Gazdaságos működés", "Kiegészítő fűtés", "Modern design", "Csendes működés"],
    brand: "Samsung",
    image: "/images/klima-samsung-ar35.jpg.webp"
  },
  {
    id: 2,
    name: "MDV by Midea One",
    power: "3,5 kW",
    price: "240.000 Ft",
    description: "Extrém takarékos, téliesített, fűtés -15 °C-ig",
    features: ["Extrém takarékos", "Téliesített", "Fűtés -15 °C-ig", "Energiahatékony"],
    brand: "Midea",
    image: "/images/klima-midea-one.jpg.webp"
  },
  {
    id: 3,
    name: "Midea Xtreme Save",
    power: "3,5 kW",
    price: "260.000 Ft",
    description: "Kiváló ár/érték arányú gép, kiegészítő fűtés -15 °C-ig",
    features: ["Kiváló ár/érték arány", "Kiegészítő fűtés", "Megbízható", "Könnyű kezelés"],
    brand: "Midea",
    image: "/images/klima-midea-xtreme.jpg.webp"
  },
  {
    id: 4,
    name: "Midea BreezeleSS E",
    power: "3,5 kW",
    price: "280.000 Ft",
    description: "Huzatmentes kivitel, fűtés -15 °C-ig",
    features: ["Huzatmentes kivitel", "Fűtés -15 °C-ig", "Kényelmes", "Modern technológia"],
    brand: "Midea",
    image: "/images/klima-midea-breezeless.jpg.jfif"
  },
  {
    id: 5,
    name: "Midea All Easy Pro",
    power: "3,5 kW",
    price: "330.000 Ft",
    description: "Fűtésre optimalizált, -25 °C-ig",
    features: ["Fűtésre optimalizált", "Működés -25 °C-ig", "Prémium minőség", "Hosszú élettartam"],
    brand: "Midea",
    image: "/images/klima-midea-all-easy.jpg.jfif"
  },
  {
    id: 6,
    name: "Gree Comfort Plus",
    power: "3,5 kW",
    price: "330.000 Ft",
    description: "Energiahatékony, téliesített, fűtés -20 °C-ig",
    features: ["Energiahatékony", "Téliesített", "Fűtés -20 °C-ig", "Kényelmes használat"],
    brand: "Gree",
    image: "/images/klima-gree-comfort.jpg.jfif"
  },
  {
    id: 7,
    name: "Daewoo Split Klíma",
    power: "3,5 kW",
    price: "270.000 Ft",
    description: "Optimális hűtés-fűtés, -20 °C-ig",
    features: ["Optimális hűtés-fűtés", "Működés -20 °C-ig", "Megbízható", "Könnyű telepítés"],
    brand: "Daewoo",
    image: "/images/klima-daewoo.jpg.jfif"
  },
];

export default function TermekekPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof klimaProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof klimaProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Wait for animation
  };

  return (
    <>
      {/* Modal */}
      <KlimaModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Hero Section - Products Page */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#0f1a0f] via-[#1a2e1a] to-[#0f1a0f]">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 40 L90 90 L10 90 L10 40 Z' fill='%23435936'/%3E%3Cpath d='M30 90 L30 50 L50 50 L50 90 Z' fill='%2386FD22'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-[#435936]/30 border-2 border-[#86FD22] rounded-full text-[#86FD22] text-lg font-bold">
              KLÍMA AKCIÓ
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Klímaberendezések
            <span className="block text-[#86FD22] mt-2">Kedvező Áron</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Modern, energiahatékony klímaberendezések telepített áron. Alapszereléssel értendő!
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <Section className="bg-white relative overflow-hidden">
        {/* Professional background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                #435936 10px,
                #435936 11px
              )`,
            }}
          ></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#435936]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86FD22]/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Válasszon klímaberendezést
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Minden ár telepített ár, alapszereléssel értendő. A készletekről és egyéb akciókról érdeklődjön kollégáinknál!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {klimaProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#435936] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image */}
                <KlimaImage
                  src={product.image}
                  alt={`${product.name} klíma - ${product.power}`}
                  brand={product.brand}
                  price={product.price}
                />
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                      {product.power}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Főbb jellemzők:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#86FD22] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                    className="w-full px-6 py-3 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold shadow-md"
                  >
                    Részletek
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Info Section */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white"></div>
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#435936 1px, transparent 1px), linear-gradient(90deg, #435936 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white border-2 border-[#435936] rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Információ és megrendelés
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#435936] mb-3">Telefon</h3>
                  <a 
                    href="tel:+36307312493" 
                    className="text-3xl md:text-4xl font-black text-gray-900 hover:text-[#86FD22] transition-colors block"
                  >
                    +36 30 731 2493
                  </a>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#435936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Klíma telepítés
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#435936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Karbantartás
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#435936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Légtechnika
                  </p>
                </div>
              </div>
              
              <div className="bg-[#435936]/5 rounded-xl p-6 border border-[#435936]/20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Fontos információk</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-[#435936] font-bold mt-1">•</span>
                    <span>Az itt közölt telepített árak alapszereléssel értendők!</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#435936] font-bold mt-1">•</span>
                    <span>A készletekről és az egyéb akciókról érdeklődjön kollégáinknál!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#435936]/5 via-white to-[#86FD22]/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Kérjen ingyenes ajánlatot!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Szakértőink segítenek kiválasztani az Önnek legmegfelelőbb klímaberendezést
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+36307312493" 
              className="px-8 py-4 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hívás: +36 30 731 2493
              </span>
            </a>
            <a 
              href="/#kapcsolat" 
              className="px-8 py-4 bg-white border-2 border-[#435936] text-[#435936] hover:bg-[#435936] hover:text-white rounded-lg transition-all duration-300 font-semibold text-lg"
            >
              Kapcsolatfelvételi űrlap
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

