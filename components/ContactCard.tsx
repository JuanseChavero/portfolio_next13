import { m } from 'framer-motion';
import { Contact } from '@/data/contact';

export default function ContactCard(wayToContact: Contact) {
  return (
    <m.div className="relative flex-1 h-40 px-4 py-5 bg-white border rounded shadow-md group border-primary dark:bg-neutral-900">
      <div className="absolute inset-0 w-full h-full transition-all bg-transparent pointer-events-none group-hover:bg-primary/10" />
      <div className="relative z-40 flex flex-col items-center justify-center h-full gap-1">
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
          aria-label={`Link to my ${wayToContact.title}`}
        >
          {wayToContact.linkContent}
        </a>
      </div>
    </m.div>
  );
}
