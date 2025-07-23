import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 px-4 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
       
        <div className="flex items-center gap-2">
          <img src={logo} alt="Turown Logo" className="h-10 w-auto" />
        </div>

        
        <ul className="flex flex-wrap gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Anasayfa
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Hizmetler
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              İletişim
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Turown. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
