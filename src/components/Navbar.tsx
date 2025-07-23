import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import logoDark from "../assets/logo.png";
import logoWhite from "../assets/logo-white.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

const languages = [
  { code: "tr", label: "TR", emoji: "🇹🇷" },
  { code: "en", label: "EN", emoji: "🇬🇧" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Sol: Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={isScrolled ? logoDark : logoWhite}
            alt="Turown Logo"
            className="h-10 transition-all duration-300"
          />
        </a>

        {/* Orta: Menü */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sağ: Telefon Butonu, Dil Seçici & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Dil Seçici */}
          

          {/* Telefon Butonu */}
          <a
            href="tel:+905457956231"
            className="relative inline-flex items-center gap-2 px-3 py-2 bg-[#4AC3F0] text-white text-sm font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-200"
          >
            <span className="absolute w-7 h-7 rounded-full border-white border-1 opacity-50 animate-ring-slow"></span>
            <span className="absolute w-7 h-7 rounded-full border-white border-1 opacity-50 animate-ring-slow"></span>
            <div className="w-7 h-7 z-10 flex items-center justify-center bg-white text-[#4AC3F0] rounded-full">
              <PhoneIcon className="w-4 h-4" />
            </div>
            <span className="hidden md:inline z-10">+90 545 795 6231</span>
          </a>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "tr" | "en")}
              className={` font-semibold rounded-full px-3 py-2 appearance-none border ${
                isScrolled ? "bg-white text-gray-700" : "bg-transparent text-white"
              }`}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.emoji} {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            {menuOpen ? (
              <XMarkIcon className={`h-7 w-7 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            ) : (
              <Bars3Icon className={`h-7 w-7 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 text-base font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobilde Dil Seçici */}
            <div className="pt-2">
              <label htmlFor="mobile-lang" className="block text-gray-700 mb-1">
                Dili Seçin
              </label>
              <select
                id="mobile-lang"
                value={language}
                onChange={(e) => setLanguage(e.target.value as "tr" | "en")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.emoji} {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
