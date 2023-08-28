import { m } from "framer-motion";
import { ReactNode } from "react";

interface ShadowButtonProps {
  icon?: ReactNode;
  title: string;
}

export default function ShadowButton({ icon, title }: ShadowButtonProps) {
  return (
    <m.div className="relative flex items-center justify-center w-48 h-12 cursor-pointer grow">
      <m.div
        className="flex items-center justify-center w-full h-full gap-2 px-6 bg-white border-2 border-black rounded shadow hover:bg-secondary dark:border-neutral-100 dark:bg-neutral-900 dark:hover:bg-secondary"
        whileTap={{ x: "6px", y: "6px" }}
        whileHover={{ x: "-0.1rem", y: "-0.1rem" }}
      >
        {icon}
        <span className="font-medium tracking-wide uppercase">{title}</span>
      </m.div>
      <div className="absolute -right-[6px] -bottom-[6px] -z-10 h-full w-full rounded bg-neutral-800 dark:bg-neutral-100" />
    </m.div>
  );
}
