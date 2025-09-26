import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';

interface ThreeSceneProps {
  children: ReactNode;
  camera?: any;
  controls?: boolean;
  className?: string;
}

const ThreeScene = ({ 
  children, 
  camera = { position: [0, 0, 5], fov: 45 },
  controls = false,
  className = "w-full h-full"
}: ThreeSceneProps) => {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
          />
          <pointLight 
            position={[-10, -10, -10]} 
            intensity={0.5}
            color="#00ffff"
          />
          <pointLight 
            position={[10, 10, 10]} 
            intensity={0.5}
            color="#ff00ff"
          />
          
          {children}
          
          {controls && <OrbitControls enableZoom={false} enablePan={false} />}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;