import { m } from "framer-motion";
import { my } from "@/data/personal";

export default function VerticalEmail() {
  return (
    <m.div
      className="fixed flex-col items-center justify-center hidden h-screen gap-6 right-8 md:flex xl:right-12"
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 400 }}
      transition={{
        y: { type: "spring", bounce: 0, duration: 1.5, delay: 1.25 },
      }}
    >
      <m.div className="h-full" />
      <m.a
        className="text-gray-400 outline-none [writing-mode:vertical-lr] hocus:text-primary"
        initial={{ letterSpacing: "0.05em" }}
        whileHover={{ letterSpacing: "0.1em" }}
        whileFocus={{ letterSpacing: "0.1em" }}
        aria-label="Link to my email"
        href={`mailto:${my.email}`}
        title="Email"
      >
        {my.email}
      </m.a>
      <m.div className="h-40 w-[2px] rounded-full bg-primary" />
    </m.div>
  );
}
