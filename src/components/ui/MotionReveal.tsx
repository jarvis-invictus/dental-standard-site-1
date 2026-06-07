'use client';

import type { Variants } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type MotionRevealProps = {
  children: ReactNode;
  animation?:
    | 'fade-up'
    | 'fade-in'
    | 'slide-in-right'
    | 'slide-in-left'
    | 'scale-up';
  delay?: number;
  duration?: number;
  className?: string;
};

export const MotionReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
}: MotionRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  let startX = 0;
  if (animation === 'slide-in-right') {
    startX = 50;
  } else if (animation === 'slide-in-left') {
    startX = -50;
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === 'fade-up' ? 30 : 0,
      x: startX,
      scale: animation === 'scale-up' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
