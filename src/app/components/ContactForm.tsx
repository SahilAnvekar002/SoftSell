'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.license && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        {submitted ? (
          <p className="text-center text-green-600 dark:text-green-400">Thank you! We will be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
            />
            <select
              name="license"
              value={formData.license}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select License Type</option>
              <option value="Office Suite">Office Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design Software">Design Software</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md h-32 dark:bg-gray-800 dark:text-white"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}