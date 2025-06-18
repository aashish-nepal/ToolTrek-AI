import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonial = ({ 
  testimonial, 
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white text-gray-900 shadow-lg',
    dark: 'bg-gray-900 text-white shadow-xl',
    premium: 'bg-gradient-to-br from-indigo-900 to-purple-900 text-white shadow-2xl'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`rounded-2xl p-6 ${variants[variant]} ${className} relative overflow-hidden`}
    >
      {/* Decorative elements */}
      {variant === 'premium' && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-purple-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 -ml-16 -mb-16 bg-indigo-600 rounded-full opacity-20"></div>
        </>
      )}
      
      {/* Quote icon */}
      <div className={`absolute top-6 right-6 text-6xl font-serif italic opacity-10 ${variant === 'premium' ? 'text-white' : 'text-gray-400'}`}>
        "
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm opacity-80">{testimonial.title}</p>
          </div>
        </div>
        
        <blockquote className="mb-6 italic text-lg">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={starVariants}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600 fill-current'}`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
          <span className="ml-2 text-sm opacity-80">
            Verified User
          </span>
        </div>
      </div>
      
      {/* Company logo (optional) */}
      {testimonial.companyLogo && (
        <div className="mt-6 pt-6 border-t border-opacity-20 border-gray-400">
          <Image
            src={testimonial.companyLogo}
            alt={`${testimonial.name}'s company`}
            width={100}
            height={40}
            objectFit="contain"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Testimonial;