import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { FaGithub, FaLinkedinIn, FaPortrait } from 'react-icons/fa';
import Tooltip from './Tooltip';

const socialMediaButtonStyle =
  'h-7 w-7 fill-gray-500 dark:fill-gray-400 transition-colors hocus:fill-primary dark:hocus:fill-primary outline-none';

export const socialMedia = [
  {
    icon: <FaLinkedinIn tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juan-segundo-chavero/',
  },
  {
    icon: <FaGithub tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'Github',
    href: 'https://github.com/JuanseChavero',
  },
  {
    icon: <FaPortrait tabIndex={0} className={socialMediaButtonStyle} />,
    title: 'Resume',
    href: 'https://flowcv.com/resume/7c97o4cqt1',
  },
];

interface SocialMediaIconProps {
  icon: ReactElement;
  title: string;
  href: string;
  tooltipSide?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export function SocialMediaIcon({
  icon,
  title,
  href,
  tooltipSide = 'right',
  sideOffset = 10,
}: SocialMediaIconProps) {
  return (
    <Tooltip
      content={title}
      side={tooltipSide}
      className="uppercase"
      sideOffset={sideOffset}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-label={`Link to my ${title}`}
        className={`pointer-events-auto cursor-pointer outline-none`}
      >
        {icon}
      </a>
    </Tooltip>
  );
}

export default function SocialMedia() {
  return (
    <motion.div
      className="fixed flex-col items-center justify-center hidden h-screen gap-6 left-8 md:flex xl:left-12"
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 400 }}
      transition={{
        y: { type: 'spring', bounce: 0, duration: 1.5, delay: 1.25 },
      }}
    >
      <motion.div className="h-full" />
      <motion.ul className="flex flex-col gap-6">
        {socialMedia.map((media) => (
          <motion.li
            key={media.title}
            whileHover={{ scale: 1.3 }}
            whileFocus={{ scale: 1.3 }}
          >
            <SocialMediaIcon {...media} />
          </motion.li>
        ))}
      </motion.ul>
      <motion.div className="h-40 w-[2px] rounded-full bg-primary" />
    </motion.div>
  );
}
