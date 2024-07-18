// components/Model.tsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

export default Model;

// Ensure to add the following line if you encounter any GLTF typescript issues
// useGLTF.preload("/path/to/your/model.glb");
