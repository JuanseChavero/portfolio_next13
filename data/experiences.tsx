export type Experience = {
  company: string;
  companySite?: string;
  startDate: string;
  endDate: string;
  role: string;
  modality?: string;
  time?: string;
  contents: string[];
};

export const experiences: Experience[] = [
  {
    company: "Latech",
    companySite: "https://latechfactory.com",
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
  {
    company: "Tesys",
    companySite: "https://www.tesysweb.com",
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
];
