import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  withGlow = false,
  withPulse = false,
  icon = null
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
    outline: 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white',
    premium: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-gray-900'
  };

  const glowEffect = withGlow ? (
    <motion.span
      initial={{ opacity: 0.7, scale: 0.95 }}
      animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1, 0.95] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full blur-md"
      style={{
        background: variant === 'premium' 
          ? 'linear-gradient(90deg, rgba(250,204,21,0.6) 0%, rgba(245,158,11,0.6) 50%, rgba(249,115,22,0.6) 100%)'
          : variant === 'primary'
          ? 'linear-gradient(90deg, rgba(37,99,235,0.6) 0%, rgba(79,70,229,0.6) 100%)'
          : 'linear-gradient(90deg, rgba(217,70,239,0.6) 0%, rgba(236,72,153,0.6) 100%)'
      }}
    />
  ) : null;

  return (
    <motion.div
      whileHover={{ scale: withPulse ? 1.05 : 1 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 tracking-tight ${variants[variant]} ${className}`}
    >
      {glowEffect}
      {icon && (
        <span className="mr-1.5 flex items-center">
          {icon}
        </span>
      )}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {variant === 'premium' && (
        <span className="ml-1.5 relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm0 3v10h10V5H5z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </motion.div>
  );
};

export default Badge;