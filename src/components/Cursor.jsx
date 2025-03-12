import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-red-500 rounded-full pointer-events-none mix-blend-difference"
      style={{ translateX: position.x - 12, translateY: position.y - 12 }}
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default Cursor;
