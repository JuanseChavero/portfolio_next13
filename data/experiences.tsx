export type CompanyExperience = {
  company: string;
  companySite?: string;
  experience: Experience[];
};

export type Experience = {
  startDate: string;
  endDate: string;
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
        endDate: "Today",
        role: "Fullstack Developer",
        modality: "Remote",
        time: "Full-time",
        contents: [
          "Working remotely in a project with a custom-made Shopify framework, using JavaScript/TypeScript and React.",
          "Creating new features, developing new websites and mantaining projects with a team.",
          "Cooperating closely with the client's team to develop the best possible product.",
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
        role: "Frontend lead",
        modality: "On-site",
        time: "Full-time",
        contents: [
          "Worked daily with a team of four people to build a complex managment system for a specific type of company.",
          "Developed primarly with Flutter and Dart, aiming for a multi-platform experience.",
          "Improved the design of already existing websites, using plain HTML, CSS and JavaScript.",
        ],
      },
      {
        startDate: "Feb 2023",
        endDate: "May 2023",
        role: "Frontend developer",
        modality: "Remote",
        time: "Full-time",
        contents: [
          "Implemented a thorough API structure refactor to improve app security.",
          "Diligently maintained and supported the app.",
          "Continuously enhanced the app to optimize the user experience.",
        ],
      },
    ],
  },
];
