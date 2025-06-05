import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MicroFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const MicroFeatureCard: React.FC<MicroFeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <motion.div 
        className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
        whileHover={{ rotate: 5 }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      
      <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default MicroFeatureCard;