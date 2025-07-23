import React, { useState } from 'react';
import hero from "../assets/hero.jpg";
import vision from "../assets/vision.jpg";

interface TabContent {
  title: string;
  text: string;
  img: string;
}

const About = () => {
  const [activeTab, setActiveTab] = useState<'bizkimiz' | 'misyonvizyon'>('bizkimiz');

  // Placeholder images - replace with your actual image imports
  const tabData: Record<'bizkimiz' | 'misyonvizyon', TabContent> = {
    bizkimiz: {
      title: 'Biz Kimiz?',
      text: 'Turown Endüstriyel; otomasyon, yapay zeka, IoT ve üretim teknolojileri alanlarında yenilikçi çözümler sunan bir teknoloji firmasıdır. Hedefimiz; üretim süreçlerini dijitalleştirerek, işletmelere sürdürülebilir ve verimli sistemler kazandırmaktır.',
      img: hero,
    },
    misyonvizyon: {
      title: 'Misyonumuz & Vizyonumuz',
      text: 'Misyonumuz, endüstri 4.0 ve dijital dönüşüm alanlarında öncü çözümler geliştirerek iş ortaklarımızın rekabet gücünü artırmaktır. Vizyonumuz, global ölçekte akıllı üretim altyapılarına yön veren lider bir teknoloji sağlayıcısı olmaktır.',
      img: vision
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="about" className="relative bg-gradient-to-br from-indigo-100 via-slate-50 to-blue-100 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-slate-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
            Hakkımızda
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-2 shadow-lg">
            {(['bizkimiz', 'misyonvizyon'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-500 relative overflow-hidden ${
                  activeTab === key
                    ? 'text-white shadow-lg'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {/* Active Tab Background */}
                {activeTab === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl"></div>
                )}
                
                {/* Active Tab Glow */}
                {activeTab === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl opacity-50 blur-lg"></div>
                )}
                
                <span className="relative z-10">
                  {key === 'bizkimiz' ? 'Biz Kimiz' : 'Misyon & Vizyon'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 items-center min-h-[500px]">
            {/* Image Section */}
            <div className="relative p-8 md:p-12">
              {/* Decorative Background */}
              <div className="absolute inset-4 bg-gradient-to-br from-indigo-100/50 to-blue-100/50 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-6 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl transform -rotate-2"></div>
              
              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl group-hover:from-indigo-500/30 group-hover:to-blue-500/30 transition-all duration-500"></div>
                
                <img
                  src={current.img}
                  alt={current.title}
                  className="relative w-full h-[350px] object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Corner Decorations */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-8 md:p-12 md:pl-0">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {current.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                  
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {current.text}
                  </p>
                </div>

                {/* Stats or Additional Info */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">10+</div>
                    <div className="text-sm text-slate-600">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-slate-600">Başarılı Proje</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default About;