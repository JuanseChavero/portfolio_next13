import { motion } from 'framer-motion';
import { socialMedia, SocialMediaIcon } from './SocialMedia';

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center px-4 py-6">
      <motion.div
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
      </motion.div>
      <div className="text-center">
        <span className="text-md text-gray-600 dark:text-gray-400">
          Juan Segundo Chavero &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
