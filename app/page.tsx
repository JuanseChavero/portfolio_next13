'use client';

import { m } from 'framer-motion';
import NextArrow from '../components/NextArrow';
import PageWrapper from '../components/PageWrapper';
import my from '../data/personal';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      <m.div
        className="container flex max-w-5xl flex-col tracking-wider"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <m.span className="text-2xl text-gray-400" variants={item}>
            Hello there!
          </m.span>{' '}
          <m.span className="text-2xl text-gray-400" variants={item}>
            My name is
          </m.span>
        </div>
        <m.h1
          className="mt-2 mb-4 break-normal font-header text-5xl font-bold text-primary transition-[letter-spacing,font-size,line-height] duration-700 hover:tracking-widest sm:text-7xl"
          variants={nameVariant}
        >
          {my.name}.
        </m.h1>
        <m.h2
          className="mb-5 text-3xl tracking-tight text-slate-400 drop-shadow-md sm:text-5xl"
          variants={item}
        >
          Crafting elegant solutions for complex problems, one line of code at a
          time.
        </m.h2>
        <m.div className="max-w-3xl" variants={item}>
          <p className="text-xl sm:text-2xl">
            I&apos;m a Full-stack developer skilled in creating user-centered
            software, with a focus on elegant front-end design.
          </p>
        </m.div>
        <m.p className="mt-4 text-xl text-gray-400 sm:text-2xl" variants={item}>
          Let&apos;s create something great together!
        </m.p>
        <m.div
          className="mt-6 flex w-full flex-col items-end justify-end"
          variants={item}
        >
          <NextArrow content="More about me" href="/about" />
        </m.div>
      </m.div>
    </PageWrapper>
  );
}
