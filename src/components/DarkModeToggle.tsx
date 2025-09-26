import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 neumorphism rounded-2xl hover:shadow-neon transition-all duration-500 group"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
      >
        {isDark ? (
          <Sun size={24} className="text-portfolio-accent group-hover:text-portfolio-gold transition-colors duration-300" />
        ) : (
          <Moon size={24} className="text-portfolio-primary group-hover:text-portfolio-secondary transition-colors duration-300" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
    </motion.button>
  );
};

export default DarkModeToggle;