import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFollowPointer } from '../hooks/useFollowPointer';

export default function PointerFollower() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="fixed hidden w-32 h-32 rounded-full -z-10 bg-slate-50 dark:bg-black md:block"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}
