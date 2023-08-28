import { WithChildren } from "@/types";

export const metadata = {
  title: "About me",
  description: "Know more about me.",
};

export default function Layout({ children }: WithChildren) {
  return <>{children}</>;
}
