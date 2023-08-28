import { WithChildren } from "@/types";

export const metadata = {
  title: "Contact me",
  description: "Feel free to contact me.",
};

export default function Layout({ children }: WithChildren) {
  return <>{children}</>;
}
