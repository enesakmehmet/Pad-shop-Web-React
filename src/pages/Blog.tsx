import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Köpeklerde Doğru Beslenme Nasıl Olmalı?',
    excerpt: 'Köpeğinizin sağlıklı ve mutlu bir yaşam sürmesi için beslenme önerilerimizi keşfedin.',
    content: 'Köpeklerin sağlıklı beslenmesi için...',
    image: '/src/assets/images/kopekk.jpg',
    category: 'Köpek Bakımı',
    author: 'Veteriner Ahmet Yılmaz',
    date: '15 Şubat 2024',
    readTime: '5 dk'
  },
  {
    id: '2',
    title: 'Kedilerde Tırmalama Davranışı',
    excerpt: 'Kedilerin tırmalama davranışının nedenleri ve çözüm yöntemleri.',
    content: 'Kedilerin tırmalama davranışı doğal bir içgüdüdür...',
    image: '/src/assets/images/kedi-irklari.jpeg',
    category: 'Kedi Bakımı',
    author: 'Veteriner Ayşe Kaya',
    date: '12 Şubat 2024',
    readTime: '4 dk'
  },
  {
    id: '3',
    title: 'Kuşlar İçin Ev Ortamı Hazırlama',
    excerpt: 'Kuşunuz için ideal bir yaşam alanı oluşturmanın püf noktaları.',
    content: 'Kuşlar için güvenli ve konforlu bir ortam...',
    image: '/src/assets/images/Yetiskinlerde-Kus-Alerjisi.webp',
    category: 'Kuş Bakımı',
    author: 'Uzman Mehmet Demir',
    date: '10 Şubat 2024',
    readTime: '6 dk'
  },
  {
    id: '4',
    title: 'Köpek Eğitiminde İlk Adımlar',
    excerpt: 'Yavru köpeğinizin eğitimine nasıl başlamalısınız? İşte temel ipuçları.',
    content: 'Köpek eğitiminde tutarlılık ve sabır çok önemlidir...',
    image: '/src/assets/images/kopek-egitim.jpg',
    category: 'Köpek Bakımı',
    author: 'Eğitmen Ali Yıldız',
    date: '8 Şubat 2024',
    readTime: '7 dk'
  },
  {
    id: '5',
    title: 'Kedilerde Aşı Takvimi',
    excerpt: 'Kedinizin sağlığı için gerekli aşılar ve zamanlaması.',
    content: 'Kedilerin düzenli aşılanması hastalıklardan korunmak için...',
    image: '/src/assets/images/kedi-asi.jpg',
    category: 'Kedi Bakımı',
    author: 'Dr. Zeynep Ak',
    date: '5 Şubat 2024',
    readTime: '5 dk'
  },
  {
    id: '6',
    title: 'Muhabbet Kuşu Bakımı',
    excerpt: 'Muhabbet kuşunuzun sağlıklı ve mutlu yaşaması için temel bilgiler.',
    content: 'Muhabbet kuşları sosyal hayvanlardır...',
    image: '/src/assets/images/muhabbet-kusu.jpg',
    category: 'Kuş Bakımı',
    author: 'Uzman Elif Demir',
    date: '3 Şubat 2024',
    readTime: '6 dk'
  },
  {
    id: '7',
    title: 'Köpeklerde Diş Bakımı',
    excerpt: 'Köpeğinizin diş sağlığını korumak için yapmanız gerekenler.',
    content: 'Düzenli diş bakımı köpeklerde birçok sağlık sorununu önler...',
    image: '/src/assets/images/kopek-dis.jpg',
    category: 'Köpek Bakımı',
    author: 'Dr. Can Yılmaz',
    date: '1 Şubat 2024',
    readTime: '4 dk'
  },
  {
    id: '8',
    title: 'Kedilerde Tüy Bakımı',
    excerpt: 'Kedinizin tüylerinin sağlıklı ve parlak olması için ipuçları.',
    content: 'Düzenli tüy bakımı kedilerin sağlığı için önemlidir...',
    image: '/src/assets/images/kedi-tuy.jpg',
    category: 'Kedi Bakımı',
    author: 'Uzman Selin Ak',
    date: '29 Ocak 2024',
    readTime: '5 dk'
  },
  {
    id: '9',
    title: 'Papağanlarda Beslenme',
    excerpt: 'Papağanınız için doğru beslenme rehberi.',
    content: 'Papağanların sağlıklı beslenmesi için çeşitli gıdalar...',
    image: '/src/assets/images/papagan.jpg',
    category: 'Kuş Bakımı',
    author: 'Dr. Ayşe Kaya',
    date: '25 Ocak 2024',
    readTime: '6 dk'
  }
];

const categories = [
  'Tümü',
  'Köpek Bakımı',
  'Kedi Bakımı',
  'Kuş Bakımı',
  'Beslenme',
  'Sağlık',
  'Eğitim'
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Evcil hayvan bakımı, beslenmesi ve sağlığı hakkında uzman görüşleri ve faydalı bilgiler.
        </p>
      </div>

      {/* Search and Categories */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Blog yazılarında ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent
                     shadow-soft"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                          transition-all duration-300 ${
                            selectedCategory === category
                              ? 'bg-primary-600 text-white shadow-soft'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg
                     transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative pb-[60%] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-primary-600 rounded-full text-sm font-medium
                               backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} okuma</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.author}</span>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700
                           transition-colors duration-300"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Bültenimize Katılın</h2>
          <p className="text-gray-600 mb-6">
            En yeni blog yazılarımızdan ilk siz haberdar olun.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 max-w-md px-6 py-3 rounded-full border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent
                       shadow-soft"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold
                       hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-300
                       shadow-soft"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog; 