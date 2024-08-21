import Tooltip from "../../Misc/Tooltip";
import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";

export function InternalNavigator({
  previousExperience,
  nextExperience,
  experienceIndex,
  totalExperiences,
}: {
  previousExperience: () => void;
  nextExperience: () => void;
  experienceIndex: number;
  totalExperiences: number;
}) {
  return (
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
        <span aria-label="Current experience number" className="text-secondary">
          {experienceIndex + 1}
        </span>
        <span>/</span>
        <span aria-label="Total experiences">{totalExperiences}</span>
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
  );
}
