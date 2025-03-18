import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';
import '../../styles/shared/cyber-background.css';

const NeonGrid = () => {
  const gridRef = useRef();
  const mousePos = useMousePosition();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    gridRef.current.material.uniforms.uTime.value = time;
    
    // Respond to mouse movement
    if (mousePos.x && mousePos.y) {
      gridRef.current.rotation.x = mousePos.y * 0.1;
      gridRef.current.rotation.y = mousePos.x * 0.1;
    }
  });

  const gridShader = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        
        void main() {
          vec2 grid = fract(vUv * 50.0);
          float brightness = sin(uTime) * 0.5 + 0.5;
          vec3 color = vec3(0.0, 1.0, 0.8) * brightness;
          float line = step(0.98, grid.x) + step(0.98, grid.y);
          gl_FragColor = vec4(color * line, line * 0.5);
        }
      `
    };
  }, []);

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <shaderMaterial 
        attach="material"
        {...gridShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

const CyberCoins = () => {
  const coinsRef = useRef();
  const mousePos = useMousePosition();

  const coinPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 15; i++) {  // Reduced number for better performance
      positions.push([
        Math.random() * 30 - 15,    // Wider spread on x-axis
        Math.random() * 15 + 5,     // Higher floating position
        Math.random() * 15 - 7.5    // Deeper z-position
      ]);
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    coinsRef.current.children.forEach((coin, i) => {
      // More pronounced floating animation
      coin.position.y = coinPositions[i][1] + Math.sin(time * 0.5 + i) * 1.5;
      // Continuous rotation
      coin.rotation.y = time * 0.5 + i;
      // Add slight wobble
      coin.rotation.x = Math.sin(time * 0.3 + i) * 0.2;
      
      // More responsive mouse interaction
      if (mousePos.x && mousePos.y) {
        coin.rotation.x += (mousePos.y - 0.5) * 0.02;
        coin.rotation.z += (mousePos.x - 0.5) * 0.02;
        // Add slight position shift based on mouse
        coin.position.x += (mousePos.x - 0.5) * 0.01;
        coin.position.z += (mousePos.y - 0.5) * 0.01;
      }
    });
  });

  return (
    <group ref={coinsRef}>
      {coinPositions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Main coin body */}
          <mesh>
            <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
            <meshStandardMaterial
              color="#00f5a0"
              emissive="#00f5a0"
              emissiveIntensity={2}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Outer glow ring */}
          <mesh scale={[1.3, 1, 1.3]}>
            <torusGeometry args={[1.2, 0.1, 16, 32]} />
            <meshStandardMaterial
              color="#00fff2"
              emissive="#00fff2"
              emissiveIntensity={4}
              transparent
              opacity={0.7}
            />
          </mesh>
          
          {/* Inner details */}
          <mesh position={[0, 0.11, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.01, 6]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00f5a0"
              emissiveIntensity={3}
              metalness={1}
              roughness={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const ParticleSystem = () => {
  const particlesRef = useRef();
  const mousePos = useMousePosition();

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = Math.random() * 40 - 20;
      positions[i + 1] = Math.random() * 40 - 20;
      positions[i + 2] = Math.random() * 40 - 20;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + i) * 0.01;
      
      if (mousePos.x && mousePos.y) {
        positions[i] += (mousePos.x - 0.5) * 0.01;
        positions[i + 2] += (mousePos.y - 0.5) * 0.01;
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f5a0"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CyberBackground = () => {
  return (
    <div className="cyber-background">
      <Canvas
        camera={{ position: [0, 5, 15], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0a0b1c']} />
        <fog attach="fog" args={['#0a0b1c', 5, 30]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <NeonGrid />
        <CyberCoins />
        <ParticleSystem />
        
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default CyberBackground; 