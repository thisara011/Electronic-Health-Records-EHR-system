import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Doctors />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
