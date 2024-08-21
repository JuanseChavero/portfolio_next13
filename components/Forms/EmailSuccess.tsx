import { m } from "framer-motion";
import CheckCircleIcon from "@heroicons/react/20/solid/CheckCircleIcon";

export default function EmailSuccess() {
  return (
    <m.div
      key="message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex h-[460px] w-full flex-col items-center justify-center`}
    >
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircleIcon className="w-24 h-24 fill-green-500" />
      </m.div>
      <div className="max-w-sm">
        <p className="mt-4 text-lg text-center text-green-500">
          Thank you for reaching out.
        </p>
        <p className="mt-4 text-lg text-center text-green-500">
          I have received your message and will get back to you as soon as
          possible.
        </p>
        <p className="mt-4 text-lg text-center text-green-500">
          I appreciate your interest and look forward to discussing your project
          with you!
        </p>
      </div>
    </m.div>
  );
}
