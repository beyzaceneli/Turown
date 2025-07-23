const testimonials = [
  {
    name: 'Zeynep K.',
    role: 'Üretim Müdürü',
    feedback: 'Turown’un otomasyon çözümleriyle üretim verimliliğimiz %30 arttı.',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Mert A.',
    role: 'IT Direktörü',
    feedback: 'Yapay zeka sistemleri sayesinde bakım maliyetlerimizi azalttık.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Elif D.',
    role: 'Teknik Koordinatör',
    feedback: 'Turown, dijitalleşme sürecimizde bize stratejik değer kattı.',
    avatar: 'https://i.pravatar.cc/100?img=20',
  },
];

const Testimonials = () => {
  return (
    <section  id="testimonials" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Kullanıcı Yorumları</h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          İş ortaklarımızdan gelen güven dolu geri bildirimler.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">“{item.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
