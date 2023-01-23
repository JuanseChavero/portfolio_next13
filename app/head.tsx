'use client';

import DefaultTags from './defaultTags';

export default function Head() {
  return (
    <>
      <title>Juan S. Chavero | Portfolio</title>
      <meta
        name="description"
        content="I am a software developer with a passion for creating elegant, efficient, and user-friendly solutions. My skills include expertise in various programming languages and frameworks such as React, Flutter, NextJS, NodeJS, Express, Typescript and more."
      />
      <link rel="canonical" href="https://juansegundochavero.vercel.app" />
      <DefaultTags />
    </>
  );
}
