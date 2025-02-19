import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  description
}) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image });
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-500 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block relative">
        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700
                      ${isHovered ? 'scale-110 filter brightness-[0.85]' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent 
                          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Quick View Button */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                          ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <span className="px-6 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-medium
                           backdrop-blur-sm hover:bg-white transition-colors duration-300">
              Hızlı Bakış
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium text-white bg-primary-600/90 rounded-full
                           backdrop-blur-xs shadow-soft animate-fade-in">
              {category}
            </span>
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-sm font-bold text-white bg-secondary-500/90 rounded-full
                           backdrop-blur-xs shadow-soft animate-fade-in">
              {price.toLocaleString('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              })}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300
                         group-hover:text-primary-600 line-clamp-1">
            {name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 group-hover:text-gray-900 transition-colors duration-300">
            {description}
          </p>
          
          {/* Add to Cart Button */}
          <div className="relative">
            <button
              onClick={handleAddToCart}
              className={`w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold 
                         transition-all duration-500 transform
                         hover:bg-primary-700 hover:shadow-glow
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                         ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}`}
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Sepete Ekle
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 