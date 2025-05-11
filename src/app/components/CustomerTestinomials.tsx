// Customer Testimonials
'use client';
import { motion } from 'framer-motion';

// Sample data
const testimonials = [
  {
    name: 'Sarah Patel',
    role: 'IT Manager',
    company: 'TechNova Inc.',
    quote:
      'SoftSell helped us quickly offload unused licenses and recover value we thought was lost. Highly recommend their seamless process!'
  },
  {
    name: 'James Liu',
    role: 'Procurement Lead',
    company: 'GlobalSoft Solutions',
    quote:
      'The experience was smooth and professional. We received a fair valuation and got paid fast. Great service!'
  }
];

export default function CustomerTestimonials() {
  return (
    <section className="py-24 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/*Animate each testimonial card as it enters the viewport*/}
        {testimonials.map((t, idx) => ( 
          <motion.div
            // Fade and slide in testimonial on scroll
            key={idx}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{t.quote}”</p>
            <div className="font-semibold text-indigo-600">{t.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t.role}, {t.company}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}