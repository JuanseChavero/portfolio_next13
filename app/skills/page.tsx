'use client';

import { motion } from 'framer-motion';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import SkillCard, { skills } from '../../components/SkillCard';
import { containerVariant, itemVariant } from '../../utils/motion';

export default function Skills() {
  return (
    <PageWrapper>
      <motion.div
        className="container flex flex-col max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Skills" variants={itemVariant} titleAlignment="left" />
        <div className="space-y-4 text-xl">
          <motion.p variants={itemVariant}>
            Here are a few technologies that I&apos;ve been learning and using
            in the recent years.
          </motion.p>
        </div>
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
