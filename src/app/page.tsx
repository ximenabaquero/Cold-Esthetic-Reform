import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import BeforeAfter from '@/components/home/BeforeAfter';
import Steps from '@/components/home/Steps';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <Steps />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}