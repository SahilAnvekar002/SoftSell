'use client';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black py-4 shadow-md fixed w-full top-0 left-0 z-10 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-widest">SoftSell</Link>
        
        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>

        {/* Navigation Links for large screens */}
        <ul className={`lg:flex space-x-8 hidden`}>
          <li>
            <Link href="#how-it-works" className="block py-2 px-4 text-center border-b dark:border-b-gray-900 border-b-white hover:border-b-black dark:hover:border-b-white transition">How It Works</Link>
          </li>
          <li>
            <Link href="#why-choose-us" className="block py-2 px-4 text-center border-b dark:border-b-gray-900 border-b-white hover:border-b-black dark:hover:border-b-white transition">Why Choose Us</Link>
          </li>
          <li>
            <Link href="#contact" className="block py-2 px-4 text-center border-b dark:border-b-gray-900 border-b-white hover:border-b-black dark:hover:border-b-white transition">Contact</Link>
          </li>
          <li>
            <Link href="#faq" className="block py-2 px-4 text-center border-b dark:border-b-gray-900 border-b-white hover:border-b-black dark:hover:border-b-white transition">FAQs</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`lg:hidden space-y-4 transition-all duration-300 ease-in-out transform lg:static absolute top-full left-0 w-full bg-indigo-600 lg:bg-transparent lg:opacity-100 opacity-0 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}
      >
        <li>
          <Link href="#how-it-works" className="block py-2 px-4 text-center hover:bg-indigo-700 transition">How It Works</Link>
        </li>
        <li>
          <Link href="#why-choose-us" className="block py-2 px-4 text-center hover:bg-indigo-700 transition">Why Choose Us</Link>
        </li>
        <li>
          <Link href="#contact" className="block py-2 px-4 text-center hover:bg-indigo-700 transition">Contact</Link>
        </li>
        <li>
          <Link href="#faq" className="block py-2 px-4 text-center hover:bg-indigo-700 transition">FAQs</Link>
        </li>
        <li>
            <ThemeToggle />
          </li>
      </ul>
    </nav>
  );
}
