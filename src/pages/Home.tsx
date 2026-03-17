import  { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const Footer = lazy(() => import('../components/Footer'));
// const Testimonials = lazy(() => import('../components/Testimonials'));

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div className="text-center py-10">Yükleniyor...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Yükleniyor...</div>}>
        <Services />
      </Suspense>

      {/* <Suspense fallback={<div>Referanslar yükleniyor...</div>}>
        <Testimonials />
      </Suspense> */}

      <Suspense fallback={<div className="text-center py-10">Yükleniyor...</div>}>
        <ContactForm />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Yükleniyor...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
