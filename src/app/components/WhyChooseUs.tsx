// Why Choose Us
'use client';
import { FaShieldAlt, FaClock, FaHandshake, FaChartLine } from 'react-icons/fa';

// Sample data
const points = [
  {
    icon: <FaShieldAlt size={36} className="text-indigo-500" />,
    title: 'Secure Transactions',
    description: 'We use encrypted channels to protect your data and licenses.'
  },
  {
    icon: <FaClock size={36} className="text-indigo-500" />,
    title: 'Quick Turnaround',
    description: 'Receive your valuation and payout faster than ever.'
  },
  {
    icon: <FaHandshake size={36} className="text-indigo-500" />,
    title: 'Trusted By Clients',
    description: 'Hundreds of companies trust SoftSell to resell their unused licenses.'
  },
  {
    icon: <FaChartLine size={36} className="text-indigo-500" />,
    title: 'Best Market Rates',
    description: 'We ensure competitive pricing based on current software market trends.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900" id='why-choose-us'>
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Loop through each point and display the card */}
        {points.map((point, idx) => (
          <div key={idx} className="text-center p-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800">
            <div className="mb-4 flex justify-center">{point.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}