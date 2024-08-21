import { Experience } from "../../../data/experiences";

export function ExperienceInfo({
  selectedExperience,
}: {
  selectedExperience: Experience;
}) {
  return (
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
  );
}
