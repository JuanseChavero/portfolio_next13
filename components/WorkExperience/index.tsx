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
import Tooltip from "../Misc/Tooltip";
import { CompanySelector } from "./components/CompanySelector";
import { InternalNavigator } from "./components/InternalNavigator";
import { ExperienceHeader } from "./components/ExperienceHeader";
import { ExperienceInfo } from "./components/ExperienceInfo";

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

    if (!clickedCompany || selectedCompany.company === company) return;

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
              <CompanySelector
                key={company}
                company={company}
                selectedCompany={selectedCompany}
                onClick={() => onClick(company)}
              />
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
            <ExperienceHeader
              selectedExperience={selectedExperience}
              selectedCompany={selectedCompany}
              previousExperience={previousExperience}
              nextExperience={nextExperience}
              experienceIndex={experienceIndex}
              totalExperiences={totalExperiences}
            />

            {/* Experience content */}
            <ExperienceInfo selectedExperience={selectedExperience} />
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
