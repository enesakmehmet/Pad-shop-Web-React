import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard';

// Örnek kategoriler
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'dog', name: 'Köpek' },
  { id: 'cat', name: 'Kedi' },
  { id: 'bird', name: 'Kuş' },
  { id: 'fish', name: 'Balık' },
];

// Örnek ürünler (normalde API'den gelecek)
const initialProducts = [
  {
    id: '1',
    name: 'Premium Köpek Maması',
    price: 299.99,
    image: '/src/assets/images/pre.jpg',
    category: 'dog',
    description: 'Yüksek protein içerikli, tüm ırklar için uygun premium köpek maması.'
  },
  {
    id: '2',
    name: 'Kedi Tırmalama Tahtası',
    price: 149.99,
    image: '/src/assets/images/keypet-yuvali-ve-cok-katli-hamakli-ked-8-4227.webp',
    category: 'cat',
    description: 'Dayanıklı malzemeden üretilmiş, kedilerin severek kullanacağı tırmalama tahtası.'
  },
  {
    id: '3',
    name: 'Lüks Kuş Kafesi',
    price: 599.99,
    image: '/src/assets/images/kafes.jpg',
    category: 'bird',
    description: 'Geniş ve konforlu, çok katlı lüks kuş kafesi.'
  },
  {
    id: '4',
    name: 'Akvaryum Filtresi',
    price: 249.99,
    image: '/src/assets/images/flitre.jpg',
    category: 'fish',
    description: 'Yüksek performanslı, sessiz çalışan akvaryum filtresi.'
  },
  {
    id: '5',
    name: 'Kedi Kumu (10kg)',
    price: 129.99,
    image: '/src/assets/images/kum.webp',
    category: 'cat',
    description: 'Topaklanan, kokusuz ve uzun ömürlü kedi kumu.'
  },
  {
    id: '6',
    name: 'Köpek Tasması',
    price: 89.99,
    image: '/src/assets/images/tasma.jpg',
    category: 'dog',
    description: 'Ayarlanabilir, dayanıklı ve rahat köpek tasması.'
  },
  {
    id: '7',
    name: 'Kuş Yemi (1kg)',
    price: 49.99,
    image: '/src/assets/images/kuş yemi.webp',
    category: 'bird',
    description: 'Vitaminlerle zenginleştirilmiş karışık kuş yemi.'
  },
  {
    id: '8',
    name: 'Balık Yemi',
    price: 39.99,
    image: '/src/assets/images/balık yemı.jpg',
    category: 'fish',
    description: 'Renklendrici ve besleyici tropik balık yemi.'
  },
  {
    id: '9',
    name: 'Kedi Oyuncak Seti',
    price: 79.99,
    image: '/src/assets/images/kedi oyuncak seti.jpg',
    category: 'cat',
    description: '5 parçalı interaktif kedi oyuncak seti.'
  },
  {
    id: '10',
    name: 'Köpek Yatağı',
    price: 199.99,
    image: '/src/assets/images/köpek yatağı.webp',
    category: 'dog',
    description: 'Ortopedik, yıkanabilir lüks köpek yatağı.'
  },
  {
    id: '11',
    name: 'Akvaryum Bitkileri',
    price: 69.99,
    image: '/src/assets/images/akvaryum.webp',
    category: 'fish',
    description: 'Doğal görünümlü yapay akvaryum bitki seti.'
  },
  {
    id: '12',
    name: 'Kuş Oyuncakları',
    price: 59.99,
    image: '/src/assets/images/kuş oyuncakları.jpg',
    category: 'bird',
    description: 'Renkli ve eğlenceli kuş oyuncak seti.'
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Ürünleri filtrele ve sırala
  const filteredProducts = initialProducts
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Filters and Search */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Ürün ara..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="featured">Öne Çıkanlar</option>
              <option value="price-low">Fiyat: Düşükten Yükseğe</option>
              <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              <option value="name">İsim: A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-600">
            Aradığınız kriterlere uygun ürün bulunamadı.
          </h3>
        </div>
      )}
    </div>
  );
};

export default Products; 