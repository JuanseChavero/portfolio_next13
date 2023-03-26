import { m, Variants } from 'framer-motion';
import { textContainer } from '../utils/motion';

interface HeadingProps {
  title: string;
  variants: Variants;
  titleAlignment?: 'left' | 'center' | 'right';
  divider?: boolean;
  titleSize?: 'normal' | 'small';
}

function HeadingDivider() {
  return <hr className="h-px w-full border-none bg-primary" />;
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
    <m.div className="flex w-full items-center gap-4" variants={variants}>
      {divider && (titleIsOnCenter || titleIsOnRight) ? (
        <HeadingDivider />
      ) : null}
      <m.h2
        variants={textContainer}
        className={`my-4 font-header ${
          titleSize === 'normal' ? 'text-4xl' : 'text-3xl'
        } font-bold tracking-wider text-primary sm:whitespace-nowrap`}
      >
        {title}
      </m.h2>
      {divider && (titleIsOnCenter || titleIsOnLeft) ? (
        <HeadingDivider />
      ) : null}
    </m.div>
  );
}
