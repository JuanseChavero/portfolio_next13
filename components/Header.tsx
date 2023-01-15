import { motion, Variants } from 'framer-motion';

interface HeaderProps {
  title: string;
  variants: Variants;
  titleAlignment?: 'left' | 'center' | 'right';
  divider?: boolean;
  titleSize?: 'normal' | 'small';
}

export default function Header({
  title,
  variants,
  titleAlignment = 'left',
  titleSize = 'normal',
  divider = true,
}: HeaderProps) {
  return (
    <motion.div className="flex w-full items-center gap-4" variants={variants}>
      {divider &&
      (titleAlignment === 'center' || titleAlignment === 'right') ? (
        <hr className="h-px w-full border-none bg-orange text-orange" />
      ) : null}
      <h2
        className={`my-4 font-header ${
          titleSize === 'normal' ? 'text-4xl' : 'text-3xl'
        } whitespace-nowrap font-bold tracking-wider text-orange`}
      >
        {title}
      </h2>
      {divider && (titleAlignment === 'center' || titleAlignment === 'left') ? (
        <hr className="h-px w-full border-none bg-orange text-orange" />
      ) : null}
    </motion.div>
  );
}
