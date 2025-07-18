import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Clock,
  Globe2,
  Bell,
  Settings,
  RefreshCw,
  ShieldCheck,
  Palette,
  Layers,
} from "lucide-react";
import MicroFeatureCard from "./MicroFeatureCard";
import { useFacebookPixel } from "../hooks/useFacebookPixel";

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { trackSectionView } = useFacebookPixel();

  useEffect(() => {
    if (inView) {
      trackSectionView("Features Section");
    }
  }, [inView, trackSectionView]);

  const features = [
    {
      icon: Clock,
      title: "One-Click Timer",
      description:
        "Set a reminder for how long you want to browse (1–30 minutes).",
    },
    {
      icon: Globe2,
      title: "Site-Wide Timers",
      description:
        'The timer applies to all tabs for the same site, so you can\'t "cheat" by opening a new tab.',
    },
    {
      icon: Bell,
      title: "Gentle Popups",
      description: "Friendly, non-intrusive reminders help you stay on track.",
    },
    {
      icon: Settings,
      title: "Customizable",
      description:
        "Choose your timer duration and easily extend or cancel as needed.",
    },
    {
      icon: RefreshCw,
      title: "Works Across Tabs",
      description:
        "Timer continues even if you refresh or open new pages on the same site.",
    },
    {
      icon: ShieldCheck,
      title: "No Data Collected",
      description:
        "Your browsing data stays private—Intent never tracks what you do.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description:
        "Clean, modern popups and timers that blend into your browsing experience.",
    },
    {
      icon: Layers,
      title: "Supports Major Sites",
      description:
        "Works on Instagram, X (Twitter), Facebook, Reddit, LinkedIn, YouTube, and more.",
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
    <section id="features" className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to browse mindfully, without any unnecessary
            complexity
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <MicroFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
