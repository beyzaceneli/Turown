import hero from "../assets/hero.jpg";
import CountUp from "react-countup";




const Hero = () => (
  <section
    id="home"
    className="relative  h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    style={{ backgroundImage: `url(${hero})` }}
  >
    {/* Simple elegant overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/70 to-blue-900/80" />
    
    {/* Subtle background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 max-w-5xl text-center">
      
      {/* Clean main content */}
      <div className="mb-16 mt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Turown
        </h1>
        <div className="text-xl md:text-2xl font-light text-blue-200 mb-8">
          Endüstriyel
        </div>
        
        {/* Simple decorative line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
        
        <h2 className="text-lg md:text-xl text-white/90 leading-relaxed mb-2 max-w-3xl mx-auto">
          The force that dominates the life and activity of people...
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-cyan-300 mb-12">
          is the ability to create and invent.
        </h3>
        
        {/* Simple modern button */}
        <a
          href="#about"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Hakkımızda
        </a>
      </div>

      {/* Clean stats */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-16">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
            <CountUp end={500} duration={2} suffix="+" />
          </div>
          <div className="text-white/80 font-medium">Başarılı Proje</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            <CountUp end={50} duration={2} suffix="+" />
          </div>
          <div className="text-white/80 font-medium">Mutlu Müşteri</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
            <CountUp end={30} duration={2} suffix="+" />
          </div>
          <div className="text-white/80 font-medium">Yıllık Deneyim</div>
        </div>
      </div>
    </div>

   
    
  </section>
);

export default Hero;