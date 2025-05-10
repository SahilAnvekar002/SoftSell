'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br bg-white text-black dark:from-gray-900 dark:to-gray-900 dark:text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sell Your Unused Software Licenses
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get fast, fair valuations and turn your unused software into real cash—quickly and securely.
      </motion.p>
      <motion.a
        href="#contact"
        className="dark:bg-white bg-gray-800 text-white dark:text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-transparent dark:hover:text-white hover:text-gray-800 border dark:border-white transition"
        
      >
        Sell My Licenses
      </motion.a>
    </section>
  );
}