// Theme Toggle Button
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // Status to check dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set mode on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Apply saved theme to the page
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Handle toggle mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md text-white px-2 py-1 mt-1 dark:bg-gray-900 bg-white border-black dark:border-white border">
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}