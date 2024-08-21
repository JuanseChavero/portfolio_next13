import { m } from "framer-motion";
import { InternalNavigator } from "./InternalNavigator";
import { CompanyExperience, Experience } from "../../../data/experiences";

function DataHeader({ title }: { title: string }) {
  return (
    <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
  );
}

export function ExperienceHeader({
  selectedCompany,
  selectedExperience,
  previousExperience,
  nextExperience,
  experienceIndex,
  totalExperiences,
}: {
  selectedCompany: CompanyExperience;
  selectedExperience: Experience;
  previousExperience: () => void;
  nextExperience: () => void;
  experienceIndex: number;
  totalExperiences: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col items-start flex-1 order-2 gap-2 sm:order-1">
        <div className="flex items-end gap-6">
          <div className="w-auto">
            <DataHeader title="Company" />
            <p className="text-base font-bold text-primary">
              <m.a
                href={selectedCompany.companySite}
                target="_blank"
                rel="noreferrer"
                aria-label={`Link to ${selectedCompany.company} website`}
                className="flex items-start font-header hover:text-black dark:hover:text-white"
                title="Link to company website"
              >
                {selectedCompany.company}
              </m.a>
            </p>
          </div>
          <div className="w-auto">
            <DataHeader title="Date range" />
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              {selectedExperience.startDate} -{" "}
              {selectedExperience.endDate ?? "Present"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="w-auto">
            <DataHeader title="Role" />
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              {selectedExperience.role}
            </p>
          </div>
          <div className="w-auto">
            <DataHeader title="Modality" />
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              {selectedExperience.modality ?? "-"}
            </p>
          </div>
          <div className="w-auto">
            <DataHeader title="Workload" />
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              {selectedExperience.time ?? "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Company experiences navigation */}
      {totalExperiences > 1 && (
        <InternalNavigator
          previousExperience={previousExperience}
          nextExperience={nextExperience}
          experienceIndex={experienceIndex}
          totalExperiences={totalExperiences}
        />
      )}
    </div>
  );
}
