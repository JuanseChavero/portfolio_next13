import { WithChildren } from '@/types';

export const metadata = {
  title: 'My skills',
  description: 'Take a look at my skills.',
};

export default function Layout({ children }: WithChildren) {
  return <>{children}</>;
}
