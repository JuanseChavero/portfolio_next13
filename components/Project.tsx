import Image from 'next/image';
import { ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import Tooltip from './Tooltip';
import { Variants, motion } from 'framer-motion';

interface ProjectProps {
  name: string;
  description: ReactNode;
  image: string;
  imageAlignment: 'left' | 'right';
  siteUrl: string;
  githubUrl: string;
  technologiesUsed: string[];
}

export const projects: ProjectProps[] = [
  // {
  //   name: 'Blog App',
  //   description: (
  //     <p>
  //       A full stack web application built using technologies such as React,
  //       Node.js, and MongoDB, designed to have a similar functionality to
  //       Reddit, that began as an exercise of the FullStackOpen course.
  //     </p>
  //   ),
  //   image: '/blog.png',
  //   imageAlignment: 'left',
  //   siteUrl: 'https://pintureria-arcobaleno.netlify.app',
  //   githubUrl:
  //     'https://github.com/JuanseChavero/FullstackOpen-2022-part7/tree/main/bloglist',
  //   technologiesUsed: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
  // },
  {
    name: 'Paint Shop App',
    description: (
      <p>
        One of the final projects of my carrer was based on a paint shop in my
        city. The website project provides an online platform for customers to
        browse paint products, place orders, and schedule appointments with the
        shop.
      </p>
    ),
    image: '/paint-shop.png',
    imageAlignment: 'right',
    siteUrl: 'https://pintureria-arcobaleno.netlify.app',
    githubUrl: 'https://github.com/JuanseChavero/pintureria_arcobaleno-web',
    technologiesUsed: ['React', 'Bootstrap'],
  },
];

export default function Project({
  name,
  description,
  image,
  imageAlignment,
  siteUrl,
  githubUrl,
  technologiesUsed,
}: ProjectProps) {
  const alignmentIsLeft = imageAlignment === 'left';

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      x: alignmentIsLeft ? 500 : -500,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        x: { type: 'spring', duration: 2 },
      },
    },
  };

  const descriptionVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1.25, type: 'spring', bounce: 0 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.div
        className={`relative hidden h-[20rem] w-full items-center lg:flex ${
          alignmentIsLeft ? 'justify-start' : 'justify-end'
        }`}
        initial="hidden"
        animate="visible"
      >
        {/* Project Image */}
        <motion.div
          className="group relative z-10 h-full w-[60%] overflow-hidden rounded-lg shadow-md"
          variants={imageVariant}
        >
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Link to ${name} website`}
          >
            <Image
              width={0}
              height={0}
              alt={`${name} screenshot`}
              className="h-full w-full object-cover"
              src={image}
              unoptimized
              priority
            />
            <div className="absolute inset-0 h-full w-full bg-primary/30 transition-all group-hover:hidden" />
          </a>
        </motion.div>

        {/* Project Description */}
        <div
          className={`pointer-events-none absolute z-10 flex h-full w-2/4 flex-col justify-center gap-4 ${
            alignmentIsLeft ? 'right-0 items-end' : 'left-0'
          }`}
        >
          {/* Title */}
          <motion.div
            className={`pointer-events-auto flex w-max flex-col ${
              alignmentIsLeft ? 'text-end' : 'text-start'
            }`}
            variants={itemVariant}
          >
            <span className="text-sm text-gray-500">Project</span>
            <a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              className="group"
              aria-label={`Link to ${name} website`}
            >
              <h5 className="text-start text-2xl font-bold text-primary group-hover:text-black dark:group-hover:text-white">
                {name}
              </h5>
            </a>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={descriptionVariant}
            className={`pointer-events-auto flex h-min flex-col gap-2 rounded bg-secondary px-6 py-4 text-white shadow-lg`}
          >
            <div className={alignmentIsLeft ? 'text-end' : 'text-start'}>
              {description}
            </div>
          </motion.div>

          {/* Footer */}
          <div className="flex w-full flex-col gap-4">
            <motion.div
              variants={itemVariant}
              className={`pointer-events-auto flex ${
                alignmentIsLeft ? 'justify-end' : 'justify-start'
              }`}
            >
              <ul className="flex gap-3">
                {technologiesUsed.map((technology) => (
                  <li
                    key={technology}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariant}
              className={`pointer-events-auto flex items-center gap-4 ${
                alignmentIsLeft ? 'justify-end' : 'justify-start'
              }`}
            >
              <Tooltip content="Github repository" side="bottom">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <SiGithub className="h-7 w-7 group-hover:fill-primary" />
                </a>
              </Tooltip>
              <Tooltip content="Website" side="bottom">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                  aria-label={`Link to ${name} website`}
                >
                  <FiExternalLink className="h-7 w-7 group-hover:stroke-primary" />
                </a>
              </Tooltip>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        variants={imageVariant}
        className={`relative block h-max w-full rounded border-2 border-primary bg-neutral-100 p-6 shadow-md dark:bg-neutral-900 lg:hidden`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500">Project</span>
            <a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Link to ${name} website`}
            >
              <h5 className="text-2xl font-semibold text-primary">{name}</h5>
            </a>
          </div>
          <div className="text-gray-900 dark:text-gray-300">{description}</div>
          {/* Footer */}
          <div className="mt-4 flex w-full flex-col gap-4">
            <div className={`pointer-events-auto`}>
              <ul className="flex flex-wrap gap-3">
                {technologiesUsed.map((technology) => (
                  <li
                    key={technology}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`pointer-events-auto flex items-center gap-4`}>
              <Tooltip content="Github repository" side="bottom">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                  aria-label={`Link to ${name} website`}
                >
                  <SiGithub className="h-7 w-7 group-hover:fill-primary" />
                </a>
              </Tooltip>
              <Tooltip content="Website" side="bottom">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                  aria-label={`Link to ${name} website`}
                >
                  <FiExternalLink className="h-7 w-7 group-hover:stroke-primary" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
