'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What types of software licenses can I sell?',
    answer: 'You can sell a wide range of licenses including office suites, antivirus programs, design software, and more.'
  },
  {
    question: 'How long does the valuation process take?',
    answer: 'Most valuations are completed within 24-48 hours.'
  },
  {
    question: 'Is it legal to resell software licenses?',
    answer: 'Yes, reselling unused software licenses is legal in many regions. We ensure compliance with applicable laws.'
  },
  {
    question: 'How will I receive payment?',
    answer: 'Payments are made through your preferred method such as PayPal or bank transfer.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800" id='faq'>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
              >
                <h3 className="font-semibold text-indigo-600">{faq.question}</h3>
              </button>
              {openIndex === idx && (
                <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}