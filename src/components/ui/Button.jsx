import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  as = 'button', 
  href, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  size = 'medium',
  icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  ariaLabel,
  isSidebarCollapsed = false, // New prop to indicate sidebar state
  hideTextWhenCollapsed = false, // New prop to control text visibility
  ...props 
}) => {
  // Base classes with improved spacing and transitions
  const baseClasses = 'inline-flex items-center justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out will-change-transform';
  
  // Variant styles with better contrast ratios for accessibility
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 focus-visible:ring-indigo-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-gray-950 focus-visible:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-300 bg-transparent',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-indigo-700 focus-visible:ring-white bg-transparent',
    white: 'bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-300 shadow-md hover:shadow-lg',
    danger: 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700 focus-visible:ring-red-500 shadow-md hover:shadow-lg',
    success: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 focus-visible:ring-emerald-500 shadow-md hover:shadow-lg',
    premium: 'bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-gray-900 hover:from-amber-500 hover:via-orange-600 hover:to-pink-600 focus-visible:ring-yellow-400 shadow-lg hover:shadow-xl'
  };
  
  // Size variants - adjusted for sidebar context
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm rounded-md',
    medium: 'px-4 py-2 text-base rounded-lg', // Reduced horizontal padding for sidebar
    large: 'px-5 py-3 text-lg rounded-xl' // Reduced horizontal padding for sidebar
  };
  
  // Collapsed size variants
  const collapsedSizeClasses = {
    small: 'p-1.5 text-sm rounded-md',
    medium: 'p-2 text-base rounded-lg',
    large: 'p-3 text-lg rounded-xl'
  };
  
  // Width control - modified for sidebar context
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Disabled state
  const disabledClasses = disabled ? 'opacity-70 cursor-not-allowed' : '';
  
  // Text visibility classes
  const textClasses = hideTextWhenCollapsed && isSidebarCollapsed ? 'sr-only' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${
    isSidebarCollapsed && hideTextWhenCollapsed ? collapsedSizeClasses[size] : sizeClasses[size]
  } ${widthClass} ${disabledClasses} ${className}`;
  
  // Button content with loading state and icon support
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${hideTextWhenCollapsed && isSidebarCollapsed ? 'mx-auto' : 'mr-2 -ml-1'}`}>
          {icon}
        </span>
      )}
      {loading ? (
        <span className="inline-flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className={textClasses}>{children}</span>
        </span>
      ) : (
        <span className={textClasses}>{children}</span>
      )}
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${hideTextWhenCollapsed && isSidebarCollapsed ? 'mx-auto' : 'ml-2 -mr-1'}`}>
          {icon}
        </span>
      )}
    </>
  );

  // Motion variants for subtle interaction
  const motionVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      y: 1,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  // Link button
  if (as === 'a' && href) {
    return (
      <motion.div
        whileHover={!disabled ? "hover" : {}}
        whileTap={!disabled ? "tap" : {}}
        className={`inline-flex ${widthClass}`}
      >
        <Link
          href={href}
          className={combinedClasses}
          aria-label={isSidebarCollapsed && hideTextWhenCollapsed ? ariaLabel || children : ariaLabel}
          aria-disabled={disabled}
          {...props}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }
  
  // Regular button
  const Component = as;
  
  return (
    <motion.div
      whileHover={!disabled ? "hover" : {}}
      whileTap={!disabled ? "tap" : {}}
      className={`inline-flex ${widthClass}`}
    >
      <Component
        className={combinedClasses}
        disabled={disabled}
        aria-label={isSidebarCollapsed && hideTextWhenCollapsed ? ariaLabel || children : ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {buttonContent}
      </Component>
    </motion.div>
  );
};

export default Button;