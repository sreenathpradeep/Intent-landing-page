import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  size: 'small' | 'large' | 'full';
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ size }) => {
  const buttonSizeClasses = {
    small: 'py-2 px-3 text-sm',
    large: 'py-3 px-6 text-base',
    full: 'py-3 px-6 text-base w-full',
  };
  
  const handleDownload = () => {
    // For demo purposes - this would link to the Chrome Web Store
    window.open('https://chrome.google.com/webstore', '_blank');
  };
  
  return (
    <motion.button
      className={`${buttonSizeClasses[size]} bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-sm inline-flex items-center justify-center transition-colors`}
      onClick={handleDownload}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Download className={`${size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />
      <span>Download Intent</span>
    </motion.button>
  );
};

export default DownloadButton;