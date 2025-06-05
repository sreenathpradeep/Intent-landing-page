import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BrowserMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4">
      {/* Browser chrome */}
      <div className="rounded-xl overflow-hidden shadow-2xl w-full bg-white">
        {/* Browser top bar */}
        <div className="bg-neutral-100 px-4 py-3 flex items-center border-b border-neutral-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="ml-4 flex-1 bg-white rounded-md flex items-center px-3 py-1.5 text-xs text-neutral-500">
            instagram.com
          </div>
        </div>

        {/* Browser content */}
        <div className="bg-white relative aspect-[9/16]">
          {/* Mocked social media feed background */}
          <div className="absolute inset-0 bg-neutral-50 overflow-hidden">
            {/* Simulated social media posts (gray rectangles) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="bg-neutral-300 h-1/4 mx-4 my-4 rounded-lg"></div>
              <div className="bg-neutral-300 h-1/3 mx-4 my-4 rounded-lg"></div>
              <div className="bg-neutral-300 h-1/5 mx-4 my-4 rounded-lg"></div>
            </div>

            {/* Intent popup overlay */}
            <motion.div
              className="absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[90%]"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.8,
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 text-center mb-2">
                  Did you come here on purpose?
                </h3>
                <p className="text-neutral-600 text-center text-sm mb-6">
                  Select your answer to continue browsing.
                </p>

                <div className="space-y-3">
                  <motion.button
                    className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Yes, let me browse
                  </motion.button>
                  <motion.button
                    className="w-full py-3 bg-white hover:bg-neutral-50 text-neutral-700 rounded-lg font-medium text-sm border border-neutral-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    No, close this tab
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 -bottom-6 -right-6 w-20 h-20 sm:w-32 sm:h-32 bg-primary-100 rounded-full opacity-70 blur-xl"></div>
      <div className="absolute -z-10 -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-secondary-100 rounded-full opacity-70 blur-xl"></div>
    </div>
  );
};

export default BrowserMockup;
