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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* SOL: Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={isScrolled ? logoDark : logoWhite}
            alt="Turown Logo"
            className="h-10 transition-all duration-300"
          />
        </a>

        {/* ORTA: Menü */}
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

        {/* SAĞ: Contact butonu */}
        <div className="flex items-center gap-2">
 <a
  href="tel:+905457956231"
  className="inline-flex items-center gap-4 px-6 py-3 bg-[#4AC3F0] text-white font-bold rounded-full shadow-lg relative overflow-hidden"
>
  {/* Telefon ikonu + çınlama animasyonu */}
  <div className="relative w-10 h-10">
    {/* Dalga halkası */}
    <span className="absolute inset-0 rounded-full border-2 border-white animate-ring" />
    {/* <span className="absolute inset-0 rounded-full border-2 border-white animate-ring delay-200" /> */}
    <span className="absolute inset-0 rounded-full border-2 border-white animate-ring delay-400" />

    {/* İkonun kendisi */}
    <div className="w-10 h-10 flex items-center justify-center bg-white text-[#4AC3F0] rounded-full relative z-10">
      <PhoneIcon className="w-5 h-5" />
    </div>
  </div>

  {/* Numara */}
  <span className="text-lg tracking-wide">+90 545 795 6231</span>
</a>




         

          {/* Mobil Menü Butonu */}
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
        <div className="md:hidden fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-2xl font-semibold hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
