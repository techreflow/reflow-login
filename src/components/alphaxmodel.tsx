import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

const Alphaxmodel: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>

      <Scene modelUrl="/compressed.glb" />
    </div>
  );
};

export default Alphaxmodel;
