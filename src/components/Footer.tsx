import { FaPhone,FaMailBulk,FaMapPin,FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-100 via-slate-50 to-blue-100 overflow-hidden">
      {/* Top Gradient Border */}

      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Turown Logo" className="h-12 w-auto" />
             
            </div>
          
            
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sayfalar
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Anasayfa', href: '#home' },
                { name: 'Hakkımızda', href: '#about' },
                { name: 'Hizmetler', href: '#services' },
                { name: 'İletişim', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">+90 545 795 6231</p>
                  <p className="text-xs text-gray-500">7/24 Destek Hattı</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaMailBulk size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">info@turown.com</p>
                  <p className="text-xs text-gray-500">E-posta Desteği</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaMapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Nilüfer, Bursa</p>
                  <p className="text-xs text-gray-500">Merkez Ofis</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Bizi Takip Edin
            </h4>
            <p className="text-gray-600 text-sm mb-6">
              Sosyal medya hesaplarımızdan güncel haberler ve projelerimizi takip edin.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={20} className="text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={20} className="text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-pink-400/25 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={20} className="text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Turown. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Gizlilik Politikası</a>
                <span>•</span>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Kullanım Şartları</a>
                <span>•</span>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Çerez Politikası</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;