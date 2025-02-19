import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Bu veri normalde API'den gelecek
const getProductById = (id: string) => {
  const products = [
    {
      id: '1',
      name: 'Premium Köpek Maması',
      price: 299.99,
      images: [
        '/src/assets/images/71JM23WUD5L.__AC_SX300_SY300_QL70_ML2_.jpg',
        '/src/assets/images/2.jpg',
        '/src/assets/images/3.webp',
      ],
      category: 'dog',
      description: 'Yüksek protein içerikli, tüm ırklar için uygun premium köpek maması.',
      details: {
        brand: 'Reflex',
        weight: '3kg',
        ingredients: ['Tavuk', 'Pirinç', 'Sebzeler', 'Vitaminler'],
        features: [
          'Yüksek protein içeriği',
          'Tüm ırklar için uygundur',
          'Doğal içerikler',
          'Dengeli beslenme'
        ]
      },
      reviews: [
        { id: 1, user: 'Ahmet Y.', rating: 5, comment: 'Köpeğim çok seviyor, kesinlikle tavsiye ederim.', date: '2024-02-10' },
        { id: 2, user: 'Ayşe K.', rating: 4, comment: 'Kaliteli bir mama, fiyatı biraz yüksek.', date: '2024-02-08' }
      ],
      relatedProducts: [
        { id: '2', name: 'Köpek Tasması', price: 89.99, image: '/src/assets/images/tasma.jpg' },
        { id: '3', name: 'Köpek Oyuncağı', price: 49.99, image: '/src/assets/images/oyuncak.jpeg' }
      ]
    },
    // Diğer ürünler...
  ];

  return products.find(p => p.id === id);
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ürün Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
          Aradığınız ürün bulunamadı veya kaldırılmış olabilir.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold 
                   hover:bg-primary-700 transition-all duration-300 shadow-soft"
        >
          Ürünlere Dön
        </button>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setMousePosition({ x, y });
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="container mx-auto px-6 py-8 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div 
            className="relative pb-[100%] bg-white rounded-2xl overflow-hidden shadow-soft group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300
                        ${isZoomed ? 'scale-150' : 'scale-100'}`}
              style={isZoomed ? {
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
              } : undefined}
            />
            <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300
                          ${isZoomed ? 'opacity-0' : 'group-hover:opacity-100 opacity-0'}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium shadow-soft backdrop-blur-sm">
                  Yakınlaştırmak için fareyi üzerine getirin
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative pb-[100%] bg-white rounded-lg overflow-hidden shadow-soft
                          transition-all duration-300 hover:-translate-y-1
                          ${selectedImage === index ? 'ring-2 ring-primary-600' : ''}`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < averageRating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviews.length} değerlendirme)
                </span>
              </div>
              <span className="text-2xl font-bold text-primary-600">
                {product.price.toLocaleString('tr-TR', {
                  style: 'currency',
                  currency: 'TRY'
                })}
              </span>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold mb-2">Ürün Açıklaması</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Özellikler</h2>
              <ul className="space-y-2">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Ürün Detayları</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Marka:</span> {product.details.brand}</p>
                <p><span className="font-medium">Ağırlık:</span> {product.details.weight}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">İçindekiler</h2>
            <div className="flex flex-wrap gap-2">
              {product.details.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm
                           hover:bg-primary-100 transition-colors duration-300"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-full overflow-hidden shadow-soft">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-50 transition-colors duration-300"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-50 transition-colors duration-300"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-primary-600 text-white px-8 py-3 rounded-full font-semibold
                       hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                       shadow-soft"
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
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Müşteri Değerlendirmeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.reviews.map(review => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{review.user}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Benzer Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.relatedProducts.map(relatedProduct => (
            <div
              key={relatedProduct.id}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg
                       transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative pb-[100%] mb-4">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="absolute top-0 left-0 w-full h-full object-contain
                           transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary-600
                           transition-colors duration-300">
                {relatedProduct.name}
              </h3>
              <p className="text-primary-600 font-bold">
                {relatedProduct.price.toLocaleString('tr-TR', {
                  style: 'currency',
                  currency: 'TRY'
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 