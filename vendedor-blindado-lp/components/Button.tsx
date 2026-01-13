import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, fullWidth = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        bg-gradient-to-r from-primary-600 to-primary-500 
        hover:from-primary-500 hover:to-primary-400
        text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary-900/50
        border-t border-primary-400
        transition-all duration-300
        uppercase tracking-wide
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;