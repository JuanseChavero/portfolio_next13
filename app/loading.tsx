'use client';

import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div className="flex min-h-[calc(100vh-128px-72px)] flex-col items-center justify-center text-center">
      <ArrowPathIcon className="w-24 h-24 animate-spin" />
    </motion.div>
  );
}
