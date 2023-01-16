'use client';

import { motion } from 'framer-motion';
import Heading from '../../components/Heading';
import NextArrow from '../../components/NextArrow';
import PageWrapper from '../../components/PageWrapper';

export default function Projects() {
  return (
    <PageWrapper>
      <div className="container flex flex-col max-w-5xl">
        <Heading title="Projects" variants={{}} />
        <p>Projectos</p>
        <div className="flex justify-end w-full">
          <NextArrow content="Contact me" href="/contact" />
        </div>
      </div>
    </PageWrapper>
  );
}
