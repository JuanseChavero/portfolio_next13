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
  content?: string;
  type?: 'frontend' | 'backend' | 'database' | 'framework' | 'language';
}

const iconStyle = 'h-20 w-20';

export const skills: Skill[] = [
  {
    title: 'React',
    image: <SiReact className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'frontend',
  },
  {
    title: 'Node.JS',
    image: <SiNodedotjs className={iconStyle} />,
    content: 'I used flutter because I like flutter',
  },
  {
    title: 'Express',
    image: <SiExpress className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'backend',
  },
  {
    title: 'MongoDB',
    image: <SiMongodb className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'database',
  },
  {
    title: 'Flutter',
    image: <SiFlutter className={`${iconStyle} -ml-1`} />,
    content: 'I used flutter because I like flutter and therer ererer ererere',
    type: 'framework',
  },
  {
    title: 'Dart',
    image: <SiDart className={iconStyle} />,
    content: 'I used flutter because I like flutter and therer ererer ererere',
    type: 'framework',
  },
  {
    title: 'Next.JS',
    image: <SiNextdotjs className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'framework',
  },

  {
    title: 'GraphQL',
    image: <SiGraphql className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'backend',
  },

  {
    title: 'Javascript',
    image: <SiJavascript className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'language',
  },
  {
    title: 'Typescript',
    image: <SiTypescript className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'language',
  },
  {
    title: 'React Native',
    image: <SiReact className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'frontend',
  },
  {
    title: 'MySQL',
    image: <SiMysql className={iconStyle} />,
    content: 'I used flutter because I like flutter',
    type: 'database',
  },
];

export default function SkillCard({ title, image, content }: Skill) {
  // SkillCard with content
  // return (
  //   <div className="relative h-full p-4 bg-black border rounded shadow-md border-primary">
  //     <div className="flex items-center gap-1">
  //       <div className="object-contain w-10 h-10 p-1 bg-black rounded shadow-lg ">
  //         <Image
  //           width={0}
  //           height={0}
  //           src={`/images/logos/${image}`}
  //           alt={title}
  //           className="w-full h-full"
  //         />
  //       </div>
  //       <h5 className="text-lg font-medium">{title}</h5>
  //     </div>
  //     <div className="flex flex-col gap-1">
  //       <p className="text-sm text-gray-400">{content}</p>
  //     </div>
  //   </div>
  // );

  // SkillCard with only image
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full gap-6 p-6 text-center border rounded shadow-md cursor-default border-primary bg-neutral-50 dark:bg-neutral-900"
      whileHover={{ scale: 1.05, zIndex: 30 }}
    >
      <div className="mt-2">{image}</div>
      <span className="text-base text-gray-500 uppercase dark:text-gray-400">
        {title}
      </span>
    </motion.div>
  );

  // return (
  //   <div className="relative flex items-center justify-between flex-1 gap-4 px-4 py-3 border rounded border-primary">
  //     <h5>{title}</h5>
  //     <div className="p-2 border rounded border-primary">{image}</div>
  //   </div>
  // );
}
