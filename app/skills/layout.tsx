export const metadata = {
  title: 'My skills',
  description: 'Take a look at my skills.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
