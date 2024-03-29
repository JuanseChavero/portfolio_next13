"use client";

import { m } from "framer-motion";
import { containerVariant, itemVariant } from "@/utils/motion";
import { my } from "@/data/personal";
import { experiences } from "@/data/experiences";
import NextArrow from "@/components/NextArrow";
import Heading from "@/components/Heading";
import WorkExperience from "@/components/WorkExperience";

export default function About() {
  return (
    <m.div
      className="container flex flex-col max-w-5xl text-lg md:text-justify"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <Heading title="Introduction" variants={itemVariant} />
      <div className="space-y-4 text-lg">
        <m.p variants={itemVariant}>
          Hi, my name is <span className="text-secondary">{my.name}</span> and I
          am a <span className="text-secondary">full-stack developer</span> and{" "}
          <span className="text-secondary">systems analyst</span> based in
          Argentina. I have had a lifelong interest in computers and software.
          My career in Systems Analysis deepened my understanding of the
          software development process. Additionally, I have developed my skills
          through self-study, familiarizing myself with general programming
          skills, various languages and frameworks.
        </m.p>
        <m.p variants={itemVariant}>
          As of today, I&apos;m lucky to say that I have experience working on
          projects that required technical proficiency and problem-solving,
          developing and maintaining large-scale software systems.
        </m.p>
      </div>
      <m.div className="flex flex-col items-center justify-center mt-2 text-center">
        <Heading
          title="My professional experience"
          titleSize="small"
          titleAlignment="center"
          variants={itemVariant}
        />
        <m.div className="mt-1 mb-6 text-center" variants={itemVariant}>
          Here&apos;s what I&apos;ve been up to in my carrer.
          <br />
          You can also see these more in detail in{" "}
          <m.a
            className="relative text-secondary"
            target="_blank"
            initial="idle"
            whileHover="hover"
            animate="idle"
            href={my.resume}
          >
            <span>my resume</span>
            <m.div
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              variants={{
                idle: { width: "10%" },
                hover: { width: "100%" },
              }}
            />
          </m.a>
          .
        </m.div>
        <WorkExperience experiences={experiences} variants={itemVariant} />
      </m.div>
      <m.div className="flex justify-end w-full mt-3" variants={itemVariant}>
        <NextArrow content="Check out my skills" href="/skills" />
      </m.div>
    </m.div>
  );
}
