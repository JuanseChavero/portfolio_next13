import { motion } from 'framer-motion';
import { socialMedia, SocialMediaIcon } from '../data/socialMedia';
import Tooltip from './Tooltip';

export function SocialMediaIcon({
  icon,
  title,
  href,
  tooltipSide = 'right',
  sideOffset = 10,
}: SocialMediaIcon) {
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
