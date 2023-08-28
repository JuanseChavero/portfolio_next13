import { WithChildren } from "@/types";

export const metadata = {
  title: "My projects",
  description: "Take a look at my personal projects.",
};

export default function Layout({ children }: WithChildren) {
  return <>{children}</>;
}
