import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, SpotLight, useGLTF } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { Spotlight } from './ui/Spotlight';

interface GLTFResult {
  scene: Group;
}

interface SceneProps {
  modelUrl: string;
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const { scene } = useGLTF(url) as unknown as GLTFResult;
  const ref = useRef<Group>();
  const { gl, camera } = useThree();
  const initialCameraPosition = new Vector3(-1, 0, 4);

  // Zoom effect when loaded
  React.useEffect(() => {
    camera.position.copy(initialCameraPosition);
    camera.zoom = 1.5;
    camera.updateProjectionMatrix();
  }, [camera, initialCameraPosition]);

  // Animation on mouse over
  const handleMouseOver = () => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  };

  // Reset rotation on mouse out
  const handleMouseOut = () => {
    if (ref.current) {
      ref.current.rotation.y = 0;
    }
  };

  return (
    //@ts-ignore
    <group ref={ref}>
      <primitive object={scene} />
      <mesh
        onPointerOver={handleMouseOver}
        onPointerOut={handleMouseOut}
        position={[0, 0, 0]}
      />
    </group>
  );
};

const Scene: React.FC<SceneProps> = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0] }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 6, 3]}
        angle={60}
        
        intensity={500}
        color="#0CA5E9"
        castShadow
      />
      <spotLight
        position={[-5, 2, 0]}
        angle={120}
        intensity={100}
        color="#006400"
        castShadow
      />
      

<spotLight
        position={[3, 3, 0]}
        angle={-120}
        intensity={200}
        color="#006400"
        castShadow
      />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
