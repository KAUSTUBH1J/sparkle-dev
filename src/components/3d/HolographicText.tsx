import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';

interface HolographicTextProps {
  children: string;
  position?: [number, number, number];
  size?: number;
  color?: string;
}

const HolographicText = ({ 
  children, 
  position = [0, 0, 0], 
  size = 1,
  color = "#00ffff" 
}: HolographicTextProps) => {
  const textRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Holographic shimmer effect
      const material = textRef.current.material as any;
      if (material) {
        material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/orbitron-medium.woff"
    >
      {children}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.9}
      />
    </Text>
  );
};

export default HolographicText;