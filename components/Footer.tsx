import { m } from 'framer-motion';
import { SocialMediaIcon } from './SocialMedia';
import { socialMedia } from '../data/socialMedia';
import my from '../data/personal';

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center px-4 py-6">
      <m.div
        className="mb-6 flex w-full items-center gap-6 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ scale: { duration: 0.75 } }}
      >
        <div className="h-[2px] w-full rounded-full bg-primary" />
        {socialMedia.map((media) => (
          <SocialMediaIcon
            key={media.title}
            tooltipSide="top"
            sideOffset={15}
            {...media}
          />
        ))}
        <div className="h-[2px] w-full rounded-full bg-primary" />
      </m.div>
      <div className="text-center">
        <span className="text-md text-gray-500 dark:text-gray-400">
          {my.name} &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
