import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={earth.scene} />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gL={{ preserveDrawingBuffer: true}} camera={{ }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
        <Earth />     
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;