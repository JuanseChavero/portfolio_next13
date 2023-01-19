import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaEnvelopeSquare,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
} from 'react-icons/fa';

interface Contact {
  icon: ReactNode;
  title: string;
  content: string;
  href: string;
  linkContent: string;
}

export const waysOfContact: Contact[] = [
  {
    icon: <FaLinkedin className="h-8 w-8" />,
    title: 'Linkedin',
    content: 'Juan Segundo Chavero',
    href: 'https://www.linkedin.com/in/juan-segundo-chavero/',
    linkContent: 'Chat with me',
  },
  {
    icon: <FaEnvelope className="h-8 w-8" />,
    title: 'Email',
    content: 'juansechavero@gmail.com',
    href: 'mailto:juansechavero@gmail.com',
    linkContent: 'Send me a message',
  },
];

export default function ContactCard(wayToContact: Contact) {
  return (
    <motion.div className="group relative h-40 flex-1 rounded border border-primary bg-white px-4 py-5 shadow-md dark:bg-neutral-900">
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-transparent transition-all group-hover:bg-primary/10" />
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-1">
        {wayToContact.icon}
        <h5 className="text-lg font-semibold">{wayToContact.title}</h5>
        <p className="font-medium tracking-wide text-gray-600 dark:text-gray-400">
          {wayToContact.content}
        </p>
        <a
          target="_blank"
          href={wayToContact.href}
          rel="noreferrer"
          className="mt-2 font-header text-secondary"
        >
          {wayToContact.linkContent}
        </a>
      </div>
    </motion.div>
  );
}
