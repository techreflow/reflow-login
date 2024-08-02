"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Alphaxmodel from "../alphaxmodel";

const ProductImageSwitcher: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full lg:w-[40%] h-full flex items-center justify-center bg-contain overflow-hidden">
      {isLargeScreen ? (
        <Alphaxmodel />
      ) : (
        <Image 
          src="/ALPHAX.png" 
          alt="Product Image" 
          width={500} 
          height={500} 
          className="object-cover"
        />
      )}
    </div>
  );
};

export default ProductImageSwitcher;
