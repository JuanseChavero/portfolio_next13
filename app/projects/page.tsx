'use client';

import { m } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { containerVariant, itemVariant } from '@/utils/motion';
import { my } from '@/data/personal';
import { projects } from '@/data/projects';
import Heading from '@/components/Heading';
import NextArrow from '@/components/NextArrow';
import DisplayProject from '@/components/Project';
import ShadowButton from '@/components/ShadowButton';
import Tooltip from '@/components/Tooltip';

export default function Projects() {
  return (
    <m.div
      className="container flex flex-col items-start max-w-5xl"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <Heading title="Projects" variants={itemVariant} />
      <m.div
        className="flex flex-col justify-between w-full gap-4 mb-8 md:flex-row md:items-center"
        variants={itemVariant}
      >
        <p className="text-xl">
          <span className="font-bold">STATUS:</span>
          &nbsp; I&apos;m currently working remotely on a few projects. Looking
          for more job opportunities.{' '}
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
      </m.div>
      <div className="flex flex-col w-full gap-4 lg:gap-12">
        {projects.map((project) => (
          <DisplayProject key={project.name} {...project} />
        ))}
      </div>
      <m.div className="flex justify-end w-full mt-6" variants={itemVariant}>
        <NextArrow content="Contact me" href="/contact" />
      </m.div>
    </m.div>
  );
}
