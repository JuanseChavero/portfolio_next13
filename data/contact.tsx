import { ReactElement } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import my from './personal';

export type Contact = {
  icon: ReactElement;
  title: string;
  content: string;
  href: string;
  linkContent: string;
};

const iconStyle = 'h-8 w-8';

export const waysOfContact: Contact[] = [
  {
    icon: <FaLinkedin className={iconStyle} />,
    title: 'Linkedin',
    content: my.name,
    href: my.linkedin,
    linkContent: 'Chat with me',
  },
  {
    icon: <FaEnvelope className={iconStyle} />,
    title: 'Email',
    content: my.email,
    href: `mailto:${my.email}`,
    linkContent: 'Send me a message',
  },
];
