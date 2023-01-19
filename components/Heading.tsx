import { motion, Variants } from 'framer-motion';
import { textContainer } from '../utils/motion';

interface HeadingProps {
  title: string;
  variants: Variants;
  titleAlignment?: 'left' | 'center' | 'right';
  divider?: boolean;
  titleSize?: 'normal' | 'small';
}

function HeadingDivider() {
  return <hr className="w-full h-px border-none bg-primary" />;
}

export default function Heading({
  title,
  variants,
  titleAlignment = 'left',
  titleSize = 'normal',
  divider = true,
}: HeadingProps) {
  const titleIsOnLeft = titleAlignment === 'left';
  const titleIsOnRight = titleAlignment === 'right';
  const titleIsOnCenter = titleAlignment === 'center';

  return (
    <motion.div className="flex items-center w-full gap-4" variants={variants}>
      {divider && (titleIsOnCenter || titleIsOnRight) ? (
        <HeadingDivider />
      ) : null}
      <motion.h2
        variants={textContainer}
        className={`my-4 font-header ${
          titleSize === 'normal' ? 'text-4xl' : 'text-3xl'
        } font-bold tracking-wider text-primary sm:whitespace-nowrap`}
      >
        {title}
      </motion.h2>
      {divider && (titleIsOnCenter || titleIsOnLeft) ? (
        <HeadingDivider />
      ) : null}
    </motion.div>
  );
}
