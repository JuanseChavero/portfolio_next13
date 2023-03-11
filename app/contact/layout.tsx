export const metadata = {
  title: 'Contact me',
  description: 'Feel free to contact me.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
