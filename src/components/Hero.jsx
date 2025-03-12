import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mt-20"
    >
      <h1 className="text-5xl font-bold">Vintage Car Collection</h1>
      <p className="text-lg mt-4">Explore timeless beauty and classic elegance of vintage cars.</p>
      <button className="mt-6 px-6 py-3 bg-red-500 rounded-md text-white text-lg hover:bg-red-600">
        Explore
      </button>
    </motion.div>
  );
};

export default Hero;
