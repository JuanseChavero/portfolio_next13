'use client';

import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { m } from 'framer-motion';

export default function Loading() {
  return (
    <m.div className="flex min-h-[calc(100vh-128px-72px)] flex-col items-center justify-center text-center">
      <ArrowPathIcon className="h-24 w-24 animate-spin" />
    </m.div>
  );
}
