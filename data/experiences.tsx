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
        endDate: "April 2023",
        role: "Frontend Developer",
        modality: "Hybrid",
        time: "Full-time",
        contents: [
          "Planned, designed and developed the entire frontend for a telecommunications management web application.",
          "Worked with Flutter and Dart, aiming for a multi-platform experience.",
          "Mantained and improved already existing websites, using plain HTML, CSS and JavaScript.",
        ],
      },
    ],
  },
];
