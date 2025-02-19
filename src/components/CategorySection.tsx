import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Kedi Maması',
    price: '299.99',
    image: '/images/kedi-mamasi.jpg',
    description: 'Yüksek protein içerikli premium kedi maması'
  },
  {
    id: 2,
    name: 'Köpek Oyuncağı',
    price: '89.99',
    image: '/images/kopek-oyuncak.jpg',
    description: 'Dayanıklı ve eğlenceli köpek oyuncağı'
  },
  {
    id: 3,
    name: 'Kuş Kafesi',
    price: '449.99',
    image: '/images/kus-kafes.jpg',
    description: 'Geniş ve konforlu kuş kafesi'
  },
  {
    id: 4,
    name: 'Akvaryum Seti',
    price: '899.99',
    image: '/images/akvaryum.jpg',
    description: 'Tam donanımlı başlangıç akvaryum seti'
  }
];

const CategorySection: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Öne Çıkan Ürünler
        </h2>
        <p className="text-gray-600 text-center mb-12">
          En çok tercih edilen evcil hayvan ürünleri
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">
                      ₺{product.price}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection; 