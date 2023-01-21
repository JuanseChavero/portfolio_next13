import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimationControls,
  Variants,
} from 'framer-motion';
import { useState } from 'react';

interface Experience {
  company: string;
  companySite?: string;
  startDate: string;
  endDate: string;
  role: string;
  modality?: string;
  time?: string;
  contents: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
  variants?: Variants;
}

export const experiences = [
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

export default function WorkExperience({
  experiences,
  variants,
}: WorkExperienceProps) {
  const [active, setActive] = useState(experiences[0].company);
  const controls = useAnimationControls();
  const selectedExperience = experiences.find(
    (experience) => experience.company === active,
  );

  const onClick = async (company: string) => {
    setActive(company);
    await controls.start({ opacity: 0 });
    await controls.start({ opacity: 1 });
  };

  return (
    <motion.div
      className="container flex max-w-2xl flex-col rounded-md text-start lg:flex-row"
      variants={variants}
    >
      {/* Works List */}
      <div className="">
        <ul className="flex flex-row overflow-x-scroll text-center lg:w-40 lg:flex-col lg:overflow-x-clip">
          <LayoutGroup>
            {experiences.map(({ company }) => (
              <motion.li
                key={company}
                onClick={() => onClick(company)}
                className="relative flex-1 cursor-pointer rounded p-4 hover:bg-black/10 dark:hover:bg-white/10"
              >
                {company}
                <AnimatePresence>
                  {selectedExperience?.company === company && (
                    <motion.div
                      key={company}
                      layoutId="company"
                      className="absolute bottom-0 left-0 right-0 -z-10 h-1 w-full lg:right-0 lg:left-auto lg:h-full lg:w-1"
                      initial={false}
                      animate={{ backgroundColor: '#fb7e14' }}
                      transition={{ type: 'tween', duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
                <div className="absolute top-0 bottom-0 right-0 -z-20 hidden h-full w-1 bg-gray-500/50 lg:block" />
                <div className="absolute bottom-0 left-0 right-0 -z-20 block h-1 w-full bg-white/20 lg:hidden" />
              </motion.li>
            ))}
          </LayoutGroup>
        </ul>
      </div>

      {/* Selected Experience */}
      <div className="flex-1">
        {selectedExperience ? (
          <motion.dl
            className="flex flex-col px-1 py-4 lg:py-2 lg:px-6"
            initial={false}
            animate={controls}
          >
            <div className="flex items-start gap-6 pb-3">
              <div className="">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Company
                </dt>
                <dd className="text-xl font-bold text-primary">
                  <motion.a
                    href={selectedExperience.companySite}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Link to ${selectedExperience.company} website`}
                    className="flex items-start font-header hover:text-black dark:hover:text-white"
                  >
                    {selectedExperience.company}
                  </motion.a>
                </dd>
              </div>
              <div className="">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Date range
                </dt>
                <dd className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.startDate} - {selectedExperience.endDate}
                </dd>
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <div className="w-32">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Role
                </dt>
                <dd className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.role}
                </dd>
              </div>

              <div className="w-20">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Modality
                </dt>
                <dd className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.modality ?? '-'}
                </dd>
              </div>

              <div className="w-20">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Workload
                </dt>
                <dd className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.time ?? '-'}
                </dd>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="mb-3 text-xl font-semibold text-primary">
                What I did
              </h5>
              <ul className="ml-4 list-disc space-y-2 marker:text-primary">
                {selectedExperience.contents.map((content) => (
                  <li
                    key={content}
                    className="pl-2 text-base text-neutral-500 dark:text-gray-400"
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </motion.dl>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            Looks like something went wrong
          </div>
        )}
      </div>
    </motion.div>
  );
}
