import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

// Blog yazıları veritabanı (gerçek uygulamada API'den gelecek)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Köpeklerde Doğru Beslenme Nasıl Olmalı?',
    excerpt: 'Köpeğinizin sağlıklı ve mutlu bir yaşam sürmesi için beslenme önerilerimizi keşfedin.',
    content: `
      <div class="article-content">
        <p class="lead">Köpeklerin sağlıklı ve mutlu bir yaşam sürmesi için doğru beslenme büyük önem taşır. İşte köpeğinizin beslenmesi hakkında bilmeniz gereken temel noktalar:</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">1. Yaşa Göre Beslenme</h2>
        <p>Köpeklerin yaş dönemlerine göre beslenme ihtiyaçları farklılık gösterir:</p>
        <ul class="list-disc ml-6 mt-2 space-y-2">
          <li><strong>Yavru Köpekler (0-12 ay):</strong> Günde 3-4 öğün, yüksek proteinli mama</li>
          <li><strong>Yetişkin Köpekler (1-7 yaş):</strong> Günde 2 öğün, dengeli protein ve karbonhidrat içerikli mama</li>
          <li><strong>Yaşlı Köpekler (7+ yaş):</strong> Günde 2 öğün, düşük yağlı ve sindirimi kolay mama</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">2. Besin Grupları</h2>
        <p>Köpeğinizin sağlıklı beslenmesi için gerekli temel besin grupları:</p>
        <ul class="list-disc ml-6 mt-2 space-y-2">
          <li><strong>Proteinler:</strong> Et, balık, yumurta (kas gelişimi için)</li>
          <li><strong>Karbonhidratlar:</strong> Pirinç, patates (enerji için)</li>
          <li><strong>Yağlar:</strong> Balık yağı, zeytinyağı (sağlıklı deri ve tüyler için)</li>
          <li><strong>Vitaminler ve Mineraller:</strong> Sebzeler ve takviyeler</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">3. Su İhtiyacı</h2>
        <p>Köpeğinizin her zaman temiz ve taze suya erişimi olmalıdır. Ortalama su tüketimi:</p>
        <ul class="list-disc ml-6 mt-2 space-y-2">
          <li>Her 1 kg vücut ağırlığı için günde 60 ml su</li>
          <li>Sıcak havalarda ve egzersiz sonrası daha fazla su</li>
          <li>Su kapları günlük olarak temizlenmeli</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">4. Yasak Besinler</h2>
        <p>Köpeklere asla verilmemesi gereken besinler:</p>
        <ul class="list-disc ml-6 mt-2 space-y-2">
          <li>Çikolata ve kafein içeren ürünler</li>
          <li>Soğan, sarımsak ve pırasa</li>
          <li>Üzüm ve kuru üzüm</li>
          <li>Şekerli ve tuzlu atıştırmalıklar</li>
          <li>Çiğ yumurta ve çiğ et</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">5. Beslenme Düzeni</h2>
        <p>Sağlıklı bir beslenme düzeni için öneriler:</p>
        <ul class="list-disc ml-6 mt-2 space-y-2">
          <li>Her gün aynı saatlerde beslenme</li>
          <li>Uygun porsiyon kontrolü</li>
          <li>Mama değişikliklerini kademeli yapma</li>
          <li>Egzersizden 1 saat önce/sonra beslenmeme</li>
        </ul>

        <div class="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-3">Önemli Not</h3>
          <p>Her köpeğin beslenme ihtiyacı farklıdır. Köpeğinizin ırkı, yaşı, aktivite düzeyi ve sağlık durumuna göre 
          bir beslenme programı oluşturmak için veterinerinize danışmanızı öneririz.</p>
        </div>
      </div>
    `,
    image: '/src/assets/images/kopekk.jpg',
    category: 'Köpek Bakımı',
    author: 'Veteriner Ahmet Yılmaz',
    date: '15 Şubat 2024',
    readTime: '5 dk'
  },
  // Diğer blog yazıları...
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  // İlgili makaleleri bul (aynı kategoriden diğer yazılar)
  const relatedPosts = blogPosts
    .filter(p => p.id !== id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-center">Makale bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Blog Header */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-primary-600 font-medium">{post.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} okuma</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">İlgili Makaleler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail; 