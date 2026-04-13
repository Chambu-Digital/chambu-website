import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import CreativeDesign from './sections/CreativeDesign';
import Projects from './sections/Projects';
import Pricing from './sections/Pricing';
import Marketing from './sections/Marketing';
import Payment from './sections/Payment';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CreativeDesign />
        <Projects />
        <Pricing />
        <Marketing />
        <Payment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
