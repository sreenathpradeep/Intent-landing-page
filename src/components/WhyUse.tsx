import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Focus, 
  Clock, 
  HeartHandshake, 
  BellRing, 
  LayoutDashboard 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhyUse: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const features = [
    {
      icon: Focus,
      title: 'Stay Focused',
      description: 'Avoid endless scrolling and mindless browsing with gentle reminders.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Set timers for your social media sessions and get reminded when your time is up.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: HeartHandshake,
      title: 'Break Bad Habits',
      description: 'Build healthier online routines by making every visit intentional.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: BellRing,
      title: 'Reduce Distraction',
      description: 'Intent helps you pause and ask, "Did I come here on purpose?"',
      color: 'bg-rose-50 text-rose-600',
    },
    {
      icon: LayoutDashboard,
      title: 'Feel in Control',
      description: 'No more guilt or wasted hours—use social media on your terms.',
      color: 'bg-purple-50 text-purple-600',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  return (
    <section id="why-use" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Why Use Intent?
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Intent helps you build a healthier relationship with social media
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUse;