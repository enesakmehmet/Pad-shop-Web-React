import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    discount?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-soft overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50">
            <FiHeart className="h-5 w-5 text-primary-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50">
            <FiEye className="h-5 w-5 text-primary-600" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-primary-600 font-medium mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              {product.price.toFixed(2)} TL
            </span>
            {product.discount && (
              <span className="text-sm text-gray-400 line-through">
                {(product.price * (1 + product.discount / 100)).toFixed(2)} TL
              </span>
            )}
          </div>
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
          >
            <FiShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 