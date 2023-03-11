'use client';

import { motion } from 'framer-motion';
import Heading from '../../components/Heading';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import { containerVariant, itemVariant } from '../../utils/motion';
import DisplayProject from '../../components/Project';
import { projects } from '../../data/projects';
import { SiGithub } from 'react-icons/si';
import ShadowButton from '../../components/ShadowButton';
import Tooltip from '../../components/Tooltip';
import my from '../../data/personal';

export default function Projects() {
  return (
    <PageWrapper>
      <motion.div
        className="container flex max-w-5xl flex-col items-start"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Projects" variants={itemVariant} />
        <motion.div
          className="mb-6 flex w-full flex-col justify-between gap-4 md:flex-row md:items-center"
          variants={itemVariant}
        >
          <p className="text-xl">
            I&apos;m currently freelancing, working on two projects. One will be
            a webpage for a travel agency. The other, a social-media LinkedIn
            style for a security company.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={my.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my github repository"
            >
              <Tooltip content="See more projects" side="left">
                <div>
                  <ShadowButton icon={<SiGithub />} title="Github" />
                </div>
              </Tooltip>
            </a>
          </div>
        </motion.div>
        <div className="flex w-full flex-col gap-4 lg:gap-12">
          {projects.map((project) => (
            <DisplayProject key={project.name} {...project} />
          ))}
        </div>
        <motion.div
          className="mt-6 flex w-full justify-end"
          variants={itemVariant}
        >
          <NextArrow content="Contact me" href="/contact" />
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
