'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import SkillCard, { skills } from '../../components/SkillCard';
import { containerVariant, itemVariant } from '../../utils/motion';

interface SkillSectionProps {
  title: string;
  children: ReactNode;
}

const SkillSection = ({ title, children }: SkillSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6 border rounded shadow-inner">
      {/* <div className="my-4 w-full rounded border-l-[6px] bg-primary"> */}
      <h3 className="text-2xl">{title}</h3>
      {/* </div> */}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
};

export default function Skills() {
  return (
    <PageWrapper>
      <motion.div
        className="container flex flex-col items-start max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Skills" variants={itemVariant} titleAlignment="left" />
        <motion.p className="text-xl text-justify" variants={itemVariant}>
          I have are a very particular set of skills. Skills I have acquired
          over a very long career.
        </motion.p>
        <div className="w-full mt-6">
          <motion.div
            className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6"
            variants={itemVariant}
          >
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="flex justify-end w-full mt-8"
          variants={itemVariant}
        >
          <NextArrow content="My projects" href="/projects" />
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
