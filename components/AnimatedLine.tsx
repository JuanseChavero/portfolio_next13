import { Variant, m } from "framer-motion";

interface Props {
  className?: string;
  variant?: Variant;
}

export default function AnimatedLine({ className, variant }: Props) {
  return (
    <m.hr
      className={`h-0.5 rounded-full border-none bg-primary ${className}`}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={variant}
    />
  );
}
