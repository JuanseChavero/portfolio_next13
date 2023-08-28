import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import paintShop from "~/images/projects/paint-shop.png";

export type Project = {
  name: string;
  description: ReactElement;
  image: string | StaticImageData;
  imageAlignment: "left" | "right";
  siteUrl: string;
  githubUrl: string;
  technologiesUsed: string[];
};

export const projects: Project[] = [
  // {
  //   name: 'Blog App',
  //   description: (
  //     <p>
  //       A full stack web application built using technologies such as React,
  //       Node.js, and MongoDB, designed to have a similar functionality to
  //       Reddit, that began as an exercise of the FullStackOpen course.
  //     </p>
  //   ),
  //   image: '',
  //   imageAlignment: 'left',
  //   siteUrl: 'https://pintureria-arcobaleno.netlify.app',
  //   githubUrl:
  //     'https://github.com/JuanseChavero/FullstackOpen-2022-part7/tree/main/bloglist',
  //   technologiesUsed: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
  // },
  {
    name: "Paint Shop App",
    description: (
      <p>
        One of the final projects of my carrer was based on a paint shop in my
        city. The website project provides an online platform for customers to
        browse paint products, place orders, and schedule appointments with the
        shop.
      </p>
    ),
    image: paintShop,
    imageAlignment: "right",
    siteUrl: "https://pintureria-arcobaleno.netlify.app",
    githubUrl: "https://github.com/JuanseChavero/pintureria_arcobaleno-web",
    technologiesUsed: ["React", "Bootstrap"],
  },
];
