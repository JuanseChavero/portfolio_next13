'use client';

import { motion } from 'framer-motion';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import WorkExperience, { experiences } from '../../components/WorkExperience';
import { containerVariant, itemVariant } from '../../utils/motion';

export default function About() {
  return (
    <PageWrapper>
      <div className="container flex max-w-5xl flex-col overflow-y-hidden md:text-justify">
        <motion.div
          className="overflow-y-visible text-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <Heading title="Introduction" variants={itemVariant} />
          <div className="space-y-4 text-lg">
            <motion.p variants={itemVariant}>
              Hi, my name is{' '}
              <span className="text-secondary">Juan Segundo Chavero</span> and I
              am a <span className="text-secondary">full-stack developer</span>{' '}
              and <span className="text-secondary">systems analyst</span> based
              in Argentina. I have had a lifelong interest in computers and
              software. My career in Systems Analysis deepened my understanding
              of the software development process. Additionally, I have
              developed my skills through self-study, familiarizing myself with
              general programming skills, various languages and frameworks.
            </motion.p>
            <motion.p variants={itemVariant}>
              As of today, I&apos;m lucky to say that I have experience working
              on projects that required technical proficiency and
              problem-solving, developing and maintaining large-scale software
              systems.
            </motion.p>
          </div>
          <motion.div className="mt-2 flex flex-col items-center justify-center text-center">
            <Heading
              title="My professional experience"
              titleSize="small"
              titleAlignment="center"
              variants={itemVariant}
            />
            <div className="my-1" />
            <WorkExperience experiences={experiences} variants={itemVariant} />
          </motion.div>
          <motion.div
            className="mt-3 flex w-full justify-end"
            variants={itemVariant}
          >
            <NextArrow content="Check out my skills" href="/skills" />
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
