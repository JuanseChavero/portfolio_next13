import { CompanyExperience } from "@/data/experiences";
import {
  AnimatePresence,
  LayoutGroup,
  m,
  useAnimationControls,
  Variants,
} from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Tooltip from "./Tooltip";

interface WorkExperienceProps {
  experiences: CompanyExperience[];
  variants?: Variants;
}

export default function WorkExperience({
  experiences,
  variants,
}: WorkExperienceProps) {
  const [activeCompany, setActiveCompany] = useState(experiences[0].company);
  const [activeExperience, setActiveExperience] = useState(
    experiences[0].experience[0].startDate
  );
  const selectedCompany =
    experiences.find((experience) => experience.company === activeCompany) ??
    experiences[0];
  const totalExperiences = selectedCompany.experience.length;
  const selectedExperience = selectedCompany.experience.find(
    (experience) => experience.startDate === activeExperience
  );
  const experienceIndex = selectedCompany.experience.findIndex(
    (experience) => experience.startDate === activeExperience
  );
  const controls = useAnimationControls();

  const previousExperience = () => {
    const canGoBack = experienceIndex > 0;
    if (!selectedCompany || !canGoBack) return;
    setActiveExperience(
      selectedCompany.experience[experienceIndex - 1].startDate
    );
  };

  const nextExperience = () => {
    const canGoFoward = experienceIndex < totalExperiences - 1;
    if (!selectedCompany || !canGoFoward) return;
    setActiveExperience(
      selectedCompany.experience[experienceIndex + 1].startDate
    );
  };

  const onClick = async (company: string) => {
    const clickedCompany = experiences.find(
      (experience) => experience.company === company
    );
    if (!clickedCompany) return;

    setActiveCompany(company);
    setActiveExperience(clickedCompany.experience[0].startDate);
    await controls.start({ opacity: 0 });
    await controls.start({ opacity: 1 });
  };

  return (
    <m.div
      className="container flex flex-col max-w-2xl rounded-md text-start lg:flex-row min-h-96"
      variants={variants}
    >
      {/* Companies List */}
      <div className="w-auto">
        <ul className="flex flex-row overflow-x-auto text-center scrollbar lg:w-40 lg:flex-col lg:overflow-x-clip">
          <LayoutGroup>
            {experiences.map(({ company }) => (
              <m.li
                key={company}
                onClick={() => onClick(company)}
                className="relative flex-1 p-4 rounded cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"
              >
                {company}
                {/* Navigation active bar */}
                <AnimatePresence>
                  {selectedCompany?.company === company && (
                    <m.div
                      key={company}
                      layoutId="company"
                      className="absolute bottom-0 left-0 right-0 w-full h-1 -z-10 lg:left-auto lg:right-0 lg:h-full lg:w-1"
                      initial={false}
                      animate={{ backgroundColor: "#fb7e14" }}
                      transition={{ type: "tween", duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
                {/* Navigation scroll background */}
                <div className="absolute top-0 bottom-0 right-0 hidden w-1 h-full -z-20 bg-gray-500/50 lg:block" />
                <div className="absolute bottom-0 left-0 right-0 block w-full h-1 bg-gray-200 dark:bg-gray-500 -z-20 lg:hidden" />
              </m.li>
            ))}
          </LayoutGroup>
        </ul>
      </div>

      {/* Selected Experience */}
      <div className="flex-1">
        {selectedCompany && selectedExperience ? (
          <m.article
            className="flex flex-col px-1 py-4 lg:px-6 lg:py-0"
            initial={false}
            animate={controls}
            transition={{ opacity: { duration: 0.2 } }}
          >
            {/* Experience information */}
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col items-start flex-1 order-2 sm:order-1">
                <div className="flex items-end gap-6">
                  <div className="w-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Company
                    </span>
                    <p className="text-base font-bold text-primary">
                      <m.a
                        href={selectedCompany.companySite}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Link to ${selectedCompany.company} website`}
                        className="flex items-start font-header hover:text-black dark:hover:text-white"
                      >
                        {selectedCompany.company}
                      </m.a>
                    </p>
                  </div>
                  <div className="w-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Date range
                    </span>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {selectedExperience.startDate} -{" "}
                      {selectedExperience.endDate ?? "Present"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="w-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Role
                    </span>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {selectedExperience.role}
                    </p>
                  </div>
                  <div className="w-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Modality
                    </span>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {selectedExperience.modality ?? "-"}
                    </p>
                  </div>
                  <div className="w-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Workload
                    </span>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {selectedExperience.time ?? "-"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company experiences navigation */}
              {totalExperiences > 1 && (
                <div className="flex items-center order-1 gap-1 h-fit sm:order-2">
                  <Tooltip content="Previous" side="bottom">
                    <button
                      aria-label="Previous experience"
                      onClick={previousExperience}
                      disabled={experienceIndex <= 0}
                      className="flex items-center justify-center w-10 h-10 p-1 rounded-full group hover:bg-white/10 disabled:hover:bg-transparent"
                    >
                      <ChevronLeftIcon className="w-8 h-8 -ml-0.5 fill-primary group-disabled:fill-gray-400 dark:group-disabled:fill-gray-500" />
                    </button>
                  </Tooltip>
                  <span className="flex gap-1 text-sm text-gray-400 cursor-default dark:text-gray-300">
                    <span
                      aria-label="Current experience number"
                      className="text-secondary"
                    >
                      {experienceIndex + 1}
                    </span>
                    <span>/</span>
                    <span aria-label="Total experiences">
                      {totalExperiences}
                    </span>
                  </span>
                  <Tooltip content="Next" side="bottom">
                    <button
                      aria-label="Next experience"
                      onClick={nextExperience}
                      disabled={experienceIndex >= totalExperiences - 1}
                      className="flex items-center justify-center w-10 h-10 p-1 rounded-full group hover:bg-white/10 disabled:hover:bg-transparent"
                    >
                      <ChevronRightIcon className="w-8 h-8 -mr-0.5 fill-primary group-disabled:fill-gray-400 dark:group-disabled:fill-gray-500" />
                    </button>
                  </Tooltip>
                </div>
              )}
            </div>

            {/* Experience content */}
            <div className="mt-4 min-h-[13rem]">
              <p className="mb-3 text-xl font-semibold text-primary">
                {!selectedExperience.endDate ? "What I'm doing" : "What I did"}
              </p>
              <ul className="ml-4 space-y-2 list-disc marker:text-primary">
                {selectedExperience.contents.map((content) => (
                  <li
                    key={content}
                    className="pl-2 text-base text-gray-700 dark:text-gray-300"
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </m.article>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            Looks like something went wrong
          </div>
        )}
      </div>
    </m.div>
  );
}
