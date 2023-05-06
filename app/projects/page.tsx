"use client";

import { m } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { containerVariant, itemVariant } from "@/utils/motion";
import { my } from "@/data/personal";
import { projects } from "@/data/projects";
import Heading from "@/components/Heading";
import NextArrow from "@/components/NextArrow";
import DisplayProject from "@/components/Project";
import ShadowButton from "@/components/ShadowButton";
import Tooltip from "@/components/Tooltip";

export default function Projects() {
  return (
    <m.div
      className="container flex flex-col items-start max-w-5xl"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <Heading title="Projects" variants={itemVariant} />
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
