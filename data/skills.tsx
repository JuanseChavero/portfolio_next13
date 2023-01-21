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
} from 'react-icons/si';

export type Skill = {
  title: string;
  icon: ReactElement;
};

const iconStyle = 'w-20 h-20';

export const skills: Skill[] = [
  {
    title: 'React',
    icon: <SiReact className={iconStyle} />,
  },
  {
    title: 'Node.JS',
    icon: <SiNodedotjs className={iconStyle} />,
  },
  {
    title: 'Express',
    icon: <SiExpress className={iconStyle} />,
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb className={iconStyle} />,
  },
  {
    title: 'Flutter',
    icon: <SiFlutter className={iconStyle} />,
  },
  {
    title: 'Dart',
    icon: <SiDart className={iconStyle} />,
  },
  {
    title: 'Next.JS',
    icon: <SiNextdotjs className={iconStyle} />,
  },

  {
    title: 'GraphQL',
    icon: <SiGraphql className={iconStyle} />,
  },

  {
    title: 'Javascript',
    icon: <SiJavascript className={iconStyle} />,
  },
  {
    title: 'Typescript',
    icon: <SiTypescript className={iconStyle} />,
  },
  {
    title: 'React Native',
    icon: <SiReact className={iconStyle} />,
  },
  {
    title: 'MySQL',
    icon: <SiMysql className={iconStyle} />,
  },
];
