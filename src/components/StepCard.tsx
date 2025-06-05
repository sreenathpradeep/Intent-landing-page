import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  index,
  isInView,
  delay,
}) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 flex-1">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 rounded-full w-6 h-6 flex items-center justify-center mr-3">
            {index}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        </div>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default StepCard;
