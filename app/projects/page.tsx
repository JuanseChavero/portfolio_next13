'use client';

import { motion } from 'framer-motion';
import Heading from '../../components/Heading';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import { containerVariant, itemVariant } from '../../utils/motion';
import Project, { projects } from '../../components/Project';
import { SiGithub } from 'react-icons/si';
import ShadowButton from '../../components/ShadowButton';
import Tooltip from '../../components/Tooltip';

export default function Projects() {
  return (
    <PageWrapper>
      <motion.div
        className="container flex flex-col items-start max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Projects" variants={itemVariant} />
        <div className="flex flex-col justify-between w-full gap-4 mb-6 md:flex-row md:items-center">
          <p className="text-lg">
            I&apos;m currently working on a{' '}
            <a
              className="text-primary underline-offset-2 hover:underline"
              href="https://github.com/JuanseChavero/FullstackOpen-2022-part7/tree/main/bloglist"
              target="_blank"
              rel="noreferrer"
            >
              Fullstack Blog App
            </a>
            , similar to Reddit.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/JuanseChavero"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="See more projects" side="left">
                <div>
                  <ShadowButton icon={<SiGithub />} title="Github" />
                </div>
              </Tooltip>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:gap-12">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
        <motion.div
          className="flex justify-end w-full mt-6"
          variants={itemVariant}
        >
          <NextArrow content="Contact me" href="/contact" />
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
