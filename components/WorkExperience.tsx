import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimationControls,
  Variants,
} from 'framer-motion';
import { useState } from 'react';
import { Experience } from '../data/experiences';

interface WorkExperienceProps {
  experiences: Experience[];
  variants?: Variants;
}

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
      className="container flex flex-col max-w-2xl rounded-md text-start lg:flex-row"
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
                className="relative flex-1 p-4 rounded cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"
              >
                {company}
                <AnimatePresence>
                  {selectedExperience?.company === company && (
                    <motion.div
                      key={company}
                      layoutId="company"
                      className="absolute bottom-0 left-0 right-0 w-full h-1 -z-10 lg:right-0 lg:left-auto lg:h-full lg:w-1"
                      initial={false}
                      animate={{ backgroundColor: '#fb7e14' }}
                      transition={{ type: 'tween', duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
                <div className="absolute top-0 bottom-0 right-0 hidden w-1 h-full -z-20 bg-gray-500/50 lg:block" />
                <div className="absolute bottom-0 left-0 right-0 block w-full h-1 -z-20 bg-white/20 lg:hidden" />
              </motion.li>
            ))}
          </LayoutGroup>
        </ul>
      </div>

      {/* Selected Experience */}
      <div className="flex-1">
        {selectedExperience ? (
          <motion.article
            className="flex flex-col px-1 py-4 lg:py-0 lg:px-6"
            initial={false}
            animate={controls}
          >
            <div className="flex items-start gap-6 pb-3">
              <div className="">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Company
                </span>
                <p className="text-xl font-bold text-primary">
                  <motion.a
                    href={selectedExperience.companySite}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Link to ${selectedExperience.company} website`}
                    className="flex items-start font-header hover:text-black dark:hover:text-white"
                  >
                    {selectedExperience.company}
                  </motion.a>
                </p>
              </div>
              <div className="">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Date range
                </span>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.startDate} - {selectedExperience.endDate}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <div className="w-32">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Role
                </span>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.role}
                </p>
              </div>

              <div className="w-20">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Modality
                </span>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.modality ?? '-'}
                </p>
              </div>

              <div className="w-20">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Workload
                </span>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {selectedExperience.time ?? '-'}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-3 text-xl font-semibold text-primary">
                What I did
              </p>
              <ul className="ml-4 space-y-2 list-disc marker:text-primary">
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
          </motion.article>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            Looks like something went wrong
          </div>
        )}
      </div>
    </motion.div>
  );
}
