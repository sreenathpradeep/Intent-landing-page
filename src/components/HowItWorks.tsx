import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Chrome, 
  Clock, 
  Eye, 
  Bell, 
  CheckCircle
} from 'lucide-react';
import StepCard from './StepCard';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const steps = [
    {
      icon: Chrome,
      title: 'Visit a Social Media Site',
      description: 'When you open Instagram, X (Twitter), Facebook, Reddit, or other supported sites, Intent gently asks if you meant to visit.',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Clock,
      title: 'Set Your Intention',
      description: 'Choose to set a timer (1–30 minutes) for your session, or close the tab if you didn\'t mean to visit.',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Eye,
      title: 'Browse Mindfully',
      description: 'While you browse, a small, friendly timer appears on the page, reminding you of your chosen limit.',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: Bell,
      title: 'Get a Gentle Reminder',
      description: 'When your time is up, Intent pops up and asks if you want to extend your session or close the tab.',
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
    {
      icon: CheckCircle,
      title: 'Stay in Control',
      description: 'You can always cancel the timer, extend your time, or close the tab at any point.',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];
  
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Intent is designed to be simple, unobtrusive, and effective
          </motion.p>
        </div>
        
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-primary-100 hidden md:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                iconBg={step.iconBg}
                iconColor={step.iconColor}
                index={index + 1}
                isInView={inView}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;