import { ReactElement } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

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
    content: 'Juan Segundo Chavero',
    href: 'https://www.linkedin.com/in/juan-segundo-chavero/',
    linkContent: 'Chat with me',
  },
  {
    icon: <FaEnvelope className={iconStyle} />,
    title: 'Email',
    content: 'juansechavero@gmail.com',
    href: 'mailto:juansechavero@gmail.com',
    linkContent: 'Send me a message',
  },
];
