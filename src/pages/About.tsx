import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'Kurucu & CEO',
    image: '/src/assets/images/ahmet yılmaz.jpeg',
    bio: '15 yıllık veteriner hekim deneyimi ile evcil hayvan sektöründe uzman.'
  },
  {
    id: 2,
    name: 'Ayşe Kaya',
    role: 'Veteriner Hekim',
    image: '/src/assets/images/ayşe kaya.jpg',
    bio: 'Küçük hayvan hastalıkları konusunda uzmanlaşmış veteriner hekim.'
  },
  {
    id: 3,
    name: 'Müjgan Demir',
    role: 'Ürün Müdürü',
    image: '/src/assets/images/genel-mudur-yardimcisi-1.jpg',
    bio: 'Evcil hayvan ürünleri konusunda 10 yıllık deneyim.'
  }
];

const values = [
  {
    icon: '🐾',
    title: 'Hayvan Sevgisi',
    description: 'Her kararımızın merkezinde hayvanların mutluluğu ve sağlığı var.'
  },
  {
    icon: '⭐',
    title: 'Kalite',
    description: 'En kaliteli ürünleri en uygun fiyatlarla sunuyoruz.'
  },
  {
    icon: '🤝',
    title: 'Güven',
    description: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.'
  },
  {
    icon: '💡',
    title: 'Yenilikçilik',
    description: 'Sektördeki en son yenilikleri takip ediyor ve uyguluyoruz.'
  }
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Evcil Hayvanlar İçin En İyisini Sunuyoruz
            </h1>
            <p className="text-lg text-white/90 mb-8">
              2010 yılından beri evcil hayvanlar ve sahipleri için en kaliteli ürünleri
              ve hizmetleri sunmaktan gurur duyuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
          <p className="text-gray-600 mb-8">
            2010 yılında küçük bir veteriner kliniği olarak başladık. Bugün, Türkiye'nin
            en büyük online pet shop zincirlerinden biri olarak, evcil hayvanlarınızın mutluluğu
            için çalışmaya devam ediyoruz. Misyonumuz, her evcil hayvanın hak ettiği
            kaliteli yaşama ulaşmasını sağlamak.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Ürün Çeşidi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Destek</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative pb-[100%]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Evcil Hayvanınız İçin En İyisini Mi Arıyorsunuz?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Geniş ürün yelpazemiz ve uzman kadromuzla sizlere hizmet vermekten
            mutluluk duyuyoruz.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold
                         hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-300
                         shadow-soft">
            Ürünleri Keşfet
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 