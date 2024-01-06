export type CompanyExperience = {
  company: string;
  companySite?: string;
  experience: Experience[];
};

export type Experience = {
  startDate: string;
  endDate?: string;
  role: string;
  modality?: string;
  time?: string;
  contents: string[];
};

export const experiences: CompanyExperience[] = [
  {
    company: "Latech",
    companySite: "https://latechfactory.com",
    experience: [
      {
        startDate: "May 2023",
        role: "Fullstack Developer",
        modality: "Remote",
        time: "Full-time",
        contents: [
          "Developing with an custom-built JavaScript framework to build high-performance web pages.",
          "Leading the project, overseeing a team of developers through code reviews and daily communication.",
          "Helping multiple teams by doing research, providing guidance for coding and providing solutions to specific issues.",
        ],
      },
    ],
  },
  {
    company: "Tesys",
    companySite: "https://www.tesysweb.com",
    experience: [
      {
        startDate: "May 2021",
        endDate: "May 2022",
        role: "Frontend Developer",
        modality: "On-site",
        time: "Full-time",
        contents: [
          "Worked with Flutter and Dart, aiming for a multi-platform experience.",
          "Planned, designed and developed the entire frontend for a telecommunications management web application.",
          "Mantained and improved already existing websites, using plain HTML, CSS and JavaScript.",
        ],
      },
      {
        startDate: "Feb 2023",
        endDate: "May 2023",
        role: "Frontend Developer",
        modality: "Remote",
        time: "Full-time",
        contents: [
          "Implemented a thorough API structure refactor to improve app security.",
          "Optimized the app load speed and overall performance.",
          "Re-designed the UI/UX of certain parts of the app.",
        ],
      },
    ],
  },
];
