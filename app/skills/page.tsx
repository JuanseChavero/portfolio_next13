'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import SkillCard from '../../components/SkillCard';

interface SkillSectionProps {
  title: string;
  children: ReactNode;
}

const SkillSection = ({ title, children }: SkillSectionProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded border bg-gradient-to-br from-primary to-black/10 p-6 shadow-inner">
      {/* <div className="my-4 w-full rounded border-l-[6px] bg-primary"> */}
      <h3 className="text-2xl">{title}</h3>
      {/* </div> */}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
  };

  const code1 = `  export default function Code1() {
    const variable1 = 'something';

    return (
      <div>
        {variable1}
      </div>
    );
  }`;

  return (
    <PageWrapper>
      <motion.div
        className="container flex max-w-5xl flex-col items-start"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <Heading title="Skills" variants={item} titleAlignment="left" />
        <motion.p className="text-justify text-xl" variants={item}>
          I have are a very particular set of skills. Skills I have acquired
          over a very long career. Skills that make me a wonder for people like
          you.
        </motion.p>
        <div className="my-6 flex w-full flex-col justify-between gap-5 md:flex-row">
          {/* <CodeEditor code={code1} /> */}
          {/* <SkillSection title="Frontend">
            <SkillCard
              title="Flutter"
              image="/images/logos/icons8-flutter.svg"
            />
            <SkillCard title="React" image="/images/logos/icons8-react.svg" />
            <SkillCard
              title="NextJS"
              image="/images/logos/icons8-next.js.svg"
            />
          </SkillSection>
          <SkillSection title="Backend">
            <SkillCard title="NodeJS" image="/images/logos/icons8-nodejs.svg" />
            <SkillCard title="Express" image="/images/logos/express-js.svg" />
            <SkillCard title="MySQL" image="/next_js.svg" />
          </SkillSection>
          <SkillSection title="Tools">
            <SkillCard title="Postman" image="/flutter.svg" />
            <SkillCard title="Express" image="/react.svg" />
            <SkillCard title="MySQL" image="/next_js.svg" />
          </SkillSection> */}
        </div>
        <div className="flex w-full justify-end">
          <NextArrow content="My projects" href="/projects" />
        </div>
      </motion.div>
    </PageWrapper>
  );
}
