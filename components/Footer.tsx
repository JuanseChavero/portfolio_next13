import { m } from 'framer-motion';
import { SocialMediaIcon } from '@/components/SocialMedia';
import { my } from '@/data/personal';
import { socialMedia } from '@/data/socialMedia';
import { hrVariant } from '@/utils/motion';
import AnimatedLine from '@/components/AnimatedLine';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lineVariant = hrVariant({ duration: 4 });

  const nameVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <footer className="flex flex-col items-center px-4 pt-4 pb-3 mt-auto md:pt-0">
      <div className="flex items-center justify-center w-full gap-4 text-center">
        <AnimatedLine className="ml-auto" variant={lineVariant} />
        <m.div
          className="flex flex-col gap-1"
          initial="hidden"
          animate="visible"
          variants={nameVariant}
        >
          <m.span
            className="text-xs text-gray-500 dark:text-gray-400"
            variants={nameVariant}
          >
            Design by
          </m.span>
          <m.span
            className="font-semibold text-md whitespace-nowrap"
            variants={nameVariant}
          >
            {my.name}
          </m.span>
          <m.span
            className="text-sm text-gray-500 dark:text-gray-400"
            variants={nameVariant}
          >
            &copy; {currentYear}
          </m.span>
        </m.div>
        <AnimatedLine className="mr-auto" variant={lineVariant} />
      </div>
      {/* Social Media */}
      <m.div
        className="flex items-center justify-center w-full gap-6 my-4 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ scale: { duration: 0.75 } }}
      >
        {socialMedia.map((media) => (
          <SocialMediaIcon
            key={media.title}
            tooltipSide="top"
            sideOffset={15}
            {...media}
          />
        ))}
      </m.div>
    </footer>
  );
}
