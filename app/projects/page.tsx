'use client';

import { motion } from 'framer-motion';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';

export default function Projects() {
  return (
    <PageWrapper>
      <div className="container flex max-w-5xl flex-col">
        <motion.h3 className="my-4 font-header text-5xl font-bold text-orange">
          Projects
        </motion.h3>
        <p>Projectos</p>
        <div className="flex w-full justify-end">
          <NextArrow content="Contact me" href="/contact" />
        </div>
      </div>
    </PageWrapper>
  );
}
