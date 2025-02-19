import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920',
    title: 'Evcil Dostlarınız İçin En İyi Ürünler',
    description: 'Premium kalitede mama ve aksesuarlar',
    buttonText: 'Hemen Keşfet'
  },
  {
    image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=1920',
    title: 'Veteriner Hizmetleri',
    description: 'Uzman kadromuzla 7/24 hizmetinizdeyiz',
    buttonText: 'Randevu Al'
  },
  {
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920',
    title: 'Özel İndirimler',
    description: 'İlk alışverişinize özel %20 indirim',
    buttonText: 'İndirimleri Gör'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent z-10" />
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-lg"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {slides[currentSlide].description}
                </p>
                <button className="px-8 py-4 bg-accent-500 text-white rounded-full hover:bg-accent-600 transition-colors">
                  {slides[currentSlide].buttonText}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 