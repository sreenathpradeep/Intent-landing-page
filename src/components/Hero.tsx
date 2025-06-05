import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Clock } from 'lucide-react';
import DownloadButton from './DownloadButton';
import BrowserMockup from './BrowserMockup';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center mb-6 bg-primary-50 px-4 py-2 rounded-full">
              <Timer className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-primary-700 font-medium">Mindful Browsing Extension</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Take Control of Your 
              <span className="text-primary-600"> Social Media Time</span>
            </h1>
            
            <p className="text-lg text-neutral-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Intent helps you use social media more intentionally, so you can enjoy your favorite sites without losing track of time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <DownloadButton size="large" />
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center text-neutral-700 hover:text-primary-600 transition-colors"
              >
                <Clock className="h-5 w-5 mr-2" />
                <span>See how it works</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;