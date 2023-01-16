import { motion, Variants } from 'framer-motion';

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
  return (
    <motion.div className="flex items-center w-full gap-4" variants={variants}>
      {divider &&
      (titleAlignment === 'center' || titleAlignment === 'right') ? (
        <HeadingDivider />
      ) : null}
      <h2
        className={`my-4 font-header ${
          titleSize === 'normal' ? 'text-4xl' : 'text-3xl'
        } font-bold tracking-wider text-primary sm:whitespace-nowrap`}
      >
        {title}
      </h2>
      {divider && (titleAlignment === 'center' || titleAlignment === 'left') ? (
        <HeadingDivider />
      ) : null}
    </motion.div>
  );
}
