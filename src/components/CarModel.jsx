import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const CarModel = () => {
  const model = useLoader(GLTFLoader, "/car_model.glb");
  const carRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.01; // Adjust speed here
    }
  });

  return <primitive object={model.scene} ref={carRef} />;
};

export default function CarScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
    >
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <CarModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
}
