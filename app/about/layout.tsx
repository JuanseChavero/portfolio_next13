export const metadata = {
  title: 'About me',
  description: 'Know more about me.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
