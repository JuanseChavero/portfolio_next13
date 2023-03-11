export const metadata = {
  title: 'My projects',
  description: 'Take a look at my personal projects.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
