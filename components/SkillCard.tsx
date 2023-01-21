import { motion } from 'framer-motion';
import { Skill } from '../data/skills';

export default function SkillCard({ title, icon }: Skill) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full gap-6 p-6 text-center border rounded shadow-md cursor-default border-primary bg-neutral-50 dark:bg-neutral-900"
      whileHover={{ scale: 1.05, zIndex: 30 }}
    >
      <div className="mt-2">{icon}</div>
      <span className="text-base text-gray-500 uppercase dark:text-gray-400">
        {title}
      </span>
    </motion.div>
  );
}
