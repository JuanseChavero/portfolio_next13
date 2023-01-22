import { ReactElement } from 'react';
import { FaGithub, FaLinkedinIn, FaPortrait } from 'react-icons/fa';
import my from './personal';

export type SocialMediaIcon = {
  icon: ReactElement;
  title: string;
  href: string;
  tooltipSide?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
};

const socialMediaButtonStyle =
  'h-7 w-7 fill-gray-500 dark:fill-gray-400 transition-colors hocus:fill-primary dark:hocus:fill-primary outline-none';

export const socialMedia: SocialMediaIcon[] = [
  {
    icon: <FaLinkedinIn tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'LinkedIn',
    href: my.linkedin,
  },
  {
    icon: <FaGithub tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'Github',
    href: my.github,
  },
  {
    icon: <FaPortrait tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'Resume',
    href: my.resume,
  },
];
