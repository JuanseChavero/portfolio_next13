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
    <div className="flex flex-1 flex-col items-center justify-center rounded border p-6 shadow-inner">
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
      <div className="container flex max-w-5xl flex-col overflow-y-hidden">
        <motion.div
          className="overflow-y-visible"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <Heading
            title="Skills"
            variants={itemVariant}
            titleAlignment="left"
          />
          <div className="space-y-4 text-xl">
            <motion.p variants={itemVariant}>
              Here are a few technologies that I&apos;ve been learning and using
              in the recent years.
            </motion.p>
          </div>
          <div className="mt-6 w-full">
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
            className="mt-8 flex w-full justify-end"
            variants={itemVariant}
          >
            <NextArrow content="My projects" href="/projects" />
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
