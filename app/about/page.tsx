'use client';

import { motion } from 'framer-motion';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import WorkExperience, { experiences } from '../../components/WorkExperience';

export default function About() {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: 'spring',
          bounce: 0,
        },
      },
    },
  };

  return (
    <PageWrapper>
      <div className="container flex flex-col max-w-5xl md:text-justify">
        <motion.div
          className="px-6 space-y-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <Heading title="Introduction" variants={item} />
          <motion.p variants={item}>
            Hi, my name is{' '}
            <span className="text-secondary">Juan Segundo Chavero</span> and I
            am a <span className="text-secondary">full-stack developer</span>{' '}
            and <span className="text-secondary">systems analyst</span> based in
            Argentina. I have had a lifelong interest in computers and software.
            My career in Systems Analysis deepened my understanding of the
            software development process. Additionally, I have developed my
            skills through self-study, familiarizing myself with general
            programming skills, various languages and frameworks.
          </motion.p>
          <motion.p variants={item}>
            As of today, I&apos;m lucky to say that I have experience working on
            projects that required technical proficiency and problem-solving,
            developing and maintaining large-scale software systems.
          </motion.p>
          <motion.div className="flex flex-col items-center justify-center mt-12 text-center">
            <Heading
              title="My professional experience"
              titleSize="small"
              titleAlignment="center"
              variants={item}
            />
            <div className="my-2" />
            <WorkExperience experiences={experiences} variants={item} />
          </motion.div>
          <motion.div className="flex justify-end w-full" variants={item}>
            <NextArrow content="Check out my skills" href="/skills" />
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
