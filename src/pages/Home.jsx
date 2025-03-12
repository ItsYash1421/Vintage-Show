import { useRef } from 'react';
import { motion } from 'framer-motion';
import CarModel from '../components/CarModel';
import '../styles/home.css';

const Home = () => {
  const aboutRef = useRef(null); // Reference to the Gallery Section

  const handleExploreClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Vintage Car Collection</h1>
        <p className="hero-subtitle">Explore timeless beauty and classic elegance of vintage cars.</p>
        <motion.button 
          className="explore-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExploreClick}
        >
          Explore
        </motion.button>
      </motion.section>

      {/* 3D Car Model Section */}
      <motion.section 
        className="car-model-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <CarModel />
      </motion.section>

      {/* About Section */}
     
{/* About Section */}
<motion.section 
  ref={aboutRef} // Attach ref for scrolling
  className="about-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Section Header */}
  <div className="about-header">
    <h2 className="about-title">🚗 The Timeless Legacy of Vintage Cars</h2>
    <p className="about-subtitle">
      A journey through history, craftsmanship, and automotive excellence.
    </p>
  </div>

  {/* Main Content */}
  <div className="about-content">
    {/* Legacy of Vintage Cars */}
    <div className="about-card">
      <h3>🏆 Legacy & Heritage</h3>
      <p>
        Vintage cars are more than just machines; they represent an era of elegance and innovation. 
        From the luxury of a Rolls-Royce to the power of a Mustang, each model tells a story 
        of ambition, creativity, and engineering mastery.
      </p>
    </div>

    {/* Design Excellence */}
    <div className="about-card">
      <h3>🎨 Iconic Design</h3>
      <p>
        Hand-crafted leather interiors, chrome accents, sleek curves, and bold aesthetics—every 
        vintage car is an artistic masterpiece. The design philosophy of the past still influences 
        modern automobiles today.
      </p>
    </div>

    {/* Engineering Marvels */}
    <div className="about-card">
      <h3>⚙️ Engineering Marvels</h3>
      <p>
        Beneath their timeless exteriors, vintage cars were powered by revolutionary technology—supercharged 
        engines, manual transmissions, and roaring V8s. These cars were built for speed, durability, and thrill.
      </p>
    </div>

    {/* Collectors' Passion */}
    <div className="about-card">
      <h3>💎 The Collectors' Passion</h3>
      <p>
        Car enthusiasts and collectors worldwide continue to restore and cherish these classics. 
        Exclusive car shows, auctions, and rallies keep the legacy of vintage cars alive, making 
        them timeless treasures.
      </p>
    </div>

    {/* 🌍 Vintage Cars Around the World */}
    <div className="about-card">
      <h3>🌍 Vintage Cars Around the World</h3>
      <p>
        Different countries have shaped the world of vintage automobiles. Germany’s Porsche 911, 
        Italy’s Ferrari 250 GTO, and Britain’s Aston Martin DB5 each hold a legendary status. 
        Every region has left its mark on the automotive industry.
      </p>
    </div>

    {/* 🔧 Restoring Vintage Beauties */}
    <div className="about-card">
      <h3>🔧 Restoring Vintage Beauties</h3>
      <p>
        Bringing an old classic back to life is an art. From repainting classic bodies to 
        rebuilding engines, restorers ensure that vintage cars remain functional, stunning, and roadworthy 
        for future generations.
      </p>
    </div>
  </div>
</motion.section>

    </div>
  );
};

export default Home;
