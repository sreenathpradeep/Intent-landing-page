import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadButton from './DownloadButton';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500;
      
      setIsVisible(scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white z-40 rounded-full shadow-lg py-3 px-4 border border-neutral-200"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <DownloadButton size="small" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;