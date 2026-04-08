"use client";
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function MotionWrapper({ children, className = '' }) {
  const items = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={item} className="w-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
