import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import vintageMusic from "../data/vintagemusic.mp3";

// ✅ Keep audio outside to prevent reinitialization on route change
const audio = new Audio(vintageMusic);
audio.loop = true; // Ensure it loops smoothly

const Navbar = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.nav
      layout // ✅ Helps prevent jitter on route changes
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // ✅ Smoother transition
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-lg z-50 overflow-hidden"
    >
      {/* Animated Logo */}
      <motion.h1
        whileHover={{
          scaleX: 1.1,
          scaleY: 1.1,
          textShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="text-3xl font-extrabold text-orange-400 cursor-pointer tracking-wide"
      >
        VINTAGE CARS
      </motion.h1>

      {/* Navigation Links & Music Button */}
      <ul className="flex space-x-8 items-center">
        {["Home", "Gallery", "Contact"].map((item, index) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <motion.li
              key={index}
              whileHover={{
                y: -3,
                textShadow: "0px 0px 10px rgba(255, 140, 0, 0.5)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative text-lg cursor-pointer"
            >
              <Link
                to={path}
                className={`relative px-2 transition-all duration-300 ${
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-gray-300 hover:text-orange-300"
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.li>
          );
        })}

        {/* 🎵 Music Control Button */}
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
        >
          <button
            onClick={toggleMusic}
            className="px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 flex items-center text-gray-300 hover:text-orange-300"
          >
            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
