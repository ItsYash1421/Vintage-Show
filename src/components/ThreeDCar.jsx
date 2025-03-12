import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CarModel() {
  const { scene } = useGLTF("/car_model.glb"); // Use a GLB car model
  return <primitive object={scene} scale={0.5} />;
}

const ThreeDCar = () => {
  return (
    <Canvas className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <CarModel />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDCar;
