import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const faqs = [
    {
      question: "Will Intent block social media?",
      answer: "No, Intent doesn't block anything. It just helps you pause, set a limit, and stay mindful.",
    },
    {
      question: "Can I use Intent on multiple sites?",
      answer: "Yes! Intent works on all major social media sites and you can use it on as many as you like.",
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. Intent never tracks your browsing or collects any personal data.",
    },
    {
      question: "Can I change or cancel the timer?",
      answer: "Yes, you can cancel or extend your timer at any time.",
    },
    {
      question: "Which browsers are supported?",
      answer: "Currently, Intent is available for Chrome and Edge browsers. Support for Firefox and Safari is coming soon.",
    },
    {
      question: "Is Intent free to use?",
      answer: "Yes, Intent is completely free to use with all features included.",
    },
  ];
  
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about using Intent
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="max-w-3xl mx-auto divide-y divide-neutral-200"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isInView={inView}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="max-w-2xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-neutral-600">
            <span className="font-medium text-primary-600">Intent</span> helps you use social media with purpose—so you can enjoy your time online, and get back to what matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;