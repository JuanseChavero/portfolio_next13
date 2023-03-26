import { m } from 'framer-motion';
import { Skill } from '../data/skills';

export default function SkillCard({ title, icon }: Skill) {
  return (
    <m.div
      className="relative flex w-full cursor-default flex-col items-center justify-center gap-6 rounded border border-primary bg-neutral-50 p-6 text-center shadow-md dark:bg-neutral-900"
      whileHover={{
        scale: 1.05,
        zIndex: 30,
      }}
      transition={{ scale: { duration: 0.3 } }}
    >
      <div className="mt-2">{icon}</div>
      <span className="text-base uppercase text-gray-500 dark:text-gray-400">
        {title}
      </span>
    </m.div>
  );
}
