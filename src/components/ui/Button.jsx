import React from 'react';
import Link from 'next/link';

const Button = ({ 
  children, 
  as = 'button', 
  href, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    'outline-white': 'border border-white text-white hover:bg-white hover:text-indigo-600',
    white: 'bg-white text-indigo-600 hover:bg-gray-100',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  if (as === 'a' && href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  const Component = as;
  
  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Button;