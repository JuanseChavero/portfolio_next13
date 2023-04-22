import { m } from 'framer-motion';
import { useRef } from 'react';
import { useFollowPointer } from 'hooks/useFollowPointer';

export default function PointerFollower() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <m.div
      ref={ref}
      className="fixed -z-10 hidden h-32 w-32 rounded-full bg-slate-50 dark:bg-black md:block"
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
