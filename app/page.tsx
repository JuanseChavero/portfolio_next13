'use client';

import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NextArrow from '../components/NextArrow';
import PageWrapper from '../components/PageWrapper';
import Tooltip from '../components/Tooltip';

export default function Home() {
  const name = 'Juan Segundo Chavero.';
  // const profession ='Crafting pixel-perfect websites, one line of code at a time.';

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
        delay: 1,
        x: {
          type: 'spring',
          bounce: 0,
        },
      },
    },
  };

  return (
    <PageWrapper>
      <motion.div className="container flex max-w-5xl flex-col items-center px-5">
        <motion.div
          className="cursor-default p-6 tracking-wider lg:ml-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="text-2xl text-gray-400" variants={item}>
            Hello there!
          </motion.span>{' '}
          <motion.span className="text-2xl text-gray-400" variants={item}>
            My name is
          </motion.span>
          <motion.h1
            className="group relative mt-2 mb-4 font-header text-7xl font-bold text-orange transition-[letter-spacing] duration-700 hover:tracking-widest"
            variants={nameVariant}
          >
            {name}
          </motion.h1>
          <motion.h2
            className="mb-5 text-5xl tracking-tight text-slate-400 drop-shadow-md"
            variants={item}
          >
            {profession}
          </motion.h2>
          <motion.div className="max-w-3xl" variants={item}>
            <p className="text-2xl">
              I&apos;m a Full-stack developer skilled in creating user-centered
              software, with a focus on elegant front-end design.
            </p>
          </motion.div>
          <br />
          <motion.p className="text-2xl" variants={item}>
            Let&apos;s create something great together!
          </motion.p>
          <motion.div
            className="mt-6 flex w-full flex-col items-end justify-end"
            variants={item}
          >
            <NextArrow content="Learn more" href="/about" />
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
