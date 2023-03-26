'use client';

import { m } from 'framer-motion';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import SkillCard from '../../components/SkillCard';
import { skills } from '../../data/skills';
import { containerVariant, itemVariant } from '../../utils/motion';

export default function Skills() {
  return (
    <PageWrapper>
      <m.div
        className="container flex max-w-5xl flex-col"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Skills" variants={itemVariant} titleAlignment="left" />
        <div className="space-y-4 text-xl">
          <m.p variants={itemVariant}>
            Here are a few technologies that I&apos;ve been learning and using
            in the recent years.
          </m.p>
        </div>
        <div className="mt-6 w-full">
          <m.div
            className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6"
            variants={itemVariant}
          >
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </m.div>
        </div>
        <m.div className="mt-8 flex w-full justify-end" variants={itemVariant}>
          <NextArrow content="My projects" href="/projects" />
        </m.div>
      </m.div>
    </PageWrapper>
  );
}
