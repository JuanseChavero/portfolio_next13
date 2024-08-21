import { AnimatePresence, m } from "framer-motion";
import { CompanyExperience } from "../../../data/experiences";

export function CompanySelector({
  company,
  selectedCompany,
  onClick,
}: {
  company: string;
  selectedCompany: CompanyExperience;
  onClick: (company: string) => void;
}) {
  const isSelected = selectedCompany?.company === company;

  return (
    <m.li
      key={company}
      onClick={() => onClick(company)}
      className={`relative flex-1 p-4 rounded cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-all`}
    >
      {company}
      {/* Navigation active bar */}
      <AnimatePresence>
        {isSelected && (
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
  );
}
