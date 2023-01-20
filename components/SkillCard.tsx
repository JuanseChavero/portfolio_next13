import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  SiTypescript,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiDart,
} from 'react-icons/si';

interface Skill {
  title: string;
  image: ReactNode;
}

const iconStyle = 'h-20 w-20';

export const skills: Skill[] = [
  {
    title: 'React',
    image: <SiReact className={iconStyle} />,
  },
  {
    title: 'Node.JS',
    image: <SiNodedotjs className={iconStyle} />,
  },
  {
    title: 'Express',
    image: <SiExpress className={iconStyle} />,
  },
  {
    title: 'MongoDB',
    image: <SiMongodb className={iconStyle} />,
  },
  {
    title: 'Flutter',
    image: <SiFlutter className={`${iconStyle} -ml-1`} />,
  },
  {
    title: 'Dart',
    image: <SiDart className={iconStyle} />,
  },
  {
    title: 'Next.JS',
    image: <SiNextdotjs className={iconStyle} />,
  },

  {
    title: 'GraphQL',
    image: <SiGraphql className={iconStyle} />,
  },

  {
    title: 'Javascript',
    image: <SiJavascript className={iconStyle} />,
  },
  {
    title: 'Typescript',
    image: <SiTypescript className={iconStyle} />,
  },
  {
    title: 'React Native',
    image: <SiReact className={iconStyle} />,
  },
  {
    title: 'MySQL',
    image: <SiMysql className={iconStyle} />,
  },
];

export default function SkillCard({ title, image }: Skill) {
  return (
    <motion.div
      className="relative flex w-full cursor-default flex-col items-center justify-center gap-6 rounded border border-primary bg-neutral-50 p-6 text-center shadow-md dark:bg-neutral-900"
      whileHover={{ scale: 1.05, zIndex: 30 }}
    >
      <div className="mt-2">{image}</div>
      <span className="text-base uppercase text-gray-500 dark:text-gray-400">
        {title}
      </span>
    </motion.div>
  );
}
