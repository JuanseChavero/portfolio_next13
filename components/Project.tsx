import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { Variants, m } from "framer-motion";
import { Project } from "@/data/projects";
import Tooltip from "@/components/Tooltip";

export default function DisplayProject({
  name,
  description,
  image,
  imageAlignment,
  siteUrl,
  githubUrl,
  technologiesUsed,
}: Project) {
  const alignmentIsLeft = imageAlignment === "left";

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
        x: { type: "spring", duration: 2, bounce: 0 },
      },
    },
  };

  const descriptionVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1.25, type: "spring", bounce: 0 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <m.div
        className={`relative hidden h-[20rem] w-full items-center lg:flex ${
          alignmentIsLeft ? "justify-start" : "justify-end"
        }`}
        initial="hidden"
        animate="visible"
      >
        {/* Project Image */}
        <m.div
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
              alt={`${name} screenshot`}
              className="object-cover h-full"
              src={image}
              priority
            />
            <div className="absolute inset-0 w-full h-full transition-all bg-primary/30 group-hover:hidden" />
          </a>
        </m.div>

        {/* Project Description */}
        <div
          className={`pointer-events-none absolute z-10 flex h-full w-2/4 flex-col justify-center gap-4 ${
            alignmentIsLeft ? "right-0 items-end" : "left-0"
          }`}
        >
          {/* Title */}
          <m.div
            className={`pointer-events-auto flex w-max flex-col ${
              alignmentIsLeft ? "text-end" : "text-start"
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
              <h3 className="text-2xl font-bold text-start text-primary group-hover:text-black dark:group-hover:text-white">
                {name}
              </h3>
            </a>
          </m.div>

          {/* Description */}
          <m.div
            variants={descriptionVariant}
            className={`pointer-events-auto flex h-min flex-col gap-2 rounded bg-gradient-to-r from-secondary to-orange-500 px-6 py-4 shadow-lg`}
          >
            <span
              className={`${
                alignmentIsLeft ? "text-end" : "text-start"
              } font-semibold text-white`}
            >
              {description}
            </span>
          </m.div>

          {/* Footer */}
          <div className="flex flex-col w-full gap-4">
            <m.div
              variants={itemVariant}
              className={`pointer-events-auto flex ${
                alignmentIsLeft ? "justify-end" : "justify-start"
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
            </m.div>
            <m.div
              variants={itemVariant}
              className={`pointer-events-auto flex items-center gap-4 ${
                alignmentIsLeft ? "justify-end" : "justify-start"
              }`}
            >
              <Tooltip content="Github repository" side="bottom">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                  aria-label={`Link to ${name} repository`}
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
            </m.div>
          </div>
        </div>
      </m.div>

      {/* Mobile */}
      <m.div
        variants={imageVariant}
        className={`relative block h-max w-full rounded border-2 border-primary bg-gray-200 p-6 shadow-md dark:bg-neutral-900 lg:hidden`}
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
              <h3 className="text-2xl font-semibold text-primary">{name}</h3>
            </a>
          </div>
          <div className="text-gray-900 dark:text-gray-300">{description}</div>
          {/* Footer */}
          <div className="flex flex-col w-full gap-4 mt-4">
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
                  aria-label={`Link to ${name} repository`}
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
      </m.div>
    </>
  );
}
