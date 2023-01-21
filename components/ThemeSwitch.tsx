import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6 border-2 rounded border-primary"></div>;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentThemeIsDark = currentTheme === 'dark';

  const switchTheme = () => {
    if (currentThemeIsDark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const item = {
    rest: {
      transform: 'rotate(360deg)',
      transition: { duration: 0.5, type: 'spring' },
    },
    tap: {
      transform: 'rotate(0deg)',
      transition: { duration: 0.25 },
    },
  };

  return (
    <motion.button
      className="flex items-center justify-center p-2 border-2 rounded outline-none cursor-pointer border-primary hover:bg-primary/20 focus-visible:border-black dark:focus-visible:border-white"
      data-is-darkmode={currentThemeIsDark}
      onClick={switchTheme}
      tabIndex={0}
      initial="rest"
      whileTap="tap"
      animate="rest"
      aria-label="Color theme toggler"
    >
      <motion.div variants={item} className="w-6 h-6">
        {!currentThemeIsDark ? (
          <SunIcon className="fill-primary stroke-primary stroke-[0.5px]" />
        ) : (
          <MoonIcon className="stroke-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}
