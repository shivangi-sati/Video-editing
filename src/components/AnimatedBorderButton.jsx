'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export function AnimatedBorderButton({ children, onClick, className, ...props }) {
  return (
    <motion.div
      className={clsx('p-[2px] rounded-md', className)}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '200% 50%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 4,
        ease: 'linear',
      }}
      style={{
        backgroundImage:
          'linear-gradient(270deg, #ff3cac, #784ba0, #2b86c5, #00c9ff, #92fe9d, #fcb045, #fd1d1d)',
        backgroundSize: '400% 400%',
      }}
    >
      <button
        onClick={onClick}
        {...props}
        className="w-full h-full px-4 py-2 bg-black text-white font-medium rounded-md flex items-center justify-center gap-2"
      >
        {children}
      </button>
    </motion.div>
  );
}
