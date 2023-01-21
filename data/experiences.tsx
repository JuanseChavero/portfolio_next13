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
    company: 'Tesys',
    companySite: 'https://www.tesysweb.com',
    startDate: 'May 2021',
    endDate: 'May 2022',
    role: 'Frontend lead',
    modality: 'On-site',
    time: 'Full-time',
    contents: [
      'Worked daily with a team of four people to build a complex managment system for a specific type of company.',
      'Developed primarly with Flutter and Dart, aiming for a multi-platform experience.',
      'Improved the design of already existing websites, using plain HTML, CSS and JavaScript.',
      'Provided IT support for my co-workers with technical issues.',
    ],
  },
];
