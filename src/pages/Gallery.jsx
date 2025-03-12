import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useSpring } from "framer-motion";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import galleryData from "../data/galleryData.json";

const categories = ["All", "Classic", "Sports", "Luxury"];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [shareOptions, setShareOptions] = useState(null); // ✅ Track which image is being shared

  useEffect(() => {
    const imagePromises = galleryData.map((car) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = car.src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((car) => car.category === selectedCategory);

  const parallaxY = useSpring(0, { stiffness: 50, damping: 10 });

  // ✅ Download Function
  const handleDownload = (src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = "VintageCar.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Share Function (Shows a popup with options)
  const handleShare = (src) => {
    setShareOptions(src);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 mt-12"
    >
      <h1 className="text-4xl font-bold mb-8">Vintage ShowDown</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Show Loader Until Images are Ready */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-300 text-lg">Loading images...</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, el: ".custom-pagination" }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800}
            loop={true}
            className="relative"
          >
            {filteredData.map((car, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-[16/9] max-h-[450px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <motion.img
                      style={{ y: parallaxY }}
                      src={car.src}
                      alt={car.title}
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-0"
                      onLoad={(e) => (e.target.style.opacity = 1)}
                      onClick={() => setLightbox({ open: true, src: car.src })}
                    />
                  </div>

                  <div className="w-full bg-gray-800 p-4 text-center rounded-b-lg shadow-lg mt-2">
                    <h2 className="text-2xl font-semibold">{car.title}</h2>
                    <p className="text-gray-300 text-md">{car.desc}</p>

                    {/* Buttons: Download & Share */}
                    <div className="flex justify-center mt-3 space-x-4">
                      <button
                        onClick={() => handleDownload(car.src)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                      >
                        <FaDownload /> <span>Download</span>
                      </button>
                      <button
                        onClick={() => handleShare(car.src)}
                        className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                      >
                        <FaShareAlt /> <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>
      )}

      {/* Share Options Popup */}
      {shareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-white mb-4">
              Share this Image
            </h2>
            <div className="flex flex-col space-y-3">
              <a
                href={`https://api.whatsapp.com/send?text=Check out this image: ${shareOptions}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg text-white"
              >
                Share on WhatsApp
              </a>
              <a
                href={`mailto:?subject=Check this out!&body=Here is a vintage car image: ${shareOptions}`}
                className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg text-white"
              >
                Share via Email
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(shareOptions)}
                className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg text-white"
              >
                Copy Link
              </button>
              <button
                onClick={() => handleDownload(shareOptions)}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white"
              >
                Download Image
              </button>
              <button
                onClick={() => setShareOptions(null)}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;
