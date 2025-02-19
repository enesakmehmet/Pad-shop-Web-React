import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Ürünler', href: '/products' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/contact' },
  ];

  const categories = [
    { name: 'Köpek', href: '/products?category=dog' },
    { name: 'Kedi', href: '/products?category=cat' },
    { name: 'Kuş', href: '/products?category=bird' },
    { name: 'Balık', href: '/products?category=fish' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: '#' },
    { name: 'Twitter', icon: FiTwitter, href: '#' },
    { name: 'Instagram', icon: FiInstagram, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-lg rotate-6 transition-transform group-hover:rotate-12" />
                <svg 
                  className="w-8 h-8 text-white relative transform transition-transform group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15.5 14.5c1.5 0 3-.5 4-1.5M19 10c0-1.657-3.134-3-7-3S5 8.343 5 10m14 0v4.5c0 1.657-3.134 3-7 3s-7-1.343-7-3V10m14 0c0 1.657-3.134 3-7 3s-7-1.343-7-3m0 0V5.5c0-1.657 3.134-3 7-3s7 1.343 7 3V10z" 
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                PetShop
              </span>
            </Link>
            <p className="text-sm">
              Evcil hayvanlarınız için en kaliteli ürünleri sunuyoruz. Mutlu dostlar, mutlu sahipler!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span>Örnek Mahallesi, Örnek Sokak No:123 İstanbul/Türkiye</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-primary-500" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-primary-500" />
                <span>info@petshop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Pet Shop. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 