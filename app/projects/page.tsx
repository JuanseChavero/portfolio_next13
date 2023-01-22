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
        className="container flex flex-col items-start max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <Heading title="Projects" variants={itemVariant} />
        <motion.div
          className="flex flex-col justify-between w-full gap-4 mb-6 md:flex-row md:items-center"
          variants={itemVariant}
        >
          <p className="text-xl">
            I&apos;m currently working on a{' '}
            <a
              className="text-primary underline-offset-2 hover:underline"
              href={`${my.github}/FullstackOpen-2022-part7/tree/main/bloglist`}
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Fullstack Blog App repository"
            >
              Fullstack Blog App
            </a>
            , similar to Reddit.
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
        <div className="flex flex-col w-full gap-4 lg:gap-12">
          {projects.map((project) => (
            <DisplayProject key={project.name} {...project} />
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
