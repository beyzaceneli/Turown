

const services = [
  {
    title: 'Endüstriyel Otomasyon',
    description: 'Üretim hatlarında verimliliği artıran otomasyon sistemleri kuruyoruz.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'blue-500',
  },
  {
    title: 'Siber Güvenlik',
    description: 'Endüstriyel altyapılar için güvenli yazılım çözümleri sunuyoruz.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    gradient: 'from-emerald-500 to-green-500',
    glowColor: 'emerald-500',
  },
  {
    title: 'Yapay Zeka & IoT',
    description: 'Nesnelerin interneti ve yapay zeka ile akıllı üretim süreçleri geliştiriyoruz.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-indigo-500',
    glowColor: 'purple-500',
  },
  {
    title: '7/24 Teknik Destek',
    description: 'Uzman destek ekibimizle her an yanınızdayız.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'orange-500',
  },
];

const Services = () => {
  return (
    <section id='services' className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Endüstri 4.0 odaklı güçlü teknolojik çözümler sunuyoruz. Geleceğin teknolojileriyle bugünün ihtiyaçlarını karşılıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{
                  animation: `slideInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Top Decoration */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg`}></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                {/* Corner Sparkles */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
        

        
        
      </div>

      
    </section>
  );
};

export default Services;