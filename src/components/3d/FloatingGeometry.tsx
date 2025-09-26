import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'octahedron' | 'torus';
  color: string;
  size?: number;
  speed?: number;
}

const FloatingGeometry = ({ 
  position, 
  geometry, 
  color, 
  size = 1, 
  speed = 1 
}: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.02 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'sphere':
        return <sphereGeometry args={[size * 0.8, 32, 16]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size]} />;
      case 'torus':
        return <torusGeometry args={[size, size * 0.4, 16, 100]} />;
      default:
        return <boxGeometry args={[size, size, size]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
    >
      {renderGeometry()}
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

export default FloatingGeometry;