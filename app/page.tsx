'use client';

import { motion } from 'framer-motion';
import NextArrow from '../components/NextArrow';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  const name = 'Juan Segundo Chavero.';
  const profession =
    'Crafting elegant solutions for complex problems, one line of code at a time.';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const nameVariant = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        x: {
          type: 'spring',
          bounce: 0,
        },
      },
    },
  };

  return (
    <PageWrapper>
      <motion.div
        className="container flex max-w-5xl flex-col tracking-wider"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.span className="text-2xl text-gray-400" variants={item}>
            Hello there!
          </motion.span>{' '}
          <motion.span className="text-2xl text-gray-400" variants={item}>
            My name is
          </motion.span>
        </div>
        <motion.h1
          className="mt-2 mb-4 break-normal font-header text-5xl font-bold text-primary transition-[letter-spacing,font-size,line-height] duration-700 hover:tracking-widest sm:text-7xl"
          variants={nameVariant}
        >
          {name}
        </motion.h1>
        <motion.h2
          className="mb-5 text-3xl tracking-tight text-slate-400 drop-shadow-md sm:text-5xl"
          variants={item}
        >
          {profession}
        </motion.h2>
        <motion.div className="max-w-3xl" variants={item}>
          <p className="text-xl sm:text-2xl">
            I&apos;m a Full-stack developer skilled in creating user-centered
            software, with a focus on elegant front-end design.
          </p>
        </motion.div>
        <motion.p
          className="mt-4 text-xl text-gray-400 sm:text-2xl"
          variants={item}
        >
          Let&apos;s create something great together!
        </motion.p>
        <motion.div
          className="mt-6 flex w-full flex-col items-end justify-end"
          variants={item}
        >
          <NextArrow content="More about me" href="/about" />
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
