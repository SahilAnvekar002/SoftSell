'use client';
import { motion } from 'framer-motion';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload size={40} className="text-indigo-500" />,
    title: 'Upload License',
    description: 'Submit your unused software licenses using our secure uploader.'
  },
  {
    icon: <FaSearchDollar size={40} className="text-indigo-500" />,
    title: 'Get Valuation',
    description: 'We evaluate your licenses and send you a fair market quote.'
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-indigo-500" />,
    title: 'Get Paid',
    description: 'Accept the quote and receive payment via your preferred method.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 text-center" id='how-it-works'>
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}