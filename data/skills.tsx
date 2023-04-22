import { ReactElement } from 'react';
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
  SiCypress,
  SiBootstrap,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiMaterialdesign,
} from 'react-icons/si';

export type Skill = {
  title: string;
  icon: ReactElement;
  type?: 'web' | 'mobile' | 'backend' | 'tool' | 'testing';
};

const iconStyle = 'w-20 h-20 transition-colors duration-500';

export const skills: Skill[] = [
  {
    title: 'React',
    icon: <SiReact className={`${iconStyle} group-hover:fill-sky-500`} />,
    type: 'web',
  },
  {
    title: 'Node.JS',
    icon: <SiNodedotjs className={`${iconStyle} group-hover:fill-lime-500`} />,
    type: 'backend',
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb className={`${iconStyle} group-hover:fill-lime-600`} />,
    type: 'backend',
  },
  {
    title: 'Flutter',
    icon: <SiFlutter className={`${iconStyle} group-hover:fill-sky-500`} />,
    type: 'mobile',
  },
  {
    title: 'Next.JS',
    icon: <SiNextdotjs className={iconStyle} />,
    type: 'web',
  },
  {
    title: 'GraphQL',
    icon: <SiGraphql className={`${iconStyle} group-hover:fill-pink-500`} />,
    type: 'backend',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript className={`${iconStyle} group-hover:fill-sky-600`} />,
  },
  {
    title: 'React Native',
    icon: <SiReact className={`${iconStyle} group-hover:fill-cyan-500`} />,
    type: 'mobile',
  },
  {
    title: 'MySQL',
    icon: <SiMysql className={`${iconStyle} group-hover:fill-cyan-700`} />,
    type: 'backend',
  },
  {
    title: 'Cypress',
    icon: <SiCypress className={`${iconStyle}`} />,
    type: 'testing',
  },
  {
    title: 'Jest',
    icon: <SiJest className={`${iconStyle} group-hover:fill-red-500`} />,
    type: 'testing',
  },
  {
    title: 'Redux',
    icon: <SiRedux className={`${iconStyle} group-hover:fill-purple-600`} />,
    type: 'web',
  },
];
